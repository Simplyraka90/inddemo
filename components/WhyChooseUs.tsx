"use client";

import React from "react";
import { ChevronRight, HelpCircle } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    { title: "Audience-Centric Approach", desc: "Tailored deeply to engage and align cleanly with your unique corporate users." },
    { title: "Dedicated Team Of Experts", desc: "Senior engineers and frontend architects specialized in modern technical stacks." },
    { title: "On-Time Delivery", desc: "Structured agile scrum sprints ensuring super-fast, bug-free codebase releases." },
    { title: "Long Term Relationships", desc: "Constant premium lifecycle technical support active post-deployment." },
    { title: "Accurate Analysis & Reporting", desc: "Data-driven insights and analytics dashboards built for real corporate growth." },
  ];

  return (
    <section className="py-24 bg-[#0D0D0D] border-t border-white/[0.05] relative overflow-hidden">
      
      {/* Background Subtle Tech Line Art */}
      <div className="absolute right-[-5%] bottom-[-10%] w-[300px] h-[300px] bg-gradient-to-tl from-rose-500/[0.02] to-transparent rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER AREA */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-zinc-900/80 border border-white/5 px-3 py-1 rounded-md">
            <HelpCircle className="w-3.5 h-3.5 text-rose-500" />
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-rose-400">
              WHY CHOOSE US
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight tracking-tight">
            Why Choose Indiainternets As Best{" "}<br className="hidden sm:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-amber-500">
              Web Design Service Provider?
            </span>
          </h2>
          
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            We strongly believe in following a qualitative over quantitative approach with our projects, which are well-balanced by cost-effective and highly optimized enterprise web development services.
          </p>
        </div>

        {/* UPGRADED 5-CARD MATRIX GRID (PERFECT ALIGNMENT ON ALL SCREENS) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#111111]/50 border border-white/[0.04] rounded-2xl hover:bg-zinc-900/50 hover:border-rose-500/30 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden shadow-xl hover:-translate-y-1.5"
            >
              {/* Top accent line visible on hover */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-rose-500/0 to-transparent group-hover:via-rose-500/40 transition-all duration-500"></div>

              <div>
                {/* Number Badge Counter with Neon Glow */}
                <div className="w-10 h-10 rounded-xl bg-zinc-900/80 border border-white/[0.06] flex items-center justify-center text-zinc-400 font-mono font-bold text-sm mb-6 transition-all duration-300 group-hover:bg-rose-600 group-hover:text-white group-hover:border-rose-500 group-hover:shadow-[0_0_15px_rgba(244,63,94,0.3)]">
                  {String(idx + 1).padStart(2, "0")}
                </div>

                {/* Content */}
                <h4 className="text-base font-bold text-white mb-2 leading-snug tracking-tight group-hover:text-rose-400 transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Interactive Arrow Link */}
              <div className="flex items-center justify-between mt-8 pt-4 border-t border-white/[0.02] group-hover:border-white/[0.06] transition-colors">
                <span className="text-[10px] font-bold tracking-widest text-zinc-600 group-hover:text-zinc-400 transition-colors">
                  NEXT STEP
                </span>
                <ChevronRight className="w-4 h-4 text-zinc-600 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}