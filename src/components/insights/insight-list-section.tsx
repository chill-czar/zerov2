"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const insights = [
  {
    title: "Why Excel Fails at Portfolio Scale",
    description: "Spreadsheets work at small scale — but break when managing multiple projects.",
    slug: "/insights/why-excel-fails"
  },
  {
    title: "From Project Tracking to Portfolio Control",
    description: "Why managing individual projects is not enough for real estate developers.",
    slug: "/insights/project-tracking-to-portfolio-control"
  },
  {
    title: "How Real Estate PMOs Should Operate",
    description: "A structured approach to managing design, procurement, and construction.",
    slug: "/insights/how-pmos-should-operate"
  },
  {
    title: "Why Reporting Delays Create Financial Risk",
    description: "Understanding how delayed insights impact decision-making and outcomes.",
    slug: "/insights/reporting-delays-financial-risk"
  }
];

export function InsightListSection() {
  return (
    <section className="py-12 md:py-24 px-6 md:px-12 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col">
          {insights.map((insight, index) => (
            <Link key={index} href={insight.slug}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group border-t border-outline-variant/30 py-12 md:py-16 hover:bg-surface-container-lowest/50 transition-colors flex flex-col md:flex-row gap-8 md:gap-24 items-start"
              >
                <div className="md:w-1/2">
                  <h3 className="text-[2rem] md:text-3xl lg:text-4xl text-white tracking-tight leading-tight group-hover:text-primary transition-colors">
                    {insight.title}
                  </h3>
                </div>
                <div className="md:w-1/2 flex flex-col justify-between h-full">
                  <p className="text-lg md:text-xl text-secondary-fixed-dim font-light leading-relaxed mb-8">
                    {insight.description}
                  </p>
                  <span className="text-primary font-label uppercase tracking-widest text-xs md:text-sm group-hover:translate-x-2 transition-transform inline-block w-fit">
                    Read Article →
                  </span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
