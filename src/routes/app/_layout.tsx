import { Outlet, createFileRoute, redirect } from "@tanstack/solid-router";
import { lazy } from "solid-js";
import { AppSidebar } from "~/components/app-sidebar";
import { SidebarProvider } from "~/components/ui/sidebar";
import { getUserAuth } from "~/lib/get-auth";

export const Route = createFileRoute("/app/_layout")({
	component: RouteComponent,
	loader: async () => {
		const { jwt, user } = await getUserAuth();
		if (!jwt || !user) {
			throw redirect({ to: "/login" });
		}
		return { jwt, user };
	},
	ssr: false,
});
const ZeroApp = lazy(() => import("~/components/zero-app"));
function RouteComponent() {
	return (
		<ZeroApp>
			<SidebarProvider>
				<div class="flex h-dvh w-full gap-1">
					<AppSidebar />
					<Outlet />
				</div>
			</SidebarProvider>
		</ZeroApp>
	);
}
