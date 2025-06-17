import { Match, Show, Switch, createMemo, createSignal } from "solid-js";
import { Button } from "../ui/Button";
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogTrigger,
} from "../ui/dialog";
import { AddCollaborators } from "./add-collaborators";
import { AddName } from "./add-name";
import { AddWebsite } from "./add-website";
import { FinishCreation } from "./finsih-creation";

export const [step, setStep] = createSignal(1);
export const [prevStep, setPrevStep] = createSignal(1);

export const direction = createMemo(() => {
	return step() > prevStep() ? "forward" : "backward";
});

export function WorkspaceCreationDialog() {
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
	return (
		<Dialog>
			<DialogTrigger as={Button<"button">}>Edit Profile</DialogTrigger>
			<DialogContent class="h-80 gap-0 overflow-auto p-0 sm:max-w-3xl md:grid md:min-h-[500px] md:w-3xl md:grid-cols-2">
				<div class="flex w-full flex-col gap-2 bg-zinc-900 px-3 py-5 ">
					<div class="flex h-fit gap-1">
						<span
							class={`h-1.5 w-3 rounded-lg transition-[width,height] duration-200 ease-in-out ${
								step() === 1 ? "w-6 bg-accent-foreground" : "w-3 bg-accent"
							}`}
						/>
						<span
							class={`h-1.5 w-3 rounded-lg transition-[width,height] duration-200 ease-in-out ${
								step() === 2 ? "w-6 bg-accent-foreground" : "w-3 bg-accent"
							}`}
						/>
						<span
							class={`h-1.5 w-3 rounded-lg transition-[width,height] duration-200 ease-in-out ${
								step() === 3 ? "w-6 bg-accent-foreground" : "w-3 bg-accent"
							}`}
						/>
						<span
							class={`h-1.5 w-3 rounded-lg transition-[width,height] duration-200 ease-in-out ${
								step() === 4 ? "w-6 bg-accent-foreground" : "w-3 bg-accent"
							}`}
						/>
					</div>
					<div class="flex h-full flex-col items-start justify-between space-y-4 overflow-hidden p-px">
						<Switch>
							<Match when={step() === 1}>
								<AddWebsite />
							</Match>
							<Match when={step() === 2}>
								<AddName />
							</Match>
							<Match when={step() === 3}>
								<AddCollaborators />
							</Match>
							<Match when={step() === 4}>
								<FinishCreation />
							</Match>
						</Switch>
						<DialogFooter class="flex w-full flex-row items-center justify-end ">
							<Show when={step() > 1 && step() < 4}>
								<Button
									variant="default"
									size="sm"
									onClick={handlePreviousStep}
								>
									Previous <div class="iconify solar--arrow-left-linear" />
								</Button>
							</Show>
							<Show when={step() === 4}>
								<Button variant="default" size="sm" onClick={handleNextStep}>
									Start collecting
								</Button>
							</Show>
							<Show when={step() < 4}>
								<Button
									disabled={step() >= 4}
									variant="default"
									size="sm"
									onClick={handleNextStep}
								>
									Next <div class="iconify solar--arrow-right-linear" />
								</Button>
							</Show>
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
