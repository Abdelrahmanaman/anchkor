import type { Feedback, User } from "schema";
import { type Accessor, For, Show } from "solid-js";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "~/components/ui/card";
import CreateComment from "./create-comment";
import FeedbackComment, { type CommentProps } from "./feedback-comment";

export interface FeedbackData extends Feedback {
	user: User;
	comments: CommentProps["comment"][];
}

interface FeedbackCardProps {
	feedback: FeedbackData;
	hasLiked: Accessor<boolean>;
	likeCount: Accessor<number>;
	addLike: () => void;
	removeLike: () => void;
}

export default function FeedbackCard(props: FeedbackCardProps) {
	return (
		<Show when={props.feedback}>
			{(feedback) => (
				<>
					<Card>
						<CardHeader>
							<CardTitle>{feedback().title}</CardTitle>
						</CardHeader>
						<CardContent>{feedback().message}</CardContent>
						<CardFooter class="flex justify-end gap-2">
							<button
								on:click={props.hasLiked() ? props.removeLike : props.addLike}
								type="button"
								class=" flex cursor-pointer items-center gap-1 rounded-lg border border-border px-1 transition-[scale] duration-200 hover:bg-accent active:scale-90"
							>
								<div
									class={`iconify solar--heart-angle-bold size-5 ${
										props.hasLiked() ? " text-destructive" : ""
									}`}
								/>
								<span>{props.likeCount()}</span>
							</button>
							<div class="flex items-center gap-1 rounded-lg border border-border px-1">
								<div class="iconify solar--chat-square-bold-duotone size-5" />
								<span>{props.feedback.comments?.length ?? 0}</span>
							</div>
						</CardFooter>
					</Card>
					<CreateComment feedbackId={feedback().id} />
					<ul class="space-y-4">
						<For each={feedback().comments}>
							{(comment) => <FeedbackComment comment={comment} />}
						</For>
					</ul>
				</>
			)}
		</Show>
	);
}
