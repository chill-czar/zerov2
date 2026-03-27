"use client";
import { motion } from "framer-motion";

export function TransitionActionSection() {
  return (
    <section className="py-32 md:py-48 px-6 md:px-12 bg-surface-container-lowest border-t border-outline-variant/30 relative overflow-hidden">
      <div className="bg-glow-blob w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10"></div>
      
      <div className="max-w-4xl mx-auto space-y-8 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[3rem] md:text-[5rem] text-white tracking-tighter text-glow-primary mb-8">
            From Scenario <br/> to System
          </h2>
          <p className="text-xl md:text-2xl text-secondary-fixed-dim font-light">
            See how ZERO applies to your portfolio.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
