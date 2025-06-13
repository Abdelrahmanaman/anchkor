import { createFileRoute } from "@tanstack/solid-router";
import { Kpis } from "./-components/kpis";
import { StatsTabs } from "./-components/stats-tabs";

export const Route = createFileRoute("/app/_layout/(index)/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<section class="w-full space-y-4">
			<Kpis />
			{/* <StoreStats /> */}
			<StatsTabs />
		</section>
	);
}
