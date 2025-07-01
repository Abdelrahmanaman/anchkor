import type { CustomMutatorDefs, Transaction } from "@rocicorp/zero";
import { customAlphabet } from "nanoid";
import type { AuthData, Schema } from "schema";
import type { WorkspaceType } from "~/components/workspace-creation/use-create-workspace";
import type { AddFeedback } from "~/routes/_layout/$workspaceId/-workspace-components/create-feedback";

export function createMutators({
	authData,
}: { authData: AuthData["sub"] | undefined }) {
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

				const id = customAlphabet("abcdefghijklmnopqrstuvwxyz0123456789", 21)();
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
		feedback: {
			create: async (tx: Transaction<Schema>, feedback: AddFeedback) => {
				if (!authData) throw new Error("Not authenticated");

				const id = customAlphabet("abcdefghijklmnopqrstuvwxyz0123456789", 21)();
				try {
					await tx.mutate.feedback.insert({
						id,
						workspaceId: feedback.workspaceId,
						userId: authData,
						title: feedback.title,
						message: feedback.message,
						status: feedback.status,
						likesCount: 0,
						commentsCount: 0,
						type: feedback.type,
						tags: feedback.tags,
						createdAt: Date.now(),
						updatedAt: Date.now(),
					});
				} catch (err) {
					console.error("error adding feedback", err);
					throw err;
				}
			},
		},
		like: {
			add: async (tx: Transaction<Schema>, feedbackId: string) => {
				if (!authData) throw new Error("Not authenticated");
				const id = customAlphabet("abcdefghijklmnopqrstuvwxyz0123456789", 21)();

				const existingLike = await tx.query.like
					.where("feedbackId", "=", feedbackId)
					.where("userId", "=", authData)
					.one();
				if (existingLike) throw new Error("Like already exists");

				await tx.mutate.like.insert({
					id,
					feedbackId,
					userId: authData,
				});
				// No more likesCount management!
			},

			remove: async (
				tx: Transaction<Schema>,
				{ likeId }: { likeId: string },
			) => {
				if (!authData) throw new Error("Not authenticated");
				await tx.mutate.like.delete({ id: likeId });
			},
		},
		comment: {
			add: async (
				tx: Transaction<Schema>,
				{
					feedbackId,
					message,
					parentId,
				}: { feedbackId: string; message: string; parentId?: string },
			) => {
				if (!authData) throw new Error("Not authenticated");
				const id = customAlphabet("abcdefghijklmnopqrstuvwxyz0123456789", 21)();
				await tx.mutate.comment.insert({
					id,
					feedbackId,
					userId: authData,
					message,
					parentId,
					createdAt: Date.now(),
					updatedAt: Date.now(),
				});
			},
		},
	} as const satisfies CustomMutatorDefs<Schema>;
}
