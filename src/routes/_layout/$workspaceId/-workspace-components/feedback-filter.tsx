import { debounce } from "@tanstack/pacer";
import { useNavigate, useSearch } from "@tanstack/solid-router";
import { type Accessor, Match, Switch } from "solid-js";
import { Button } from "~/components/ui/Button";
import { Input } from "~/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "~/components/ui/select";
import CreateFeedback from "./create-feedback";
import type { SearchParamsType, StatusType } from "./params-validation";
interface Option {
	value: string;
	label: string;
}

const options: Option[] = [
	{
		label: "Pending",
		value: "pending",
	},
	{
		label: "Reviewing",
		value: "reviewing",
	},
	{
		label: "Planned",
		value: "planned",
	},
	{
		label: "In Progress",
		value: "in-progress",
	},
	{
		label: "Completed",
		value: "completed",
	},
	{
		label: "Closed",
		value: "closed",
	},
	{
		label: "Clear all",
		value: "clear",
	},
] as const;

export default function FeedbackFilter() {
	const navigate = useNavigate({
		from: "/$workspaceId",
	});
	const searchQuery = useSearch({
		from: "/_layout/$workspaceId",
	});
	const debouncedNavigate = debounce(
		(value) => {
			navigate({
				to: ".",
				search: (prev) => ({
					...prev,
					search: value,
				}),
			});
		},
		{ wait: 500 },
	);
	return (
		<div class="ml-3 flex flex-wrap items-center justify-between gap-2">
			<h1 class="font-semibold text-2xl">Feedbacks</h1>
			{/* Feedback Status Select */}
			<div class="relative w-full md:w-96">
				<Input
					onInput={(e) => {
						debouncedNavigate(e.target.value);
					}}
					placeholder="Search..."
					value={searchQuery().search ?? ""}
				/>
				<div class="iconify mynaui--search -translate-y-1/2 absolute top-1/2 right-3 text-muted-foreground peer-focus:text-white/80" />
			</div>
			<div class="flex items-center gap-2">
				<FeedbackStatusSelect searchQuery={searchQuery} />
				{/* Feedback Type Select */}
				<FeedbackTypeSelect searchQuery={searchQuery} />
				{/* Feedback Tags Select */}
				<FeedbackTagsSelect searchQuery={searchQuery} />
				{/* Feedback Priority Select */}
				<SortSelect searchQuery={searchQuery} />
				<CreateFeedback />
			</div>
		</div>
	);
}

export function FeedbackStatusSelect({
	searchQuery,
}: {
	searchQuery?: Accessor<SearchParamsType>;
}) {
	const navigate = useNavigate({
		from: "/$workspaceId",
	});

	return (
		<>
			<Select<Option>
				multiple
				value={
					searchQuery
						? searchQuery?.().status?.map((status) => ({
								label: status,
								value: status,
							})) || []
						: undefined
				}
				optionValue="value"
				optionTextValue="label"
				options={options}
				placeholder={
					<div class="grid size-8 place-items-center">
						<div class="iconify mynaui--circle-dashed size-5" aria-hidden />
						<span class="sr-only">Select a status</span>
					</div>
				}
				itemComponent={(props) => (
					<SelectItem item={props.item}>{props.item.rawValue.label}</SelectItem>
				)}
				placement="bottom-start"
				onChange={(e) => {
					if (searchQuery) {
						const status = e.map((item) => item.value);
						const clearAll = status.includes("clear");

						navigate({
							to: ".",

							search: (prev) => ({
								...prev,
								status: clearAll ? undefined : (status as StatusType),
							}),
						});
					}
				}}
			>
				<SelectTrigger
					aria-label="Status"
					as={Button<"button">}
					size="sm"
					variant="ghost"
					class="size-8 border-none p-0"
				>
					<SelectValue<string>>
						{(state) => (
							<div class="relative flex size-8 items-center justify-center ">
								<div class="iconify mynaui--circle-dashed size-5" aria-hidden />
								{state.selectedOptions().length > 0 && (
									<div class="-translate-y-1/2 -right-2 absolute bottom-3 rounded-sm border bg-secondary px-1 text-xs">
										{state.selectedOptions().length}
									</div>
								)}
							</div>
						)}
					</SelectValue>
				</SelectTrigger>
				<SelectContent />
			</Select>
		</>
	);
}

export function FeedbackTypeSelect({
	searchQuery,
}: {
	searchQuery?: Accessor<SearchParamsType>;
}) {
	const navigate = useNavigate({
		from: "/$workspaceId",
	});
	return (
		<Select<Option>
			multiple
			optionValue="value"
			optionTextValue="label"
			value={
				searchQuery
					? searchQuery?.().type?.map((type) => ({
							label: type,
							value: type,
						})) || []
					: undefined
			}
			options={[
				{
					label: "Bug",
					value: "bug",
				},
				{
					label: "Feature",
					value: "feature",
				},
				{
					label: "Improvement",
					value: "improvement",
				},
				{
					label: "Clear all",
					value: "clear",
				},
			]}
			placeholder={
				<div class="grid size-8 place-items-center">
					<div
						class="iconify solar--clipboard-text-line-duotone size-5 "
						aria-hidden
					/>
					<span class="sr-only">Select a type</span>
				</div>
			}
			itemComponent={(props) => (
				<SelectItem item={props.item}>{props.item.rawValue.label}</SelectItem>
			)}
			placement="bottom-start"
			onChange={(e) => {
				if (searchQuery) {
					const type = e.map((item) => item.value);
					const clearAll = type.includes("clear");

					navigate({
						to: ".",
						search: (prev) => ({
							...prev,
							type: clearAll ? undefined : (type as SearchParamsType["type"]),
						}),
					});
				}
			}}
		>
			<SelectTrigger
				aria-label="Type"
				as={Button<"button">}
				size="sm"
				variant="ghost"
				class="size-8 border-none p-0"
			>
				<SelectValue<string>>
					{(state) => (
						<div class="relative flex size-8 items-center justify-center">
							<div
								class="iconify solar--clipboard-text-line-duotone size-5"
								aria-hidden
							/>
							{state.selectedOptions().length > 0 && (
								<div class="-translate-y-1/2 -right-2 absolute bottom-3 rounded-sm border bg-secondary px-1 text-xs">
									{state.selectedOptions().length}
								</div>
							)}
						</div>
					)}
				</SelectValue>
			</SelectTrigger>
			<SelectContent />
		</Select>
	);
}

export function SortSelect({
	searchQuery,
}: {
	searchQuery?: Accessor<SearchParamsType>;
}) {
	const navigate = useNavigate({
		from: "/$workspaceId",
	});
	return (
		<Select
			options={["newest", "oldest", "hot"]}
			value={searchQuery ? searchQuery().order || "" : undefined}
			placeholder={
				<div class="grid size-8 place-items-center">
					<div class="iconify solar--list-arrow-up-broken size-5" aria-hidden />
					<span class="sr-only">Select a type</span>
				</div>
			}
			itemComponent={(props) => (
				<SelectItem item={props.item}>{props.item.rawValue}</SelectItem>
			)}
			placement="bottom-start"
			onChange={(e) => {
				if (searchQuery) {
					navigate({
						to: ".",

						search: (prev) => ({
							...prev,
							order: e ? (e as SearchParamsType["order"]) : undefined,
						}),
					});
				}
			}}
		>
			<SelectTrigger
				as={Button<"button">}
				size="sm"
				variant="ghost"
				class="size-8 border-none p-0"
				aria-label="Sort"
			>
				<SelectValue<string>>
					{(state) => (
						<Switch>
							<Match when={state.selectedOption() === "newest"}>
								<div class="relative flex size-8 items-center justify-center">
									<div
										class="iconify solar--sort-from-top-to-bottom-line-duotone size-5"
										aria-hidden
									/>
								</div>
							</Match>
							<Match when={state.selectedOption() === "oldest"}>
								<div class="relative flex size-8 items-center justify-center">
									<div
										class="iconify solar--sort-from-bottom-to-top-line-duotone size-5"
										aria-hidden
									/>
								</div>
							</Match>
							<Match when={state.selectedOption() === "hot"}>
								<div class="relative flex size-8 items-center justify-center">
									<div
										class="iconify solar--fire-bold-duotone size-5 fill-orange-600 text-orange-600"
										aria-hidden
									/>
								</div>
							</Match>
						</Switch>
					)}
				</SelectValue>
			</SelectTrigger>
			<SelectContent />
		</Select>
	);
}

export function FeedbackTagsSelect({
	searchQuery,
}: {
	searchQuery?: Accessor<SearchParamsType>;
}) {
	const navigate = useNavigate({
		from: "/$workspaceId",
	});

	return (
		<Select<Option>
			multiple
			optionValue="value"
			optionTextValue="label"
			value={
				searchQuery
					? searchQuery?.().tags?.map((tag) => ({
							label: tag,
							value: tag,
						})) || []
					: undefined
			}
			options={[
				{
					label: "Security",
					value: "security",
				},
				{
					label: "Performance",
					value: "performance",
				},
				{
					label: "Usability",
					value: "usability",
				},
				{
					label: "Design",
					value: "design",
				},
				{
					label: "Code Quality",
					value: "code-quality",
				},
				{
					label: "Other",
					value: "other",
				},
				{
					label: "Clear all",
					value: "clear",
				},
			]}
			placeholder={
				<div class="grid size-8 place-items-center">
					<div class="iconify solar--tag-line-duotone size-5 " aria-hidden />
					<span class="sr-only">Select a type</span>
				</div>
			}
			itemComponent={(props) => (
				<SelectItem item={props.item}>{props.item.rawValue.label}</SelectItem>
			)}
			placement="bottom-start"
			onChange={(e) => {
				if (searchQuery) {
					const tags = e.map((item) => item.value);
					const clearAll = tags.includes("clear");

					navigate({
						to: ".",

						search: (prev) => ({
							...prev,
							tags: clearAll ? undefined : (tags as SearchParamsType["tags"]),
						}),
					});
				}
			}}
		>
			<SelectTrigger
				as={Button<"button">}
				size="sm"
				variant="ghost"
				class="size-8 border-none p-0"
				aria-label="Tags"
			>
				<SelectValue<string>>
					{(state) => (
						<div class="relative flex size-8 items-center justify-center">
							<div
								class=" iconify solar--tag-linear size-5 text-red-500"
								aria-hidden
							/>
							{state.selectedOptions().length > 0 && (
								<div class="-translate-y-1/2 -right-2 absolute bottom-3 rounded-sm border bg-secondary px-1 text-xs">
									{state.selectedOptions().length}
								</div>
							)}
						</div>
					)}
				</SelectValue>
			</SelectTrigger>
			<SelectContent />
		</Select>
	);
}
