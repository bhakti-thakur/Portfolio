import { useState, useEffect } from "react";

interface LanguageData {
  name: string;
  percentage: number;
  color: string;
}

interface CommitActivity {
  type: "push" | "merge" | "star";
  time: string;
  title: string;
  repo: string;
  detail?: string;
  color: string;
  date?: Date;
}

interface MonthlyCommitTrend {
  labels: string[];
  counts: number[];
}

interface GitHubStats {
  totalContributions: number;
  languages: LanguageData[];
  monthlyCommits: number[];
  monthlyCommitTrend: MonthlyCommitTrend;
  activities: CommitActivity[];
  publicRepositories: number;
  activeYears: string;
  loading: boolean;
  error: string | null;
}

const CACHE_KEY = "github_stats_cache";
const CACHE_TTL = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds

const GITHUB_QUERY = `
  query {
    viewer {
      contributionsCollection {
        contributionCalendar {
          totalContributions
        }
      }
      repositories(first: 100, isFork: false, orderBy: {field: UPDATED_AT, direction: DESC}) {
        nodes {
          name
          nameWithOwner
          url
          defaultBranchRef {
            target {
              ... on Commit {
                history(first: 10) {
                  nodes {
                    committedDate
                    message
                  }
                }
              }
            }
          }
          languages(first: 5) {
            edges {
              size
              node {
                name
              }
            }
          }
        }
      }
      pullRequests(first: 20, states: MERGED, orderBy: {field: UPDATED_AT, direction: DESC}) {
        nodes {
          title
          mergedAt
          repository {
            nameWithOwner
          }
        }
      }
      starredRepositories(first: 10, orderBy: {field: STARRED_AT, direction: DESC}) {
        edges {
          starredAt
          node {
            name
            owner {
              login
            }
          }
        }
      }
    }
  }
`;

interface CacheData {
  timestamp: number;
  data: GitHubStats;
}

// Helper: Human-readable relative time (today-safe)
const formatTimeAgo = (fromDate: Date, now: Date): string => {
  const daysAgo = Math.floor((now.getTime() - fromDate.getTime()) / (1000 * 60 * 60 * 24));

  if (daysAgo <= 0) return "Today";
  if (daysAgo === 1) return "Yesterday";
  if (daysAgo < 7) return `${daysAgo} days ago`;
  if (daysAgo < 30) return `${Math.floor(daysAgo / 7)} weeks ago`;
  return `${Math.floor(daysAgo / 30)} months ago`;
};

const getFromCache = (): GitHubStats | null => {
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (!cached) {
      console.log("📭 [GitHub Stats] No cached data found");
      return null;
    }

    const { timestamp, data } = JSON.parse(cached) as CacheData;
    const now = Date.now();
    const ageInDays = Math.floor((now - timestamp) / (1000 * 60 * 60 * 24));

    if (now - timestamp < CACHE_TTL) {
      console.log(`✅ [GitHub Stats] Using cached data (${ageInDays} days old, TTL: 7 days)`);
      // Ensure new fields exist for backward compatibility
      return {
        ...data,
        monthlyCommitTrend: data.monthlyCommitTrend || { labels: [], counts: [] },
        publicRepositories: data.publicRepositories || 0,
        activeYears: data.activeYears || "0+",
      };
    }

    // Cache expired, clear it
    console.log(`⏰ [GitHub Stats] Cache expired (${ageInDays} days old) — clearing`);
    localStorage.removeItem(CACHE_KEY);
    return null;
  } catch {
    return null;
  }
};

const saveToCache = (data: GitHubStats): void => {
  try {
    const cacheData: CacheData = {
      timestamp: Date.now(),
      data,
    };
    localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
    console.log("💾 [GitHub Stats] Data cached successfully (TTL: 7 days)");
  } catch {
    console.warn("⚠️ [GitHub Stats] Failed to cache data");
  }
};

// Helper: Generate last 12-24 months of labels (e.g. "Jan 24", "Feb 24")
const generateMonthlyLabels = (monthCount: number = 12): string[] => {
  const labels: string[] = [];
  const now = new Date();

  for (let i = monthCount - 1; i >= 0; i--) {
    const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear().toString().slice(-2);
    labels.push(`${month} ${year}`);
  }

  return labels;
};

// Helper: Aggregate commits by month
const aggregateCommitsByMonth = (
  allCommitDates: Date[],
  monthCount: number = 12
): MonthlyCommitTrend => {
  const now = new Date();
  const labels = generateMonthlyLabels(monthCount);
  const counts = Array(monthCount).fill(0);

  allCommitDates.forEach((date) => {
    // Find which month bucket this commit belongs to
    const commitYear = date.getFullYear();
    const commitMonth = date.getMonth();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth();

    // Calculate months ago
    let monthsAgo = (currentYear - commitYear) * 12 + (currentMonth - commitMonth);

    // Only count commits from the last 12-24 months
    if (monthsAgo >= 0 && monthsAgo < monthCount) {
      const bucketIndex = monthCount - 1 - monthsAgo;
      counts[bucketIndex]++;
    }
  });

  return { labels, counts };
};

// Helper: Calculate active years based on commit dates
const calculateActiveYears = (commitDates: Date[]): string => {
  if (commitDates.length === 0) return "0+";

  const years = new Set(commitDates.map((date) => new Date(date).getFullYear()));

  return `${years.size}+`;
};

const processGithubData = (rawData: any): GitHubStats => {
  const stats: GitHubStats = {
    totalContributions: 0,
    languages: [],
    monthlyCommits: Array(12).fill(0),
    monthlyCommitTrend: { labels: [], counts: [] },
    activities: [],
    publicRepositories: 0,
    activeYears: "0+",
    loading: false,
    error: null,
  };

//   localStorage.removeItem('github_stats_cache');
//   console.log('Cache cleared:', localStorage.getItem('github_stats_cache')); // Should show null
//   location.reload(); // Force refresh

  console.log("🔄 Processing fresh GitHub data from API...");

  try {
    // Total contributions
    stats.totalContributions =
      rawData?.viewer?.contributionsCollection?.contributionCalendar?.totalContributions || 0;

    // Count public repositories (non-forks)
    const repositories = rawData?.viewer?.repositories?.nodes || [];
    stats.publicRepositories = repositories.length; // Already filtered by isFork: false in query

    // Process languages
    const languageMap: Record<string, number> = {};
    let totalSize = 0;

    rawData?.viewer?.repositories?.nodes?.forEach((repo: any) => {
      repo?.languages?.edges?.forEach((edge: any) => {
        const name = edge?.node?.name;
        const size = edge?.size || 0;
        if (name) {
          languageMap[name] = (languageMap[name] || 0) + size;
          totalSize += size;
        }
      });
    });

    // Convert to percentages and sort by size
    const sortedLanguages = Object.entries(languageMap)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 3);

    const colorMap: Record<string, string> = {
      TypeScript: "bg-primary",
      React: "bg-accent",
      JavaScript: "bg-accent",
      Python: "bg-warning",
      Java: "bg-destructive",
    };

    stats.languages = sortedLanguages.map(([name, size]) => ({
      name,
      percentage: Math.round((size / totalSize) * 100),
      color: colorMap[name] || "bg-muted-foreground",
    }));

    // Ensure percentages add up to 100
    if (stats.languages.length > 0) {
      const sum = stats.languages.reduce((acc, l) => acc + l.percentage, 0);
      if (sum < 100) {
        stats.languages[stats.languages.length - 1].percentage += 100 - sum;
      }
    }

    // Process recent commits for timeline
    const commits: CommitActivity[] = [];
    const allCommitDates: Date[] = []; // Collect for monthly trend
    const now = new Date();

   // console.log("GitHub API Response:", rawData);

    rawData?.viewer?.repositories?.nodes?.forEach((repo: any) => {
      if (!repo.name) {
        console.warn("Repo without name:", repo);
        return;
      }
      const commits_list = repo?.defaultBranchRef?.target?.history?.nodes || [];
      if (commits_list.length === 0) {
        console.log(`No commits found for repo: ${repo.nameWithOwner}`);
      }
      // Collect ALL commit dates for monthly aggregation
      commits_list.forEach((commit: any) => {
        allCommitDates.push(new Date(commit.committedDate));
      });
      // Limit to at most 1 commit per repo to keep timeline diverse
      commits_list.slice(0, 1).forEach((commit: any) => {
        const commitDate = new Date(commit.committedDate);
        const timeStr = formatTimeAgo(commitDate, now);

        commits.push({
          type: "push",
          time: timeStr,
          title: "Pushed to",
          repo: repo.nameWithOwner,
          detail: commit.message.split("\n")[0],
          color: "bg-primary",
          date: commitDate,
        });
        // console.log("Commit found:", repo.nameWithOwner, commit.message, commit.committedDate);
      });
    });

    // Process merged PRs
    const mergedPRs: CommitActivity[] = [];
    rawData?.viewer?.pullRequests?.nodes?.forEach((pr: any) => {
      if (!pr.repository?.nameWithOwner) {
        console.warn("PR without repo name:", pr);
        return;
      }
    //   console.log("PR found:", pr.repository.nameWithOwner, pr.title);
      const prDate = new Date(pr.mergedAt);
      const timeStr = formatTimeAgo(prDate, now);

      mergedPRs.push({
        type: "merge",
        time: timeStr,
        title: "Merged PR in",
        repo: pr.repository.nameWithOwner,
        detail: pr.title,
        color: "bg-success",
        date: prDate,
      });
    //   console.log("Merged PR:", pr.repository.nameWithOwner, pr.title, pr.mergedAt);
    });

    // Process starred repositories
    const starred: CommitActivity[] = [];
    rawData?.viewer?.starredRepositories?.edges?.forEach((edge: any) => {
      const repo = edge?.node;
      if (!repo?.name || !repo?.owner?.login) {
        console.warn("Starred repo without proper data:", repo);
        return;
      }
    //   console.log("Starred repo:", repo.owner.login, repo.name);
      const starDate = new Date(edge.starredAt);
      const timeStr = formatTimeAgo(starDate, now);

      starred.push({
        type: "star",
        time: timeStr,
        title: "Starred",
        repo: `${repo.owner.login}/${repo.name}`,
        color: "bg-warning",
        date: starDate,
      });
    //   console.log("⭐ STAR Activity:", repo.owner.login, repo.name, repo.starredAt);
    });

    // Combine and sort all activities by date (newest first)
    const allActivities = [...commits, ...mergedPRs, ...starred]
      .sort((a, b) => (b.date?.getTime() || 0) - (a.date?.getTime() || 0))
      .slice(0, 5)
      .map(({ date, ...activity }) => activity); // Remove date field before storing

    // console.log("Final activities:", allActivities);
    stats.activities = allActivities;

    // Aggregate commits by month (last 24 months)
    stats.monthlyCommitTrend = aggregateCommitsByMonth(allCommitDates, 24);

    // Calculate active years
    stats.activeYears = calculateActiveYears(allCommitDates);

    return stats;
  } catch (err) {
    console.error("Error processing GitHub data:", err);
    stats.error = "Failed to process GitHub data";
    return stats;
  }
};

export const useGithubStats = (): GitHubStats => {
  const [stats, setStats] = useState<GitHubStats>({
    totalContributions: 0,
    languages: [],
    monthlyCommits: Array(12).fill(0),
    monthlyCommitTrend: { labels: [], counts: [] },
    activities: [],
    publicRepositories: 0,
    activeYears: "0+",
    loading: true,
    error: null,
  });

  useEffect(() => {
    console.log("🔍 [GitHub Stats] Hook mounted — checking cache...");
    // Try to get cached data first
    const cachedStats = getFromCache();
    if (cachedStats) {
      setStats({ ...cachedStats, loading: false });
      return;
    }

    // Fetch fresh data if cache expired
    const fetchGithubStats = async () => {
      try {
        console.log("🌐 [GitHub Stats] Fetching fresh data from GitHub GraphQL API...");
        const token = import.meta.env.VITE_GITHUB_TOKEN;
        
        if (!token) {
          console.error("❌ [GitHub Stats] Token not configured");
          setStats((prev) => ({
            ...prev,
            loading: false,
            error: "GitHub token not configured",
          }));
          return;
        }

        const response = await fetch("https://api.github.com/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ query: GITHUB_QUERY }),
        });

        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.statusText}`);
        }

        const result = await response.json();

        if (result.errors) {
          console.error("❌ [GitHub Stats] GraphQL errors:", result.errors);
          throw new Error(result.errors[0].message || "GraphQL query failed");
        }

        console.log("✅ [GitHub Stats] API response received successfully");
        const processedStats = processGithubData(result.data);
        processedStats.loading = false;

        // Save to cache
        saveToCache(processedStats);
        setStats(processedStats);
        console.log("🎉 [GitHub Stats] Data processed and state updated");
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Unknown error";
        console.error("GitHub API Error:", errorMessage);
        setStats((prev) => ({
          ...prev,
          loading: false,
          error: errorMessage,
        }));
      }
    };

    fetchGithubStats();
  }, []);

  return stats;
};
