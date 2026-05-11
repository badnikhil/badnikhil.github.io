"use client";

import { useState } from "react";
import { SITE_CONFIG } from "@/lib/constants";
import ScrollReveal from "@/components/effects/ScrollReveal";
import { cn } from "@/lib/utils";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(SITE_CONFIG.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-32 bg-bg-deep relative overflow-hidden">
      {/* Decorative terminal glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-systems/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px bg-border-bright flex-1" />
            <span className="font-mono text-systems text-sm uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-systems animate-pulse" />
              /dev/tty1 · contact
            </span>
            <div className="h-px bg-border-bright flex-1" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-text-primary text-center mb-12 tracking-tight">
            Initiate <span className="text-gradient-systems">Handshake</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="bg-[#050508] border border-border-subtle rounded-xl overflow-hidden shadow-2xl shadow-systems/5 font-mono text-sm md:text-base">
            {/* Terminal Header */}
            <div className="bg-bg-raised/80 border-b border-border-subtle px-4 py-3 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              <span className="text-text-muted text-xs">root@badnikhil:~</span>
              <div className="w-12" /> {/* Spacer for centering */}
            </div>

            {/* Terminal Body */}
            <div className="p-6 space-y-6">
              {/* Command 1: Copy Email */}
              <div className="group">
                <button
                  onClick={copyEmail}
                  className="w-full text-left p-2 -m-2 rounded hover:bg-white/[0.03] transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-systems font-bold mt-0.5">❯</span>
                    <div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="text-text-primary">
                          <span className="text-purple">cat</span>{" "}
                          /etc/secrets/email.conf
                        </span>
                        <span className="text-text-muted text-xs opacity-0 group-hover:opacity-100 transition-opacity border border-border-subtle px-2 py-0.5 rounded bg-bg-surface">
                          [click to execute]
                        </span>
                      </div>
                      <div
                        className={cn(
                          "mt-2 transition-all duration-300 overflow-hidden",
                          copied ? "text-systems" : "text-text-secondary",
                        )}
                      >
                        {copied ? (
                          <div className="flex items-center gap-2">
                            <span>[OK] payload copied to clipboard</span>
                            <span className="animate-blink">_</span>
                          </div>
                        ) : (
                          <span>{SITE_CONFIG.email}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </button>
              </div>

              {/* Command 2: GitHub */}
              <div className="group">
                <a
                  href={SITE_CONFIG.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-2 -m-2 rounded hover:bg-white/[0.03] transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-systems font-bold mt-0.5">❯</span>
                    <div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="text-text-primary">
                          <span className="text-purple">ssh</span>{" "}
                          badnikhil@github.com
                        </span>
                        <span className="text-text-muted text-xs opacity-0 group-hover:opacity-100 transition-opacity border border-border-subtle px-2 py-0.5 rounded bg-bg-surface">
                          [click to execute]
                        </span>
                      </div>
                      <div className="mt-2 text-text-secondary group-hover:text-text-primary transition-colors">
                        Establishing secure connection to public repository...
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              {/* Command 3: LinkedIn */}
              <div className="group">
                <a
                  href={SITE_CONFIG.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-2 -m-2 rounded hover:bg-white/[0.03] transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-systems font-bold mt-0.5">❯</span>
                    <div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="text-text-primary">
                          <span className="text-purple">curl</span> -X GET
                          https://linkedin.com/in/badnikhil
                        </span>
                        <span className="text-text-muted text-xs opacity-0 group-hover:opacity-100 transition-opacity border border-border-subtle px-2 py-0.5 rounded bg-bg-surface">
                          [click to execute]
                        </span>
                      </div>
                      <div className="mt-2 text-text-secondary group-hover:text-text-primary transition-colors">
                        HTTP/2 200 OK
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              {/* Status Daemon */}
              <div className="pt-6 border-t border-border-subtle">
                <div className="flex items-start gap-3">
                  <span className="text-systems font-bold mt-0.5">❯</span>
                  <div>
                    <span className="text-text-primary">
                      <span className="text-purple">systemctl</span> status
                      opentowork.service
                    </span>
                    <div className="mt-3 text-sm">
                      <div className="flex items-start sm:items-center gap-2 sm:gap-3 flex-col sm:flex-row">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-systems animate-pulse" />
                          <span className="text-systems font-semibold">
                            active (running)
                          </span>
                        </div>
                        <span className="text-text-secondary hidden sm:inline">
                          —
                        </span>
                        <span className="text-text-secondary">
                          Open to internships & GSoC collaborations
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Blinking Cursor at the end */}
              <div className="flex items-center gap-3 pt-2">
                <span className="text-systems font-bold">❯</span>
                <span className="w-2.5 h-5 bg-systems animate-blink" />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
