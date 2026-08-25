import React from 'react';
import { SCHOOL_DATA } from '../data/schoolDatabase';
import { ShieldCheck, Award, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-b from-blue-50 via-white to-gray-50 py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Copy */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded-full border border-yellow-200">
            <Zap className="w-3.5 h-3.5 text-yellow-600 fill-yellow-600" /> IIT-JEE Foundation admissions open
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-telangana-navy leading-tight">
            Empowering Minds in <span className="text-telangana-accent">Kalluru</span> with Academic Distinction
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            {SCHOOL_DATA.basicInfo.tagline}. Operating on core foundations of rigorous coaching, regional integrity, and holistic personal growth. Offering both high-caliber state curriculum and competitive foundation courses.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-2">
            <a href="#admissions" className="bg-telangana-navy hover:bg-blue-900 text-white font-bold px-6 py-3 rounded-xl transition duration-200 shadow-md">
              Secure Your Child's Future
            </a>
            <a href="#academics" className="border-2 border-telangana-navy text-telangana-navy hover:bg-blue-50 font-bold px-6 py-3 rounded-xl transition duration-200">
              Explore Our Programs
            </a>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
            <div>
              <p className="text-2xl font-black text-telangana-navy">25+</p>
              <p className="text-xs text-gray-500 font-semibold uppercase">Years Legacy</p>
            </div>
            <div>
              <p className="text-2xl font-black text-telangana-navy">100%</p>
              <p className="text-xs text-gray-500 font-semibold uppercase">SSC Success</p>
            </div>
            <div>
              <p className="text-2xl font-black text-telangana-navy">1200+</p>
              <p className="text-xs text-gray-500 font-semibold uppercase">Alumni Leaders</p>
            </div>
          </div>
        </div>

        {/* Right Graphic Section */}
        <div className="relative">
          <div className="w-full h-80 md:h-[400px] rounded-3xl bg-gradient-to-br from-telangana-navy to-telangana-emerald flex flex-col justify-center items-center text-white p-8 shadow-2xl relative border-4 border-white">
            {/* Shimmer overlay simulation */}
            <div className="absolute inset-0 bg-white/5 rounded-3xl pointer-events-none animate-pulse"></div>
            
            <GraduationCapIllustration />
            
            <h3 className="text-xl md:text-2xl font-bold text-center mt-6">Kalluru Campus Infrastructure</h3>
            <p className="text-sm text-center text-teal-100 max-w-sm mt-2">
              Equipped with smart learning modules, fully integrated physics-chemistry-biology laboratories, and massive sports courts.
            </p>

            <div className="absolute -bottom-6 -right-6 bg-white text-gray-800 py-3 px-4 rounded-xl shadow-lg border border-gray-100 hidden sm:flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></div>
              <p className="text-xs font-bold text-telangana-navy">Admissions Active: 2025-26</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GraduationCapIllustration() {
  return (
    <svg className="w-24 h-24 text-telangana-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6.5m0-6.5L3 9M12 20.5L21 16M12 14.5l-9-5" />
    </svg>
  );
}
