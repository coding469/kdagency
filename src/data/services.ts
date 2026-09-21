import type { LucideIcon } from 'lucide-react'
import {
  Monitor,
  Smartphone,
  Box,
  GraduationCap,
  Wrench,
  Compass,
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
  ctaTo: string
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
    id: 'formation',
    letter: 'D',
    shortLabel: 'Formation',
    icon: GraduationCap,
    title: 'Formation en développement web',
    summary:
      'Des formations pratiques, centrées sur la réalisation de projets, pour apprendre le développement web à votre rythme.',
    audience: ['Débutants', 'Étudiants', 'Reconversion'],
    problems: [
      'Difficulté à savoir par où commencer.',
      'Des cours trop théoriques, sans projet concret.',
      "Besoin d'un accompagnement humain pour progresser.",
    ],
    offers: [
      'HTML et CSS',
      'JavaScript',
      'React',
      'Laravel',
      'Projets pratiques',
      'Accompagnement des débutants',
    ],
    ctaLabel: 'Voir les formations',
    ctaTo: '/formation',
  },
  {
    id: 'maintenance',
    letter: 'E',
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
    letter: 'F',
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
]
