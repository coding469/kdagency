export type ProjectCategory = 'Site web' | 'Application web'

export interface Project {
  id: string
  title: string
  category: ProjectCategory
  description: string
  tags: string[]
  isDemo: boolean
  image: string
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
    image: '/images/projects/pushagri.jpg',
    url: 'https://pushagri.com',
  },
  {
    id: 'china-online-base',
    title: 'China Online Base',
    category: 'Application web',
    description:
      'Plateforme avec espace de connexion pour organiser et centraliser des contacts fournisseurs.',
    tags: ['React', 'Laravel'],
    isDemo: false,
    image: '/images/projects/china-online-base.jpg',
    url: 'https://chinaonlinebase.com/login',
  },
  {
    id: 'hotel-aicha',
    title: 'Hôtel Résidence Aïcha',
    category: 'Site web',
    description:
      'Site vitrine pour un hôtel à Tambacounda : présentation des chambres, galerie photo et réservation via WhatsApp.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    isDemo: false,
    image: '/images/projects/hotel-aicha.jpg',
    url: 'https://www.hotelaicha.com/',
  },
  {
    id: 'codingfatima',
    title: 'Coding Fatima',
    category: 'Site web',
    description:
      'Portfolio professionnel présentant les services, projets et formations.',
    tags: ['React'],
    isDemo: false,
    image: '/images/projects/codingfatima.jpg',
    url: 'https://codingfatima.com',
  },
]

export const projectFilters: { label: string; value: ProjectCategory | 'Tous' }[] = [
  { label: 'Tous', value: 'Tous' },
  { label: 'Sites web', value: 'Site web' },
  { label: 'Applications web', value: 'Application web' },
]
