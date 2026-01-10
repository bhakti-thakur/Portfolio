interface PowerToolbarProps {
  title: string;
  subtitle?: string;
}

const PowerToolbar = ({ title, subtitle }: PowerToolbarProps) => {
  return (
    <div className="bg-card border-b border-border">
      {/* Action bar */}
      <div className="flex items-center gap-2 px-4 py-2 border-b border-border">
        <button className="p-1.5 hover:bg-muted rounded text-muted-foreground">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M10 3L4 8l6 5V3z"/>
          </svg>
        </button>
        <div className="w-px h-5 bg-border mx-1"></div>
        
        <button className="flex items-center gap-1.5 px-2 py-1 text-sm text-foreground hover:bg-muted rounded">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
            <path d="M11.5 2H2.5a.5.5 0 00-.5.5v9a.5.5 0 00.5.5h9a.5.5 0 00.5-.5v-9a.5.5 0 00-.5-.5zM11 11H3V3h8v8z"/>
          </svg>
          Save
        </button>
        
        <button className="flex items-center gap-1.5 px-2 py-1 text-sm text-foreground hover:bg-muted rounded">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
            <path d="M11.5 2H2.5a.5.5 0 00-.5.5v9a.5.5 0 00.5.5h9a.5.5 0 00.5-.5v-9a.5.5 0 00-.5-.5zM11 11H3V3h8v8z"/>
            <path d="M6 6l4 4M6 10l4-4" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
          Save & Close
        </button>

        <button className="flex items-center gap-1.5 px-2 py-1 text-sm text-accent hover:bg-muted rounded">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
            <path d="M7 1a.5.5 0 01.5.5v5h5a.5.5 0 010 1h-5v5a.5.5 0 01-1 0v-5h-5a.5.5 0 010-1h5v-5A.5.5 0 017 1z"/>
          </svg>
          New
        </button>

        <button className="flex items-center gap-1.5 px-2 py-1 text-sm text-foreground hover:bg-muted rounded">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
            <path d="M7 1a6 6 0 100 12A6 6 0 007 1zM2.5 7a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0z"/>
            <path d="M7 4v3h3"/>
          </svg>
          Refresh
        </button>

        <div className="flex-1"></div>

        <button className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-primary-foreground bg-accent hover:bg-accent/90 rounded">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
            <path d="M11 7.5L7.5 4v2.25C4 6.25 2.5 8 2 10c1-1.25 2.5-1.85 5.5-1.85V10.5L11 7.5z"/>
          </svg>
          Share
        </button>
      </div>

      {/* Title bar */}
      <div className="flex items-center gap-4 px-4 py-4">
        <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xl font-semibold">
          JD
        </div>
        <div className="flex-1">
          <h1 className="text-2xl font-semibold text-foreground">{title}</h1>
          {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
        </div>
        <div className="flex items-center gap-6 text-sm">
          <div className="text-center">
            <div className="text-muted-foreground text-xs uppercase tracking-wide">STATUS</div>
            <div className="font-semibold text-success">Available for Hire</div>
          </div>
          <div className="text-center">
            <div className="text-muted-foreground text-xs uppercase tracking-wide">LOCATION</div>
            <div className="font-semibold">San Francisco, CA</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="text-muted-foreground">
                <path d="M8 8a3 3 0 100-6 3 3 0 000 6zm0 1c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            <div>
              <div className="text-xs text-muted-foreground">OWNER</div>
              <div className="font-medium">John Doe</div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-0 px-4 border-t border-border">
        <button className="px-4 py-3 text-sm font-medium text-primary border-b-2 border-primary">
          Summary
        </button>
        <button className="px-4 py-3 text-sm text-muted-foreground hover:text-foreground">
          Details
        </button>
        <button className="px-4 py-3 text-sm text-muted-foreground hover:text-foreground flex items-center gap-1">
          Related
          <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
            <path d="M2.5 3.5l2.5 3 2.5-3"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PowerToolbar;
