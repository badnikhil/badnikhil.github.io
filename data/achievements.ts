export type AchievementColor = 'purple' | 'blue' | 'gold' | 'yellow' | 'teal' | 'systems'

export interface Achievement {
  id:          string
  emoji:       string
  title:       string
  subtitle:    string
  description: string
  date?:       string
  color:       AchievementColor
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    id:          'gsoc',
    emoji:       '🎯',
    title:       'Google Summer of Code 2026',
    subtitle:    'API Dash · Selected',
    description: 'Selected for GSoC 2026 under API Dash. The mentors reached out and invited me to participate — then I built multi-protocol support and a developer CLI.',
    color:       'purple',
  },
  {
    id:          'trc',
    emoji:       '🔬',
    title:       'Google TPU Research Cloud',
    subtitle:    'TRC Program',
    description: 'Selected for Google\'s TPU Research Cloud program, providing access to specialized TPU hardware for ML and high-performance compute workloads.',
    date:        'Oct 2025',
    color:       'blue',
  },
  {
    id:          'aws-architect',
    emoji:       '☁️',
    title:       'AWS Solutions Architect',
    subtitle:    'Associate · Certified',
    description: 'AWS Certified Solutions Architect — Associate. Cloud architecture design, scalability, fault tolerance, and infrastructure best practices.',
    color:       'gold',
  },
  {
    id:          'aws-practitioner',
    emoji:       '☁️',
    title:       'AWS Cloud Practitioner',
    subtitle:    'Certified',
    description: 'AWS Certified Cloud Practitioner. Foundational AWS cloud knowledge spanning compute, storage, networking, and security services.',
    color:       'gold',
  },
]
