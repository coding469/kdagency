import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import CircuitLines from './CircuitLines'

interface PageBannerProps {
  crumb: string
  title: string
  description: string
  children?: ReactNode
}

export default function PageBanner({ crumb, title, description, children }: PageBannerProps) {
  return (
    <section className="border-b border-border-soft bg-surface-soft">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
          <div>
            <nav className="mb-4 flex items-center gap-2 text-sm">
              <Link to="/" className="font-medium text-brand-blue hover:underline">
                Accueil
              </Link>
              <span className="text-muted">/</span>
              <span className="text-muted">{crumb}</span>
            </nav>
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
            <p className="mt-5 max-w-2xl text-lg text-body">{description}</p>
          </div>
          <CircuitLines className="hidden h-24 w-80 lg:block" />
        </div>
        {children}
      </div>
    </section>
  )
}
