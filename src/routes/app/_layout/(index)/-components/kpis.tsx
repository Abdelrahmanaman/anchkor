import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

export function Kpis() {
	return (
		<div class="mb-8 grid grid-cols-1 gap-2 md:w-f md:grid-cols-2 lg:grid-cols-4">
			<Card class="min-w-3xs">
				<CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
					<CardTitle class="font-medium text-sm">Total Orders</CardTitle>
					<div class="iconify solar--cart-large-3-linear" />
				</CardHeader>
				<CardContent>
					<div class="font-bold text-2xl">5000</div>
					<p class="text-muted-foreground text-xs">
						<span class="text-green-600">+12.5%</span> from last month
					</p>
				</CardContent>
			</Card>

			<Card class="min-w-3xs">
				<CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
					<CardTitle class="font-medium text-sm">Total Revenue</CardTitle>
					<div class="iconify solar--course-up-linear" />
				</CardHeader>
				<CardContent>
					<div class="font-bold text-2xl">50000</div>
					<p class="text-muted-foreground text-xs">
						<span class="text-green-600">+8.2%</span> from last month
					</p>
				</CardContent>
			</Card>

			<Card class="min-w-3xs">
				<CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
					<CardTitle class="font-medium text-sm">Active Stores</CardTitle>
					<div class="iconify tabler--building-store" />
				</CardHeader>
				<CardContent>
					<div class="font-bold text-2xl">5</div>
					<p class="text-muted-foreground text-xs">1 store in maintenance</p>
				</CardContent>
			</Card>

			<Card class="min-w-3xs">
				<CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
					<CardTitle class="font-medium text-sm">Avg Processing Time</CardTitle>
					<div class="iconify tabler--clock" />
				</CardHeader>
				<CardContent>
					<div class="font-bold text-2xl">12h</div>
					<p class="text-muted-foreground text-xs">
						<span class="text-green-600">-15%</span> improvement
					</p>
				</CardContent>
			</Card>
		</div>
	);
}
