import { For } from "solid-js";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { BarChart, LineChart } from "~/components/ui/charts";
import { Progress, ProgressLabel } from "~/components/ui/progress";

const orderStatusData = {
	labels: ["Processing", "Shipped", "Delivered", "Cancelled"],
	datasets: [
		{
			label: "Orders",
			data: [35, 45, 85, 12],
		},
	],
};

const mockStores = [
	{
		id: 1,
		name: "Downtown Store",
		status: "active",
		orders: 45,
		inventory: 1250,
	},
	{
		id: 2,
		name: "Mall Location",
		status: "active",
		orders: 32,
		inventory: 980,
	},
	{
		id: 3,
		name: "Warehouse",
		status: "maintenance",
		orders: 0,
		inventory: 2500,
	},
	{ id: 4, name: "Online Store", status: "active", orders: 78, inventory: 0 },
];

export function OverviewStats() {
	const chartData = {
		labels: [
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday",
			"Algae",
		],
		datasets: [
			{
				label: "Orders",
				data: [2488, 1445, 734, 281, 251, 232, 98],
			},
		],
	};
	return (
		<div class="grid grid-cols-1 items-center gap-2 md:grid-cols-2">
			<Card>
				<CardHeader>
					<CardTitle>Sales Trend (last 7 Days)</CardTitle>
				</CardHeader>
				<CardContent class="h-80 md:h-[500px]">
					<LineChart data={chartData} />
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle>Order Status</CardTitle>
				</CardHeader>
				<CardContent class="h-80 md:h-[500px]">
					<BarChart data={orderStatusData} />
				</CardContent>
			</Card>

			<Card class="col-span-full">
				<CardHeader>
					<CardTitle>Store Performance Overview</CardTitle>
				</CardHeader>
				<CardContent>
					<For each={mockStores}>
						{(data) => (
							<Progress
								value={3}
								minValue={0}
								maxValue={10}
								getValueLabel={({ value }) => `${value} orders today`}
								class="h-4 w-full rounded-sm"
							>
								<div class="my-2 flex justify-between">
									<ProgressLabel>
										<span class="font-bold">{data.name}</span>
									</ProgressLabel>
									<span class="font-semibold text-xs md:text-sm">
										{data.orders} orders today
									</span>
								</div>
							</Progress>
						)}
					</For>
				</CardContent>
			</Card>
		</div>
	);
}
