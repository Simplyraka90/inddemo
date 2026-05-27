"use client";

import React from "react";
import { Code, Layers, Cpu, CheckCircle } from "lucide-react";

export default function Services() {
  const techStack = ["PHP", "Python", "Laravel", "Next.js", "Tailwind CSS", "REST APIs"];

  return (
    <section id="services" className="py-24 bg-[#0A0A0A] relative overflow-hidden border-t border-white/[0.03]">
      
      {/* Background Neon Aura Spotlight */}
      <div className="absolute left-[-10%] top-[30%] w-[450px] h-[450px] bg-gradient-to-br from-rose-600/[0.03] to-transparent rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT PANEL: INTERACTIVE CONTENT HEADER */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-rose-500/10 border border-rose-500/20 px-3 py-1 rounded-md">
              <Cpu className="w-3.5 h-3.5 text-rose-500 animate-spin duration-[4000ms]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-rose-400">
                OUR CORE EXPERTISE
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
              Web Application{" "}<br className="hidden sm:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-orange-400">
                Development
              </span>
            </h2>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              We are a one-stop destination for all your website requirements. As a leading web development agency, we ensure a high-performance, well-structured, and logically organized system architecture.
            </p>

            {/* UPGRADED TECH TAGS WITH GLOW EFFECT */}
            <div className="pt-2">
              <p className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-3 flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-rose-500" /> Powered by Modern Frameworks
              </p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-zinc-900/60 border border-white/[0.05] rounded-xl text-xs font-mono font-medium text-zinc-300 backdrop-blur-sm transition-all duration-300 hover:border-rose-500/30 hover:text-white hover:bg-zinc-900"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT PANEL: RESPONSIVE CARDS MATRIX WITH 3D HOVER ANIMATION */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            
            {/* Card 1: Backend Solutions */}
            <div className="p-6 sm:p-8 bg-[#111111]/40 border border-white/[0.04] rounded-2xl transition-all duration-300 group relative overflow-hidden shadow-xl hover:-translate-y-1.5 hover:border-rose-500/30 hover:shadow-rose-500/[0.02]">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:via-rose-500/30 transition-all duration-500"></div>
              
              <div className="w-12 h-12 rounded-xl bg-zinc-900/80 border border-white/[0.05] flex items-center justify-center text-zinc-400 mb-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-rose-950/20 group-hover:text-rose-400">
                <Code className="w-5 h-5 transition-transform" />
              </div>

              <h3 className="text-lg font-bold text-white mb-2 tracking-tight group-hover:text-rose-400 transition-colors">
                Backend Solutions
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Robust architectures, secure cloud infrastructure, and core database structuring built cleanly for global scaling applications.
              </p>
            </div>

            {/* Card 2: eCommerce Ecosystems */}
            <div className="p-6 sm:p-8 bg-[#111111]/40 border border-white/[0.04] rounded-2xl transition-all duration-300 group relative overflow-hidden shadow-xl hover:-translate-y-1.5 hover:border-orange-500/30 hover:shadow-orange-500/[0.02]">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:via-orange-500/30 transition-all duration-500"></div>
              
              <div className="w-12 h-12 rounded-xl bg-zinc-900/80 border border-white/[0.05] flex items-center justify-center text-zinc-400 mb-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-950/20 group-hover:text-orange-400">
                <Layers className="w-5 h-5 transition-transform" />
              </div>

              <h3 className="text-lg font-bold text-white mb-2 tracking-tight group-hover:text-orange-400 transition-colors">
                eCommerce Ecosystems
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Optimized user journeys, seamless conversion modules, and high-speed checkout panels designed to drive modern sales pipelines.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}