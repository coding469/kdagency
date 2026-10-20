import type { LucideIcon } from 'lucide-react'
import {
  Monitor,
  Smartphone,
  Box,
  Wrench,
  Compass,
  GraduationCap,
} from 'lucide-react'

export interface Service {
  id: string
  letter: string
  shortLabel: string
  icon: LucideIcon
  title: string
  summary: string
  audience: string[]
  problems: string[]
  offers: string[]
  ctaLabel: string
  ctaTo?: string
  ctaHref?: string
}

export const services: Service[] = [
  {
    id: 'sites-web',
    letter: 'A',
    shortLabel: 'Sites web',
    icon: Monitor,
    title: 'Création de sites web',
    summary:
      'Un site clair, rapide et facile à utiliser pour présenter votre activité, vos produits ou votre menu, sur mobile comme sur ordinateur.',
    audience: ['Restaurants et commerces', 'PME', 'Entrepreneurs'],
    problems: [
      "Vous n'avez pas encore de présence en ligne.",
      'Votre site actuel est difficile à lire sur téléphone.',
      'Vos clients ne trouvent pas facilement vos horaires, votre menu ou vos produits.',
    ],
    offers: [
      'Sites vitrines',
      "Sites d'entreprise",
      'Menus digitaux pour restaurants',
      'Sites e-commerce',
      'Catalogues de produits',
    ],
    ctaLabel: 'Demander un devis',
    ctaTo: '/contact',
  },
  {
    id: 'applications',
    letter: 'B',
    shortLabel: 'Applications',
    icon: Smartphone,
    title: 'Applications web et mobiles',
    summary:
      'Des applications sur mesure pour simplifier vos processus internes ou proposer un nouveau service à vos utilisateurs.',
    audience: ['PME', 'Organisations', 'Porteurs de projets'],
    problems: [
      'Des tâches répétées à la main ou dans plusieurs fichiers.',
      'Un besoin métier que les outils standards ne couvrent pas.',
      'Des informations dispersées entre plusieurs personnes.',
    ],
    offers: [
      'Applications métiers',
      "Interfaces d'administration",
      'Applications mobiles selon les besoins',
      'Solutions personnalisées',
    ],
    ctaLabel: 'Demander un devis',
    ctaTo: '/contact',
  },
  {
    id: 'gestion',
    letter: 'C',
    shortLabel: 'Gestion',
    icon: Box,
    title: 'Solutions de gestion',
    summary:
      'Des outils de suivi pratiques pour garder la maîtrise de vos produits, de vos stocks et de vos équipes.',
    audience: ['Commerces', 'PME', 'Organisations'],
    problems: [
      "Difficulté à connaître l'état réel du stock.",
      'Erreurs dans les entrées et sorties notées à la main.',
      'Accès aux informations difficile à contrôler.',
    ],
    offers: [
      'Gestion de stock',
      'Gestion des produits',
      'Suivi des entrées et sorties',
      'Inventaires',
      'Gestion des utilisateurs et des rôles',
    ],
    ctaLabel: 'Demander un devis',
    ctaTo: '/contact',
  },
  {
    id: 'maintenance',
    letter: 'D',
    shortLabel: 'Maintenance',
    icon: Wrench,
    title: 'Maintenance et support',
    summary:
      'Un suivi technique pour que votre site ou votre application reste fiable, à jour et capable d’évoluer.',
    audience: ['Clients existants', 'Toute organisation avec un site ou une application'],
    problems: [
      'Un bug qui bloque votre activité.',
      "Un outil qui n'est plus mis à jour.",
      'Pas de référent technique en cas de problème.',
    ],
    offers: [
      'Correction de bugs',
      'Mises à jour',
      'Assistance technique',
      'Maintenance évolutive selon contrat',
    ],
    ctaLabel: 'Demander un devis',
    ctaTo: '/contact',
  },
  {
    id: 'conseil',
    letter: 'E',
    shortLabel: 'Conseil',
    icon: Compass,
    title: 'Conseil digital',
    summary:
      "Un regard extérieur pour clarifier vos besoins et choisir la solution numérique la plus adaptée avant d'investir.",
    audience: ['Entrepreneurs', 'Porteurs de projets', 'PME'],
    problems: [
      'Vous ne savez pas quelle solution choisir.',
      'Vous hésitez entre plusieurs options techniques.',
      "Votre idée n'est pas encore formalisée.",
    ],
    offers: [
      'Analyse des besoins',
      'Orientation technique',
      'Accompagnement dans le choix des solutions numériques',
    ],
    ctaLabel: 'Demander un devis',
    ctaTo: '/contact',
  },
  {
    id: 'formation',
    letter: 'F',
    shortLabel: 'Formation',
    icon: GraduationCap,
    title: 'Formation : créer son site web sans savoir coder',
    summary:
      "Apprenez à créer votre propre site web grâce à l'IA, étape par étape, même sans aucune compétence en programmation.",
    audience: ['Entrepreneurs', 'Indépendants', 'Débutants'],
    problems: [
      'Vous voulez un site mais vous ne savez pas coder.',
      "Vous ne savez pas comment utiliser l'IA pour créer un site.",
      'Les formations classiques sont trop techniques ou trop théoriques.',
    ],
    offers: [
      'Préparer son projet de site',
      "Bien utiliser l'IA pour créer son site",
      'Personnaliser son site',
      'Publier son site en ligne',
    ],
    ctaLabel: 'Voir la formation',
    ctaHref: 'https://iwujdufq.mychariow.com/prd_jmtysxyu',
  },
]
