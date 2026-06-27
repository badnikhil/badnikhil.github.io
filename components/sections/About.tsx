"use client";

import ScrollReveal from "@/components/effects/ScrollReveal";
import Badge from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

const activeDaemons = [
  { pid: "0x1A", text: "GSoC_2026::API_Dash_CLI", color: "text-flutter" },
  { pid: "0x1B", text: "bindbc-cuda::merge_to_org", color: "text-systems" },
  { pid: "0x1C", text: "Symmetry_AoC::D_ecosystem", color: "text-gold" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-bg-deep font-mono">
      <div className="max-w-content mx-auto px-6">
        <ScrollReveal>
          <div className="mb-12 border-b border-border-subtle pb-4">
            <span className="text-systems text-xs flex items-center gap-2">
              <span className="text-text-muted">badnikhil@sys:~$</span> cat
              about.txt
              <span className="animate-blink">_</span>
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mt-4 tracking-tight uppercase">
              System.Info
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
          {/* ── Left column (Standard Output) ── */}
          <ScrollReveal className="md:col-span-3" direction="left">
            <div className="bg-bg-surface border border-border-subtle p-1 rounded-none shadow-card">
              <div className="border border-border-subtle p-6 space-y-6 text-text-secondary leading-relaxed text-sm">
                <p>
                  <span className="text-systems font-bold">{">"}</span> Computer
                  Science student at KIET Group of Institutions (2024–2028),
                  building things that actually work at scale.
                </p>
                <p>
                  <span className="text-systems font-bold">{">"}</span> I live
                  in two worlds:{" "}
                  <span className="text-flutter font-medium bg-flutter/10 px-1">
                    Flutter for production mobile
                  </span>
                  , and{" "}
                  <span className="text-systems font-medium bg-systems/10 px-1">
                    C/CUDA/Assembly for the metal underneath
                  </span>
                  .
                </p>
                <p>
                  <span className="text-systems font-bold">{">"}</span> I
                  don&apos;t chase trends. I write code that compiles fast, runs
                  faster, and doesn&apos;t need a second explanation.
                </p>
                <p>
                  <span className="text-systems font-bold">{">"}</span>{" "}
                  Currently focused on{" "}
                  <span className="text-gold font-medium bg-gold/10 px-1">
                    GSoC 2026
                  </span>
                  , adding multi-protocol support to API Dash — because
                  WebSocket, MQTT, and gRPC deserve first-class treatment in a
                  dev tool.
                </p>
              </div>
            </div>

            {/* GitHub Stats Block */}
            <div className="mt-8 border border-border-subtle p-1 bg-bg-surface rounded-none shadow-card">
              <div className="border border-border-subtle flex items-center justify-center bg-bg-deep p-2 relative">
                <span className="absolute top-2 left-2 text-[10px] text-text-muted">
                  GITHUB_METRICS_DUMP
                </span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://github-readme-stats-sigma-five.vercel.app/api?username=badnikhil&show_icons=true&theme=dark&bg_color=0a0a0f&border_color=1e1e2e&title_color=00b4d8&icon_color=39ff14&text_color=8892a4&hide_border=true&include_all_commits=true"
                  alt="GitHub Stats"
                  className="w-full max-w-md mt-6"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* ── Right column (Process Blocks) ── */}
          <ScrollReveal
            className="md:col-span-2 space-y-6"
            direction="right"
            delay={0.2}
          >
            {/* Thread 1: Flutter */}
            <div className="bg-bg-surface border border-border-subtle hover:border-flutter transition-colors duration-300 rounded-none group cursor-default shadow-card">
              <div className="border-b border-border-subtle bg-bg-raised px-4 py-2 flex justify-between items-center">
                <span className="text-xs text-text-muted">PID: 1024</span>
                <span className="text-xs text-flutter font-semibold uppercase tracking-wider">
                  UI_THREAD
                </span>
              </div>
              <div className="p-5">
                <p className="text-text-secondary text-sm leading-relaxed">
                  Production apps on Play Store. GSoC 2026. API Dash
                  contributions. Real users, real scale.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Flutter", "Dart", "GetX", "REST API"].map((t) => (
                    <Badge
                      key={t}
                      label={t}
                      color="flutter"
                      className="rounded-none border-dashed"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Thread 2: Systems */}
            <div className="bg-bg-surface border border-border-subtle hover:border-systems transition-colors duration-300 rounded-none group cursor-default shadow-card">
              <div className="border-b border-border-subtle bg-bg-raised px-4 py-2 flex justify-between items-center">
                <span className="text-xs text-text-muted">PID: 0x00</span>
                <span className="text-xs text-systems font-semibold uppercase tracking-wider">
                  KERNEL_MODE
                </span>
              </div>
              <div className="p-5">
                <p className="text-text-secondary text-sm leading-relaxed">
                  Custom OS from BIOS to UEFI. CUDA kernels at 93% cuBLAS.
                  bindbc-cuda creator.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["C/C++", "CUDA", "Assembly", "OS Dev"].map((t) => (
                    <Badge
                      key={t}
                      label={t}
                      color="systems"
                      className="rounded-none border-dashed"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Active Daemons */}
            <div className="bg-bg-surface border border-border-subtle rounded-none shadow-card">
              <div className="border-b border-border-subtle bg-bg-raised px-4 py-2">
                <span className="text-xs text-text-muted uppercase tracking-widest">
                  Active_Daemons
                </span>
              </div>
              <div className="p-4 space-y-3">
                {activeDaemons.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm group">
                    <span className="text-text-muted text-xs mt-0.5">
                      [{item.pid}]
                    </span>
                    <span
                      className={cn(
                        "text-text-secondary transition-colors cursor-default",
                        item.color.replace("text-", "hover:text-"),
                      )}
                    >
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
