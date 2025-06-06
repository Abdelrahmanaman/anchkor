import { Link } from "@tanstack/solid-router";
import { Checkbox } from "../ui/checkbox";
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "../ui/dialog";
import { TextField, TextFieldInput, TextFieldLabel } from "../ui/input";
import { Separator } from "../ui/separator";

export default function AuthDialog() {
	return (
		<Dialog open>
			<DialogTrigger class="btn-secondary">
				<div class="i-solar:dialog-2-bold-duotone" />
				Sign In
			</DialogTrigger>

			<DialogContent
				onOpenAutoFocus={(e) => e.preventDefault()}
				class="max-w-sm "
			>
				<div class="flex flex-col items-center gap-2">
					<div
						class="flex size-11 shrink-0 items-center justify-center rounded-full border"
						aria-hidden="true"
					>
						<div class="i-solar:user-circle-bold-duotone text-2xl text-zinc-800 dark:text-zinc-100" />
					</div>
					<DialogHeader>
						<DialogTitle class="sm:text-center">Welcome back</DialogTitle>
					</DialogHeader>
				</div>

				<button
					type="button"
					class="btn-outline flex w-full items-center justify-center gap-2"
				>
					<img
						src="/google.svg"
						alt="Google logo" // Added alt text for accessibility
						width={24}
						height={24}
						class="size-5"
					/>
					<span>Login with Google</span>
				</button>

				<div class="relative">
					<div class="absolute inset-0 flex items-center">
						<Separator as="span" class="bg-secondary/40" />
					</div>
					<div class="relative flex justify-center text-xs uppercase">
						<span class="bg-background px-4 text-muted-foreground">or</span>
					</div>
				</div>

				<form class="space-y-5">
					<div class="space-y-4">
						<div>
							<TextField>
								<TextFieldLabel>Email</TextFieldLabel>
								<TextFieldInput
									placeholder="achkor.doe@example.com"
									type="email"
								/>
							</TextField>
						</div>
						<div>
							<TextField>
								<TextFieldLabel>Password</TextFieldLabel>
								<TextFieldInput
									type="password"
									placeholder="Enter your password"
								/>
							</TextField>
						</div>
					</div>

					<div class="flex items-center justify-between">
						<Checkbox label="Remember me" />
						<Link class="text-muted-foreground text-sm hover:underline" to="/">
							Forgot password?
						</Link>
					</div>

					<Link
						class="block w-full text-center text-sm underline hover:no-underline"
						to="/"
					>
						Don't have an account? <span class="font-semibold">Sign Up</span>
					</Link>
				</form>

				<DialogFooter>
					<button type="button" class="btn-primary w-full">
						Sign In
					</button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
