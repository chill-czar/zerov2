"use client";
import { motion } from "framer-motion";

export function ThinkingFrameworkSection() {
  return (
    <section className="py-32 md:py-48 px-6 md:px-12 bg-surface-container-lowest border-t border-outline-variant/30">
      <div className="max-w-4xl mx-auto space-y-16 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary font-label uppercase tracking-widest text-sm md:text-base mb-6 block">A Different Way to Think</span>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-12"
        >
          <div className="space-y-2">
            <p className="text-2xl md:text-4xl text-secondary-fixed-dim font-light line-through decoration-red-500/30">Real estate operations are not just about projects.</p>
            <p className="text-3xl md:text-5xl text-white tracking-tight text-glow-primary">They are about portfolios.</p>
          </div>
          
          <div className="space-y-2">
            <p className="text-2xl md:text-4xl text-secondary-fixed-dim font-light line-through decoration-red-500/30">They are not just about execution.</p>
            <p className="text-3xl md:text-5xl text-white tracking-tight text-glow-primary">They are about performance.</p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="pt-16 border-t border-outline-variant/30 w-fit mx-auto px-12"
        >
          <p className="text-2xl md:text-3xl text-primary font-light">Structure changes how decisions are made.</p>
        </motion.div>
      </div>
    </section>
  );
}
