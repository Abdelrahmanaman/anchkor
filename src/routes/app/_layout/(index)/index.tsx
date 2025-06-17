import { createFileRoute } from "@tanstack/solid-router";
import { WorkspaceCreationDialog } from "~/components/workspace-creation/workspace-creation-dialog";
import { Kpis } from "./-components/kpis";
import { StatsTabs } from "./-components/stats-tabs";

export const Route = createFileRoute("/app/_layout/(index)/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<section class="w-full space-y-4">
			<WorkspaceCreationDialog />

			<Kpis />
			{/* <StoreStats /> */}
			<StatsTabs />
		</section>
	);
}
