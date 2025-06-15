import {
	ANYONE_CAN,
	type PermissionsConfig,
	type Row,
	definePermissions,
} from "@rocicorp/zero";
import { type Schema, schema } from "zero-schema.gen";

export { schema, type Schema };

// export type Schema = typeof schema;
export interface User extends Row<typeof schema.tables.user> {}
export interface Organization extends Row<typeof schema.tables.organization> {}
export interface Member extends Row<typeof schema.tables.member> {}
export interface MemberWithRelations extends Member {
	users: readonly Row<typeof schema.tables.user>[];
}
export type AuthPayload = {
	// id: string;
	// name: string;
	// email: string;
	// emailVerified: boolean;
	// image: string | null;
	// createdAt: string;
	// updatedAt: string;
	// username: string;
	// displayUsername: string;
	// iat: number;
	// iss: string;
	// aud: string;
	// exp: number;
	// sub: string;
	// httpOnly: boolean;
	sub: string;
	role: string;
};

export const permissions = definePermissions<AuthPayload, Schema>(
	schema,
	() => {
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
		} satisfies PermissionsConfig<AuthPayload, Schema>;
	},
);
