export type ProjectCategory = "flutter" | "systems" | "gpu" | "opensource";

export interface Project {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  keystat?: string;
  emoji: string;
  categories: ProjectCategory[];
  tags: string[];
  links: {
    github?: string;
    live?: string;
    playstore?: string;
  };
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: "gsoc-apidash",
    name: "GSoC 2026 — API Dash",
    subtitle: "Google Summer of Code · foss42/apidash",
    description:
      "Multi-protocol support (WebSocket, MQTT, gRPC) and a developer CLI for API Dash. Includes a pure-Dart refactor of core packages, OAuth2 abstraction layer, and a protocol-agnostic modular architecture.",
    keystat: "3K+ star repo",
    emoji: "⚡",
    categories: ["flutter", "opensource"],
    tags: [
      "Flutter",
      "Dart",
      "GSoC",
      "CLI",
      "WebSocket",
      "gRPC",
      "MQTT",
      "OAuth2",
    ],
    links: {
      github: "https://github.com/foss42/apidash",
      live: "https://apidash.dev",
    },
    featured: true,
  },
  {
    id: "camm",
    name: "CAMM",
    subtitle: "CUDA Accelerated Matrix Multiplication",
    description:
      "Five kernel implementations from naive to register-level tiling with size-specialized variants. Coalesced memory access, shared memory tiles, vectorized loads, warp-level and register-level optimizations.",
    keystat: "93% of NVIDIA cuBLAS throughput",
    emoji: "🚀",
    categories: ["gpu", "systems"],
    tags: ["CUDA", "C++", "GPU", "cuBLAS", "Performance", "Register Tiling"],
    links: {
      github: "https://github.com/badnikhil/CAMM",
    },
    featured: true,
  },
  {
    id: "myos",
    name: "MyOS",
    subtitle: "Custom Operating System from Scratch",
    description:
      "UEFI bootloader ported from BIOS, 64-bit protected mode, TTY layer for keyboard interrupts, ACPI support for modern USB, PCI enumeration, and a full xHCI (USB 3.0) driver. Virtual-to-physical memory mapping and frame allocator.",
    keystat: "Listed in the Awesome OS repository",
    emoji: "🖥️",
    categories: ["systems"],
    tags: ["C", "Assembly", "UEFI", "xHCI", "OS Dev", "PCI", "ACPI", "TTY"],
    links: {
      github: "https://github.com/badnikhil/MyOS",
    },
    featured: true,
  },
  {
    id: "johar-basket",
    name: "Johar Basket",
    subtitle: "Production E-commerce App · Play Store",
    description:
      "Full-scale mobile commerce platform with product browsing, cart, orders, and delivery flows. GetX state management, offline-first delivery partner app, 40% faster load times via lazy loading and pagination.",
    keystat: "Live on Google Play Store · Real users",
    emoji: "🛒",
    categories: ["flutter"],
    tags: ["Flutter", "Dart", "GetX", "REST API", "Offline-first", "MVVM"],
    links: {
      playstore:
        "https://play.google.com/store/apps/details?id=com.joharbasket.app",
    },
    featured: false,
  },
  {
    id: "bindbc-cuda",
    name: "bindbc-cuda",
    subtitle: "CUDA Driver Bindings for D Language",
    description:
      "Created modern CUDA driver API bindings for D from scratch, replacing the deprecated derelict-cuda package. The maintainer didn't know the dependency was deprecated — I found it, reported it, and built the replacement.",
    keystat: "Joining the official bindbc GitHub org",
    emoji: "🔗",
    categories: ["systems", "opensource"],
    tags: ["D Language", "CUDA", "Open Source", "Bindings", "bindbc"],
    links: {
      github: "https://github.com/badnikhil",
    },
    featured: false,
  },
  {
    id: "silicon-to-assembly",
    name: "Silicon to Assembly",
    subtitle: "CPU Fundamentals Roadmap",
    description:
      "Structured learning roadmap from transistors and logic gates all the way to assembly instructions. Designed to build intuition around CPU architecture and low-level computation.",
    keystat: "11 ⭐ on GitHub",
    emoji: "📚",
    categories: ["systems", "opensource"],
    tags: ["Assembly", "CPU Architecture", "x86", "Learning Resource"],
    links: {
      github: "https://github.com/badnikhil/silicon-to-assembly",
    },
    featured: false,
  },
  {
    id: "mysyscaller",
    name: "mysyscaller",
    subtitle: "Batch Syscall Script Executor",
    description:
      "A low-level C and Assembly utility for executing batch system calls from a script file directly against the kernel.",
    emoji: "⚙️",
    categories: ["systems"],
    tags: ["C", "Assembly", "Makefile", "Syscalls", "Kernel"],
    links: {
      github: "https://github.com/badnikhil/mysyscaller",
    },
    featured: false,
  },
  {
    id: "ppm-image-viewer",
    name: "PPM Image Viewer",
    subtitle: "C++ / SFML Format Viewer",
    description:
      "A native viewer for the Portable Pixmap (PPM) P3 and P6 formats. Custom parser and rendering pipeline utilizing SFML for graphics output.",
    emoji: "🖼️",
    categories: ["systems"],
    tags: ["C++", "SFML", "CMake", "Graphics"],
    links: {
      github: "https://github.com/badnikhil/ppm-image-viewer",
    },
    featured: false,
  },
  {
    id: "flappy-bird",
    name: "Flappy Bird Clone",
    subtitle: "C++ / SFML Game",
    description:
      "A complete clone of the classic Flappy Bird game built entirely in C++ using the SFML multimedia library.",
    emoji: "🐦",
    categories: ["systems"],
    tags: ["C++", "SFML", "Game Dev"],
    links: {
      github: "https://github.com/badnikhil/flappy-bird",
    },
    featured: false,
  },
  {
    id: "calculator-asm",
    name: "Calculator in Assembly",
    subtitle: "x86-64 Intel Syntax",
    description:
      "A fully functional calculator built in x86-64 assembly using Intel syntax. Pure low-level arithmetic — no libc, no runtime, no shortcuts.",
    emoji: "🧮",
    categories: ["systems"],
    tags: ["Assembly", "x86-64", "Low-level", "Intel Syntax"],
    links: {
      github: "https://github.com/badnikhil/calculator",
    },
    featured: false,
  },
  {
    id: "random-walk",
    name: "Random Walk",
    subtitle: "C++ Simulation",
    description:
      "Visual random walk simulation in C++. Built it because it seemed cool — because it is.",
    emoji: "🎲",
    categories: ["systems"],
    tags: ["C++", "Simulation", "Math"],
    links: {
      github: "https://github.com/badnikhil/random-walk",
    },
    featured: false,
  },
];
