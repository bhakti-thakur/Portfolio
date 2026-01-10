import { skills } from "@/data/skills";
import PowerAppsIcon from "@/assets/powerapps.svg";
import PowerAutomateIcon from "@/assets/powerautomate.svg";
import PowerBiIcon from "@/assets/powerbi.svg";
import ReactIcon from "@/assets/react.svg";
import NextJsIcon from "@/assets/nextjs.svg";
import ReactNativeIcon from "@/assets/reactnative.svg";
import TailwindIcon from "@/assets/tailwind.svg";
import NodeJsIcon from "@/assets/nodejs.svg";
import PythonIcon from "@/assets/python.svg";
import JavaIcon from "@/assets/java.svg";
import MongoDBIcon from "@/assets/mongodb.svg";
import FirebaseIcon from "@/assets/firebase.svg";
import SalesforceIcon from "@/assets/salesforce.svg";
import GitIcon from "@/assets/git.svg";
import GoogleCloudIcon from "@/assets/googlecloud.svg";

const TechStackSection = () => {
  const iconMap: Record<string, string> = {
    "powerapps": PowerAppsIcon,
    "powerautomate": PowerAutomateIcon,
    "powerbi": PowerBiIcon,
    "react": ReactIcon,
    "nextjs": NextJsIcon,
    "reactnative": ReactNativeIcon,
    "tailwind": TailwindIcon,
    "nodejs": NodeJsIcon,
    "python": PythonIcon,
    "java": JavaIcon,
    "mongodb": MongoDBIcon,
    "firebase": FirebaseIcon,
    "salesforce": SalesforceIcon,
    "git": GitIcon,
    "googlecloud": GoogleCloudIcon,
  };

  const getBadgeClass = (level: string) => {
    switch (level) {
      case "EXPERT": return "badge-expert";
      case "ADVANCED": return "badge-advanced";
      case "INTERMEDIATE": return "badge-intermediate";
      default: return "bg-muted";
    }
  };

  return (
    <div id="tech-stack" className="scroll-mt-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Stack Overview */}
        <div className="space-y-4">
          <div className="power-card p-4">
            <h3 className="power-section-title mb-4">STACK OVERVIEW</h3>
            
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Core Specialty</span>
                <span className="font-medium">Power Platform | Dynamics 365</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Experience</span>
                <span className="font-medium">0-1 Years</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Main Technology</span>
                <span className="font-medium">Low-Code / No-code</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Environment</span>
                <span className="font-medium">VS Code / Windows</span>
              </div>
            </div>
          </div>

          <div className="power-card p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="power-section-title">PROFICIENCY SCALE</h3>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="text-muted-foreground">
                <path d="M8 1a7 7 0 100 14A7 7 0 008 1zm0 12.5a5.5 5.5 0 110-11 5.5 5.5 0 010 11zM8 5a.75.75 0 01.75.75v2.5a.75.75 0 01-1.5 0v-2.5A.75.75 0 018 5zm0 7a1 1 0 100-2 1 1 0 000 2z"/>
              </svg>
            </div>
            
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full badge-expert"></div>
                <span>Advanced (Major Experience)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full badge-advanced"></div>
                <span>Intermediate (Major projects)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full badge-intermediate"></div>
                <span>Beginner (Minor Projects)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="lg:col-span-2">
          <div className="power-card p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="power-section-title">SKILLS & TECHNOLOGIES</h3>
              <div className="flex items-center gap-2">
                <button className="p-1 hover:bg-muted rounded text-muted-foreground">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                    <path d="M7 1a.5.5 0 01.5.5v5h5a.5.5 0 010 1h-5v5a.5.5 0 01-1 0v-5h-5a.5.5 0 010-1h5v-5A.5.5 0 017 1z"/>
                  </svg>
                </button>
                <button className="p-1 hover:bg-muted rounded text-muted-foreground">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                    <path d="M1.75 3a.75.75 0 000 1.5h10.5a.75.75 0 000-1.5H1.75zm2 4a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z"/>
                  </svg>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {skills.map((skill, index) => (
                <div key={index} className="border border-border rounded p-3 hover:border-primary/30 transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <div className="w-10 h-10 bg-muted rounded flex items-center justify-center">
                      <img 
                        src={iconMap[skill.icon]} 
                        alt={skill.name}
                        width="34"
                        height="34"
                      />
                    </div>
                    <span className={`text-xs px-2 py-0.5 rounded font-medium ${getBadgeClass(skill.level)}`}>
                      {skill.level}
                    </span>
                  </div>
                  <h4 className="font-medium text-sm mb-1">{skill.name}</h4>
                  <p className="text-xs text-muted-foreground line-clamp-2">{skill.description}</p>
                </div>
              ))}
              
              {/* Add New Skill card */}
              <div className="border border-dashed border-border rounded p-3 flex flex-col items-center justify-center text-muted-foreground hover:border-primary/30 transition-colors cursor-pointer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 8v8M8 12h8"/>
                </svg>
                <span className="text-xs mt-2">Add New Skill</span>
              </div>
            </div>

            <div className="mt-4 text-xs text-muted-foreground">
              1 - {skills.length} of {skills.length}
              <span className="float-right">Page 1</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStackSection;

