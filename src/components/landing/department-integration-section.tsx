"use client";

import React from 'react';
import { motion } from 'framer-motion';

export function DepartmentIntegrationSection() {
  const departments = [
    "Procurement", "Design", "Delivery", "Commercial", "Sales", "Finance", 
    "Accounts", "HR", "Leasing", "Asset Management"
  ];
  
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 bg-surface">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h3 
          className="text-label text-secondary-fixed-dim mb-12 md:mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          The Unitary Force
        </motion.h3>
        <motion.div 
          className="flex flex-wrap justify-center gap-x-6 gap-y-8 md:gap-x-8 md:gap-y-12 text-2xl md:text-5xl font-display font-bold text-on-surface-variant/40"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
        >
          {departments.map((dept, index) => (
            <React.Fragment key={dept}>
              <motion.span 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className={`hover:text-primary transition-colors cursor-default ${dept === 'Commercial' ? 'text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] scale-110' : ''}`}
              >
                {dept}
              </motion.span>
              {index < departments.length - 1 && (
                <motion.span 
                  variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                  className="text-primary/20"
                >
                  •
                </motion.span>
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
