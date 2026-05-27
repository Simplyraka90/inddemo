"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-36 pb-20 md:pt-48 md:pb-32 flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
      
      {/* ================= BACKGROUND TECH ELEMENTS (PURE SVG & GLOWS) ================= */}
      {/* 1. Futuristic Vector Grid Lines Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
      
      {/* 2. Abstract Geometric Tech Crosses (Pure SVG Background Shape) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>

      {/* 3. Glowing Ambient Spots (Animated Cyberpunk Aura) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] bg-gradient-to-tr from-rose-600/10 to-orange-500/5 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none animate-pulse duration-[8000ms]"></div>
      <div className="absolute bottom-10 right-10 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-amber-500/[0.03] rounded-full blur-[100px] pointer-events-none"></div>
      
      {/* 4. Bottom Sleek Light Beam Line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      {/* ============================================================================== */}


      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* PREMIUM GLOWING MINI BADGE */}
        <div className="inline-flex items-center space-x-2 bg-zinc-900/80 border border-white/10 px-4 py-2 rounded-full mb-8 shadow-[0_4px_20px_rgba(0,0,0,0.5)] backdrop-blur-sm transform hover:scale-105 transition-transform duration-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
          </span>
          <span className="text-xs font-bold uppercase tracking-[0.15em] text-zinc-300">Think Web Think Us!</span>
        </div>

        {/* ULTRA GRAPHIC HEADLINE */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white mb-6 leading-[1.15] sm:leading-[1.12]">
          Client-focused, customer-centric{" "}<br className="hidden lg:block" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-500 via-rose-400 to-amber-400 drop-shadow-[0_2px_10px_rgba(244,63,94,0.15)]">
            website solutions
          </span>
        </h1>

        {/* REFINED COMPACT DESCRIPTIVE TEXT */}
        <p className="text-sm sm:text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto mb-12 leading-relaxed font-normal">
          Delivering tangible business results that help premium brands navigate, scale, and conquer the ever-changing corporate digital landscape.
        </p>

        {/* FLEXIBLE & FULLY RESPONSIVE ACTIONS PANEL */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xs mx-auto sm:max-w-none">
          
          {/* Main Glowing Call-to-action */}
          <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white font-bold text-sm tracking-wider rounded-xl transition-all duration-300 shadow-xl shadow-rose-600/20 active:scale-95 flex items-center justify-center space-x-2.5 group">
            <span>DISCUSS YOUR PROJECT</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          
          {/* Secondary Glassmorphic button */}
          <button className="w-full sm:w-auto px-8 py-4 bg-zinc-900/40 border border-white/10 hover:border-white/20 hover:bg-zinc-900 text-zinc-200 hover:text-white font-bold text-sm tracking-wider rounded-xl backdrop-blur-sm transition-all duration-300 active:scale-95">
            EXPLORE OUR WORK
          </button>

        </div>

      </div>
    </section>
  );
}