import { createForm } from "@tanstack/solid-form";
import { Link, createFileRoute } from "@tanstack/solid-router";
import { Show } from "solid-js";
import { Checkbox } from "~/components/ui/checkbox";
import {
	TextField,
	TextFieldInput,
	TextFieldLabel,
} from "~/components/ui/input";
import { Separator } from "~/components/ui/separator";
import { signIn } from "~/lib/auth-client";
import type { LoginType } from "./-validation";

export const Route = createFileRoute("/(auth)/login")({
	component: RouteComponent,
});

function RouteComponent() {
	const form = createForm(() => ({
		defaultValues: {
			email: "",
			password: "",
		} as LoginType,
		onSubmit: async ({ value }) => {
			const d = await signIn.email({
				email: value.email,
				password: value.password,
			});
		},
	}));
	return (
		<section class="grid h-full place-content-center ">
			<div class="min-w-[22rem] space-y-4 rounded-xl border border-border p-6 ">
				<div class="flex flex-col items-center gap-2">
					<div
						class="flex size-11 shrink-0 items-center justify-center rounded-full border"
						aria-hidden="true"
					>
						<div class="i-solar:user-circle-bold-duotone text-2xl text-zinc-800 dark:text-zinc-100" />
					</div>
					<div class="sm:text-center">Welcome back</div>
				</div>

				<button
					type="button"
					class="btn-outline flex w-full items-center justify-center gap-2"
					onclick={async () => {
						await signIn.social({
							provider: "google",
						});
					}}
				>
					<img
						src="/google.svg"
						alt="Google logo"
						width={24}
						height={24}
						class="size-5"
					/>
					<span>Login with Google</span>
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
					on:submit={(e) => {
						e.preventDefault();
						e.stopPropagation();
						form.handleSubmit();
					}}
				>
					<form.Field name="email">
						{(field) => (
							<TextField>
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
							</TextField>
						)}
					</form.Field>
					<form.Field name="password">
						{(field) => (
							<TextField>
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
							</TextField>
						)}
					</form.Field>

					<div class="flex items-center justify-between">
						<Checkbox label="Remember me" />
						<Link class="text-muted-foreground text-sm hover:underline" to="/">
							Forgot password?
						</Link>
					</div>

					<Link class="block w-full text-sm hover:underline" to="/register">
						Don't have an account? <span class="font-semibold">Sign Up</span>
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
										Login
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
									Logging-in
								</button>
							</Show>
						)}
					</form.Subscribe>
				</form>
			</div>
		</section>
	);
}
