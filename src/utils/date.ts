import { formatDistanceToNowStrict } from "date-fns";

export function formatDate(date: number) {
	return formatDistanceToNowStrict(new Date(date));
}
