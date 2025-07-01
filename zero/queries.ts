import { type Row, namedQuery } from "@rocicorp/zero";
import { type Schema, builder } from "schema";

function buildWorkspaceListQuery(
	start: Row<Schema["tables"]["workspace"]> | null,
	userId: string,
) {
	let q = builder.workspace.whereExists("member", (m) =>
		m.where("userId", "=", userId),
	);
	if (start) {
		q = q.start(start);
	}
	return q.limit(10);
}

export const workspaceList = namedQuery("workspaceList", (userId: string) => {
	return buildWorkspaceListQuery(null, userId);
});
export const buildOrganizationListQuery = () => {
	const q = builder.organization;
	return q.limit(20);
};

export const organizationList = namedQuery("organizationList", () => {
	return buildOrganizationListQuery();
});

// export const workspaceList = namedQuery("workspaceList", (userId: string) =>
// 	builder.workspace.whereExists("member", (m) =>
// 		m.where("userId", "=", userId),
// 	),
// );
