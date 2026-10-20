export interface NavLink {
  label: string
  to: string
}

export const navLinks: NavLink[] = [
  { label: 'Accueil', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'À propos', to: '/a-propos' },
  { label: 'Formation', to: '/services#formation' },
  { label: 'Contact', to: '/contact' },
]

export const contactInfo = {
  whatsapp: '+221 71 033 80 61',
  whatsappHref: 'https://wa.me/221710338061',
  email: 'kanoutef163@gmail.com',
  location: 'Yoff, Dakar, Sénégal',
  tiktok: '@ka_digital',
  tiktokHref: 'https://www.tiktok.com/@ka_digital',
}
