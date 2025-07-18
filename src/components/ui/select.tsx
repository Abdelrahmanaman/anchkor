import type { JSX, ValidComponent } from "solid-js";
import { Show, splitProps } from "solid-js";

import type { PolymorphicProps } from "@kobalte/core/polymorphic";
import * as SelectPrimitive from "@kobalte/core/select";
import { cva } from "cva";

import { cn } from "~/utils/cn";

const Select = SelectPrimitive.Root;
const SelectValue = SelectPrimitive.Value;
const SelectHiddenSelect = SelectPrimitive.HiddenSelect;

type SelectTriggerProps<T extends ValidComponent = "button"> =
	SelectPrimitive.SelectTriggerProps<T> & {
		class?: string | undefined;
		children?: JSX.Element;
		showIcon?: boolean;
	};

const SelectTrigger = <T extends ValidComponent = "button">(
	props: PolymorphicProps<T, SelectTriggerProps<T>>,
) => {
	const [local, others] = splitProps(props as SelectTriggerProps, [
		"class",
		"children",
		"showIcon",
	]);
	return (
		<SelectPrimitive.Trigger
			class={cn(
				"flex h-10 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
				local.class,
			)}
			{...others}
		>
			{local.children}
			<Show when={local.showIcon}>
				<SelectPrimitive.Icon>
					<div class="iconify mynaui--chevron-up-down size-4" aria-hidden />
				</SelectPrimitive.Icon>
			</Show>
		</SelectPrimitive.Trigger>
	);
};

type SelectContentProps<T extends ValidComponent = "div"> =
	SelectPrimitive.SelectContentProps<T> & { class?: string | undefined };

const SelectContent = <T extends ValidComponent = "div">(
	props: PolymorphicProps<T, SelectContentProps<T>>,
) => {
	const [local, others] = splitProps(props as SelectContentProps, ["class"]);
	return (
		<SelectPrimitive.Portal>
			<SelectPrimitive.Content
				class={cn(
					"fade-in-80 relative z-50 min-w-32 animate-in overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md",
					local.class,
				)}
				{...others}
			>
				<SelectPrimitive.Listbox class="m-0 p-1" />
			</SelectPrimitive.Content>
		</SelectPrimitive.Portal>
	);
};

type SelectItemProps<T extends ValidComponent = "li"> =
	SelectPrimitive.SelectItemProps<T> & {
		class?: string | undefined;
		children?: JSX.Element;
	};

const SelectItem = <T extends ValidComponent = "li">(
	props: PolymorphicProps<T, SelectItemProps<T>>,
) => {
	const [local, others] = splitProps(props as SelectItemProps, [
		"class",
		"children",
	]);
	return (
		<SelectPrimitive.Item
			class={cn(
				"relative mt-0 flex w-full cursor-default select-none items-center rounded-sm py-1.5 pr-8 pl-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
				local.class,
			)}
			{...others}
		>
			<SelectPrimitive.ItemIndicator class="absolute right-2 flex size-3.5 items-center justify-center">
				<div class="iconify mynaui--check-solid" aria-hidden />
			</SelectPrimitive.ItemIndicator>
			<SelectPrimitive.ItemLabel>{local.children}</SelectPrimitive.ItemLabel>
		</SelectPrimitive.Item>
	);
};

const labelVariants = cva({
	base: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
	variants: {
		variant: {
			label: "data-[invalid]:text-destructive",
			description: "font-normal text-muted-foreground",
			error: "text-xs text-destructive",
		},
	},
	defaultVariants: {
		variant: "label",
	},
});

type SelectLabelProps<T extends ValidComponent = "label"> =
	SelectPrimitive.SelectLabelProps<T> & {
		class?: string | undefined;
	};

const SelectLabel = <T extends ValidComponent = "label">(
	props: PolymorphicProps<T, SelectLabelProps<T>>,
) => {
	const [local, others] = splitProps(props as SelectLabelProps, ["class"]);
	return (
		<SelectPrimitive.Label
			class={cn(labelVariants(), local.class)}
			{...others}
		/>
	);
};

type SelectDescriptionProps<T extends ValidComponent = "div"> =
	SelectPrimitive.SelectDescriptionProps<T> & {
		class?: string | undefined;
	};

const SelectDescription = <T extends ValidComponent = "div">(
	props: PolymorphicProps<T, SelectDescriptionProps<T>>,
) => {
	const [local, others] = splitProps(props as SelectDescriptionProps, [
		"class",
	]);
	return (
		<SelectPrimitive.Description
			class={cn(labelVariants({ variant: "description" }), local.class)}
			{...others}
		/>
	);
};

type SelectErrorMessageProps<T extends ValidComponent = "div"> =
	SelectPrimitive.SelectErrorMessageProps<T> & {
		class?: string | undefined;
	};

const SelectErrorMessage = <T extends ValidComponent = "div">(
	props: PolymorphicProps<T, SelectErrorMessageProps<T>>,
) => {
	const [local, others] = splitProps(props as SelectErrorMessageProps, [
		"class",
	]);
	return (
		<SelectPrimitive.ErrorMessage
			class={cn(labelVariants({ variant: "error" }), local.class)}
			{...others}
		/>
	);
};

export {
	Select,
	SelectValue,
	SelectHiddenSelect,
	SelectTrigger,
	SelectContent,
	SelectItem,
	SelectLabel,
	SelectDescription,
	SelectErrorMessage,
};
