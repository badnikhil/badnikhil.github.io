import { cn } from "@/lib/utils";
import Badge from "@/components/ui/Badge";

type ExperienceAccent = "flutter" | "gold" | "systems";

export interface TimelineItem {
  id: string;
  type: string;
  period: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  bullets: string[];
  tags: string[];
  accent: ExperienceAccent;
}

interface TimelineProps {
  items: TimelineItem[];
}

const accentMap = {
  flutter: {
    text: "text-flutter",
    bg: "bg-flutter",
    border: "border-flutter",
    shadow:
      "shadow-[0_0_8px_rgba(0,180,216,0.6)] group-hover:shadow-[0_0_12px_rgba(0,180,216,0.9)]",
  },
  systems: {
    text: "text-systems",
    bg: "bg-systems",
    border: "border-systems",
    shadow:
      "shadow-[0_0_8px_rgba(57,255,20,0.6)] group-hover:shadow-[0_0_12px_rgba(57,255,20,0.9)]",
  },
  gold: {
    text: "text-gold",
    bg: "bg-gold",
    border: "border-gold",
    shadow:
      "shadow-[0_0_8px_rgba(245,158,11,0.6)] group-hover:shadow-[0_0_12px_rgba(245,158,11,0.9)]",
  },
};

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative py-8">
      {/* Centre Line (Grey) */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border-subtle md:-translate-x-1/2" />

      <div className="space-y-16">
        {items.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={item.id}
              className="relative flex flex-col md:flex-row items-start group"
            >
              {/* Connector Line (Desktop) */}
              <div
                className={cn(
                  "hidden md:block absolute top-[30px] w-12 h-px bg-border-subtle transition-colors group-hover:bg-border-bright",
                  isLeft ? "left-[calc(50%-3rem)]" : "left-1/2",
                )}
              />

              {/* Connector Line (Mobile) */}
              <div className="md:hidden absolute top-[30px] left-4 w-8 h-px bg-border-subtle transition-colors group-hover:bg-border-bright" />

              {/* Square Dot (System UI Style) */}
              <div
                className={cn(
                  "absolute left-4 md:left-1/2 top-[24px] w-3 h-3 bg-bg-deep border-2 md:-translate-x-1/2 -translate-x-1/2 z-10 transition-all duration-300",
                  accentMap[item.accent].border,
                  accentMap[item.accent].shadow,
                )}
              />

              {/* Card Container */}
              <div
                className={cn(
                  "w-full md:w-1/2 pl-12 md:pl-0",
                  isLeft ? "md:pr-12" : "md:pl-12 md:ml-auto",
                )}
              >
                {/* Card */}
                <div className="bg-bg-surface border border-border-subtle rounded-sm p-6 relative transition-colors duration-300 group-hover:border-border-bright">
                  {/* Top Accent Line */}
                  <div
                    className={cn(
                      "absolute top-0 left-0 right-0 h-[2px]",
                      accentMap[item.accent].bg,
                    )}
                  />

                  {/* Header */}
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                    <span className="text-xs font-mono text-text-secondary uppercase tracking-wider bg-bg-deep border border-border-subtle px-2 py-1">
                      {item.type}
                    </span>
                    <span className="text-xs text-text-muted font-mono">
                      [{item.period}]
                    </span>
                  </div>

                  {/* Role */}
                  <h3 className="text-text-primary font-mono font-semibold text-lg leading-tight mb-2">
                    <span className={cn("mr-2", accentMap[item.accent].text)}>
                      $
                    </span>
                    {item.role}
                  </h3>

                  {/* Company & Location */}
                  <div className="flex items-center gap-2 mb-6 font-mono text-sm">
                    <span className={accentMap[item.accent].text}>
                      {item.company}
                    </span>
                    <span className="text-text-muted">@</span>
                    <span className="text-text-muted">{item.location}</span>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-3 mb-6">
                    {item.bullets.map((b, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-sm text-text-secondary leading-relaxed"
                      >
                        <span
                          className={cn(
                            "mt-0.5 shrink-0 font-mono",
                            accentMap[item.accent].text,
                          )}
                        >
                          {">"}
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border-subtle/50">
                    {item.tags.map((tag) => (
                      <Badge
                        key={tag}
                        label={tag}
                        color={
                          item.accent === "gold"
                            ? "gold"
                            : item.accent === "systems"
                              ? "systems"
                              : "flutter"
                        }
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
