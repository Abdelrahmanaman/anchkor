import { For, Show, createSignal, onMount } from "solid-js";

import type {
	ColumnFiltersState,
	SortingState,
	VisibilityState,
} from "@tanstack/solid-table";
import {
	type ColumnDef,
	createSolidTable,
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
} from "@tanstack/solid-table";
import { Checkbox } from "~/components/ui/checkbox";
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { TextField, TextFieldInput } from "~/components/ui/input";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "~/components/ui/table";

// --- Order Type Definition based on your Drizzle Schema ---
export type Order = {
	id: string;
	storeId: string;
	customerId?: string;
	orderNumber: string;
	status:
		| "pending"
		| "unfulfilled"
		| "fulfilled"
		| "shipped"
		| "delivered"
		| "cancelled";
	totalAmount: number;
	shippingAddress: {
		name: string;
		street: string;
		city: string;
		state: string;
		zip: string;
		country: string;
	};
	billingAddress?: {
		name?: string;
		street?: string;
		city?: string;
		state?: string;
		zip?: string;
		country?: string;
	};
	createdAt: Date;
	updatedAt: Date;
};

// --- Mock Data (replace with your actual data fetching logic) ---
const mockOrders: Order[] = [
	{
		id: "ord_1",
		storeId: "store_abc",
		orderNumber: "20240001",
		status: "pending",
		totalAmount: 123.45,
		shippingAddress: {
			name: "Alice Wonderland",
			street: "123 Rabbit Hole",
			city: "Wonderland",
			state: "CA",
			zip: "90210",
			country: "USA",
		},
		createdAt: new Date("2024-06-01T10:00:00Z"),
		updatedAt: new Date("2024-06-01T10:00:00Z"),
	},
	{
		id: "ord_2",
		storeId: "store_abc",
		customerId: "user_123",
		orderNumber: "20240002",
		status: "unfulfilled",
		totalAmount: 50.0,
		shippingAddress: {
			name: "Bob Builder",
			street: "456 Construction Site",
			city: "Builderville",
			state: "NY",
			zip: "10001",
			country: "USA",
		},
		createdAt: new Date("2024-06-02T11:30:00Z"),
		updatedAt: new Date("2024-06-02T11:30:00Z"),
	},
	{
		id: "ord_3",
		storeId: "store_xyz",
		orderNumber: "20240003",
		status: "fulfilled",
		totalAmount: 789.99,
		shippingAddress: {
			name: "Charlie Chaplin",
			street: "789 Silent St",
			city: "Hollywood",
			state: "CA",
			zip: "90028",
			country: "USA",
		},
		createdAt: new Date("2024-06-03T14:45:00Z"),
		updatedAt: new Date("2024-06-03T14:45:00Z"),
	},
	{
		id: "ord_4",
		storeId: "store_abc",
		customerId: "user_456",
		orderNumber: "20240004",
		status: "shipped",
		totalAmount: 200.5,
		shippingAddress: {
			name: "Diana Prince",
			street: "1 Amazon Way",
			city: "Themyscira",
			state: "FL",
			zip: "33101",
			country: "USA",
		},
		createdAt: new Date("2024-06-04T09:15:00Z"),
		updatedAt: new Date("2024-06-04T09:15:00Z"),
	},
	{
		id: "ord_5",
		storeId: "store_xyz",
		orderNumber: "20240005",
		status: "delivered",
		totalAmount: 99.99,
		shippingAddress: {
			name: "Eve Harrington",
			street: "10 Broadway",
			city: "New York",
			state: "NY",
			zip: "10036",
			country: "USA",
		},
		createdAt: new Date("2024-06-05T16:00:00Z"),
		updatedAt: new Date("2024-06-05T16:00:00Z"),
	},
	{
		id: "ord_6",
		storeId: "store_abc",
		orderNumber: "20240006",
		status: "cancelled",
		totalAmount: 10.0,
		shippingAddress: {
			name: "Frankenstein Monster",
			street: "666 Laboratory Ln",
			city: "Transylvania",
			state: "GA",
			zip: "30303",
			country: "USA",
		},
		createdAt: new Date("2024-06-06T08:00:00Z"),
		updatedAt: new Date("2024-06-06T08:00:00Z"),
	},
];

// Define a type for the table's meta property
// Keeping this type, even if updateOrderStatus is not called directly in the dropdown,
// as it defines the structure expected by the ColumnDef type below.
interface TableMeta {
	updateOrderStatus: (orderId: string, newStatus: Order["status"]) => void;
}

// --- Column Definitions for the Orders Table ---
export const columns: ColumnDef<Order, TableMeta>[] = [
	// Type the ColumnDef with TableMeta
	{
		id: "select",
		header: (props) => (
			<Checkbox
				label="Select all"
				checked={props.table.getIsAllPageRowsSelected()}
				indeterminate={props.table.getIsSomePageRowsSelected()}
				onChange={(value) => props.table.toggleAllPageRowsSelected(!!value)}
				aria-label="Select all"
			/>
		),
		cell: (props) => (
			<Checkbox
				label="Select row"
				checked={props.row.getIsSelected()}
				onChange={(value) => props.row.toggleSelected(!!value)}
				aria-label="Select row"
			/>
		),
		enableSorting: false,
		enableHiding: false,
	},
	{
		accessorKey: "orderNumber",
		header: "Order #",
		cell: (props) => (
			<div class="font-medium">{props.row.getValue("orderNumber")}</div>
		),
	},
	{
		accessorKey: "status",
		header: (props) => {
			return (
				<button
					type="button"
					onClick={() =>
						props.column.toggleSorting(props.column.getIsSorted() === "asc")
					}
					class="flex items-center"
				>
					Status
					{/* These iconify classes assume global availability or a specific setup */}
					<div
						class={`iconify solar--double-alt-arrow-down-linear transition-transform duration-200 ${props.column.getIsSorted() === "asc" ? "rotate-180" : ""}`}
					/>
				</button>
			);
		},
		cell: (props) => {
			const currentStatus = props.row.getValue("status") as Order["status"];
			const orderId = props.row.original.id; // Get the order ID for state updates

			const statuses: Order["status"][] = [
				"pending",
				"unfulfilled",
				"fulfilled",
				"shipped",
				"delivered",
				"cancelled",
			];

			return (
				<DropdownMenu placement="bottom-start">
					<DropdownMenuTrigger as="button" class="flex items-center gap-1">
						{currentStatus}{" "}
						<div class="iconify solar--alt-arrow-down-linear text-sm" />
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuLabel>Change Status</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<For each={statuses}>
							{(statusOption) => (
								<DropdownMenuItem
									// onClick function removed as requested.
									// You will handle status changes externally based on this dropdown.
									class="capitalize data-[current=true]:bg-blue-50 data-[current=true]:text-blue-700"
									// Add a visual indicator for the current status
									data-current={
										currentStatus === statusOption ? "true" : "false"
									}
								>
									{statusOption}
								</DropdownMenuItem>
							)}
						</For>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
	{
		accessorKey: "totalAmount",
		header: () => <div>Amount</div>, // Changed to "Amount" to match payment example
		cell: (props) => {
			const formatted = () => {
				const amount = Number.parseFloat(props.row.getValue("totalAmount"));
				return new Intl.NumberFormat("en-US", {
					style: "currency",
					currency: "USD",
				}).format(amount);
			};
			return <div class=" font-medium">{formatted()}</div>;
		},
	},
	{
		// Changed to shippingAddress for OMS relevance, similar to Payment's email column
		accessorKey: "shippingAddress",
		header: (props) => {
			return (
				<button
					type="button"
					onClick={() =>
						props.column.toggleSorting(props.column.getIsSorted() === "asc")
					}
					class="flex items-center"
				>
					Shipping Recipient
					<div
						class={`iconify solar--double-alt-arrow-down-linear transition-transform duration-200 ${props.column.getIsSorted() === "asc" ? "rotate-180" : ""}`}
					/>
				</button>
			);
		},
		cell: (props) => {
			const address = props.row.getValue(
				"shippingAddress",
			) as Order["shippingAddress"];
			// Displaying recipient name similar to how email was displayed
			return <div class="lowercase ">{address.name}</div>;
		},
	},
	{
		id: "actions",
		header: () => <div class="text-right">Actions</div>,
		cell: (props) => {
			const order = props.row.original;
			return (
				<div class="text-right">
					<DropdownMenu placement="bottom-end">
						<DropdownMenuTrigger as="button" class="size-8 p-0">
							<span class="sr-only">Open menu</span>
							<div class="iconify tabler--dots-vertical" />
						</DropdownMenuTrigger>
						<DropdownMenuContent>
							<DropdownMenuLabel>Actions</DropdownMenuLabel>{" "}
							{/* Changed to "Actions" */}
							<DropdownMenuItem
								onClick={() => {
									// Using document.execCommand('copy') for better compatibility in iframes
									const el = document.createElement("textarea");
									el.value = order.id;
									document.body.appendChild(el);
									el.select();
									document.execCommand("copy");
									document.body.removeChild(el);
									console.log("Copied Order ID:", order.id);
								}}
							>
								Copy Order ID
							</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem>View customer</DropdownMenuItem>{" "}
							{/* Reverted to "View customer" */}
							<DropdownMenuItem>View order details</DropdownMenuItem>{" "}
							{/* Reverted to "View payment details" -> "View order details" */}
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			);
		},
	},
];

export function DataTableDemo() {
	// Use a signal for the data to allow updates (e.g., status changes)
	const [orders, setOrders] = createSignal<Order[]>([]);
	const [sorting, setSorting] = createSignal<SortingState>([]);
	const [columnFilters, setColumnFilters] = createSignal<ColumnFiltersState>(
		[],
	);
	const [columnVisibility, setColumnVisibility] = createSignal<VisibilityState>(
		{},
	);
	const [rowSelection, setRowSelection] = createSignal({});

	// Simulate fetching data on component mount
	onMount(() => {
		setOrders(mockOrders);
	});

	// This function is for mock data updates only and does not perform backend calls.
	const updateOrderStatus = (orderId: string, newStatus: Order["status"]) => {
		setOrders((prevOrders) =>
			prevOrders.map((order) =>
				order.id === orderId ? { ...order, status: newStatus } : order,
			),
		);
		console.log(`Mock: Order ${orderId} status updated to: ${newStatus}`);
	};

	// Initialize the Solid Table instance
	const table = createSolidTable<Order>({
		// Type the table with Order data and TableMeta
		get data() {
			return orders();
		}, // Use signal getter for reactivity
		columns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		onSortingChange: setSorting,
		onColumnFiltersChange: setColumnFilters,
		onColumnVisibilityChange: setColumnVisibility,
		onRowSelectionChange: setRowSelection,
		state: {
			get sorting() {
				return sorting();
			},
			get columnFilters() {
				return columnFilters();
			},
			get columnVisibility() {
				return columnVisibility();
			},
			get rowSelection() {
				return rowSelection();
			},
		},
		// Pass the update function via 'meta' so it can be accessed in cell renderers
		meta: {
			updateOrderStatus: updateOrderStatus,
		},
	});

	return (
		<div class="w-full">
			<div class="flex items-center py-4">
				<TextField
					value={
						(table.getColumn("orderNumber")?.getFilterValue() as string) ?? ""
					}
					onChange={(value) =>
						table.getColumn("orderNumber")?.setFilterValue(value)
					}
				>
					<TextFieldInput
						placeholder="Filter order numbers..."
						class="max-w-sm"
					/>
				</TextField>
				<DropdownMenu placement="bottom-end">
					<DropdownMenuTrigger as="button" class="ml-auto">
						Columns <div class="iconify solar--alt-arrow-down-linear" />
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<For
							each={table
								.getAllColumns()
								.filter((column) => column.getCanHide())}
						>
							{(column) => {
								return (
									<DropdownMenuCheckboxItem
										class="capitalize"
										checked={column.getIsVisible()}
										onChange={(value) => column.toggleVisibility(!!value)}
									>
										{column.id}
									</DropdownMenuCheckboxItem>
								);
							}}
						</For>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
			<div class="rounded-md border">
				<Table>
					<TableHeader>
						<For each={table.getHeaderGroups()}>
							{(headerGroup) => (
								<TableRow>
									<For each={headerGroup.headers}>
										{(header) => {
											return (
												<TableHead>
													{header.isPlaceholder
														? null
														: flexRender(
																header.column.columnDef.header,
																header.getContext(),
															)}
												</TableHead>
											);
										}}
									</For>
								</TableRow>
							)}
						</For>
					</TableHeader>
					<TableBody>
						<Show
							when={table.getRowModel().rows?.length}
							fallback={
								<TableRow>
									<TableCell colSpan={columns.length} class="h-24 text-center">
										No results.
									</TableCell>
								</TableRow>
							}
						>
							<For each={table.getRowModel().rows}>
								{(row) => (
									<TableRow data-state={row.getIsSelected() && "selected"}>
										<For each={row.getVisibleCells()}>
											{(cell) => (
												<TableCell>
													{flexRender(
														cell.column.columnDef.cell,
														cell.getContext(),
													)}
												</TableCell>
											)}
										</For>
									</TableRow>
								)}
							</For>
						</Show>
					</TableBody>
				</Table>
			</div>
			<div class="flex items-center justify-end space-x-2 py-4">
				<div class="flex-1 text-muted-foreground text-sm">
					{table.getFilteredSelectedRowModel().rows.length} of{" "}
					{table.getFilteredRowModel().rows.length} row(s) selected.
				</div>
				<div class="space-x-2">
					<button
						type="button"
						onClick={() => table.previousPage()}
						disabled={!table.getCanPreviousPage()}
					>
						Previous
					</button>
					<button
						type="button"
						onClick={() => table.nextPage()}
						disabled={!table.getCanNextPage()}
					>
						Next
					</button>
				</div>
			</div>
		</div>
	);
}
export function RecentOrdersStats() {
	return <DataTableDemo />;
}
