import type { Component, ComponentProps, JSX, ValidComponent } from "solid-js";
import { splitProps } from "solid-js";

import * as DropdownMenuPrimitive from "@kobalte/core/dropdown-menu";
import type { PolymorphicProps } from "@kobalte/core/polymorphic";

import { cn } from "~/utils/cn";

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;
const DropdownMenuSub = DropdownMenuPrimitive.Sub;
const DropdownMenuGroup = DropdownMenuPrimitive.Group;
const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

type DropdownMenuTriggerProps<T extends ValidComponent = "button"> =
	DropdownMenuPrimitive.DropdownMenuTriggerProps<T> & {
		class?: string | undefined;
	};

const DropdownMenuTrigger = <T extends ValidComponent = "button">(
	props: PolymorphicProps<T, DropdownMenuTriggerProps<T>>,
) => {
	const [, rest] = splitProps(props as DropdownMenuContentProps, ["class"]);

	return (
		<DropdownMenuPrimitive.Trigger
			class={cn(
				"inline-flex shrink-0 cursor-pointer select-none items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-secondary px-5 py-2 font-medium text-secondary-foreground text-sm shadow outline-none hover:bg-secondary/80 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 has-[>svg]:px-3 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none",
				props.class,
			)}
			{...rest}
		/>
	);
};

const DropdownMenu: Component<DropdownMenuPrimitive.DropdownMenuRootProps> = (
	props,
) => {
	return <DropdownMenuPrimitive.Root gutter={4} {...props} />;
};

type DropdownMenuContentProps<T extends ValidComponent = "div"> =
	DropdownMenuPrimitive.DropdownMenuContentProps<T> & {
		class?: string | undefined;
	};

const DropdownMenuContent = <T extends ValidComponent = "div">(
	props: PolymorphicProps<T, DropdownMenuContentProps<T>>,
) => {
	const [, rest] = splitProps(props as DropdownMenuContentProps, ["class"]);
	return (
		<DropdownMenuPrimitive.Portal>
			<DropdownMenuPrimitive.Content
				class={cn(
					"z-50 min-w-32 origin-[var(--kb-menu-content-transform-origin)] animate-content-hide overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[expanded]:animate-content-show",
					props.class,
				)}
				{...rest}
			/>
		</DropdownMenuPrimitive.Portal>
	);
};

type DropdownMenuItemProps<T extends ValidComponent = "div"> =
	DropdownMenuPrimitive.DropdownMenuItemProps<T> & {
		class?: string | undefined;
	};

const DropdownMenuItem = <T extends ValidComponent = "div">(
	props: PolymorphicProps<T, DropdownMenuItemProps<T>>,
) => {
	const [, rest] = splitProps(props as DropdownMenuItemProps, ["class"]);
	return (
		<DropdownMenuPrimitive.Item
			class={cn(
				"relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
				props.class,
			)}
			{...rest}
		/>
	);
};

const DropdownMenuShortcut: Component<ComponentProps<"span">> = (props) => {
	const [, rest] = splitProps(props, ["class"]);
	return (
		<span
			class={cn("ml-auto text-xs tracking-widest opacity-60", props.class)}
			{...rest}
		/>
	);
};

const DropdownMenuLabel: Component<
	ComponentProps<"div"> & { inset?: boolean }
> = (props) => {
	const [, rest] = splitProps(props, ["class", "inset"]);
	return (
		<div
			class={cn(
				"px-2 py-1.5 font-semibold text-sm",
				props.inset && "pl-8",
				props.class,
			)}
			{...rest}
		/>
	);
};

type DropdownMenuSeparatorProps<T extends ValidComponent = "hr"> =
	DropdownMenuPrimitive.DropdownMenuSeparatorProps<T> & {
		class?: string | undefined;
	};

const DropdownMenuSeparator = <T extends ValidComponent = "hr">(
	props: PolymorphicProps<T, DropdownMenuSeparatorProps<T>>,
) => {
	const [, rest] = splitProps(props as DropdownMenuSeparatorProps, ["class"]);
	return (
		<DropdownMenuPrimitive.Separator
			class={cn("-mx-1 my-1 h-px bg-muted", props.class)}
			{...rest}
		/>
	);
};

type DropdownMenuSubTriggerProps<T extends ValidComponent = "div"> =
	DropdownMenuPrimitive.DropdownMenuSubTriggerProps<T> & {
		class?: string | undefined;
		children?: JSX.Element;
	};

const DropdownMenuSubTrigger = <T extends ValidComponent = "div">(
	props: PolymorphicProps<T, DropdownMenuSubTriggerProps<T>>,
) => {
	const [, rest] = splitProps(props as DropdownMenuSubTriggerProps, [
		"class",
		"children",
	]);
	return (
		<DropdownMenuPrimitive.SubTrigger
			class={cn(
				"flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
				props.class,
			)}
			{...rest}
		>
			{props.children}
			<div class="iconify solar--alt-arrow-right-linear" />
		</DropdownMenuPrimitive.SubTrigger>
	);
};

type DropdownMenuSubContentProps<T extends ValidComponent = "div"> =
	DropdownMenuPrimitive.DropdownMenuSubContentProps<T> & {
		class?: string | undefined;
	};

const DropdownMenuSubContent = <T extends ValidComponent = "div">(
	props: PolymorphicProps<T, DropdownMenuSubContentProps<T>>,
) => {
	const [, rest] = splitProps(props as DropdownMenuSubContentProps, ["class"]);
	return (
		<DropdownMenuPrimitive.SubContent
			class={cn(
				"z-50 min-w-32 origin-[var(--kb-menu-content-transform-origin)] animate-in overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
				props.class,
			)}
			{...rest}
		/>
	);
};

type DropdownMenuCheckboxItemProps<T extends ValidComponent = "div"> =
	DropdownMenuPrimitive.DropdownMenuCheckboxItemProps<T> & {
		class?: string | undefined;
		children?: JSX.Element;
	};

const DropdownMenuCheckboxItem = <T extends ValidComponent = "div">(
	props: PolymorphicProps<T, DropdownMenuCheckboxItemProps<T>>,
) => {
	const [, rest] = splitProps(props as DropdownMenuCheckboxItemProps, [
		"class",
		"children",
	]);
	return (
		<DropdownMenuPrimitive.CheckboxItem
			class={cn(
				"relative flex cursor-default select-none items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
				props.class,
			)}
			{...rest}
		>
			<span class="absolute left-2 flex size-3.5 items-center justify-center">
				<DropdownMenuPrimitive.ItemIndicator>
					<div class="iconify solar--check-square-bold" />
				</DropdownMenuPrimitive.ItemIndicator>
			</span>
			{props.children}
		</DropdownMenuPrimitive.CheckboxItem>
	);
};

type DropdownMenuGroupLabelProps<T extends ValidComponent = "span"> =
	DropdownMenuPrimitive.DropdownMenuGroupLabelProps<T> & {
		class?: string | undefined;
	};

const DropdownMenuGroupLabel = <T extends ValidComponent = "span">(
	props: PolymorphicProps<T, DropdownMenuGroupLabelProps<T>>,
) => {
	const [, rest] = splitProps(props as DropdownMenuGroupLabelProps, ["class"]);
	return (
		<DropdownMenuPrimitive.GroupLabel
			class={cn("px-2 py-1.5 font-semibold text-sm", props.class)}
			{...rest}
		/>
	);
};

type DropdownMenuRadioItemProps<T extends ValidComponent = "div"> =
	DropdownMenuPrimitive.DropdownMenuRadioItemProps<T> & {
		class?: string | undefined;
		children?: JSX.Element;
	};

const DropdownMenuRadioItem = <T extends ValidComponent = "div">(
	props: PolymorphicProps<T, DropdownMenuRadioItemProps<T>>,
) => {
	const [, rest] = splitProps(props as DropdownMenuRadioItemProps, [
		"class",
		"children",
	]);
	return (
		<DropdownMenuPrimitive.RadioItem
			class={cn(
				"relative flex cursor-default select-none items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
				props.class,
			)}
			{...rest}
		>
			<span class="absolute left-2 flex size-3.5 items-center justify-center">
				<DropdownMenuPrimitive.ItemIndicator>
					<div class="iconify solar--check-square-bold" />
				</DropdownMenuPrimitive.ItemIndicator>
			</span>
			{props.children}
		</DropdownMenuPrimitive.RadioItem>
	);
};

export {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuPortal,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuShortcut,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuSub,
	DropdownMenuSubTrigger,
	DropdownMenuSubContent,
	DropdownMenuCheckboxItem,
	DropdownMenuGroup,
	DropdownMenuGroupLabel,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
};
