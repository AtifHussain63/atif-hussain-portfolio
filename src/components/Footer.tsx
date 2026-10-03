import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';
import { ArrowUp, Lock, ShieldCheck } from 'lucide-react';
import { useAvatar } from '../context/AvatarContext.tsx';

export const Footer: React.FC = () => {
  const { isAdmin, setAdminModalOpen } = useAvatar();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#070B14] py-12 relative no-print">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Identity & Tags */}
          <div className="text-center sm:text-left space-y-1">
            <span className="text-base font-bold text-white font-display">
              {PERSONAL_INFO.name}
            </span>
            <p className="text-xs font-mono text-cyan-400">
              Data Science | AI | Machine Learning
            </p>
            <p className="text-xs text-slate-500">
              Karakoram International University (KIU) · Gilgit-Baltistan, Pakistan
            </p>
          </div>

          {/* Copyright, Admin Portal trigger & Scroll to top */}
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-4 text-xs text-slate-400">
            <span>© 2026 Atif Hussain. All rights reserved.</span>

            {/* Discreet Owner Login / Admin Portal Trigger */}
            <button
              type="button"
              onClick={() => setAdminModalOpen(true)}
              title={isAdmin ? 'Owner Mode Active' : 'Owner Admin Login'}
              className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-mono transition-colors ${
                isAdmin
                  ? 'text-cyan-300 bg-cyan-950/60 border border-cyan-800/50'
                  : 'text-slate-500 hover:text-slate-300 bg-slate-900/50 hover:bg-slate-800 border border-slate-800/60'
              }`}
            >
              {isAdmin ? (
                <>
                  <ShieldCheck className="w-3 h-3 text-cyan-400" />
                  <span>Owner Active</span>
                </>
              ) : (
                <>
                  <Lock className="w-3 h-3 text-slate-500" />
                  <span>Admin</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
