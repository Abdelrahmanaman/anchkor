// import type { Query } from "@rocicorp/zero";
// import type { AuthData } from "schema";
// import type { Schema } from "schema";

// export function allowedIfWorkspaceMember(
// 	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
// 	q: Query<Schema, "workspace", any>,
// 	auth: AuthData,
// ) {
// 	if (!auth.sub) {
// 		throw new Error("Not authenticated");
// 	}

// 	return q.where(({ exists }) =>
// 		exists("", (m) => m.where("userId", "=", auth.sub)),
// 	);
// }
