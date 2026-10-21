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
import Reveal from '@/components/ui/Reveal'
import { services } from '@/data/services'
import { projects } from '@/data/projects'

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
          </div>
          <HeroIllustration />
        </div>
      </section>

      {/* Differentiator banner */}
      <section className="border-y border-border-soft bg-icon-bg/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-5 text-center sm:flex-row sm:text-left lg:px-8">
          <p className="text-sm font-medium text-ink">
            <span className="font-semibold text-brand-blue">Ce qui nous différencie :</span> une
            agence qui crée votre site <span className="font-semibold">et</span> une formation
            accessible pour apprendre à le faire vous-même.
          </p>
          <Link
            to="/services#formation"
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-brand-blue hover:gap-2.5 transition-[gap]"
          >
            Découvrir la formation
            <ArrowRight size={16} />
          </Link>
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
            {services.map((s, i) => (
              <Reveal key={s.id} delay={(i % 3) * 80}>
                <ServiceCard service={s} />
              </Reveal>
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
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
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
              <p className="mt-2 text-sm text-muted">
                Projets réels, liens vérifiables — pas de maquettes.
              </p>
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
            {projects.slice(0, 3).map((p, i) => (
              <Reveal key={p.id} delay={(i % 3) * 80}>
                <ProjectCard project={p} />
              </Reveal>
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
