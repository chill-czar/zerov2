"use client";
import { motion } from "framer-motion";

const topics = [
  "Portfolio Management",
  "PMO Operations",
  "Risk & Performance",
  "Real Estate Strategy"
];

export function CoreTopicsSection() {
  return (
    <section className="py-24 px-6 md:px-12 bg-surface">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row gap-12 md:gap-24 items-start md:items-center"
        >
          <div className="md:w-1/4">
            <h3 className="text-primary font-label uppercase tracking-widest text-sm">Core Areas</h3>
          </div>
          <div className="md:w-3/4 flex flex-wrap gap-8 md:gap-16">
            {topics.map((topic, index) => (
              <span key={index} className="text-xl md:text-3xl text-white font-light tracking-tight hover:text-primary transition-colors cursor-default">
                {topic}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
