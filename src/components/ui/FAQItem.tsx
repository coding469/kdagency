import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQItemProps {
  question: string
  answer: string
  defaultOpen?: boolean
}

export default function FAQItem({ question, answer, defaultOpen = false }: FAQItemProps) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-border-soft last:border-b-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-5 text-left font-semibold text-ink"
      >
        {question}
        <ChevronDown
          size={20}
          className={`shrink-0 text-brand-blue transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && <p className="pb-5 text-sm text-body">{answer}</p>}
    </div>
  )
}
