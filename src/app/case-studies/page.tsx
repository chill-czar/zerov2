import { CaseStudiesHeroSection } from "~/components/case-studies/case-studies-hero-section";
import { CaseStudyListSection } from "~/components/case-studies/case-study-list-section";
import { PatternRecognitionSection } from "~/components/case-studies/pattern-recognition-section";
import { TransitionActionSection } from "~/components/case-studies/transition-action-section";
import { FinalCtaSection } from "~/components/landing/final-cta-section";

export const metadata = {
  title: "Case Studies | ZERO PMO",
  description: "Real-world scenarios demonstrating how ZERO brings structure to fragmented real estate operations.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <CaseStudiesHeroSection />
      <CaseStudyListSection />
      <PatternRecognitionSection />
      <TransitionActionSection />
      <FinalCtaSection 
        headline="See How ZERO Works"
        subtext="Understand how your operations can become structured, visible, and aligned."
        ctaText="See How ZERO Works"
        hideSecondary={true}
      />
    </>
  );
}
