import { createForm } from "@tanstack/solid-form";
import { Link, createFileRoute } from "@tanstack/solid-router";
import { Show } from "solid-js";
import {
	TextField,
	TextFieldErrorMessage,
	TextFieldInput,
	TextFieldLabel,
} from "~/components/ui/input";
import { Separator } from "~/components/ui/separator";
import { signUp } from "~/lib/auth-client";
import { type RegisterType, registerSchema } from "./-validation";

export const Route = createFileRoute("/(auth)/register")({
	component: RouteComponent,
});

function RouteComponent() {
	const form = createForm(() => ({
		defaultValues: {
			email: "",
			password: "",
			firstName: "",
			lastName: "",
		} as RegisterType,
		onSubmit: async ({ value }) => {
			await signUp.email({
				email: value.email,
				name: `${value.firstName} ${value.lastName}`,
				password: value.password,
			});
		},
	}));

	return (
		<section class="grid h-full place-content-center ">
			<div class="max-w-[24rem] space-y-4 rounded-xl border border-border p-6 ">
				<div class="sm:text-center">Register</div>

				<button
					type="button"
					class="btn-outline flex w-full items-center justify-center gap-2"
					onclick={() => {}}
				>
					<img
						src="/google.svg"
						alt="Google logo"
						width={24}
						height={24}
						class="size-5"
					/>
					<span>Register with Google</span>
				</button>

				<div class="relative my-4">
					<div class="absolute inset-0 flex items-center">
						<Separator as="span" class="bg-primary/40" />
					</div>
					<div class="relative flex justify-center text-xs uppercase">
						<span class="bg-background px-4 text-muted-foreground">or</span>
					</div>
				</div>

				<form
					class="space-y-4"
					onSubmit={(e) => {
						e.preventDefault();
						e.stopPropagation();
						form.handleSubmit();
					}}
				>
					<div class="flex flex-wrap items-center gap-4 sm:flex-nowrap">
						<form.Field
							name="firstName"
							validators={{
								onChange: ({ fieldApi }) => {
									const errors = fieldApi.parseValueWithSchema(
										registerSchema.get("firstName"),
									);
									if (errors) return errors;
								},
							}}
						>
							{(field) => (
								<TextField
									validationState={
										field().state.meta.errors.length > 0 ? "invalid" : "valid"
									}
									class="w-full"
								>
									<TextFieldLabel>First Name</TextFieldLabel>
									<TextFieldInput
										type="text"
										class=""
										placeholder="First Name"
										id={field().name}
										value={field().state.value}
										onInput={(e) =>
											field().handleChange((e.target as HTMLInputElement).value)
										}
									/>
									<TextFieldErrorMessage
										error={field().state.meta.errors.join(",")}
									/>
								</TextField>
							)}
						</form.Field>
						<form.Field
							name="lastName"
							validators={{
								onChange: ({ fieldApi }) => {
									const errors = fieldApi.parseValueWithSchema(
										registerSchema.get("lastName"),
									);
									if (errors) return errors;
								},
							}}
						>
							{(field) => (
								<TextField
									validationState={
										field().state.meta.errors.length > 0 ? "invalid" : "valid"
									}
									class="w-full"
								>
									<TextFieldLabel>Last Name</TextFieldLabel>
									<TextFieldInput
										type="text"
										placeholder="Last Name"
										id={field().name}
										value={field().state.value}
										onInput={(e) =>
											field().handleChange((e.target as HTMLInputElement).value)
										}
									/>
									<TextFieldErrorMessage
										error={field().state.meta.errors.join(",")}
									/>
								</TextField>
							)}
						</form.Field>
					</div>
					<form.Field
						name="email"
						validators={{
							onChange: ({ fieldApi }) => {
								const errors = fieldApi.parseValueWithSchema(
									registerSchema.get("email"),
								);
								if (errors) return errors;
							},
						}}
					>
						{(field) => (
							<TextField
								validationState={
									field().state.meta.errors.length > 0 ? "invalid" : "valid"
								}
							>
								<TextFieldLabel>Email</TextFieldLabel>
								<TextFieldInput
									placeholder="achkor.doe@example.com"
									type="email"
									id={field().name}
									value={field().state.value}
									onInput={(e) =>
										field().handleChange((e.target as HTMLInputElement).value)
									}
								/>
								<TextFieldErrorMessage
									error={field().state.meta.errors.join(",")}
								/>
							</TextField>
						)}
					</form.Field>
					<form.Field
						name="password"
						validators={{
							onChange: ({ fieldApi }) => {
								const errors = fieldApi.parseValueWithSchema(
									registerSchema.get("password"),
								);
								if (errors) return errors;
							},
						}}
					>
						{(field) => (
							<TextField
								validationState={
									field().state.meta.errors.length > 0 ? "invalid" : "valid"
								}
							>
								<TextFieldLabel>Password</TextFieldLabel>
								<TextFieldInput
									type="password"
									placeholder="Enter your password"
									id={field().name}
									value={field().state.value}
									onInput={(e) =>
										field().handleChange((e.target as HTMLInputElement).value)
									}
								/>
								<TextFieldErrorMessage
									error={field().state.meta.errors.join(",")}
								/>
							</TextField>
						)}
					</form.Field>
					<Link class="block w-full text-sm hover:underline" to="/login">
						Already have an account? <span class="font-semibold">Sign In</span>
					</Link>
					<form.Subscribe
						selector={(state) => ({
							canSubmit: state.canSubmit,
							isSubmitting: state.isSubmitting,
						})}
					>
						{(state) => (
							<Show
								when={state().isSubmitting}
								fallback={
									<button
										type="submit"
										disabled={!state().canSubmit}
										class="btn-primary w-full"
									>
										Register
									</button>
								}
							>
								<button
									type="submit"
									disabled={!state().canSubmit}
									class="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-50"
								>
									<div
										aria-hidden
										class="i-tabler:loader-2 animate-duration-700 animate-spin"
									/>
									Registering
								</button>
							</Show>
						)}
					</form.Subscribe>
				</form>
			</div>
		</section>
	);
}
