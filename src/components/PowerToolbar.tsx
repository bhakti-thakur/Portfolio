import { useState } from "react";

interface PowerToolbarProps {
  title: string;
  subtitle?: string;
  onMenuClick?: () => void;
}

const PowerToolbar = ({ title, subtitle, onMenuClick }: PowerToolbarProps) => {
  const [shareText, setShareText] = useState("Share");

  const handleShare = async () => {
    const url = window.location.href;
    const shareData = {
      title: "Bhakti Thakur - Power Platform Developer",
      text: "Check out my developer portfolio",
      url: url,
    };

    try {
      // Check if Web Share API is available (mobile)
      if (navigator.share && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        await navigator.share(shareData);
        // Still copy to clipboard as backup
        await navigator.clipboard.writeText(url);
      } else {
        // Desktop: just copy to clipboard
        await navigator.clipboard.writeText(url);
      }
      
      // Show feedback
      setShareText("Copied");
      setTimeout(() => setShareText("Share"), 2000);
    } catch (err) {
      // Fallback if share is cancelled or clipboard fails
      if (err instanceof Error && err.name !== 'AbortError') {
        console.error('Share failed:', err);
      }
    }
  };

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
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.1716 1C18.702 1 19.2107 1.21071 19.5858 1.58579L22.4142 4.41421C22.7893 4.78929 23 5.29799 23 5.82843V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H18.1716ZM4 3C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21L5 21L5 15C5 13.3431 6.34315 12 8 12L16 12C17.6569 12 19 13.3431 19 15V21H20C20.5523 21 21 20.5523 21 20V6.82843C21 6.29799 20.7893 5.78929 20.4142 5.41421L18.5858 3.58579C18.2107 3.21071 17.702 3 17.1716 3H17V5C17 6.65685 15.6569 8 14 8H10C8.34315 8 7 6.65685 7 5V3H4ZM17 21V15C17 14.4477 16.5523 14 16 14L8 14C7.44772 14 7 14.4477 7 15L7 21L17 21ZM9 3H15V5C15 5.55228 14.5523 6 14 6H10C9.44772 6 9 5.55228 9 5V3Z" fill="currentColor"/>
          </svg>
          <span className="hidden sm:inline">Save</span>
        </button>
        
        <button className="hidden md:flex items-center gap-1.5 px-2 py-1 text-sm text-foreground hover:bg-muted rounded">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-foreground"
          >
            <path d="M4 3h11l3 3v13a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
            <path d="M12 3v5H7V3" />
            <path d="M9.5 12l5 5m0-5-5 5" />
          </svg>
          Save &amp; Close
        </button>

        <button className="hidden md:flex items-center gap-1.5 px-2 py-1 text-sm text-accent hover:bg-muted rounded">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
            <path d="M7 1a.5.5 0 01.5.5v5h5a.5.5 0 010 1h-5v5a.5.5 0 01-1 0v-5h-5a.5.5 0 010-1h5v-5A.5.5 0 017 1z"/>
          </svg>
          New
        </button>

        <button className="hidden lg:flex items-center gap-1.5 px-2 py-1 text-sm text-foreground hover:bg-muted rounded">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 3V8M21 8H16M21 8L18 5.29168C16.4077 3.86656 14.3051 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.2832 21 19.8675 18.008 20.777 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Refresh
        </button>

        <div className="flex-1"></div>

        <button 
          onClick={handleShare}
          className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-primary-foreground bg-accent hover:bg-accent/90 rounded transition-all"
        >
          <svg width="20" height="20" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M14.734 15.8974L19.22 12.1374C19.3971 11.9927 19.4998 11.7761 19.4998 11.5474C19.4998 11.3187 19.3971 11.1022 19.22 10.9574L14.734 7.19743C14.4947 6.9929 14.1598 6.94275 13.8711 7.06826C13.5824 7.19377 13.3906 7.47295 13.377 7.78743V9.27043C7.079 8.17943 5.5 13.8154 5.5 16.9974C6.961 14.5734 10.747 10.1794 13.377 13.8154V15.3024C13.3888 15.6178 13.5799 15.8987 13.8689 16.0254C14.158 16.1521 14.494 16.1024 14.734 15.8974Z" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {shareText}
        </button>
      </div>

      {/* Title bar */}
      <div className="flex items-center gap-4 px-4 py-4">
        {/* Mobile menu button */}
        <button 
          onClick={onMenuClick} 
          className="md:hidden p-2 hover:bg-muted rounded"
          aria-label="Open navigation menu"
        >
          <svg width="20" height="20" viewBox="0 0 18 18" fill="currentColor" className="text-primary">
            <rect x="2.25" y="3.75" width="13.5" height="2.5" rx="1" />
            <rect x="2.25" y="7.75" width="13.5" height="2.5" rx="1" />
            <rect x="2.25" y="11.75" width="13.5" height="2.5" rx="1" />
          </svg>
        </button>

        <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xl font-semibold">
          BT
        </div>
        <div className="flex-1">
          <h1 className="text-lg sm:text-2xl font-semibold text-foreground">{title}</h1>
          {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
        </div>
        <div className="hidden sm:flex items-center gap-6 text-sm">
          <div className="text-center">
            <div className="text-muted-foreground text-xs uppercase tracking-wide">STATUS</div>
            <div className="font-semibold text-success">Available for Hire</div>
          </div>
          <div className="text-center">
            <div className="text-muted-foreground text-xs uppercase tracking-wide">LOCATION</div>
            <div className="font-semibold">Pune, India</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="text-muted-foreground">
                <path d="M8 8a3 3 0 100-6 3 3 0 000 6zm0 1c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            <div>
              <div className="text-xs text-muted-foreground">OWNER</div>
              <div className="font-medium">Bhakti Thakur</div>
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
