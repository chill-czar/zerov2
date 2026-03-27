"use client";

import { motion } from 'framer-motion';

export function SystemArchitectureSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  return (
    <>
      <section className="py-20 md:py-32 px-6 md:px-12 bg-surface-container-lowest border-t border-outline-variant">
        <motion.div 
          className="max-w-4xl mx-auto space-y-8 md:space-y-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[2.5rem] leading-[1.1] md:text-5xl font-display font-bold text-center text-white uppercase tracking-tight">Structured Authority</h2>
          <div className="h-px w-24 md:w-32 bg-primary mx-auto"></div>
          <p className="text-center text-body-md text-lg md:text-xl text-on-surface-variant leading-relaxed">
            ZERO isn&apos;t just a dashboard; it&apos;s a governance framework. It enforces the processes that protect your capital and ensure your architectural vision is delivered exactly as designed.
          </p>
        </motion.div>
      </section>
      
      <section className="py-20 md:py-32 px-6 md:px-12 bg-surface">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={itemVariants} className="p-8 md:p-12 bg-surface-container-high rounded-t-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-8 group hover:bg-white/5 transition-colors">
              <div className="md:w-1/3">
                <span className="text-primary font-display font-bold text-xl md:text-2xl transition-transform group-hover:scale-110 inline-block">03</span>
                <h4 className="text-lg md:text-xl font-display font-bold text-white uppercase mt-2">Visualization Layer</h4>
              </div>
              <p className="md:w-2/3 text-on-surface-variant text-sm md:text-base font-body leading-relaxed">Real-time executive cockpit, automated reporting, and predictive analytics dashboards.</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="p-8 md:p-12 bg-surface-container flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-8 group hover:bg-surface-container-high transition-colors">
              <div className="md:w-1/3">
                <span className="text-primary font-display font-bold text-xl md:text-2xl transition-transform group-hover:scale-110 inline-block">02</span>
                <h4 className="text-lg md:text-xl font-display font-bold text-white uppercase mt-2">Processing Layer</h4>
              </div>
              <p className="md:w-2/3 text-on-surface-variant text-sm md:text-base font-body leading-relaxed">Automated logic engines, KPI weightings, and cross-departmental data reconciliation.</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="p-8 md:p-12 bg-surface-container-lowest rounded-b-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-8 group hover:bg-surface-container transition-colors">
              <div className="md:w-1/3">
                <span className="text-primary font-display font-bold text-xl md:text-2xl transition-transform group-hover:scale-110 inline-block">01</span>
                <h4 className="text-lg md:text-xl font-display font-bold text-white uppercase mt-2">Data Environment</h4>
              </div>
              <p className="md:w-2/3 text-on-surface-variant text-sm md:text-base font-body leading-relaxed">The unified truth engine that ingests and standardizes data from all existing legacy silos.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
