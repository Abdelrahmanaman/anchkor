import { useParams } from "@tanstack/solid-router";
import { type Accessor, type Setter, createSignal } from "solid-js";
import { Button } from "~/components/ui/Button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "~/components/ui/dialog";
import {
	TextField,
	TextFieldInput,
	TextFieldLabel,
	TextFieldTextArea,
} from "~/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "~/components/ui/select";
import { useZero } from "~/components/zero-app";

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
] as const;

export type AddFeedback = {
	title: string;
	message: string;
	status:
		| "pending"
		| "reviewing"
		| "planned"
		| "in-progress"
		| "completed"
		| "closed";
	type: "bug" | "feature" | "improvement";
	tags: (
		| "security"
		| "performance"
		| "usability"
		| "design"
		| "code-quality"
		| "other"
	)[];
	workspaceId: string;
};
export default function CreateFeedback() {
	const params = useParams({
		from: "/_layout/$workspaceId/",
	});
	const [addFeedback, setAddFeedback] = createSignal<AddFeedback>({
		title: "",
		message: "",
		status: "pending",
		type: "bug",
		tags: ["security"],
		workspaceId: params().workspaceId,
	});
	const isValid = () =>
		addFeedback().title.trim() !== "" && addFeedback().message.trim() !== "";
	const z = useZero();

	function handleFeedbackCreation() {
		z().mutate.feedback.create({
			workspaceId: params().workspaceId,
			title: addFeedback().title,
			message: addFeedback().message,
			status: addFeedback().status,
			type: addFeedback().type,
			tags: addFeedback().tags,
		});
		setAddFeedback({
			title: "",
			message: "",
			status: "pending",
			type: "bug",
			tags: ["security"],
			workspaceId: params().workspaceId,
		});
	}
	return (
		<Dialog>
			<DialogTrigger
				as={Button<"button">}
				size="sm"
				variant="ghost"
				class="h-8 w-8 p-0"
			>
				<div class="iconify mynaui--plus size-5" />
				<span class="sr-only">Create Feedback</span>
			</DialogTrigger>
			<DialogContent class="w-full md:h-80 md:w-2xl">
				<DialogHeader class="sr-only">
					<DialogTitle>Create Feedback</DialogTitle>
					<DialogDescription>
						Make changes to your profile here. Click save when you're done.
					</DialogDescription>
				</DialogHeader>
				<div class="space-y-2 py-4">
					<TextField class=" gap-4">
						<TextFieldLabel class="sr-only text-right">Name</TextFieldLabel>
						<TextFieldInput
							placeholder="Title"
							class="border-none bg-transparent p-0 font-semibold text-xl placeholder:text-xl focus-visible:border-none focus-visible:ring-0 md:text-xl"
							type="text"
							onInput={(e) =>
								setAddFeedback({
									...addFeedback(),
									title: (e.target as HTMLInputElement).value,
								})
							}
							value={addFeedback().title ?? ""}
						/>
					</TextField>
					<TextField class="gap-4">
						<TextFieldLabel class="sr-only text-right">Username</TextFieldLabel>
						<TextFieldTextArea
							placeholder="Description"
							class=" h-24 resize-none border-none p-0 font-semibold text-xl placeholder:text-xl focus-visible:border-none focus-visible:ring-0 md:text-xl"
							onInput={(e) =>
								setAddFeedback({
									...addFeedback(),
									message: (e.target as HTMLTextAreaElement).value,
								})
							}
							value={addFeedback().message ?? ""}
						/>
					</TextField>
					<div class="flex flex-wrap items-center gap-2">
						<FeedbackStatusSelect
							setAddFeedback={setAddFeedback}
							accessAddFeedback={addFeedback}
						/>
						<FeedbackTypeSelect
							setAddFeedback={setAddFeedback}
							accessAddFeedback={addFeedback}
						/>
						<FeedbackTagsSelect
							setAddFeedback={setAddFeedback}
							accessAddFeedback={addFeedback}
						/>
					</div>
				</div>

				<DialogFooter>
					<Button
						// onClick={() => {
						// 	const id = nanoid();
						// 	z().mutate.feedback.create({

						// 		workspaceId: "IUcB7UEqV_VYoqvXSso6C",
						// 		title: addFeedback().title,
						// 		message: addFeedback().message,
						// 		status: addFeedback().status,
						// 		type: addFeedback().type,
						// 		tags: addFeedback().tags,
						// 	});
						// }}
						onClick={handleFeedbackCreation}
						disabled={!isValid()}
					>
						Create Feedback
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}

function FeedbackStatusSelect({
	setAddFeedback,
	accessAddFeedback,
}: {
	setAddFeedback: Setter<AddFeedback>;
	accessAddFeedback: Accessor<AddFeedback>;
}) {
	return (
		<Select<Option>
			options={options}
			optionValue="value"
			optionTextValue="label"
			defaultValue={options[0]}
			itemComponent={(props) => (
				<SelectItem item={props.item}>{props.item.rawValue.label}</SelectItem>
			)}
			placement="bottom-start"
			onChange={(e) => {
				if (e) {
					setAddFeedback((prev) => ({
						...prev,
						status: e.value as AddFeedback["status"],
					}));
				}
			}}
		>
			<SelectTrigger
				aria-label="Type"
				class="flex h-8 w-full items-center justify-center gap-1 truncate border-transparent bg-accent px-1 text-sm "
			>
				<div class="iconify tabler--inner-shadow-bottom-left-filled size-5 text-yellow-600" />
				<SelectValue<Option>>
					{(state) => (
						<div class="flex items-center gap-1">
							{state.selectedOption().label}
						</div>
					)}
				</SelectValue>
			</SelectTrigger>
			<SelectContent />
		</Select>
	);
}

function FeedbackTypeSelect({
	setAddFeedback,
	accessAddFeedback,
}: {
	setAddFeedback: Setter<AddFeedback>;
	accessAddFeedback: Accessor<AddFeedback>;
}) {
	return (
		<Select
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
			]}
			optionValue="value"
			optionTextValue="label"
			defaultValue={{
				label: "Bug",
				value: accessAddFeedback().type,
			}}
			onChange={(e) => {
				if (e) {
					setAddFeedback((prev) => ({
						...prev,
						type: e.value as AddFeedback["type"],
					}));
				}
			}}
			itemComponent={(props) => (
				<SelectItem item={props.item}>{props.item.rawValue.label}</SelectItem>
			)}
			placement="bottom-start"
		>
			<SelectTrigger
				aria-label="Type"
				class="flex h-8 w-full items-center justify-center gap-1 truncate border-transparent bg-accent px-1 text-sm "
			>
				<div class="iconify solar--clipboard-heart-bold-duotone size-5 text-red-400" />
				<SelectValue<Option>>
					{(state) => state.selectedOption().label}
				</SelectValue>
			</SelectTrigger>
			<SelectContent />
		</Select>
	);
}

function FeedbackTagsSelect({
	setAddFeedback,
	accessAddFeedback,
}: {
	setAddFeedback: Setter<AddFeedback>;
	accessAddFeedback: Accessor<AddFeedback>;
}) {
	return (
		<>
			<Select<AddFeedback["tags"][number] | "clear">
				multiple
				options={[
					"security",
					"performance",
					"usability",
					"design",
					"code-quality",
					"other",
					"clear",
				]}
				value={accessAddFeedback().tags}
				onChange={(e) => {
					const clearAll = e.includes("clear");
					setAddFeedback((prev) => ({
						...prev,
						tags: clearAll ? [] : (e as AddFeedback["tags"]),
					}));
				}}
				itemComponent={(props) => (
					<SelectItem class="capitalize" item={props.item}>
						{props.item.rawValue}
					</SelectItem>
				)}
				placement="bottom-start"
			>
				<SelectTrigger
					aria-label="Type"
					class="relative isolate h-8 w-full border-transparent bg-accent px-1 text-sm "
				>
					<div class="iconify solar--tag-bold-duotone size-5 text-purple-400" />
					<SelectValue<string>>
						{(state) =>
							state.selectedOptions().length > 0 && (
								<div class="-translate-y-1/2 -right-2 absolute bottom-3 rounded-sm border bg-secondary px-1 text-xs">
									{state.selectedOptions().length}
								</div>
							)
						}
					</SelectValue>
				</SelectTrigger>
				<SelectContent />
			</Select>
		</>
	);
}
