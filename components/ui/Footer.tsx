import { Github, Linkedin } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'

const FOOTER_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Open Source', href: '#opensource' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-bg-surface border-t border-border-subtle">
      <div className="max-w-content mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <span className="font-mono text-text-primary font-medium">badnikhil</span>
            <p className="text-text-muted text-sm mt-1">i count bits to save a clock</p>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {FOOTER_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="text-text-secondary text-sm hover:text-text-primary transition-colors"
              >
                {label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href={SITE_CONFIG.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-text-muted hover:text-text-primary transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href={SITE_CONFIG.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-text-muted hover:text-text-primary transition-colors"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border-subtle flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-text-muted text-xs">Built with Next.js · Designed in the dark · 2026</p>
          <a
            href={SITE_CONFIG.github + '/portfolio'}
            className="text-text-muted text-xs hover:text-flutter transition-colors"
          >
            View source ↗
          </a>
        </div>
      </div>
    </footer>
  )
}
