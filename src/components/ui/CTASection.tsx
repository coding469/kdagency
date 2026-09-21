import { MessageCircle } from 'lucide-react'
import Button from './Button'
import CircuitLines from './CircuitLines'
import { contactInfo } from '@/data/nav'

export default function CTASection() {
  return (
    <section className="bg-brand-blue">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 lg:grid-cols-[1fr_auto] lg:px-8">
        <div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Vous avez un projet digital ? Parlons-en.
          </h2>
          <p className="mt-4 max-w-xl text-blue-100">
            Partagez votre idée et découvrons ensemble une solution adaptée à vos besoins.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button to="/contact" variant="white">
              Demander un devis
            </Button>
            <Button
              href={contactInfo.whatsappHref}
              variant="ghost"
              icon={<MessageCircle size={18} />}
              iconPosition="left"
            >
              Écrire sur WhatsApp
            </Button>
          </div>
        </div>
        <CircuitLines variant="dark" className="hidden h-32 w-96 lg:block" />
      </div>
    </section>
  )
}
