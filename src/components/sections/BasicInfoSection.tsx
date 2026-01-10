const BasicInfoSection = () => {
  return (
    <div id="basic-info" className="scroll-mt-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Basic Information Card */}
        <div className="power-card p-4">
          <h3 className="power-section-title mb-4">Who is SHE?</h3>
          
          <div className="space-y-4">
            <div>
              <label className="text-xs text-muted-foreground block mb-1">Name</label>
              <div className="p-2 bg-muted/30 border border-border rounded text-sm">
                Bhakti Thakur
              </div>
            </div>
            
            <div>
              <label className="text-xs text-muted-foreground block mb-1">Title</label>
              <div className="p-2 bg-muted/30 border border-border rounded text-sm">
                Power Platform Developer
              </div>
            </div>
            
            <div>
              <label className="text-xs text-muted-foreground block mb-1">Location</label>
              <div className="p-2 bg-muted/30 border border-border rounded text-sm flex items-center justify-between">
                <span>Pune, India</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="text-muted-foreground">
                  <path d="M8 1a5 5 0 00-5 5c0 3.5 5 9 5 9s5-5.5 5-9a5 5 0 00-5-5zm0 7a2 2 0 110-4 2 2 0 010 4z"/>
                </svg>
              </div>
            </div>
            
            <div>
              <label className="text-xs text-muted-foreground block mb-1">LinkedIn</label>
              <div className="p-2 bg-muted/30 border border-border rounded text-sm flex items-center gap-2">
                <div className="w-5 h-5 bg-accent rounded flex items-center justify-center">
                  <span className="text-accent-foreground text-xs font-bold">in</span>
                </div>
                <a href="https://www.linkedin.com/in/bhakti-thakur/" target="_blank">linkedin.com/in/bhakti-thakur</a>
              </div>
            </div>

            <div>
              <label className="text-xs text-muted-foreground block mb-1">Core Expertise</label>
              <div className="p-2 bg-muted/30 border border-border rounded text-sm">
                Dynamics 365 CE | Power Platform | Dataverse
              </div>
            </div>
            
            <div>
              <label className="text-xs text-muted-foreground block mb-1">Experience</label>
              <div className="p-2 bg-muted/30 border border-border rounded text-sm">
                Entry-level
              </div>
            </div>

          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          {/* Profile Summary */}
          <div className="power-card p-4">
            <h3 className="power-section-title mb-4">PROFILE SUMMARY</h3>
            <p className="text-sm text-foreground leading-relaxed">
              Entry-level Dynamics 365 & Power Platform Developer with hands-on experience delivering business-focused CRM and automation solutions using Microsoft Dynamics 365 CE, Power Apps, Power Automate, and Dataverse. Proven ability to customize CRM systems using JavaScript, design model-driven applications, and automate workflows to reduce manual effort. Strong foundation in full-stack development, enabling seamless integration between Power Platform solutions and custom web applications 
            </p>
          </div>

          {/* Profile Overview */}
          <div className="power-card p-4">
            <h3 className="power-section-title mb-4">PROFILE OVERVIEW</h3>
            <div className="w-20 h-1 bg-primary mb-4"></div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" className="text-muted-foreground">
                  <path d="M9 9a3.75 3.75 0 100-7.5A3.75 3.75 0 009 9zm0 1.5c-3.315 0-6 1.685-6 3.75v1.5h12v-1.5c0-2.065-2.685-3.75-6-3.75z"/>
                </svg>
                <span className="font-medium">Bhakti Thakur</span>
              </div>
              
              <div className="flex items-center gap-3 text-sm">
                <svg width="16" height="16" viewBox="0 0 18 18" fill="currentColor" className="text-muted-foreground">
                  <path d="M6 4.5h6V3a1.5 1.5 0 00-1.5-1.5h-3A1.5 1.5 0 006 3v1.5zm-1.5 0V3A3 3 0 017.5 0h3A3 3 0 0113.5 3v1.5H15a3 3 0 013 3v7.5a3 3 0 01-3 3H3a3 3 0 01-3-3v-7.5a3 3 0 013-3h1.5zm7.5 3h-6v1.5h6V7.5z"/>
                </svg>
                <span>Power Platform Developer</span>
              </div>
              
              {/* <div className="flex items-center gap-3 text-sm">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="text-muted-foreground">
                  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328z"/>
                </svg>
                <span>1234</span>
              </div>
              
              <div className="flex items-center gap-3 text-sm">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" className="text-muted-foreground">
                  <path d="M1.5 4.5h15a1.5 1.5 0 011.5 1.5v7.5a1.5 1.5 0 01-1.5 1.5h-15A1.5 1.5 0 010 13.5V6a1.5 1.5 0 011.5-1.5zm15 1.5L9 10.5 1.5 6v7.5h15V6z"/>
                </svg>
                <span>john.doe@email.com</span>
              </div> */}
              
              <div className="flex items-center gap-3 text-sm">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="text-muted-foreground">
                  <path d="M8 1a5 5 0 00-5 5c0 3.5 5 9 5 9s5-5.5 5-9a5 5 0 00-5-5zm0 7a2 2 0 110-4 2 2 0 010 4z"/>
                </svg>
                <span>Pune, India</span>
              </div>
              
              <div className="flex items-center gap-3 text-sm">
                <div className="w-4 h-4 rounded bg-accent flex items-center justify-center">
                  <span className="text-accent-foreground text-xs font-bold">in</span>
                </div>
                <a href="https://www.linkedin.com/in/bhakti-thakur/" className="power-link">linkedin.com/in/bhakti-thakur</a>
              </div>

              <div className="flex items-center gap-3 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground">
                  <rect x="3" y="4" width="18" height="12" rx="2" />
                  <path d="M2 20h20" />
                </svg>
                <span>0-1 years</span>
              </div>
              

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInfoSection;
