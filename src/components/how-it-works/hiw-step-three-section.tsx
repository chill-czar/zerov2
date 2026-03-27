"use client";
import { motion } from "framer-motion";

const departments = ["Procurement", "Design", "Construction", "Sales", "Finance"];

export function HiwStepThreeSection() {
  return (
    <section className="py-24 md:py-40 px-6 md:px-12 bg-surface-container-lowest">
      <div className="max-w-4xl mx-auto space-y-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <span className="text-primary font-display font-bold text-xl md:text-3xl opacity-50 block mb-4">Step 3</span>
          <h2 className="text-[3rem] md:text-display-sm text-white tracking-tight leading-tight">
            Connect Every Department
          </h2>
          <p className="text-xl md:text-2xl text-secondary-fixed-dim font-light max-w-2xl">
            Each department works within the same system.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap gap-4"
        >
          {departments.map((dept) => (
            <span key={dept} className="px-6 py-3 rounded-full border border-outline-variant/30 bg-surface-container hover:border-primary/50 text-white font-body text-lg md:text-xl transition-colors cursor-default">
              {dept}
            </span>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="pt-12"
        >
          <p className="text-2xl md:text-3xl text-primary font-light">Everyone works with the same data.</p>
        </motion.div>
      </div>
    </section>
  );
}
