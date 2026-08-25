import React from 'react';
import { SCHOOL_DATA } from '../data/schoolDatabase';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-telangana-navy text-white pt-12 pb-6 border-t-4 border-telangana-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-12 gap-8 pb-8 border-b border-white/10">
        
        {/* About brand */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-telangana-gold flex items-center justify-center text-telangana-navy font-bold text-lg">
              B
            </div>
            <div>
              <h4 className="font-extrabold text-base tracking-wider uppercase">{SCHOOL_DATA.basicInfo.name}</h4>
              <p className="text-[10px] text-gray-300 font-semibold uppercase tracking-wider">{SCHOOL_DATA.basicInfo.teluguName}</p>
            </div>
          </div>
          <p className="text-xs text-gray-300 max-w-sm leading-relaxed">
            Nurturing exceptional young achievers across the Khammam region. Combining world-class smart-classroom technologies with deeply rooted cultural values.
          </p>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-3 space-y-3 text-xs">
          <h4 className="font-bold text-sm text-telangana-gold uppercase tracking-wider">Quick Navigation</h4>
          <ul className="space-y-2">
            <li><a href="#home" className="text-gray-300 hover:text-white transition">Home Page</a></li>
            <li><a href="#academics" className="text-gray-300 hover:text-white transition">Academics Curriculum</a></li>
            <li><a href="#achievers" className="text-gray-300 hover:text-white transition">10/10 Wall of Fame</a></li>
            <li><a href="#admissions" className="text-gray-300 hover:text-white transition">Admission Registration</a></li>
          </ul>
        </div>

        {/* Contact information directly in footer */}
        <div className="md:col-span-4 space-y-3 text-xs">
          <h4 className="font-bold text-sm text-telangana-gold uppercase tracking-wider">Campus Details</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-telangana-gold shrink-0" />
              <span className="text-gray-300 leading-relaxed">{SCHOOL_DATA.basicInfo.address}</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-telangana-gold shrink-0" />
              <span className="text-gray-300">{SCHOOL_DATA.basicInfo.phone}</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-telangana-gold shrink-0" />
              <span className="text-gray-300">{SCHOOL_DATA.basicInfo.email}</span>
            </li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 flex flex-col sm:flex-row justify-between items-center text-[11px] text-gray-400 gap-4">
        <p>© 2025 Balaji High School, Kalluru. All Rights Reserved.</p>
        <div className="px-3 py-1 bg-yellow-500/10 text-yellow-500 rounded border border-yellow-500/20 font-bold uppercase tracking-wider">
          💡 Developed Mock Presentation Proposal
        </div>
      </div>
    </footer>
  );
}
