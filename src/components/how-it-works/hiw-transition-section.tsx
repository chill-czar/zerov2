"use client";
import { motion } from "framer-motion";

export function HiwTransitionSection() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-surface text-center">
      <div className="max-w-4xl mx-auto space-y-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[2.5rem] md:text-4xl text-white tracking-tight mb-8">From Excel to Structured Control</h2>
          <p className="text-xl md:text-2xl text-secondary-fixed-dim font-light mb-4">You don&apos;t need to rebuild everything.</p>
          <p className="text-xl md:text-2xl text-white font-body pt-8 border-t border-outline-variant/30 w-fit mx-auto px-12">
            ZERO replaces fragmented workflows <br className="hidden md:block"/>with one structured system.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
