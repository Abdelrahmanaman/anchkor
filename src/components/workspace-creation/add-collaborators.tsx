import { createForm } from "@tanstack/solid-form";
import { createSignal } from "solid-js";
import { Button } from "../ui/Button";
import { DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog";
import {
	TextField,
	TextFieldErrorMessage,
	TextFieldInput,
	TextFieldLabel,
} from "../ui/input";
import { type EmailType, email } from "./use-create-workspace";
import { addCollaborator } from "./workspace-creation-fn";
export function AddCollaborators() {
	const [copy, setCopy] = createSignal(false);

	const form = createForm(() => ({
		defaultValues: {
			email: "",
		} as EmailType,
		onSubmit: async ({ value }) => {
			console.log(value);
			await addCollaborator({
				data: {
					email: value.email,
				},
			});
		},
	}));
	return (
		<div class="slide-in-from-left-50 flex h-3/4 animate-in flex-col justify-center gap-4 md:h-1/2">
			<DialogHeader>
				<DialogTitle class="text-left text-2xl">Add collaborators.</DialogTitle>
				<DialogDescription class="text-left">
					Invite your team members to collaborate on this workspace with you.
				</DialogDescription>
			</DialogHeader>

			{/* <div class=" flex items-center justify-between rounded-lg bg-secondary/70 ">
				<input
					type="text"
					class="ml-2"
					readOnly
					disabled
					value="https://anchkor.com/"
				/>
				<Button
					variant="ghost"
					size="icon"
					onClick={() => {
						navigator.clipboard.writeText("https://anchkor.com/");
						setTimeout(() => {
							setCopy(false);
						}, 2000);
						setCopy(true);
					}}
					class="rounded-none rounded-tr-lg rounded-br-lg border-l"
					disabled={copy()}
				>
					<span class="sr-only">Copy</span>
					<div
						class={`iconify ${copy() ? " tabler--copy-check-filled text-muted-foreground" : "solar--copy-linear"}`}
					/>
				</Button>
			</div> */}

			<form
				on:submit={(e) => {
					e.preventDefault();
					e.stopPropagation();
					form.handleSubmit();
				}}
			>
				<form.Field
					name="email"
					validators={{
						onChange: ({ fieldApi, value }) => {
							const errors = fieldApi.parseValueWithSchema(email.get("email"));
							if (errors) {
								return errors;
							}
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
							<TextFieldLabel class="sr-only">Email</TextFieldLabel>
							<div class="flex w-full items-center gap-2">
								<div class="relative w-full">
									<TextFieldInput
										class="peer pl-9"
										id={field().name}
										value={field().state.value}
										onInput={(e) =>
											field().handleChange((e.target as HTMLInputElement).value)
										}
										onKeyDown={(e) => {
											if (e.key === " " || e.key === "Spacebar") {
												e.preventDefault();
											}
										}}
									/>
									<TextFieldLabel class="-translate-y-1/2 absolute top-1/2 left-9 transition-opacity peer-focus:opacity-0">
										jonn@jonzz.com
									</TextFieldLabel>
									<div class="iconify -translate-y-1/2 solar--users-group-two-rounded-linear absolute top-1/2 left-2" />
								</div>
								{/* <Button type="submit" size="icon">
									<div class="iconify solar--user-plus-rounded-linear size-5" />
								</Button> */}
							</div>
							<TextFieldErrorMessage
								error={field().state.meta.errors.join(",")}
							/>
						</TextField>
					)}
				</form.Field>
				<Button type="submit" size="icon">
					<div class="iconify solar--user-plus-rounded-linear size-5" />
				</Button>
			</form>
		</div>
	);
}
