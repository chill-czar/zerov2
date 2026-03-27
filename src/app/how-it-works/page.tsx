import { HiwHeroSection } from "~/components/how-it-works/hiw-hero-section";
import { HiwCurrentRealitySection } from "~/components/how-it-works/hiw-current-reality-section";
import { HiwProblemSection } from "~/components/how-it-works/hiw-problem-section";
import { HiwStepOneSection } from "~/components/how-it-works/hiw-step-one-section";
import { HiwStepTwoSection } from "~/components/how-it-works/hiw-step-two-section";
import { HiwStepThreeSection } from "~/components/how-it-works/hiw-step-three-section";
import { HiwStepFourSection } from "~/components/how-it-works/hiw-step-four-section";
import { HiwStepFiveSection } from "~/components/how-it-works/hiw-step-five-section";
import { HiwStepSixSection } from "~/components/how-it-works/hiw-step-six-section";
import { HiwFinalOutcomeSection } from "~/components/how-it-works/hiw-final-outcome-section";
import { HiwTransitionSection } from "~/components/how-it-works/hiw-transition-section";
import { FinalCtaSection } from "~/components/landing/final-cta-section";

export const metadata = {
  title: "How It Works | ZERO PMO",
  description: "Step-by-step clarity on the ZERO execution model.",
};

export default function HowItWorksPage() {
  return (
    <>
      <HiwHeroSection />
      <HiwCurrentRealitySection />
      <HiwProblemSection />
      <HiwStepOneSection />
      <HiwStepTwoSection />
      <HiwStepThreeSection />
      <HiwStepFourSection />
      <HiwStepFiveSection />
      <HiwStepSixSection />
      <HiwFinalOutcomeSection />
      <HiwTransitionSection />
      <FinalCtaSection />
    </>
  );
}
