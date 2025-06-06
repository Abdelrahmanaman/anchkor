import {
	HeadContent,
	Outlet,
	Scripts,
	createRootRoute,
} from "@tanstack/solid-router";
import type * as Solid from "solid-js";
import { DefaultCatchBoundary } from "~/components/default-catch-boundary";
import { NotFound } from "~/components/not-found";
import appCss from "~/styles/app.css?url";
import { seo } from "~/utils/seo";
import "virtual:uno.css";
import { ColorModeProvider, cookieStorageManagerSSR } from "@kobalte/core";
import { TanStackRouterDevtools } from "@tanstack/solid-router-devtools";
import { getCookie } from "@tanstack/solid-start/server";
import { isServer } from "solid-js/web";
import Header from "~/components/header";

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{
				charset: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			...seo({
				title:
					"TanStack Start | Type-Safe, Client-First, Full-Stack React Framework",
				description:
					"TanStack Start is a type-safe, client-first, full-stack React framework. ",
			}),
		],
		links: [
			{ rel: "stylesheet", href: appCss },
			{
				rel: "apple-touch-icon",
				sizes: "180x180",
				href: "/apple-touch-icon.png",
			},
			{
				rel: "icon",
				type: "image/png",
				sizes: "32x32",
				href: "/favicon-32x32.png",
			},
			{
				rel: "icon",
				type: "image/png",
				sizes: "16x16",
				href: "/favicon-16x16.png",
			},
			{ rel: "manifest", href: "/site.webmanifest", color: "#fffff" },
			{ rel: "icon", href: "/favicon.ico" },
		],
	}),
	errorComponent: (props) => {
		return (
			<RootDocument>
				<DefaultCatchBoundary {...props} />
			</RootDocument>
		);
	},
	notFoundComponent: () => <NotFound />,
	component: RootComponent,
});

function RootComponent() {
	return (
		<RootDocument>
			<Outlet />
		</RootDocument>
	);
}

function getServerCookies() {
	"use server";
	const colorMode = getCookie("kb-color-mode");
	return colorMode ? `kb-color-mode=${colorMode}` : "";
}

function RootDocument({ children }: { children: Solid.JSX.Element }) {
	const storageManager = cookieStorageManagerSSR(
		isServer ? getServerCookies() : document.cookie,
	);
	return (
		<>
			<HeadContent />
			<ColorModeProvider storageManager={storageManager}>
				{/* <ThemeToggle /> */}
				<main class="min-h-dvh bg-background text-foreground">
					<Header />
					{children}
				</main>
			</ColorModeProvider>
			<TanStackRouterDevtools position="bottom-right" />
			<Scripts />
		</>
	);
}
