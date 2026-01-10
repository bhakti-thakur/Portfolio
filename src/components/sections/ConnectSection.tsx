const ConnectSection = () => {
  const connections = [
    { name: "Email Me", subtitle: "Send a direct message", link: "john.doe@email.com", icon: "email" },
    { name: "LinkedIn Profile", subtitle: "Professional network", link: "linkedin.com/in/johndoe", icon: "linkedin" },
    { name: "Download Resume", subtitle: "PDF Version 2024", link: "JohnDoe_Resume_2024.pdf", icon: "download" },
    { name: "Twitter / X", subtitle: "Tech insights & updates", link: "@johndoe_dev", icon: "twitter" },
  ];

  const timeline = [
    {
      date: "Dec 12, 2023 2:45 PM",
      title: "Email sent to Potential Client",
      description: "Follow-up regarding full-stack developer position for the upcoming SaaS project.",
      icon: "email",
      active: true,
    },
    {
      date: "Nov 28, 2023 10:15 AM",
      title: "LinkedIn Profile Updated",
      description: 'Added "Senior Software Engineer" certification to the professional summary.',
      icon: "share",
      active: false,
    },
  ];

  return (
    <div id="connect" className="scroll-mt-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Left Column */}
        <div className="space-y-4">
          {/* Primary Contact Channels */}
          <div className="power-card p-4">
            <h3 className="power-section-title mb-4">PRIMARY CONTACT CHANNELS</h3>
            
            <div className="space-y-4">
              <div>
                <label className="text-xs text-muted-foreground block mb-1">EMAIL ADDRESS</label>
                <div className="p-2 bg-muted/30 border border-border rounded text-sm flex items-center justify-between">
                  <span>john.doe@email.com</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="text-muted-foreground">
                    <path d="M1.5 3.5h13v9h-13v-9zm.5 1v7h12V4.5H2zm6 3l5-3v.5L8 8 3 5v-.5l5 3z"/>
                  </svg>
                </div>
              </div>
              
              <div>
                <label className="text-xs text-muted-foreground block mb-1">PHONE NUMBER</label>
                <div className="p-2 bg-muted/30 border border-border rounded text-sm flex items-center justify-between">
                  <span>+1 (555) 555-0158</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="text-muted-foreground">
                    <path d="M3.5 1A1.5 1.5 0 002 2.5v11A1.5 1.5 0 003.5 15h9a1.5 1.5 0 001.5-1.5v-11A1.5 1.5 0 0012.5 1h-9zM8 14a1 1 0 110-2 1 1 0 010 2z"/>
                  </svg>
                </div>
              </div>
              
              <div>
                <label className="text-xs text-muted-foreground block mb-1">AVAILABILITY</label>
                <div className="p-2 bg-success/10 border border-success/20 rounded text-sm flex items-center gap-2 text-success">
                  <div className="w-2 h-2 rounded-full bg-success"></div>
                  Available for new projects
                </div>
              </div>
            </div>
          </div>

          {/* Network Graph Placeholder */}
          <div className="power-card p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="power-section-title">NETWORK GRAPH</h3>
              <button className="p-1 hover:bg-muted rounded text-muted-foreground">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                  <path d="M7 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM7 8a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"/>
                </svg>
              </button>
            </div>
            
            <div className="h-40 flex flex-col items-center justify-center text-muted-foreground">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="24" cy="14" r="4"/>
                <circle cx="12" cy="34" r="4"/>
                <circle cx="36" cy="34" r="4"/>
                <path d="M24 18v8M20 26l-6 6M28 26l6 6"/>
              </svg>
              <p className="text-sm mt-2">Connect to view shared networks</p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          {/* Connect Options */}
          <div className="power-card p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="power-section-title">CONNECT OPTIONS</h3>
              <button className="text-sm text-accent flex items-center gap-1 hover:underline">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                  <path d="M6 1a.5.5 0 01.5.5v4h4a.5.5 0 010 1h-4v4a.5.5 0 01-1 0v-4h-4a.5.5 0 010-1h4v-4A.5.5 0 016 1z"/>
                </svg>
                Add Connection
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {connections.map((conn, index) => (
                <div key={index} className="border border-border rounded p-3 hover:border-primary/30 transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <div className={`w-10 h-10 rounded flex items-center justify-center ${
                      conn.icon === "email" ? "bg-primary/10 text-primary" :
                      conn.icon === "linkedin" ? "bg-accent text-accent-foreground" :
                      conn.icon === "download" ? "bg-destructive/10 text-destructive" :
                      "bg-info/10 text-info"
                    }`}>
                      {conn.icon === "email" && (
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2 4.5h16v11H2v-11zm1 1v9h14v-9H3zm7 4.5l6-4v.5L10 10 4 6.5V6l6 4z"/>
                        </svg>
                      )}
                      {conn.icon === "linkedin" && (
                        <span className="font-bold text-sm">in</span>
                      )}
                      {conn.icon === "download" && (
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M10 2v10l3-3h1.5L10 14 5.5 9H7V2h3zm-7 14v2h14v-2H3z"/>
                        </svg>
                      )}
                      {conn.icon === "twitter" && (
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M18 5.5c-.6.3-1.3.5-2 .6.7-.4 1.3-1.1 1.5-1.9-.7.4-1.4.7-2.2.8a3.5 3.5 0 00-6 3.2C6.3 8 3.8 6.6 2.2 4.5c-.3.5-.4 1.1-.4 1.7 0 1.2.6 2.3 1.5 2.9-.6 0-1.1-.2-1.6-.4v.1a3.5 3.5 0 002.8 3.4c-.3.1-.6.1-.9.1-.2 0-.4 0-.7-.1a3.5 3.5 0 003.3 2.4A7 7 0 012 16a10 10 0 005.4 1.6c6.4 0 10-5.3 10-10v-.5c.7-.5 1.3-1.1 1.8-1.9-.6.3-1.3.5-2 .6.7-.4 1.3-1.1 1.5-1.9"/>
                        </svg>
                      )}
                    </div>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" className="text-muted-foreground">
                      <path d="M3 3h5v1H4v6h6V5h1v5.5a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5v-7a.5.5 0 01.5-.5zm6 0h2.5v2.5h-1V4.2L7.2 7.5l-.7-.7 3.3-3.3H8.5v-1z"/>
                    </svg>
                  </div>
                  <h4 className="font-medium text-sm">{conn.name}</h4>
                  <p className="text-xs text-muted-foreground">{conn.subtitle}</p>
                  <a href="#" className="power-link text-xs mt-2 block">{conn.link}</a>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="power-card p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="power-section-title">TIMELINE</h3>
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

            <div className="space-y-4">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-3">
                  <div className={`w-2 h-2 rounded-full mt-2 ${item.active ? "bg-primary" : "bg-muted-foreground"}`}></div>
                  <div className="flex-1">
                    <div className="text-xs text-muted-foreground">{item.date}</div>
                    <div className="mt-1 p-3 bg-muted/30 rounded">
                      <div className="flex items-center gap-2 text-sm font-medium">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" className="text-muted-foreground">
                          {item.icon === "email" && <path d="M1.5 3h11v8h-11V3zm.5.5v7h10v-7H2zm5 3.5l4-2.5v.5L7 7.5 3 5V4.5l4 2.5z"/>}
                          {item.icon === "share" && <path d="M10 3a2 2 0 11-2.83 2.83L4.5 7.5l2.67 1.67A2 2 0 1110 11a2 2 0 010-4 2 2 0 010 4z"/>}
                        </svg>
                        {item.title}
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 text-center">
              <a href="#" className="power-link text-sm">View more activities</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectSection;
