import { InsightsHeroSection } from "~/components/insights/insights-hero-section";
import { FeaturedInsightSection } from "~/components/insights/featured-insight-section";
import { CoreTopicsSection } from "~/components/insights/core-topics-section";
import { InsightListSection } from "~/components/insights/insight-list-section";
import { ThinkingFrameworkSection } from "~/components/insights/thinking-framework-section";
import { InsightsTransitionSection } from "~/components/insights/insights-transition-section";
import { FinalCtaSection } from "~/components/landing/final-cta-section";

export const metadata = {
  title: "Insights | ZERO PMO",
  description: "Structured thinking about how real estate operations should work.",
};

export default function InsightsPage() {
  return (
    <>
      <InsightsHeroSection />
      <FeaturedInsightSection />
      <CoreTopicsSection />
      <InsightListSection />
      <ThinkingFrameworkSection />
      <InsightsTransitionSection />
      <FinalCtaSection 
        headline="See How ZERO Works"
        subtext="Understand how ZERO brings structure to real estate portfolios."
        ctaText="See How ZERO Works"
        hideSecondary={true}
      />
    </>
  );
}
