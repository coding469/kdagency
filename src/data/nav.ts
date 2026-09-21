export interface NavLink {
  label: string
  to: string
}

export const navLinks: NavLink[] = [
  { label: 'Accueil', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'À propos', to: '/a-propos' },
  { label: 'Formation', to: '/formation' },
  { label: 'Contact', to: '/contact' },
]

export const contactInfo = {
  whatsapp: '+221 XX XXX XX XX',
  whatsappHref: 'https://wa.me/221XXXXXXXXX',
  email: 'contact@votre-domaine.sn',
  location: 'Sénégal · [Ville / Adresse]',
}
