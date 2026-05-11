export interface PR {
  number: number;
  title: string;
  stats: string;
  url?: string;
}

export interface OSContribution {
  id: string;
  emoji: string;
  org: string;
  repo: string;
  repoUrl: string;
  stars?: string;
  headline: string;
  description: string;
  prs?: PR[];
  highlight?: string;
  accent: "flutter" | "systems" | "cuda";
  tags: string[];
  badge?: string;
}

export const OS_CONTRIBUTIONS: OSContribution[] = [
  {
    id: "apidash",
    emoji: "🔷",
    org: "foss42",
    repo: "apidash",
    repoUrl: "https://github.com/foss42/apidash",
    stars: "3,000+",
    headline: "Major architectural contributions across the entire codebase",
    description:
      "Multiple large PRs spanning core architecture refactoring, multi-value parameter support, pure-Dart decoupling, OAuth2 abstraction, and model migration. Also selected as GSoC 2026 contributor — mentors personally approached me.",
    prs: [
      {
        number: 681,
        title: "Multi-value query parameter support",
        stats: "47 commits · 3,506 additions · 72 files changed",
        url: "https://github.com/foss42/apidash/pull/681",
      },
      {
        number: 1637,
        title: "Pure-Dart refactor + OAuth2 abstraction layer",
        stats: "110 additions · 321 deletions · 25 files changed",
        url: "https://github.com/foss42/apidash/pull/1637",
      },
      {
        number: 1644,
        title: "Migrate models to Freezed v3",
        stats: "In review",
        url: "https://github.com/foss42/apidash/pull/1644",
      },
    ],
    accent: "flutter",
    tags: ["Flutter", "Dart", "Open Source", "GSoC 2026"],
    badge: "GSoC 2026",
  },
  {
    id: "bindbc-cuda",
    emoji: "🟢",
    org: "bindbc (incoming)",
    repo: "bindbc-cuda",
    repoUrl: "https://github.com/badnikhil",
    headline: "Created CUDA driver bindings for D from scratch",
    description:
      "While implementing unified memory, I needed cuMemPrefetchAsync (introduced in CUDA 8), but found our bindings (derelict-cuda) were stuck on CUDA 6.5 and deprecated. The maintainer didn't realize this until I brought it up. I then built bindbc-cuda from scratch as a modern replacement.",
    highlight:
      "so I din't realise we were still using derelict for the cuda bindings... It might be worth trying to create a cuda binding using bind-bc as the base — Nicholas Wilson",
    accent: "cuda",
    tags: ["D Language", "CUDA", "Bindings", "New Package", "bindbc"],
    badge: "New Package",
  },
  {
    id: "dcompute",
    emoji: "⚡",
    org: "libmir",
    repo: "dcompute",
    repoUrl: "https://github.com/libmir/dcompute",
    headline: "Unified CUDA memory support",
    description:
      "Worked on adding unified CUDA memory support in dcompute. Finding that cuMemPrefetchAsync was missing because the underlying derelict bindings were outdated sparked the creation of bindbc-cuda to bring the D ecosystem up to date.",
    accent: "cuda",
    tags: ["D Language", "CUDA", "GPU", "Unified Memory"],
  },
];
