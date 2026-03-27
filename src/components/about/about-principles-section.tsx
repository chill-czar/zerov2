"use client";
import { motion } from "framer-motion";

const principles = [
  {
    title: "Structure First",
    body: "Before performance can be tracked, operations must be structured. ZERO starts by bringing order to how projects, departments, and data connect."
  },
  {
    title: "Visibility Without Effort",
    body: "Leaders should not need to consolidate data manually. ZERO provides visibility as a default — not as a report someone has to build."
  },
  {
    title: "Alignment Across Roles",
    body: "Developers, PMO teams, and asset managers operate differently. ZERO aligns them through one shared system — without forcing a single way of working."
  },
  {
    title: "Authority, Not Complexity",
    body: "ZERO is designed to give decision-makers authority over their portfolio — not complexity to manage on top of it."
  }
];

export function AboutPrinciplesSection() {
  return (
    <section className="py-24 md:py-40 px-6 md:px-12 bg-surface">
      <div className="max-w-6xl mx-auto space-y-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary font-label uppercase tracking-widest text-sm block mb-8">Core Principles</span>
          <h2 className="text-[3rem] md:text-display-sm text-white tracking-tight">How We Think</h2>
        </motion.div>

        <div className="flex flex-col">
          {principles.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="border-t border-outline-variant/30 py-12 md:py-16 flex flex-col md:flex-row gap-8 md:gap-24 items-start"
            >
              <div className="md:w-1/3">
                <h3 className="text-2xl md:text-3xl text-white tracking-tight">{p.title}</h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-xl md:text-2xl text-secondary-fixed-dim font-light leading-relaxed">{p.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
