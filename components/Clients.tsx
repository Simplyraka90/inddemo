"use client";

import React from "react";
import { ShieldCheck } from "lucide-react";

export default function Clients() {
  // ब्रांड्स और उनके लिए कस्टमाइज्ड SVG Icons का डेटा
  const brands = [
    { name: "IndianOil", svg: <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg> },
    { name: "Mitsubishi", svg: <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current"><path d="M12 2l-7 12h14L12 2zM5 16l7 6 7-6H5z"/></svg> },
    { name: "Bisleri", svg: <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current"><circle cx="12" cy="12" r="10"/></svg> },
    { name: "DLF", svg: <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current"><rect x="3" y="3" width="18" height="18" rx="2"/></svg> },
    { name: "UNDP", svg: <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current"><path d="M12 2L2 12l10 10 10-10L12 2z"/></svg> },
    { name: "UN Women", svg: <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg> },
    { name: "Medanta", svg: <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current"><path d="M12 2l-5.5 9h11L12 2zm0 20l5.5-9h-11L12 22z"/></svg> },
    { name: "JK Paper", svg: <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current"><path d="M2 3h20v18H2V3zm2 2v14h16V5H4z"/></svg> },
    { name: "Rahul Mishra", svg: <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current"><path d="M12 2l3 3h-6l3-3zm0 19l-3-3h6l-3 3z"/></svg> },
  ];

  const duplicatedBrands = [...brands, ...brands, ...brands];

  return (
    <section className="py-20 bg-[#0A0A0A] border-y border-white/[0.04] relative overflow-hidden">
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>

      <div className="w-full text-center">
        <div className="inline-flex items-center space-x-2 bg-zinc-900/60 border border-white/[0.05] px-3 py-1.5 rounded-full mb-10 backdrop-blur-sm">
          <ShieldCheck className="w-3.5 h-3.5 text-rose-500" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
            TRUSTED BY GLOBAL ENTERPRISES
          </span>
        </div>

        <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-[#0A0A0A] after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-gradient-to-l after:from-[#0A0A0A]">
          <div className="flex w-max gap-16 items-center animate-[marquee_40s_linear_infinite] hover:[animation-play-state:paused] cursor-pointer py-4">
            {duplicatedBrands.map((brand, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center min-w-[120px] text-zinc-600 hover:text-zinc-300 transition-all duration-500 group"
              >
                {/* SVG Icon Area */}
                <div className="mb-2 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  {brand.svg}
                </div>
                {/* Name Label */}
                <span className="text-[10px] font-bold tracking-[0.1em] uppercase group-hover:text-rose-500 transition-colors">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
    </section>
  );
}