import { type SkillDomain as SkillDomainType } from "@/data/skills";
import { cn } from "@/lib/utils";

const topBorderMap: Record<SkillDomainType["accent"], string> = {
  flutter: "bg-flutter",
  systems: "bg-systems",
  cuda: "bg-cuda",
  gold: "bg-gold",
  purple: "bg-purple",
};

const textMap: Record<SkillDomainType["accent"], string> = {
  flutter: "text-flutter",
  systems: "text-systems",
  cuda: "text-cuda",
  gold: "text-gold",
  purple: "text-purple",
};

const glowMap: Record<SkillDomainType["accent"], string> = {
  flutter: "hover:shadow-flutter hover:border-flutter/40",
  systems: "hover:shadow-systems hover:border-systems/40",
  cuda: "hover:shadow-cuda hover:border-cuda/40",
  gold: "hover:shadow-gold hover:border-gold/40",
  purple: "hover:shadow-purple hover:border-purple/40",
};

export default function SkillDomain({ domain }: { domain: SkillDomainType }) {
  // Generate a deterministic pseudo-hex ID based on the domain ID
  const hexId = Array.from(domain.id)
    .map((c) => c.charCodeAt(0).toString(16))
    .join("")
    .substring(0, 4)
    .toUpperCase()
    .padEnd(4, "0");

  return (
    <div
      className={cn(
        "relative flex flex-col bg-bg-surface border border-border-subtle transition-all duration-300 h-full group rounded-sm overflow-hidden",
        glowMap[domain.accent],
      )}
    >
      {/* Top Accent Bar */}
      <div className={cn("h-1 w-full", topBorderMap[domain.accent])} />

      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3 bg-bg-raised border-b border-border-subtle">
        <div className="flex items-center gap-3">
          <span className="text-lg opacity-80">{domain.emoji}</span>
          <h3
            className={cn(
              "font-mono text-sm font-semibold tracking-wide",
              textMap[domain.accent],
            )}
          >
            {domain.title}
          </h3>
        </div>
        <span className="font-mono text-[10px] text-text-muted opacity-50 group-hover:opacity-100 transition-opacity">
          0x{hexId}
        </span>
      </div>

      {/* Skills Grid */}
      <div className="p-5 flex-1 flex flex-col z-10">
        <div className="flex flex-wrap gap-2">
          {domain.skills.map((skill) => (
            <span
              key={skill}
              className="text-xs px-2.5 py-1 bg-bg-deep text-text-secondary border border-border-subtle font-mono transition-colors group-hover:border-border-bright rounded-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Decorative Corner / Scanline */}
      <div className="absolute bottom-0 right-0 p-2 opacity-10 pointer-events-none z-0">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="square"
        >
          <path
            d="M24 12 L12 24 M24 16 L16 24 M24 20 L20 24"
            className={textMap[domain.accent]}
          />
        </svg>
      </div>
    </div>
  );
}
