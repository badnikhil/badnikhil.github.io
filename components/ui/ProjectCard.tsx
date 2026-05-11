"use client";

import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export default function ProjectCard({
  project,
  featured = false,
}: ProjectCardProps) {
  const hasFlutter =
    project.categories.includes("flutter") ||
    project.categories.includes("opensource");
  const hasGPU = project.categories.includes("gpu");

  // Default to systems/low-level theme
  let theme = {
    border: "border-systems/30",
    hoverBorder: "group-hover:border-systems",
    text: "text-systems",
    hoverText: "hover:text-systems",
    bgSubtle: "bg-systems/10",
    shadowHover: "hover:shadow-[4px_4px_0px_0px_#39ff14]",
    commandPrefix: "SYS",
  };

  if (hasFlutter) {
    theme = {
      border: "border-flutter/30",
      hoverBorder: "group-hover:border-flutter",
      text: "text-flutter",
      hoverText: "hover:text-flutter",
      bgSubtle: "bg-flutter/10",
      shadowHover: "hover:shadow-[4px_4px_0px_0px_#00b4d8]",
      commandPrefix: "FLT",
    };
  } else if (hasGPU) {
    theme = {
      border: "border-cuda/30",
      hoverBorder: "group-hover:border-cuda",
      text: "text-cuda",
      hoverText: "hover:text-cuda",
      bgSubtle: "bg-cuda/10",
      shadowHover: "hover:shadow-[4px_4px_0px_0px_#76b900]",
      commandPrefix: "GPU",
    };
  }

  return (
    <div
      className={cn(
        "group flex flex-col h-full bg-bg-deep border rounded-sm transition-all duration-200",
        featured
          ? "border-border-bright shadow-[2px_2px_0px_0px_#1e1e2e]"
          : "border-border-subtle",
        theme.hoverBorder,
        "hover:-translate-y-1 hover:-translate-x-1",
        theme.shadowHover,
      )}
    >
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-3 py-1.5 bg-bg-surface border-b border-border-subtle group-hover:border-border-bright transition-colors">
        <div className="flex items-center gap-2 text-[10px] sm:text-xs font-mono text-text-muted truncate">
          <span
            className={cn(
              "w-2 h-2 rounded-none shrink-0",
              theme.bgSubtle,
              theme.border,
              "border",
            )}
          ></span>
          <span className="truncate">
            root@badnikhil:~/src/{project.id}.bin
          </span>
        </div>
        <div className="flex gap-2 text-text-muted text-[10px] sm:text-xs font-mono tracking-widest shrink-0">
          <span className="group-hover:text-text-primary group-hover:animate-blink">
            _
          </span>
          <span>□</span>
          <span>×</span>
        </div>
      </div>

      {/* Terminal Content */}
      <div className="flex flex-col flex-1 p-5 md:p-6 font-mono relative overflow-hidden bg-[#030305]">
        {/* Subtle scanline overlay effect on hover */}
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-[0.03] transition-opacity bg-[linear-gradient(transparent_50%,#ffffff_50%)] bg-[length:100%_4px] z-0"></div>

        <div className="relative z-10 flex flex-col flex-1">
          {/* Header / Title */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
            <h3
              className={cn(
                "text-lg md:text-xl font-bold uppercase tracking-wider",
                theme.text,
              )}
            >
              <span className="mr-2 opacity-80">{project.emoji}</span>
              {project.name}
            </h3>

            {/* Links as terminal brackets */}
            <div className="flex flex-wrap gap-3 text-text-muted text-xs">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn("transition-colors", theme.hoverText)}
                >
                  [GH]
                </a>
              )}
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn("transition-colors", theme.hoverText)}
                >
                  [LIVE]
                </a>
              )}
              {project.links.playstore && (
                <a
                  href={project.links.playstore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn("transition-colors", theme.hoverText)}
                >
                  [PLAY]
                </a>
              )}
            </div>
          </div>

          {/* Subtitle execution command */}
          <div className="mb-4">
            <span className={theme.text}>$ </span>
            <span className="text-text-muted text-sm">cat description.txt</span>
            <p className="mt-1 text-text-secondary text-sm font-sans italic">
              {">"} {project.subtitle}
            </p>
          </div>

          {/* Keystat output block */}
          {project.keystat && (
            <div className="mb-5 text-xs">
              <span className={theme.text}>[{theme.commandPrefix}_EXEC]</span>{" "}
              <span className="text-text-primary bg-bg-raised px-2 py-1 border border-border-subtle inline-block mt-1 sm:mt-0">
                {project.keystat}
              </span>
            </div>
          )}

          {/* Description */}
          <p className="text-text-secondary text-sm leading-relaxed mb-6 font-sans">
            {project.description}
          </p>

          {/* Tags / Arguments */}
          <div className="mt-auto pt-4 flex flex-wrap gap-2 text-xs border-t border-border-subtle border-dashed">
            {project.tags.map((t) => (
              <span
                key={t}
                className={cn(
                  "px-1.5 py-0.5 border text-text-muted font-mono",
                  theme.border,
                )}
              >
                --{t.toLowerCase().replace(/\s+/g, "-")}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
