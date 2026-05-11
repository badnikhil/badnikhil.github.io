export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  location: string;
  type: string;
  bullets: string[];
  tags: string[];
  accent: "flutter" | "gold" | "systems";
}

export const EXPERIENCES: Experience[] = [
  {
    id: "doordripp",
    role: "Chief Technology Officer",
    company: "Doordripp",
    companyUrl: "https://doordripp.com",
    period: "Jan 2026 – Present",
    location: "Ghaziabad, UP · Startup",
    type: "Co-Founder & CTO",
    bullets: [
      "Co-founder and CTO of Doordripp — a government-registered, VC-backed fashion delivery startup focused on delivering curated clothing and accessories in minutes.",
      "Led technical strategy and execution as CTO for the mobile app, customer website, and backend services — owning architecture, stack selection, scalability, security, and deployment.",
      "Defined and implemented the core system architecture across mobile, web, order management, and real-time delivery tracking while maintaining strong technical ownership of the Flutter app codebase.",
      "Built the customer-facing mobile application in Flutter and established the engineering infrastructure: CI/CD, state management (GetX), REST API integration, and Play Store release pipeline.",
      "Designed and supervised backend API integration, order flow orchestration, delivery routing, and real-time GPS tracking features.",
      "Aligned business, design, and engineering priorities in a two-person founding team to ship fast, iterate on product-market fit, and deliver end-to-end technical leadership.",
    ],
    tags: [
      "Flutter",
      "Dart",
      "GetX",
      "REST API",
      "Startup",
      "CTO",
      "Play Store",
      "Android",
    ],
    accent: "flutter",
  },
  {
    id: "gsoc-2026",
    role: "Google Summer of Code Contributor",
    company: "API Dash — foss42",
    companyUrl: "https://github.com/foss42/apidash",
    period: "May 2026 – Present",
    location: "Open Source · Remote",
    type: "GSoC 2026",
    bullets: [
      "Selected for GSoC 2026 under API Dash — mentors personally reached out and invited me to participate.",
      "Developing multi-protocol support (WebSocket, MQTT, gRPC) and a developer-focused cross-platform CLI.",
      "Designed a modular, protocol-agnostic architecture to enable real-time and streaming communication within a unified platform.",
      "Executed a pure-Dart refactor of core packages (apidash_core, better_networking, genai), removing all Flutter SDK dependencies from business logic.",
      "Built an OAuth2 abstraction layer with a callback-based design — supporting both GUI browser auth and headless CLI terminal auth flows.",
      "Exploring low-latency communication patterns, protocol abstraction, and system-level design trade-offs.",
      "Collaborating with mentors through structured milestones, code reviews, and evaluation cycles.",
    ],
    tags: [
      "Flutter",
      "Dart",
      "GSoC",
      "CLI",
      "Open Source",
      "WebSocket",
      "gRPC",
      "OAuth2",
      "MQTT",
    ],
    accent: "gold",
  },
  {
    id: "johar-basket",
    role: "Flutter Developer Intern",
    company: "Johar Basket",
    period: "Jun 2025 – Mar 2026",
    location: "Remote",
    type: "Internship",
    bullets: [
      "Worked on a production-grade e-commerce Flutter application deployed on Google Play Store, serving real users.",
      "Developed and maintained cross-platform Flutter apps (Android & iOS) with scalable, reusable widget-based UI components.",
      "Integrated REST APIs with robust data synchronization, error handling, and asynchronous workflows.",
      "Implemented state management using GetX, following clean separation of UI, logic, and data layers (MVVM-inspired).",
      "Built offline-first functionality for the Delivery Partner app using local caching to support low-network environments.",
      "Optimized grocery listing pages using lazy loading and pagination, reducing load times by 40%.",
      "Improved UI performance by centralizing responsive logic, eliminating 1000+ redundant MediaQuery calls.",
      "Collaborated using Git-based workflows, participating in code reviews and iterative feature development.",
    ],
    tags: [
      "Flutter",
      "Dart",
      "GetX",
      "REST API",
      "MVVM",
      "Offline-first",
      "Android",
      "iOS",
    ],
    accent: "flutter",
  },
];
