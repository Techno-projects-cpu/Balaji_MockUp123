import React, { useState } from 'react';
import { Menu, X, Phone, MapPin, GraduationCap } from 'lucide-react';
import { SCHOOL_DATA } from '../data/schoolDatabase';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-md">
      {/* Top Notification Bar */}
      <div className="bg-telangana-navy text-white text-xs py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-telangana-gold" /> {SCHOOL_DATA.basicInfo.address}</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-telangana-gold" /> {SCHOOL_DATA.basicInfo.phone}</span>
          </div>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo and Name */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-telangana-navy to-telangana-emerald flex items-center justify-center text-white font-bold text-xl border-2 border-telangana-gold shadow">
              B
            </div>
            <div>
              <p className="text-xs text-telangana-accent font-bold tracking-widest uppercase">{SCHOOL_DATA.basicInfo.teluguName}</p>
              <h1 className="text-lg md:text-xl font-extrabold text-telangana-navy uppercase tracking-tight">{SCHOOL_DATA.basicInfo.name}</h1>
              <p className="text-[10px] text-gray-500 font-semibold">{SCHOOL_DATA.basicInfo.affiliation}</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#home" className="text-gray-700 hover:text-telangana-navy font-semibold text-sm transition">Home</a>
            <a href="#about" className="text-gray-700 hover:text-telangana-navy font-semibold text-sm transition">About</a>
            <a href="#academics" className="text-gray-700 hover:text-telangana-navy font-semibold text-sm transition">Academics</a>
            <a href="#achievers" className="text-gray-700 hover:text-telangana-navy font-semibold text-sm transition">SSC Achievers</a>
            <a href="#admissions" className="bg-telangana-gold hover:bg-yellow-600 text-telangana-navy px-4 py-2 rounded-lg font-bold text-sm transition shadow-sm flex items-center gap-1">
              <GraduationCap className="w-4 h-4" /> Admission Enquiry
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-telangana-navy p-2">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 border-t border-gray-100 pt-4">
            <a href="#home" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 font-semibold rounded-md">Home</a>
            <a href="#about" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 font-semibold rounded-md">About</a>
            <a href="#academics" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 font-semibold rounded-md">Academics</a>
            <a href="#achievers" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 font-semibold rounded-md">SSC Achievers</a>
            <a href="#admissions" onClick={() => setIsOpen(false)} className="block bg-telangana-gold text-telangana-navy text-center font-bold py-2 rounded-md">Admission Enquiry</a>
          </div>
        )}
      </nav>
    </header>
  );
}
