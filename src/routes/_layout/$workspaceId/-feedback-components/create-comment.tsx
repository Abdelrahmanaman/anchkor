import { createSignal } from "solid-js";
import { Button } from "~/components/ui/Button";
import { Textarea } from "~/components/ui/text-area";
import { useZero } from "~/components/zero-app";

interface CreateCommentProps {
	feedbackId: string;
	parentId?: string;
	onCommentAdded?: () => void;
	placeholder?: string;
}

export default function CreateComment(props: CreateCommentProps) {
	const [comment, setComment] = createSignal("");
	const z = useZero();

	function addComment() {
		z().mutate.comment.add({
			feedbackId: props.feedbackId,
			parentId: props.parentId,
			message: comment(),
		});
		setComment("");
		props.onCommentAdded?.();
	}
	return (
		<div class="relative">
			<Textarea
				onInput={(e) => setComment(e.target.value)}
				value={comment()}
				class="h-24 placeholder:text-base"
				placeholder={props.placeholder ?? "Leave your comment..."}
			/>

			<Button
				disabled={!comment()}
				class="absolute right-2 bottom-2 flex items-center"
				onClick={addComment}
			>
				Send
				<div
					class="iconify solar--map-arrow-right-bold-duotone -rotate-45 size-5 text-indigo-800"
					aria-hidden="true"
				/>
			</Button>
		</div>
	);
}
