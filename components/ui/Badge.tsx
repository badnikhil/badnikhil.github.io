import { cn } from "@/lib/utils";

interface BadgeProps {
  label: string;
  color?: "flutter" | "systems" | "cuda" | "gold" | "purple" | "default";
  className?: string;
}

const colorVariants: Record<NonNullable<BadgeProps["color"]>, string> = {
  flutter: "border-flutter/30 text-flutter bg-flutter/5",
  systems: "border-systems/30 text-systems bg-systems/5",
  cuda: "border-cuda/30 text-cuda bg-cuda/5",
  gold: "border-gold/30 text-gold bg-gold/5",
  purple: "border-purple/30 text-purple bg-purple/5",
  default: "border-border-subtle text-text-secondary bg-bg-raised",
};

export default function Badge({
  label,
  color = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-0.5 text-[11px] uppercase tracking-wider font-medium font-mono whitespace-nowrap border rounded-none transition-colors",
        colorVariants[color],
        className,
      )}
    >
      <span className="opacity-50 mr-1.5">[</span>
      {label}
      <span className="opacity-50 ml-1.5">]</span>
    </span>
  );
}
