import React from 'react';
import { Award, ExternalLink, Calendar, CheckCircle2, ShieldCheck } from 'lucide-react';
import { CERTIFICATIONS_LIST } from '../data/portfolioData.ts';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 border-t border-slate-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-mono text-cyan-400 tracking-wider uppercase mb-2">
            05. Credentials & Training
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4 font-display">
            Certifications & Courses
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Formally accredited courses and specialized AI programs from IBM, Coursera, and national AI training initiatives.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS_LIST.map((cert) => (
            <div
              key={cert.id}
              className="glass-panel glass-panel-hover rounded-2xl p-6 flex flex-col justify-between border-slate-800/80 hover:border-slate-700 transition-all duration-200"
            >
              <div>
                {/* Meta header (Zero-pill text styling) */}
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3 pb-2.5 border-b border-slate-800/60 font-mono">
                  <span className="text-cyan-400 font-semibold">{cert.issuer}</span>
                  <div className="flex items-center gap-1 text-slate-500">
                    <Calendar className="w-3 h-3" />
                    <span>{cert.date}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2 font-display leading-snug">
                  {cert.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {cert.description}
                </p>

                {/* Topics if present */}
                {cert.topics && (
                  <div className="mb-4 pt-3 border-t border-slate-800/60">
                    <span className="text-[11px] font-mono text-slate-400 block mb-1.5 uppercase tracking-wider">
                      Syllabus Topics:
                    </span>
                    <ul className="space-y-1 text-xs text-slate-300">
                      {cert.topics.slice(0, 4).map((topic) => (
                        <li key={topic} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3 h-3 text-cyan-400 shrink-0" />
                          <span>{topic}</span>
                        </li>
                      ))}
                      {cert.topics.length > 4 && (
                        <li className="text-[11px] text-slate-500 font-mono pl-4.5">
                          + {cert.topics.length - 4} more modules
                        </li>
                      )}
                    </ul>
                  </div>
                )}
              </div>

              {/* Verification link or status */}
              <div className="pt-4 border-t border-slate-800/60 mt-2">
                {cert.verifyUrl ? (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 w-full px-3.5 py-2 text-xs font-semibold text-cyan-300 hover:text-white bg-cyan-950/40 hover:bg-cyan-900/50 border border-cyan-800/50 rounded-lg transition-colors"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Verify on Coursera</span>
                    <ExternalLink className="w-3 h-3 ml-auto text-slate-400" />
                  </a>
                ) : (
                  <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                    <span className="flex items-center gap-1 text-emerald-400">
                      <Award className="w-3.5 h-3.5" />
                      <span>Completed</span>
                    </span>
                    <span className="text-slate-500">{cert.mode}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
