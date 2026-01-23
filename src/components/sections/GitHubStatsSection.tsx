import { useGithubStats } from "@/hooks/useGithubStats";
import CommitTrendChart from "@/components/CommitTrendChart";

const GitHubStatsSection = () => {
  const { totalContributions, languages, activities, monthlyCommitTrend, publicRepositories, activeYears, loading } = useGithubStats();

  // Fallback activities if no real data
  const defaultActivities = [
    {
      type: "push",
      time: "Today at 4:32 PM",
      title: "Pushed 4 commits to",
      repo: "frontend-dash-core",
      detail: '"refactor: optimized rendering for large SVG datasets"',
      color: "bg-primary",
    },
    {
      type: "merge",
      time: "Yesterday at 11:15 AM",
      title: "Merged PR #24 in",
      repo: "oss-utility-belt",
      detail: "Feature: Added new dark mode toggle component.",
      color: "bg-success",
    },
    {
      type: "star",
      time: "2 days ago",
      title: "Starred",
      repo: "microsoft/fluentui",
      color: "bg-warning",
    },
  ];

  const defaultLanguages = [
    { name: "TypeScript", percentage: 62, color: "bg-primary" },
    { name: "React/JSX", percentage: 28, color: "bg-accent" },
    { name: "Others", percentage: 10, color: "bg-muted-foreground" },
  ];

  const displayActivities = activities.length > 0 ? activities : defaultActivities;
  const displayLanguages = languages.length > 0 ? languages : defaultLanguages;

  // Calculate donut chart segments dynamically
  const CIRCUMFERENCE = 219.9; // 2πr where r=35
  
  // Map Tailwind color classes to HSL values for SVG
  const tailwindToHSL: Record<string, string> = {
    "bg-primary": "hsl(var(--primary))",
    "bg-accent": "hsl(var(--accent))",
    "bg-muted-foreground": "hsl(var(--muted-foreground))",
    "bg-warning": "hsl(var(--warning))",
    "bg-destructive": "hsl(var(--destructive))",
  };
  
  let cumulativeOffset = 0;
  const segments = displayLanguages.map((lang) => {
    const segmentLength = (lang.percentage / 100) * CIRCUMFERENCE;
    const segment = {
      color: tailwindToHSL[lang.color] || "hsl(var(--muted-foreground))",
      dasharray: `${segmentLength.toFixed(1)} ${CIRCUMFERENCE}`,
      offset: -cumulativeOffset,
    };
    cumulativeOffset += segmentLength;
    return segment;
  });

  const primaryLanguage = displayLanguages[0];

  return (
    <div id="github-stats" className="scroll-mt-4 mb-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Left Column */}
        <div className="space-y-4">
          {/* Total Contributions */}
          <div className="power-card p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="power-section-title mb-4">TOTAL CONTRIBUTIONS</h3>
              {/* <span className="text-xs mb-4 rounded font-medium text-muted-foreground flex items-center gap-1">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="text-muted-foreground">
                  <path d="M8 1a7 7 0 100 14A7 7 0 008 1zm0 12.5a5.5 5.5 0 110-11 5.5 5.5 0 010 11zM8 5a.75.75 0 01.75.75v2.5a.75.75 0 01-1.5 0v-2.5A.75.75 0 018 5zm0 7a1 1 0 100-2 1 1 0 000 2z"/>
                </svg>
                LAST UPDATED </span> */}
            </div>
            
            
            <div className="text-3xl sm:text-5xl font-light text-primary mb-2">{loading ? "..." : totalContributions}</div>
            <div className="flex items-center gap-1 text-sm text-success">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                <path d="M7 2l4 5H8v5H6V7H3l4-5z"/>
              </svg>
              +12% from last year
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6 pt-4 border-t border-border">
              <div className="text-center">
                <div className="text-xs text-muted-foreground uppercase tracking-wide">Public Repositories</div>
                <div className="text-lg sm:text-2xl font-semibold mt-1">{loading ? "..." : publicRepositories}</div>
              </div>
              <div className="text-center">
                <div className="text-xs text-muted-foreground uppercase tracking-wide">Years Active</div>
                <div className="text-lg sm:text-2xl font-semibold mt-1">{loading ? "..." : activeYears}</div>
              </div>
              <div className="text-center">
                <div className="text-xs text-muted-foreground uppercase tracking-wide">Preferred Tech</div>
                <div className="text-base sm:text-xl font-semibold mt-1">Power Platform</div>
              </div>
              <div className="text-center">
                <div className="text-xs text-muted-foreground uppercase tracking-wide">Preferred Language</div>
                <div className="text-base sm:text-xl font-semibold mt-1">{loading ? "..." : primaryLanguage?.name}</div>
              </div>
            </div>
          </div>

          {/* Top Languages */}
          <div className="power-card p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="power-section-title">TOP LANGUAGES</h3>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="text-muted-foreground">
                <path d="M8 1a7 7 0 100 14A7 7 0 008 1zm0 12.5a5.5 5.5 0 110-11 5.5 5.5 0 010 11zM8 5a.75.75 0 01.75.75v2.5a.75.75 0 01-1.5 0v-2.5A.75.75 0 018 5zm0 7a1 1 0 100-2 1 1 0 000 2z"/>
              </svg>
            </div>

            {/* Donut Chart */}
            <div className="flex justify-center mb-4">
              <div className="relative w-40 h-40">
                <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                  {segments.map((segment, index) => (
                    <circle
                      key={index}
                      cx="50"
                      cy="50"
                      r="35"
                      fill="none"
                      stroke={segment.color}
                      strokeWidth="12"
                      strokeDasharray={segment.dasharray}
                      strokeDashoffset={segment.offset}
                    />
                  ))}
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-xs text-muted-foreground">PRIMARY</span>
                  <span className="text-lg font-semibold">{primaryLanguage?.name}</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              {displayLanguages.map((lang, index) => (
                <div key={index} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded ${lang.color}`}></div>
                    <span>{lang.name}</span>
                  </div>
                  <span className="font-medium">{lang.percentage}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          {/* Commits Trend Chart */}
          <div className="power-card p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="power-section-title">COMMITS PER MONTH</h3>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="text-muted-foreground">
                <path d="M8 1a7 7 0 100 14A7 7 0 008 1zm0 12.5a5.5 5.5 0 110-11 5.5 5.5 0 010 11zM8 5a.75.75 0 01.75.75v2.5a.75.75 0 01-1.5 0v-2.5A.75.75 0 018 5zm0 7a1 1 0 100-2 1 1 0 000 2z"/>
              </svg>
            </div>
            {monthlyCommitTrend.labels.length > 0 ? (
              <CommitTrendChart labels={monthlyCommitTrend.labels} counts={monthlyCommitTrend.counts} />
            ) : (
              <div className="h-64 flex flex-col items-center justify-center text-muted-foreground gap-3">
                <div className="w-full h-full rounded bg-muted-foreground/15 border border-muted-foreground/15 animate-pulse flex items-center justify-center" aria-hidden="true"> 
                  <div className="text-xs text-muted-foreground">Loading chart data...</div>
                </div>
                
              </div>
            )}
          </div>

          {/* Contribution Timeline */}
          <div className="power-card p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="power-section-title">CONTRIBUTION TIMELINE</h3>
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
              {displayActivities.map((activity, index) => {
                // Construct correct GitHub URL based on activity type
                let repoUrl = `https://github.com/${activity.repo}`;
                // if (activity.type === "star") {
                //   // Starred repos are already in "owner/repo" format
                //   repoUrl = `https://github.com/${activity.repo}`;
                // } else {
                //   // Own repos (push/merge) just need username prefix
                //   repoUrl = `https://github.com/${activity.repo}`;
                // }
                const repoLabel = activity.type === "star"
                  ? activity.repo
                  : (activity.repo.split("/").pop() || activity.repo);

                return (
                  <div key={index} className="flex gap-3">
                    <div className={`w-6 h-6 rounded-full ${activity.color} flex items-center justify-center flex-shrink-0`}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="white">
                        {activity.type === "push" && <path d="M6 1L2 5h3v6h2V5h3L6 1z"/>}
                        {activity.type === "merge" && <path d="M3 2v4a3 3 0 003 3h.5V7H6a1 1 0 01-1-1V2H3zm6 0v4a1 1 0 01-1 1h-.5v2H8a3 3 0 003-3V2H9z"/>}
                        {activity.type === "star" && <path d="M6 1l1.5 3 3.5.5-2.5 2.5.5 3.5L6 8.5 3 10.5l.5-3.5L1 4.5l3.5-.5L6 1z"/>}
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-xs text-muted-foreground">{activity.time}</div>
                      <div className="text-sm">
                        {activity.title} <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="power-link">{repoLabel}</a>
                      </div>
                      {activity.detail && (
                        <div className="mt-1 p-2 bg-muted/30 rounded text-xs text-muted-foreground">
                          {activity.detail}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default GitHubStatsSection;
