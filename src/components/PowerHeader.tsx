const PowerHeader = () => {
  return (
    <header className="power-header h-12 flex items-center justify-between px-4 text-primary-foreground">
      <div className="flex items-center gap-4">
        {/* Waffle Menu */}
        <button className="p-1 hover:bg-primary-foreground/10 rounded">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <rect x="2" y="2" width="4" height="4" rx="0.5" />
            <rect x="8" y="2" width="4" height="4" rx="0.5" />
            <rect x="14" y="2" width="4" height="4" rx="0.5" />
            <rect x="2" y="8" width="4" height="4" rx="0.5" />
            <rect x="8" y="8" width="4" height="4" rx="0.5" />
            <rect x="14" y="8" width="4" height="4" rx="0.5" />
            <rect x="2" y="14" width="4" height="4" rx="0.5" />
            <rect x="8" y="14" width="4" height="4" rx="0.5" />
            <rect x="14" y="14" width="4" height="4" rx="0.5" />
          </svg>
        </button>
        
        <div className="flex items-center gap-2">
          <span className="font-semibold">Power Apps</span>
          <span className="opacity-60 hidden sm:inline">|</span>
          <span className="text-sm opacity-80 hidden sm:inline">Developer Portfolio</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {/* New look toggle */}
        <div className="hidden md:flex items-center gap-2 text-sm">
          <span className="opacity-80">New look</span>
          <div className="w-10 h-5 bg-primary-foreground/30 rounded-full relative">
            <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-primary-foreground rounded-full"></div>
          </div>
        </div>

        {/* Action icons */}
        <button className="p-2 hover:bg-primary-foreground/10 rounded">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M6.5 1a5.5 5.5 0 014.383 8.823l3.647 3.647a.75.75 0 01-1.06 1.06l-3.647-3.647A5.5 5.5 0 116.5 1zm0 1.5a4 4 0 100 8 4 4 0 000-8z"/>
          </svg>
        </button>
        <button className="hidden sm:block p-2 hover:bg-primary-foreground/10 rounded">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 1a.75.75 0 01.75.75v5.5h5.5a.75.75 0 010 1.5h-5.5v5.5a.75.75 0 01-1.5 0v-5.5h-5.5a.75.75 0 010-1.5h5.5v-5.5A.75.75 0 018 1z"/>
          </svg>
        </button>
        <button className="hidden md:block p-2 hover:bg-primary-foreground/10 rounded">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M1.75 3a.75.75 0 000 1.5h12.5a.75.75 0 000-1.5H1.75zm2 4a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5zm2 4a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5z"/>
          </svg>
        </button>
        <button className="hidden lg:block p-2 hover:bg-primary-foreground/10 rounded">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 4.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM8 9.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM8 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"/>
          </svg>
        </button>
        <button className="hidden lg:block p-2 hover:bg-primary-foreground/10 rounded">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 0a8 8 0 100 16A8 8 0 008 0zm0 1.5a6.5 6.5 0 110 13 6.5 6.5 0 010-13zM8 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 018 5zm0 7a1 1 0 100-2 1 1 0 000 2z"/>
          </svg>
        </button>

        {/* User avatar */}
        <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-sm font-semibold">
          BT
        </div>
      </div>
    </header>
  );
};

export default PowerHeader;
