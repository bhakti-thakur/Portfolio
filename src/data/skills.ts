export type SkillLevel = "FOUNDATIONAL" | "INTERMEDIATE" | "ADVANCED" 

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
      level: "ADVANCED", 
      description: "Canvas & Model-driven apps, PCF components, custom connectors", 
      icon: "powerapps",
      category: "Power Platform"
    },
    { 
      name: "Power Automate", 
      level: "INTERMEDIATE", 
      description: "Cloud flows, desktop flows, RPA automation, connectors", 
      icon: "powerautomate",
      category: "Power Platform"
    },
    { 
      name: "Power BI", 
      level: "FOUNDATIONAL", 
      description: "Data modeling, DAX formulas, interactive dashboards", 
      icon: "powerbi",
      category: "Power Platform"
    },
    
    // Frontend
    { 
      name: "React.js", 
      level: "ADVANCED", 
      description: "Hooks, Context API, Redux, component architecture", 
      icon: "react",
      category: "Frontend"
    },
    { 
      name: "Next.js", 
      level: "ADVANCED", 
      description: "App router, SSR, SSG, API routes, server components", 
      icon: "nextjs",
      category: "Frontend"
    },
    {
      name: "React Native", 
      level: "FOUNDATIONAL", 
      description: "Cross-platform mobile apps, native modules, Expo", 
      icon: "reactnative",
      category: "Frontend"
    },
    { 
      name: "Tailwind CSS", 
      level: "ADVANCED", 
      description: "Utility-first styling, design systems, responsive layouts", 
      icon: "tailwind",
      category: "Frontend"
    },
    
    // Backend
    { 
      name: "Node.js", 
      level: "ADVANCED", 
      description: "Express, NestJS, REST APIs, microservices architecture", 
      icon: "nodejs",
      category: "Backend"
    },
    { 
      name: "Python", 
      level: "INTERMEDIATE", 
      description: "Django, Flask, data processing, automation scripts", 
      icon: "python",
      category: "Backend"
    },
    { 
      name: "Java", 
      level: "FOUNDATIONAL", 
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
      level: "INTERMEDIATE", 
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
      level: "FOUNDATIONAL", 
      description: "Cloud Functions, Firebase, App Engine, Cloud Storage", 
      icon: "googlecloud",
      category: "DevOps"
    },
  ];