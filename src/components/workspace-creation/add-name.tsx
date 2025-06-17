import { DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog";
import { TextField, TextFieldInput, TextFieldLabel } from "../ui/input";
import { direction } from "./workspace-creation-dialog";

export function AddName() {
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
			<TextField class="w-full">
				<TextFieldLabel class="sr-only">Workspace Name</TextFieldLabel>
				<TextFieldInput placeholder="eg: supercoolwebsite.com" />
			</TextField>
		</div>
	);
}
