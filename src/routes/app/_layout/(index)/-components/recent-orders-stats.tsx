import { For, Show, createSignal } from "solid-js";

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

const data: Payment[] = [
	{
		id: "m5gr84i9",
		amount: 316,
		status: "success",
		email: "ken99@yahoo.com",
	},
	{
		id: "3u1reuv4",
		amount: 242,
		status: "success",
		email: "Abe45@gmail.com",
	},
	{
		id: "derv1ws0",
		amount: 837,
		status: "processing",
		email: "Monserrat44@gmail.com",
	},
	{
		id: "5kma53ae",
		amount: 874,
		status: "success",
		email: "Silas22@gmail.com",
	},
	{
		id: "bhqecj4p",
		amount: 721,
		status: "failed",
		email: "carmella@hotmail.com",
	},
];

export type Payment = {
	id: string;
	amount: number;
	status: "pending" | "processing" | "success" | "failed";
	email: string;
};

export const columns: ColumnDef<Payment>[] = [
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
		accessorKey: "status",
		header: "Status",
		cell: (props) => (
			<div class="capitalize">{props.row.getValue("status")}</div>
		),
	},
	{
		accessorKey: "email",
		header: (props) => {
			return (
				<button
					type="button"
					onClick={() =>
						props.column.toggleSorting(props.column.getIsSorted() === "asc")
					}
					class="flex items-center"
				>
					Email
					<div
						class={`iconify solar--double-alt-arrow-down-linear transition-transform duration-200 ${props.column.getIsSorted() === "asc" ? "rotate-180" : ""}`}
					/>
				</button>
			);
		},
		cell: (props) => (
			<div class="lowercase ">{props.row.getValue("email")}</div>
		),
	},
	{
		accessorKey: "amount",
		header: () => <div class="text-right">Amount</div>,
		cell: (props) => {
			const formatted = () => {
				const amount = Number.parseFloat(props.row.getValue("amount"));
				return new Intl.NumberFormat("en-US", {
					style: "currency",
					currency: "USD",
				}).format(amount);
			};
			return <div class="text-right font-medium">{formatted()}</div>;
		},
	},
	{
		id: "actions",
		header: () => <div class="text-right">Actions</div>,
		cell: (props) => {
			return (
				<div class="text-right">
					<DropdownMenu placement="bottom-end">
						<DropdownMenuTrigger as="button" class="size-8 p-0">
							<span class="sr-only">Open menu</span>
							<div class="iconify tabler--dots-vertical" />
						</DropdownMenuTrigger>
						<DropdownMenuContent>
							<DropdownMenuLabel>Actions</DropdownMenuLabel>
							<DropdownMenuItem
								onClick={() =>
									navigator.clipboard.writeText(props.row.original.id)
								}
							>
								Copy payment ID
							</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem>View customer</DropdownMenuItem>
							<DropdownMenuItem>View payment details</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			);
		},
	},
];

export function DataTableDemo() {
	const [sorting, setSorting] = createSignal<SortingState>([]);
	const [columnFilters, setColumnFilters] = createSignal<ColumnFiltersState>(
		[],
	);
	const [columnVisibility, setColumnVisibility] = createSignal<VisibilityState>(
		{},
	);
	const [rowSelection, setRowSelection] = createSignal({});

	/*
get data() {
      return props.data
    },
    get columns() {
      return props.columns
    },
*/

	const table = createSolidTable({
		data,
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
	});

	return (
		<div class="w-full">
			<div class="flex items-center py-4">
				<TextField
					value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
					onChange={(value) => table.getColumn("email")?.setFilterValue(value)}
				>
					<TextFieldInput placeholder="Filter emails..." class="max-w-sm" />
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
