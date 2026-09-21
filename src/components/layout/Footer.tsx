import { Link } from 'react-router-dom'
import { AtSign, Globe, Mail, MapPin, MessageCircle, Share2 } from 'lucide-react'
import Logo from '@/components/ui/Logo'
import { navLinks, contactInfo } from '@/data/nav'
import { services } from '@/data/services'

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-blue-100">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo variant="white" className="h-9" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-blue-200/80">
              Agence digitale sénégalaise. Nous concevons des sites web, des applications et des
              outils de gestion adaptés aux entreprises et aux entrepreneurs, et nous formons au
              développement web.
            </p>
            <div className="mt-6 flex gap-3">
              {[Globe, Share2, AtSign].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Réseau social"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:bg-white/10"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-wider text-brand-cyan uppercase">
              Navigation
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-wider text-brand-cyan uppercase">
              Services
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {services.map((s) => (
                <li key={s.id}>
                  <Link to={`/services#${s.id}`} className="hover:text-white">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-wider text-brand-cyan uppercase">
              Contact
            </h3>
            <ul className="mt-4 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MessageCircle size={18} className="mt-0.5 shrink-0 text-brand-cyan" />
                <span>
                  WhatsApp
                  <br />
                  {contactInfo.whatsapp}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 shrink-0 text-brand-cyan" />
                <span>
                  E-mail
                  <br />
                  {contactInfo.email}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-brand-cyan" />
                <span>
                  Sénégal
                  <br />
                  [Ville / Adresse]
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-blue-200/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Kanoute Digital Agency. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">
              Mentions légales
            </a>
            <a href="#" className="hover:text-white">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
