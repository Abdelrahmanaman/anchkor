import type { ValidComponent } from "solid-js";
import { Show, splitProps } from "solid-js";

import * as CheckboxPrimitive from "@kobalte/core/checkbox";
import type { PolymorphicProps } from "@kobalte/core/polymorphic";
import { cn } from "~/utils/cn";

interface CheckboxRootProps<T extends ValidComponent = "div">
	extends CheckboxPrimitive.CheckboxRootProps<T> {
	class?: string | undefined;
	label: string;
	error?: string;
}

const Checkbox = <T extends ValidComponent = "div">(
	props: PolymorphicProps<T, CheckboxRootProps<T>>,
) => {
	const [local, others] = splitProps(props as CheckboxRootProps, [
		"class",
		"checked",
		"label",
		"error",
	]);
	return (
		<CheckboxPrimitive.Checkbox
			class={cn(
				"items-top group relative flex items-center gap-1",
				local.class,
			)}
			{...others}
		>
			<CheckboxPrimitive.Input />
			<CheckboxPrimitive.Control class="flex size-4 items-center justify-center rounded-sm border border-input p-px data-[checked]:bg-secondary">
				<CheckboxPrimitive.Indicator>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="size-4"
					>
						<title>Check</title>
						<path d="M5 12l5 5l10 -10" />
					</svg>
				</CheckboxPrimitive.Indicator>
			</CheckboxPrimitive.Control>
			<CheckboxPrimitive.Label>{local.label}</CheckboxPrimitive.Label>
			<Show when={local.error}>
				<CheckboxPrimitive.ErrorMessage>
					{local.error}
				</CheckboxPrimitive.ErrorMessage>
			</Show>
		</CheckboxPrimitive.Checkbox>
	);
};

export { Checkbox };
