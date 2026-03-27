"use client";
import { motion } from "framer-motion";

export function WhatIsNotSection() {
  return (
    <section className="py-24 md:py-40 px-6 md:px-12 bg-surface-container-lowest border-y border-outline-variant/30">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24 items-start">
        <motion.div 
          className="md:w-1/2 md:sticky md:top-40"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[3rem] leading-none md:text-display-sm text-white text-glow-primary">
            Not Another Software Layer
          </h2>
        </motion.div>
        
        <motion.div 
          className="md:w-1/2 space-y-12"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-6 border-l border-primary/30 pl-8 md:pl-12">
            <p className="text-2xl md:text-3xl text-secondary-fixed-dim font-light line-through decoration-red-500/50 decoration-2">Not project management</p>
            <p className="text-2xl md:text-3xl text-secondary-fixed-dim font-light line-through decoration-red-500/50 decoration-2">Not construction tracking</p>
            <p className="text-2xl md:text-3xl text-secondary-fixed-dim font-light line-through decoration-red-500/50 decoration-2">Not reporting dashboards</p>
          </div>
          
          <div className="pt-8 pl-8 md:pl-12">
            <p className="text-xl md:text-2xl text-white font-body leading-relaxed">
              <span className="text-secondary-fixed-dim">Those systems manage activity.</span><br/>
              ZERO manages performance.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
