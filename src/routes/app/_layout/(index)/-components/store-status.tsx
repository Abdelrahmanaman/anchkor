import { For } from "solid-js";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

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
export function StoreStatus() {
	return (
		<div class="flex w-full gap-2 ">
			<For each={mockStores}>
				{(store) => (
					<Card
						class={`relative isolate w-full overflow-hidden border ${store.status === "active" ? "border-green-500/30" : "border-red-500/30"}`}
					>
						<div
							class={`-top-10 absolute left-64 size-28 rounded-full bg-radial ${store.status === "active" ? "from-green-500 via-green-900" : "from-red-500 via-red-900"} to-transparent blur-3xl `}
						/>
						<CardHeader>
							<CardTitle
								class={
									store.status === "active" ? "text-green-600" : "text-red-500"
								}
							>
								{store.name}
							</CardTitle>
						</CardHeader>
						<CardContent class="space-y-2">
							<div class="flex items-center gap-2">
								<div class="iconify tabler--building-store" aria-hidden />
								<span>Orders: {store.orders}</span>
							</div>
							<div class="flex items-center gap-2">
								<div class="iconify solar--box-linear" aria-hidden />
								<span>Inventory: {store.inventory}</span>
							</div>
						</CardContent>
					</Card>
				)}
			</For>
		</div>
	);
}
