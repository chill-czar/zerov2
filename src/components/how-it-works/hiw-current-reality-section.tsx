"use client";
import { motion } from "framer-motion";

export function HiwCurrentRealitySection() {
  return (
    <section className="py-24 md:py-40 px-6 md:px-12 bg-surface-container-lowest border-y border-outline-variant/30">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <h2 className="text-[3rem] md:text-display-sm text-secondary-fixed-dim tracking-tight">How Things Work Today</h2>
          
          <div className="space-y-6 md:text-xl text-on-surface-variant font-light">
            <p className="text-white text-2xl md:text-3xl mb-8">Your data is spread across systems.</p>
            <div className="pl-6 border-l-2 border-red-500/30 space-y-4 py-2">
              <p>Projects are tracked in Excel</p>
              <p>Financials are managed in ERP</p>
              <p>Sales are handled in CRM</p>
            </div>
            <p className="pt-6">Reports are created manually.</p>
          </div>
          
          <div className="pt-12 border-t border-outline-variant/30">
            <p className="text-2xl md:text-3xl text-red-400 font-light">Nothing is truly connected.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
