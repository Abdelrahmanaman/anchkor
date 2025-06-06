import type { IconifyJSON } from "@iconify/types";
import {
	defineConfig,
	presetAttributify,
	presetIcons,
	presetTypography,
	presetWebFonts,
	presetWind4,
	transformerDirectives,
	transformerVariantGroup,
} from "unocss";

export default defineConfig({
	shortcuts: [
		// Button base style
		{
			btn: 'inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*="size-"])]:size-4 shrink-0 [&_.i-solar]:shrink-0  [&_.i-solar]:size-5 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer rounded-lg active:scale-95 transiton-[transform] duration-200 ',
		},

		// Button sizes
		[
			/^btn-(sm|md|lg)$/,
			([, size]) => {
				const sizes = {
					sm: "gap-1.5 h-8 px-3 text-sm has-[>svg]:px-2.5",
					md: "gap-2 h-9 px-4 py-2 has-[>svg]:px-3",
					lg: "gap-2 h-10 px-6 text-lg has-[>svg]:px-4",
				};
				return sizes[size as keyof typeof sizes] || sizes.md;
			},
		],

		// Button variants
		[
			/^btn-(primary|secondary|outline|ghost|link|destructive)(?:-([a-z0-9]+))?$/,
			([, variant, size = "md"]) => {
				const variants = {
					primary:
						"bg-primary text-primary-foreground shadow hover:bg-primary/90 btn",
					secondary:
						"bg-secondary text-secondary-foreground shadow hover:bg-secondary/80 btn",
					destructive:
						"bg-destructive text-destructive-foreground shadow hover:bg-destructive/90 btn",
					outline:
						"border border-input bg-background shadow hover:bg-accent hover:text-accent-foreground btn",
					ghost: "hover:bg-accent hover:text-accent-foreground btn",
					link: "text-primary underline-offset-4 hover:underline btn",
				};

				const sizes = {
					sm: "h-8 px-3 gap-1.5",
					md: "h-9 px-4 py-2 gap-2",
					lg: "h-10 px-8 gap-2 [&>.i*]:size-5",
				};

				return `${variants[variant as keyof typeof variants]} ${sizes[size as keyof typeof sizes] || sizes.md}`;
			},
		],

		// Icon button variants
		[
			/^btn-icon-(primary|secondary|outline|ghost|link|destructive)(?:-([a-z0-9]+))?$/,
			([, variant, size = "md"]) => {
				const variants = {
					primary:
						"bg-primary text-primary-foreground shadow hover:bg-primary/90 btn",
					secondary:
						"bg-secondary text-secondary-foreground shadow hover:bg-secondary/80 btn",
					destructive:
						"bg-destructive text-destructive-foreground shadow hover:bg-destructive/90 btn",
					outline:
						"border border-input bg-background shadow hover:bg-accent hover:text-accent-foreground btn",
					ghost: "hover:bg-accent hover:text-accent-foreground btn",
					link: "text-primary underline-offset-4 hover:underline btn",
				};

				const sizes = {
					sm: "h-8 w-8 gap-1.5",
					md: "h-9 w-9 gap-2",
					lg: "h-10 w-10 gap-2",
				};

				return `${variants[variant as keyof typeof variants]} ${sizes[size as keyof typeof sizes] || sizes.md}`;
			},
		],

		[
			/^btn-(\w+)$/,
			([, variant]) => {
				const variants = {
					sm: "btn px-3 py-1.5 text-sm",
					md: "btn px-4 py-2",
					lg: "btn px-6 py-3 text-lg",
				};
				return variants[variant as keyof typeof variants];
			},
		],
	],

	theme: {
		colors: {
			background: "light-dark(oklch(1 0 0), oklch(0.145 0 0))",
			foreground: "light-dark(oklch(0.145 0 0), oklch(0.985 0 0))",
			card: "light-dark(oklch(1 0 0), oklch(0.205 0 0))",
			"card-foreground": "light-dark(oklch(0.145 0 0), oklch(0.985 0 0))",
			popover: "light-dark(oklch(1 0 0), oklch(0.269 0 0))",
			"popover-foreground": "light-dark(oklch(0.145 0 0), oklch(0.985 0 0))",
			primary: "light-dark(oklch(0.205 0 0), oklch(0.922 0 0))",
			"primary-foreground": "light-dark(oklch(0.985 0 0), oklch(0.205 0 0))",
			secondary: "light-dark(oklch(0.97 0 0), oklch(0.269 0 0))",
			"secondary-foreground": "light-dark(oklch(0.205 0 0), oklch(0.985 0 0))",
			muted: "light-dark(oklch(0.97 0 0), oklch(0.269 0 0))",
			"muted-foreground": "light-dark(oklch(0.556 0 0), oklch(0.708 0 0))",
			accent: "light-dark(oklch(0.97 0 0), oklch(0.371 0 0))",
			"accent-foreground": "light-dark(oklch(0.205 0 0), oklch(0.985 0 0))",
			destructive:
				"light-dark(oklch(0.577 0.245 27.325), oklch(0.704 0.191 22.216))",
			border: "light-dark(oklch(0.922 0 0), oklch(1 0 0 / 10%))",
			input: "light-dark(oklch(0.922 0 0), oklch(1 0 0 / 15%))",
			ring: "light-dark(oklch(0.708 0 0), oklch(0.556 0 0))",
			"chart-1":
				"light-dark(oklch(0.646 0.222 41.116), oklch(0.488 0.243 264.376))",
			"chart-2":
				"light-dark(oklch(0.6 0.118 184.704), oklch(0.696 0.17 162.48))",
			"chart-3":
				"light-dark(oklch(0.398 0.07 227.392), oklch(0.769 0.188 70.08))",
			"chart-4":
				"light-dark(oklch(0.828 0.189 84.429), oklch(0.627 0.265 303.9))",
			"chart-5":
				"light-dark(oklch(0.769 0.188 70.08), oklch(0.645 0.246 16.439))",
			sidebar: "light-dark(oklch(0.985 0 0), oklch(0.205 0 0))",
			"sidebar-foreground": "light-dark(oklch(0.145 0 0), oklch(0.985 0 0))",
			"sidebar-primary":
				"light-dark(oklch(0.205 0 0), oklch(0.488 0.243 264.376))",
			"sidebar-primary-foreground":
				"light-dark(oklch(0.985 0 0), oklch(0.985 0 0))",
			"sidebar-accent": "light-dark(oklch(0.97 0 0), oklch(0.269 0 0))",
			"sidebar-accent-foreground":
				"light-dark(oklch(0.205 0 0), oklch(0.985 0 0))",
			"sidebar-border": "light-dark(oklch(0.922 0 0), oklch(1 0 0 / 10%))",
			"sidebar-ring": "light-dark(oklch(0.708 0 0), oklch(0.439 0 0))",
			"sidebar-width": "16rem",
			"sidebar-mobile-width": "18rem",
		},
	},
	presets: [
		presetWind4({
			dark: {
				dark: "[data-kb-theme='dark']",
				light: "[data-kb-theme='light']",
			},
			preflights: {
				reset: true,
			},
		}),
		presetAttributify(),
		presetIcons({
			collections: {
				solar: () =>
					import("@iconify-json/solar/icons.json").then(
						(i) => i.default as IconifyJSON,
					),
			},
			customizations: {
				customize: (props) => {
					props.height = "1.25rem";
					props.width = "1.25rem";
					return props;
				},
			},
		}),
		presetTypography(),
		presetWebFonts({
			fonts: {
				// ...
			},
		}),
	],
	transformers: [transformerDirectives(), transformerVariantGroup()],
});
