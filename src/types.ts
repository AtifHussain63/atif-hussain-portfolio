export interface ProjectItem {
  id: string;
  title: string;
  role: string;
  date: string;
  description: string;
  technologies: string[];
  link: string;
  linkText: string;
  highlights: string[];
  category: 'AI Platform' | 'UI/UX Prototype' | 'AI Assistant' | 'Generative Media';
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  institutionUrl?: string;
  period: string;
  location: string;
  fields: string;
  grade?: string;
  current?: boolean;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  verifyUrl?: string;
  description: string;
  topics?: string[];
  mode?: string;
}

export interface AwardItem {
  id: string;
  title: string;
  awardingBody: string;
  date: string;
  description: string;
  highlight: string;
}

export interface SkillCategory {
  name: string;
  description: string;
  skills: {
    name: string;
    level: string;
    focus: string;
  }[];
}

export interface LanguageSkill {
  language: string;
  proficiency: string;
  details?: {
    listening: string;
    reading: string;
    writing: string;
    spokenProduction: string;
    spokenInteraction: string;
  };
}
