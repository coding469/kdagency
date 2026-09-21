import { ArrowRight, Layers, MessageSquare, Search, SlidersHorizontal, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '@/components/ui/Button'
import { Pill } from '@/components/ui/Badge'
import ServiceCard from '@/components/ServiceCard'
import ProjectCard from '@/components/ProjectCard'
import ValueItem from '@/components/ui/ValueItem'
import ProcessSteps from '@/components/ui/ProcessSteps'
import CTASection from '@/components/ui/CTASection'
import HeroIllustration from '@/components/HeroIllustration'
import { services } from '@/data/services'
import { projects } from '@/data/projects'

const highlights = ['Sites web et applications', 'Solutions de gestion', 'Formation']

const whyChooseUs = [
  {
    icon: SlidersHorizontal,
    title: 'Approche personnalisée',
    text: 'Chaque projet est étudié selon votre activité, vos utilisateurs et vos contraintes.',
  },
  {
    icon: Layers,
    title: 'Solutions adaptées à vos besoins',
    text: 'Nous concevons ce dont vous avez réellement besoin, sans complexité inutile.',
  },
  {
    icon: MessageSquare,
    title: 'Communication claire',
    text: "Des échanges simples, un vocabulaire accessible et des points d'étape réguliers.",
  },
  {
    icon: Users,
    title: 'Accompagnement du projet',
    text: 'De la première discussion à la livraison, et au-delà si vous le souhaitez.',
  },
  {
    icon: Search,
    title: 'Qualité et attention aux détails',
    text: 'Un travail soigné sur le design, la performance et l’accessibilité.',
  },
]

const aboutPoints = [
  {
    title: 'Notre mission',
    text: 'Rendre les outils numériques accessibles, pratiques et adaptés à la réalité de chaque projet.',
  },
  {
    title: 'Ce que nous cherchons à résoudre',
    text: "Le manque de visibilité en ligne, les tâches manuelles répétitives et le suivi d'activité dispersé.",
  },
  {
    title: 'Notre façon de travailler',
    text: 'Une collaboration étroite, étape par étape, avec des livrables clairs et des validations à chaque phase.',
  },
]

const processSteps = [
  {
    step: 1,
    title: 'Analyse du besoin',
    text: 'Nous écoutons votre projet, vos objectifs et vos contraintes.',
  },
  {
    step: 2,
    title: 'Proposition et devis',
    text: 'Vous recevez une proposition claire : périmètre, délais et budget.',
  },
  {
    step: 3,
    title: 'Conception',
    text: 'Structure et maquettes validées avec vous avant de développer.',
  },
  {
    step: 4,
    title: 'Développement',
    text: 'Réalisation par étapes, avec des points réguliers pour avancer ensemble.',
  },
  {
    step: 5,
    title: 'Tests et validation',
    text: 'Vérification sur mobile et ordinateur, puis validation avec vous.',
  },
  {
    step: 6,
    title: 'Livraison et accompagnement',
    text: 'Mise en ligne, prise en main et support selon vos besoins.',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <Pill dot>Agence digitale sénégalaise</Pill>
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
              Des solutions digitales pour faire grandir vos projets.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-body">
              Nous créons des sites web, des applications et des outils numériques adaptés aux
              besoins des entreprises et des entrepreneurs.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/contact" size="lg">
                Demander un devis
              </Button>
              <Button to="/services" variant="secondary" size="lg" icon={<ArrowRight size={18} />}>
                Découvrir nos services
              </Button>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium text-ink">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-2">
                  <svg viewBox="0 0 20 20" className="h-4 w-4 text-brand-blue" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 111.4-1.4L8 11.6l6.8-6.8a1 1 0 011.4 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {h}
                </li>
              ))}
            </ul>
          </div>
          <HeroIllustration />
        </div>
      </section>

      {/* Services */}
      <section className="bg-surface-soft py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold tracking-wider text-brand-blue uppercase">
              Nos services
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Des outils numériques pensés pour votre activité
            </h2>
            <p className="mt-4 text-lg text-body">
              Du site vitrine à l'application sur mesure, nous vous accompagnons de l'idée à la
              mise en ligne.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-semibold tracking-wider text-brand-blue uppercase">
              Pourquoi nous choisir ?
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Une collaboration simple, claire et sur mesure
            </h2>
            <p className="mt-4 text-body">
              Chaque projet commence par l'écoute de votre besoin. Nous privilégions des solutions
              utiles, faciles à prendre en main et capables d'évoluer avec votre activité.
            </p>
          </div>
          <div>
            {whyChooseUs.map((v) => (
              <ValueItem key={v.title} {...v} />
            ))}
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="bg-surface-soft py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-3xl bg-icon-bg">
            <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-white/60" />
            <div className="absolute -right-16 -bottom-16 h-56 w-56 rounded-full bg-white/50" />
            <span className="relative rounded-full border border-dashed border-brand-blue/40 bg-white/80 px-4 py-2 text-xs font-medium text-brand-blue">
              [Photo professionnelle de la fondatrice]
            </span>
          </div>
          <div>
            <p className="text-sm font-semibold tracking-wider text-brand-blue uppercase">
              À propos
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Une agence qui rend le numérique simple et utile
            </h2>
            <p className="mt-4 text-body">
              Kanoute Digital Agency est une agence digitale sénégalaise. Nous concevons des sites
              web, des applications et des outils de gestion pour les entreprises, les commerces
              et les entrepreneurs qui veulent structurer et développer leur activité grâce au
              numérique.
            </p>
            <div className="mt-8 space-y-6">
              {aboutPoints.map((p) => (
                <div key={p.title}>
                  <h3 className="font-semibold text-ink">{p.title}</h3>
                  <p className="mt-1.5 text-sm text-body">{p.text}</p>
                </div>
              ))}
            </div>
            <Link
              to="/a-propos"
              className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:gap-2.5 transition-[gap]"
            >
              Découvrir l'agence
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio teaser */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold tracking-wider text-brand-blue uppercase">
                Réalisations
              </p>
              <h2 className="mt-3 max-w-xl text-3xl font-bold sm:text-4xl">
                Des projets pour illustrer notre façon de travailler
              </h2>
            </div>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:gap-2.5 transition-[gap]"
            >
              Voir tous les projets
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-surface-soft py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold tracking-wider text-brand-blue uppercase">
            Notre processus
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Comment nous travaillons ensemble</h2>
          <div className="mt-14">
            <ProcessSteps steps={processSteps} columns={6} />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
