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
    role: "Full Stack Intern",
    company: "Johar Basket",
    period: "Jun 2025 – Mar 2026",
    location: "Remote",
    type: "Internship",
    bullets: [
      "Architected and deployed full-stack features for a production e-commerce platform on the Google Play Store, handling active daily users.",
      "Engineered scalable cross-platform mobile apps (Flutter) and designed robust backend REST APIs to support real-time data synchronization.",
      "Optimized grocery listing pages through aggressive lazy loading and backend database query tuning, reducing page load times by 50%.",
      "Built an offline-first Delivery Partner app utilizing local caching and background sync, ensuring 100% operational uptime in low-connectivity zones.",
      "Enhanced frontend rendering efficiency by centralizing responsive layout logic, eliminating 1,000+ redundant MediaQuery calls and boosting UI frame rates by 40%.",
      "Restructured application state management using GetX with MVVM architecture, decreasing memory footprint by 35% and accelerating new feature delivery.",
      "Led end-to-end feature pipelines from database schema design to frontend integration, improving overall system throughput by 60%."
    ],
    tags: [
      "Flutter",
      "Backend",
      "GetX",
      "REST API",
      "Full Stack",
      "Offline-first",
      "Optimization"
    ],
    accent: "flutter",
  },
];
