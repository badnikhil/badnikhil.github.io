import { STATS_MARQUEE } from '@/lib/constants'

export default function StatsBanner() {
  return (
    <div className="bg-bg-surface border-y border-border-subtle py-4 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...STATS_MARQUEE, ...STATS_MARQUEE].map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 mx-6 text-sm font-mono text-text-secondary"
          >
            <span className="text-flutter/60">·</span>
            {item.label}
          </span>
        ))}
      </div>
    </div>
  )
}
