import type { Comment, User } from "schema";
import { For, Show, createSignal } from "solid-js";
import { Button } from "~/components/ui/Button";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { formatDate } from "~/utils/date";
import CreateComment from "./create-comment";

export interface CommentProps {
	comment: Comment & {
		user: User;
		replies?: (Comment & { user: User })[];
	};
}

export default function FeedbackComment(props: CommentProps) {
	const [showReply, setShowReply] = createSignal(false);

	return (
		<div class="mb-6 border-b pb-6">
			<div class="relative">
				<Show when={props.comment.replies && props.comment.replies.length > 0}>
					<div class="absolute top-12.5 bottom-0 left-5 z-0 w-px bg-border" />
				</Show>

				<div class="relative z-10 mb-4 flex gap-3">
					<Avatar class="h-10 w-10 flex-shrink-0 border-2 border-background bg-background">
						<AvatarImage
							src={props.comment.user.image || ""}
							alt={props.comment.user.name}
						/>
						<AvatarFallback>
							{props.comment.user.name
								.split(" ")
								.map((n) => n[0])
								.join("")}
						</AvatarFallback>
					</Avatar>

					<div class="flex-1 space-y-2">
						<div class="flex items-center gap-2">
							<span class="font-semibold text-sm">
								{props.comment.user.name}
							</span>
							<Show when={props.comment.createdAt}>
								{(createdAt) => (
									<time
										dateTime={new Date(createdAt()).toISOString()}
										class="text-muted-foreground text-xs"
									>
										{formatDate(createdAt())}
									</time>
								)}
							</Show>
						</div>

						<p class="text-sm leading-relaxed">{props.comment.message}</p>

						<div class="flex items-center gap-2">
							<Button variant="ghost" size="sm" class="h-8 px-2 text-xs">
								<div class="iconify solar--heart-angle-bold " />
							</Button>

							<Button
								variant="link"
								size="sm"
								class="h-8 px-2 text-xs"
								onClick={() => setShowReply(!showReply())}
							>
								<div class="iconify solar--reply-line-duotone " />
								Reply
							</Button>
						</div>
					</div>
				</div>

				<Show when={showReply()}>
					<div class="relative z-10 mb-4 flex gap-3">
						<div class="w-10 flex-shrink-0" />
						<div class="flex-1">
							<CreateComment
								feedbackId={props.comment.feedbackId}
								parentId={props.comment.id}
								onCommentAdded={() => setShowReply(false)}
								placeholder={`Reply to ${props.comment.user.name}...`}
							/>
						</div>
					</div>
				</Show>

				<Show when={props.comment.replies && props.comment.replies.length > 0}>
					<For each={props.comment.replies}>
						{(reply, i) => (
							<ReplyComment
								comment={reply}
								isLast={i() === (props.comment.replies?.length ?? 0) - 1}
							/>
						)}
					</For>
				</Show>
			</div>
		</div>
	);
}

function ReplyComment(props: CommentProps & { isLast: boolean }) {
	return (
		<div
			class="relative z-10 flex gap-3"
			classList={{
				"mb-4": !props.isLast,
			}}
		>
			<Avatar class="h-10 w-10 flex-shrink-0 border-2 border-background bg-background">
				<AvatarImage
					src={props.comment.user.image || ""}
					alt={props.comment.user.name}
				/>
				<AvatarFallback class="text-xs">
					{props.comment.user.name
						.split(" ")
						.map((n) => n[0])
						.join("")}
				</AvatarFallback>
			</Avatar>

			<div class="flex-1 space-y-2">
				<div class="flex items-center gap-2">
					<span class="font-semibold text-sm">{props.comment.user.name}</span>
					<Show when={props.comment.createdAt}>
						{(createdAt) => (
							<time
								dateTime={new Date(createdAt()).toISOString()}
								class="text-muted-foreground text-xs"
							>
								{formatDate(createdAt())}
							</time>
						)}
					</Show>
					<span class="text-muted-foreground text-xs">
						• replying to {props.comment.user.name}
					</span>
				</div>

				<p class="text-sm leading-relaxed">{props.comment.message}</p>

				<div class="flex items-center gap-2">
					<Button
						variant="link"
						size="sm"
						class=" group border-none active:scale-90"
					>
						<div class="iconify solar--heart-angle-bold size-5 group-hover:text-destructive" />
					</Button>
				</div>
			</div>
		</div>
	);
}
