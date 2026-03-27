"use client";
import { motion } from "framer-motion";

const stages = ["Design", "Procurement", "Construction", "Sales", "Revenue"];

export function LifecycleSection() {
  return (
    <section className="py-24 md:py-40 px-6 md:px-12 bg-surface-container-lowest">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="mb-16 md:mb-24 space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[2.5rem] md:text-display-sm text-white tracking-tight text-glow-primary">One System Across <br className="hidden md:block"/>the Entire Lifecycle</h2>
        </motion.div>
        
        <div className="flex flex-col gap-6 md:gap-10">
          {stages.map((stage, idx) => (
            <motion.div 
              key={stage}
              className="flex items-center gap-6 md:gap-12"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <span className="text-primary font-display font-bold text-xl md:text-3xl opacity-50">0{idx + 1}</span>
              <h3 className="text-[3rem] md:text-[6rem] font-display font-bold text-white leading-none tracking-tighter hover:text-primary transition-colors cursor-default">{stage}</h3>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-20 pt-8 border-t border-outline-variant/30"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xl md:text-2xl text-secondary-fixed-dim font-light leading-relaxed max-w-2xl">
            Every stage is connected.<br/>
            <span className="text-white">No transitions. No data loss.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
