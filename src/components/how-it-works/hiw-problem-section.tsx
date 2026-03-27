"use client";
import { motion } from "framer-motion";

export function HiwProblemSection() {
  return (
    <section className="py-24 md:py-40 px-6 md:px-12 bg-surface">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <h2 className="text-[3rem] md:text-display-sm text-white tracking-tight">Why This Doesn&apos;t Work</h2>
          
          <div className="space-y-6 pl-6 border-l-2 border-primary/30 py-2">
            <p className="text-xl md:text-2xl text-secondary-fixed-dim font-light">You don&apos;t see the full picture</p>
            <p className="text-xl md:text-2xl text-secondary-fixed-dim font-light">Reporting takes time</p>
            <p className="text-xl md:text-2xl text-secondary-fixed-dim font-light">Teams work in isolation</p>
            <p className="text-xl md:text-2xl text-secondary-fixed-dim font-light">Issues are discovered too late</p>
          </div>
          
          <div className="pt-12">
            <p className="text-2xl md:text-4xl text-white font-body">This creates <span className="text-red-400 italic">risk.</span></p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
