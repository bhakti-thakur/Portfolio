interface PowerSidebarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const PowerSidebar = ({ activeSection, onNavigate }: PowerSidebarProps) => {
  const menuItems = [
    { id: "home", label: "Home", icon: "home" },
  ];

  const portfolioItems = [
    { id: "basic-info", label: "Basic Info", icon: "person" },
    { id: "tech-stack", label: "Tech Stack", icon: "code" },
    { id: "featured-projects", label: "Featured Projects", icon: "star" },
    { id: "github-stats", label: "GitHub Stats", icon: "chart" },
    { id: "connect", label: "Connect", icon: "connect" },
  ];

  const renderIcon = (icon: string) => {
    switch (icon) {
      case "home":
        return (
          <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
            <path d="M9 1.5L1.5 7.5V16.5H6.75V11.25H11.25V16.5H16.5V7.5L9 1.5Z"/>
          </svg>
        );
      case "person":
        return (
          <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
            <path d="M9 9a3.75 3.75 0 100-7.5A3.75 3.75 0 009 9zm0 1.5c-3.315 0-6 1.685-6 3.75v1.5h12v-1.5c0-2.065-2.685-3.75-6-3.75z"/>
          </svg>
        );
      case "code":
        return (
          <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
            <path d="M5.25 4.5L.75 9l4.5 4.5 1.06-1.06L2.87 9l3.44-3.44L5.25 4.5zm7.5 0l-1.06 1.06L15.13 9l-3.44 3.44 1.06 1.06 4.5-4.5-4.5-4.5z"/>
          </svg>
        );
      case "star":
        return (
          <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
            <path d="M9 1.5l2.47 5.01 5.53.8-4 3.9.94 5.49L9 14.26l-4.94 2.54.94-5.49-4-3.9 5.53-.8L9 1.5z"/>
          </svg>
        );
      case "chart":
        return (
          <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
            <path d="M2.25 14.25h13.5v1.5H2.25v-1.5zm0-3h3v2.25h-3v-2.25zm4.5-3h3v5.25h-3V8.25zm4.5-3h3v8.25h-3V5.25z"/>
          </svg>
        );
      case "connect":
        return (
          <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
            <path d="M14.25 6.75a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5zm-10.5 3a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5zm10.5 6a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5zm-8.69-6.94l7.13-3.56-.67-1.34-7.13 3.56.67 1.34zm7.13 2.69l-7.13-3.56-.67 1.34 7.13 3.56.67-1.34z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <aside className="w-56 bg-sidebar border-r border-sidebar-border flex flex-col">
      {/* Menu button */}
      <div className="p-3 border-b border-sidebar-border">
        <button className="p-2 hover:bg-muted rounded">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" className="text-sidebar-foreground">
            <path d="M2.25 4.5h13.5v1.5H2.25v-1.5zm0 4.5h13.5v1.5H2.25V9zm0 4.5h13.5v1.5H2.25v-1.5z"/>
          </svg>
        </button>
      </div>

      {/* Main nav */}
      <nav className="flex-1 overflow-y-auto py-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-2 text-sm text-left transition-colors ${
              activeSection === item.id
                ? "bg-sidebar-accent text-sidebar-accent-foreground border-l-4 border-sidebar-primary"
                : "text-sidebar-foreground hover:bg-muted"
            }`}
          >
            <span className="opacity-70">{renderIcon(item.icon)}</span>
            <span>{item.label}</span>
          </button>
        ))}

        {/* Recent section */}
        <div className="mt-4">
          <button className="w-full flex items-center justify-between px-4 py-2 text-sm text-sidebar-foreground hover:bg-muted">
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="opacity-70">
                <path d="M8 1a7 7 0 100 14A7 7 0 008 1zm0 1.5a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm-.25 2v3.25H11v1.5H7.25a.75.75 0 01-.75-.75V4.5h1.25z"/>
              </svg>
              <span>Recent</span>
            </div>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" className="opacity-50">
              <path d="M4.5 2.5l3.5 3.5-3.5 3.5"/>
            </svg>
          </button>
        </div>

        {/* Pinned section */}
        <div className="mt-1">
          <button className="w-full flex items-center justify-between px-4 py-2 text-sm text-sidebar-foreground hover:bg-muted">
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="opacity-70">
                <path d="M10.5 1.5L9 3l.44.44L6 6.88l-1.94-1.94-.56.56 1.94 1.94-3.94 3.94v1.12h1.12l3.94-3.94 1.94 1.94.56-.56-1.94-1.94 3.44-3.44.44.44 1.5-1.5-2.5-2.5z"/>
              </svg>
              <span>Pinned</span>
            </div>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" className="opacity-50">
              <path d="M4.5 2.5l3.5 3.5-3.5 3.5"/>
            </svg>
          </button>
        </div>

        {/* Portfolio section */}
        <div className="mt-4">
          <div className="px-4 py-2">
            <span className="power-section-title">MY PORTFOLIO</span>
          </div>
          {portfolioItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-2 text-sm text-left transition-colors ${
                activeSection === item.id
                  ? "bg-sidebar-accent text-sidebar-accent-foreground border-l-4 border-sidebar-primary"
                  : "text-sidebar-foreground hover:bg-muted"
              }`}
            >
              <span className="opacity-70">{renderIcon(item.icon)}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Footer */}
      <div className="p-3 border-t border-sidebar-border">
        <button className="flex items-center gap-2 text-sm text-sidebar-foreground hover:text-sidebar-accent-foreground">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="opacity-70">
            <path d="M8 1a.75.75 0 01.75.75v5.5h5.5a.75.75 0 010 1.5h-5.5v5.5a.75.75 0 01-1.5 0v-5.5h-5.5a.75.75 0 010-1.5h5.5v-5.5A.75.75 0 018 1z"/>
          </svg>
          <span>New Group</span>
        </button>
      </div>
    </aside>
  );
};

export default PowerSidebar;
