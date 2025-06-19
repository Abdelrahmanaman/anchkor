import { Show, createSignal } from "solid-js";
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
import { findWorkspaceUrl } from "./workspace-creation-fn";

interface AddNameProps {
	form: ReturnType<typeof useCreateWorkspace>["createWorkspaceForm"];
}

export function AddName({ form }: AddNameProps) {
	const logoUrl = form.useStore((state) => state.values.logo);
	const [isLoadingWorkspaceUrl, setIsLoadingWorkspaceUrl] = createSignal(false);

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
					onChangeAsyncDebounceMs: 500,
					onChangeAsync: async ({ fieldApi, value }) => {
						const errors = fieldApi.parseValueWithSchema(
							workspaceSchema.get("name"),
						);
						if (errors) {
							setValid((prev) => ({
								...prev,
								name: false,
							}));
							return errors;
						}
						try {
							const isTakenUrl = await findWorkspaceUrl({
								data: {
									url: value,
								},
							});
							console.log(isTakenUrl);
							if (isTakenUrl) {
								setValid((prev) => ({
									...prev,
									name: false,
								}));
								return "This workspace name is already taken";
							}
							setValid((prev) => ({
								...prev,
								name: true,
							}));
						} catch (error) {
							setValid((prev) => ({
								...prev,
								name: false,
							}));
							console.error("Error fetching website data:", error);
							return "Failed to get website Url";
						} finally {
							setIsLoadingWorkspaceUrl(false);
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
								<Show when={isLoadingWorkspaceUrl()}>
									<div class="iconify tabler--loader-3 -translate-y-1/2 absolute top-1/2 right-2 animate-spin " />
								</Show>

								<Show when={valid().name && !isLoadingWorkspaceUrl()}>
									<div class="iconify solar--check-read-linear -translate-y-1/2 absolute top-1/2 right-2 text-green-600" />
								</Show>
								<Show
									when={
										field().state.meta.errors.length > 0 &&
										!isLoadingWorkspaceUrl()
									}
								>
									<div class="iconify tabler--alert-square-rounded -translate-y-1/2 absolute top-1/2 right-2 text-destructive" />
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
