"use client";

import React from "react";
import { MapPin, Phone, Mail, ArrowRight, Globe, ChevronRight } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#050505] border-t border-white/[0.05] pt-20 pb-12 relative overflow-hidden">
      
      {/* Decorative Glow Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-rose-500/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Newsletter Section */}
        <div className="bg-gradient-to-br from-zinc-900 to-[#0A0A0A] border border-white/[0.05] rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 mb-20 shadow-2xl">
          <div className="text-center lg:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Subscribe to our newsletter</h3>
            <p className="text-sm text-zinc-400">Stay ahead with the latest modern web development insights.</p>
          </div>
          <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Enter Email ID" 
              className="px-5 py-4 bg-[#050505] border border-white/10 rounded-xl text-white focus:outline-none focus:border-rose-500 transition-colors w-full lg:min-w-[320px]" 
            />
            <button className="px-8 py-4 bg-white text-black font-bold text-sm rounded-xl hover:bg-rose-500 hover:text-white transition-all flex items-center justify-center gap-2 group">
              SUBSCRIBE
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-6 border-l-2 border-rose-500 pl-3">Services</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              {["Website Re-Design", "Web Application", "Mobile App Dev", "E-Commerce", "Frontend Dev"].map(s => (
                <li key={s} className="hover:text-rose-400 transition-colors cursor-pointer hover:translate-x-1 duration-200 flex items-center">
                  <ChevronRight className="w-3 h-3 mr-2 opacity-50" /> {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-6 border-l-2 border-rose-500 pl-3">Explore</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              {["About Us", "Our Team", "Terms & Service", "Blog", "Careers"].map(s => (
                <li key={s} className="hover:text-rose-400 transition-colors cursor-pointer hover:translate-x-1 duration-200 flex items-center">
                  <ChevronRight className="w-3 h-3 mr-2 opacity-50" /> {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-6 border-l-2 border-rose-500 pl-3">Noida HQ</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li className="flex items-start gap-3"><MapPin className="w-5 h-5 text-rose-500 shrink-0" /><span>B-112, Sector 64, Noida, UP 201301</span></li>
              <li className="flex items-center gap-3"><Phone className="w-5 h-5 text-rose-500" /><span>+91 956 043 3318</span></li>
              <li className="flex items-center gap-3"><Mail className="w-5 h-5 text-rose-500" /><span>sales@indiainternets.com</span></li>
            </ul>
          </div>

          {/* Mumbai Branch */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-6 border-l-2 border-rose-500 pl-3">Mumbai Branch</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li className="flex items-center gap-3"><Mail className="w-5 h-5 text-rose-500" /><span>shraddha@indiainternets.com</span></li>
              <li className="flex items-center gap-3 mt-4 text-xs italic opacity-70"><Globe className="w-4 h-4" /><span>Serving across India</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.05] flex flex-col md:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>© 2026 IndiaInternets. All Rights Reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
}