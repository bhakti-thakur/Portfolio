const FeaturedProjectsSection = () => {
  const projects = [
    {
      name: "Enterprise CRM Platform",
      modified: "Oct 24, 2:15 PM",
      description: "A comprehensive customer relationship management tool built for high-performance sales teams. Features real-time data sync and advanced reporting.",
      tags: ["REACT", "NODE.JS", "AZURE"],
      color: "bg-warning",
    },
    {
      name: "AI Analytics Engine",
      modified: "Oct 20, 11:40 AM",
      description: "Developed a machine learning engine that predicts user churn with 94% accuracy. Integrated with existing data pipelines for real-time insights.",
      tags: ["PYTHON", "TENSORFLOW"],
      color: "bg-destructive",
      isPublic: true,
    },
    {
      name: "Fitness Tracking App",
      modified: "Oct 15, 09:12 AM",
      description: "Cross-platform mobile application for tracking workout progress and nutritional intake.",
      tags: ["FLUTTER"],
      color: "bg-primary",
    },
  ];

  const collaborators = [
    { name: "John Doe (Lead)", role: "Fullstack Engineer", initials: "JD", color: "bg-accent" },
    { name: "Sarah Adams", role: "UI/UX Designer", initials: "SA", color: "bg-success" },
    { name: "Mike King", role: "Backend Architect", initials: "MK", color: "bg-destructive" },
  ];

  return (
    <div id="featured-projects" className="scroll-mt-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Projects List */}
        <div className="lg:col-span-2">
          <div className="power-card p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="power-section-title">RECENT WORK</h3>
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
              {projects.map((project, index) => (
                <div key={index} className="border border-border rounded p-4">
                  <div className="flex items-start gap-3">
                    <div className={`w-6 h-6 rounded ${project.color} flex items-center justify-center text-primary-foreground text-xs font-bold`}>
                      {project.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-sm">{project.name}</h4>
                        <div className="flex items-center gap-1">
                          <button className="p-1 hover:bg-muted rounded text-muted-foreground">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                              <path d="M11.5 2.5l-9 9v2h2l9-9-2-2zM10.5 1.5l2 2 .5-.5a1.414 1.414 0 00-2-2l-.5.5z"/>
                            </svg>
                          </button>
                          <button className="p-1 hover:bg-muted rounded text-muted-foreground">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                              <path d="M4 3v-.5A1.5 1.5 0 015.5 1h3A1.5 1.5 0 0110 2.5V3h2.5a.5.5 0 010 1h-.6l-.7 8.5a1.5 1.5 0 01-1.5 1.5h-5.4a1.5 1.5 0 01-1.5-1.5L2.1 4H1.5a.5.5 0 010-1H4z"/>
                            </svg>
                          </button>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground">Modified on: {project.modified}</p>
                      
                      <div className="mt-3 p-3 bg-muted/30 rounded">
                        <p className="text-sm text-foreground">{project.description}</p>
                      </div>
                      
                      <div className="mt-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {project.tags.map((tag, i) => (
                            <span key={i} className="text-xs px-2 py-0.5 bg-accent/10 text-accent rounded font-medium">
                              {tag}
                            </span>
                          ))}
                        </div>
                        {project.isPublic && (
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                              <path d="M3 4V3a3 3 0 016 0v1h.5A1.5 1.5 0 0111 5.5v5A1.5 1.5 0 019.5 12h-7A1.5 1.5 0 011 10.5v-5A1.5 1.5 0 012.5 4H3z"/>
                            </svg>
                            Public Repo
                          </div>
                        )}
                      </div>
                      
                      <div className="mt-3 flex items-center justify-between">
                        <div className="flex -space-x-2">
                          <div className="w-6 h-6 rounded-full bg-accent border-2 border-card"></div>
                          <div className="w-6 h-6 rounded-full bg-success border-2 border-card"></div>
                          <div className="w-6 h-6 rounded-full bg-muted border-2 border-card flex items-center justify-center text-xs text-muted-foreground">
                            +2
                          </div>
                        </div>
                        <a href="#" className="power-link text-sm flex items-center gap-1">
                          View Project
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                            <path d="M2.5 2h4v1h-4v6h6v-4h1v4.5a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5v-7a.5.5 0 01.5-.5zm5 0h2.5v2.5h-1v-1.29l-3.35 3.35-.71-.71L8.29 2.5H7v-1z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <span>1 - 3 of 12</span>
              <div className="flex items-center gap-1">
                <button className="p-1 hover:bg-muted rounded">«</button>
                <button className="p-1 hover:bg-muted rounded">‹</button>
                <span className="px-2">Page 1</span>
                <button className="p-1 hover:bg-muted rounded">›</button>
                <button className="p-1 hover:bg-muted rounded">»</button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-4">
          {/* Project Metrics */}
          <div className="power-card p-4">
            <h3 className="power-section-title mb-4">PROJECT METRICS</h3>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground">Commits (YTD)</span>
                  <span className="font-semibold">1,248</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-primary rounded-full"></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground">Uptime Average</span>
                  <span className="font-semibold text-success">99.98%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-[99%] bg-success rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="mt-4 p-3 bg-warning/10 border border-warning/20 rounded">
              <div className="flex items-center gap-2 text-sm font-medium text-warning">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                  <path d="M7 1a6 6 0 100 12A6 6 0 007 1zm0 10.5a4.5 4.5 0 110-9 4.5 4.5 0 010 9zM7 4a.75.75 0 01.75.75v2.5a.75.75 0 01-1.5 0v-2.5A.75.75 0 017 4zm0 6a.75.75 0 100-1.5.75.75 0 000 1.5z"/>
                </svg>
                INSIGHT
              </div>
              <p className="text-xs text-warning mt-1">
                Project output increased by 20% since adopting automated CI/CD pipelines in Q2.
              </p>
            </div>
          </div>

          {/* Collaborators */}
          <div className="power-card p-4">
            <h3 className="power-section-title mb-4">COLLABORATORS</h3>
            
            <div className="space-y-3">
              {collaborators.map((person, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full ${person.color} flex items-center justify-center text-primary-foreground text-xs font-semibold`}>
                    {person.initials}
                  </div>
                  <div>
                    <div className="text-sm font-medium">{person.name}</div>
                    <div className="text-xs text-muted-foreground">{person.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary rounded p-4 text-primary-foreground">
            <h4 className="font-semibold mb-1">Need a custom solution?</h4>
            <p className="text-sm opacity-80 mb-3">
              Let&apos;s discuss how I can help your team build scalable web applications.
            </p>
            <button className="w-full py-2 bg-card text-primary rounded font-medium text-sm hover:bg-card/90 transition-colors">
              CONTACT ME
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjectsSection;
