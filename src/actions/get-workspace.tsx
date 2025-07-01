import { createServerFn } from "@tanstack/solid-start";
import { db } from "~/db/db";

export const getWorkspace = createServerFn({ method: "GET" })
	.validator(
		({
			workspaceId,
		}: {
			workspaceId: unknown;
		}) => {
			if (typeof workspaceId !== "string") {
				throw new Error("Invalid workspace ID");
			}
			return {
				workspaceId,
			};
		},
	)
	.handler(async ({ data: { workspaceId } }) => {
		const data = await db.query.workspace.findFirst({
			where: (workspace, { ilike }) => ilike(workspace.id, workspaceId),
		});

		if (!data) {
			return {
				success: false,
				message: "Workspace not found",
			};
		}

		return {
			success: true,
			message: "Workspace found",
			data,
		};
	});
