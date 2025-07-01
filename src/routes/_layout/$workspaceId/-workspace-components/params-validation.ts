import { type } from "arktype";

function enumerateStrings<T extends readonly string[]>(values: T) {
	return values.map((v) => `"${v}"`).join("|") as `"${T[number]}"`;
}

export type Status =
	| "pending"
	| "reviewing"
	| "planned"
	| "in-progress"
	| "completed"
	| "closed";

export const status = type(
	"('pending'|'reviewing'|'planned'|'in-progress'|'completed'|'closed')[]",
);
export type StatusType = typeof status.infer;
const priorityType = enumerateStrings(["low", "medium", "high"] as const);

const feedbackType = enumerateStrings([
	"bug",
	"feature",
	"improvement",
	"other",
] as const);

const orderType = enumerateStrings(["asc", "desc"] as const);

export const searchParamsSchema = type({
	"search?": "string",
	"creator?": "string",
	"assignee?": "string",
	"status?": type(status),
	"tags?":
		"('security'|'performance'|'usability'|'design'|'code-quality'|'other')[]",
	"type?": "('bug'|'feature'|'improvement'|'other')[]",
	"order?": "'newest'|'oldest'|'hot'",
});

export type SearchParamsType = typeof searchParamsSchema.infer;
