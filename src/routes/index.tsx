import { createFileRoute } from "@tanstack/solid-router";
import { FeatureSection, HeroSection } from "~/components/hero-section";
import Header from "~/components/navbar/header";
import { PricingSection } from "~/components/pricing-section";

export const Route = createFileRoute("/")({
	component: Home,
});

function Home() {
	return (
		<div>
			<Header />
			<section class=" min-h-dvh space-y-20 p-4">
				<HeroSection />
				<FeatureSection />
				<PricingSection />
			</section>
		</div>
	);
}
