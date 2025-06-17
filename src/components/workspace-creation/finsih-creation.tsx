import { DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog";
import {} from "../ui/input";

export function FinishCreation() {
	return (
		<div class="slide-in-from-right-50 flex h-3/4 animate-in flex-col justify-center gap-4 md:h-1/2">
			<DialogHeader>
				<DialogTitle class="text-left text-2xl">All set!</DialogTitle>
				<DialogDescription class="text-left">
					Your workspace is ready to go!
				</DialogDescription>
			</DialogHeader>
			<p class="text-left text-foreground">
				Click on the workspace to start collecting feedback.
			</p>
		</div>
	);
}
