/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { Education } from './components/Education.tsx';
import { Skills } from './components/Skills.tsx';
import { Projects } from './components/Projects.tsx';
import { Certifications } from './components/Certifications.tsx';
import { Awards } from './components/Awards.tsx';
import { Languages } from './components/Languages.tsx';
import { Contact } from './components/Contact.tsx';
import { Footer } from './components/Footer.tsx';
import { CvModal } from './components/CvModal.tsx';
import { ScrollToTop } from './components/ScrollToTop.tsx';
import { AdminAuthModal } from './components/AdminAuthModal.tsx';
import { AvatarProvider, useAvatar } from './context/AvatarContext.tsx';
import { ThemeProvider } from './context/ThemeContext.tsx';
import { ShieldCheck, LogOut } from 'lucide-react';

function PortfolioContent() {
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const { isAdmin, logoutAdmin, ownerEmail } = useAvatar();

  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 flex flex-col selection:bg-cyan-500/25 selection:text-cyan-200">
      {/* Discreet Owner Status Notification (Visible ONLY when owner is authenticated) */}
      {isAdmin && (
        <div className="bg-cyan-950/90 border-b border-cyan-800/80 px-4 py-1.5 text-xs text-cyan-200 flex items-center justify-between z-50 sticky top-0 backdrop-blur-md font-mono">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>Owner Mode Active ({ownerEmail}) — Photo editing controls unlocked</span>
          </div>
          <button
            type="button"
            onClick={logoutAdmin}
            className="flex items-center gap-1 text-[11px] text-cyan-300 hover:text-white underline cursor-pointer"
          >
            <LogOut className="w-3 h-3" />
            <span>Log Out</span>
          </button>
        </div>
      )}

      {/* Top Navbar */}
      <Navbar onOpenCvModal={() => setCvModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenCvModal={() => setCvModalOpen(true)} />

        {/* 2. About Me */}
        <About />

        {/* 3. Education Timeline */}
        <Education />

        {/* 4. Skills & Proficiencies */}
        <Skills />

        {/* 5. Projects */}
        <Projects />

        {/* 6. Certifications & Courses */}
        <Certifications />

        {/* 7. Honours & Awards */}
        <Awards />

        {/* 8. Languages */}
        <Languages />

        {/* 9. Contact */}
        <Contact />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* Floating Scroll To Top */}
      <ScrollToTop />

      {/* CV Download / Print Modal */}
      <CvModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />

      {/* Owner Login / Admin Auth Modal */}
      <AdminAuthModal />
    </div>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Quick loader transition
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 450);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#090D16] text-white">
        <div className="relative flex items-center justify-center">
          <div className="w-16 h-16 rounded-full border-2 border-slate-800 border-t-cyan-400 animate-spin" />
          <div className="absolute font-display font-bold text-sm text-cyan-400">
            AH
          </div>
        </div>
        <p className="mt-4 text-xs font-mono text-slate-400 tracking-widest uppercase">
          Atif Hussain · Data Science Portfolio
        </p>
      </div>
    );
  }

  return (
    <ThemeProvider>
      <AvatarProvider>
        <PortfolioContent />
      </AvatarProvider>
    </ThemeProvider>
  );
}
