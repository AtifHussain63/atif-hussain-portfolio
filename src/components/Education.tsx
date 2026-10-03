import React from 'react';
import { GraduationCap, Calendar, MapPin, ExternalLink, BookOpen, Award } from 'lucide-react';
import { EDUCATION_LIST } from '../data/portfolioData.ts';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 border-t border-slate-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-mono text-cyan-400 tracking-wider uppercase mb-2">
            02. Academic Journey
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4 font-display">
            Education
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Formal academic background in data science, computer science, and mathematics leading to degree qualification at Karakoram International University.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l border-slate-800 space-y-10">
          {EDUCATION_LIST.map((edu, idx) => (
            <div key={edu.id} className="relative group">
              {/* Timeline Node Point */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 transition-all ${
                  edu.current
                    ? 'bg-cyan-400 border-cyan-300 ring-4 ring-cyan-400/20'
                    : 'bg-slate-900 border-slate-600 group-hover:border-cyan-400'
                }`}
              />

              {/* Education Card */}
              <div className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-7 transition-all duration-200">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{edu.period}</span>
                      {edu.current && (
                        <>
                          <span className="text-slate-600">·</span>
                          <span className="text-emerald-400 font-semibold uppercase">Currently Enrolled</span>
                        </>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-white font-display">
                      {edu.degree}
                    </h3>
                  </div>

                  {edu.institutionUrl ? (
                    <a
                      href={edu.institutionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-cyan-400 bg-slate-800/80 hover:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700/60 transition-colors w-fit"
                    >
                      <span>{edu.institution}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="text-xs font-medium text-slate-300 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700/60 w-fit">
                      {edu.institution}
                    </span>
                  )}
                </div>

                {/* Details and metadata with typographic separators */}
                <div className="space-y-2 pt-2 border-t border-slate-800/60 text-sm">
                  <div className="flex items-center gap-2 text-slate-400 text-xs">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{edu.location}</span>
                  </div>

                  <div className="flex items-start gap-2 text-slate-300 text-xs sm:text-sm">
                    <BookOpen className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-200 font-medium">Field(s) of Study:</strong> {edu.fields}
                    </span>
                  </div>

                  {edu.grade && (
                    <div className="flex items-center gap-2 text-xs text-amber-300">
                      <Award className="w-3.5 h-3.5 text-amber-400" />
                      <span>{edu.grade}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
