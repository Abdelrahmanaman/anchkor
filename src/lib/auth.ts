import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { jwt, organization } from "better-auth/plugins";
import { db } from "~/db/db";
import * as schema from "~/db/schema";
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
	plugins: [
		organization({
			teams: {
				enabled: true,
			},
		}),
		jwt({
			jwt: {
				expirationTime: "1d",
			},
		}),
	],
});
