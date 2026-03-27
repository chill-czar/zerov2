"use client";
import { motion } from "framer-motion";
import Link from "next/link";

interface RoleSectionProps {
  role: string;
  subtext: string;
  features: string[];
  closing: string;
  label: string;
  linkHref: string;
  linkText: string;
  alignRight?: boolean;
}

export function RoleSection({ role, subtext, features, closing, label, linkHref, linkText, alignRight = false }: RoleSectionProps) {
  const content = (
    <div className={`max-w-6xl mx-auto flex flex-col ${alignRight ? 'md:flex-row-reverse' : 'md:flex-row'} gap-16 md:gap-24 items-start`}>
      <motion.div 
        initial={{ opacity: 0, x: alignRight ? 30 : -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 md:sticky md:top-40 space-y-6"
      >
        <span className="text-primary font-label uppercase tracking-widest text-sm md:text-base block mb-4">{label}</span>
        <h2 className="text-[3.5rem] md:text-display-sm text-white tracking-tight text-glow-primary leading-tight">
          For {role}
        </h2>
        <p className="text-xl md:text-2xl text-secondary-fixed-dim font-light max-w-md">
          {subtext}
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: alignRight ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="md:w-1/2 space-y-8"
      >
        <div className={`space-y-6 py-2 ${alignRight ? 'pr-8 border-r-2 border-primary/30 text-right' : 'pl-8 border-l-2 border-primary/30'}`}>
          {features.map((feature, i) => (
            <p key={i} className="text-xl md:text-2xl text-white font-body">{feature}</p>
          ))}
        </div>
        
        <div className={`pt-12 border-t border-outline-variant/30 mt-12 w-full flex flex-col ${alignRight ? 'pr-8 items-end text-right' : 'pl-8 items-start'}`}>
          <p className="text-2xl md:text-3xl text-primary font-light">
            {closing}
          </p>
          <div className="mt-12">
             <Link href={linkHref} className="text-primary hover:text-white uppercase tracking-widest font-label text-xs md:text-sm transition-colors border-b border-primary/30 hover:border-white pb-1 pt-4 group">
               {linkText}
               <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
             </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );

  return (
    <section className={`py-24 md:py-40 px-6 md:px-12 ${alignRight ? 'bg-surface' : 'bg-surface-container-lowest border-y border-outline-variant/30'}`}>
      {content}
    </section>
  );
}
