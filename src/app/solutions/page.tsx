import { SolutionsHeroSection } from "~/components/solutions/solutions-hero-section";
import { RoleSection } from "~/components/solutions/role-section";
import { CrossRoleSection } from "~/components/solutions/cross-role-section";
import { ValueSummarySection } from "~/components/solutions/value-summary-section";
import { FinalCtaSection } from "~/components/landing/final-cta-section";

export const metadata = {
  title: "Solutions | ZERO PMO",
  description: "Built for Real Estate Decision-Makers. Discover how ZERO adapts to Developers, PMOs, and Asset Managers.",
};

export default function SolutionsPage() {
  return (
    <>
      <SolutionsHeroSection />
      
      <RoleSection
        label="The Vision"
        role="Developers"
        subtext="See how your portfolio performs against your business plan."
        features={[
          "Track feasibility to delivery",
          "Track project rollout",
          "Track progress across design, procurement, and construction",
          "Monitor sales and revenue",
          "Understand capital deployment",
          "Align execution with strategy"
        ]}
        closing="Stay in control of performance — across every project."
        linkHref="/solutions/developers"
        linkText="Explore Developer System"
        alignRight={false}
      />

      <RoleSection
        label="Design Development"
        role="Consultants"
        subtext="Operate inside developer platform, not outside."
        features={[
          "Manage all projects in one system",
          "Update design program",
          "PS / PC Items Progress",
          "Permits & NOCs",
          "Risk Management"
        ]}
        closing="Structured design development — not in isolation."
        linkHref="/solutions/consultants"
        linkText="Explore Design Module"
        alignRight={true}
      />

      <RoleSection
        label="Construction Reporting"
        role="Contractors"
        subtext="Understand how your project is performing at any moment."
        features={[
          "Live construction progress",
          "SPI & CPI Tracking",
          "Major milestone tracking",
          "HSE & QA/QC matrix",
          "Risk Management",
          "Manage portfolios"
        ]}
        closing="Make decisions based on clarity — not assumptions."
        linkHref="/solutions/contractors"
        linkText="Explore Construction Module"
        alignRight={false}
      />
      
      <CrossRoleSection />
      <ValueSummarySection />
      <FinalCtaSection />
    </>
  );
}
