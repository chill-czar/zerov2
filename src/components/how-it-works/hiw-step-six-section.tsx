"use client";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";

export function HiwStepSixSection() {
  return (
    <section className="py-24 md:py-40 px-6 md:px-12 bg-surface">
      <div className="max-w-4xl mx-auto space-y-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <span className="text-primary font-display font-bold text-xl md:text-3xl opacity-50 block mb-4">Step 6</span>
          <h2 className="text-[3rem] md:text-display-sm text-white tracking-tight leading-tight">
            Align With Business Goals
          </h2>
          <p className="text-xl md:text-2xl text-secondary-fixed-dim font-light max-w-2xl">
            All activity connects to business performance.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 pt-6"
        >
          <span className="text-xl md:text-2xl text-white font-body bg-surface-container py-3 px-6 rounded-lg border border-outline-variant/30">Department work</span>
          <ArrowRight size={20} className="text-primary/50 hidden md:block" />
          <ArrowDown size={20} className="text-primary/50 md:hidden ml-8" />
          <span className="text-xl md:text-2xl text-white font-body bg-surface-container py-3 px-6 rounded-lg border border-outline-variant/30">Project performance</span>
          <ArrowRight size={20} className="text-primary/50 hidden md:block" />
          <ArrowDown size={20} className="text-primary/50 md:hidden ml-8" />
          <span className="text-xl md:text-2xl font-body bg-primary/10 text-primary py-3 px-6 rounded-lg border border-primary/30 shadow-[0_0_15px_rgba(226,195,132,0.15)]">Business results</span>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="pt-12"
        >
          <p className="text-2xl md:text-3xl text-primary font-light">Everything moves in one direction.</p>
        </motion.div>
      </div>
    </section>
  );
}
