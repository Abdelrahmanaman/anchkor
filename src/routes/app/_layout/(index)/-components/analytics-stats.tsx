import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { BarChart, LineChart } from "~/components/ui/charts";

export function AnalyticsStats() {
	const chartData = {
		labels: ["Downtown", "Mall", "Online", "Warehouse"],
		datasets: [
			{
				label: "Revenue",
				data: [8500, 6200, 9800, 300],
			},
		],
	};
	const lineChartData = {
		labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
		datasets: [
			{
				label: "Processing Time",
				data: [2.8, 2.4, 2.1, 2.6, 2.3, 2.0, 1.9],
			},
		],
	};
	return (
		<div class="flex items-center gap-2">
			<Card class="w-full">
				<CardHeader>
					<CardTitle>Revenue by Store</CardTitle>
				</CardHeader>
				<CardContent class="h-80 md:h-[500px]">
					<BarChart data={chartData} />
				</CardContent>
			</Card>
			<Card class="w-full">
				<CardHeader>
					<CardTitle>Processing Time Trends</CardTitle>
				</CardHeader>
				<CardContent class="h-80 md:h-[500px]">
					<LineChart data={lineChartData} />
				</CardContent>
			</Card>
		</div>
	);
}
