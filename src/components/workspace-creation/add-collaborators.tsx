import { DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog";
import { TextField, TextFieldInput, TextFieldLabel } from "../ui/input";

export function AddCollaborators() {
	return (
		<div class="slide-in-from-left-50 flex h-3/4 animate-in flex-col justify-center gap-4 md:h-1/2 ">
			<DialogHeader>
				<DialogTitle class="text-left text-2xl">Add collaborators.</DialogTitle>
				<DialogDescription class="text-left">
					Invite your team members to collaborate on this workspace with you.
				</DialogDescription>
			</DialogHeader>
			<TextField class="w-full">
				<TextFieldLabel class="sr-only">Email</TextFieldLabel>
				<TextFieldInput placeholder="jonn@jonzz.com" />
			</TextField>
		</div>
	);
}
