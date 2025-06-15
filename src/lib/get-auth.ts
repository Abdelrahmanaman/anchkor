import { redirect } from "@tanstack/solid-router";
import { createServerFn } from "@tanstack/solid-start";
import { getWebRequest } from "@tanstack/solid-start/server";
import { auth } from "./auth";
export const getSession = createServerFn({ method: "GET" }).handler(
	async () => {
		const request = getWebRequest();
		if (!request) {
			throw redirect({
				to: "/login",
			});
		}
		const session = await auth.api.getSession({
			headers: request.headers,
		});
		if (!session?.user) {
			throw redirect({
				to: "/login",
			});
		}
		return session.user;
	},
);

export const getUserAuth = createServerFn({ method: "GET" }).handler(
	async () => {
		const request = getWebRequest();
		if (!request) {
			throw redirect({
				to: "/login",
			});
		}

		const userSession = auth.api.getSession({
			headers: request.headers,
		});
		const userToken = auth.api.getToken({
			headers: request.headers,
		});

		const [sessionResult, tokenResult] = await Promise.all([
			tryCatch(userSession),
			tryCatch(userToken),
		]);

		const session = sessionResult.data;
		const token = tokenResult.data;

		// // If either session or token is missing, redirect to login
		// if (!session || !token) {
		// 	throw redirect({
		// 		to: "/login",
		// 	});
		// }

		return { jwt: token?.token, user: session?.user };
	},
);

type Success<T> = {
	data: T;
	error: null;
};

type Failure<E> = {
	data: null;
	error: E;
};

type Result<T, E = Error> = Success<T> | Failure<E>;

// Main wrapper function
export async function tryCatch<T, E = Error>(
	promise: Promise<T>,
): Promise<Result<T, E>> {
	try {
		const data = await promise;
		return { data, error: null };
	} catch (error) {
		return { data: null, error: error as E };
	}
}
