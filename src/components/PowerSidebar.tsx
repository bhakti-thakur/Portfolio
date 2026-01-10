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
                <path d="M8 1a7 7 0 100 14A7 7 0 008 1zm0 1.5a5.5 5.5 0 110 11 5.5 5.5 0 010-11zM7.25 4.5v4.25H11v1.5H7.25a.75.75 0 01-.75-.75V4.5h1.5z"/>
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
              <svg fill="currentColor" height="12" width="12" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512.492 512.492">
                <g>
                  <g>
                    <path d="M394.832,364.989l111.403-111.424c5.099-5.056,7.253-12.352,5.824-19.392c-1.451-7.019-6.336-12.864-13.013-15.509
                      c-75.584-30.144-132.821-23.616-157.077-18.389L207.376,85.757c2.667-45.312-21.696-76.181-22.827-77.589
                      c-3.776-4.715-9.408-7.595-15.467-7.936c-5.995-0.213-11.968,1.963-16.235,6.229L6.246,153.064
                      c-4.309,4.288-6.571,10.24-6.208,16.32c0.341,6.059,3.264,11.712,8.043,15.467c26.197,20.821,58.944,23.019,76.331,22.571
                      l115.541,135.808c-4.203,24.277-9.621,83.819,18.965,155.605c2.645,6.677,8.469,11.541,15.488,13.013
                      c1.451,0.277,2.88,0.427,4.309,0.427c5.611,0,11.051-2.197,15.083-6.251l110.869-110.869l110.848,110.869
                      c4.16,4.16,9.621,6.251,15.083,6.251c5.461,0,10.923-2.091,15.083-6.251c8.341-8.341,8.341-21.824,0-30.165L394.832,364.989z"/>
                  </g>
                </g>
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
