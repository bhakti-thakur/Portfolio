export type SkillLevel =  "INTERMEDIATE" | "ADVANCED" | "EXPERT"

export interface Skill {
  name: string
  level: SkillLevel
  description: string
  icon: string // key / filename
  category: "Power Platform" | "Frontend" | "Backend" | "DevOps"
}



export const skills: Skill[] =  [
    // Power Platform Tools
    { 
      name: "Power Apps", 
      level: "EXPERT", 
      description: "Canvas & Model-driven apps, PCF components, custom connectors", 
      icon: "powerapps",
      category: "Power Platform"
    },
    { 
      name: "Power Automate", 
      level: "ADVANCED", 
      description: "Cloud flows, desktop flows, RPA automation, connectors", 
      icon: "powerautomate",
      category: "Power Platform"
    },
    { 
      name: "Power BI", 
      level: "INTERMEDIATE", 
      description: "Data modeling, DAX formulas, interactive dashboards", 
      icon: "powerbi",
      category: "Power Platform"
    },
    
    // Frontend
    { 
      name: "React.js", 
      level: "EXPERT", 
      description: "Hooks, Context API, Redux, component architecture", 
      icon: "react",
      category: "Frontend"
    },
    { 
      name: "Next.js", 
      level: "EXPERT", 
      description: "App router, SSR, SSG, API routes, server components", 
      icon: "nextjs",
      category: "Frontend"
    },
    {
      name: "React Native", 
      level: "INTERMEDIATE", 
      description: "Cross-platform mobile apps, native modules, Expo", 
      icon: "reactnative",
      category: "Frontend"
    },
    { 
      name: "Tailwind CSS", 
      level: "EXPERT", 
      description: "Utility-first styling, design systems, responsive layouts", 
      icon: "tailwind",
      category: "Frontend"
    },
    
    // Backend
    { 
      name: "Node.js", 
      level: "EXPERT", 
      description: "Express, NestJS, REST APIs, microservices architecture", 
      icon: "nodejs",
      category: "Backend"
    },
    { 
      name: "Python", 
      level: "ADVANCED", 
      description: "Django, Flask, data processing, automation scripts", 
      icon: "python",
      category: "Backend"
    },
    { 
      name: "Java", 
      level: "INTERMEDIATE", 
      description: "Spring Boot, REST APIs, enterprise applications", 
      icon: "java",
      category: "Backend"
    },
    { 
      name: "MongoDB", 
      level: "ADVANCED", 
      description: "NoSQL database design, aggregation, indexes, schemas", 
      icon: "mongodb",
      category: "Backend"
    },
    { 
      name: "Firebase", 
      level: "INTERMEDIATE", 
      description: "Firestore, Authentication, Cloud Functions, hosting", 
      icon: "firebase",
      category: "Backend"
    },
    { 
      name: "Salesforce", 
      level: "ADVANCED", 
      description: "Apex, Lightning Web Components, SOQL, integrations", 
      icon: "salesforce",
      category: "Backend"
    },
    
    // DevOps & Version Control
    { 
      name: "Git", 
      level: "ADVANCED", 
      description: "Version control, branching strategies, code reviews", 
      icon: "git",
      category: "DevOps"
    },
    { 
      name: "Google Cloud", 
      level: "INTERMEDIATE", 
      description: "Cloud Functions, Firebase, App Engine, Cloud Storage", 
      icon: "googlecloud",
      category: "DevOps"
    },
  ];