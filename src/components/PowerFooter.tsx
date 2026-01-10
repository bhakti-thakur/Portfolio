const PowerFooter = () => {
  return (
    <footer className="h-8 bg-muted border-t border-border flex items-center justify-between px-4 text-xs text-muted-foreground">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-success"></div>
        <span>Connected to Microsoft Cloud</span>
        <span className="mx-2">Region: West US</span>
      </div>
      <div className="flex items-center gap-4">
        <span>Privacy & Cookies</span>
        <span>Terms of Use</span>
        <span>© 2024 DevPortfolio</span>
      </div>
    </footer>
  );
};

export default PowerFooter;
