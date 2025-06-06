import { tanstackStart } from "@tanstack/solid-start/plugin/vite";
import UnoCSS from "unocss/vite";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	server: {
		port: 3000,
	},
	plugins: [
		tsConfigPaths({
			projects: ["./tsconfig.json"],
		}),
		tanstackStart({
			target: "bun",
		}),
		UnoCSS(),
	],
});
