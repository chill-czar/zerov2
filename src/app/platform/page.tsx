import { PlatformHeroSection } from "~/components/platform/platform-hero-section";
import { WhatIsNotSection } from "~/components/platform/what-is-not-section";
import { CoreStructureSection } from "~/components/platform/core-structure-section";
import { LifecycleSection } from "~/components/platform/lifecycle-section";
import { DepartmentOperationsSection } from "~/components/platform/department-operations-section";
import { KpiAlignmentPlatformSection } from "~/components/platform/kpi-alignment-platform-section";
import { RealTimeVisibilitySection } from "~/components/platform/real-time-visibility-section";
import { SystemArchitecturePlatformSection } from "~/components/platform/system-architecture-platform-section";
import { DifferentiationSection } from "~/components/platform/differentiation-section";
import { PositioningCloseSection } from "~/components/platform/positioning-close-section";
import { FinalCtaSection } from "~/components/landing/final-cta-section";

export const metadata = {
  title: "Platform | ZERO PMO",
  description: "A Real Estate PMO Operating System. Structured portfolio control.",
};

export default function PlatformPage() {
  return (
    <>
      <PlatformHeroSection />
      <WhatIsNotSection />
      <CoreStructureSection />
      <LifecycleSection />
      <DepartmentOperationsSection />
      <KpiAlignmentPlatformSection />
      <RealTimeVisibilitySection />
      <SystemArchitecturePlatformSection />
      <DifferentiationSection />
      <PositioningCloseSection />
      <FinalCtaSection />
    </>
  );
}
