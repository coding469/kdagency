export type ProjectCategory =
  | 'Site web'
  | 'Application web'
  | 'Application mobile'
  | 'Solution de gestion'

export interface Project {
  id: string
  title: string
  category: ProjectCategory
  description: string
  tags: string[]
  isDemo: boolean
  accent: 'browser' | 'dashboard' | 'grid' | 'cards' | 'code'
  url?: string
}

export const projects: Project[] = [
  {
    id: 'pushagri',
    title: "Push'Agri Farm",
    category: 'Site web',
    description:
      'Site vitrine pour une entreprise de pisciculture : présentation de l’activité et de l’exploitation.',
    tags: ['React', 'Laravel'],
    isDemo: false,
    accent: 'browser',
    url: 'https://pushagri.com',
  },
  {
    id: 'restaurant',
    title: 'Site vitrine pour restaurant',
    category: 'Site web',
    description:
      'Maquette de démonstration : présentation du restaurant, menu digital, horaires et contact par WhatsApp.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    isDemo: true,
    accent: 'browser',
  },
  {
    id: 'gestion-stock',
    title: 'Application de gestion de stock',
    category: 'Solution de gestion',
    description:
      "Démonstration d'une interface de suivi des produits, des entrées et sorties et des inventaires.",
    tags: ['Laravel', 'React', 'MySQL'],
    isDemo: true,
    accent: 'dashboard',
  },
  {
    id: 'ecommerce',
    title: 'Site e-commerce',
    category: 'Site web',
    description:
      "Démonstration d'une boutique en ligne : catalogue, fiche produit, panier et prise de commande.",
    tags: ['React', 'Tailwind CSS', 'Laravel'],
    isDemo: true,
    accent: 'grid',
  },
  {
    id: 'app-metier',
    title: 'Application web personnalisée',
    category: 'Application web',
    description:
      'Exemple d’application métier sur mesure avec tableau de bord et interface d’administration.',
    tags: ['React', 'TypeScript', 'API REST'],
    isDemo: true,
    accent: 'cards',
  },
  {
    id: 'demo-formation',
    title: 'Démonstration technique de formation',
    category: 'Application web',
    description:
      'Petite application construite pas à pas pour illustrer la démarche pédagogique des formations.',
    tags: ['JavaScript', 'React', 'CSS'],
    isDemo: true,
    accent: 'code',
  },
]

export const projectFilters: { label: string; value: ProjectCategory | 'Tous' }[] = [
  { label: 'Tous', value: 'Tous' },
  { label: 'Sites web', value: 'Site web' },
  { label: 'Applications web', value: 'Application web' },
  { label: 'Applications mobiles', value: 'Application mobile' },
  { label: 'Solutions de gestion', value: 'Solution de gestion' },
]
