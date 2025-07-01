import { Show } from "solid-js";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Label } from "~/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "~/components/ui/select";
import { Separator } from "~/components/ui/separator";
import { formatDate } from "~/utils/date";
import type { FeedbackData } from "./feedback-card";

interface FeedbackInfoProps {
	feedback: FeedbackData;
}
export default function FeedbackInfo(props: FeedbackInfoProps) {
	console.log(props.feedback.type);
	return (
		<aside class="space-y-4 px-4">
			<div class="flex items-center justify-between">
				<div class="flex items-center gap-2">
					<button
						type="button"
						class="group flex justify-center rounded-md border border-border p-1 hover:bg-accent"
					>
						<div class="iconify mynaui--external-link size-5 text-muted-foreground" />
					</button>
					<button
						type="button"
						class="group flex justify-center rounded-md border border-border p-1 hover:bg-accent"
					>
						<div class="iconify mynaui--copy-solid size-5 text-muted-foreground" />
					</button>
				</div>
				<button
					type="button"
					class="group flex justify-center rounded-md border border-destructive/40 bg-destructive/20 p-1 hover:bg-destructive/40 "
				>
					<div
						class="iconify solar--trash-bin-minimalistic-bold-duotone size-5 text-destructive/80 group-hover:text-destructive"
						aria-hidden="true"
					/>
				</button>
			</div>
			<div class="flex items-center gap-2">
				<Avatar class="size-10 border">
					<AvatarImage src={props.feedback.user.image || ""} />
					<AvatarFallback>
						{props.feedback.user.name
							.split(" ")
							.map((n) => n[0])
							.join("")}
					</AvatarFallback>
				</Avatar>
				<div class="space-y-2 text-xs">
					<p>{props.feedback.user.name}</p>
					<Show when={props.feedback.createdAt}>
						{(createdAt) => (
							<time datetime={createdAt().toLocaleString()}>
								{formatDate(createdAt())}
							</time>
						)}
					</Show>
				</div>
			</div>
			<Separator />
			<div class="flex items-center justify-between">
				<Label for="type">Type</Label>
				<Select
					id="type"
					options={["bug", "feature", "improvement"]}
					placeholder="Type"
					itemComponent={(props) => (
						<SelectItem item={props.item}>{props.item.rawValue}</SelectItem>
					)}
					defaultValue={props.feedback.type}
				>
					<SelectTrigger aria-label="Fruit" class="w-[180px]">
						<SelectValue<string>>
							{(state) => state.selectedOption()}
						</SelectValue>
					</SelectTrigger>
					<SelectContent />
				</Select>
			</div>
			<div class="flex items-center justify-between">
				<Label for="status">Priority</Label>
				<Select
					id="status"
					options={["pending", "in-progress", "done"]}
					placeholder="Priority"
					itemComponent={(props) => (
						<SelectItem item={props.item}>{props.item.rawValue}</SelectItem>
					)}
					defaultValue={props.feedback.status}
				>
					<SelectTrigger aria-label="Fruit" class="w-[180px]">
						<SelectValue<string>>
							{(state) => state.selectedOption()}
						</SelectValue>
					</SelectTrigger>
					<SelectContent />
				</Select>
			</div>
			<Separator />
			<div class="space-y-2">
				<div class="flex items-center justify-between ">
					<Label class="flex items-center gap-2">
						Tags
						<div class="iconify solar--info-circle-outline size-4 text-muted-foreground " />
					</Label>
					<button
						type="button"
						class="flex justify-center rounded-md border border-border px-px hover:bg-accent"
					>
						<div class="iconify mynaui--plus-solid" />
					</button>
				</div>

				<div class="flex h-12 items-center justify-center gap-1 rounded-lg border border-dashed bg-accent/40 p-2 text-center">
					<div class="iconify solar--tag-bold-duotone size-5" />
					No tags
				</div>
			</div>
		</aside>
	);
}
