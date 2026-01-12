export interface Project {
  name: string;
  modified: string;
  description: string[];  // Changed to array
  tags: string[];
  color: string;
  link: string;
}

export const projects: Project[] = [
  {
    name: "InsuraTrack: CRM Platform",
    modified: "Sept '25",
    description: [
      "Designed and configured CRM workflows to model insurance and EMI tracking scenarios using real-world datasets.",
      "Built custom objects, reports, and dashboards to demonstrate end-to-end CRM lifecycle management.",
      "Implemented workflow rules and data relationships to showcase scalable CRM design principles",
      "Configured organization-wide email templates to standardize customer and internal communications triggered by CRM workflows."
    ],
    tags: [ "custom entities", "relationships", "workflows" ,"reports & dashboards"],
    color: "bg-warning",
    link: "https://drive.google.com/file/d/1PqQhl2Y4Xy8DnaFHRP0SwTg6tQSkKW2R/view?usp=sharing",
  },
  {
    name: "SynthData.ai: Data Synthesis Engine",
    modified: "January '26",
    description: [
      "Built a Python-based synthetic data engine that learns patterns from real tabular data to generate privacy-safe synthetic datasets.",
      "Implemented automatic data profiling and type inference for numerical and categorical features from CSV/DataFrame inputs.",
      "Applied generative models for tabular data to preserve distributions, relationships, and constraints without exposing real records.",
      "Developed modular, production-ready code designed for integration into APIs and data pipelines."
    ],
    tags: ["python", "FastAPI", "CT-GANs", "data synthesis"],
    color: "bg-destructive",
    link: "https://github.com/bhakti-thakur/SynthData",
  },
  {
    name: "Dine-o-saur: Group-Based Restaurant Decision App",
    modified: "June '25",
    description: [
      "Built a mobile-first, no-login web application enabling real-time group decision-making through swipe-based restaurant selection.",
      "Developed interactive UI using Next.js 14, Tailwind CSS, and Framer Motion, delivering smooth animations and responsive user experience.",
      "Implemented real-time room syncing and state management using Firebase Firestore to support multi-user collaboration.",
    ],
    tags: ["Next.js", "tailwind CSS", "real-time data synchronization", "firebase"],
    color: "bg-primary",
    link: "https://github.com/bhakti-thakur/Dine-o-saur",
  },
];

export interface Collaborator {
  name: string;
  role: string;
  initials: string;
  color: string;
}

export const collaborators: Collaborator[] = [
  { name: "Bhakti Thakur", role: "Power Apps Developer", initials: "BT", color: "bg-accent" },
  { name: "Monica Geller", role: "UI/UX Designer", initials: "MG", color: "bg-success" },
  { name: "Joey Tribbiani", role: "Backend Architect", initials: "JT", color: "bg-destructive" },
];