"use client";
import { motion } from "framer-motion";
import { MoreVertical } from "lucide-react";

export function CrossRoleSection() {
  return (
    <section className="py-24 md:py-40 px-6 md:px-12 bg-surface-container-lowest border-t border-outline-variant/30 relative overflow-hidden">
      <div className="bg-glow-blob w-[400px] h-[400px] top-1/4 left-1/2 -translate-x-1/2 opacity-10"></div>
      <div className="max-w-4xl mx-auto text-center space-y-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[3rem] md:text-display-sm text-white tracking-tight text-glow-primary">
            Different Roles. <br className="hidden md:block"/>One System.
          </h2>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-6 items-center text-xl md:text-2xl text-secondary-fixed-dim font-light"
        >
          <p><span className="text-white font-body px-2">Developers</span> focus on performance</p>
          <MoreVertical size={20} className="text-primary/30 hidden md:block" />
          <p><span className="text-white font-body px-2">PMO teams</span> focus on execution</p>
          <MoreVertical size={20} className="text-primary/30 hidden md:block" />
          <p><span className="text-white font-body px-2">Asset managers</span> focus on outcomes</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="pt-12"
        >
          <p className="text-2xl md:text-4xl text-primary font-light">ZERO connects them all.</p>
        </motion.div>
      </div>
    </section>
  );
}
