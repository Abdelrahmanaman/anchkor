import { Outlet, createFileRoute } from "@tanstack/solid-router";
import { getWorkspace } from "~/actions/get-workspace";
import { NotFound } from "~/components/not-found";
import { searchParamsSchema } from "./$workspaceId/-workspace-components/params-validation";
export const Route = createFileRoute("/_layout/$workspaceId")({
	component: RouteComponent,
	validateSearch: searchParamsSchema,
	beforeLoad: async ({ params }) => {
		const validWorkspace = await getWorkspace({
			data: {
				workspaceId: params.workspaceId,
			},
		});
		if (!validWorkspace.success) {
			throw NotFound;
		}
		return {
			currentWorkspace: validWorkspace.data,
		};
	},
	notFoundComponent: () => <NotFound />,
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
	return <Outlet />;
}
