import { Show, createSignal } from "solid-js";
import { parse } from "tldts";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog";
import {
	TextField,
	TextFieldErrorMessage,
	TextFieldInput,
	TextFieldLabel,
} from "../ui/input";
import { getWebsiteData } from "./getWebsiteData";
import type { useCreateWorkspace } from "./use-create-workspace";
import { setValid, valid } from "./workspace-creation-dialog";

interface AddWebsiteProps {
	form: ReturnType<typeof useCreateWorkspace>["createWorkspaceForm"];
}

export function AddWebsite({ form }: AddWebsiteProps) {
	const [isLoadingWebsiteData, setIsLoadingWebsiteData] = createSignal(false);
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
					// onChange: ({ fieldApi }) => {
					// 	const errors = fieldApi.parseValueWithSchema(
					// 		workspaceSchema.get("domain"),
					// 	);
					// 	if (errors) return errors;
					// },
					onChangeAsyncDebounceMs: 500,
					onChangeAsync: async ({ value, fieldApi }) => {
						const domain = parse(value);
						if (!domain.isIcann) {
							setValid((prev) => ({
								...prev,
								domain: false,
							}));
							return "Please enter a valid domain";
						}

						setIsLoadingWebsiteData(true); // Set loading to true
						try {
							const data = await getWebsiteData({
								data: {
									domain: value,
								},
							});
							console.log(data);
							fieldApi.form.setFieldValue("logo", data.logoUrl ?? "");
							fieldApi.form.setFieldValue("title", data.title);
							fieldApi.form.setFieldValue("description", data.description);
							setValid((prev) => ({
								...prev,
								domain: true,
							}));
						} catch (error) {
							setValid((prev) => ({
								...prev,
								domain: false,
							}));
							console.error("Error fetching website data:", error);
							return "Failed to find this domain";
						} finally {
							setIsLoadingWebsiteData(false);
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
						<TextFieldLabel class="sr-only">Website URL</TextFieldLabel>
						<div class="flex w-full items-center gap-2">
							<Avatar class="size-9 rounded-lg">
								<AvatarImage src={logoUrl()} />
								<AvatarFallback>
									{field().state.value.slice(0, 2)}
								</AvatarFallback>
							</Avatar>
							<div class="relative isolate w-full">
								<TextFieldInput
									placeholder="eg: supercoolwebsite.com"
									id={field().name}
									value={field().state.value}
									onInput={(e) =>
										field().handleChange((e.target as HTMLInputElement).value)
									}
									class={`data-[invalid='']:focus-visible:ring-destructive ${valid().domain ? "focus-visible:ring-green-600" : ""}`}
								/>
								<Show when={isLoadingWebsiteData()}>
									<div class="iconify tabler--loader-3 -translate-y-1/2 absolute top-1/2 right-2 animate-spin " />
								</Show>

								<Show when={valid().domain && !isLoadingWebsiteData()}>
									<div class="iconify solar--check-read-linear -translate-y-1/2 absolute top-1/2 right-2 text-green-600" />
								</Show>
								<Show
									when={
										field().state.meta.errors.length > 0 &&
										!isLoadingWebsiteData()
									}
								>
									<div class="iconify tabler--alert-square-rounded -translate-y-1/2 absolute top-1/2 right-2 text-red-600" />
								</Show>
							</div>
						</div>
						<TextFieldErrorMessage
							class=" ml-12"
							error={field().state.meta.errors.join(",")}
						/>
					</TextField>
				)}
			</form.Field>
		</div>
	);
}
