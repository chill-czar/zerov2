"use client";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function KpiAlignmentPlatformSection() {
  return (
    <section className="py-24 md:py-40 px-6 md:px-12 bg-surface-container-lowest">
      <div className="max-w-4xl mx-auto text-center space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[2.5rem] md:text-display-sm text-white tracking-tight text-glow-primary">From Activity to Business Performance</h2>
        </motion.div>
        
        <div className="space-y-4">
          <motion.div 
            className="p-8 border-l-4 border-primary/40 bg-surface-container-low text-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl md:text-3xl text-white font-display">Department KPIs connect to project KPIs</p>
          </motion.div>
          
          <motion.div 
            className="flex justify-center py-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <ArrowDown size={24} className="text-primary/40" />
          </motion.div>
          
          <motion.div 
            className="p-8 border-l-4 border-primary bg-surface-container-high text-left shadow-[0_4px_30px_rgba(226,195,132,0.1)]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-xl md:text-3xl text-white font-display">Project KPIs connect to business KPIs</p>
          </motion.div>
        </div>
        
        <motion.div 
          className="pt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-2xl md:text-4xl text-primary font-light">
            Everything aligns with the business plan.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
