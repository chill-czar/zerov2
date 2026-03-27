"use client";

import { motion } from 'framer-motion';

export function ExecutiveVisibilitySection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-24 md:py-40 px-6 md:px-12 bg-surface overflow-hidden relative border-t border-outline-variant">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(226, 195, 132, 0.05) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      
      <motion.div 
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={cardVariants} className="card-elevated hover:-translate-y-2 hover:shadow-ambient transition-all cursor-default group">
          <h5 className="text-xs md:text-sm font-label uppercase tracking-[0.2em] text-primary mb-8 md:mb-12">Cashflow Intelligence</h5>
          <div className="text-[2.5rem] md:text-5xl font-display font-bold text-white mb-3 md:mb-4 group-hover:text-primary transition-colors">+18.4%</div>
          <p className="text-on-surface-variant font-body text-sm md:text-base leading-relaxed">Real-time projection accuracy across the entire development portfolio.</p>
        </motion.div>
        
        <motion.div variants={cardVariants} className="card-elevated hover:-translate-y-2 hover:shadow-ambient transition-all cursor-default group">
          <h5 className="text-xs md:text-sm font-label uppercase tracking-[0.2em] text-primary mb-8 md:mb-12">Risk Mitigation</h5>
          <div className="text-[2.5rem] md:text-5xl font-display font-bold text-white mb-3 md:mb-4 group-hover:text-primary transition-colors">0.02s</div>
          <p className="text-on-surface-variant font-body text-sm md:text-base leading-relaxed">Instant variance detection on critical path activities across 40+ departments.</p>
        </motion.div>
        
        <motion.div variants={cardVariants} className="card-elevated hover:-translate-y-2 hover:shadow-ambient transition-all cursor-default group">
          <h5 className="text-xs md:text-sm font-label uppercase tracking-[0.2em] text-primary mb-8 md:mb-12">Plan Performance</h5>
          <div className="text-[2.5rem] md:text-5xl font-display font-bold text-white mb-3 md:mb-4 group-hover:text-primary transition-colors">Active</div>
          <p className="text-on-surface-variant font-body text-sm md:text-base leading-relaxed">Continuous alignment check against the institutional 10-year business plan.</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
