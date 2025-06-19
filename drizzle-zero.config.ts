import { drizzleZeroConfig } from "drizzle-zero";
import * as drizzleSchema from "~/db/schema";

export default drizzleZeroConfig(drizzleSchema, {
	tables: {
		verification: false,
		account: false,
		session: false,
		jwks: false,
		user: {
			id: true,
			name: true,
			email: true,
			image: true,
			emailVerified: true,
			createdAt: true,
			updatedAt: true,
		},
		invitation: false,

		// Organization and members
		organization: {
			id: true,
			slug: true,
			name: true,
			logo: true,
			metadata: true,
			createdAt: true,
		},
		member: {
			id: true,
			organizationId: true,
			userId: true,
			role: true,
			createdAt: true,
		},
		workspace: {
			id: true,
			organizationId: true,
			name: true,
			domain: true,
			workspaceUrl: true,
			logo: true,
			createdAt: true,
			updatedAt: true,
		},
		comment: {
			id: true,
			feedbackId: true,
			userId: true,
			message: true,
			createdAt: true,
			updatedAt: true,
		},
		feedback: {
			id: true,
			workspaceId: true,
			userId: true,
			title: true,
			message: true,
			commentsCount: true,
			likesCount: true,
			status: true,
			// tags: true,
			createdAt: true,
			updatedAt: true,
		},
		like: {
			id: true,
			feedbackId: true,
			userId: true,
			createdAt: true,
			updatedAt: true,
		},
	},
});
