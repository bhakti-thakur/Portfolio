const PowerFooter = () => {
  return (
    <footer className="h-8 bg-muted border-t border-border flex items-center justify-between px-2 sm:px-4 text-[10px] sm:text-xs text-muted-foreground">
      <div className="flex items-center gap-1 sm:gap-2">
        <div className="w-2 h-2 rounded-full bg-success"></div>
        <span className="hidden sm:inline">Connected to Microsoft Cloud</span>
        <span className="sm:hidden">Connected</span>
        <span className="hidden md:inline mx-2">Region: West US</span>
      </div>
      <div className="flex items-center gap-2 sm:gap-4">
        <span className="hidden md:inline">Privacy & Cookies</span>
        <span className="hidden sm:inline">Terms of Use</span>
        <span>©2026 BT</span>
      </div>
    </footer>
  );
};

export default PowerFooter;
