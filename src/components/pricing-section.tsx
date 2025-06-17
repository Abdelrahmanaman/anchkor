import { For } from "solid-js";
import { Button } from "./ui/Button";

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
		<div class="">
			<div class="mx-auto flex max-w-7xl flex-col gap-6 lg:gap-8">
				<div class="mx-auto max-w-2xl sm:text-center">
					<h2 class="font-bold text-3xl text-muted-foreground tracking-tight sm:text-4xl">
						Pricing
					</h2>
				</div>
				<div class="mx-auto grid max-w-[65rem] grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
					<For each={plans}>
						{(plan, index) => (
							<div
								class={`flex max-w-sm flex-col justify-between gap-4 rounded-xl border border-border bg-background p-3 transition-[transform] duration-200 ${index() === 1 ? "lg:scale-110" : ""}`}
							>
								<div>
									<h3 class={"font-semibold text-lg leading-8"}>{plan.name}</h3>
									<p class={"mt-4 text-sm leading-6 "}>{plan.description}</p>
									<p
										class={`mt-6 flex items-baseline gap-x-1 ${plan.popular ? "text-white" : "text-muted-foreground"}`}
									>
										<span class="font-bold text-4xl tracking-tight">
											{plan.price}
										</span>
										{plan.price !== "Custom" && (
											<span class="font-semibold text-sm leading-6">
												/month
											</span>
										)}
									</p>
									<ul class={"mt-8 space-y-3 text-sm leading-6"}>
										<For each={plan.features}>
											{(feature) => (
												<li class="flex gap-x-3">
													<div class="i-solar:check-square-bold text-white" />
													{feature}
												</li>
											)}
										</For>
									</ul>
								</div>
								<Button variant="default">{plan.cta}</Button>
							</div>
						)}
					</For>
				</div>
			</div>
		</div>
	);
}
