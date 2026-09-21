import PageBanner from '@/components/ui/PageBanner'
import Button from '@/components/ui/Button'
import { Chip } from '@/components/ui/Badge'
import CTASection from '@/components/ui/CTASection'
import { services } from '@/data/services'

export default function Services() {
  return (
    <>
      <PageBanner
        crumb="Services"
        title="Des services digitaux adaptés à vos besoins"
        description="Sites web, applications, outils de gestion, formation et accompagnement : chaque prestation est ajustée à votre projet."
      />

      <section className="border-b border-border-soft py-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3 px-6 lg:px-8">
          <span className="text-sm font-medium text-muted">Aller à</span>
          {services.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="rounded-full border border-border-soft px-4 py-1.5 text-sm font-medium text-ink transition-colors hover:border-brand-blue hover:text-brand-blue"
            >
              {s.letter} · {s.shortLabel}
            </a>
          ))}
        </div>
      </section>

      <div>
        {services.map((service, i) => {
          return (
            <section
              key={service.id}
              id={service.id}
              className={`scroll-mt-24 py-20 ${i % 2 === 1 ? 'bg-surface-soft' : ''}`}
            >
              <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue text-lg font-bold text-white">
                    {service.letter}
                  </div>
                  <h2 className="mt-6 text-3xl font-bold">{service.title}</h2>
                  <p className="mt-4 text-body">{service.summary}</p>

                  <p className="mt-6 text-sm font-semibold text-ink">Pour qui ?</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {service.audience.map((a) => (
                      <Chip key={a}>{a}</Chip>
                    ))}
                  </div>

                  <Button to={service.ctaTo} className="mt-8">
                    {service.ctaLabel}
                  </Button>
                </div>

                <div className="rounded-2xl border border-border-soft bg-white p-8">
                  <h3 className="font-semibold text-ink">Problèmes que ce service peut résoudre</h3>
                  <ul className="mt-4 space-y-3">
                    {service.problems.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-sm text-body">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-cyan" />
                        {p}
                      </li>
                    ))}
                  </ul>

                  <hr className="my-6 border-border-soft" />

                  <h3 className="font-semibold text-ink">Prestations possibles</h3>
                  <ul className="mt-4 space-y-3">
                    {service.offers.map((o) => (
                      <li key={o} className="flex items-start gap-3 text-sm text-body">
                        <svg
                          viewBox="0 0 20 20"
                          className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 111.4-1.4L8 11.6l6.8-6.8a1 1 0 011.4 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {o}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-6 rounded-xl bg-surface-soft px-4 py-3 text-xs text-muted">
                    Prestations modulables : le périmètre exact est défini avec vous dans le devis.
                  </p>
                </div>
              </div>
            </section>
          )
        })}
      </div>

      <CTASection />
    </>
  )
}
