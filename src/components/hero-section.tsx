export function HeroSection() {
	return (
		<div class="relative isolate overflow-hidden bg-background">
			<div class="mx-auto max-w-7xl lg:flex lg:items-center lg:gap-x-10 lg:py-40">
				<div class="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
					<div class="mb-8 flex items-center gap-2">
						<div class="i-solar:box-bold size-14" />
						<span class="font-semibold text-2xl">Anchkor</span>
					</div>
					<h1 class="mt-10 max-w-lg font-bold text-4xl tracking-tight sm:text-6xl">
						Streamline your order management
					</h1>
					<p class="mt-6 text-lg text-muted-foreground leading-8">
						A powerful, intuitive platform that helps businesses manage orders,
						track inventory, and delight customers—all in one place.
					</p>
					<div class="mt-10 flex items-center gap-x-2">
						<button type="button" class="btn-primary">
							Get started
						</button>
						<button type="button" class="btn-outline">
							Book a demo
						</button>
					</div>
				</div>
				<div class="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
					<div class="relative mx-auto w-full max-w-3xs lg:max-w-sm">
						<div class="relative overflow-hidden ">
							<img
								src="/hero-section.webp"
								alt="OrderFlow dashboard preview"
								class="w-full bg-transparent"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

import { For } from "solid-js";

const features = [
	{
		name: "Intuitive Dashboard",
		description:
			"Get a complete overview of your business with real-time metrics and actionable insights.",
		icon: <div class="i-solar:chart-square-bold" />,
	},
	{
		name: "Order Management",
		description:
			"Track and manage orders from placement to delivery with our streamlined workflow.",
		icon: <div class="i-solar:cart-large-2-bold" />,
	},
	{
		name: "Inventory Tracking",
		description:
			"Keep track of your inventory levels and get notified when it's time to restock.",
		icon: <div class="i-solar:box-broken" />,
	},
	{
		name: "Customer Management",
		description:
			"Build stronger relationships with a complete view of customer information and order history.",
		icon: <div class="i-solar:users-group-two-rounded-bold" />,
	},
	{
		name: "Real-time Updates",
		description:
			"Stay informed with real-time notifications and status updates for all your orders.",
		icon: <div class="i-solar:clock-square-bold" />,
	},
	{
		name: "Performance Analytics",
		description:
			"Make data-driven decisions with comprehensive analytics and reporting tools.",
		icon: <div class="i-solar:check-square-bold" />,
	},
];

export function FeatureSection() {
	return (
		<div class="bg-background ">
			<div class="mx-auto max-w-7xl ">
				<div class="mx-auto max-w-2xl lg:text-center">
					<h2 class="font-semibold text-base leading-7">Everything you need</h2>
					<p class="mt-2 font-bold text-3xl tracking-tight sm:text-4xl">
						Powerful features for modern businesses
					</p>
					<p class="mt-6 text-lg text-muted-foreground leading-8">
						Anchkor combines powerful functionality with an intuitive interface,
						making order management simpler than ever before.
					</p>
				</div>
				<div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
					<dl class="grid max-w-xl grid-cols-1 gap-2 lg:max-w-none lg:grid-cols-3">
						<For each={features}>
							{(feature) => (
								<div class="flex flex-col rounded-xl bg-secondary/50 p-6 transition-[background-color] duration-100 ease-in-out hover:bg-secondary">
									<dt class="flex items-center gap-x-3 font-semibold text-base leading-7">
										{feature.icon}
										{feature.name}
									</dt>
									<dd class="mt-4 flex flex-auto flex-col text-base text-muted-foreground leading-7">
										<p class="flex-auto">{feature.description}</p>
									</dd>
								</div>
							)}
						</For>
					</dl>
				</div>
			</div>
		</div>
	);
}
