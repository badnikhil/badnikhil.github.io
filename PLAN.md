# Portfolio Website — Full Plan
## Nikhil Ludder (@badnikhil)
> "i count bits to save a clock"

---

## 0. Identity & Brand

| Attribute       | Value                                      |
|-----------------|--------------------------------------------|
| Name            | Nikhil Ludder                              |
| Handle          | @badnikhil (everywhere — the mark)         |
| Tagline         | *"i count bits to save a clock"*           |
| Core identity   | Flutter Engineer × Systems Programmer      |
| Email           | nikhilljatt@gmail.com                      |
| Location        | Ghaziabad, UP                              |
| GitHub          | github.com/badnikhil                       |
| LinkedIn        | linkedin.com/in/badnikhil                  |
| Live site       | badnikhil.github.io                        |

Nikhil's brand is a rare dual identity:
- **Flutter / Dart side** → production apps, GSoC 2026, API Dash, OAuth2 refactors, multi-protocol CLIs
- **Systems / Low-level side** → custom OS (UEFI, xHCI, TTY), CUDA kernels at 93% cuBLAS throughput, bindbc-cuda (D language), dcompute contributions

The portfolio must show **both sides without compromising either**. It should feel like the work of someone who writes code that compiles fast and runs faster.

---

## 1. Tech Stack

| Layer            | Choice                          | Reason                                                                   |
|------------------|---------------------------------|--------------------------------------------------------------------------|
| Framework        | **Next.js 14 (App Router)**     | Best-in-class perf, SSG, SEO, deploys anywhere                           |
| Language         | **TypeScript**                  | Type-safe, professional                                                  |
| Styling          | **Tailwind CSS v3**             | Utility-first, rapid, consistent                                         |
| Animations       | **Framer Motion v11**           | Production-grade scroll & interaction animations                         |
| 3D / Canvas      | **Three.js** (hero only)        | Subtle particle/mesh effect in hero, nothing gimmicky                    |
| Icons            | **Lucide React + custom SVGs**  | Clean, consistent                                                        |
| Fonts            | **Geist Sans + JetBrains Mono** | Modern display + readable monospace                                      |
| Deployment       | **Vercel** (or GitHub Pages)    | Zero-config, instant CDN, preview URLs                                   |
| Analytics        | **Vercel Analytics**            | Privacy-first, zero-config                                               |

---

## 2. Design System

### 2.1 Color Palette

```
Background           #0a0a0f    — near-black, slightly cold
Surface              #111118    — card backgrounds
Surface Raised       #16161f    — hover states, elevated cards
Border               #1e1e2e    — subtle separators
Border Bright        #2d2d42    — focused/hover borders

Text Primary         #e2e8f0    — headings
Text Secondary       #8892a4    — body, subtitles
Text Muted           #4a5568    — timestamps, labels

Flutter Accent       #00b4d8    — cyan-blue (Flutter's true color)
Flutter Glow         #0077b6    — deeper blue, glow shadow
Systems Accent       #39ff14    — neon green (terminal, metal)
Systems Glow         #1a7a00    — green glow shadow
CUDA / NVIDIA        #76b900    — NVIDIA green for GPU work
Gold                 #f59e0b    — achievements, highlights
Purple               #a78bfa    — open source, GSoC
```

### 2.2 Typography

```
Display (headings)    : Geist Sans, 700–900 weight
Body                  : Geist Sans, 400–500 weight
Monospace / Code      : JetBrains Mono, 400–600 weight

Type Scale:
  xs   : 12px
  sm   : 14px
  base : 16px
  lg   : 18px
  xl   : 20px
  2xl  : 24px
  3xl  : 30px
  4xl  : 36px
  5xl  : 48px
  6xl  : 60px
  7xl  : 72px (hero name)
```

### 2.3 Spacing & Layout

- Max content width: **1280px**
- Section padding: `py-24` (96px) desktop, `py-16` mobile
- Responsive breakpoints: `sm:640 md:768 lg:1024 xl:1280`
- 12-column grid for complex layouts

### 2.4 Signature Effects

| Effect                | Where Used                        | Description                                                      |
|-----------------------|-----------------------------------|------------------------------------------------------------------|
| Neon glow border      | Systems project cards on hover    | `box-shadow: 0 0 20px #39ff14` + border color transition        |
| Cyan shimmer          | Flutter project cards on hover    | Moving gradient shimmer overlay                                   |
| NVIDIA green pulse    | CUDA cards, CAMM project          | Pulsing `#76b900` border                                         |
| Typing cursor blink   | Hero terminal, code blocks        | CSS `blink` animation on `|` character                           |
| Parallax scroll       | Hero section                      | Background moves at 0.4x scroll speed                            |
| Fade-in-up            | All sections on scroll entry      | `opacity: 0→1` + `translateY: 20px→0` via Framer Motion        |
| Stagger children      | Project cards, skill items        | Each child animates 80ms after previous                          |
| Floating particles    | Hero background                   | Three.js: sparse, slow-moving dot field (not distracting)        |

---

## 3. Site Architecture

```
/                    — Main single-page portfolio
  #hero
  #about
  #experience
  #projects
  #opensource
  #skills
  #achievements
  #contact

/resume              — Redirect to PDF download (optional)
```

---

## 4. Section-by-Section Blueprint

---

### 4.1 Navbar

- **Sticky**, glass-morphism blur background on scroll
- Left: `badnikhil` in JetBrains Mono with blinking cursor
- Right: `[About] [Experience] [Projects] [Open Source] [Contact]`
- Active section highlight (scroll-spy)
- Mobile: hamburger → slide-in drawer
- CTA button: `Resume ↗` (subtle, bordered)

---

### 4.2 Hero Section

**Full viewport. The first impression. Make it count.**

```
Layout (vertical center):
  ┌────────────────────────────────────────────────────────┐
  │  [Three.js particle field — sparse, cold, dark]        │
  │                                                        │
  │  ┌─────────────────────────────────┐                  │
  │  │ $ whoami                        │  ← terminal card │
  │  │ > Nikhil Ludder                 │                  │
  │  │ > Flutter Eng. & Systems Dev    │                  │
  │  │ > GSoC 2026 · API Dash ▌       │                  │
  │  └─────────────────────────────────┘                  │
  │                                                        │
  │  NIKHIL                                                │
  │  LUDDER                          ← 72px, bold         │
  │                                                        │
  │  I ___________     ← typewriter cycling:               │
  │    "build Flutter apps for millions"                   │
  │    "write CUDA kernels at 93% cuBLAS"                 │
  │    "build operating systems from scratch"              │
  │    "count bits to save a clock"                        │
  │                                                        │
  │  [View Projects]  [Open Source Work]                   │
  │                                                        │
  │  ─── github.com/badnikhil ──────────────────────      │
  └────────────────────────────────────────────────────────┘
```

**Details:**
- Background: `#0a0a0f` with Three.js particle field (100–150 dots, very slow drift)
- Terminal card: `#111118` background, `#1e1e2e` border, green cursor blink, JetBrains Mono
- Name: Geist Sans, 900 weight, white, slight letter-spacing
- Typewriter: cycles every 3 seconds, smooth delete + retype
- Two CTA buttons: one filled (cyan), one ghost (white border)
- Bottom: scroll-down indicator (animated chevron)
- On mobile: terminal card stacks above name

---

### 4.3 Stats Bar (Between Hero and About)

A thin, high-contrast strip separating sections. Fast facts. No fluff.

```
┌──────────────────────────────────────────────────────────────────┐
│  GSoC 2026  ·  Google TRC  ·  450+ LeetCode  ·  5★ CodeChef    │
│  AWS Architect  ·  3K⭐ project contributor  ·  bindbc-cuda       │
└──────────────────────────────────────────────────────────────────┘
```

- Infinite horizontal marquee scroll (slow, elegant)
- Each stat separated by a `·` in muted color
- Background: `#111118`, 1px border top/bottom in `#1e1e2e`

---

### 4.4 About Section

**Two-column layout — humanizes the profile.**

```
LEFT COLUMN                        RIGHT COLUMN
─────────────────────              ──────────────────────────
Heading: "About"                   Two identity pills:
                                    ┌─────────────────────┐
"Computer Science student           │ 📱 Flutter Engineer  │  ← cyan border
at KIET (2024–2028),                │ Production apps,     │
building things that               │ GSoC, API Dash       │
actually work at scale.            └─────────────────────┘
                                    ┌─────────────────────┐
I live in two worlds:               │ ⚙️  Systems Dev      │  ← green border
Flutter for mobile,                 │ OS, CUDA, bindbc,   │
C/CUDA/Assembly for                 │ low-level magic      │
the metal underneath.              └─────────────────────┘

I don't chase trends.              Currently:
I write code that                  🟢 GSoC 2026 — API Dash
compiles fast, runs                   multi-protocol CLI
faster, and doesn't                🟢 bindbc-cuda → bindbc org
need a second                      🟢 Symmetry Autumn of Code
explanation."
                                   [GitHub Stats image embed]
```

- Left text: Geist Sans, relaxed line-height, feels like a dev wrote it (because one did)
- Right pills: hover animation, reveal tech stack inside
- "Currently" section: green blinking dot + item (like a live indicator)
- GitHub contribution graph: embedded as `<img>` from `github-readme-stats`

---

### 4.5 Experience Section

**Vertical timeline, alternating left-right on desktop, single-column on mobile.**

```
Timeline line (center) — gradient from cyan to green (Flutter → Systems journey)

  ●  Johar Basket                              Jun 2025 – Mar 2026
     Flutter Developer Intern · Remote
     ───────────────────────────────────────
     · Production e-commerce app on Play Store
     · GetX state management (MVVM-inspired)
     · Offline-first delivery partner app
     · 40% faster load via lazy loading + pagination
     · Removed 1000+ redundant MediaQuery calls
     [Flutter] [Dart] [GetX] [REST API]

  ●  Google Summer of Code 2026                May 2026 – Present
     API Dash · Open Source
     ───────────────────────────────────────
     · Selected after mentors personally approached me
     · Multi-protocol: WebSocket + MQTT + gRPC support
     · Developer-focused cross-platform CLI
     · Pure-Dart refactor of core packages
     · OAuth2 abstraction layer (GUI + CLI)
     · Protocol-agnostic modular architecture
     [Flutter] [Dart] [GSoC] [Open Source] [CLI]
```

- Timeline connector: vertical line with gradient
- Cards: `#111118` bg, hover lifts with subtle shadow
- Date badges: pill-shaped, monospace
- Tech tags: color-coded (Flutter = cyan, Systems = green)
- Animated: cards slide in from left/right on scroll

---

### 4.6 Projects Section

**Filterable grid. The meat of the portfolio.**

Filter tabs:
```
[All ▸]  [Flutter]  [Systems]  [GPU/CUDA]  [Open Source]
```

Project Card Layout:
```
┌──────────────────────────────────────────┐
│  [lang badge]              [GitHub ↗]    │
│                                          │
│  🚀 CAMM                                 │  ← emoji + name
│  CUDA Accelerated Matrix Multiplication  │  ← subtitle
│                                          │
│  "93% of NVIDIA cuBLAS throughput.       │  ← key stat (highlighted)
│   5 kernel implementations from naive   │
│   to register-level tiling."            │
│                                          │
│  [CUDA] [C++] [GPU] [Performance]        │  ← tech tags
└──────────────────────────────────────────┘
```

**All Projects:**

| # | Name | Category | Key Stat / Highlight | Links |
|---|------|----------|----------------------|-------|
| 1 | GSoC 2026 — API Dash | Flutter · Open Source | WebSocket + MQTT + gRPC + CLI · 3K⭐ repo | GitHub + Live |
| 2 | Johar Basket | Flutter | Production · Play Store · Real users | Play Store |
| 3 | CAMM | CUDA · Systems | 93% cuBLAS throughput · register-level opt | GitHub |
| 4 | MyOS | Systems | UEFI bootloader · xHCI USB 3.0 · TTY · Listed in Awesome OS | GitHub |
| 5 | bindbc-cuda | Systems · D Language | Created CUDA bindings from scratch · → bindbc org | GitHub |
| 6 | Silicon to Assembly | Open Source · Learning | 11 ⭐ · Transistors → Assembly roadmap | GitHub |
| 7 | dcompute contribution | Open Source · CUDA | Unified CUDA memory support · deprecated derelict-cuda migration | GitHub |
| 8 | gonelang | Systems | Compiler in C (in progress) | GitHub |
| 9 | calculator (Assembly) | Systems | x86-64 intel syntax | GitHub |
| 10 | Portfolio | Flutter | This website (previous Flutter Web version) | GitHub + Live |

**Card hover effects by category:**
- Flutter cards → cyan shimmer sweep
- Systems/CUDA cards → neon green glow border
- Open Source cards → purple shimmer

**Featured projects** (top 3, larger cards spanning full width):
1. GSoC 2026 — API Dash (most prestigious)
2. CAMM (most technically impressive GPU work)
3. MyOS (most impressive systems work)

---

### 4.7 Open Source Contributions Section

**This is the section most portfolios don't have. It sets Nikhil apart.**

Heading: `"Open Source. Not just PRs — real impact."`

```
┌─────────────────────────────────────────────────────────────────┐
│  🔷 API Dash — foss42/apidash           ★ 3,000+ stars         │
│  Flutter · Dart                                                  │
│  ─────────────────────────────────────────────────────────────  │
│                                                                  │
│  PR #681    Multi-value query param support                      │
│             47 commits · 3,506 additions · 72 files changed     │
│                                                                  │
│  PR #1637   Pure-Dart refactor + OAuth2 abstraction layer        │
│             OAuth2CallbackHandler · decoupled flutter_web_auth  │
│             110 additions · 321 deletions · 25 files            │
│                                                                  │
│  PR #1644   Migrate models to Freezed v3                         │
│                                                                  │
│  Also: GSoC 2026 selected contributor                            │
│                                                           [↗ GitHub]
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  🟢 bindbc-cuda — (soon: bindbc GitHub org)    [New Package]    │
│  D Language · CUDA                                               │
│  ─────────────────────────────────────────────────────────────  │
│                                                                  │
│  Created CUDA driver bindings for D language from scratch,      │
│  replacing the deprecated derelict-cuda package.                │
│  The maintainer of dcompute didn't even realize derelict-cuda   │
│  was deprecated until I pointed it out.                         │
│                                                                  │
│  Migration PR about to merge. bindbc-cuda will live in the      │
│  official bindbc GitHub organization.                            │
│                                                           [↗ GitHub]
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  ⚡ dcompute — Unified CUDA Memory Support      [Contribution]   │
│  D Language · CUDA                                               │
│  ─────────────────────────────────────────────────────────────  │
│                                                                  │
│  Implemented unified CUDA memory support in dcompute,           │
│  D language's GPU compute library. Led to the discovery and     │
│  migration of the deprecated CUDA bindings dependency.          │
│                                                           [↗ GitHub]
└─────────────────────────────────────────────────────────────────┘
```

- Each org/repo card has distinct color (API Dash = blue, bindbc = green/teal, dcompute = NVIDIA green)
- PR stats in monospace font (numbers feel technical and real)
- Quote from maintainer for bindbc-cuda story (paraphrased)
- Subtle "contribution graph" sparkline per project

---

### 4.8 Skills Section

**Organized by domain, not just a flat list.**

```
┌────────────────┐  ┌────────────────┐  ┌────────────────┐
│ 📱 Flutter &   │  │ ⚙️  Systems &   │  │ 🚀 GPU &       │
│    Mobile      │  │    Low-Level   │  │    Parallel    │
│                │  │                │  │                │
│ Flutter        │  │ C / C++        │  │ CUDA           │
│ Dart           │  │ Assembly x86   │  │ SIMD           │
│ GetX           │  │ OS Dev         │  │ cuBLAS         │
│ MVVM           │  │ Memory Mgmt    │  │ Shared Mem     │
│ REST APIs      │  │ UEFI / BIOS    │  │ Register Tiling│
│ Offline-first  │  │ PCI / xHCI     │  │ GPU Profiling  │
│ Responsive UI  │  │ Paging / MMU   │  │                │
└────────────────┘  └────────────────┘  └────────────────┘

┌────────────────┐  ┌────────────────┐  ┌────────────────┐
│ ☁️  Cloud &     │  │ 🛠️  Tools       │  │ 🧠 CS Core     │
│    Backend     │  │                │  │                │
│                │  │                │  │                │
│ AWS Architect  │  │ Git / GitHub   │  │ OS Internals   │
│ AWS Practit.   │  │ Linux          │  │ Computer Arch  │
│ Node.js        │  │ QEMU / GDB     │  │ Concurrency    │
│ Express        │  │ Android Studio │  │ Perf Analysis  │
│ MongoDB        │  │ VS Code        │  │ Compilers      │
│ REST / JSON    │  │ nvcc / NASM    │  │                │
└────────────────┘  └────────────────┘  └────────────────┘
```

- Domain cards with colored left border (Flutter = cyan, Systems = green, GPU = NVIDIA green, Cloud = gold)
- Skill items as pills, not progress bars (progress bars are subjective and often lie)
- Hover on domain card → subtle lift + glow

**Languages bar** (visual, honest):
```
C / C++    ████████████░░  Expert — OS, CUDA, kernels
Dart       ████████████░░  Expert — Flutter, CLI, GSoC
CUDA       █████████░░░░░  Advanced — 93% cuBLAS
Assembly   ████████░░░░░░  Advanced — x86-64 calculator, OS boot
D          █████░░░░░░░░░  Intermediate — dcompute, bindbc-cuda
```

---

### 4.9 Achievements Section

**Not bragging — proof of work. Each item earned.**

```
┌──────────────────────────────────────────────────────────────────┐
│  🏆 Achievements & Recognition                                    │
└──────────────────────────────────────────────────────────────────┘

┌────────────────────┐  ┌────────────────────┐  ┌─────────────────┐
│ 🎯                 │  │ 🔬                 │  │ ☁️              │
│ Google Summer      │  │ Google TPU         │  │ AWS Solutions   │
│ of Code 2026       │  │ Research Cloud     │  │ Architect       │
│                    │  │                    │  │ Associate       │
│ API Dash           │  │ Oct 2025           │  │ Certified       │
│ Selected by        │  │ Access to TPU      │  │                 │
│ mentors' invite    │  │ infrastructure     │  │ + Cloud         │
│                    │  │ for ML workloads   │  │ Practitioner    │
│ [Purple badge]     │  │ [Blue badge]       │  │ [Orange badge]  │
└────────────────────┘  └────────────────────┘  └─────────────────┘

┌────────────────────┐  ┌────────────────────┐  ┌─────────────────┐
│ ⭐                 │  │ 💻                 │  │ 🍂              │
│ CodeChef 5 Star    │  │ LeetCode           │  │ Symmetry        │
│                    │  │ 450+ Solved        │  │ Autumn of Code  │
│ Competitive        │  │                    │  │                 │
│ programming        │  │ Consistent         │  │ D Language      │
│ rating achieved    │  │ problem solver     │  │ Open Source     │
│                    │  │                    │  │                 │
│ [Gold badge]       │  │ [Yellow badge]     │  │ [Teal badge]    │
└────────────────────┘  └────────────────────┘  └─────────────────┘
```

- Cards: dark background, large emoji, bold title, description
- Hover: subtle scale-up + glow matching badge color
- AWS cards show badge icon (from Credly if available)
- GSoC card: mention "mentors personally approached me" — this is a huge deal

---

### 4.10 Contact Section

**Simple. Clean. No forms — just direct links.**

```
┌──────────────────────────────────────────────────────────────────┐
│                                                                    │
│   Let's build something                                            │
│   fast.                              ← 60px, bold                 │
│                                                                    │
│   Whether it's a Flutter app, a CUDA kernel,                      │
│   or an OS from scratch — let's talk.                             │
│                                                                    │
│   [📧  nikhilljatt@gmail.com  ⧉]    ← click to copy + toast     │
│   [🐙  github.com/badnikhil   ↗]    ← opens github              │
│   [💼  linkedin.com/in/badnikhil ↗] ← opens linkedin            │
│                                                                    │
│   Currently: 🟢 Open to internships & GSoC collaborations         │
│                                                                    │
└──────────────────────────────────────────────────────────────────┘
```

- Large heading splits across two lines for drama
- Email: click to copy with "Copied!" toast notification
- "Currently open to" status: honest, specific, auto-updated if needed
- No contact form (reduces friction, feels more personal)

---

### 4.11 Footer

```
┌──────────────────────────────────────────────────────────────────┐
│  badnikhil                [About] [Projects] [Contact]            │
│  i count bits to save a clock                                     │
│                                                                    │
│  Built with Next.js · Designed in the dark · 2026                │
│  View source on GitHub ↗                                           │
└──────────────────────────────────────────────────────────────────┘
```

---

## 5. File & Folder Structure

```
portfolio/
├── app/
│   ├── layout.tsx            # Root layout, fonts, metadata
│   ├── page.tsx              # Main page (all sections)
│   └── globals.css           # Tailwind base + custom CSS vars
│
├── components/
│   ├── sections/
│   │   ├── Hero.tsx          # 4.2 — Hero with terminal + typewriter
│   │   ├── StatsBanner.tsx   # 4.3 — Marquee stats bar
│   │   ├── About.tsx         # 4.4 — About + identity pills
│   │   ├── Experience.tsx    # 4.5 — Timeline
│   │   ├── Projects.tsx      # 4.6 — Filterable project grid
│   │   ├── OpenSource.tsx    # 4.7 — OS contributions
│   │   ├── Skills.tsx        # 4.8 — Domain skill cards
│   │   ├── Achievements.tsx  # 4.9 — Achievement cards
│   │   └── Contact.tsx       # 4.10 — Contact section
│   │
│   ├── ui/
│   │   ├── Navbar.tsx        # Sticky nav with scroll-spy
│   │   ├── Footer.tsx        # Footer
│   │   ├── TerminalWindow.tsx # Reusable terminal card component
│   │   ├── ProjectCard.tsx   # Individual project card
│   │   ├── AchievementCard.tsx
│   │   ├── SkillDomain.tsx   # Domain card with skill pills
│   │   ├── Badge.tsx         # Tech/language badge
│   │   ├── Timeline.tsx      # Timeline with connector line
│   │   └── Toast.tsx         # Copy-to-clipboard toast
│   │
│   └── effects/
│       ├── ParticleField.tsx  # Three.js particle background (hero)
│       ├── Typewriter.tsx     # Typewriter cycling effect
│       ├── ScrollReveal.tsx   # Framer Motion scroll animation wrapper
│       └── NeonGlow.tsx       # Reusable glow effect wrapper
│
├── data/
│   ├── projects.ts           # All project data
│   ├── experience.ts         # Work experience data
│   ├── skills.ts             # Skills organized by domain
│   ├── achievements.ts       # Achievement items
│   └── opensource.ts         # Open source contribution data
│
├── lib/
│   ├── utils.ts              # cn() and helpers
│   └── constants.ts          # Site config, social links
│
├── public/
│   ├── resume.pdf            # Downloadable resume
│   └── images/               # Profile photo, og image, etc.
│
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 6. Performance & SEO

| Goal                   | Implementation                                         |
|------------------------|--------------------------------------------------------|
| Fast initial load      | Next.js SSG, no client JS on static sections           |
| SEO                    | `metadata` export per page, og:image, Twitter card     |
| Open Graph image       | Custom og:image with name + tagline                    |
| Core Web Vitals        | Lazy load Three.js, `next/image` for all images        |
| Accessibility          | Semantic HTML, ARIA labels, keyboard navigation        |
| Mobile                 | All sections fully responsive, tested at 375px         |

---

## 7. Animations Master Plan

| Section        | Trigger         | Effect                                                    | Library       |
|----------------|-----------------|-----------------------------------------------------------|---------------|
| Hero           | Page load       | Particle field fades in → terminal types → name reveals   | Three.js + FM |
| Hero name      | After terminal  | Slide up + fade in                                        | Framer Motion |
| Typewriter     | Loop forever    | Type → pause → delete → next phrase                       | Custom        |
| Stats bar      | Scroll into view| Auto-scroll marquee (CSS animation)                       | CSS           |
| About          | Scroll          | Left col slides from left, right col from right           | Framer Motion |
| Experience     | Scroll          | Timeline line draws, cards fade in alternating sides      | Framer Motion |
| Project cards  | Scroll          | Stagger: each card fades in 80ms after previous           | Framer Motion |
| Project hover  | Hover           | Category-specific glow/shimmer effect                     | CSS + FM      |
| OS cards       | Scroll          | Stagger fade in                                           | Framer Motion |
| Skills         | Scroll          | Domain cards scale from 0.9 → 1 with stagger             | Framer Motion |
| Achievements   | Scroll          | Cards pop in with spring animation                        | Framer Motion |
| Contact email  | Click           | Pulse animation on click, toast slides in from bottom     | Framer Motion |

---

## 8. Mobile Strategy

- **Navbar:** Hamburger icon → slide-in drawer with all links
- **Hero:** Terminal card above name (stacked), typewriter same
- **Stats bar:** Still scrolls, slightly faster on mobile
- **About:** Single column
- **Experience:** Single column timeline (connector on left)
- **Projects:** Single column, filter tabs scroll horizontally
- **Open Source:** Single column cards
- **Skills:** 2-column domain grid
- **Achievements:** 2-column grid
- **Contact:** Stacked links, large tap targets

---

## 9. Content Tone

The copy throughout must match Nikhil's voice: **sharp, confident, no fluff**.

Examples:

| ❌ Generic                                  | ✅ Nikhil's Voice                                    |
|--------------------------------------------|------------------------------------------------------|
| "I am a passionate developer"              | "I build things that work at scale."                 |
| "Experienced in Flutter development"       | "Production Flutter apps. Real users. Play Store."   |
| "Knowledgeable about CUDA optimization"    | "93% of cuBLAS throughput. Register-level."          |
| "Contributed to open source projects"      | "I found a deprecated dependency the maintainer missed and built the replacement from scratch." |
| "Interested in systems programming"        | "I wrote a bootloader, then rewrote it for UEFI."   |

---

## 10. Implementation Roadmap

### Phase 1 — Foundation (Day 1)
- [ ] `npx create-next-app@latest` with TypeScript + Tailwind
- [ ] Install: Framer Motion, Three.js, Lucide React, Geist font
- [ ] Set up `tailwind.config.ts` with custom colors, fonts
- [ ] Create `globals.css` with CSS variables
- [ ] Set up `data/` files with all content
- [ ] Build `Navbar` + `Footer` components

### Phase 2 — Hero + About (Day 1–2)
- [ ] Build `ParticleField.tsx` (Three.js, lazy loaded)
- [ ] Build `Typewriter.tsx` component
- [ ] Build `TerminalWindow.tsx` component
- [ ] Assemble `Hero.tsx` section
- [ ] Build `StatsBanner.tsx` (CSS marquee)
- [ ] Build `About.tsx` with identity pills

### Phase 3 — Experience + Projects (Day 2–3)
- [ ] Build `Timeline.tsx` component
- [ ] Assemble `Experience.tsx`
- [ ] Build `ProjectCard.tsx` with hover effects
- [ ] Build filter logic (useState + AnimatePresence)
- [ ] Assemble `Projects.tsx` with all 10 projects

### Phase 4 — Open Source + Skills (Day 3)
- [ ] Build `OpenSource.tsx` — 3 org cards with PR stats
- [ ] Build `SkillDomain.tsx` + `Badge.tsx`
- [ ] Assemble `Skills.tsx`

### Phase 5 — Achievements + Contact + Polish (Day 4)
- [ ] Build `AchievementCard.tsx`
- [ ] Assemble `Achievements.tsx`
- [ ] Build `Contact.tsx` with copy-to-clipboard toast
- [ ] Add `ScrollReveal` wrapper to all sections
- [ ] Add page-level `metadata` for SEO + OG image

### Phase 6 — QA + Deploy (Day 4–5)
- [ ] Test all breakpoints (375, 768, 1024, 1280)
- [ ] Lighthouse audit (target: 90+ all categories)
- [ ] Deploy to Vercel + configure custom domain if available
- [ ] Test all links, GitHub links, Play Store link
- [ ] Add resume PDF to `/public`

---

## 11. Third-party Integrations

| Service              | Purpose                                    | Notes                              |
|----------------------|--------------------------------------------|------------------------------------|
| GitHub Stats API     | Contribution graph in About section        | `github-readme-stats` image embed  |
| Vercel Analytics     | Page views, no cookies                     | One-line setup                     |
| Credly (optional)    | AWS badge embeds                           | Only if Credly badge is available  |
| Google Fonts / Geist | Typography                                 | Via `next/font`                    |

---

## 12. Unique Touches That Make This Stand Out

1. **Terminal window in hero** — not a generic hero, but one that speaks to who Nikhil actually is
2. **Dual identity design** — very few portfolios show two distinct technical worlds this cleanly
3. **bindbc-cuda story** — this is genuinely rare and deserves its own callout paragraph
4. **"Mentors approached me" for GSoC** — subtle but powerful social proof
5. **PR stats are real numbers** — 3,506 additions, 47 commits — this is proof, not claims
6. **93% cuBLAS throughput** — a specific, verifiable achievement that stops readers cold
7. **"Awesome OS" listing** — external validation of MyOS project
8. **Copy tagline consistently** — "i count bits to save a clock" appears in hero, footer, meta description
9. **Performance of the site itself** — 90+ Lighthouse score is ironic tribute to a perf optimizer
10. **Dark mode only** — no toggle, no light mode. This is a statement.

---

*Ready to build. Say the word.*
