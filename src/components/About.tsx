import React from 'react';
import { Database, Brain, Code2, LineChart, Mail, MapPin, Phone, GraduationCap } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';
import { ProfileAvatar } from './ProfileAvatar.tsx';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: <Brain className="w-5 h-5 text-cyan-400" />,
      title: 'Artificial Intelligence & ML',
      description:
        'Focused on machine learning, deep learning architectures, predictive modeling, and applied AI systems such as chain-of-thought assistants and generative synthesis.',
    },
    {
      icon: <Database className="w-5 h-5 text-blue-400" />,
      title: 'Data Science & Analysis',
      description:
        'Experienced in hands-on data collection, data processing, exploratory analysis, and visualization using Python and SQL to uncover actionable insights from real datasets.',
    },
    {
      icon: <Code2 className="w-5 h-5 text-indigo-400" />,
      title: 'Programming Foundations',
      description:
        'Proficient in Python for data science libraries, SQL for relational data extraction, and foundational C++ for algorithm design and systems thinking.',
    },
    {
      icon: <LineChart className="w-5 h-5 text-emerald-400" />,
      title: 'Predictive Modeling',
      description:
        'Developing statistical and machine learning models for academic projects, including dietary deficiency prediction and nutrition optimization.',
    },
  ];

  return (
    <section id="about" className="py-24 border-t border-slate-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-mono text-cyan-400 tracking-wider uppercase mb-2">
            01. Background & Profile
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4 font-display">
            About Me
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Data Science student at Karakoram International University committed to bridging theoretical mathematics, machine learning, and practical problem-solving.
          </p>
        </div>

        {/* Top Profile Grid with Real Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-12">
          {/* Real Photo Card in About Section */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="w-full max-w-xs">
              <ProfileAvatar size="about" />
              <div className="mt-3 text-center">
                <span className="text-xs text-slate-400 font-mono">
                  Atif Hussain · BDS KIU Gilgit
                </span>
              </div>
            </div>
          </div>

          {/* Main Statement & Biography strictly from CV */}
          <div className="lg:col-span-8 space-y-6">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-5">
              <h3 className="text-xl font-semibold text-white font-display">
                Professional Profile
              </h3>

              <p className="text-slate-300 text-base leading-relaxed">
                Data Science student in my 5th semester, skilled in <strong className="text-white font-medium">Python</strong>, <strong className="text-white font-medium">SQL</strong>, and <strong className="text-white font-medium">data analysis</strong>. Experienced in building predictive models and analyzing datasets through academic projects. Looking to apply my technical skills to a practical data analyst or developer role.
              </p>

              <p className="text-slate-300 text-base leading-relaxed">
                My academic journey is centered around <strong className="text-cyan-300 font-medium">Artificial Intelligence</strong>, <strong className="text-cyan-300 font-medium">Machine Learning</strong>, and <strong className="text-cyan-300 font-medium">Deep Learning</strong>. I build practical, applied solutions ranging from predictive nutrition platforms to prompt-engineered academic assistants.
              </p>

              {/* Zero-pill factual specs */}
              <div className="pt-4 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-slate-400 text-xs block mb-1 font-mono">University</span>
                  <span className="text-slate-200 font-medium">Karakoram International University (KIU)</span>
                </div>
                <div>
                  <span className="text-slate-400 text-xs block mb-1 font-mono">Degree & Semester</span>
                  <span className="text-slate-200 font-medium">Bachelor of Data Science (5th Semester)</span>
                </div>
                <div>
                  <span className="text-slate-400 text-xs block mb-1 font-mono">Location</span>
                  <span className="text-slate-200 font-medium">{PERSONAL_INFO.location}</span>
                </div>
                <div>
                  <span className="text-slate-400 text-xs block mb-1 font-mono">Direct Contact</span>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-cyan-400 hover:underline font-mono text-xs">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Quick contact / info bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="glass-panel p-4 rounded-xl flex items-center gap-3">
                <Mail className="w-5 h-5 text-cyan-400 shrink-0" />
                <div className="overflow-hidden">
                  <span className="text-xs text-slate-400 block font-mono">Email</span>
                  <span className="text-xs text-slate-200 font-mono truncate block">{PERSONAL_INFO.email}</span>
                </div>
              </div>

              <div className="glass-panel p-4 rounded-xl flex items-center gap-3">
                <Phone className="w-5 h-5 text-cyan-400 shrink-0" />
                <div className="overflow-hidden">
                  <span className="text-xs text-slate-400 block font-mono">Phone</span>
                  <span className="text-xs text-slate-200 font-mono truncate block">{PERSONAL_INFO.phone}</span>
                </div>
              </div>

              <div className="glass-panel p-4 rounded-xl flex items-center gap-3">
                <MapPin className="w-5 h-5 text-cyan-400 shrink-0" />
                <div className="overflow-hidden">
                  <span className="text-xs text-slate-400 block font-mono">Location</span>
                  <span className="text-xs text-slate-200 truncate block">Gilgit, Pakistan</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Technical Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="glass-panel glass-panel-hover rounded-xl p-5 transition-all duration-200"
            >
              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/60 shrink-0">
                  {pillar.icon}
                </div>
                <div>
                  <h4 className="text-base font-semibold text-white mb-1.5 font-display">
                    {pillar.title}
                  </h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {pillar.description}
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
