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
    id: "ldc",
    emoji: "🐉",
    org: "ldc-developers",
    repo: "ldc",
    repoUrl: "https://github.com/ldc-developers/ldc",
    headline: "Core compiler contributions to LDC (LLVM D Compiler)",
    description: "Contributed fixes and features to the DCompute component, addressing semantic compiler crashes, AST traversal bugs, and implementing native PTX embedding for seamless kernel injection.",
    prs: [
      {
        number: 5140,
        title: "Fix DCompute AST traversal and implement native PTX embedding",
        stats: "Open",
        url: "https://github.com/ldc-developers/ldc/pull/5140",
      },
      {
        number: 5142,
        title: "Skip host-side template instantiations during semantic analysis",
        stats: "Open",
        url: "https://github.com/ldc-developers/ldc/pull/5142",
      },
      {
        number: 5143,
        title: "Fix semantic compiler crash on indirect calls",
        stats: "Merged",
        url: "https://github.com/ldc-developers/ldc/pull/5143",
      }
    ],
    accent: "systems",
    tags: ["LLVM", "D Language", "Compiler", "PTX"],
  },
  {
    id: "apidash",
    emoji: "🔷",
    org: "foss42",
    repo: "apidash",
    repoUrl: "https://github.com/foss42/apidash",
    stars: "3,000+",
    headline: "Major architectural contributions across the entire codebase",
    description:
      "Multiple large PRs spanning core architecture refactoring, multi-value parameter support, pure-Dart decoupling, OAuth2 abstraction, and model migration. Also selected as GSoC 2026 contributor /",
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
    org: "bindbc",
    repo: "bindbc-cuda",
    repoUrl: "https://github.com/badnikhil/bindbc-cuda",
    headline: "Official Author & Maintainer of CUDA bindings for D",
    description:
      "While implementing unified memory, I needed cuMemPrefetchAsync, but found our bindings (derelict-cuda) were deprecated. I built bindbc-cuda from scratch as a modern replacement. Now I am the official author and maintainer.",
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
    headline: "Migrated CUDA Backend to BindBC & Unified Memory",
    description:
      "Worked on adding unified CUDA memory support (UnifiedBuffer!T) in dcompute. Following the creation of bindbc-cuda, I successfully migrated the entire dcompute CUDA driver backend from derelict to bindbc (PR #96).",
    accent: "cuda",
    tags: ["D Language", "CUDA", "GPU", "Unified Memory"],
  },
];
