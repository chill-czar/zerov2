import { AboutHeroSection } from "~/components/about/about-hero-section";
import { AboutPhilosophySection } from "~/components/about/about-philosophy-section";
import { AboutPrinciplesSection } from "~/components/about/about-principles-section";
import { FinalCtaSection } from "~/components/landing/final-cta-section";

export const metadata = {
  title: "About ZERO | PMO Platform",
  description: "Why ZERO exists. A philosophy built on structure over chaos in real estate portfolio management.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <AboutPhilosophySection />
      <AboutPrinciplesSection />
      <FinalCtaSection
        headline="See How ZERO Works"
        subtext="Experience how structure transforms real estate portfolio management."
        ctaText="See How ZERO Works"
        hideSecondary={true}
      />
    </>
  );
}
