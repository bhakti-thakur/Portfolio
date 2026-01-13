import { projects, collaborators } from "@/data/projects";

const FeaturedProjectsSection = () => {
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
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M18 10L21 7L17 3L14 6M18 10L8 20H4V16L14 6M18 10L14 6" stroke="#FFF" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
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
                        <ul className="text-sm text-foreground space-y-1">
                          {project.description.map((item, i) => (
                            <li key={i}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mt-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {project.tags.map((tag, i) => (
                            <span key={i} className="text-xs px-2 py-0.5 bg-accent/10 text-accent rounded font-medium">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mt-3 flex items-center justify-between">
                        <div className="flex -space-x-2">
                          <div className="w-6 h-6 rounded-full bg-accent border-2 border-card text-xs font-semibold text-white flex items-center justify-center">BT</div>
                          {/* <div className="w-6 h-6 rounded-full bg-success border-2 border-card"></div>
                          <div className="w-6 h-6 rounded-full bg-muted border-2 border-card flex items-center justify-center text-xs text-muted-foreground">
                            +2
                          </div> */}
                        </div>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="power-link text-sm flex items-center gap-1">
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
              <span>1 - {projects.length} of {projects.length}</span>
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
              Let&apos;s discuss how I can help your team build scalable solutions and drive business growth.
            </p>
            <button 
              onClick={() => {
                const connectButton = Array.from(document.querySelectorAll('button')).find(btn => 
                  btn.textContent?.includes('Connect')
                );
                connectButton?.click();
              }}
              className="w-full py-2 bg-card text-primary rounded font-medium text-sm hover:bg-card/90 transition-colors"
            >
              CONTACT ME
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjectsSection;
