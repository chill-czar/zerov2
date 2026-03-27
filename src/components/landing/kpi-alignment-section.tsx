"use client";

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export function KpiAlignmentSection() {
  const steps = [
    { level: '01', title: 'Dept KPI', desc: 'Granular performance data from individual functional teams.' },
    { level: '02', title: 'Project KPI', desc: 'Consolidated health metrics for specific assets or developments.' },
    { level: '03', title: 'Business KPI', desc: 'Board-level executive reporting aligned to the Business Plan.', active: true }
  ];

  return (
    <section className="py-20 md:py-32 px-6 md:px-12 bg-surface-container-low">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          <motion.div 
            className="lg:col-span-4 space-y-4 md:space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
          >
            {steps.map((step, idx) => (
              <div key={step.level}>
                <motion.div 
                  variants={{
                    hidden: { opacity: 0, x: -30 },
                    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } }
                  }}
                  className={`p-6 md:p-8 rounded-xl border-l-4 border-primary ${step.active ? 'bg-surface-container-highest shadow-ambient scale-[1.02] transition-transform' : 'bg-surface-container hover:bg-surface-container-high transition-colors'}`}
                >
                  <span className="text-label text-primary">Level {step.level}</span>
                  <h4 className="text-xl md:text-2xl font-display font-bold text-white mt-2">{step.title}</h4>
                  <p className="text-on-surface-variant text-sm mt-3 md:mt-4 font-body leading-relaxed">{step.desc}</p>
                </motion.div>
                {idx < steps.length - 1 && (
                  <motion.div 
                    variants={{ hidden: { opacity: 0, height: 0 }, visible: { opacity: 1, height: 'auto' } }}
                    className="flex justify-center py-2 md:py-4"
                  >
                    <ArrowDown size={20} className="text-primary/30 animate-pulse" />
                  </motion.div>
                )}
              </div>
            ))}
          </motion.div>
          
          <div className="lg:col-span-8 flex items-center">
            <motion.div 
              className="space-y-8 md:space-y-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-[3rem] leading-[1.1] md:text-[5rem] text-white">
                Vertical <br/><span className="bg-linear-to-br from-primary to-primary-container bg-clip-text text-transparent">Truth</span> alignment.
              </h2>
              <p className="text-body-md text-lg md:text-xl text-on-surface-variant max-w-lg leading-relaxed">
                ZERO ensures that every data point captured on the site floor resonates directly into the executive boardroom. No translation errors. No filter.
              </p>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
