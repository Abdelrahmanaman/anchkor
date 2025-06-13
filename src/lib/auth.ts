import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "~/db/db";
import * as schema from "~/db/schema";
import { organization, jwt } from "better-auth/plugins";
export const auth = betterAuth({
	database: drizzleAdapter(db, {
		provider: "pg",
		schema,
	}),
	emailAndPassword: {
		enabled: true,
	},
	socialProviders: {
		google: {
			clientId: process.env.VITE_GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.VITE_GOOGLE_CLIENT_SECRET as string,
		},
	},
	account: {
		accountLinking: {
			enabled: true,
		},
	},
	plugins: [organization(), jwt()],
});
