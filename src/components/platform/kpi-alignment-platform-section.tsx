"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function KpiAlignmentPlatformSection() {
  const [activeNode, setActiveNode] = useState<number | null>(null);

  const nodes = [
    { id: 0, title: 'Department KPIs', desc: 'Granular operational metrics from procurement, HR, and design.' },
    { id: 1, title: 'Project KPIs', desc: 'Aggregated asset performance against baseline budgets and schedules.' },
    { id: 2, title: 'Business Performance', desc: 'Executive-level yield, IRR, and portfolio-wide financial strategy.' }
  ];

  return (
    <section className="py-24 md:py-40 px-6 md:px-12 bg-surface-container-lowest">
      <div className="max-w-4xl mx-auto text-center space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[2.5rem] md:text-display-sm text-white tracking-tight text-glow-primary">From Activity to Performance</h2>
          <p className="text-secondary-fixed-dim mt-4 text-lg md:text-xl font-light">Interact with the flow below to see alignment.</p>
        </motion.div>
        
        <div className="space-y-4 max-w-2xl mx-auto">
          {nodes.map((node, i) => (
            <React.Fragment key={node.id}>
              <motion.div 
                className={`relative p-8 border-l-4 cursor-pointer transition-all duration-500 overflow-hidden group ${
                  activeNode === i || activeNode === null 
                    ? 'border-primary bg-surface-container-high shadow-[0_4px_30px_rgba(226,195,132,0.1)]' 
                    : 'border-outline-variant/30 bg-surface-container-low opacity-50 hover:opacity-100'
                }`}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onMouseEnter={() => setActiveNode(i)}
                onMouseLeave={() => setActiveNode(null)}
              >
                <div className="absolute inset-0 bg-linear-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 text-left">
                  <p className={`text-xl md:text-3xl font-display transition-colors duration-300 ${activeNode === i ? 'text-primary' : 'text-white'}`}>
                    {node.title}
                  </p>
                  <AnimatePresence>
                    {(activeNode === i || activeNode === null) && (
                      <motion.p 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto', marginTop: 12 }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        className="text-on-surface-variant font-light text-sm md:text-base leading-relaxed"
                      >
                        {node.desc}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
              
              {i < nodes.length - 1 && (
                <motion.div 
                  className="flex justify-center py-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <ArrowDown 
                    size={24} 
                    className={`transition-colors duration-500 ${
                      (activeNode !== null && activeNode >= i) ? 'text-primary' : 'text-primary/20'
                    }`} 
                  />
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </div>
        
        <motion.div 
          className="pt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-2xl md:text-4xl text-white font-light border-b border-primary/30 inline-block pb-4">
            Everything aligns with the <span className="text-primary text-glow-primary font-medium">business plan.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
