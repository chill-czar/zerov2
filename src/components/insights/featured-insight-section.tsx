"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export function FeaturedInsightSection() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-surface-container-lowest border-y border-outline-variant/30">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="group block"
        >
          <div className="max-w-4xl">
            <h2 className="text-[2.5rem] md:text-display-sm text-white tracking-tight leading-tight group-hover:text-primary transition-colors duration-500 mb-8">
              The Hidden Cost of Fragmentation in Real Estate Development
            </h2>
            <p className="text-xl md:text-2xl text-secondary-fixed-dim font-light leading-relaxed mb-12 max-w-3xl">
              Why disconnected systems create delays, misalignment, and risk — and how structured systems change that.
            </p>
            <Link href="/insights/hidden-cost-of-fragmentation" className="inline-flex items-center text-primary hover:text-white uppercase tracking-widest font-label text-sm transition-colors border-b border-primary/30 hover:border-white pb-1 group-hover:border-primary">
              Read Insight <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
