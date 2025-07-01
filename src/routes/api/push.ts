import {
	PostgresJSConnection,
	PushProcessor,
	ZQLDatabase,
} from "@rocicorp/zero/pg";
import { json } from "@tanstack/solid-start";
import { createServerFileRoute } from "@tanstack/solid-start/server";
import * as jose from "jose";
import postgres from "postgres";
import { schema } from "schema";
import { createMutators } from "zero/mutators";

const pgURL = process.env.DATABASE_URL as string;

const processor = new PushProcessor(
	new ZQLDatabase(new PostgresJSConnection(postgres(pgURL)), schema),
);

export const ServerRoute = createServerFileRoute("/api/push").methods({
	POST: async ({ request }) => {
		const userID = await getUserID(request);
		if (typeof userID === "object") {
			return userID;
		}

		try {
			const result = await processor.process(
				createMutators({ authData: userID ? userID : undefined }),
				request,
			);
			return json(result);
		} catch (err) {
			return json({ error: "Invalid token" }, { status: 401 });
		}
	},
});

async function getUserID(request: Request) {
	const authHeader = request.headers.get("authorization");
	if (!authHeader) {
		return undefined;
	}

	const prefix = "Bearer ";
	if (!authHeader.startsWith(prefix)) {
		return json(
			{ error: "Missing or invalid authorization header" },
			{ status: 401 },
		);
	}

	const token = authHeader.slice(prefix.length);
	const jwks = jose.createRemoteJWKSet(new URL("/api/auth/jwks", request.url));

	const { payload } = await jose.jwtVerify(token, jwks);
	return payload.sub;
}
