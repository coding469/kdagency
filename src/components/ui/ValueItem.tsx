import type { LucideIcon } from 'lucide-react'

interface ValueItemProps {
  icon: LucideIcon
  title: string
  text: string
  variant?: 'row' | 'card'
}

export default function ValueItem({ icon: Icon, title, text, variant = 'row' }: ValueItemProps) {
  if (variant === 'card') {
    return (
      <div className="rounded-2xl border border-border-soft p-6">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-icon-bg text-brand-blue">
          <Icon size={22} />
        </div>
        <h3 className="mt-4 font-semibold text-ink">{title}</h3>
        <p className="mt-2 text-sm text-body">{text}</p>
      </div>
    )
  }

  return (
    <div className="flex gap-5 border-b border-border-soft py-6 last:border-b-0">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-icon-bg text-brand-blue">
        <Icon size={22} />
      </div>
      <div>
        <h3 className="font-semibold text-ink">{title}</h3>
        <p className="mt-1 text-sm text-body">{text}</p>
      </div>
    </div>
  )
}
