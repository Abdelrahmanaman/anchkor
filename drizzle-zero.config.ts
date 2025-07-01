import { drizzleZeroConfig } from "drizzle-zero";
import * as drizzleSchema from "~/db/schema";

export default drizzleZeroConfig(drizzleSchema, {
	tables: {
		verification: false,
		account: false,
		session: false,
		invitation: false,
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
			teamId: true,
		},
		team: {
			id: true,
			organizationId: true,
			name: true,
			createdAt: true,
			updatedAt: true,
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
			parentId: true,
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
			type: true,
			tags: true,
		},
		like: {
			id: true,
			feedbackId: true,
			userId: true,
			createdAt: true, 
			updatedAt: true,
			commentId: true,
		},
	},
	manyToMany: {
		workspace: {
			member: [
				{
					// The path from projects to organizations
					sourceField: ["organizationId"],
					destTable: "organization",
					destField: ["id"],
				},
				{
					// The path from organizations to members
					sourceField: ["id"],
					destTable: "member",

					destField: ["organizationId"],
				},
			],
		},
		member: {
			user: [
				{
					sourceField: ["id"],
					destTable: "member",
					destField: ["id"],
				},
				{
					sourceField: ["userId"],
					destTable: "user",
					destField: ["id"],
				},
			],
		},
	},
});
