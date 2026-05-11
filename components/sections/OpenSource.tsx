"use client";

import {
  ExternalLink,
  Terminal,
  GitCommit,
  GitPullRequest,
} from "lucide-react";
import { OS_CONTRIBUTIONS } from "@/data/opensource";
import ScrollReveal from "@/components/effects/ScrollReveal";
import { cn } from "@/lib/utils";

export default function OpenSource() {
  const getFakeHash = (id: string) => {
    // Deterministic fake hashes for hydration safety
    if (id === "apidash") return "a7f83b19";
    if (id === "bindbc-cuda") return "c49e21df";
    if (id === "dcompute") return "f3a198c2";
    return "00000000";
  };

  return (
    <section
      id="opensource"
      className="py-24 bg-bg-deep font-mono selection:bg-systems/30 selection:text-systems"
    >
      <div className="max-w-content mx-auto px-6">
        {/* Terminal Header */}
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-6">
            <Terminal size={20} className="text-text-muted" />
            <div className="text-sm md:text-base break-all">
              <span className="text-systems font-bold">badnikhil@dev</span>
              <span className="text-text-primary">:</span>
              <span className="text-flutter">~/portfolio</span>
              <span className="text-text-primary">
                $ cat open_source_impact.txt
              </span>
            </div>
          </div>
          <div className="text-text-secondary text-sm md:text-base mb-12 pl-4 border-l-2 border-border-subtle space-y-1">
            <p className="text-text-muted"># Not just PRs — real impact.</p>
            <p className="text-text-muted">
              # Architectural changes, new packages, and finding deprecated
              dependencies.
            </p>
          </div>
        </ScrollReveal>

        {/* Git Log Output */}
        <div className="space-y-10">
          {OS_CONTRIBUTIONS.map((contrib, i) => {
            const isFlutter = contrib.accent === "flutter";
            const isCuda = contrib.accent === "cuda";
            const accentColor = isFlutter
              ? "text-flutter"
              : isCuda
                ? "text-cuda"
                : "text-systems";

            return (
              <ScrollReveal key={contrib.id} delay={i * 0.15}>
                <div className="bg-[#0a0a0f] border border-border-subtle rounded-md overflow-hidden relative group">
                  {/* Fake glowing edge on hover */}
                  <div
                    className={cn(
                      "absolute top-0 left-0 w-1 h-full transition-all duration-300",
                      isFlutter
                        ? "bg-flutter/50 group-hover:bg-flutter"
                        : isCuda
                          ? "bg-cuda/50 group-hover:bg-cuda"
                          : "bg-systems/50 group-hover:bg-systems",
                    )}
                  />

                  {/* Terminal Header Bar */}
                  <div className="bg-[#111118] border-b border-border-subtle px-4 py-2 flex flex-wrap items-center justify-between text-xs text-text-muted gap-2 pl-6">
                    <div className="flex items-center gap-2">
                      <GitCommit size={14} className={accentColor} />
                      <span className="text-gold">
                        commit {getFakeHash(contrib.id)}
                      </span>
                      <span>
                        (HEAD -&gt;{" "}
                        <span className={accentColor}>{contrib.repo}</span>)
                      </span>
                    </div>
                    {contrib.badge && (
                      <span
                        className={cn(
                          "px-2 py-0.5 bg-bg-deep border border-border-subtle rounded-sm",
                          accentColor,
                        )}
                      >
                        [{contrib.badge}]
                      </span>
                    )}
                  </div>

                  {/* Log Content */}
                  <div className="p-5 md:p-6 text-sm pl-6 md:pl-8">
                    {/* Author & Repo Meta */}
                    <div className="mb-6 space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-text-muted w-16">Author:</span>
                        <span className="text-text-primary font-bold">
                          Nikhil Ludder
                        </span>
                        <span className="text-text-secondary">
                          &lt;nikhilljatt@gmail.com&gt;
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-text-muted w-16">Target:</span>
                        <a
                          href={contrib.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(
                            "hover:underline flex items-center gap-1.5",
                            accentColor,
                          )}
                        >
                          {contrib.org}/{contrib.repo}{" "}
                          <ExternalLink size={12} />
                        </a>
                        {contrib.stars && (
                          <span className="text-gold text-xs ml-2">
                            ★ {contrib.stars}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Commit Message */}
                    <div className="text-text-primary space-y-4 ml-2 md:ml-4">
                      <h3 className="text-base font-bold whitespace-pre-wrap">
                        {contrib.headline}
                      </h3>
                      <p className="text-text-secondary leading-relaxed max-w-3xl whitespace-pre-wrap">
                        {contrib.description}
                      </p>

                      {contrib.highlight && (
                        <div className="mt-4 pl-4 border-l-2 border-gold/50 text-gold/80 italic">
                          &gt; &quot;{contrib.highlight}&quot;
                        </div>
                      )}
                    </div>

                    {/* PRs (Git Diff Stat style) */}
                    {contrib.prs && contrib.prs.length > 0 && (
                      <div className="mt-8 ml-2 md:ml-4 bg-[#111118] border border-border-subtle rounded p-4">
                        <div className="text-text-muted mb-3 text-xs flex items-center gap-2 border-b border-border-subtle pb-2">
                          <GitPullRequest size={14} />
                          <span>PULL_REQUESTS.STAT</span>
                        </div>
                        <div className="space-y-4">
                          {contrib.prs.map((pr) => (
                            <a
                              key={pr.number}
                              href={pr.url || contrib.repoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block group/pr"
                            >
                              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-1 md:gap-4 mb-1">
                                <span
                                  className={cn(
                                    "group-hover/pr:underline font-bold",
                                    accentColor,
                                  )}
                                >
                                  {pr.title}
                                </span>
                                <span className="text-text-muted text-xs">
                                  #{pr.number}
                                </span>
                              </div>
                              <div className="text-xs flex flex-wrap items-center gap-2">
                                {pr.stats.split("·").map((part, idx) => {
                                  const text = part.trim();
                                  const isAdd = text.includes("addition");
                                  const isDel = text.includes("deletion");
                                  const isFile = text.includes("file");

                                  return (
                                    <div
                                      key={idx}
                                      className="flex items-center gap-2"
                                    >
                                      {idx > 0 && (
                                        <span className="text-text-muted">
                                          |
                                        </span>
                                      )}
                                      <span
                                        className={cn(
                                          isAdd
                                            ? "text-systems"
                                            : isDel
                                              ? "text-red-400"
                                              : isFile
                                                ? "text-text-primary"
                                                : "text-text-secondary",
                                        )}
                                      >
                                        {isAdd ? "+" : isDel ? "-" : ""}
                                        {text
                                          .replace("additions", "")
                                          .replace("deletions", "")
                                          .trim()}
                                        {isAdd
                                          ? " additions"
                                          : isDel
                                            ? " deletions"
                                            : ""}
                                      </span>
                                    </div>
                                  );
                                })}
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Tags as Command Line Args */}
                    <div className="mt-8 flex flex-wrap gap-2 text-xs">
                      {contrib.tags.map((t) => (
                        <span
                          key={t}
                          className="text-text-muted bg-[#16161f] border border-border-subtle px-2 py-1 rounded"
                        >
                          --{t.toLowerCase().replace(/\s+/g, "-")}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* End of output cursor */}
        <ScrollReveal delay={0.4}>
          <div className="mt-8 flex items-center gap-2 text-text-muted text-sm">
            <span className="animate-blink text-systems text-xl font-bold">
              _
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
