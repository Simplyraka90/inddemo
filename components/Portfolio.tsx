"use client";

import React from "react";
import { ArrowUpRight, Monitor, ChevronLeft, ChevronRight } from "lucide-react";

export default function Portfolio() {
  return (
    <section id="work" className="py-24 bg-[#0A0A0A] relative overflow-hidden border-t border-white/[0.03]">
      
      {/* Background Cyber Glow Spot */}
      <div className="absolute right-[-10%] top-[-20%] w-[500px] h-[500px] bg-gradient-to-bl from-rose-600/[0.03] to-transparent rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Mini Label */}
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-rose-500 block mb-4 animate-pulse">
          OUR LATEST WORK
        </span>
        
        {/* MAIN RESPONSIVE SPLIT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT PANEL: TEXT CONTENT & ACTIONS (PERFECTLY CENTERED ON MOBILE, LEFT-ALIGNED ON DESKTOP) */}
          <div className="lg:col-span-5 order-2 lg:order-1 space-y-6 text-center lg:text-left">
            <h2 className="text-5xl sm:text-7xl font-black text-white tracking-tight leading-none">
              SRMU
            </h2>
            
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
              Our journey began in 1999, with an unwavering commitment to quality education. Today, SRMU stands proud as a premium beacon of cultural, academic, and modern digital intellectual excellence with 11+ dynamic institutes.
            </p>
            
            {/* FULLY RESPONSIVE BUTTONS BLOCK */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <button className="w-full sm:w-auto px-6 py-3.5 bg-white text-black font-bold text-sm rounded-xl hover:bg-zinc-200 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg active:scale-95 group">
                <span>VIEW PROJECT</span>
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
              
              <button className="w-full sm:w-auto px-6 py-3.5 bg-zinc-900/40 border border-white/10 text-zinc-300 font-semibold text-sm rounded-xl hover:bg-zinc-900 hover:text-white hover:border-white/20 transition-all duration-300 flex items-center justify-center active:scale-95">
                VIEW OTHER WORK
              </button>
            </div>
          </div>

          {/* RIGHT PANEL: INTERACTIVE HIGH-FIDELITY WEB SHOWCASE MOCKUP */}
          <div className="lg:col-span-7 order-1 lg:order-2 relative w-full max-w-xl lg:max-w-none mx-auto">
            {/* Holographic Glowing Aura Behind the Device */}
            <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/10 via-amber-500/5 to-transparent rounded-3xl blur-2xl pointer-events-none"></div>
            
            {/* Browser Window Frame Chassis */}
            <div className="relative border border-white/[0.08] bg-[#121212]/80 p-2 sm:p-3 rounded-2xl shadow-2xl backdrop-blur-md transform hover:scale-[1.01] transition-transform duration-500 group">
              
              {/* Top Bar Navigation Mockup */}
              <div className="flex items-center justify-between border-b border-white/[0.05] pb-2 px-1 mb-2">
                {/* Mac Style Window Controls */}
                <div className="flex space-x-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 block"></span>
                </div>
                {/* Fake URL Bar Address */}
                <div className="bg-zinc-950 px-3 py-0.5 rounded-md border border-white/[0.03] text-[9px] font-mono text-zinc-500 tracking-wide uppercase select-none">
                  https://srmu.ac.in
                </div>
                {/* Icon Placeholder */}
                <Monitor className="w-3.5 h-3.5 text-zinc-600" />
              </div>

              {/* Viewport Display Area */}
              <div className="aspect-[16/10] bg-zinc-950 rounded-lg overflow-hidden flex flex-col justify-between p-4 relative border border-white/[0.02]">
                {/* Tech Grid Pattern inside Showcase Screen */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
                
                {/* Center Content Text */}
                <div className="m-auto text-center relative z-10 space-y-1">
                  <div className="text-[10px] tracking-[0.2em] uppercase font-mono font-bold text-rose-500">
                    Live Case Study
                  </div>
                  <div className="text-xs sm:text-sm font-mono text-zinc-400 font-medium">
                    [ Shri Ramswaroop Memorial University ]
                  </div>
                </div>

                {/* Micro Footer Inside Display */}
                <div className="flex justify-between items-center text-[8px] font-mono text-zinc-600 border-t border-white/[0.02] pt-2 relative z-10">
                  <span>ESTD 1999 • ARCHITECTURE</span>
                  <span className="flex items-center gap-1 text-emerald-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span> ONLINE
                  </span>
                </div>
              </div>
            </div>

            {/* Slider Controls Footnotes */}
            <div className="flex space-x-2 mt-4 justify-center lg:justify-end">
              <button className="p-2 bg-zinc-900 border border-white/5 rounded-xl hover:text-white text-zinc-500 hover:bg-zinc-800 transition-all active:scale-95" aria-label="Previous Project">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button className="p-2 bg-zinc-900 border border-white/5 rounded-xl hover:text-white text-zinc-500 hover:bg-zinc-800 transition-all active:scale-95" aria-label="Next Project">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}