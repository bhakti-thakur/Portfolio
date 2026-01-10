const BasicInfoSection = () => {
  return (
    <div id="basic-info" className="scroll-mt-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Basic Information Card */}
        <div className="power-card p-4">
          <h3 className="power-section-title mb-4">BASIC INFORMATION</h3>
          
          <div className="space-y-4">
            <div>
              <label className="text-xs text-muted-foreground block mb-1">Name</label>
              <div className="p-2 bg-muted/30 border border-border rounded text-sm">
                John Doe
              </div>
            </div>
            
            <div>
              <label className="text-xs text-muted-foreground block mb-1">Title</label>
              <div className="p-2 bg-muted/30 border border-border rounded text-sm">
                Software Engineer
              </div>
            </div>
            
            <div>
              <label className="text-xs text-muted-foreground block mb-1">Phone</label>
              <div className="p-2 bg-muted/30 border border-border rounded text-sm flex items-center justify-between">
                <span>(555) 555-0158</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="text-muted-foreground">
                  <path d="M3.5 2A1.5 1.5 0 002 3.5v9A1.5 1.5 0 003.5 14h9a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0012.5 2h-9z"/>
                </svg>
              </div>
            </div>
            
            <div>
              <label className="text-xs text-muted-foreground block mb-1">Email</label>
              <div className="p-2 bg-muted/30 border border-border rounded text-sm">
                john.doe@email.com
              </div>
            </div>
            
            <div>
              <label className="text-xs text-muted-foreground block mb-1">Location</label>
              <div className="p-2 bg-muted/30 border border-border rounded text-sm flex items-center justify-between">
                <span>San Francisco, CA</span>
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
                <span>linkedin.com/in/johndoe</span>
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
              Experienced software engineer specializing in full-stack development with a strong
              focus on building scalable web applications. Proficient in various programming
              languages and modern frameworks. Passionate about learning new technologies and
              solving challenging problems. Over 8 years of experience in leading engineering
              teams and architecting cloud-native solutions.
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
                <span className="font-medium">John Doe</span>
              </div>
              
              <div className="flex items-center gap-3 text-sm">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" className="text-muted-foreground">
                  <path d="M9 1.5L3 6v9h4.5v-4.5h3V15H15V6L9 1.5z"/>
                </svg>
                <span>Software Engineer</span>
              </div>
              
              <div className="flex items-center gap-3 text-sm">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" className="text-muted-foreground">
                  <path d="M3.5 2A1.5 1.5 0 002 3.5v11A1.5 1.5 0 003.5 16h11a1.5 1.5 0 001.5-1.5v-11A1.5 1.5 0 0014.5 2h-11z"/>
                </svg>
                <span>(555) 555-0158</span>
              </div>
              
              <div className="flex items-center gap-3 text-sm">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" className="text-muted-foreground">
                  <path d="M1.5 4.5h15v9h-15v-9zm7.5 4.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
                </svg>
                <span>john.doe@email.com</span>
              </div>
              
              <div className="flex items-center gap-3 text-sm">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" className="text-muted-foreground">
                  <path d="M9 1.5a5.25 5.25 0 00-5.25 5.25c0 3.675 5.25 9.75 5.25 9.75s5.25-6.075 5.25-9.75A5.25 5.25 0 009 1.5z"/>
                </svg>
                <span>San Francisco, CA</span>
              </div>
              
              <div className="flex items-center gap-3 text-sm">
                <div className="w-4 h-4 rounded-full bg-accent"></div>
                <a href="#" className="power-link">linkedin.com/in/johndoe</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInfoSection;
