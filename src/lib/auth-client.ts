import { jwtClient, organizationClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/solid";

const authClient = createAuthClient({
	baseURL: process.env.BETTER_AUTH_URL,
	plugins: [jwtClient(), organizationClient()],
});

export const { signIn, signOut, signUp, getAccessToken, useSession, token } =
	authClient;
