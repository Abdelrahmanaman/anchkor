import type { CustomMutatorDefs, Transaction } from "@rocicorp/zero";
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

				try {
					await tx.mutate.workspace.insert({
						name: workspace.name,
						domain: workspace.domain,
						organizationId: "",
						id: crypto.randomUUID(),
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
