import { Outlet, createFileRoute, redirect } from "@tanstack/solid-router";
import { AppSidebar } from "~/components/app-sidebar";
import { SidebarProvider } from "~/components/ui/sidebar";
import ZeroProvider from "~/components/zero-app";
import { getUserAuth } from "~/lib/get-auth";
export const Route = createFileRoute("/_layout")({
	component: RouteComponent,
	loader: async () => {
		const { jwt, user } = await getUserAuth();
		if (!user || !jwt) {
			throw redirect({ to: "/login" });
		}
		return { jwt, user };
	},
	staleTime: Number.POSITIVE_INFINITY,
});

function RouteComponent() {
	return (
		<ZeroProvider>
			<SidebarProvider>
				<div class="flex w-full items-center ">
					<AppSidebar />
					<Outlet />
				</div>
			</SidebarProvider>
		</ZeroProvider>
	);
}
