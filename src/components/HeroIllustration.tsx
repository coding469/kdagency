export default function HeroIllustration() {
  return (
    <div className="relative mx-auto h-[360px] w-full max-w-md sm:h-[420px]">
      <div className="absolute top-0 left-0 h-64 w-[85%] rounded-2xl border border-border-soft bg-white p-5 shadow-xl shadow-brand-navy/5">
        <div className="mb-4 flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-brand-cyan" />
          <span className="h-2 w-2 rounded-full bg-border-soft" />
          <span className="h-2 w-2 rounded-full bg-border-soft" />
          <span className="ml-3 h-3 flex-1 rounded bg-surface-soft" />
        </div>
        <div className="mb-3 h-3 w-8 rounded bg-brand-navy" />
        <div className="mb-1.5 h-3 w-3/4 rounded bg-brand-navy" />
        <div className="mb-4 h-2 w-1/2 rounded bg-border-soft" />
        <div className="flex items-center gap-3">
          <span className="h-9 w-9 shrink-0 rounded-full bg-brand-cyan/80" />
          <span className="h-9 flex-1 rounded-lg bg-icon-bg" />
        </div>
        <div className="mt-4 h-8 w-24 rounded-lg bg-brand-blue" />
        <div className="mt-4 grid grid-cols-3 gap-2">
          <span className="h-8 rounded-md bg-surface-soft" />
          <span className="h-8 rounded-md bg-surface-soft" />
          <span className="h-8 rounded-md bg-brand-navy" />
        </div>
      </div>

      <div className="absolute top-40 left-[8%] h-44 w-[70%] rounded-2xl border border-border-soft bg-white p-5 shadow-xl shadow-brand-navy/5">
        <div className="mb-3 flex items-center justify-between">
          <div className="h-2.5 w-2/5 rounded bg-brand-navy" />
          <div className="h-4 w-10 rounded bg-brand-cyan" />
        </div>
        <div className="mb-2 h-2 w-3/5 rounded bg-border-soft" />
        <div className="mb-4 h-2 w-2/5 rounded bg-border-soft" />
        <div className="flex items-end gap-2">
          {[22, 34, 18, 28, 14].map((h, i) => (
            <span
              key={i}
              style={{ height: `${h}px` }}
              className={`w-4 rounded-t ${i % 2 === 0 ? 'bg-brand-blue' : 'bg-brand-cyan'}`}
            />
          ))}
        </div>
      </div>

      <div className="absolute top-6 right-0 w-36 overflow-hidden rounded-3xl border-4 border-brand-navy bg-white shadow-2xl shadow-brand-navy/20 sm:w-40">
        <div className="space-y-2 bg-brand-blue p-4">
          <div className="h-1.5 w-1/2 rounded bg-white/70" />
        </div>
        <div className="space-y-3 p-4">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="h-4 w-4 shrink-0 rounded-full bg-icon-bg" />
              <span className="h-1.5 flex-1 rounded bg-surface-soft" />
            </div>
          ))}
          <div className="mt-2 h-7 rounded-lg bg-brand-blue" />
        </div>
      </div>
    </div>
  )
}
