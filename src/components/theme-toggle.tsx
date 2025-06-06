import { useColorMode } from "@kobalte/core";

export function ThemeToggle() {
	const { setColorMode } = useColorMode();

	return (
		<div class="flex gap-2 p-2">
			<button type="button" onClick={() => setColorMode("light")}>
				<div class="i-solar:sun-2-bold mr-2 size-4 dark:hidden" />
				<span>Light</span>
			</button>
			<button type="button" onClick={() => setColorMode("dark")}>
				<div class="i-solar:moon-stars-bold mr-2 size-4" />
				<span>Dark</span>
			</button>
			<button type="button" onClick={() => setColorMode("system")}>
				<div class="i-solar:monitor-smartphone-bold mr-2 size-4" />
				<span>System</span>
			</button>
		</div>
	);
}
