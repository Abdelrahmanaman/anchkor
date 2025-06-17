import { DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog";
import { TextField, TextFieldInput, TextFieldLabel } from "../ui/input";

export function AddWebsite() {
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
			<TextField class="w-full">
				<TextFieldLabel class="sr-only">Website URL</TextFieldLabel>
				<TextFieldInput placeholder="eg: supercoolwebsite.com" />
			</TextField>
		</div>
	);
}
