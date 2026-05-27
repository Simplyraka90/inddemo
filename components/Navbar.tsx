"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, MessageSquare, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true);

  // Preloader Logic
  useEffect(() => {
    const timer = setTimeout(() => setShowPreloader(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  // Scroll Logic
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* 1. WELCOME PRELOADER (Full Screen Responsive) */}
      {showPreloader && (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505]">
          <div className="relative w-20 h-20 md:w-28 md:h-28 mb-8 animate-bounce">
            <Image src="/indii.png" alt="Logo" fill className="object-contain" priority />
          </div>
          <h1 className="text-xl md:text-3xl font-black text-white tracking-[0.2em] uppercase animate-pulse">
            India<span className="text-red-500">Internets</span>
          </h1>
          <div className="w-1/2 md:w-48 h-[2px] bg-zinc-800 mt-8 rounded-full overflow-hidden">
            <div className="h-full bg-red-600 w-full animate-[pulse_1s_ease-in-out_infinite]"></div>
          </div>
        </div>
      )}

      {/* 2. RESPONSIVE NAVBAR */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-white/10 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo - Scales with screen size */}
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
              <Image src="/indii.png" alt="Logo" fill className="object-contain" priority />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-lg md:text-xl font-black text-white leading-none tracking-tight">
                India<span className="text-red-500">Internets</span>
              </span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 font-semibold">
                Think Web Think Us!
              </span>
            </div>
          </div>

          {/* Desktop Nav - Hidden on Mobile */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {["Services", "Products", "Technology", "Marketing", "Work", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-200">
                {item}
              </a>
            ))}
          </nav>

          {/* Action Buttons - Fully Responsive */}
          <div className="flex items-center gap-2 md:gap-3">
            <a href="https://wa.me/919560433318" className="p-2.5 bg-zinc-900 border border-white/10 rounded-xl text-emerald-400 hover:bg-emerald-500/10">
              <MessageSquare className="w-5 h-5" />
            </a>
            <button className="hidden sm:flex px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-xl transition-all active:scale-95 items-center gap-2">
              FREE QUOTE <ArrowUpRight className="w-4 h-4" />
            </button>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2.5 bg-zinc-900 border border-white/10 rounded-xl text-white">
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown - Full Screen Width */}
        <div className={`lg:hidden absolute top-full left-0 w-full bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-white/10 p-6 transition-all duration-300 ${isMobileMenuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4"}`}>
          <div className="flex flex-col gap-4">
            {["Services", "Products", "Technology", "Marketing", "Work", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium text-zinc-300 hover:text-white py-2 border-b border-white/5">
                {item}
              </a>
            ))}
            <button className="w-full mt-4 py-4 bg-red-600 text-white font-bold rounded-xl active:scale-95 transition-transform">
              FREE QUOTE
            </button>
          </div>
        </div>
      </header>
    </>
  );
}