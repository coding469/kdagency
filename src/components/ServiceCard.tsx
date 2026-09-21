import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Service } from '@/data/services'

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon
  return (
    <div className="rounded-2xl border border-border-soft bg-white p-8 transition-shadow hover:shadow-lg hover:shadow-brand-navy/5">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-icon-bg text-brand-blue">
        <Icon size={24} />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-ink">{service.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-body">{service.summary}</p>
      <Link
        to={`/services#${service.id}`}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:gap-2.5 transition-[gap]"
      >
        En savoir plus
        <ArrowRight size={16} />
      </Link>
    </div>
  )
}
