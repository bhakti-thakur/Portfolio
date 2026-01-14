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
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Index = () => {
  const [activeSection, setActiveSection] = useState("basic-info");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleNavigate = (section: string) => {
    setActiveSection(section === "home" ? "basic-info" : section);
    setIsSidebarOpen(false); // Close drawer on mobile after navigation
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
        {/* Desktop Sidebar - always visible on md and up */}
        <div className="hidden md:block">
          <PowerSidebar activeSection={activeSection} onNavigate={handleNavigate} onMenuClick={() => {}} />
        </div>

        {/* Mobile Sidebar Drawer */}
        <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
          <SheetTrigger asChild className="md:hidden">
            {/* Hidden trigger - activated by menu button in toolbar */}
          </SheetTrigger>
          <SheetContent side="left" className="w-56 p-0">
            <PowerSidebar activeSection={activeSection} onNavigate={handleNavigate} onMenuClick={() => setIsSidebarOpen(false)} />
          </SheetContent>
        </Sheet>
        
        <div className="flex-1 flex flex-col overflow-hidden">
          <PowerToolbar 
            title="Bhakti Thakur" 
            subtitle="Power Platform Developer"
            onMenuClick={() => setIsSidebarOpen(true)}
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
