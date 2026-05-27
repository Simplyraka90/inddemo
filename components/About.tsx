"use client";

import React from "react";
import { Star, Users, CheckCircle2, Calendar, Trophy } from "lucide-react";

export default function About() {
  const stats = [
    { 
      value: "2000+", 
      label: "Happy Clients", 
      icon: Users, 
      color: "group-hover:text-cyan-400", 
      glow: "group-hover:shadow-cyan-500/10",
      border: "hover:border-cyan-500/30"
    },
    { 
      value: "3500+", 
      label: "Complete Projects", 
      icon: CheckCircle2, 
      color: "group-hover:text-rose-400", 
      glow: "group-hover:shadow-rose-500/10",
      border: "hover:border-rose-500/30"
    },
    { 
      value: "21+", 
      label: "Years Experience", 
      icon: Calendar, 
      color: "group-hover:text-purple-400", 
      glow: "group-hover:shadow-purple-500/10",
      border: "hover:border-purple-500/30"
    },
    { 
      value: "18+", 
      label: "All Time Awards", 
      icon: Trophy, 
      color: "group-hover:text-emerald-400", 
      glow: "group-hover:shadow-emerald-500/10",
      border: "hover:border-emerald-500/30"
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#0D0D0D] border-t border-white/[0.05] relative overflow-hidden">
      
      {/* Background Soft Glow Ambient Element */}
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-rose-600/[0.02] rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* TOP LAYOUT GRID: TEXT & DESCRIPTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-20">
          
          {/* Left Column */}
          <div className="lg:col-span-7">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-rose-500 block mb-4">
              ABOUT OUR CREW
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-6">
              A Web Designing Company in Delhi That Has an Eye on Your{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-amber-400">
                Business Goals
              </span>
            </h2>
            
            {/* Interactive Rating Badge */}
            <div className="inline-flex items-center space-x-3 bg-zinc-900/60 border border-white/[0.06] px-4 py-2 rounded-xl backdrop-blur-sm shadow-md">
              <span className="text-amber-400 font-black text-xl">4.3</span>
              <div className="flex text-amber-400 gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-zinc-500 text-xs font-medium border-l border-white/10 pl-3">
                (142 Premium Reviews)
              </span>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="lg:col-span-5 text-zinc-400 text-sm sm:text-base space-y-5 leading-relaxed lg:pt-10">
            <p className="border-l-2 border-zinc-800 pl-4">
              We are a Website Designing Company that thrives to offer cost-effective and agile web services. We are based out of Delhi-NCR, backed fully by our professional crew.
            </p>
            <p className="pl-4 text-zinc-500 text-xs sm:text-sm">
              With more than 20+ years of active industry experience, we have strategically planned and executed over 3500+ web architecture projects successfully.
            </p>
          </div>

        </div>

        {/* BOTTOM LAYOUT GRID: UPGRADED STATS CARDS (ALL SCREEN RESPONSIVE) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-8 bg-[#111111]/40 border border-white/[0.04] rounded-2xl transition-all duration-300 group relative flex flex-col justify-between overflow-hidden shadow-xl hover:-translate-y-1.5 ${stat.border} ${stat.glow}`}
            >
              {/* Subtle top light bar hover inside card */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:via-white/20 transition-all duration-500"></div>

              <div>
                {/* Floating Icon Layout */}
                <div className="w-12 h-12 rounded-xl bg-zinc-900/80 border border-white/[0.05] flex items-center justify-center text-zinc-500 mb-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-zinc-900 ${stat.color}">
                  <stat.icon className="w-5 h-5 transition-transform duration-300" />
                </div>
                
                {/* Value Heading */}
                <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-2 group-hover:text-white transition-colors">
                  {stat.value}
                </h3>
              </div>

              {/* Label Footing */}
              <p className="text-xs sm:text-sm text-zinc-400 font-medium tracking-wide mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}