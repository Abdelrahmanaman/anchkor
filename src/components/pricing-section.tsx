import { For } from "solid-js";

const plans = [
	{
		name: "Starter",
		price: "$29",
		description: "Perfect for small businesses just getting started.",
		features: [
			"Up to 500 orders per month",
			"Basic analytics",
			"Email support",
			"2 team members",
			"Order management",
		],
		cta: "Get started",
		popular: false,
	},
	{
		name: "Professional",
		price: "$79",
		description: "Ideal for growing businesses with increasing order volume.",
		features: [
			"Up to 5,000 orders per month",
			"Advanced analytics",
			"Priority support",
			"5 team members",
			"Order & inventory management",
			"API access",
		],
		cta: "Get started",
		popular: true,
	},
	{
		name: "Enterprise",
		price: "Custom",
		description: "For large businesses with complex requirements.",
		features: [
			"Unlimited orders",
			"Custom analytics",
			"Dedicated support",
			"Unlimited team members",
			"Full platform access",
			"Custom integrations",
			"SLA guarantee",
		],
		cta: "Contact sales",
		popular: false,
	},
];

export function PricingSection() {
	return (
		<div class="bg-background py-24 sm:py-32">
			<div class="mx-auto max-w-7xl px-6 lg:px-8">
				<div class="mx-auto max-w-2xl sm:text-center">
					<h2 class="font-bold text-3xl text-muted-foreground tracking-tight sm:text-4xl">
						Simple, transparent pricing
					</h2>
					<p class="mt-6 text-lg text-muted-foreground leading-8">
						Choose the plan that's right for your business. All plans include a
						14-day free trial.
					</p>
				</div>
				<div class="mx-auto grid min-w-sm grid-cols-1 gap-6 bg-red-500 sm:grid-cols-2 lg:grid-cols-3">
					<For each={plans}>
						{(plan) => (
							<div class="min-w-[10rem] rounded-xl border border-border bg-background p-4 transition-[transform] duration-200 hover:scale-110">
								<h3
									class={`font-semibold text-lg leading-8 ${plan.popular ? "text-white" : "text-muted-foreground"}`}
								>
									{plan.name}
								</h3>
								<p
									class={`mt-4 text-sm leading-6 ${plan.popular ? "text-white" : "text-muted-foreground"}`}
								>
									{plan.description}
								</p>
								<p
									class={`mt-6 flex items-baseline gap-x-1 ${plan.popular ? "text-white" : "text-muted-foreground"}`}
								>
									<span class="font-bold text-4xl tracking-tight">
										{plan.price}
									</span>
									{plan.price !== "Custom" && (
										<span class="font-semibold text-sm leading-6">/month</span>
									)}
								</p>
								<button type="button" class="btn-primary">
									{plan.cta}
								</button>
								<ul
									class={`mt-8 space-y-3 text-sm leading-6 ${plan.popular ? "text-white" : "text-muted-foreground"}`}
								>
									<For each={plan.features}>
										{(feature) => (
											<li class="flex gap-x-3">
												<div
													class={`i-solar:check-square-bold ${plan.popular ? "text-white" : "text-gray-600"}`}
												/>
												{feature}
											</li>
										)}
									</For>
								</ul>
							</div>
						)}
					</For>
				</div>
			</div>
		</div>
	);
}
