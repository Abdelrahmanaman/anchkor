import { Link } from "@tanstack/solid-router";
import type { Feedback, User } from "schema";
import { Show } from "solid-js";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { formatDate } from "~/utils/date";

function getFeedbackTypeIcon(type: Feedback["type"]) {
	return type;
}
interface FeedbackProps extends Feedback {
	user?: User;
}
export default function FeedbackList({
	feedback,
}: { feedback: FeedbackProps }) {
	console.log(feedback);
	return (
		<Card class="relative w-full rounded-none border-0 border-b p-0">
			<article class="flex h-14 items-center justify-between p-2">
				<CardHeader class="p-0">
					<CardTitle class="flex flex-row items-center gap-2">
						<div
							class="iconify solar--clipboard-text-line-duotone size-5"
							aria-hidden="true"
						/>
						<Link
							to="/$workspaceId/$feedbackId"
							params={{
								workspaceId: feedback.workspaceId,
								feedbackId: feedback.id,
							}}
						>
							{feedback.title}
							<span class="absolute inset-0 z-10 hover:bg-accent/10" />
						</Link>
					</CardTitle>
				</CardHeader>
				<CardContent class="p-0">
					<Show when={feedback.likesCount && feedback.commentsCount}>
						so many like
					</Show>
					<div class="flex items-center gap-2">
						<div>
							<Show when={feedback.createdAt}>
								{(createdAt) => (
									<time
										dateTime={new Date(createdAt()).toISOString()}
										class="font-semibold text-xs"
									>
										{formatDate(createdAt())}
									</time>
								)}
							</Show>
						</div>
						<div>
							<Show when={feedback.user}>
								{(user) => (
									<>
										<p>{user().email}</p>
										<Avatar>
											<AvatarImage src={user().image || ""} />
											<AvatarFallback>
												{user().name?.charAt(0).toUpperCase()}
											</AvatarFallback>
										</Avatar>
									</>
								)}
							</Show>
						</div>
					</div>
				</CardContent>
			</article>
		</Card>
	);
}
