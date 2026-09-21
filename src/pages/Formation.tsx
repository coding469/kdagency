import { Info } from 'lucide-react'
import PageBanner from '@/components/ui/PageBanner'
import Button from '@/components/ui/Button'
import { Chip } from '@/components/ui/Badge'
import FAQItem from '@/components/ui/FAQItem'
import ProcessSteps from '@/components/ui/ProcessSteps'
import CTASection from '@/components/ui/CTASection'
import { formations, registrationSteps, formationFaq } from '@/data/formations'

export default function Formation() {
  return (
    <>
      <PageBanner
        crumb="Formation"
        title="Apprenez le développement web par la pratique"
        description="Des formations pensées pour les débutants et les personnes en reconversion, avec des projets concrets et un accompagnement humain."
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold tracking-wider text-brand-blue uppercase">
            Les formations
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold sm:text-4xl">
            Choisissez la formation qui correspond à votre niveau
          </h2>
          <p className="mt-4 max-w-2xl text-body">
            Chaque formation précise le niveau requis, le programme, la durée et le format. De
            nouvelles formations pourront s'ajouter à cette liste.
          </p>

          <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {formations.map((f) => (
              <div key={f.id} className="rounded-2xl border border-border-soft bg-white p-8">
                <Chip>{f.level}</Chip>
                <h3 className="mt-4 text-2xl font-bold">{f.title}</h3>
                <p className="mt-3 text-body">{f.summary}</p>

                <div className="mt-6 grid grid-cols-3 gap-4 border-t border-border-soft pt-5 text-sm">
                  <div>
                    <p className="text-muted">Durée</p>
                    <p className="mt-1 font-semibold text-ink">{f.duration}</p>
                  </div>
                  <div>
                    <p className="text-muted">Format</p>
                    <p className="mt-1 font-semibold text-ink">{f.format}</p>
                  </div>
                  <div>
                    <p className="text-muted">Prix</p>
                    <p className="mt-1 font-semibold text-ink">{f.price}</p>
                  </div>
                </div>

                <p className="mt-6 text-sm font-semibold text-ink">Programme</p>
                <ul className="mt-3 space-y-2.5">
                  {f.program.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-body">
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
                      {item}
                    </li>
                  ))}
                </ul>

                <Button to="/contact" className="mt-8 w-full sm:w-auto">
                  S'inscrire ou poser une question
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-soft py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold tracking-wider text-brand-blue uppercase">
            Inscription
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Comment s'inscrire</h2>
          <div className="mt-14">
            <ProcessSteps steps={registrationSteps} columns={3} />
          </div>
          <div className="mt-12 flex items-start gap-3 rounded-2xl border border-border-soft bg-white px-6 py-4 text-sm text-body">
            <Info size={18} className="mt-0.5 shrink-0 text-brand-blue" />
            Le paiement en ligne n'est pas proposé pour le moment. Les modalités de règlement sont
            précisées au moment de l'inscription.
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_1.4fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold tracking-wider text-brand-blue uppercase">
              Questions fréquentes
            </p>
            <h2 className="mt-3 text-3xl font-bold">Vous avez une question ?</h2>
            <p className="mt-4 text-body">
              Si vous ne trouvez pas votre réponse ici, écrivez-nous : nous vous répondons avec
              plaisir.
            </p>
            <Button to="/contact" variant="secondary" className="mt-6">
              Nous contacter
            </Button>
          </div>
          <div className="rounded-2xl border border-border-soft bg-white px-6">
            {formationFaq.map((item, i) => (
              <FAQItem key={item.question} {...item} defaultOpen={i === 0} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
