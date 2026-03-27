"use client";

import { motion } from 'framer-motion';

export function TransformationSection() {
  const listVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };
  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section className="py-20 md:py-32 px-6 md:px-12 bg-surface-container-low border-t border-outline-variant">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        
        <motion.div 
          className="space-y-8 md:space-y-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h3 variants={listItemVariants} className="text-xs font-label uppercase tracking-[0.4em] text-red-500">The Legacy State</motion.h3>
          <motion.ul variants={listVariants} className="space-y-6 md:space-y-8">
            <motion.li variants={listItemVariants} className="flex items-center gap-4 md:gap-6 group">
              <span className="text-[2rem] md:text-3xl font-display font-bold text-on-surface-variant/30 transition-colors">Fragmented</span>
              <div className="flex-1 border-b border-outline-variant"></div>
            </motion.li>
            <motion.li variants={listItemVariants} className="flex items-center gap-4 md:gap-6 group">
              <span className="text-[2rem] md:text-3xl font-display font-bold text-on-surface-variant/30 transition-colors">Delayed</span>
              <div className="flex-1 border-b border-outline-variant"></div>
            </motion.li>
            <motion.li variants={listItemVariants} className="flex items-center gap-4 md:gap-6 group">
              <span className="text-[2rem] md:text-3xl font-display font-bold text-on-surface-variant/30 transition-colors">Reactive</span>
              <div className="flex-1 border-b border-outline-variant"></div>
            </motion.li>
          </motion.ul>
        </motion.div>
        
        <motion.div 
          className="space-y-8 md:space-y-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.3 }}
        >
          <motion.h3 variants={listItemVariants} className="text-xs font-label uppercase tracking-[0.4em] text-primary">The ZERO State</motion.h3>
          <motion.ul variants={listVariants} className="space-y-6 md:space-y-8">
            <motion.li variants={listItemVariants} className="flex items-center gap-4 md:gap-6 group hover:-translate-y-1 transition-transform">
              <span className="text-[2rem] md:text-3xl font-display font-bold text-primary drop-shadow-[0_0_15px_rgba(226,195,132,0.3)]">Structured</span>
              <div className="flex-1 border-b border-primary/20"></div>
            </motion.li>
            <motion.li variants={listItemVariants} className="flex items-center gap-4 md:gap-6 group hover:-translate-y-1 transition-transform">
              <span className="text-[2rem] md:text-3xl font-display font-bold text-primary drop-shadow-[0_0_15px_rgba(226,195,132,0.3)]">Real-time</span>
              <div className="flex-1 border-b border-primary/20"></div>
            </motion.li>
            <motion.li variants={listItemVariants} className="flex items-center gap-4 md:gap-6 group hover:-translate-y-1 transition-transform">
              <span className="text-[2rem] md:text-3xl font-display font-bold text-primary drop-shadow-[0_0_15px_rgba(226,195,132,0.3)]">Controlled</span>
              <div className="flex-1 border-b border-primary/20"></div>
            </motion.li>
          </motion.ul>
        </motion.div>
        
      </div>
    </section>
  );
}
