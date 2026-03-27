"use client";
import { motion } from "framer-motion";

const cases = [
  {
    title: "Managing Multiple Projects Without Visibility",
    context: "A real estate developer managing several projects across different stages using spreadsheets and disconnected tools.",
    problem: [
      "No centralized view of all projects",
      "Reporting requires manual consolidation",
      "Delays identified too late"
    ],
    solution: "ZERO connects all projects into one system, providing real-time visibility across the portfolio.",
    outcome: [
      "Clear overview of all projects",
      "Faster reporting",
      "Early identification of delays"
    ]
  },
  {
    title: "PMO Struggling With Manual Reporting",
    context: "A PMO team managing design, procurement, and construction through separate systems.",
    problem: [
      "Reports created manually",
      "Inconsistent data across teams",
      "Lack of standard workflows"
    ],
    solution: "ZERO standardizes workflows and centralizes reporting into one system.",
    outcome: [
      "Structured reporting",
      "Consistent data",
      "Improved coordination across teams"
    ]
  },
  {
    title: "Lack of Alignment Between Departments",
    context: "Different departments operating independently with separate tools and metrics.",
    problem: [
      "Teams are misaligned",
      "KPIs are not connected",
      "Decisions lack context"
    ],
    solution: "ZERO connects departments within one system and aligns KPIs across the organization.",
    outcome: [
      "Aligned teams",
      "Unified performance tracking",
      "Better decision-making"
    ]
  },
  {
    title: "Delayed Identification of Financial Risk",
    context: "Leadership relies on periodic reports to understand financial performance.",
    problem: [
      "Cashflow issues identified late",
      "Limited real-time insight",
      "Reactive decision-making"
    ],
    solution: "ZERO provides real-time visibility into financial and project performance.",
    outcome: [
      "Early risk detection",
      "Improved financial awareness",
      "Proactive decision-making"
    ]
  }
];

export function CaseStudyListSection() {
  return (
    <section className="py-24 md:py-40 px-6 md:px-12 bg-surface-container-lowest border-t border-outline-variant/30">
      <div className="max-w-4xl mx-auto space-y-32">
        {cases.map((caseStudy, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="group relative pl-8 md:pl-12"
          >
            <div className="absolute left-0 top-0 h-full w-[2px] bg-primary/20 group-hover:bg-primary transition-colors duration-500"></div>
            
            <div className="space-y-12">
              <h2 className="text-[2.5rem] md:text-5xl text-white tracking-tight leading-tight">
                {caseStudy.title}
              </h2>
              
              <div className="space-y-4">
                <h3 className="text-primary font-label uppercase tracking-widest text-sm">Context</h3>
                <p className="text-xl md:text-2xl text-secondary-fixed-dim font-light leading-relaxed">
                  {caseStudy.context}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 md:gap-24 pt-8 border-t border-outline-variant/30">
                <div className="space-y-6">
                  <h3 className="text-red-400 font-label uppercase tracking-widest text-sm">Problem</h3>
                  <ul className="space-y-4">
                    {caseStudy.problem.map((item, i) => (
                      <li key={i} className="text-lg md:text-xl text-white font-body flex items-start gap-4">
                        <span className="text-red-500/50 mt-[2px]">-</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="space-y-12">
                  <div className="space-y-6">
                    <h3 className="text-primary font-label uppercase tracking-widest text-sm">Solution</h3>
                    <p className="text-lg md:text-xl text-white font-body">
                      {caseStudy.solution}
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    <h3 className="text-primary font-label uppercase tracking-widest text-sm">Outcome</h3>
                    <ul className="space-y-4">
                      {caseStudy.outcome.map((item, i) => (
                        <li key={i} className="text-lg md:text-xl text-white font-body flex items-start gap-4">
                          <span className="text-primary/50 mt-[2px]">+</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
