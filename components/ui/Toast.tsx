'use client'

import { cn } from '@/lib/utils'

interface ToastProps {
  message: string
  visible: boolean
}

export default function Toast({ message, visible }: ToastProps) {
  return (
    <div
      className={cn(
        'fixed bottom-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-300',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none',
      )}
    >
      <div className="bg-bg-raised border border-flutter/40 text-flutter text-sm font-mono px-5 py-3 rounded-xl shadow-flutter flex items-center gap-2">
        <span className="text-systems">✓</span>
        {message}
      </div>
    </div>
  )
}
