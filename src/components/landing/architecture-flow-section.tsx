"use client";

import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export function ArchitectureFlowSection() {
  return (
    <>
      <style>{`.hide-scrollbars::-webkit-scrollbar { display: none; } .hide-scrollbars { -ms-overflow-style: none; scrollbar-width: none; }`}</style>
      <section className="py-20 md:py-32 px-6 md:px-12 bg-surface">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-8 md:gap-12">
          <motion.div 
            className="md:w-2/3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[2rem] md:text-4xl text-white uppercase tracking-tight mb-6 md:mb-8">Horizontal Narrative Architecture</h2>
            <p className="text-body-md text-lg md:text-xl text-on-surface-variant max-w-xl">ZERO maps the entire enterprise horizontal, connecting the technical execution with the financial strategy.</p>
          </motion.div>
          <motion.div 
            className="flex gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-primary/20 flex items-center justify-center text-primary cursor-pointer hover:bg-primary/5 transition-colors">
              <ArrowLeft size={20} />
            </div>
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-primary flex items-center justify-center text-on-primary bg-primary cursor-pointer hover:bg-primary-container transition-colors">
              <ArrowRight size={20} />
            </div>
          </motion.div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 px-6 md:px-12 bg-surface-container-lowest overflow-x-auto border-t border-outline-variant snap-x snap-mandatory hide-scrollbars">
        <motion.div 
          className="max-w-7xl mx-auto flex items-center justify-between min-w-[1000px] px-4"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          {['Design', 'Procurement', 'Construction', 'Sales', 'Revenue'].map((step, idx, arr) => (
            <div key={step} className="flex items-center flex-1 snap-center">
              <div className="flex flex-col items-center gap-4 text-center">
                <div className={`w-16 h-16 md:w-24 md:h-24 rounded-full flex items-center justify-center font-display font-bold text-xl md:text-2xl transition-all duration-500 hover:scale-110 ${idx === arr.length - 1 ? 'border border-primary text-primary bg-surface-container-high shadow-[0_0_20px_rgba(226,195,132,0.2)]' : 'bg-surface-container-high text-white border border-transparent hover:border-white/20'}`}>
                  0{idx + 1}
                </div>
                <span className="text-label text-primary text-xs md:text-sm">{step}</span>
              </div>
              {idx < arr.length - 1 && (
                <div className={`h-[2px] flex-1 mx-2 md:mx-4 bg-linear-to-r ${idx === arr.length - 2 ? 'from-primary/5 to-primary/50' : 'from-primary/50 to-primary/5'}`}></div>
              )}
            </div>
          ))}
        </motion.div>
      </section>
    </>
  );
}
