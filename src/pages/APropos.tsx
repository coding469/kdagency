import {
  Briefcase,
  Eye,
  Lightbulb,
  Shield,
  Sparkles,
  Target,
  Handshake,
  Users2,
  Repeat,
  CheckCircle2,
} from 'lucide-react'
import Button from '@/components/ui/Button'
import PageBanner from '@/components/ui/PageBanner'
import ValueItem from '@/components/ui/ValueItem'
import { Chip } from '@/components/ui/Badge'
import CTASection from '@/components/ui/CTASection'

const values = [
  {
    icon: Briefcase,
    title: 'Professionnalisme',
    text: "Des engagements clairs, des délais discutés à l'avance et un travail bien documenté.",
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    text: 'Des technologies modernes, choisies quand elles servent réellement votre projet.',
  },
  {
    icon: Shield,
    title: 'Fiabilité',
    text: 'Des solutions testées avant la livraison et un suivi possible après la mise en ligne.',
  },
  {
    icon: Target,
    title: 'Simplicité',
    text: 'Des interfaces claires et des outils faciles à prendre en main, sans jargon inutile.',
  },
  {
    icon: Users2,
    title: 'Accompagnement personnalisé',
    text: "Un interlocuteur à l'écoute, de l'analyse du besoin jusqu'à la livraison.",
  },
  {
    icon: CheckCircle2,
    title: 'Qualité du travail',
    text: 'Une attention constante au design, à la performance et à l’accessibilité.',
  },
]

const skills = {
  'Développement web': ['HTML', 'CSS', 'JavaScript', 'React', 'Laravel'],
  'Développement mobile': ['Flutter', 'Java'],
  'Types de projets': ['Sites vitrines', 'Sites e-commerce', 'Applications web', 'Solutions de gestion'],
  Accompagnement: ['Conseil digital', 'Maintenance et support'],
}

const approach = [
  { icon: Handshake, title: "Écouter d'abord", text: 'Nous comprenons votre activité avant de proposer une solution.' },
  { icon: Repeat, title: 'Avancer par étapes', text: 'Chaque phase est validée avec vous avant de passer à la suivante.' },
  { icon: Sparkles, title: 'Rester simple', text: 'Des solutions faciles à utiliser et à faire évoluer.' },
  { icon: Eye, title: 'Suivre dans la durée', text: 'Un accompagnement et une maintenance possibles après la livraison.' },
]

export default function APropos() {
  return (
    <>
      <PageBanner
        crumb="À propos"
        title="Une agence qui accompagne votre transformation numérique"
        description="Kanoute Digital Agency conçoit des solutions modernes, pratiques et adaptées aux besoins des entreprises et des entrepreneurs."
      />

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div>
            <p className="text-sm font-semibold tracking-wider text-brand-blue uppercase">
              Présentation de l'agence
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Le numérique doit rester un outil simple et utile
            </h2>
            <p className="mt-4 text-body">
              Kanoute Digital Agency est une agence digitale sénégalaise. Nous accompagnons les
              entreprises, les commerces et les entrepreneurs dans la création de sites web,
              d'applications et d'outils de gestion adaptés à leur réalité.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/contact">Parler de votre projet</Button>
              <Button to="/services" variant="secondary">
                Voir nos services
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-soft py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-2xl border border-border-soft bg-white p-8">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-icon-bg text-brand-blue">
              <Target size={22} />
            </div>
            <h3 className="mt-4 text-lg font-semibold">Notre mission</h3>
            <p className="mt-2 text-body">
              Accompagner les entreprises et les entrepreneurs dans leur transformation numérique
              grâce à des solutions modernes, pratiques et adaptées à leurs besoins.
            </p>
          </div>
          <div className="rounded-2xl border border-border-soft bg-white p-8">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-icon-bg text-brand-blue">
              <Eye size={22} />
            </div>
            <h3 className="mt-4 text-lg font-semibold">Notre vision</h3>
            <p className="mt-2 text-body">
              Un numérique accessible à tous les projets, où chaque organisation dispose d'outils
              clairs, fiables et faciles à faire évoluer.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <p className="text-sm font-semibold tracking-wider text-brand-blue uppercase">
            Nos valeurs
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Ce qui guide notre façon de travailler
          </h2>
        </div>
        <div className="mx-auto mt-14 grid max-w-7xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {values.map((v) => (
            <ValueItem key={v.title} {...v} variant="card" />
          ))}
        </div>
      </section>

      <section className="bg-surface-soft py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_2fr]">
            <div>
              <p className="text-sm font-semibold tracking-wider text-brand-blue uppercase">
                Compétences
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Ce que nous maîtrisons</h2>
            </div>
            <div className="space-y-8">
              {Object.entries(skills).map(([group, items]) => (
                <div key={group}>
                  <h3 className="font-semibold text-ink">{group}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {items.map((item) => (
                      <Chip key={item}>{item}</Chip>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-soft py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold tracking-wider text-brand-blue uppercase">
            Notre approche
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Une collaboration en confiance</h2>
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {approach.map((a) => (
              <div key={a.title} className="border-t-2 border-brand-cyan pt-5">
                <h3 className="font-semibold text-ink">{a.title}</h3>
                <p className="mt-2 text-sm text-body">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
