import React from 'react';
import { SCHOOL_DATA } from '../data/schoolDatabase';
import { Check, ShieldCheck } from 'lucide-react';

export default function Academics() {
  return (
    <section id="academics" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs text-telangana-accent font-bold uppercase tracking-widest bg-orange-50 px-3 py-1 rounded-full border border-orange-100">
            Academic Excellence
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-telangana-navy tracking-tight mt-3">
            State-of-the-Art Curricular Ecosystem
          </h2>
          <p className="text-gray-500 mt-2 font-medium">
            Bridging fundamental concepts with forward-thinking competitive skills to prepare local Khammam youths for tomorrow's complex challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SCHOOL_DATA.academicPrograms.map((program, idx) => (
            <div key={idx} className="bg-gray-50 hover:bg-white border-2 border-transparent hover:border-telangana-gold rounded-2xl p-8 transition duration-200 hover:shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-blue-100 text-telangana-navy">
                    {program.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-telangana-navy mb-3">{program.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{program.description}</p>
              </div>

              <ul className="space-y-2 border-t border-gray-100 pt-4 text-xs font-semibold text-gray-700">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" /> Professional Subject-Matter Teachers
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" /> Conceptual Weekly Performance Assessments
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
