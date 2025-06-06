import { createAuthClient } from "better-auth/solid";
import { env } from "~/env";

const authClient = createAuthClient({
	baseURL: env.BETTER_AUTH_URL,
});

export const { signIn, signOut, signUp } = authClient;
