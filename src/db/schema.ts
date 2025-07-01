import { relations } from "drizzle-orm";
import {
	boolean,
	foreignKey,
	index,
	integer,
	jsonb,
	pgEnum,
	pgTable,
	text,
	timestamp,
	uniqueIndex,
} from "drizzle-orm/pg-core";

// Tables (your existing schema)
// User table
export const user = pgTable(
	"user",
	{
		id: text("id").primaryKey(),
		name: text("name").notNull(),
		email: text("email").notNull().unique(),
		emailVerified: boolean("email_verified")
			.$defaultFn(() => false)
			.notNull(),
		image: text("image"),
		createdAt: timestamp("created_at")
			.$defaultFn(() => new Date())
			.notNull(),
		updatedAt: timestamp("updated_at")
			.$defaultFn(() => new Date())
			.notNull(),
	},
	(table) => [
		index("user_email_idx").on(table.email),
		index("user_created_at_idx").on(table.createdAt),
	],
);

// Session table
export const session = pgTable(
	"session",
	{
		id: text("id").primaryKey(),
		expiresAt: timestamp("expires_at").notNull(),
		token: text("token").notNull().unique(),
		createdAt: timestamp("created_at").notNull(),
		updatedAt: timestamp("updated_at").notNull(),
		ipAddress: text("ip_address"),
		userAgent: text("user_agent"),
		userId: text("user_id")
			.notNull()
			.references(() => user.id, { onDelete: "cascade" }),
		activeOrganizationId: text("active_organization_id"),
	},
	(table) => [
		index("session_user_id_idx").on(table.userId),
		index("session_active_org_idx").on(table.activeOrganizationId),
		index("session_expires_at_idx").on(table.expiresAt),
	],
);

// Organization table
export const organization = pgTable(
	"organization",
	{
		id: text("id").primaryKey(),
		name: text("name").notNull(),
		slug: text("slug").unique(),
		logo: text("logo"),
		createdAt: timestamp("created_at").notNull(),
		metadata: text("metadata"),
	},
	(table) => [
		index("organization_name_idx").on(table.name),
		index("organization_created_at_idx").on(table.createdAt),
	],
);

// Team table
export const team = pgTable(
	"team",
	{
		id: text("id").primaryKey(),
		name: text("name").notNull(),
		organizationId: text("organization_id")
			.notNull()
			.references(() => organization.id, { onDelete: "cascade" }),
		createdAt: timestamp("created_at").notNull(),
		updatedAt: timestamp("updated_at"),
	},
	(table) => [
		index("team_organization_id_idx").on(table.organizationId),
		index("team_name_idx").on(table.name),
		index("team_created_at_idx").on(table.createdAt),
	],
);

// Member table
export const member = pgTable(
	"member",
	{
		id: text("id").primaryKey(),
		organizationId: text("organization_id")
			.notNull()
			.references(() => organization.id, { onDelete: "cascade" }),
		userId: text("user_id")
			.notNull()
			.references(() => user.id, { onDelete: "cascade" }),
		role: text("role").default("member").notNull(),
		teamId: text("team_id").references(() => team.id, { onDelete: "cascade" }), // Updated to reference team table
		createdAt: timestamp("created_at").notNull(),
	},
	(table) => [
		uniqueIndex("member_org_user_idx").on(table.organizationId, table.userId),
		index("member_organization_id_idx").on(table.organizationId),
		index("member_user_id_idx").on(table.userId),
		index("member_role_idx").on(table.role),
		index("member_team_id_idx").on(table.teamId), // Added index for teamId
	],
);

// Account table
export const account = pgTable(
	"account",
	{
		id: text("id").primaryKey(),
		accountId: text("account_id").notNull(),
		providerId: text("provider_id").notNull(),
		userId: text("user_id")
			.notNull()
			.references(() => user.id, { onDelete: "cascade" }),
		accessToken: text("access_token"),
		refreshToken: text("refresh_token"),
		idToken: text("id_token"),
		accessTokenExpiresAt: timestamp("access_token_expires_at"),
		refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
		scope: text("scope"),
		password: text("password"),
		createdAt: timestamp("created_at").notNull(),
		updatedAt: timestamp("updated_at").notNull(),
	},
	(table) => [
		index("account_user_id_idx").on(table.userId),
		index("account_provider_id_idx").on(table.providerId),
	],
);

// Verification table
export const verification = pgTable(
	"verification",
	{
		id: text("id").primaryKey(),
		identifier: text("identifier").notNull(),
		value: text("value").notNull(),
		expiresAt: timestamp("expires_at").notNull(),
		createdAt: timestamp("created_at").$defaultFn(() => new Date()),
		updatedAt: timestamp("updated_at").$defaultFn(() => new Date()),
	},
	(table) => [
		index("verification_identifier_idx").on(table.identifier),
		index("verification_expires_at_idx").on(table.expiresAt),
	],
);

// Invitation table
export const invitation = pgTable(
	"invitation",
	{
		id: text("id").primaryKey(),
		organizationId: text("organization_id")
			.notNull()
			.references(() => organization.id, { onDelete: "cascade" }),
		email: text("email").notNull(),
		role: text("role"),
		teamId: text("team_id").references(() => team.id, { onDelete: "cascade" }), // Updated to reference team table
		status: text("status").default("pending").notNull(),
		expiresAt: timestamp("expires_at").notNull(),
		inviterId: text("inviter_id")
			.notNull()
			.references(() => user.id, { onDelete: "cascade" }),
	},
	(table) => [
		index("invitation_organization_id_idx").on(table.organizationId),
		index("invitation_email_idx").on(table.email),
		index("invitation_status_idx").on(table.status),
		index("invitation_expires_at_idx").on(table.expiresAt),
		index("invitation_team_id_idx").on(table.teamId), // Added index for teamId
	],
);

// JWKS table
export const jwks = pgTable(
	"jwks",
	{
		id: text("id").primaryKey(),
		publicKey: text("public_key").notNull(),
		privateKey: text("private_key").notNull(),
		createdAt: timestamp("created_at").notNull(),
	},
	(table) => [index("jwks_created_at_idx").on(table.createdAt)],
);
export const workspace = pgTable(
	"workspace",
	{
		id: text("id").primaryKey(),
		organizationId: text("organization_id")
			.notNull()
			.references(() => organization.id, { onDelete: "cascade" }),
		name: text("name").notNull(),
		domain: text("domain").notNull(),
		workspaceUrl: text("workspace_url").notNull(),
		logo: text("logo"),
		createdAt: timestamp("created_at").defaultNow().notNull(),
		updatedAt: timestamp("updated_at").defaultNow().notNull(),
	},
	(table) => [
		uniqueIndex("workspace_org_name_idx").on(table.organizationId, table.name),
		uniqueIndex("workspace_domain_idx").on(table.domain),
		uniqueIndex("workspace_url_idx").on(table.workspaceUrl),
		index("workspace_organization_id_idx").on(table.organizationId),
		index("workspace_name_idx").on(table.name),
		index("workspace_created_at_idx").on(table.createdAt),
	],
);

export const statusEnum = pgEnum("status", [
	"pending",
	"reviewing",
	"planned",
	"in-progress",
	"completed",
	"closed",
]);

export const feedback = pgTable(
	"feedback",
	{
		id: text("id").primaryKey(),
		userId: text("user_id").references(() => user.id, { onDelete: "cascade" }),
		workspaceId: text("workspace_id")
			.notNull()
			.references(() => workspace.id, { onDelete: "cascade" }),
		title: text("title").notNull(),
		message: text("message").notNull(),
		type: text("type").notNull(),
		tags: jsonb("tags").$type<string[]>().default([]),
		likesCount: integer("likes_count").default(0).notNull(),
		commentsCount: integer("comments_count").default(0).notNull(),
		status: statusEnum("status").default("pending").notNull(),
		createdAt: timestamp("created_at").defaultNow().notNull(),
		updatedAt: timestamp("updated_at").defaultNow().notNull(),
	},
	(table) => [
		index("feedback_workspace_id_idx").on(table.workspaceId),
		index("feedback_user_id_idx").on(table.userId),
		index("feedback_status_idx").on(table.status),
		index("feedback_created_at_idx").on(table.createdAt),
		index("feedback_likes_count_idx").on(table.likesCount),
		index("feedback_workspace_status_idx").on(table.workspaceId, table.status),
		index("feedback_workspace_created_idx").on(
			table.workspaceId,
			table.createdAt,
		),
	],
);

export const comment = pgTable(
	"comment",
	{
		id: text("id").primaryKey(),
		feedbackId: text("feedback_id")
			.notNull()
			.references(() => feedback.id, { onDelete: "cascade" }),
		userId: text("user_id")
			.notNull()
			.references(() => user.id, { onDelete: "cascade" }),
		parentId: text("parent_id"),
		message: text("message").notNull(),
		createdAt: timestamp("created_at").defaultNow().notNull(),
		updatedAt: timestamp("updated_at").defaultNow().notNull(),
	},
	(table) => [
		foreignKey({
			columns: [table.parentId],
			foreignColumns: [table.id],
			name: "comment_parent_id_fk",
		}).onDelete("cascade"),
		index("comment_feedback_id_idx").on(table.feedbackId),
		index("comment_user_id_idx").on(table.userId),
		index("comment_created_at_idx").on(table.createdAt),
		index("comment_feedback_created_idx").on(table.feedbackId, table.createdAt),
	],
);

export const like = pgTable(
	"like",
	{
		id: text("id").primaryKey(),
		feedbackId: text("feedback_id").references(() => feedback.id, {
			onDelete: "cascade",
		}),
		commentId: text("comment_id").references(() => comment.id, {
			onDelete: "cascade",
		}),
		userId: text("user_id")
			.notNull()
			.references(() => user.id, { onDelete: "cascade" }),
		createdAt: timestamp("created_at").defaultNow().notNull(),
		updatedAt: timestamp("updated_at").defaultNow().notNull(),
	},
	(table) => [
		uniqueIndex("like_feedback_user_idx").on(table.feedbackId, table.userId),
		uniqueIndex("like_comment_user_idx").on(table.commentId, table.userId),
		index("like_feedback_id_idx").on(table.feedbackId),
		index("like_comment_id_idx").on(table.commentId),
		index("like_user_id_idx").on(table.userId),
	],
);

// ===============================
// RELATIONS - Business Logic Only
// (Auth relations handled by Better Auth)
// ===============================

export const organizationRelations = relations(organization, ({ many }) => ({
	members: many(member),
	workspaces: many(workspace),
}));

export const memberRelations = relations(member, ({ one }) => ({
	organization: one(organization, {
		fields: [member.organizationId],
		references: [organization.id],
	}),
}));

export const workspaceRelations = relations(workspace, ({ one, many }) => ({
	organization: one(organization, {
		fields: [workspace.organizationId],
		references: [organization.id],
	}),
	feedback: many(feedback),
}));

export const feedbackRelations = relations(feedback, ({ one, many }) => ({
	user: one(user, {
		fields: [feedback.userId],
		references: [user.id],
	}),
	workspace: one(workspace, {
		fields: [feedback.workspaceId],
		references: [workspace.id],
	}),
	comments: many(comment),
	likes: many(like),
}));

export const commentRelations = relations(comment, ({ one, many }) => ({
	feedback: one(feedback, {
		fields: [comment.feedbackId],
		references: [feedback.id],
	}),
	user: one(user, {
		fields: [comment.userId],
		references: [user.id],
	}),
	parent: one(comment, {
		fields: [comment.parentId],
		references: [comment.id],
		relationName: "replies",
	}),
	replies: many(comment, {
		relationName: "replies",
	}),
	likes: many(like), 
}));

export const likeRelations = relations(like, ({ one }) => ({
	feedback: one(feedback, {
		fields: [like.feedbackId],
		references: [feedback.id],
	}),
	comment: one(comment, {
		fields: [like.commentId],
		references: [comment.id],
	}),
}));
