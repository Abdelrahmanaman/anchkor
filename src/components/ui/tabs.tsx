import type { ValidComponent } from "solid-js";
import { splitProps } from "solid-js";

import type { PolymorphicProps } from "@kobalte/core/polymorphic";
import * as TabsPrimitive from "@kobalte/core/tabs";

import { cn } from "~/utils/cn";

const Tabs = TabsPrimitive.Root;

type TabsListProps<T extends ValidComponent = "div"> =
	TabsPrimitive.TabsListProps<T> & {
		class?: string | undefined;
	};

const TabsList = <T extends ValidComponent = "div">(
	props: PolymorphicProps<T, TabsListProps<T>>,
) => {
	const [local, others] = splitProps(props as TabsListProps, ["class"]);
	return (
		<TabsPrimitive.List
			class={cn(
				"outer-radius relative isolate inline-flex h-10 items-center justify-center rounded-xl bg-muted p-1 text-muted-foreground",
				local.class,
			)}
			{...others}
		/>
	);
};

type TabsTriggerProps<T extends ValidComponent = "button"> =
	TabsPrimitive.TabsTriggerProps<T> & {
		class?: string | undefined;
	};

const TabsTrigger = <T extends ValidComponent = "button">(
	props: PolymorphicProps<T, TabsTriggerProps<T>>,
) => {
	const [local, others] = splitProps(props as TabsTriggerProps, ["class"]);
	return (
		<TabsPrimitive.Trigger
			class={cn(
				"z-10 inline-flex items-center justify-center whitespace-nowrap rounded-[calc(var(--radius-xl)-8px)] px-3 py-1.5 font-medium text-sm ring-offset-background transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[selected]:text-foreground data-[selected]:shadow-sm",
				local.class,
			)}
			{...others}
		/>
	);
};

type TabsContentProps<T extends ValidComponent = "div"> =
	TabsPrimitive.TabsContentProps<T> & {
		class?: string | undefined;
	};

const TabsContent = <T extends ValidComponent = "div">(
	props: PolymorphicProps<T, TabsContentProps<T>>,
) => {
	const [local, others] = splitProps(props as TabsContentProps, ["class"]);
	return (
		<TabsPrimitive.Content
			class={cn(
				" mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
				local.class,
			)}
			{...others}
		/>
	);
};

type TabsIndicatorProps<T extends ValidComponent = "div"> =
	TabsPrimitive.TabsIndicatorProps<T> & {
		class?: string | undefined;
	};

const TabsIndicator = <T extends ValidComponent = "div">(
	props: PolymorphicProps<T, TabsIndicatorProps<T>>,
) => {
	const [local, others] = splitProps(props as TabsIndicatorProps, ["class"]);
	return (
		<TabsPrimitive.Indicator
			class={cn(
				"-z-10 inner-radius absolute h-8 rounded-[calc(var(--radius-xl)-6px)] border border-border bg-background transition-all duration-500",
				local.class,
			)}
			{...others}
		/>
	);
};

export { Tabs, TabsList, TabsTrigger, TabsContent, TabsIndicator };
