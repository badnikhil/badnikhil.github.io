export type SkillAccent = 'flutter' | 'systems' | 'cuda' | 'gold' | 'purple'

export interface SkillDomain {
  id:     string
  emoji:  string
  title:  string
  accent: SkillAccent
  skills: string[]
}

export interface Language {
  name:  string
  level: number   // filled blocks out of 14
  label: string
}

export const SKILL_DOMAINS: SkillDomain[] = [
  {
    id:     'flutter',
    emoji:  '🌐',
    title:  'Full Stack & Mobile',
    accent: 'flutter',
    skills: [
      'React / Next.js', 'Node.js', 'PostgreSQL', 'TypeScript', 'Flutter',
      'REST APIs', 'System Design', 'Responsive UI', 'WebSockets', 'Tailwind CSS',
    ],
  },
  {
    id:     'systems',
    emoji:  '⚙️',
    title:  'Systems & Low-Level',
    accent: 'systems',
    skills: [
      'C / C++', 'Assembly x86-64', 'OS Development', 'Memory Management',
      'Paging / MMU', 'UEFI / BIOS', 'PCI Enumeration', 'xHCI (USB 3.0)',
      'Interrupts / IDT', 'Syscalls',
    ],
  },
  {
    id:     'gpu',
    emoji:  '🚀',
    title:  'GPU & Parallel Computing',
    accent: 'cuda',
    skills: [
      'CUDA', 'Shared Memory', 'Register Tiling', 'Memory Coalescing',
      'cuBLAS', 'SIMD Concepts', 'GPU Profiling', 'Warp-level Optimizations',
    ],
  },
  {
    id:     'cloud',
    emoji:  '☁️',
    title:  'Cloud & Backend',
    accent: 'gold',
    skills: [
      'AWS Solutions Architect', 'AWS Cloud Practitioner',
      'Node.js', 'Express', 'MongoDB', 'REST / JSON',
    ],
  },
  {
    id:     'tools',
    emoji:  '🛠️',
    title:  'Tools & Environment',
    accent: 'purple',
    skills: [
      'Git / GitHub', 'Linux', 'QEMU / GDB', 'Android Studio',
      'VS Code', 'nvcc / NASM', 'Android Emulator',
    ],
  },
  {
    id:     'cs',
    emoji:  '🧠',
    title:  'CS Fundamentals',
    accent: 'flutter',
    skills: [
      'OS Internals', 'Computer Architecture', 'Concurrency',
      'Performance Analysis', 'Compilers (basics)', 'Data Structures', 'Algorithms',
    ],
  },
]

export const LANGUAGES: Language[] = [
  { name: 'C / C++',     level: 12, label: 'Expert — OS, CUDA, kernels' },
  { name: 'TS / Dart',   level: 12, label: 'Expert — Full Stack, CLI, GSoC' },
  { name: 'CUDA',        level: 9,  label: 'Advanced — Outperforms cuBLAS' },
  { name: 'Assembly',    level: 8,  label: 'Advanced — x86-64, OS bootloader' },
  { name: 'D Language',  level: 5,  label: 'Intermediate — bindbc-cuda, dcompute' },
]
