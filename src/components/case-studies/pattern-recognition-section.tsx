"use client";
import { motion } from "framer-motion";

export function PatternRecognitionSection() {
  return (
    <section className="py-24 md:py-40 px-6 md:px-12 bg-surface border-t border-outline-variant/30">
      <div className="max-w-4xl mx-auto space-y-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-center"
        >
          <span className="text-primary font-label uppercase tracking-widest text-sm md:text-base mb-4 block">Analysis</span>
          <h2 className="text-[3rem] md:text-display-sm text-white tracking-tight leading-tight">
            A Common Pattern
          </h2>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center justify-center gap-6 text-center"
        >
          <p className="text-2xl md:text-3xl text-secondary-fixed-dim font-light">Fragmentation leads to delayed visibility.</p>
          <p className="text-2xl md:text-3xl text-secondary-fixed-dim font-light">Delayed visibility leads to risk.</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="pt-16 border-t border-outline-variant/30 w-fit mx-auto px-12 text-center"
        >
          <p className="text-2xl md:text-3xl text-primary font-body text-glow-primary">
            ZERO removes fragmentation — <br className="hidden md:block"/> and restores control.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
