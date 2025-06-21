import { createForm } from "@tanstack/solid-form";
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
	const form = createForm(() => ({
		defaultValues: {
			email: "",
		} as EmailType,
		onSubmit: async ({ value }) => {
			await addCollaborator({
				data: {
					email: value.email,
				},
			});

			form.reset();
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
						onChange: ({ fieldApi }) => {
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
										placeholder={"jonn@jonzz.com"}
										class="peer pl-9 placeholder-shown:"
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

									<div class="iconify -translate-y-1/2 solar--users-group-two-rounded-linear absolute top-1/2 left-2 " />
								</div>
								<Button type="submit" size="icon">
									<div class="iconify solar--user-plus-rounded-linear size-5" />
								</Button>
							</div>
							<TextFieldErrorMessage
								error={field().state.meta.errors.join(",")}
							/>
						</TextField>
					)}
				</form.Field>
			</form>
		</div>
	);
}
