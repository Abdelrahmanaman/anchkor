import { createFileRoute } from "@tanstack/solid-router";
import { Button } from "~/components/ui/Button";
import { WorkspaceCreationDialog } from "~/components/workspace-creation/workspace-creation-dialog";
import { organization } from "~/lib/auth-client";
import { Kpis } from "./-components/kpis";
import { StatsTabs } from "./-components/stats-tabs";

export const Route = createFileRoute("/app/_layout/(index)/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<section class="w-full space-y-4">
			<WorkspaceCreationDialog />
			<form
				on:submit={(e) => {
					e.preventDefault();
					organization.create({
						name: "Figma org",
						slug: "figma-org",
						logo: "https://www.figma.com/favicon.ico",
					});
				}}
			>
				<input type="text" />
				<Button type="submit">Submit</Button>
			</form>

			<Kpis />
			{/* <StoreStats /> */}
			<StatsTabs />
		</section>
	);
}
