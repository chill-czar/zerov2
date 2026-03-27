"use client";
import { motion } from "framer-motion";

export function DifferentiationSection() {
  return (
    <section className="py-24 md:py-40 px-6 md:px-12 bg-surface-container-lowest border-t border-outline-variant/30">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        <motion.div 
          className="space-y-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-[2.5rem] leading-[1.1] md:text-4xl text-secondary-fixed-dim tracking-tight">Most Systems <br className="hidden md:block"/>Manage Work</h2>
          <div className="space-y-6 pl-4">
            <p className="text-xl text-on-surface-variant font-light line-through decoration-red-500/30">They track tasks</p>
            <p className="text-xl text-on-surface-variant font-light line-through decoration-red-500/30">They manage construction</p>
            <p className="text-xl text-on-surface-variant font-light line-through decoration-red-500/30">They generate reports</p>
          </div>
        </motion.div>
        
        <motion.div 
          className="space-y-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-[2.5rem] leading-[1.1] md:text-4xl text-white tracking-tight text-glow-primary">ZERO</h2>
          <div className="space-y-6 border-l-2 border-primary pl-6 md:pl-8">
            <p className="text-xl md:text-2xl text-white font-body">Structures the entire portfolio</p>
            <p className="text-xl md:text-2xl text-white font-body">Aligns execution with strategy</p>
            <p className="text-xl md:text-2xl text-white font-body">Enables real-time control</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
