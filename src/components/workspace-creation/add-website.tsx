import { Show } from "solid-js";
import { parse } from "tldts";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog";
import {
	TextField,
	TextFieldErrorMessage,
	TextFieldInput,
	TextFieldLabel,
} from "../ui/input";
import type { useCreateWorkspace } from "./use-create-workspace";
import { getWebsiteData } from "./workspace-creation-fn";

interface AddWebsiteProps {
	form: ReturnType<typeof useCreateWorkspace>["createWorkspaceForm"];
}

export function AddWebsite({ form }: AddWebsiteProps) {
	const logoUrl = form.useStore((state) => state.values.logo);
	return (
		<div class="slide-in-from-right-50 flex h-3/4 animate-in flex-col justify-center gap-4 md:h-1/2">
			<DialogHeader>
				<DialogTitle class="text-left text-2xl">
					First things first.
				</DialogTitle>
				<DialogDescription class="text-left">
					Which website do you want to collect feedback for?
				</DialogDescription>
			</DialogHeader>
			<form.Field
				name="domain"
				validators={{
					onChangeAsyncDebounceMs: 500,
					onChangeAsync: async ({ value, fieldApi }) => {
						const domain = parse(value);
						if (!domain.isIcann) {
							return "Please enter a valid domain";
						}
						try {
							const data = await getWebsiteData({
								data: {
									domain: value,
								},
							});
							console.log(data);
							fieldApi.form.setFieldValue("name", value.split(".")[0]);
							fieldApi.form.setFieldValue("logo", data.logoUrl ?? "");
							fieldApi.form.setFieldValue("title", data.title);
							fieldApi.form.setFieldValue("description", data.description);
						} catch (error) {
							console.error("Error fetching website data:", error);
							return "Failed to find this domain";
						}
					},
				}}
				listeners={{
					onChange: ({ fieldApi }) => {
						fieldApi.form.setFieldValue("logo", "");
						fieldApi.form.setFieldValue("name", "");
						fieldApi.form.setFieldValue("title", "");
						fieldApi.form.setFieldValue("description", "");
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
						<TextFieldLabel class="sr-only">Website URL</TextFieldLabel>
						<div class="flex w-full items-center gap-2">
							<Show when={logoUrl()}>
								<Avatar class="slide-in-from-left size-9 animate-in rounded-lg">
									<AvatarImage src={logoUrl()} />
									<AvatarFallback>
										{field().state.value.slice(0, 2)}
									</AvatarFallback>
								</Avatar>
							</Show>
							<div class="relative isolate w-full">
								<TextFieldInput
									placeholder="eg: supercoolwebsite.com"
									id={field().name}
									value={field().state.value}
									onInput={(e) =>
										field().handleChange(
											(e.target as HTMLInputElement).value.toLowerCase(),
										)
									}
									class={`transition-[width] duration-200 ease-in data-[invalid='']:focus-visible:ring-destructive ${field().state.meta.errors.length > 0 ? "focus-visible:ring-destructive" : ""}`}
								/>
								<Show when={field().state.meta.isValidating}>
									<div class="iconify tabler--loader-3 -translate-y-1/2 absolute top-1/2 right-2 animate-spin " />
								</Show>

								<Show
									when={
										field().state.meta.isValid &&
										!field().state.meta.isValidating &&
										!field().state.meta.isPristine
									}
								>
									<div class="iconify solar--check-read-linear -translate-y-1/2 absolute top-1/2 right-2 text-green-600" />
								</Show>
								<Show when={field().state.meta.errors.length > 0}>
									<div class="iconify tabler--alert-square-rounded -translate-y-1/2 absolute top-1/2 right-2 text-destructive" />
								</Show>
							</div>
						</div>
						<TextFieldErrorMessage
							error={field().state.meta.errors.join(",")}
						/>
					</TextField>
				)}
			</form.Field>
		</div>
	);
}
