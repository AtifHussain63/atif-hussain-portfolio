import React from 'react';
import { X, Printer, Download, Copy, Check, ExternalLink, GraduationCap, Award, FileText, MapPin, Mail, Phone } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION_LIST, PROJECTS_LIST, CERTIFICATIONS_LIST, AWARDS_LIST, SKILL_CATEGORIES, LANGUAGE_SKILLS } from '../data/portfolioData.ts';
import { ProfileAvatar } from './ProfileAvatar.tsx';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyCvText = () => {
    const text = `
CURRICULUM VITAE - ATIF HUSSAIN
Data Science Student | AI & Machine Learning Enthusiast
Email: ${PERSONAL_INFO.email}
Phone: ${PERSONAL_INFO.phone}
Address: ${PERSONAL_INFO.fullAddress}

ABOUT ME
${PERSONAL_INFO.about}

EDUCATION AND TRAINING
- Bachelor of Data Science (21/09/2024 - Current)
  Karakoram International University, Gilgit, Pakistan
- Computer Science (ICS) (01/01/2023 - 01/01/2024)
  The Legends Higher Secondary School, Danyore, Gilgit
- Matric (01/01/2020 - 31/12/2022)
  F.G Boys High School Jalalabad, Gilgit

COURSES & CERTIFICATIONS
- ACT AI National AI Training Programme (AI Skillbridge, 29/07/2026)
- Artificial Intelligence Using Python (03/04/2026 - 04/07/2026)
- Introduction to Data Analytics (IBM / Coursera) - https://coursera.org/verify/JGSTFS98L2OU
- What is Data Science (IBM / Coursera) - https://coursera.org/verify/04AC26IN4QJF
- Tools for Data Science (IBM / Coursera) - https://coursera.org/verify/8PAFOQH8H27Y
- Introduction to Data Analysis using Microsoft Excel (Coursera Project Network) - https://coursera.org/verify/S2GMX3WHCH5A
- Python for Data Science, AI & Development (IBM / Coursera) - https://coursera.org/verify/L41HMVPYSSFD

PROJECTS
- NourishCraft AI: https://atifhussain-gaufre-86bf5b.netlify.app/
- KIU LMS Prototype: https://stitch.withgoogle.com/preview/14511019065225353224?node-id=15dfd7aff47d4dbaa2999eaacbb39602
- Mathematics Solver: https://gemini.google.com/gem/1j13CDdGA3uOwxiMtAZI7eDklIram-n2q?usp=sharing
- Seeds of Honesty: https://notebook.google.com/notebook/e9dba7cc-3ae8-44f3-9087-5d9f3397adc3/artifact/b8f5db85-f32b-4d6c-9726-702df0694f68

HONOURS AND AWARDS
- Honhaar Scholarship (Karakoram International University / Government of Punjab, 2026)
- Prime Minister's Youth Laptop Scheme (Government of Pakistan, 2026)

SKILLS
Programming: Python, SQL, C++
Data Science: Data Collection, Data Processing, Data Analysis, Data Visualisation
Artificial Intelligence: Machine Learning, Deep Learning, Generative AI
Tools: Microsoft Excel, Microsoft Word, Microsoft PowerPoint

LANGUAGES
Urdu: Mother Tongue
English: Proficient User (Listening C1, Reading B2, Writing B2, Spoken Production B2, Spoken Interaction C2)
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Action Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/70">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-cyan-400" />
            <span className="text-sm font-bold text-white font-display">
              Curriculum Vitae — Atif Hussain
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopyCvText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#090D16] bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors ml-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Formatted CV Document Body */}
        <div className="p-6 sm:p-10 max-h-[80vh] overflow-y-auto space-y-8 bg-slate-900 text-slate-200 text-sm">
          {/* Header Profile */}
          <div className="border-b border-slate-800 pb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <ProfileAvatar size="cv" />
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-white font-display">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-cyan-400 font-medium text-sm mt-0.5">
                  {PERSONAL_INFO.role}
                </p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400 mt-2 font-mono">
                  <span className="flex items-center gap-1">
                    <Mail className="w-3 h-3 text-cyan-400" />
                    {PERSONAL_INFO.email}
                  </span>
                  <span className="flex items-center gap-1">
                    <Phone className="w-3 h-3 text-cyan-400" />
                    {PERSONAL_INFO.phone}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-cyan-400" />
                    Gilgit, Pakistan
                  </span>
                </div>
              </div>
            </div>

            <div className="text-right hidden sm:block font-mono text-xs text-slate-400">
              <div>Nationality: Pakistani</div>
              <div>University: KIU Gilgit</div>
              <div className="text-cyan-400">Class of 2028</div>
            </div>
          </div>

          {/* About Me */}
          <div>
            <h2 className="text-xs font-mono font-bold tracking-wider text-cyan-400 uppercase mb-2">
              About Me
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm">
              {PERSONAL_INFO.about}
            </p>
          </div>

          {/* Education & Training */}
          <div>
            <h2 className="text-xs font-mono font-bold tracking-wider text-cyan-400 uppercase mb-3">
              Education and Training
            </h2>
            <div className="space-y-4">
              {EDUCATION_LIST.map((edu) => (
                <div key={edu.id} className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono text-cyan-300 mb-1">
                    <span className="font-semibold">{edu.degree}</span>
                    <span className="text-slate-400">{edu.period}</span>
                  </div>
                  <div className="text-sm font-medium text-white">{edu.institution}</div>
                  <div className="text-xs text-slate-400 mt-1">
                    {edu.fields} {edu.grade ? `· ${edu.grade}` : ''}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-mono font-bold tracking-wider text-cyan-400 uppercase mb-3">
              Projects
            </h2>
            <div className="space-y-3">
              {PROJECTS_LIST.map((p) => (
                <div key={p.id} className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-bold text-white text-sm font-display">{p.title}</span>
                    <span className="font-mono text-slate-400 text-xs">{p.date}</span>
                  </div>
                  <p className="text-xs text-slate-300 mb-2 leading-relaxed">{p.description}</p>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-cyan-400 hover:underline font-mono"
                  >
                    <span>{p.link}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Courses */}
          <div>
            <h2 className="text-xs font-mono font-bold tracking-wider text-cyan-400 uppercase mb-3">
              Courses & Certifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {CERTIFICATIONS_LIST.map((c) => (
                <div key={c.id} className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                  <div className="font-semibold text-white mb-0.5">{c.title}</div>
                  <div className="text-slate-400 font-mono text-[11px] mb-1">
                    {c.issuer} · {c.date}
                  </div>
                  {c.verifyUrl && (
                    <a
                      href={c.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:underline flex items-center gap-1 font-mono text-[11px]"
                    >
                      <span>Verify Credential</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Honours and Awards */}
          <div>
            <h2 className="text-xs font-mono font-bold tracking-wider text-cyan-400 uppercase mb-3">
              Honours and Awards
            </h2>
            <div className="space-y-3">
              {AWARDS_LIST.map((award) => (
                <div key={award.id} className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 text-xs">
                  <div className="flex items-center justify-between font-semibold text-white mb-1">
                    <span>{award.title}</span>
                    <span className="font-mono text-amber-300">{award.date}</span>
                  </div>
                  <div className="text-cyan-300 font-mono text-[11px] mb-1">{award.awardingBody}</div>
                  <p className="text-slate-300">{award.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono font-bold tracking-wider text-cyan-400 uppercase mb-3">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                <span className="font-semibold text-white block mb-1">Programming:</span>
                <span className="text-slate-300">Python, SQL, C++</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                <span className="font-semibold text-white block mb-1">Data Science:</span>
                <span className="text-slate-300">Data Collection, Data Processing, Data Analysis, Data Visualization</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                <span className="font-semibold text-white block mb-1">Artificial Intelligence:</span>
                <span className="text-slate-300">Machine Learning, Deep Learning, Generative AI, Gemini Gems, NotebookLM</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                <span className="font-semibold text-white block mb-1">Tools & Productivity:</span>
                <span className="text-slate-300">Microsoft Excel, Microsoft Word, Microsoft PowerPoint</span>
              </div>
            </div>
          </div>

          {/* Languages */}
          <div>
            <h2 className="text-xs font-mono font-bold tracking-wider text-cyan-400 uppercase mb-2">
              Language Skills
            </h2>
            <div className="text-xs text-slate-300 space-y-1">
              <div>
                <strong className="text-white">Urdu:</strong> Mother tongue
              </div>
              <div>
                <strong className="text-white">English:</strong> Listening C1, Reading B2, Writing B2, Spoken Production B2, Spoken Interaction C2
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
