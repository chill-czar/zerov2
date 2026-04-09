"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export function TopNavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-surface/90 backdrop-blur-xl w-full px-6 md:px-12 py-4 md:py-5 max-w-[1920px] mx-auto sticky top-0 z-50 border-none shadow-ambient">
      <div className="flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          {/* Logo Placeholder - User will drop Logo-01.png in /public */}
          <div className="relative w-24 h-12 md:w-36 md:h-14 group-hover:opacity-80 transition-opacity">
            <Image 
              src="/Logo-01.png" 
              alt="ZERO Logo" 
              fill
              className="object-contain object-left scale-125 md:scale-150 origin-left" 
              priority
            />
          </div>
          {/* Fallback text just in case image is missing while testing */}
          <span className="sr-only">ZERO PMO</span>
        </Link>
        
        <div className="hidden lg:flex gap-8 items-center">
          <Link href="/platform" className="relative text-on-surface-variant hover:text-white transition-colors font-label text-sm py-1 group">
            Platform
            <span className="absolute bottom-0 left-0 w-full h-px bg-primary scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out" />
          </Link>
          <Link href="/how-it-works" className="relative text-on-surface-variant hover:text-white transition-colors font-label text-sm py-1 group">
            How It Works
            <span className="absolute bottom-0 left-0 w-full h-px bg-primary scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out" />
          </Link>
          <Link href="/solutions" className="relative text-on-surface-variant hover:text-white transition-colors font-label text-sm py-1 group">
            Solutions
            <span className="absolute bottom-0 left-0 w-full h-px bg-primary scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out" />
          </Link>
          <Link href="/case-studies" className="relative text-on-surface-variant hover:text-white transition-colors font-label text-sm py-1 group">
            Case Studies
            <span className="absolute bottom-0 left-0 w-full h-px bg-primary scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out" />
          </Link>
          <Link href="/insights" className="relative text-on-surface-variant hover:text-white transition-colors font-label text-sm py-1 group">
            Insights
            <span className="absolute bottom-0 left-0 w-full h-px bg-primary scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out" />
          </Link>
          <Link href="/about" className="relative text-on-surface-variant hover:text-white transition-colors font-label text-sm py-1 group">
            About
            <span className="absolute bottom-0 left-0 w-full h-px bg-primary scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out" />
          </Link>
          <Link href="/contact" className="relative text-on-surface-variant hover:text-white transition-colors font-label text-sm py-1 group">
            Contact
            <span className="absolute bottom-0 left-0 w-full h-px bg-primary scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out" />
          </Link>

          <Link href="/contact" className="ml-4">
            <button className="btn-base btn-primary text-sm uppercase tracking-widest py-2 px-6 shadow-[0_0_20px_rgba(226,195,132,0.3)] hover:shadow-[0_0_30px_rgba(226,195,132,0.5)]">
              Request Access
            </button>
          </Link>
        </div>

        <button 
          className="lg:hidden text-primary p-2 flex items-center justify-center cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile dropdown — absolutely positioned so it overlays content below */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-surface/95 backdrop-blur-xl border-t border-outline-variant/30 flex flex-col gap-6 px-6 py-8 z-50 shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
          >
            <Link href="/platform" className="relative w-fit text-on-surface-variant hover:text-white font-label text-sm py-1 group" onClick={() => setIsOpen(false)}>
              Platform
              <span className="absolute bottom-0 left-0 w-full h-px bg-primary scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out" />
            </Link>
            <Link href="/how-it-works" className="relative w-fit text-on-surface-variant hover:text-white font-label text-sm py-1 group" onClick={() => setIsOpen(false)}>
              How It Works
              <span className="absolute bottom-0 left-0 w-full h-px bg-primary scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out" />
            </Link>
            <Link href="/solutions" className="relative w-fit text-on-surface-variant hover:text-white font-label text-sm py-1 group" onClick={() => setIsOpen(false)}>
              Solutions
              <span className="absolute bottom-0 left-0 w-full h-px bg-primary scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out" />
            </Link>
            <Link href="/case-studies" className="relative w-fit text-on-surface-variant hover:text-white font-label text-sm py-1 group" onClick={() => setIsOpen(false)}>
              Case Studies
              <span className="absolute bottom-0 left-0 w-full h-px bg-primary scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out" />
            </Link>
            <Link href="/insights" className="relative w-fit text-on-surface-variant hover:text-white font-label text-sm py-1 group" onClick={() => setIsOpen(false)}>
              Insights
              <span className="absolute bottom-0 left-0 w-full h-px bg-primary scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out" />
            </Link>
            <Link href="/about" className="relative w-fit text-on-surface-variant hover:text-white font-label text-sm py-1 group" onClick={() => setIsOpen(false)}>
              About
              <span className="absolute bottom-0 left-0 w-full h-px bg-primary scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out" />
            </Link>
            <Link href="/contact" className="relative w-fit text-on-surface-variant hover:text-white font-label text-sm py-1 group" onClick={() => setIsOpen(false)}>
              Contact
              <span className="absolute bottom-0 left-0 w-full h-px bg-primary scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out" />
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <button className="btn-base btn-primary text-sm uppercase tracking-wider py-3 mt-2 w-full">
                Request Access
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
