"use client";

import React from "react";
import { Quote, Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#0A0A0A] relative overflow-hidden border-t border-white/[0.04]">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-rose-600/[0.03] blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Testimonial Card */}
        <div className="bg-[#111111]/60 border border-white/[0.06] backdrop-blur-xl p-8 sm:p-12 rounded-3xl shadow-2xl relative">
          
          {/* Decorative Quote Icon */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#0A0A0A] p-2">
            <Quote className="w-8 h-8 text-rose-500 opacity-80" />
          </div>

          {/* Star Rating for Credibility */}
          <div className="flex justify-center gap-1 mb-8 mt-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
            ))}
          </div>

          {/* Testimonial Text */}
          <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-white italic mb-10 leading-relaxed tracking-wide text-center">
            "Indiainternets has designed my website. Its a great website designing company that is responsive. Highly responsive team that took the feedbacks openly and have delivered the results for my website."
          </h2>

          {/* User Profile Info */}
          <div className="flex flex-col items-center">
            <div className="relative group">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-rose-500 to-amber-500 p-[2px]">
                <div className="w-full h-full rounded-full bg-[#0A0A0A] flex items-center justify-center font-bold text-white text-lg">
                  AC
                </div>
              </div>
              {/* Active Status Indicator */}
              <div className="absolute bottom-0 right-0 w-4 h-4 bg-emerald-500 border-2 border-[#0A0A0A] rounded-full"></div>
            </div>
            
            <div className="mt-4 text-center">
              <h4 className="text-white font-black text-sm tracking-widest uppercase">Ankita Chaturvedi</h4>
              <p className="text-xs text-rose-400 font-medium mt-1">IRIS Management Consultant</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}