import { Show } from "solid-js";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog";
import {
	TextField,
	TextFieldErrorMessage,
	TextFieldInput,
	TextFieldLabel,
} from "../ui/input";
import {
	type useCreateWorkspace,
	workspaceSchema,
} from "./use-create-workspace";
import { setValid, valid } from "./workspace-creation-dialog";
import { direction } from "./workspace-creation-dialog";

interface AddNameProps {
	form: ReturnType<typeof useCreateWorkspace>["createWorkspaceForm"];
}

export function AddName({ form }: AddNameProps) {
	const logoUrl = form.useStore((state) => state.values.logo);
	return (
		<div
			class={` flex h-3/4 animate-in flex-col justify-center gap-4 md:h-1/2 ${
				direction() === "forward"
					? "slide-in-from-left-50"
					: "slide-in-from-right-50"
			}`}
		>
			<DialogHeader>
				<DialogTitle class="text-left text-2xl">
					Choose a workspace name.
				</DialogTitle>
				<DialogDescription class="text-left">
					What should we call this workspace? Usually, this is your product name
				</DialogDescription>
			</DialogHeader>
			<form.Field
				name="name"
				validators={{
					onChange: ({ fieldApi }) => {
						const errors = fieldApi.parseValueWithSchema(
							workspaceSchema.get("name"),
						);
						if (errors) return errors;
						setValid((prev) => ({
							...prev,
							name: true,
						}));
					},
				}}
			>
				{(field) => (
					<TextField
						class="w-full"
						validationState={
							field().state.meta.errors.length > 0 ? "invalid" : "valid"
						}
					>
						<TextFieldLabel class="sr-only">Workspace Name</TextFieldLabel>
						<div class="flex w-full items-center gap-2">
							<Avatar class="size-9 rounded-lg">
								<AvatarImage src={logoUrl()} />
								<AvatarFallback>
									{field().state.value.slice(0, 2)}
								</AvatarFallback>
							</Avatar>
							<div class="relative isolate w-full">
								<TextFieldInput
									placeholder="eg: supercoolwebsite"
									id={field().name}
									value={field().state.value}
									onInput={(e) =>
										field().handleChange(
											(e.target as HTMLInputElement).value.replace(/\s/g, ""),
										)
									}
									onKeyDown={(e) => {
										if (e.key === " " || e.key === "Spacebar") {
											e.preventDefault();
										}
									}}
									class={`data-[invalid='']:focus-visible:ring-destructive ${valid().name ? "focus-visible:ring-green-600" : ""}`}
								/>
								<Show when={valid().name && !field().state.meta.errors.length}>
									<div class="iconify solar--check-read-linear -translate-y-1/2 absolute top-1/2 right-2 text-green-600" />
								</Show>
								<Show when={field().state.meta.errors.length > 0}>
									<div class="iconify tabler--alert-square-rounded -translate-y-1/2 absolute top-1/2 right-2 text-red-600" />
								</Show>
							</div>
						</div>
						<TextFieldErrorMessage
							class=" ml-12"
							error={field().state.meta.errors.join(",")}
						/>
						<Show when={valid().name && !field().state.meta.errors.length}>
							<p class="ml-11 text-muted-foreground text-xs">
								{field().state.value}.anchkor.com
							</p>
						</Show>
					</TextField>
				)}
			</form.Field>
		</div>
	);
}
