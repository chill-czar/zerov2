"use client";
import { motion } from "framer-motion";

export function SystemArchitecturePlatformSection() {
  return (
    <section className="py-24 md:py-40 px-6 md:px-12 bg-surface">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24 items-start">
        <motion.div 
          className="md:w-1/2 md:sticky md:top-40 space-y-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-[2.5rem] leading-[1.1] md:text-display-sm text-white tracking-tight text-glow-primary">A Complete Data Environment</h2>
          <p className="text-xl md:text-2xl text-secondary-fixed-dim font-light">
            Data is not stitched from multiple tools.
          </p>
        </motion.div>
        
        <motion.div 
          className="md:w-1/2 space-y-12"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="space-y-8">
            <p className="text-on-surface-variant font-label uppercase tracking-widest text-sm">ZERO provides:</p>
            <div className="space-y-6 border-l border-primary/30 pl-8 md:pl-12">
              <p className="text-2xl md:text-3xl text-white font-display">Database</p>
              <p className="text-2xl md:text-3xl text-white font-display">Data processing</p>
              <p className="text-2xl md:text-3xl text-white font-display">Data visualization</p>
            </div>
          </div>
          
          <div className="pt-8 pl-8 md:pl-12">
            <p className="text-xl md:text-2xl text-primary font-light">
              Everything operates within a single system.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
