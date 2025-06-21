import { For, Match, Show, Switch } from "solid-js";
import { Button } from "../ui/Button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogFooter,
	DialogTrigger,
} from "../ui/dialog";
import { AddCollaborators } from "./add-collaborators";
import { AddName } from "./add-name";
import { AddWebsite } from "./add-website";
import { FinishCreation } from "./finsih-creation";
import { useCreateWorkspace } from "./use-create-workspace";

export function WorkspaceCreationDialog() {
	const {
		createWorkspaceForm: form,
		step,
		setPrevStep,
		setStep,
		direction,
	} = useCreateWorkspace();

	function handleNextStep() {
		if (step() >= 4) return;
		setPrevStep(step());
		setStep(step() + 1);
	}

	function handlePreviousStep() {
		if (step() <= 1) return;
		setPrevStep(step());
		setStep(step() - 1);
	}

	// Handles the form state for the create-workspace button
	const canSubmit = form.useStore((state) => state.canSubmit);
	const isLoading = form.useStore((state) => state.isSubmitting);
	const isValidating = form.useStore(
		(state) => state.fieldMeta.domain?.isValidating,
	);
	const validDomain = form.useStore((state) => state.fieldMeta.domain?.isValid);
	return (
		<Dialog>
			<DialogTrigger as={Button<"button">}>Edit Profile</DialogTrigger>
			<DialogContent class="h-80 gap-0 overflow-auto p-0 sm:max-w-3xl md:grid md:min-h-[500px] md:w-3xl md:grid-cols-2">
				<div class="flex w-full flex-col gap-2 bg-zinc-900 px-3 py-5 ">
					<div class="flex h-fit gap-1">
						<For each={Array.from({ length: 4 }, (_, i) => i + 1)}>
							{(item) => (
								<span
									class={`h-1.5 rounded-lg transition-[width,height] duration-200 ease-in-out ${
										step() === item
											? "w-6 bg-accent-foreground"
											: "w-3 bg-accent"
									}`}
								/>
							)}
						</For>
					</div>
					<div class="flex h-full flex-col items-start justify-between space-y-4 overflow-hidden p-px">
						<Switch>
							<Match when={step() === 1}>
								<AddWebsite form={form} />
							</Match>
							<Match when={step() === 2}>
								<AddName form={form} direction={direction} />
							</Match>
							<Match when={step() === 3}>
								<AddCollaborators />
							</Match>
							<Match when={step() === 4}>
								<FinishCreation />
							</Match>
						</Switch>
						<DialogFooter class="flex w-full flex-row items-center justify-end">
							<Switch>
								<Match when={step() === 1}>
									<Button
										disabled={isValidating() || !validDomain()}
										variant="default"
										onClick={handleNextStep}
									>
										Continue
										<div class="iconify solar--arrow-right-linear" />
									</Button>
								</Match>
								<Match when={step() === 2}>
									<Button
										variant="default"
										size="sm"
										onClick={handlePreviousStep}
									>
										<div class="iconify solar--arrow-left-linear" />
										Back
									</Button>
									<form
										onSubmit={(e) => {
											e.preventDefault();
											e.stopPropagation();
											form.handleSubmit();
										}}
									>
										<Button
											disabled={!canSubmit() || isLoading()}
											variant="default"
											size="sm"
											type="submit"
										>
											<Show
												when={isLoading()}
												fallback={
													<>
														Create workspace
														<div class="iconify solar--arrow-right-linear" />
													</>
												}
											>
												Creating workspace
												<div class="iconify tabler--loader-3 animate-spin" />
											</Show>
										</Button>
									</form>
								</Match>
								<Match when={step() === 3}>
									<Button variant="default" size="sm" onClick={handleNextStep}>
										Skip <div class="iconify solar--arrow-right-linear" />
									</Button>
								</Match>
								<Match when={step() === 4}>
									<DialogClose as={Button<"button">} variant="default">
										Start collecting
										<div class="iconify solar--arrow-right-linear" />
									</DialogClose>
								</Match>
							</Switch>
						</DialogFooter>
					</div>
				</div>
				<div class="hidden space-y-4 px-3 py-5 md:block">
					<span class="block bg-red-600 p-2 font-bold text-5xl">Collect</span>
					<span class="block bg-red-600 p-2 font-bold text-5xl">Discuss</span>
					<span class="block bg-red-600 p-2 font-bold text-5xl">Plan</span>
					<span class="block bg-red-600 p-2 font-bold text-5xl">Publish</span>
				</div>
			</DialogContent>
		</Dialog>
	);
}
