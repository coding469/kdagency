interface Step {
  step: number
  title: string
  text: string
}

interface ProcessStepsProps {
  steps: Step[]
  columns?: 3 | 6
}

export default function ProcessSteps({ steps, columns = 6 }: ProcessStepsProps) {
  const gridCols = columns === 6 ? 'sm:grid-cols-2 lg:grid-cols-6' : 'sm:grid-cols-3'

  return (
    <div className={`relative grid grid-cols-1 gap-10 ${gridCols}`}>
      {columns === 6 && (
        <div className="pointer-events-none absolute top-6 right-6 left-6 hidden h-px bg-border-soft lg:block" />
      )}
      {steps.map((s) => (
        <div key={s.step} className="relative">
          <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue text-lg font-bold text-white">
            {String(s.step).padStart(2, '0')}
          </div>
          <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
          <p className="mt-2 text-sm text-body">{s.text}</p>
        </div>
      ))}
    </div>
  )
}
