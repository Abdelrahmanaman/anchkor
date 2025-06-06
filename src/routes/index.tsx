import { FeatureSection, HeroSection } from "~/components/hero-section";
import { PricingSection } from "~/components/pricing-section";

export const Route = createFileRoute({
	component: Home,
});

function Home() {
	return (
		<section class=" min-h-dvh space-x-2 p-2">
			<HeroSection />
			<FeatureSection />
			<PricingSection />
		</section>
	);
}
