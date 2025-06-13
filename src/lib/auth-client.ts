import { createAuthClient } from "better-auth/solid";

const authClient = createAuthClient({
	baseURL: process.env.BETTER_AUTH_URL,
});

export const { signIn, signOut, signUp } = authClient;
