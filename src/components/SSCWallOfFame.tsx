import React from 'react';
import { SCHOOL_DATA } from '../data/schoolDatabase';
import { Trophy, CheckCircle, Star } from 'lucide-react';

export default function SSCWallOfFame() {
  return (
    <section id="achievers" className="py-16 bg-gradient-to-r from-teal-900 to-telangana-emerald text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex p-3 bg-white/10 rounded-full mb-3 text-telangana-gold">
            <Trophy className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
            Khammam District Academic Pride
          </h2>
          <p className="text-teal-100 mt-2 font-medium">
            Our historical board exam superstars. Consistently delivering top-tier performance in the Telangana SSC (Class 10) Public Examinations.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SCHOOL_DATA.achievers.map((student, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 flex flex-col justify-between hover:-translate-y-1 transition duration-200">
              <div className="flex justify-between items-start">
                <span className="text-xs bg-telangana-gold text-telangana-navy font-bold px-2 py-1 rounded">
                  {student.year} Batch
                </span>
                <Star className="w-4 h-4 text-telangana-gold fill-telangana-gold" />
              </div>
              
              <div className="my-6">
                <p className="text-xs text-teal-200 font-bold uppercase tracking-wider">Top Scorer</p>
                <h4 className="text-xl font-extrabold tracking-tight mt-1">{student.name}</h4>
                <p className="text-3xl font-black text-telangana-gold mt-2">{student.gpa}</p>
              </div>

              <div className="border-t border-white/10 pt-3 text-xs text-teal-100 flex items-center justify-between">
                <span>Native Village:</span>
                <span className="font-bold text-white">{student.village}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-white/5 py-4 rounded-xl max-w-xl mx-auto border border-white/5">
          <p className="text-xs font-semibold text-teal-200 tracking-wider uppercase">
            🚀 100% TS SSC Academic Success Guaranteed Year-After-Year
          </p>
        </div>
      </div>
    </section>
  );
}
