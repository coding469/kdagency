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
  whatsapp: '+221 77 087 46 19',
  whatsappHref: 'https://wa.me/221770874619',
  email: 'ccoding845@gmail.com',
  location: 'Yoff, Dakar, Sénégal',
}
