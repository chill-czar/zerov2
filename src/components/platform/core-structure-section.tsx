"use client";
import { motion } from "framer-motion";

const layers = [
  { title: "Portfolio Layer", desc: "Overview of all projects, capital, and performance" },
  { title: "Project Layer", desc: "Execution across design, procurement, and construction" },
  { title: "Department Layer", desc: "Coordination across all teams and functions" },
  { title: "Data Layer", desc: "Centralized data powering real-time visibility" }
];

export function CoreStructureSection() {
  return (
    <section className="py-24 md:py-40 px-6 md:px-12 bg-surface">
      <div className="max-w-5xl mx-auto space-y-16">
        <motion.div 
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[2.5rem] md:text-display-sm text-white tracking-tight text-glow-primary">Built as a Structured System</h2>
          <p className="text-xl md:text-2xl text-secondary-fixed-dim font-light">ZERO operates across four connected layers.</p>
        </motion.div>
        
        <div className="space-y-4">
          {layers.map((layer, idx) => (
            <motion.div 
              key={layer.title}
              className="glass-panel border border-outline-variant/30 hover:border-primary/50 transition-colors w-full p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white tracking-tight relative z-10">{layer.title}</h3>
              <p className="text-on-surface-variant font-body text-lg md:text-xl md:text-right max-w-md relative z-10">{layer.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
