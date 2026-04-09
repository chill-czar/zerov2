import { HeroSection } from "~/components/landing/hero-section";
import { FragmentationSection } from "~/components/landing/fragmentation-section";
import { BreakingPointSection } from "~/components/landing/breaking-point-section";
import { IntroduceZeroSection } from "~/components/landing/introduce-zero-section";
import { ArchitectureFlowSection } from "~/components/landing/architecture-flow-section";
import { DepartmentIntegrationSection } from "~/components/landing/department-integration-section";
import { KpiAlignmentSection } from "~/components/landing/kpi-alignment-section";
import { ExecutiveVisibilitySection } from "~/components/landing/executive-visibility-section";
import { SystemArchitectureSection } from "~/components/landing/system-architecture-section";
import { TransformationSection } from "~/components/landing/transformation-section";
import { FinalCtaSection } from "~/components/landing/final-cta-section";

import TargetCursor from "~/components/TargetCursor";

export default function Home() {
  return (
    <>
      <TargetCursor 
        targetSelector=".cursor-target, a, button, .btn-primary, .btn-secondary" 
        spinDuration={4} 
        hoverDuration={0.3} 
      />
      <HeroSection />
      <FragmentationSection />
      <BreakingPointSection />
      <IntroduceZeroSection />
      <ArchitectureFlowSection />
      <DepartmentIntegrationSection />
      <KpiAlignmentSection />
      <ExecutiveVisibilitySection />
      <SystemArchitectureSection />
      <TransformationSection />
      <FinalCtaSection />
    </>
  );
}
