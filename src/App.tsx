import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SSCWallOfFame from './components/SSCWallOfFame';
import Academics from './components/Academics';
import AdmissionPortal from './components/AdmissionPortal';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col text-gray-800 antialiased selection:bg-telangana-gold selection:text-telangana-navy">
      {/* Dynamic Header */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-grow">
        <Hero />
        <SSCWallOfFame />
        <Academics />
        <AdmissionPortal />
      </main>

      {/* Structured Footer */}
      <Footer />
    </div>
  );
}
