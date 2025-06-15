import {
	Tabs,
	TabsContent,
	TabsIndicator,
	TabsList,
	TabsTrigger,
} from "~/components/ui/tabs";
import { AnalyticsStats } from "./analytics-stats";
import { OverviewStats } from "./overview-stats";
import { RecentOrdersStats } from "./recent-orders-stats";
import { StoreStatus } from "./store-status";

export function StatsTabs() {
	return (
		<Tabs defaultValue="recent-orders" class="w-full">
			<TabsList class="grid max-w-[600px] grid-cols-4 gap-1 bg-transparent">
				<TabsTrigger value="overview" class="flex items-center gap-2">
					<div class="iconify tabler--layout-dashboard " aria-hidden />
					<span class="hidden md:block">Overview</span>
				</TabsTrigger>
				<TabsTrigger value="recent-orders" class="flex items-center gap-2">
					<div class="iconify solar--dollar-linear" aria-hidden />
					<span class="hidden md:block">Recent Orders</span>
				</TabsTrigger>
				<TabsTrigger value="store-status" class="flex items-center gap-2">
					<div class="iconify tabler--building-store" aria-hidden />
					<span class="hidden md:block">Store Status</span>
				</TabsTrigger>
				<TabsTrigger value="analytics" class="flex items-center gap-2">
					<div class="iconify tabler--chart-line" aria-hidden />
					<span class="hidden md:block">Analytics</span>
				</TabsTrigger>
				<TabsIndicator class="bg-card"/>
			</TabsList>
			<TabsContent value="overview">
				<OverviewStats />
			</TabsContent>
			<TabsContent value="recent-orders">
				<RecentOrdersStats />
			</TabsContent>
			<TabsContent value="store-status">
				<StoreStatus />
			</TabsContent>
			<TabsContent value="analytics">
				<AnalyticsStats />
			</TabsContent>
		</Tabs>
	);
}
