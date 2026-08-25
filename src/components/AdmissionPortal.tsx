import React, { useState } from 'react';
import { SCHOOL_DATA } from '../data/schoolDatabase';
import { Sparkles, Calendar, HelpCircle, CheckSquare } from 'lucide-react';

export default function AdmissionPortal() {
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    studentName: '',
    targetClass: 'Class 6 (IIT Foundation)',
    medium: 'English Medium',
    village: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.parentName || !formData.phone || !formData.studentName) {
      alert("Please fill in parent name, phone number and student name!");
      return;
    }
    // Simulate API Call
    setIsSubmitted(true);
  };

  return (
    <section id="admissions" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-12 gap-12 items-center">
        {/* Info Left */}
        <div className="md:col-span-5 space-y-6">
          <div className="inline-flex p-3 bg-telangana-navy text-white rounded-2xl">
            <Sparkles className="w-6 h-6 text-telangana-gold" />
          </div>
          <h2 className="text-3xl font-black text-telangana-navy uppercase tracking-tight">
            Secure Kalluru's Best Digital Learning Experience
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            Interested in booking an examination seat? Submit an expression of interest below. Our primary admissions team from the Kalluru branch will connect with you via mobile within 24 working hours.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-telangana-accent mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-gray-800">Enrollment Active</h4>
                <p className="text-xs text-gray-500">Term starting from early June 2025.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <HelpCircle className="w-5 h-5 text-telangana-accent mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-gray-800">Have Questions?</h4>
                <p className="text-xs text-gray-500">Call our helpline anytime during normal working hours.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Form Right */}
        <div className="md:col-span-7">
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
            {isSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckSquare className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-telangana-navy">Registration Received!</h3>
                <p className="text-sm text-gray-600 max-w-sm mx-auto">
                  Thank you, <strong>{formData.parentName}</strong>. Our Kalluru administrative counselor will reach out to you shortly at <strong>{formData.phone}</strong> regarding <strong>{formData.studentName}'s</strong> application details.
                </p>
                <button 
                  onClick={() => { setIsSubmitted(false); setFormData({ parentName: '', phone: '', studentName: '', targetClass: 'Class 6 (IIT Foundation)', medium: 'English Medium', village: '' }); }}
                  className="mt-4 text-xs font-bold text-telangana-navy hover:underline"
                >
                  Register Another Student
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold text-telangana-navy border-b border-gray-100 pb-3">Online Registration Portal</h3>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-gray-500 uppercase mb-1">Parent's Full Name *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Rao / Laxmi"
                      value={formData.parentName}
                      onChange={(e) => setFormData({...formData, parentName: e.target.value})}
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-telangana-navy bg-gray-50"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-gray-500 uppercase mb-1">Mobile Contact Number *</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="e.g. 98480XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-telangana-navy bg-gray-50"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-gray-500 uppercase mb-1">Student Name *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Sai Teja"
                      value={formData.studentName}
                      onChange={(e) => setFormData({...formData, studentName: e.target.value})}
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-telangana-navy bg-gray-50"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-gray-500 uppercase mb-1">Native Village / Area</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Kalluru Mandir GP"
                      value={formData.village}
                      onChange={(e) => setFormData({...formData, village: e.target.value})}
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-telangana-navy bg-gray-50"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-gray-500 uppercase mb-1">Target Class Selection</label>
                    <select 
                      value={formData.targetClass}
                      onChange={(e) => setFormData({...formData, targetClass: e.target.value})}
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-telangana-navy bg-gray-50"
                    >
                      <option>Class 6 (IIT Foundation)</option>
                      <option>Class 7 (IIT Foundation)</option>
                      <option>Class 8 (IIT Foundation)</option>
                      <option>Class 9 (TS SSC Board)</option>
                      <option>Class 10 (Secondary High School)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-gray-500 uppercase mb-1">Medium of Instruction</label>
                    <select 
                      value={formData.medium}
                      onChange={(e) => setFormData({...formData, medium: e.target.value})}
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-telangana-navy bg-gray-50"
                    >
                      <option>English Medium</option>
                      <option>Telugu Medium</option>
                    </select>
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="w-full mt-4 bg-telangana-navy hover:bg-blue-900 text-white font-bold py-3 px-6 rounded-xl transition duration-200 shadow-md text-sm uppercase tracking-wide"
                >
                  Submit Admission Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
