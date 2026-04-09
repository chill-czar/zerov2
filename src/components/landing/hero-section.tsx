"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ShieldCheck, LayoutDashboard, FolderKanban, Briefcase, 
  FileText, CircleDollarSign, Building2, Bell, Search, 
  User, Activity, AlertTriangle, ArrowUpRight
} from 'lucide-react';
import PixelBlast from '~/components/PixelBlast';

function MockupLaptop() {
  const [revenue, setRevenue] = useState(840.1);

  // Micro-animation for telemetry
  useEffect(() => {
    const interval = setInterval(() => {
      setRevenue(prev => prev + (Math.random() * 0.5));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      className="w-full max-w-[1920px] mx-auto mt-20 md:mt-32 relative perspective-[4000px] z-20 px-2 lg:px-12 2xl:px-24 mb-32"
      initial={{ opacity: 0, scale: 0.95, y: 100 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1.5, delay: 0.5, type: "spring", stiffness: 40 }}
    >
      {/* Grounded Surface Reality */}
      <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[120%] lg:w-[150%] h-[200px] md:h-[400px] translate-y-1/2 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.02)_0%,transparent_70%)] z-0 pointer-events-none rounded-[100%]"></div>
      
      {/* Laptop Cast Shadow */}
      <div className="absolute -bottom-6 md:-bottom-12 left-1/2 -translate-x-1/2 w-[80%] md:w-[70%] h-12 md:h-24 bg-black blur-[30px] md:blur-[50px] z-0 rounded-[100%] opacity-80"></div>
      
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-primary/10 blur-[150px] rounded-[100%] z-0 pointer-events-none"></div>

      {/* Screen / Lid */}
      <div 
        className="relative mx-auto w-full bg-[#050505] rounded-t-2xl md:rounded-t-[2rem] lg:rounded-t-[3rem] border-t-4 md:border-t-8 lg:border-t-12 border-x-4 md:border-x-8 lg:border-x-12 border-[#1a1a1a] shadow-[0_-10px_60px_rgba(0,0,0,0.8)] overflow-hidden aspect-4/5 md:aspect-16/10 2xl:aspect-21/10 flex flex-col pt-2 md:pt-4 lg:pt-5 px-2 md:px-4 lg:px-5 z-10"
        style={{ transform: "rotateX(2deg)", transformOrigin: "bottom" }}
      >
        {/* Webcam */}
        <div className="absolute top-1 lg:top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 md:w-2 md:h-2 lg:w-2.5 lg:h-2.5 rounded-full bg-[#111] shadow-[inset_0_1px_2px_rgba(0,0,0,0.8)] flex items-center justify-center">
          <div className="w-0.5 h-0.5 md:w-1 md:h-1 rounded-full bg-blue-500/30"></div>
        </div>
        
        {/* Inner Screen Panel */}
        <div className="flex-1 bg-surface relative rounded-t border border-outline-variant/30 text-left overflow-hidden flex flex-col shadow-inner">
          
          {/* Subtle Screen Reflection */}
          <div className="absolute inset-x-0 top-0 h-[40%] bg-linear-to-b from-white/3 to-transparent pointer-events-none z-50"></div>
          
          {/* Edge Highlights */}
          <div className="absolute inset-y-0 left-0 w-8 bg-linear-to-r from-white/1 to-transparent pointer-events-none z-50"></div>
          <div className="absolute inset-y-0 right-0 w-8 bg-linear-to-l from-white/1 to-transparent pointer-events-none z-50"></div>

          {/* Top Bar */}
          <div className="h-12 md:h-16 lg:h-20 border-b border-outline-variant/20 flex items-center justify-between px-3 md:px-6 lg:px-8 bg-surface-container-lowest shrink-0 z-20">
            <div className="flex items-center gap-3 md:gap-5">
              <div className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-md bg-primary/20 flex items-center justify-center text-primary font-display font-medium text-[10px] md:text-sm lg:text-base border border-primary/30">Z</div>
              <div className="hidden md:flex items-center gap-2 border-r border-outline-variant/30 pr-4 lg:pr-6">
                <span className="text-xs lg:text-sm font-label uppercase tracking-widest text-on-surface-variant">Acme Corp</span>
              </div>
              <div className="flex items-center gap-2 bg-surface hover:bg-surface-container transition-colors cursor-pointer px-3 py-1.5 rounded border border-outline-variant/30">
                <Briefcase size={14} className="text-primary hidden sm:block" />
                <span className="text-[10px] md:text-xs text-white">Global Portfolio</span>
                <span className="text-on-surface-variant text-[8px] ml-2">▼</span>
              </div>
            </div>

            <div className="flex items-center gap-4 lg:gap-6">
              <div className="hidden md:flex items-center gap-4 text-on-surface-variant">
                <Search size={16} className="hover:text-primary cursor-pointer transition-colors" />
                <Bell size={16} className="hover:text-primary cursor-pointer transition-colors relative" />
              </div>
              <div className="flex items-center gap-2 md:gap-3 lg:gap-4 pl-4 border-l border-outline-variant/30">
                <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-surface-container rounded-full border border-outline-variant/30">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                  <span className="text-[10px] lg:text-xs text-emerald-500/80 uppercase tracking-wider font-label">System Live</span>
                </div>
                <div className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full bg-surface-container-highest border border-outline-variant flex items-center justify-center overflow-hidden">
                  <User size={14} className="text-on-surface-variant" />
                </div>
              </div>
            </div>
          </div>

          {/* Main Workspace Area */}
          <div className="flex flex-1 overflow-hidden z-20">
            {/* Left Sidebar */}
            <div className="hidden md:flex w-[160px] lg:w-[220px] 2xl:w-[280px] bg-surface-container-lowest border-r border-outline-variant/20 flex-col py-6 px-3 shrink-0 relative overflow-hidden">
              <span className="text-[10px] lg:text-xs font-label uppercase tracking-widest text-on-surface-variant/50 mb-4 px-3">Telemetry</span>
              <div className="flex flex-col gap-1 lg:gap-2">
                {[
                  { icon: LayoutDashboard, label: "Overview", active: true },
                  { icon: FolderKanban, label: "Projects", active: false },
                  { icon: Briefcase, label: "Portfolio", active: false },
                  { icon: FileText, label: "Reports", active: false },
                  { icon: CircleDollarSign, label: "Finance", active: false },
                  { icon: Building2, label: "Departments", active: false },
                ].map((item, i) => (
                  <div key={i} className={`flex items-center gap-3 px-3 py-2.5 rounded-md cursor-default transition-all ${item.active ? 'bg-primary/10 text-primary' : 'text-on-surface-variant hover:bg-surface-container/50 hover:text-white'}`}>
                    <item.icon size={16} className={item.active ? "text-primary" : "opacity-70"} />
                    <span className="text-[11px] lg:text-sm font-medium">{item.label}</span>
                    {item.active && <div className="ml-auto w-1 h-4 bg-primary rounded-full"></div>}
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-6 border-t border-outline-variant/20">
                <div className="bg-surface-container p-3 rounded-lg border border-outline-variant/20 flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-white">Architetural Lock</span>
                    <ShieldCheck size={12} className="text-secondary-fixed" />
                  </div>
                  <div className="w-full h-1 bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="w-full h-full bg-secondary-fixed/50"></div>
                  </div>
                  <span className="text-[8px] text-on-surface-variant/70">100% Policy Integrity</span>
                </div>
              </div>
            </div>

            {/* Content Core Grid */}
            <div className="flex-1 p-3 md:p-5 lg:p-6 2xl:p-8 bg-surface overflow-hidden">
              <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 md:gap-5 lg:gap-6 h-full min-h-max">
                
                {/* Left/Main Content Column (Col span 8 on desktop) */}
                <div className="xl:col-span-8 2xl:col-span-9 flex flex-col gap-4 md:gap-5 lg:gap-6 h-full">
                  
                  {/* Zone 1: Portfolio Summary (Top Row) */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-5 shrink-0">
                    {[
                      { title: "Active Assets", value: "34", sub: "Global footprint", trend: "+2", icon: Building2 },
                      { title: "Portfolio GDV", value: "$4.20B", sub: "Market valuated", trend: "+3.4%", icon: CircleDollarSign },
                      { title: "Deployed Capital", value: `$${revenue.toFixed(1)}M`, sub: "YTD Execution", trend: "+12%", icon: Activity },
                      { title: "System Status", value: "Nominal", sub: "Across 44 modules", trend: "0 Alerts", icon: ShieldCheck, status: true }
                    ].map((card, i) => (
                      <div key={i} className="bg-surface-container-low border border-outline-variant/30 rounded-lg lg:rounded-xl p-3 md:p-4 lg:p-5 flex flex-col relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                          <card.icon size={48} />
                        </div>
                        <div className="flex items-center justify-between mb-2 z-10">
                          <span className="text-[8px] lg:text-[10px] text-on-surface-variant uppercase tracking-wider font-label">{card.title}</span>
                          <span className="text-[9px] lg:text-xs text-primary/80 font-medium hidden sm:block">{card.trend}</span>
                        </div>
                        <div className="flex items-center gap-2 mb-1 z-10">
                          {card.status && <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>}
                          <span className="text-lg lg:text-2xl 2xl:text-4xl font-display text-white">{card.value}</span>
                        </div>
                        <span className="text-[8px] lg:text-[11px] text-on-surface-variant/60 z-10 mt-auto pt-2">{card.sub}</span>
                        <div className="absolute inset-x-0 bottom-0 h-0.5 md:h-1 bg-primary/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                      </div>
                    ))}
                  </div>

                  {/* Zone 2: Project Matrix (Center Dominate Area) */}
                  <div className="flex-1 bg-surface-container-lowest border border-outline-variant/30 rounded-lg lg:rounded-xl p-3 md:p-5 lg:p-6 flex flex-col min-h-[250px]">
                    <div className="flex items-center justify-between mb-4 border-b border-outline-variant/20 pb-3">
                      <h4 className="text-xs lg:text-sm font-label text-white uppercase tracking-widest">Active Execution Matrix</h4>
                      <div className="flex items-center gap-2 text-[9px] lg:text-xs">
                        <span className="text-on-surface-variant">Update:</span>
                        <span className="text-primary animate-pulse">Real-time</span>
                      </div>
                    </div>
                    
                    <div className="text-[9px] lg:text-xs font-label text-on-surface-variant uppercase tracking-wider flex px-2 opacity-60 mb-3">
                      <div className="w-1/3 md:w-2/5">Asset Node</div>
                      <div className="w-1/4 hidden md:block">Lifecycle Stage</div>
                      <div className="w-1/5">Variance</div>
                      <div className="w-[20%] lg:w-[15%]">Yield</div>
                    </div>
                    
                    <div className="flex flex-col gap-1.5 lg:gap-2">
                       {[
                        { name: "Marina Tower Complex", id: "PRJ-9042", stage: "Construction", status: "Nominal", progress: 68 },
                        { name: "Downtown Residences V2", id: "PRJ-9011", stage: "Procurement", status: "Review", progress: 32 },
                        { name: "Bayview Villas Elite", id: "PRJ-8845", stage: "Design", status: "Nominal", progress: 15 },
                        { name: "Horizon Commercial Tower", id: "PRJ-9102", stage: "Construction", status: "Delay Limit", progress: 45 },
                        { name: "Aurora Heights Expansion", id: "PRJ-9230", stage: "Planning", status: "Nominal", progress: 5 },
                        { name: "Metro Terminal North", id: "PRJ-9400", stage: "Handover", status: "Nominal", progress: 95 },
                      ].map((proj, i) => (
                        <motion.div 
                          key={proj.id}
                          className="flex items-center px-2 py-2 lg:py-3 text-[10px] lg:text-sm hover:bg-surface-container border border-transparent hover:border-outline-variant/30 rounded-md cursor-pointer transition-colors group relative overflow-hidden"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1 + (i * 0.1) }}
                        >
                          <div className="w-1/3 md:w-2/5 flex flex-col justify-center">
                            <span className="text-white/90 font-medium truncate pr-2 group-hover:text-primary transition-colors">{proj.name}</span>
                            <span className="text-[8px] lg:text-[10px] text-on-surface-variant/50 hidden sm:block">{proj.id}</span>
                          </div>
                          <div className="w-1/4 text-on-surface-variant/70 hidden md:block">{proj.stage}</div>
                          <div className="w-1/5 flex-1 sm:flex-none">
                            <span className={`px-2 py-0.5 lg:py-1 rounded lg:rounded-sm text-[8px] lg:text-[10px] uppercase tracking-wider border ${
                              proj.status === 'Nominal' ? 'bg-primary/5 text-primary/80 border-primary/20' : 
                              proj.status === 'Review' ? 'bg-amber-500/5 text-amber-500/80 border-amber-500/20' : 
                              'bg-red-500/5 text-red-500/80 border-red-500/20'
                            }`}>
                              {proj.status}
                            </span>
                          </div>
                          <div className="w-[20%] lg:w-[15%] flex items-center gap-2 lg:gap-3 pr-1 lg:pr-3">
                            <div className="h-[2px] lg:h-[4px] flex-1 bg-surface-container-highest rounded-full overflow-hidden">
                              <motion.div 
                                className="h-full bg-primary/60 shadow-[0_0_10px_rgba(226,195,132,0.8)]"
                                initial={{ width: 0 }}
                                animate={{ width: `${proj.progress}%` }}
                                transition={{ duration: 2, delay: 1.5 + (i * 0.1) }}
                              />
                            </div>
                            <span className="text-[8px] lg:text-xs text-on-surface-variant w-4 lg:w-6 text-right font-display">{proj.progress}</span>
                          </div>
                          {/* Hover action arrow */}
                          <div className="absolute right-3 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 transform duration-300">
                             <ArrowUpRight size={14} className="text-primary" />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column (Zone 3, 4, 5) */}
                <div className="xl:col-span-4 2xl:col-span-3 flex flex-col gap-4 md:gap-5 lg:gap-6 h-full lg:min-h-0">
                  
                  {/* Zone 3: Charts */}
                  <div className="border border-outline-variant/30 bg-surface-container-lowest rounded-lg lg:rounded-xl p-4 lg:p-5 flex flex-col relative overflow-hidden group shrink-0 min-h-[160px] 2xl:min-h-[220px]">
                    <div className="flex justify-between items-start mb-4 lg:mb-6 z-10">
                      <span className="text-[9px] lg:text-xs font-label text-on-surface-variant uppercase tracking-wider opacity-80">Execution vs Budget</span>
                      <span className="text-[9px] lg:text-xs text-primary font-medium tracking-wide">Q3 VIEW</span>
                    </div>
                    
                    {/* Minimal Hybrid Line/Bar Chart Representation */}
                    <div className="flex-1 w-full flex items-end gap-1 z-10 relative">
                      {/* Simulated line path */}
                      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                        <motion.path 
                          d="M 0,100 C 50,80 100,20 150,60 C 200,90 250,10 350,5" 
                          fill="none" 
                          stroke="rgba(226, 195, 132, 0.4)" 
                          strokeWidth="2"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 2, delay: 1.5 }}
                        />
                      </svg>
                      {[25,35,45,30,55,70,50,80,95,75].map((h, i) => (
                        <motion.div 
                          key={i} 
                          className="flex-1 bg-white/5 rounded-t-[2px] hover:bg-white/10 transition-colors relative"
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ duration: 1, delay: 1.5 + (i * 0.05) }}
                        >
                          <div className="absolute inset-x-0 bottom-0 bg-primary/20" style={{ height: `${h * 0.6}%` }}></div>
                        </motion.div>
                      ))}
                    </div>
                    {/* Decorative grid */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(226, 195, 132, 0.2) 1px, transparent 1px)', backgroundSize: '100% 20%' }}></div>
                  </div>

                  {/* Zone 4: KPI Alignment Panel */}
                  <div className="flex-1 border border-outline-variant/30 bg-surface-container-lowest rounded-lg lg:rounded-xl p-4 lg:p-5 flex flex-col shrink-0 min-h-[160px] 2xl:min-h-0">
                    <span className="text-[9px] lg:text-xs font-label text-on-surface-variant uppercase tracking-wider mb-4 opacity-80 border-b border-outline-variant/20 pb-2">Business Alignment</span>
                    
                    <div className="flex flex-col h-full justify-center gap-3 relative">
                       {/* Connection Line */}
                       <div className="absolute left-2.5 lg:left-3 top-2 bottom-2 w-px bg-outline-variant/30"></div>
                       
                       {[
                         { step: "Global KPI", val: "EBITDA Target" },
                         { step: "Project KPI", val: "Cost Variance < 5%" },
                         { step: "Dept Logic", val: "Auto-Procurement Limit" },
                       ].map((step, i) => (
                         <div key={i} className="flex flex-col pl-7 lg:pl-8 relative">
                           <div className="absolute left-1.5 lg:left-2 top-1.5 w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center">
                              <div className="w-0.5 h-0.5 bg-primary rounded-full"></div>
                           </div>
                           <span className="text-[8px] lg:text-[10px] text-on-surface-variant mb-0.5">{step.step}</span>
                           <span className="text-[10px] lg:text-xs text-white/90 font-medium">{step.val}</span>
                         </div>
                       ))}
                    </div>
                  </div>

                  {/* Zone 5: Risk & Alerts */}
                  <div className="border border-red-900/30 bg-surface-container-lowest rounded-lg lg:rounded-xl p-4 lg:p-5 flex flex-col shrink-0">
                    <div className="flex items-center gap-2 mb-3">
                      <AlertTriangle size={14} className="text-amber-500" />
                      <span className="text-[9px] lg:text-xs font-label text-amber-500/80 uppercase tracking-wider">Critical Alerts (2)</span>
                    </div>
                    <div className="space-y-2">
                       <div className="flex justify-between items-center bg-red-950/20 p-2 rounded border border-red-900/30">
                         <span className="text-[9px] lg:text-xs text-red-100/70 truncate w-3/4">Material Shortage: D-Block</span>
                         <span className="text-[8px] lg:text-[10px] text-red-400">Delay Risk</span>
                       </div>
                       <div className="flex justify-between items-center bg-amber-950/20 p-2 rounded border border-amber-900/30">
                         <span className="text-[9px] lg:text-xs text-amber-100/70 truncate w-3/4">Budget Limit: Tower B</span>
                         <span className="text-[8px] lg:text-[10px] text-amber-500">Review</span>
                       </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Base / Keyboard Deck */}
      <div className="relative z-20 mx-auto w-[101%] lg:w-[102%] h-4 md:h-6 lg:h-10 bg-[#0c0c0c] rounded-b-xl lg:rounded-b-2xl shadow-[0_40px_80px_rgba(0,0,0,0.9)] border-b border-white/5 flex justify-center before:content-[''] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-white/10 before:z-10 overflow-hidden">
        {/* Trackpad notch */}
        <div className="w-24 md:w-32 lg:w-48 h-1.5 md:h-2 lg:h-3 bg-[#050505] rounded-b shadow-[inset_0_-2px_4px_rgba(255,255,255,0.02)]"></div>
        {/* Realism reflections */}
        <div className="absolute inset-x-8 bottom-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent blur-sm"></div>
        <div className="absolute left-8 bottom-0 w-32 h-full bg-linear-to-r from-white/5 to-transparent skew-x-[-45deg] opacity-20 pointer-events-none"></div>
      </div>
    </motion.div>
  );
}

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section className="relative min-h-screen flex flex-col pt-24 md:pt-40 overflow-hidden bg-background">
      {/* Interactive Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <PixelBlast
          variant="diamond"
          pixelSize={5}
          color="#e2c384"
          patternScale={6}
          patternDensity={1}
          pixelSizeJitter={0}
          enableRipples={true}
          rippleSpeed={0.3}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid={false}
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.5}
          edgeFade={0.25}
          transparent
        />
      </div>

      {/* Hero Core (Top Aligned now because mockup takes bottom space) */}
      <div className="max-w-5xl mx-auto w-full flex flex-col items-center text-center relative z-10 space-y-8 md:space-y-12 px-6">
        
        {/* Ambient Top Glow */}
        <div className="bg-glow-blob w-[600px] h-[300px] top-[-100px] left-1/2 -translate-x-1/2 opacity-20"></div>

        <motion.div 
          className="space-y-6 md:space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-xs font-label text-primary uppercase tracking-widest">Architectural Monolith v2.0</span>
            </div>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-[3.5rem] md:text-display-lg lg:text-[6.5rem] text-white leading-[1.05] tracking-tighter text-glow-primary">
            Command your portfolio with <br className="hidden md:block" />
            absolute <span className="bg-linear-to-br from-[#f6e1b5] via-primary to-primary-container bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(226,195,132,0.5)]">certainty</span>.
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-secondary-fixed-dim font-light tracking-tight max-w-3xl mx-auto leading-relaxed">
            Stop reacting to legacy spreadsheets. Establish a unitary source of truth and gain radical visibility across every stage of your real estate pipeline.
          </motion.p>
          
          <motion.div variants={itemVariants} className="pt-8 md:pt-12 flex flex-col md:flex-row justify-center items-center gap-6">
            <Link href="/how-it-works">
              <button className="btn-base btn-primary text-base md:text-lg uppercase tracking-widest px-10 py-5 w-full md:w-auto shadow-[0_0_40px_rgba(226,195,132,0.4)] group">
                See How ZERO Works
              </button>
            </Link>
            <Link href="/contact">
              <button className="btn-base btn-secondary text-base md:text-lg uppercase tracking-widest px-10 py-5 w-full md:w-auto">
                Book Executive Briefing
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Immersive Mockup injected here taking up the remainder of the view */}
      <MockupLaptop />
      
    </section>
  );
}
