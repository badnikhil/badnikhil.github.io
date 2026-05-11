import { Achievement, AchievementColor } from '@/data/achievements'
import { cn } from '@/lib/utils'

interface AchievementCardProps {
  achievement: Achievement
}

const badgeBgMap: Record<AchievementColor, string> = {
  purple:  'bg-purple-dim border-purple/30',
  blue:    'bg-blue-400/10 border-blue-400/30',
  gold:    'bg-gold-dim border-gold/30',
  yellow:  'bg-yellow-400/10 border-yellow-400/30',
  teal:    'bg-teal-400/10 border-teal-400/30',
  systems: 'bg-systems-dim border-systems/30',
}

const subtitleColorMap: Record<AchievementColor, string> = {
  purple:  'text-purple',
  blue:    'text-blue-400',
  gold:    'text-gold',
  yellow:  'text-yellow-400',
  teal:    'text-teal-400',
  systems: 'text-systems',
}

const hoverBorderMap: Record<AchievementColor, string> = {
  purple:  'hover:border-purple/30',
  blue:    'hover:border-blue-400/30',
  gold:    'hover:border-gold/30',
  yellow:  'hover:border-yellow-400/30',
  teal:    'hover:border-teal-400/30',
  systems: 'hover:border-systems/30',
}

export default function AchievementCard({ achievement }: AchievementCardProps) {
  const colorBgClass      = badgeBgMap[achievement.color]
  const colorTextClass    = subtitleColorMap[achievement.color]
  const colorHoverBorder  = hoverBorderMap[achievement.color]

  return (
    <div
      className={cn(
        'bg-bg-surface border border-border-subtle rounded-xl p-6 transition-all duration-300 flex flex-col gap-4 h-full group',
        colorHoverBorder,
      )}
    >
      <div
        className={cn(
          'w-12 h-12 rounded-xl flex items-center justify-center text-2xl border',
          colorBgClass,
        )}
      >
        {achievement.emoji}
      </div>

      <div>
        <h3 className="text-text-primary font-semibold text-base leading-snug">
          {achievement.title}
        </h3>
        <p className={cn('text-xs font-mono mt-1', colorTextClass)}>
          {achievement.subtitle}
        </p>
        {achievement.date && (
          <p className="text-text-muted text-xs mt-0.5 font-mono">{achievement.date}</p>
        )}
      </div>

      <p className="text-text-secondary text-sm leading-relaxed flex-1">
        {achievement.description}
      </p>
    </div>
  )
}
