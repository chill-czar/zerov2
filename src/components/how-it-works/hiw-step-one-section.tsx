"use client";
import { motion } from "framer-motion";

export function HiwStepOneSection() {
  return (
    <section className="py-32 md:py-48 px-6 md:px-12 bg-surface-container-lowest border-t border-outline-variant/30">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <span className="text-primary font-display font-bold text-xl md:text-3xl opacity-50 block mb-4">Step 1</span>
          <h2 className="text-[3rem] md:text-display-sm text-white tracking-tight text-glow-primary leading-tight">
            Bring Everything Into<br/>One System
          </h2>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8 text-xl md:text-2xl text-secondary-fixed-dim font-light max-w-2xl mx-auto"
        >
          <p>ZERO connects your projects, financials, and operations in one place.</p>
          <p>No more switching between tools.</p>
          <p className="text-white font-body text-2xl md:text-3xl pt-8 border-t border-outline-variant/30">Everything starts from one source.</p>
        </motion.div>
      </div>
    </section>
  );
}
