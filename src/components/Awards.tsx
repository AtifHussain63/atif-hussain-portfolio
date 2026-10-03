import React from 'react';
import { Trophy, Laptop, Calendar, CheckCircle2, Star } from 'lucide-react';
import { AWARDS_LIST } from '../data/portfolioData.ts';

export const Awards: React.FC = () => {
  const getIcon = (id: string) => {
    if (id === 'award-honhaar') {
      return <Trophy className="w-6 h-6 text-amber-400" />;
    }
    return <Laptop className="w-6 h-6 text-cyan-400" />;
  };

  return (
    <section id="awards" className="py-24 border-t border-slate-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-mono text-cyan-400 tracking-wider uppercase mb-2">
            06. Recognition
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4 font-display">
            Honours & Awards
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            National and institutional academic distinctions earned through top-tier scholastic performance at Karakoram International University.
          </p>
        </div>

        {/* Awards Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {AWARDS_LIST.map((award) => (
            <div
              key={award.id}
              className="relative glass-panel glass-panel-hover rounded-2xl p-7 border-slate-800/80 hover:border-amber-500/30 transition-all duration-300 overflow-hidden"
            >
              {/* Subtle metallic accent glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-12 -right-12 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl"
              />

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-slate-800/90 border border-slate-700/80 shrink-0">
                  {getIcon(award.id)}
                </div>

                <div className="space-y-3 flex-1">
                  <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                    <span className="text-amber-300 font-semibold flex items-center gap-1">
                      <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                      {award.highlight}
                    </span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-slate-500" />
                      <span>{award.date}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white font-display">
                    {award.title}
                  </h3>

                  <div className="text-xs font-medium text-slate-300">
                    Awarding Body: <span className="text-cyan-300">{award.awardingBody}</span>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed pt-2 border-t border-slate-800/60">
                    {award.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
