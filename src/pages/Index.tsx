import { useState } from "react";
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
    setActiveSection(section === "home" ? "basic-info" : section);
  };

  const renderSection = () => {
    switch (activeSection) {
      case "basic-info":
        return <BasicInfoSection />;
      case "tech-stack":
        return <TechStackSection />;
      case "github-stats":
        return <GitHubStatsSection />;
      case "featured-projects":
        return <FeaturedProjectsSection />;
      case "connect":
        return <ConnectSection />;
      default:
        return <BasicInfoSection />;
    }
  };

  return (
    <div className="h-screen flex flex-col bg-background overflow-hidden">
      <PowerHeader />
      
      <div className="flex flex-1 overflow-hidden">
        <PowerSidebar activeSection={activeSection} onNavigate={handleNavigate} />
        
        <div className="flex-1 flex flex-col overflow-hidden">
          <PowerToolbar 
            title="Bhakti Thakur" 
            subtitle="Power Platform Developer" 
          />
          
          <main className="flex-1 overflow-y-auto p-4">
            {renderSection()}
          </main>
        </div>
      </div>
      
      <PowerFooter />
    </div>
  );
};

export default Index;
