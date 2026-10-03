import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData.ts';
import { Code, Database, Brain, Wrench, CheckCircle2 } from 'lucide-react';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categoryIcons: Record<string, React.ReactNode> = {
    Programming: <Code className="w-4 h-4 text-cyan-400" />,
    'Data Science': <Database className="w-4 h-4 text-blue-400" />,
    'Artificial Intelligence': <Brain className="w-4 h-4 text-purple-400" />,
    'Tools & Productivity': <Wrench className="w-4 h-4 text-emerald-400" />,
  };

  const categories = ['All', ...SKILL_CATEGORIES.map((c) => c.name)];

  const displayedCategories =
    selectedCategory === 'All'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.name === selectedCategory);

  return (
    <section id="skills" className="py-24 border-t border-slate-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-mono text-cyan-400 tracking-wider uppercase mb-2">
              03. Technical Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3 font-display">
              Skills & Proficiencies
            </h2>
            <p className="text-slate-400 text-base leading-relaxed">
              Curated technical stack encompassing programming languages, data pipelines, predictive machine learning models, and productivity suites.
            </p>
          </div>

          {/* Interactive Category Filter Tabs (Zero-pill button controls) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-900/90 border border-slate-800 rounded-xl self-start">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-cyan-400 text-[#090D16] font-semibold shadow-sm shadow-cyan-400/20'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedCategories.map((cat) => (
            <div
              key={cat.name}
              className="glass-panel rounded-2xl p-6 sm:p-7 flex flex-col justify-between border-slate-800/80 hover:border-slate-700/80 transition-all"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/60">
                    {categoryIcons[cat.name] || <Code className="w-4 h-4 text-cyan-400" />}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-display">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-slate-400">{cat.description}</p>
                  </div>
                </div>

                {/* Skills List in Category */}
                <div className="mt-5 space-y-4">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/70 hover:border-slate-700/80 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm font-semibold text-white flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          {skill.name}
                        </span>
                        {/* Unboxed metadata separator */}
                        <span className="text-xs font-mono text-cyan-300/80">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 pl-5 leading-relaxed">
                        {skill.focus}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
