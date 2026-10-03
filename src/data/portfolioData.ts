import {
  ProjectItem,
  EducationItem,
  CertificationItem,
  AwardItem,
  SkillCategory,
  LanguageSkill,
} from '../types.ts';

export const PERSONAL_INFO = {
  name: 'Atif Hussain',
  role: 'Data Science Student | AI & Machine Learning Enthusiast',
  headline: 'Data Science Student at KIU | AI & Machine Learning Enthusiast',
  university: 'Karakoram International University (KIU), Gilgit, Pakistan',
  degree: 'Bachelor of Data Science',
  semester: '5th Semester',
  email: 'atifhuss773@gmail.com',
  phone: '(+92) 3128909432',
  location: 'Gilgit-Baltistan, Pakistan',
  fullAddress: 'P/o Jalalabad, Tahsil Danyor, District Gilgit, Gilgit-Baltistan, 15100, Pakistan',
  about:
    'Data Science student in my 5th semester, skilled in Python, SQL, and data analysis. Experienced in building predictive models and analyzing datasets through academic projects. Looking to apply my technical skills to a practical data analyst or developer role.',
  intro:
    'I am a Data Science student passionate about Artificial Intelligence, Machine Learning, Deep Learning, data analysis and building practical AI-powered solutions.',
};

export const EDUCATION_LIST: EducationItem[] = [
  {
    id: 'edu-bds',
    degree: 'Bachelor of Data Science',
    institution: 'Karakoram International University (KIU)',
    institutionUrl: 'https://www.kiu.edu.pk/',
    period: '2024 – Present (Current 5th Semester)',
    location: 'Gilgit, Pakistan',
    fields: 'Natural sciences, mathematics and statistics; Data Science',
    current: true,
  },
  {
    id: 'edu-ics',
    degree: 'Computer Science (ICS)',
    institution: 'The Legends Higher Secondary School',
    period: '2023 – 2024',
    location: 'Danyore, Gilgit, Pakistan',
    fields: 'Natural sciences, mathematics and statistics',
    grade: 'Final Grade: 60%',
    current: false,
  },
  {
    id: 'edu-matric',
    degree: 'Matriculation (Secondary School)',
    institution: 'F.G Boys High School Jalalabad',
    period: '2020 – 2022',
    location: 'Gilgit, Pakistan',
    fields: 'Natural sciences, mathematics and statistics: Biology',
    current: false,
  },
];

export const PROJECTS_LIST: ProjectItem[] = [
  {
    id: 'nourishcraft-ai',
    title: 'NourishCraft AI',
    role: 'Creator & ML Developer',
    date: '25/07/2026 – 28/07/2026',
    category: 'AI Platform',
    description:
      'A data-driven nutrition platform utilizing machine learning algorithms to analyze user dietary patterns, predict nutritional deficiencies, and automatically generate optimized meal plans for targeted health outcomes.',
    technologies: ['Machine Learning', 'Python', 'Dietary Pattern Analysis', 'Deficiency Prediction', 'Automated Meal Planning'],
    link: 'https://atifhussain-gaufre-86bf5b.netlify.app/',
    linkText: 'Open Live Platform',
    highlights: [
      'Engineered machine learning logic to evaluate user dietary intakes and predict nutrient gaps',
      'Implemented automated algorithmic meal planning routines matching health targets',
      'Built a responsive, user-friendly client deployed on Netlify for seamless accessibility',
    ],
  },
  {
    id: 'kiu-lms',
    title: 'KIU LMS Prototype',
    role: 'UI/UX Developer & Prototyper',
    date: '15/07/2026 – 19/07/2026',
    category: 'UI/UX Prototype',
    description:
      'Developed a responsive web and mobile UI prototype for the KIU LMS using Google Stitch. Crawled the university portal to extract design tokens including colors and typography for brand consistency. Generated interactive frontend layouts with HTML and exported assets to Figma for UI/UX evaluation.',
    technologies: ['Google Stitch', 'Token Extraction', 'HTML', 'Figma', 'Responsive UI/UX'],
    link: 'https://stitch.withgoogle.com/preview/14511019065225353224?node-id=15dfd7aff47d4dbaa2999eaacbb39602',
    linkText: 'View Stitch Prototype',
    highlights: [
      'Extracted exact design tokens from Karakoram International University portal for university branding',
      'Designed responsive cross-device layouts for both mobile screens and desktop workstations',
      'Exported interactive components to Figma for comprehensive usability testing',
    ],
  },
  {
    id: 'mathematics-solver',
    title: 'Mathematics Solver',
    role: 'AI Prompt Engineer & Builder',
    date: '20/06/2026 – 24/06/2026',
    category: 'AI Assistant',
    description:
      'Built a custom AI assistant using Gemini Gems to solve hard math problems. Wrote clear instructions using chain-of-thought to make the AI explain algebra and calculus step by step. Used LaTeX and Markdown to format formulas neatly and kept the answers accurate.',
    technologies: ['Gemini Gems', 'Chain-of-Thought (CoT)', 'LaTeX Formatting', 'Markdown', 'Algebra & Calculus'],
    link: 'https://gemini.google.com/gem/1j13CDdGA3uOwxiMtAZI7eDklIram-n2q?usp=sharing',
    linkText: 'Try Gemini Gem Assistant',
    highlights: [
      'Formulated chain-of-thought system prompts to decompose complex algebra and calculus theorems',
      'Integrated LaTeX formatting to render complex mathematical formulas cleanly',
      'Published active Gemini Gem accessible for students and peers needing step-by-step guidance',
    ],
  },
  {
    id: 'seeds-of-honesty',
    title: 'Seeds of Honesty',
    role: 'AI Media Creator',
    date: '14/06/2026 – 18/06/2026',
    category: 'Generative Media',
    description:
      'Created an educational video project called Seeds of Honesty using Google NotebookLM. Gathered source materials on ethics to generate an accurate video script and realistic multi-speaker audio. Used AI tools to combine the audio and video into a clean presentation for digital learning.',
    technologies: ['Google NotebookLM', 'Generative Audio', 'Source Synthesis', 'Digital Learning', 'Ethical Education'],
    link: 'https://notebook.google.com/notebook/e9dba7cc-3ae8-44f3-9087-5d9f3397adc3/artifact/b8f5db85-f32b-4d6c-9726-702df0694f68',
    linkText: 'View NotebookLM Project',
    highlights: [
      'Synthesized ethics source literature inside Google NotebookLM for grounded instructional content',
      'Produced realistic multi-speaker AI narration to improve digital comprehension',
      'Structured a cohesive educational presentation combining voice synthesis and visual design',
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: 'Programming',
    description: 'Core languages utilized for data modeling, algorithm implementation, and database queries.',
    skills: [
      { name: 'Python', level: 'Core Language', focus: 'Data science, ML algorithms, Pandas, NumPy, model training' },
      { name: 'SQL', level: 'Querying & Extraction', focus: 'Relational databases, filtering, aggregations, schema joins' },
      { name: 'C++', level: 'Systems & Logic', focus: 'Algorithms, memory concepts, foundational computer science' },
    ],
  },
  {
    name: 'Data Science',
    description: 'End-to-end data pipeline capabilities from collection and processing to visualization.',
    skills: [
      { name: 'Data Analysis', level: 'Practical', focus: 'Exploratory data analysis (EDA), pattern discovery, statistical insights' },
      { name: 'Data Processing', level: 'Practical', focus: 'Cleaning, normalization, missing values, feature engineering' },
      { name: 'Data Collection', level: 'Practical', focus: 'Gathering datasets, token crawling, structured ingestion' },
      { name: 'Data Visualization', level: 'Practical', focus: 'Chart generation, trend presentation, communicative dashboards' },
    ],
  },
  {
    name: 'Artificial Intelligence',
    description: 'Modern AI paradigms, predictive learning architectures, and generative tooling.',
    skills: [
      { name: 'Machine Learning', level: 'Predictive Modeling', focus: 'Supervised and unsupervised learning, model evaluation' },
      { name: 'Deep Learning', level: 'Neural Architectures', focus: 'Neural networks, computer vision, NLP foundations' },
      { name: 'Artificial Intelligence (AI)', level: 'Applied Solutions', focus: 'Chain-of-thought prompting, Gemini Gems, NotebookLM' },
      { name: 'Generative AI & Agentic AI', level: 'National Training', focus: 'Agentic workflows, AI tools & productivity, prompt engineering' },
    ],
  },
  {
    name: 'Tools & Productivity',
    description: 'Industry-standard office suites and prototyping platforms for documentation and analytics.',
    skills: [
      { name: 'Microsoft Excel', level: 'Certified Project', focus: 'Formulas, pivot tables, data analytics, business reporting' },
      { name: 'Microsoft Word', level: 'Proficient', focus: 'Academic reports, project documentation, research formatting' },
      { name: 'Microsoft PowerPoint', level: 'Proficient', focus: 'Technical presentations, project showcases, visual slide decks' },
    ],
  },
];

export const CERTIFICATIONS_LIST: CertificationItem[] = [
  {
    id: 'cert-act-ai',
    title: 'ACT AI National AI Training Programme',
    issuer: 'AI Skillbridge',
    date: '29/07/2026',
    description:
      'Completed an intensive 8-week national AI training programme covering AI Foundations, Generative AI, Agentic AI, AI Tools & Productivity, and Freelancing with AI. Gained practical hands-on knowledge with assessments and final course project.',
    topics: ['AI Foundations', 'Generative AI', 'Agentic AI', 'AI Tools & Productivity', 'Freelancing with AI'],
    mode: 'Project-based / 8-Week Programme',
  },
  {
    id: 'cert-ai-python',
    title: 'Artificial Intelligence Using Python',
    issuer: 'Specialized Training Programme',
    date: '03/04/2026 – 04/07/2026',
    description:
      'Comprehensive practical course covering Python programming, data preprocessing, data analysis and visualization, supervised and unsupervised machine learning, deep learning, computer vision, Natural Language Processing (NLP), Generative AI, and AI model evaluation.',
    topics: [
      'Python Programming',
      'Data Preprocessing',
      'Supervised & Unsupervised Learning',
      'Deep Learning & Computer Vision',
      'NLP & Generative AI',
      'AI Model Evaluation',
    ],
    mode: 'Practical Hands-on Coursework',
  },
  {
    id: 'cert-ibm-analytics',
    title: 'Introduction to Data Analytics',
    issuer: 'IBM / Coursera',
    date: '02/10/2025',
    verifyUrl: 'https://coursera.org/verify/JGSTFS98L2OU',
    description: 'Authorized by IBM and offered through Coursera. Fundamentals of data analytics, data lifecycles, and analytical methodologies.',
    mode: 'Online Verified Credential',
  },
  {
    id: 'cert-ibm-datascience',
    title: 'What is Data Science',
    issuer: 'IBM / Coursera',
    date: '23/12/2025',
    verifyUrl: 'https://coursera.org/verify/04AC26IN4QJF',
    description: 'Authorized by IBM and offered through Coursera. Core definitions, roles, real-world data science applications and pathways.',
    mode: 'Online Verified Credential',
  },
  {
    id: 'cert-ibm-tools',
    title: 'Tools for Data Science',
    issuer: 'IBM / Coursera',
    date: '23/12/2025',
    verifyUrl: 'https://coursera.org/verify/8PAFOQH8H27Y',
    description: 'Authorized by IBM and offered through Coursera. Hands-on exposure to Jupyter Notebooks, RStudio, GitHub, and cloud data platforms.',
    mode: 'Online Verified Credential',
  },
  {
    id: 'cert-excel-analysis',
    title: 'Introduction to Data Analysis using Microsoft Excel',
    issuer: 'Coursera Project Network',
    date: '02/10/2025',
    verifyUrl: 'https://coursera.org/verify/S2GMX3WHCH5A',
    description: 'Authorized by Coursera Project Network. Hands-on project applying spreadsheet calculations, formulas, and visual data analysis.',
    mode: 'Online Project Credential',
  },
  {
    id: 'cert-ibm-python-ds',
    title: 'Python for Data Science, AI & Development',
    issuer: 'IBM / Coursera',
    date: '23/12/2025',
    verifyUrl: 'https://coursera.org/verify/L41HMVPYSSFD',
    description: 'Authorized by IBM and offered through Coursera. Python fundamentals, data structures, logic, libraries, and REST APIs for data science.',
    mode: 'Online Verified Credential',
  },
];

export const AWARDS_LIST: AwardItem[] = [
  {
    id: 'award-honhaar',
    title: 'Honhaar Scholarship',
    awardingBody: 'Karakoram International University Gilgit-Baltistan / Government of Punjab',
    date: '14/07/2026',
    description:
      'Awarded the prestigious Honhaar Scholarship in recognition of academic performance and educational potential. The scholarship provides financial support for higher education and helps facilitate continued academic development at Karakoram International University Gilgit.',
    highlight: 'Merit-Based Academic Scholarship',
  },
  {
    id: 'award-pm-laptop',
    title: "Prime Minister's Youth Laptop Scheme",
    awardingBody: 'Government of Pakistan / Karakoram International University Gilgit-Baltistan',
    date: '07/05/2026',
    description:
      'Selected as a beneficiary of the Prime Minister’s Youth Laptop Scheme in recognition of academic performance at top five in class. Received a laptop to support higher education, digital learning, research, programming, and technical skill development.',
    highlight: 'Top 5 Class Academic Ranking',
  },
];

export const LANGUAGE_SKILLS: LanguageSkill[] = [
  {
    language: 'Urdu',
    proficiency: 'Mother tongue (Native speaker)',
  },
  {
    language: 'English',
    proficiency: 'Proficient & Independent User (CEFR B2 – C2)',
    details: {
      listening: 'C1 (Advanced Comprehension)',
      spokenInteraction: 'C2 (Mastery / Proficient)',
      reading: 'B2 (Independent Vantage)',
      writing: 'B2 (Independent Expression)',
      spokenProduction: 'B2 (Clear, Detailed Articulation)',
    },
  },
];
