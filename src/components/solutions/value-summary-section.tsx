"use client";
import { motion } from "framer-motion";

export function ValueSummarySection() {
  return (
    <section className="py-32 md:py-48 px-6 md:px-12 bg-surface text-center">
      <div className="max-w-4xl mx-auto space-y-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[3.5rem] md:text-[5rem] text-white tracking-tighter text-glow-primary leading-[1.1]">
            One Platform. <br className="hidden md:block"/>Complete Alignment.
          </h2>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col md:flex-row justify-center gap-6 md:gap-12"
        >
          <p className="text-xl md:text-2xl text-secondary-fixed-dim font-light line-through decoration-red-500/30">No fragmented tools</p>
          <p className="text-xl md:text-2xl text-secondary-fixed-dim font-light line-through decoration-red-500/30">No disconnected reporting</p>
          <p className="text-xl md:text-2xl text-secondary-fixed-dim font-light line-through decoration-red-500/30">No misalignment</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="pt-16 border-t border-outline-variant/30 w-fit mx-auto px-12"
        >
          <p className="text-2xl md:text-3xl text-primary font-body text-glow-primary">Everything works together.</p>
        </motion.div>
      </div>
    </section>
  );
}
