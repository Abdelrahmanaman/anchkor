import type { Component, JSX, ValidComponent } from "solid-js";
import { splitProps } from "solid-js";

import type { PolymorphicProps } from "@kobalte/core/polymorphic";
import * as ProgressPrimitive from "@kobalte/core/progress";
import { cn } from "~/utils/cn";
import { Label } from "./label";

type ProgressRootProps<T extends ValidComponent = "div"> =
	ProgressPrimitive.ProgressRootProps<T> & {
		children?: JSX.Element;
		class?: string;
	};

const Progress = <T extends ValidComponent = "div">(
	props: PolymorphicProps<T, ProgressRootProps<T>>,
) => {
	const [local, others] = splitProps(props as ProgressRootProps, [
		"children",
		"class",
	]);
	return (
		<ProgressPrimitive.Root {...others}>
			{local.children}
			<ProgressPrimitive.Track
				class={cn(
					"relative h-2 w-full overflow-hidden rounded-full bg-secondary",
					local.class,
				)}
			>
				<ProgressPrimitive.Fill class="h-full w-[var(--kb-progress-fill-width)] flex-1 bg-primary transition-all" />
			</ProgressPrimitive.Track>
		</ProgressPrimitive.Root>
	);
};

const ProgressLabel: Component<ProgressPrimitive.ProgressLabelProps> = (
	props,
) => {
	return <ProgressPrimitive.Label as={Label} {...props} />;
};

const ProgressValueLabel: Component<
	ProgressPrimitive.ProgressValueLabelProps
> = (props) => {
	return <ProgressPrimitive.ValueLabel as={Label} {...props} />;
};

export { Progress, ProgressLabel, ProgressValueLabel };
