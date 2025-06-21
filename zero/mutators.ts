import type { CustomMutatorDefs, Transaction } from "@rocicorp/zero";
import { nanoid } from "nanoid";
import type { AuthData, Schema } from "schema";
import type { WorkspaceType } from "~/components/workspace-creation/use-create-workspace";

export function createMutators({ authData }: { authData: AuthData["sub"] }) {
	return {
		// feedback: {
		// 	create: async (tx: Transaction<Schema>, feedback: Feedback) => {
		// 		if (!authData) throw new Error("Not authenticated");

		// 		try {
		// 			await tx.mutate.feedback.insert(feedback);
		// 		} catch (err) {
		// 			console.error("error adding feedback", err);
		// 			throw err;
		// 		}
		// 	},
		// },
		workspace: {
			create: async (tx: Transaction<Schema>, workspace: WorkspaceType) => {
				if (!authData) throw new Error("Not authenticated");

				const id = nanoid();
				try {
					await tx.mutate.workspace.insert({
						id,
						name: workspace.name,
						domain: workspace.domain,
						organizationId: "MR7wSx5lyqDCeMc96f1ovf0ZUw62cEL1",
						workspaceUrl: workspace.workspaceUrl,
						logo: workspace.logo,
						createdAt: Date.now(),
						updatedAt: Date.now(),
					});
				} catch (err) {
					console.error("error adding workspace", err);
					throw err;
				}
			},
		},
	} as const satisfies CustomMutatorDefs<Schema>;
}
