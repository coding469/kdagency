import type { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  className?: string
  dot?: boolean
}

export function Pill({ children, className = '', dot = false }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full bg-icon-bg px-4 py-1.5 text-sm font-medium text-brand-blue ${className}`}
    >
      {dot && <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan" />}
      {children}
    </span>
  )
}

export function Chip({ children, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-border-soft bg-surface-soft px-3.5 py-1.5 text-sm text-brand-navy ${className}`}
    >
      {children}
    </span>
  )
}

export function TagChip({ children, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full bg-surface-soft px-3 py-1 text-xs font-medium text-body ${className}`}
    >
      {children}
    </span>
  )
}
