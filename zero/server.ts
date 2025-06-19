// import type { Transaction } from "@rocicorp/zero";
// import type { AuthData, Schema } from "schema";
// import type { WorkspaceType } from "~/components/workspace-creation/use-create-workspace";

// export function createMutators(authData: AuthData | undefined) {
// 	return {
// 		workspace: {
// 			add: async (
// 				tx: Transaction<Schema>,
// 				{
// 					workspace,
// 					organizationId,
// 				}: {
// 					workspace: WorkspaceType;
// 					organizationId: string;
// 				},
// 			) => {
// 				if (!authData) {
// 					throw new Error("Not authenticated");
// 				}

// 				try {
// 					await tx.mutate.workspace.insert({
// 						name: workspace.name,
// 						organizationId,
// 						websiteUrl: workspace.websiteUrl,
// 						id: crypto.randomUUID(),
// 						createdAt: Date.now(),
// 						updatedAt: Date.now(),
// 					});
// 				} catch (err) {
// 					console.error("error adding cart item", err);
// 					throw err;
// 				}
// 			},
// 		},
// 	};
// }
