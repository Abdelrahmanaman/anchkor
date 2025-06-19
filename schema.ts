import {
	ANYONE_CAN,
	type PermissionsConfig,
	type Row,
	definePermissions,
} from "@rocicorp/zero";
import { type Schema, schema } from "zero-schema.gen";

export { schema, type Schema };

export interface User extends Row<typeof schema.tables.user> {}
export interface Organization extends Row<typeof schema.tables.organization> {}
export interface Member extends Row<typeof schema.tables.member> {}
export interface Workspace extends Row<typeof schema.tables.workspace> {}
export interface Feedback extends Row<typeof schema.tables.feedback> {}
export interface Comment extends Row<typeof schema.tables.comment> {}
export interface Like extends Row<typeof schema.tables.like> {}

export type AuthData = {
	sub: string;
	role: string;
};

export const permissions = definePermissions<AuthData, Schema>(schema, () => {
	return {
		// User permissions
		user: {
			row: {
				// Anyone can read user profiles
				select: ANYONE_CAN,
				// Users can only update their own profile
			},
		},

		// Organization permissions
		organization: {
			row: {
				// Anyone can create an organization
				insert: ANYONE_CAN,
				// Can view organizations
				select: ANYONE_CAN,
				// Only org admins can update/delete
				update: {
					preMutation: ANYONE_CAN,
					postMutation: ANYONE_CAN,
				},
				delete: ANYONE_CAN,
			},
		},

		// Organization members permissions
		member: {
			row: {
				// Can view members
				select: ANYONE_CAN,
				// Only org admins can manage members
				insert: ANYONE_CAN,
				update: {
					preMutation: ANYONE_CAN,
					postMutation: ANYONE_CAN,
				},
				delete: ANYONE_CAN,
			},
		},
		comment: {
			row: {
				// Can view comments
				select: ANYONE_CAN,
				// Only org admins can manage comments
				insert: ANYONE_CAN,
				update: {
					preMutation: ANYONE_CAN,
					postMutation: ANYONE_CAN,
				},
				delete: ANYONE_CAN,
			},
		},
		workspace: {
			row: {
				// Can view comments
				select: ANYONE_CAN,
				// Only org admins can manage comments
				insert: ANYONE_CAN,
				update: {
					preMutation: ANYONE_CAN,
					postMutation: ANYONE_CAN,
				},
				delete: ANYONE_CAN,
			},
		},
	} satisfies PermissionsConfig<AuthData, Schema>;
});
