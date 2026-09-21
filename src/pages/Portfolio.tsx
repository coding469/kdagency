import { useMemo, useState } from 'react'
import PageBanner from '@/components/ui/PageBanner'
import ProjectCard from '@/components/ProjectCard'
import CTASection from '@/components/ui/CTASection'
import { projects, projectFilters, type ProjectCategory } from '@/data/projects'

export default function Portfolio() {
  const [filter, setFilter] = useState<ProjectCategory | 'Tous'>('Tous')

  const filtered = useMemo(
    () => (filter === 'Tous' ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  )

  return (
    <>
      <PageBanner
        crumb="Portfolio"
        title="Des projets pour montrer notre façon de travailler"
        description="Sites web, applications et solutions de gestion. Les projets marqués « démonstration » sont des exemples conçus par l'agence, pas des réalisations clients."
      />

      <section className="border-b border-border-soft py-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {projectFilters.map((f) => {
              const count =
                f.value === 'Tous'
                  ? projects.length
                  : projects.filter((p) => p.category === f.value).length
              const active = filter === f.value
              return (
                <button
                  key={f.value}
                  type="button"
                  onClick={() => setFilter(f.value)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    active
                      ? 'bg-brand-blue text-white'
                      : 'border border-border-soft text-ink hover:border-brand-blue hover:text-brand-blue'
                  }`}
                >
                  {f.label} ({count})
                </button>
              )
            })}
          </div>
          <p className="text-sm text-muted">
            {filtered.length} projet{filtered.length > 1 ? 's' : ''} affiché
            {filtered.length > 1 ? 's' : ''}
          </p>
        </div>
      </section>

      <section className="bg-surface-soft py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {filtered.length === 0 ? (
            <p className="py-16 text-center text-body">
              Aucun projet dans cette catégorie pour le moment.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </>
  )
}
