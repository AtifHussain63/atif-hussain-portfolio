import React from 'react';
import { ArrowDown, Mail, Download, Sparkles, MapPin, GraduationCap, ChevronRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';
import { AiBackgroundCanvas } from './AiBackgroundCanvas.tsx';
import { ProfileAvatar } from './ProfileAvatar.tsx';

interface HeroProps {
  onOpenCvModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCvModal }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background Neural Particles Canvas */}
      <AiBackgroundCanvas />

      {/* Subtle radial ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-cyan-500/10 rounded-full blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 right-1/4 w-[400px] h-[300px] bg-blue-600/10 rounded-full blur-[120px]"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Headline and Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Context meta label (Zero-pill text styling) */}
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-4 tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>Karakoram International University</span>
              <span className="text-slate-600">/</span>
              <span>5th Semester BDS</span>
            </div>

            {/* Main Name Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 font-display">
              {PERSONAL_INFO.name}
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl font-medium text-cyan-300/90 mb-5 leading-relaxed">
              {PERSONAL_INFO.role}
            </p>

            {/* Short Introduction */}
            <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-xl leading-relaxed">
              {PERSONAL_INFO.intro}
            </p>

            {/* Core Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-10">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[#090D16] bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-all shadow-md shadow-cyan-500/20 active:scale-95"
              >
                <span>View My Projects</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/70 rounded-lg transition-all active:scale-95"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contact Me</span>
              </a>

              <button
                type="button"
                onClick={onOpenCvModal}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-slate-200 hover:text-white bg-slate-900/60 hover:bg-slate-800/80 border border-slate-700/60 rounded-lg transition-all active:scale-95"
              >
                <Download className="w-4 h-4 text-emerald-400" />
                <span>Download CV</span>
              </button>
            </div>

            {/* Verified quick facts with typographic separators */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-400 pt-4 border-t border-slate-800/70 w-full max-w-lg">
              <span className="flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
                Bachelor of Data Science
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                Gilgit-Baltistan, Pakistan
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-emerald-400 font-medium">Available for Internships</span>
            </div>
          </div>

          {/* Right Column: Visual Card with Real Headshot & Live Metrics */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <ProfileAvatar size="hero" />
          </div>
        </div>
      </div>

      {/* Down indicator */}
      <a
        href="#about"
        aria-label="Scroll to About Me section"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-slate-500 hover:text-cyan-400 transition-colors p-2"
      >
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
};
