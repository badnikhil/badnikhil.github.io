'use client'

import { useState, useEffect } from 'react'

interface TypewriterProps {
  phrases: string[]
  className?: string
}

export default function Typewriter({ phrases, className }: TypewriterProps) {
  const [displayed, setDisplayed] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const current = phrases[phraseIndex]

    if (isPaused) {
      const timeout = setTimeout(() => {
        setIsPaused(false)
        setIsDeleting(true)
      }, 2200)
      return () => clearTimeout(timeout)
    }

    if (!isDeleting) {
      if (charIndex < current.length) {
        const timeout = setTimeout(() => {
          setDisplayed(current.slice(0, charIndex + 1))
          setCharIndex((c) => c + 1)
        }, 75)
        return () => clearTimeout(timeout)
      } else {
        setIsPaused(true)
      }
    } else {
      if (charIndex > 0) {
        const timeout = setTimeout(() => {
          setDisplayed(current.slice(0, charIndex - 1))
          setCharIndex((c) => c - 1)
        }, 35)
        return () => clearTimeout(timeout)
      } else {
        setIsDeleting(false)
        setPhraseIndex((i) => (i + 1) % phrases.length)
      }
    }
  }, [charIndex, isDeleting, isPaused, phraseIndex, phrases])

  return (
    <span className={className}>
      {displayed}
      <span className="animate-blink text-systems">|</span>
    </span>
  )
}
