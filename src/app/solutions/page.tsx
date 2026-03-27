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
          "Track project rollout",
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
        label="The Execution"
        role="PMO Leaders"
        subtext="Operate with structure, not spreadsheets."
        features={[
          "Manage all projects in one system",
          "Track progress across design, procurement, and construction",
          "Standardize workflows and approvals",
          "Maintain real-time reporting"
        ]}
        closing="Run a structured PMO — not a reactive one."
        linkHref="/solutions/pmo"
        linkText="Explore PMO System"
        alignRight={true}
      />
      
      <RoleSection 
        label="The Outcome"
        role="Asset Managers"
        subtext="Understand how your portfolio is performing at any moment."
        features={[
          "Monitor revenue and financial performance",
          "Track asset-level KPIs",
          "Evaluate portfolio health",
          "Access real-time data"
        ]}
        closing="Make decisions based on clarity — not assumptions."
        linkHref="/solutions/asset-managers"
        linkText="Explore Asset Manager System"
        alignRight={false}
      />
      
      <CrossRoleSection />
      <ValueSummarySection />
      <FinalCtaSection />
    </>
  );
}
