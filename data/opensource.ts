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
      "Multiple large PRs spanning core architecture refactoring, CLI implementation, multi-value parameter support, WebSockets, pure-Dart decoupling, and model migrations. Also selected as GSoC 2026 contributor.",
    prs: [
      {
        number: 1660,
        title: "PoC : Apidash CLI implementation",
        stats: "Open",
        url: "https://github.com/foss42/apidash/pull/1660",
      },
      {
        number: 1694,
        title: "Ws (WebSockets Support)",
        stats: "Open",
        url: "https://github.com/foss42/apidash/pull/1694",
      },
      {
        number: 1692,
        title: "Requestmodel refactor",
        stats: "Open",
        url: "https://github.com/foss42/apidash/pull/1692",
      },
      {
        number: 1678,
        title: "sniff magic bytes for correct previewer",
        stats: "Open",
        url: "https://github.com/foss42/apidash/pull/1678",
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
      "Worked on adding unified CUDA memory support (UnifiedBuffer!T) in dcompute. Following the creation of bindbc-cuda, I successfully migrated the entire dcompute CUDA driver backend from derelict to bindbc. Also implemented Native PTX embeddings.",
    accent: "cuda",
    tags: ["D Language", "CUDA", "GPU", "Unified Memory"],
    prs: [
      {
        number: 96,
        title: "Migrate CUDA Driver Backend from Derelict to BindBC",
        stats: "Merged",
        url: "https://github.com/libmir/dcompute/pull/96",
      },
      {
        number: 101,
        title: "Add UnifiedBuffer!T for CUDA Unified Memory",
        stats: "Merged",
        url: "https://github.com/libmir/dcompute/pull/101",
      },
      {
        number: 102,
        title: "Kernel embeddings",
        stats: "Merged",
        url: "https://github.com/libmir/dcompute/pull/102",
      }
    ]
  },
  {
    id: "phobos",
    emoji: "📚",
    org: "dlang",
    repo: "phobos",
    repoUrl: "https://github.com/dlang/phobos",
    headline: "Contributions to the D standard library",
    description: "Contributed fixes to the D standard library.",
    prs: [
      {
        number: 8900,
        title: "fixed some typos",
        stats: "Merged",
        url: "https://github.com/dlang/phobos/pull/8900",
      }
    ],
    accent: "systems",
    tags: ["D Language", "Standard Library", "Documentation"],
  },
  {
    id: "awesome-os",
    emoji: "💻",
    org: "jubalh",
    repo: "awesome-os",
    repoUrl: "https://github.com/jubalh/awesome-os",
    headline: "Added myOS to the curated list of awesome OS projects",
    description: "Contributed to the awesome-os repository by adding my custom operating system project.",
    prs: [
      {
        number: 400,
        title: "Added myOS",
        stats: "Merged",
        url: "https://github.com/jubalh/awesome-os/pull/400",
      }
    ],
    accent: "systems",
    tags: ["OS Dev", "Awesome List", "Open Source"],
  },
];
