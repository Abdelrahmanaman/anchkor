import type { Component, ComponentProps, JSX, ValidComponent } from "solid-js";
import { splitProps } from "solid-js";

import * as SheetPrimitive from "@kobalte/core/dialog";
import type { PolymorphicProps } from "@kobalte/core/polymorphic";
import { cn } from "~/utils/cn";

const Sheet = SheetPrimitive.Root;
const SheetTrigger = SheetPrimitive.Trigger;
const SheetClose = SheetPrimitive.CloseButton;

type PortalProps = SheetPrimitive.DialogPortalProps;

const SheetPortal: Component<PortalProps> = (props) => {
	const [local, others] = splitProps(props, ["children"]);
	return (
		<SheetPrimitive.Portal {...others}>
			<div class={"fixed inset-0 z-50 flex justify-end"}>{local.children}</div>
		</SheetPrimitive.Portal>
	);
};

type DialogOverlayProps<T extends ValidComponent = "div"> =
	SheetPrimitive.DialogOverlayProps<T> & {
		class?: string | undefined;
	};

const SheetOverlay = <T extends ValidComponent = "div">(
	props: PolymorphicProps<T, DialogOverlayProps<T>>,
) => {
	const [local, others] = splitProps(props as DialogOverlayProps, ["class"]);
	return (
		<SheetPrimitive.Overlay
			class={cn(
				"data-[closed=]:fade-out-0 data-[expanded=]:fade-in-0 fixed inset-0 z-50 bg-black/80 data-[closed=]:animate-out data-[expanded=]:animate-in",
				local.class,
			)}
			{...others}
		/>
	);
};

type DialogContentProps<T extends ValidComponent = "div"> =
	SheetPrimitive.DialogContentProps<T> & {
		class?: string | undefined;
		children?: JSX.Element;
	};

const SheetContent = <T extends ValidComponent = "div">(
	props: PolymorphicProps<T, DialogContentProps<T>>,
) => {
	const [local, others] = splitProps(props as DialogContentProps, [
		"class",
		"children",
	]);
	return (
		<SheetPortal>
			<SheetOverlay />
			<SheetPrimitive.Content
				class={cn(
					"data-[closed=]:slide-out-to-right data-[expanded=]:slide-in-from-right fixed inset-y-0 right-0 z-50 h-full h-screen w-3/4 gap-4 overflow-y-auto border-input bg-background shadow-lg transition ease-in-out data-[closed=]:animate-out data-[expanded=]:animate-in data-[closed=]:duration-300 data-[expanded=]:duration-500 sm:max-w-sm",
					local.class,
				)}
				{...others}
			>
				<div class="relative h-full p-6 pt-14">{local.children}</div>
				<SheetPrimitive.CloseButton class="absolute top-4 right-4 z-10 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
					<div class="i-solar:close-square-outline h-5 w-5" aria-hidden />
					<span class="sr-only">Close</span>
				</SheetPrimitive.CloseButton>
			</SheetPrimitive.Content>
		</SheetPortal>
	);
};

const SheetHeader: Component<ComponentProps<"div">> = (props) => {
	const [local, others] = splitProps(props, ["class"]);
	return (
		<div
			class={cn(
				"flex flex-col space-y-2 text-center sm:text-left",
				local.class,
			)}
			{...others}
		/>
	);
};

const SheetFooter: Component<ComponentProps<"div">> = (props) => {
	const [local, others] = splitProps(props, ["class"]);
	return (
		<div
			class={cn(
				"flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
				local.class,
			)}
			{...others}
		/>
	);
};

type DialogTitleProps<T extends ValidComponent = "h2"> =
	SheetPrimitive.DialogTitleProps<T> & {
		class?: string | undefined;
	};

const SheetTitle = <T extends ValidComponent = "h2">(
	props: PolymorphicProps<T, DialogTitleProps<T>>,
) => {
	const [local, others] = splitProps(props as DialogTitleProps, ["class"]);
	return (
		<SheetPrimitive.Title
			class={cn("font-semibold text-foreground text-lg", local.class)}
			{...others}
		/>
	);
};

type DialogDescriptionProps<T extends ValidComponent = "p"> =
	SheetPrimitive.DialogDescriptionProps<T> & { class?: string | undefined };

const SheetDescription = <T extends ValidComponent = "p">(
	props: PolymorphicProps<T, DialogDescriptionProps<T>>,
) => {
	const [local, others] = splitProps(props as DialogDescriptionProps, [
		"class",
	]);
	return (
		<SheetPrimitive.Description
			class={cn("text-muted-foreground text-sm", local.class)}
			{...others}
		/>
	);
};

export {
	Sheet,
	SheetTrigger,
	SheetClose,
	SheetContent,
	SheetHeader,
	SheetFooter,
	SheetTitle,
	SheetDescription,
};
