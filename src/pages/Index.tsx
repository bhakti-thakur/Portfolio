import { useState, useEffect } from "react";
import PowerHeader from "@/components/PowerHeader";
import PowerSidebar from "@/components/PowerSidebar";
import PowerToolbar from "@/components/PowerToolbar";
import PowerFooter from "@/components/PowerFooter";
import BasicInfoSection from "@/components/sections/BasicInfoSection";
import TechStackSection from "@/components/sections/TechStackSection";
import FeaturedProjectsSection from "@/components/sections/FeaturedProjectsSection";
import GitHubStatsSection from "@/components/sections/GitHubStatsSection";
import ConnectSection from "@/components/sections/ConnectSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState("basic-info");

  const handleNavigate = (section: string) => {
    setActiveSection(section);
    
    if (section === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["basic-info", "tech-stack", "featured-projects", "github-stats", "connect"];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <PowerHeader />
      
      <div className="flex flex-1">
        <PowerSidebar activeSection={activeSection} onNavigate={handleNavigate} />
        
        <div className="flex-1 flex flex-col overflow-hidden">
          <PowerToolbar 
            title="John Doe" 
            subtitle="Software Engineer" 
          />
          
          <main className="flex-1 overflow-y-auto p-4 space-y-6">
            <BasicInfoSection />
            <TechStackSection />
            <FeaturedProjectsSection />
            <GitHubStatsSection />
            <ConnectSection />
          </main>
        </div>
      </div>
      
      <PowerFooter />
    </div>
  );
};

export default Index;
