import React from 'react';
import { Languages as LanguageIcon, CheckCircle2, Globe } from 'lucide-react';
import { LANGUAGE_SKILLS } from '../data/portfolioData.ts';

export const Languages: React.FC = () => {
  return (
    <section id="languages" className="py-20 border-t border-slate-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-mono text-cyan-400 tracking-wider uppercase mb-2">
            07. Communication & Linguistics
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3 font-display">
            Language Proficiency
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Multilingual communication capacity evaluated according to the Common European Framework of Reference for Languages (CEFR).
          </p>
        </div>

        {/* Language Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {/* Urdu Card */}
          <div className="glass-panel rounded-2xl p-7 border-slate-800/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3 pb-3 border-b border-slate-800/60 font-mono text-xs">
                <span className="text-cyan-400 font-semibold">Native Competence</span>
                <span className="text-slate-500">First Language</span>
              </div>

              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60">
                  <Globe className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white font-display">Urdu</h3>
                  <span className="text-xs text-slate-400 font-medium">Mother Tongue</span>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mt-4">
                Native fluency across spoken interaction, technical literature, and formal professional communication.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800/60 mt-6 flex items-center gap-2 text-xs text-emerald-400 font-medium">
              <CheckCircle2 className="w-4 h-4" />
              <span>Full Professional & Native Proficiency</span>
            </div>
          </div>

          {/* English Card with CEFR breakdown */}
          <div className="glass-panel rounded-2xl p-7 border-slate-800/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3 pb-3 border-b border-slate-800/60 font-mono text-xs">
                <span className="text-cyan-400 font-semibold">CEFR Assessment</span>
                <span className="text-slate-400">Independent to Proficient User</span>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60">
                  <LanguageIcon className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white font-display">English</h3>
                  <span className="text-xs text-slate-400 font-medium">Academic & Technical Medium</span>
                </div>
              </div>

              {/* CEFR Breakdown */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-4 text-xs font-mono">
                <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80 flex items-center justify-between">
                  <span className="text-slate-400">Listening</span>
                  <span className="text-cyan-300 font-semibold">C1 (Advanced)</span>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80 flex items-center justify-between">
                  <span className="text-slate-400">Spoken Interaction</span>
                  <span className="text-cyan-300 font-semibold">C2 (Mastery)</span>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80 flex items-center justify-between">
                  <span className="text-slate-400">Reading</span>
                  <span className="text-slate-200 font-medium">B2 (Vantage)</span>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80 flex items-center justify-between">
                  <span className="text-slate-400">Writing</span>
                  <span className="text-slate-200 font-medium">B2 (Vantage)</span>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80 flex items-center justify-between sm:col-span-2">
                  <span className="text-slate-400">Spoken Production</span>
                  <span className="text-slate-200 font-medium">B2 (Clear, Detailed Articulation)</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800/60 mt-6 text-xs text-slate-400">
              Verified level for academic research, technical documentation, and international collaboration.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
