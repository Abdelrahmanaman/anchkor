import { Outlet, createFileRoute } from "@tanstack/solid-router";
import { AppSidebar } from "~/components/app-sidebar";
import { SidebarProvider } from "~/components/ui/sidebar";

export const Route = createFileRoute("/app/_layout")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<SidebarProvider>
			<div class="flex h-dvh w-full gap-1">
				<AppSidebar />
				<Outlet />
			</div>
		</SidebarProvider>
	);
}
