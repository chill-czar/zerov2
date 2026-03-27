"use client";

import { motion } from 'framer-motion';

export function FragmentationSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="bg-surface-container-lowest py-20 md:py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          <motion.div 
            className="lg:w-1/2 lg:sticky lg:top-40"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[2.5rem] leading-none md:text-display-sm text-white mb-6 md:mb-8">
              The ecosystem of isolation.
            </h2>
            <p className="text-body-md text-on-surface-variant text-lg md:text-xl leading-relaxed">
              No single system sees the full picture. Data is trapped in silos, requiring human intervention to bridge the gaps.
            </p>
          </motion.div>
          <motion.div 
            className="lg:w-1/2 space-y-4 md:space-y-6 w-full"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {['EXCEL', 'ERP', 'CRM', 'MANUAL REPORTING'].map((tool) => (
              <motion.div 
                key={tool} 
                variants={itemVariants}
                className="card-elevated flex justify-between items-center group hover:-translate-y-1 hover:bg-surface-container-highest transition-all cursor-default"
              >
                <span className="font-display font-bold text-white text-xl md:text-2xl">{tool}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
