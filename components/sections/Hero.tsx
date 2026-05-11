"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, ChevronDown, Terminal } from "lucide-react";
import ParticleField from "@/components/effects/ParticleField";
import Typewriter from "@/components/effects/Typewriter";
import { SITE_CONFIG, TYPEWRITER_PHRASES } from "@/lib/constants";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut", delay },
});

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg-deep px-4 md:px-6 pt-16">
      <ParticleField />
      <div className="absolute inset-0 bg-hero-gradient z-0 opacity-50" />
      <div className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px] opacity-20 z-0" />

      <div className="relative z-10 w-full max-w-4xl mx-auto">
        <motion.div {...fadeUp(0.1)}>
          <div className="w-full bg-[#0a0a0f] border border-[#1e1e2e] rounded-xl shadow-[0_0_60px_-15px_rgba(57,255,20,0.1)] overflow-hidden font-mono text-sm sm:text-base">
            {/* Terminal Header */}
            <div className="flex items-center px-4 py-3 bg-[#111118] border-b border-[#1e1e2e]">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="mx-auto flex items-center gap-2 text-[#8892a4] text-xs font-medium tracking-wider">
                <Terminal size={14} />
                tty1 — badnikhil@myos: ~
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-5 sm:p-8 space-y-7 text-text-primary">
              {/* Memory Dump / Boot Sequence Effect */}
              <div className="hidden sm:block text-text-muted text-xs leading-relaxed font-mono select-none">
                0x00007FF8 4E 49 4B 48 49 4C 20 4C 55 44 44 45 52 00 00 00
                |NIKHIL LUDDER...|
                <br />
                0x00007FF9 53 59 53 54 45 4D 53 20 45 4E 47 49 4E 45 45 52
                |SYSTEMS ENGINEER|
                <br />
                0x00007FFA 46 4C 55 54 54 45 52 20 44 45 56 45 4C 4F 50 45
                |FLUTTER DEVELOPE|
              </div>

              {/* Command 1: whoami */}
              <div>
                <p className="flex items-center flex-wrap gap-2">
                  <span className="text-systems font-semibold">
                    badnikhil@myos
                  </span>
                  <span className="text-text-muted">:</span>
                  <span className="text-flutter font-semibold">~</span>
                  <span className="text-text-primary">$</span>
                  <span className="text-text-primary">whoami</span>
                </p>
                <div className="mt-3">
                  <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-text-primary tracking-tight font-sans uppercase">
                    Nikhil Ludder
                  </h1>
                </div>
              </div>

              {/* Command 2: fetch-roles */}
              <motion.div {...fadeUp(0.3)}>
                <p className="flex items-center flex-wrap gap-2">
                  <span className="text-systems font-semibold">
                    badnikhil@myos
                  </span>
                  <span className="text-text-muted">:</span>
                  <span className="text-flutter font-semibold">~</span>
                  <span className="text-text-primary">$</span>
                  <span className="text-text-primary">
                    ./bin/status --current
                  </span>
                </p>
                <div className="mt-3 text-text-secondary leading-relaxed border-l-2 border-border-subtle pl-4">
                  <span className="text-systems">[+]</span> Kernel loaded
                  successfully.
                  <br />
                  <span className="text-systems">[+]</span> Found 1 active
                  contributor for GSoC 2026 (API Dash).
                  <br />
                  <span className="text-systems">[+]</span> Throughput optimized
                  to 93% cuBLAS.
                </div>
              </motion.div>

              {/* Command 3: execute mission */}
              <motion.div {...fadeUp(0.5)}>
                <p className="flex items-center flex-wrap gap-2">
                  <span className="text-systems font-semibold">
                    badnikhil@myos
                  </span>
                  <span className="text-text-muted">:</span>
                  <span className="text-flutter font-semibold">~</span>
                  <span className="text-text-primary">$</span>
                  <span className="text-text-primary">cat mission.log</span>
                </p>
                <p className="mt-3 text-text-secondary sm:text-lg">
                  I count bits to save a clock. I{" "}
                  <Typewriter phrases={TYPEWRITER_PHRASES} />
                </p>
              </motion.div>

              {/* Command 4: Navigation / Actions */}
              <motion.div {...fadeUp(0.7)}>
                <p className="flex items-center flex-wrap gap-2 mb-4">
                  <span className="text-systems font-semibold">
                    badnikhil@myos
                  </span>
                  <span className="text-text-muted">:</span>
                  <span className="text-flutter font-semibold">~</span>
                  <span className="text-text-primary">$</span>
                  <span className="text-text-primary">ls -la ./actions</span>
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#projects"
                    className="inline-flex items-center justify-center gap-2 bg-flutter/10 text-flutter border border-flutter/30 px-6 py-3 rounded-lg hover:bg-flutter hover:text-white hover:border-flutter transition-all duration-200"
                  >
                    <span className="text-xs opacity-70 font-mono tracking-widest hidden sm:inline-block">
                      drwxr-xr-x
                    </span>
                    ./view_projects
                  </a>
                  <a
                    href="#opensource"
                    className="inline-flex items-center justify-center gap-2 bg-systems/10 text-systems border border-systems/30 px-6 py-3 rounded-lg hover:bg-systems hover:text-bg-deep hover:border-systems transition-all duration-200"
                  >
                    <span className="text-xs opacity-70 font-mono tracking-widest hidden sm:inline-block">
                      drwxr-xr-x
                    </span>
                    ./open_source
                  </a>
                  <a
                    href={SITE_CONFIG.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 text-text-muted hover:text-text-primary transition-colors py-3 sm:ml-2"
                  >
                    <Github size={18} />
                    github.com/badnikhil
                    <ExternalLink size={14} />
                  </a>
                </div>
              </motion.div>

              {/* Prompt blinking */}
              <motion.div {...fadeUp(0.8)}>
                <p className="flex items-center flex-wrap gap-2 pt-2">
                  <span className="text-systems font-semibold">
                    badnikhil@myos
                  </span>
                  <span className="text-text-muted">:</span>
                  <span className="text-flutter font-semibold">~</span>
                  <span className="text-text-primary">$</span>
                  <span className="animate-blink text-text-primary font-bold">
                    _
                  </span>
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-text-muted hidden md:block"
      >
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
}
