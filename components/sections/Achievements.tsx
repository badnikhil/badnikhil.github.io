'use client'

import { ACHIEVEMENTS } from '@/data/achievements'
import AchievementCard from '@/components/ui/AchievementCard'
import ScrollReveal from '@/components/effects/ScrollReveal'

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-bg-deep">
      <div className="max-w-content mx-auto px-6">

        <ScrollReveal>
          <span className="font-mono text-flutter text-sm">06. achievements</span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mt-2 mb-4">
            Proof of Work
          </h2>
          <p className="text-text-secondary max-w-xl">
            Not claims — receipts. Every item here has a story.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {ACHIEVEMENTS.map((achievement, i) => (
            <ScrollReveal key={achievement.id} delay={i * 0.08}>
              <AchievementCard achievement={achievement} />
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  )
}
