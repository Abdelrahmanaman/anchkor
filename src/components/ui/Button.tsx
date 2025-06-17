import type { JSX, ValidComponent } from "solid-js";
import { splitProps } from "solid-js";

import * as ButtonPrimitive from "@kobalte/core/button";
import type { PolymorphicProps } from "@kobalte/core/polymorphic";
import { type VariantProps, cva } from "cva";

import { cn } from "~/utils/cn";

const buttonVariants = cva({
	base: "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] cursor-pointer rounded-lg active:scale-95 transition-all duration-200 [&_svg:not([class*='size-'])]:size-4 select-none",
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			secondary:
				"bg-secondary text-secondary-foreground shadow hover:bg-secondary/80 ",
			destructive:
				"bg-destructive text-destructive-foreground shadow hover:bg-destructive/90",
			outline:
				"border border-input hover:bg-accent hover:text-accent-foreground",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline",
		},
		size: {
			default: "gap-2 h-9 px-4 py-2 has-[>svg]:px-3",
			sm: "gap-1.5 h-8 px-3 text-sm has-[>svg]:px-2.5",
			lg: "gap-2 h-10 px-6 text-lg has-[>svg]:px-4",
			icon: "size-9",
		},
	},
	defaultVariants: {
		variant: "default",
		size: "default",
	},
});

type ButtonProps<T extends ValidComponent = "button"> =
	ButtonPrimitive.ButtonRootProps<T> &
		VariantProps<typeof buttonVariants> & {
			class?: string | undefined;
			children?: JSX.Element;
		};

const Button = <T extends ValidComponent = "button">(
	props: PolymorphicProps<T, ButtonProps<T>>,
) => {
	const [local, others] = splitProps(props as ButtonProps, [
		"variant",
		"size",
		"class",
	]);
	return (
		<ButtonPrimitive.Root
			class={cn(
				buttonVariants({ variant: local.variant, size: local.size }),
				local.class,
			)}
			{...others}
		/>
	);
};

export { Button, buttonVariants };
export type { ButtonProps };
