import React, { useState } from 'react';
import { ExternalLink, Calendar, Sparkles, Layers, ArrowUpRight, X, Check } from 'lucide-react';
import { PROJECTS_LIST } from '../data/portfolioData.ts';
import { ProjectItem } from '../types.ts';

export const Projects: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const getCategoryColor = (category: ProjectItem['category']) => {
    switch (category) {
      case 'AI Platform':
        return 'text-cyan-400 border-cyan-500/30';
      case 'UI/UX Prototype':
        return 'text-blue-400 border-blue-500/30';
      case 'AI Assistant':
        return 'text-indigo-400 border-indigo-500/30';
      case 'Generative Media':
        return 'text-purple-400 border-purple-500/30';
      default:
        return 'text-cyan-400 border-cyan-500/30';
    }
  };

  return (
    <section id="projects" className="py-24 border-t border-slate-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-mono text-cyan-400 tracking-wider uppercase mb-2">
            04. Applied Engineering
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4 font-display">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Practical AI-powered solutions, machine learning platforms, and digital prototypes engineered during my Data Science degree.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {PROJECTS_LIST.map((project, idx) => (
            <div
              key={project.id}
              className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 group border-slate-800/80 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/5"
            >
              <div>
                {/* Meta Header (Zero-Pill: Unboxed typography with separators) */}
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3 pb-3 border-b border-slate-800/60 font-mono">
                  <span className={`font-semibold tracking-wide ${getCategoryColor(project.category).split(' ')[0]}`}>
                    {project.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{project.date}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2.5 font-display group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>

                {/* Role */}
                <div className="text-xs text-slate-400 mb-3.5">
                  Role: <span className="text-slate-200 font-medium">{project.role}</span>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Technologies List (Zero-Pill: Clean unboxed list with typographic separators) */}
                <div className="mb-6 pt-3 border-t border-slate-800/60">
                  <span className="text-xs text-slate-400 block mb-2 font-mono">
                    Technologies & Tools:
                  </span>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-cyan-200">
                    {project.technologies.map((tech, tIdx) => (
                      <React.Fragment key={tech}>
                        <span className="text-slate-300">{tech}</span>
                        {tIdx < project.technologies.length - 1 && (
                          <span aria-hidden="true" className="text-slate-600">
                            /
                          </span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-3 border-t border-slate-800/70">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#090D16] bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-all shadow-sm shadow-cyan-400/20 active:scale-95 whitespace-nowrap"
                >
                  <span>{project.linkText}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  type="button"
                  onClick={() => setActiveModalProject(project)}
                  className="px-3.5 py-2.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/60 rounded-lg transition-colors whitespace-nowrap"
                >
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {activeModalProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
          onClick={() => setActiveModalProject(null)}
        >
          <div
            className="relative w-full max-w-xl bg-slate-900 border border-slate-700/80 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setActiveModalProject(null)}
              aria-label="Close modal"
              className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
              <span>{activeModalProject.category}</span>
              <span className="text-slate-600">·</span>
              <span>{activeModalProject.date}</span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2 font-display">
              {activeModalProject.title}
            </h3>

            <p className="text-sm text-slate-300 mb-5 leading-relaxed">
              {activeModalProject.description}
            </p>

            {/* Key highlights */}
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                Implementation Highlights
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                {activeModalProject.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech stack */}
            <div className="mb-6 p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-xs">
              <span className="text-slate-400 block mb-1.5 font-mono">Tools & Stack:</span>
              <div className="flex flex-wrap gap-1.5 text-slate-200">
                {activeModalProject.technologies.map((t, idx) => (
                  <span key={t}>
                    {t}{idx < activeModalProject.technologies.length - 1 ? ' · ' : ''}
                  </span>
                ))}
              </div>
            </div>

            {/* Action link */}
            <div className="flex justify-end gap-3 pt-4 border-t border-slate-800">
              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white"
              >
                Close
              </button>
              <a
                href={activeModalProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#090D16] bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors"
              >
                <span>{activeModalProject.linkText}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
