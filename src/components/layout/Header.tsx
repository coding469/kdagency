import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, MessageCircle, X } from 'lucide-react'
import Logo from '@/components/ui/Logo'
import Button from '@/components/ui/Button'
import { navLinks, contactInfo } from '@/data/nav'

export default function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-border-soft bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link to="/" className="shrink-0">
          <Logo className="h-9" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `border-b-2 pb-1 text-sm font-medium transition-colors ${
                  isActive
                    ? 'border-brand-blue text-ink'
                    : 'border-transparent text-body hover:text-ink'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button to="/contact">Demander un devis</Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border-soft text-ink lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="fixed inset-x-0 top-[65px] bottom-0 z-40 flex flex-col bg-white lg:hidden">
          <nav className="flex-1 overflow-y-auto px-6 py-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium ${
                    isActive ? 'bg-icon-bg text-brand-blue' : 'text-ink'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="mt-4 flex flex-col gap-3">
              <Button to="/contact" className="w-full">
                Demander un devis
              </Button>
              <Button
                href={contactInfo.whatsappHref}
                variant="secondary"
                icon={<MessageCircle size={18} />}
                iconPosition="left"
                className="w-full"
              >
                Écrire sur WhatsApp
              </Button>
            </div>
          </nav>
          <p className="border-t border-border-soft px-6 py-4 text-xs text-muted">
            {contactInfo.email} · {contactInfo.whatsapp}
          </p>
        </div>
      )}
    </header>
  )
}
