"use client";
import { motion } from "framer-motion";

export function HiwFinalOutcomeSection() {
  return (
    <section className="py-32 md:py-48 px-6 md:px-12 bg-surface-container-lowest border-y border-outline-variant/30 relative overflow-hidden">
      <div className="bg-glow-blob w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10"></div>
      
      <div className="max-w-4xl mx-auto space-y-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-[3rem] md:text-[5rem] text-white tracking-tighter text-glow-primary">
            What Changes
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-xl md:text-2xl text-secondary-fixed-dim font-light line-through decoration-red-500/30">You depend on manual reports.</p>
            <p className="text-xl md:text-2xl text-secondary-fixed-dim font-light line-through decoration-red-500/30">You wait for updates.</p>
            <p className="text-xl md:text-2xl text-secondary-fixed-dim font-light line-through decoration-red-500/30">You operate in fragments.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 border-l-2 border-primary/50 pl-6"
          >
            <p className="text-xl md:text-2xl text-white font-body">You see your entire portfolio clearly.</p>
            <p className="text-xl md:text-2xl text-white font-body">You act before problems grow.</p>
            <p className="text-xl md:text-2xl font-body text-primary">You stay in control.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
