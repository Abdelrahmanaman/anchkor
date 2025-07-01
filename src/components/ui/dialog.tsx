import type { Component, ComponentProps, JSX, ValidComponent } from "solid-js";
import { splitProps } from "solid-js";

import * as DialogPrimitive from "@kobalte/core/dialog";
import type { PolymorphicProps } from "@kobalte/core/polymorphic";

import { cn } from "~/utils/cn";

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogClose = DialogPrimitive.CloseButton;
const DialogPortal: Component<DialogPrimitive.DialogPortalProps> = (props) => {
	const [local, rest] = splitProps(props, ["children"]);
	return (
		<DialogPrimitive.Portal {...rest}>{local.children}</DialogPrimitive.Portal>
	);
};

type DialogOverlayProps<T extends ValidComponent = "div"> =
	DialogPrimitive.DialogOverlayProps<T> & { class?: string | undefined };

const DialogOverlay = <T extends ValidComponent = "div">(
	props: PolymorphicProps<T, DialogOverlayProps<T>>,
) => {
	const [local, rest] = splitProps(props as DialogOverlayProps, ["class"]);
	return (
		<DialogPrimitive.Overlay
			class={cn(
				"data-[closed]:fade-out-0 data-[expanded]:fade-in-0 fixed inset-0 z-50 bg-black/10 backdrop-blur-sm data-[closed]:animate-out data-[expanded]:animate-in",
				local.class,
			)}
			{...rest}
		/>
	);
};

type DialogContentProps<T extends ValidComponent = "div"> =
	DialogPrimitive.DialogContentProps<T> & {
		class?: string | undefined;
		children?: JSX.Element;
	};

const DialogContent = <T extends ValidComponent = "div">(
	props: PolymorphicProps<T, DialogContentProps<T>>,
) => {
	const [local, rest] = splitProps(props as DialogContentProps, [
		"class",
		"children",
	]);
	return (
		<DialogPortal>
			<DialogOverlay />
			<DialogPrimitive.Content
				class={cn(
					"data-[closed]:fade-out-0 data-[expanded]:fade-in-0 data-[closed]:zoom-out-95 data-[expanded]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid max-h-[calc(100%-2rem)] max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-xl border border-border bg-card p-6 duration-200 data-[closed]:animate-out data-[expanded]:animate-in ",
					local.class,
				)}
				{...rest}
			>
				{local.children}
				<DialogClose class="absolute top-4 right-4 rounded-sm bg-black outline-primary focus:outline-2">
					<div class="iconify solar--close-square-bold block" />
					<span class="sr-only">Close</span>
				</DialogClose>
			</DialogPrimitive.Content>
		</DialogPortal>
	);
};

const DialogHeader: Component<ComponentProps<"div">> = (props) => {
	const [local, rest] = splitProps(props, ["class"]);
	return (
		<div
			class={cn(
				"flex flex-col space-y-1.5 text-center sm:text-left ",
				local.class,
			)}
			{...rest}
		/>
	);
};

const DialogFooter: Component<ComponentProps<"div">> = (props) => {
	const [local, rest] = splitProps(props, ["class"]);
	return (
		<div
			class={cn(
				"flex flex-col-reverse gap-2 sm:flex-row sm:justify-end ",
				local.class,
			)}
			{...rest}
		/>
	);
};

type DialogTitleProps<T extends ValidComponent = "h2"> =
	DialogPrimitive.DialogTitleProps<T> & {
		class?: string | undefined;
	};

const DialogTitle = <T extends ValidComponent = "h2">(
	props: PolymorphicProps<T, DialogTitleProps<T>>,
) => {
	const [local, rest] = splitProps(props as DialogTitleProps, ["class"]);
	return (
		<DialogPrimitive.Title
			class={cn(
				"font-semibold text-lg leading-none tracking-tight",
				local.class,
			)}
			{...rest}
		/>
	);
};

type DialogDescriptionProps<T extends ValidComponent = "p"> =
	DialogPrimitive.DialogDescriptionProps<T> & {
		class?: string | undefined;
	};

const DialogDescription = <T extends ValidComponent = "p">(
	props: PolymorphicProps<T, DialogDescriptionProps<T>>,
) => {
	const [local, rest] = splitProps(props as DialogDescriptionProps, ["class"]);
	return (
		<DialogPrimitive.Description
			class={cn("text-muted-foreground text-sm", local.class)}
			{...rest}
		/>
	);
};

export {
	Dialog,
	DialogTrigger,
	DialogContent,
	DialogHeader,
	DialogFooter,
	DialogTitle,
	DialogDescription,
	DialogClose,
};
