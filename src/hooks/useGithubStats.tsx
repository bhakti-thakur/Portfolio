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

interface GitHubStats {
  totalContributions: number;
  languages: LanguageData[];
  monthlyCommits: number[];
  activities: CommitActivity[];
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

const getFromCache = (): GitHubStats | null => {
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (!cached) return null;

    const { timestamp, data } = JSON.parse(cached) as CacheData;
    const now = Date.now();

    if (now - timestamp < CACHE_TTL) {
      return data;
    }

    // Cache expired, clear it
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
  } catch {
    console.warn("Failed to cache GitHub stats");
  }
};

const processGithubData = (rawData: any): GitHubStats => {
  const stats: GitHubStats = {
    totalContributions: 0,
    languages: [],
    monthlyCommits: Array(12).fill(0),
    activities: [],
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
      // Limit to at most 1 commit per repo to keep timeline diverse
      commits_list.slice(0, 1).forEach((commit: any) => {
        const commitDate = new Date(commit.committedDate);
        const daysAgo = Math.floor((now.getTime() - commitDate.getTime()) / (1000 * 60 * 60 * 24));

        let timeStr = "Today";
        if (daysAgo === 1) timeStr = "Yesterday";
        else if (daysAgo > 1 && daysAgo < 7) timeStr = `${daysAgo} days ago`;
        else if (daysAgo >= 7 && daysAgo < 30) timeStr = `${Math.floor(daysAgo / 7)} weeks ago`;
        else timeStr = `${Math.floor(daysAgo / 30)} months ago`;

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
      console.log("PR found:", pr.repository.nameWithOwner, pr.title);
      const prDate = new Date(pr.mergedAt);
      const daysAgo = Math.floor((now.getTime() - prDate.getTime()) / (1000 * 60 * 60 * 24));

      let timeStr = "Today";
      if (daysAgo === 1) timeStr = "Yesterday";
      else if (daysAgo > 1 && daysAgo < 7) timeStr = `${daysAgo} days ago`;
      else if (daysAgo >= 7 && daysAgo < 30) timeStr = `${Math.floor(daysAgo / 7)} weeks ago`;
      else timeStr = `${Math.floor(daysAgo / 30)} months ago`;

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
      console.log("Starred repo:", repo.owner.login, repo.name);
      const starDate = new Date(edge.starredAt);
      const daysAgo = Math.floor((now.getTime() - starDate.getTime()) / (1000 * 60 * 60 * 24));

      let timeStr = "Today";
      if (daysAgo === 1) timeStr = "Yesterday";
      else if (daysAgo > 1 && daysAgo < 7) timeStr = `${daysAgo} days ago`;
      else if (daysAgo >= 7 && daysAgo < 30) timeStr = `${Math.floor(daysAgo / 7)} weeks ago`;
      else timeStr = `${Math.floor(daysAgo / 30)} months ago`;

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

    console.log("Final activities:", allActivities);
    stats.activities = allActivities;

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
    activities: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    // Try to get cached data first
    const cachedStats = getFromCache();
    if (cachedStats) {
      setStats({ ...cachedStats, loading: false });
      return;
    }

    // Fetch fresh data if cache expired
    const fetchGithubStats = async () => {
      try {
        const token = import.meta.env.VITE_GITHUB_TOKEN;
        
        if (!token) {
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
          throw new Error(result.errors[0].message || "GraphQL query failed");
        }

        const processedStats = processGithubData(result.data);
        processedStats.loading = false;

        // Save to cache
        saveToCache(processedStats);
        setStats(processedStats);
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
