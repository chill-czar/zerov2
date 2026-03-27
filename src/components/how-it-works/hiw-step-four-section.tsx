"use client";
import { motion } from "framer-motion";

export function HiwStepFourSection() {
  return (
    <section className="py-24 md:py-40 px-6 md:px-12 bg-surface">
      <div className="max-w-4xl mx-auto space-y-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <span className="text-primary font-display font-bold text-xl md:text-3xl opacity-50 block mb-4">Step 4</span>
          <h2 className="text-[3rem] md:text-display-sm text-white tracking-tight leading-tight">
            Track Performance in Real-Time
          </h2>
          <p className="text-xl md:text-2xl text-secondary-fixed-dim font-light max-w-2xl">
            You can instantly see:
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4 pl-6 border-l-2 border-primary/30 py-2"
        >
          <p className="text-xl md:text-2xl text-white font-body">Project progress</p>
          <p className="text-xl md:text-2xl text-white font-body">Budget vs cost</p>
          <p className="text-xl md:text-2xl text-white font-body">Sales performance</p>
          <p className="text-xl md:text-2xl text-white font-body">Cashflow status</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="pt-12"
        >
          <p className="text-2xl md:text-3xl text-primary font-light">No waiting for reports.</p>
        </motion.div>
      </div>
    </section>
  );
}
