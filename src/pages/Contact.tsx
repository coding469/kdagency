import { useState, type FormEvent } from 'react'
import { Mail, MapPin, MessageCircle } from 'lucide-react'
import PageBanner from '@/components/ui/PageBanner'
import Button from '@/components/ui/Button'
import TextField from '@/components/ui/TextField'
import { contactInfo } from '@/data/nav'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <PageBanner
        crumb="Contact"
        title="Demander un devis"
        description="Décrivez votre projet, nous revenons vers vous rapidement pour en discuter."
      />

      <section className="py-16">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 px-6 lg:grid-cols-[1.2fr_1fr] lg:px-8">
          <form
            onSubmit={handleSubmit}
            className="min-w-0 rounded-card border border-border-soft bg-white p-8 shadow-card"
          >
            {submitted && (
              <p className="mb-6 rounded-field bg-icon-bg px-4 py-3 text-sm text-brand-blue">
                Information. Envoi non configuré : aucune donnée n'est transmise.
              </p>
            )}

            <div className="grid gap-6 sm:grid-cols-2">
              <TextField name="firstName" label="Prénom" autoComplete="given-name" required />
              <TextField name="lastName" label="Nom" autoComplete="family-name" required />
            </div>

            <div className="mt-6">
              <TextField
                name="email"
                type="email"
                label="E-mail"
                placeholder="prenom@exemple.com"
                autoComplete="email"
                required
              />
            </div>

            <div className="mt-6 flex flex-col gap-1.5">
              <label htmlFor="message" className="text-sm font-medium text-ink">
                Votre projet
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="rounded-field border border-border-soft bg-white px-4 py-2.5 text-sm text-ink outline-offset-0 transition-colors placeholder:text-muted focus:outline focus:outline-3 focus:outline-brand-cyan"
              />
            </div>

            <p className="mt-4 text-xs text-muted">
              Vos informations servent uniquement à répondre à votre demande.
            </p>

            <Button type="submit" className="mt-6 w-full sm:w-auto">
              Envoyer la demande
            </Button>
          </form>

          <div className="flex flex-col gap-6">
            <div className="rounded-card border border-border-soft bg-surface-soft p-6">
              <h2 className="font-heading font-semibold text-ink">Nous contacter directement</h2>
              <ul className="mt-4 space-y-4 text-sm text-body">
                <li className="flex items-start gap-3">
                  <MessageCircle size={18} className="mt-0.5 shrink-0 text-brand-blue" />
                  <a href={contactInfo.whatsappHref} className="hover:text-brand-blue">
                    {contactInfo.whatsapp}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail size={18} className="mt-0.5 shrink-0 text-brand-blue" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-brand-blue">
                    {contactInfo.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-brand-blue" />
                  <span>{contactInfo.location}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
