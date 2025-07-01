import { createQuery } from "@rocicorp/zero/solid";
import { createFileRoute } from "@tanstack/solid-router";
import { For } from "solid-js";
import { useZero } from "~/components/zero-app";
import FeedbackFilter from "./-workspace-components/feedback-filter";
import FeedbackList from "./-workspace-components/feedback-list";
import { searchParamsSchema } from "./-workspace-components/params-validation";
export const Route = createFileRoute("/_layout/$workspaceId/")({
	component: RouteComponent,
	validateSearch: searchParamsSchema,
	// beforeLoad: async ({ params }) => {
	// 	const validWorkspace = await getWorkspace({
	// 		data: {
	// 			workspaceId: params.workspaceId,
	// 		},
	// 	});
	// 	if (!validWorkspace.success) {
	// 		throw notFound();
	// 	}

	// 	return {
	// 		currentWorkspace: validWorkspace.data,
	// 	};
	// },
	// loader: async () => {
	// 	const { jwt, user } = await getUserAuth();
	// 	if (!user || !jwt) {
	// 		throw redirect({ to: "/login" });
	// 	}
	// 	return { jwt, user };
	// },
});

// const ZeroApp = lazy(() => import("~/components/zero-app"));

function RouteComponent() {
	const params = Route.useParams();
	const z = useZero();
	const [feedbacks, feedbackStatus] = createQuery(
		() =>
			z()
				.query.feedback.where("workspaceId", "=", params().workspaceId)
				.related("user")
				.orderBy("createdAt", "desc"),
		{
			ttl: "1d",
		},
	);
	console.log("feedback", feedbacks());
	return (
		<section class="h-full w-full pt-3">
			<FeedbackFilter />
			<div class="mt-8">
				<For each={feedbacks()}>
					{(feedback) => <FeedbackList feedback={feedback} />}
				</For>
			</div>
		</section>
	);
}
