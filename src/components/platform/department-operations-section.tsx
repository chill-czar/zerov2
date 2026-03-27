"use client";
import { motion } from "framer-motion";

const departments = [
  "Procurement", "Design", "Delivery", "Commercial", "Sales & Marketing", 
  "Finance", "Accounts", "HR", "Leasing", "Asset Management"
];

export function DepartmentOperationsSection() {
  return (
    <section className="py-24 md:py-40 px-6 md:px-12 bg-surface">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24 items-start">
        <motion.div 
          className="md:w-1/3 md:sticky md:top-40 space-y-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-[2.5rem] leading-[1.1] md:text-display-sm text-white tracking-tight text-glow-primary">All Functions. <br/>One Environment.</h2>
          <p className="text-lg md:text-xl text-primary font-body">
            Each function operates independently — but stays aligned.
          </p>
        </motion.div>
        
        <motion.div 
          className="md:w-2/3 flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {departments.map((dept, idx) => (
            <motion.div 
              key={dept} 
              className="px-6 py-4 rounded-full border border-outline-variant/30 bg-surface-container-low hover:bg-surface-container hover:border-primary/50 transition-colors text-white font-body text-lg md:text-xl cursor-default"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ delay: idx * 0.05 }}
            >
              {dept}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
