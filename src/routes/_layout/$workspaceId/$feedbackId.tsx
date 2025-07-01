import { createQuery } from "@rocicorp/zero/solid";
import { createFileRoute } from "@tanstack/solid-router";
import { createServerFn } from "@tanstack/solid-start";
import { Show, createMemo } from "solid-js";
import { useZero } from "~/components/zero-app";
import { db } from "~/db/db";
import FeedbackCard, {
	type FeedbackData,
} from "./-feedback-components/feedback-card";
import FeedbackInfo from "./-feedback-components/feedback-info";

/* TODO:
Improve the type from unnkonw to the acutal type. 

*/
const getd = createServerFn({ method: "GET" })
	.validator((feedbackId: string) => {
		return { feedbackId };
	})
	.handler(async ({ data: { feedbackId } }) => {
		const d = await db.query.feedback.findFirst({
			where: (feedback, { eq }) => eq(feedback.id, feedbackId),
			with: {
				likes: true,
			},
		});
		return d;
	});
export const Route = createFileRoute("/_layout/$workspaceId/$feedbackId")({
	component: RouteComponent,
});

function RouteComponent() {
	const params = Route.useParams();

	const z = useZero();
	const [feedback, ss] = createQuery(
		() =>
			z()
				.query.feedback.where("id", "=", params().feedbackId)
				.related("user")
				.related("likes")
				.related("comments", (q) =>
					q
						.where("parentId", "IS", null)
						.related("user")
						.related("likes")
						.related("replies", (rq) =>
							rq.related("user").related("likes").orderBy("createdAt", "asc"),
						)
						.orderBy("createdAt", "asc"),
				)

				.one(),
		{
			ttl: "1d",
		},
	);
	const [like] = createQuery(
		() =>
			z()
				.query.like.where("feedbackId", "=", params().feedbackId)
				.where("userId", "=", z().userID)
				.one(),
		{
			ttl: "1d",
		},
	);
	const hasLiked = createMemo(() => !!like());
	const likeCount = createMemo(() => feedback()?.likes?.length ?? 0);

	function addLike() {
		z().mutate.like.add(params().feedbackId);
	}

	function removeLike() {
		const currentLike = like();
		if (!currentLike) return;

		z().mutate.like.remove({ likeId: currentLike.id });
	}

	const user = createMemo(() => feedback()?.user);

	return (
		<section class="flex h-full w-full pt-3">
			<Show when={feedback()}>
				<div class="w-full">
					<FeedbackCard
						addLike={addLike}
						removeLike={removeLike}
						hasLiked={hasLiked}
						likeCount={likeCount}
						feedback={feedback() as unknown as FeedbackData}
					/>
				</div>
				<div class="w-1/3 ">
					<FeedbackInfo feedback={feedback() as unknown as FeedbackData} />
				</div>
			</Show>
		</section>
	);
}
