"use client";

import { motion } from 'framer-motion';

export function BreakingPointSection() {
  return (
    <section className="bg-surface py-20 md:py-32 px-6 md:px-12">
      <motion.div 
        className="max-w-4xl mx-auto text-center space-y-8 md:space-y-12"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-red-400 font-label uppercase tracking-[0.3em] text-xs md:text-sm">Systemic Failure</span>
        <h2 className="text-[2.5rem] leading-[1.1] md:text-5xl text-white tracking-tighter">
          This is the exact moment where control is lost.
        </h2>
        <p className="text-body-md text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          When data latency exceeds decision velocity, you are no longer managing a portfolio. You are reacting to a history book.
        </p>
      </motion.div>
    </section>
  );
}
