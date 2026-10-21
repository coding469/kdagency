export default function HeroIllustration() {
  return (
    <div className="relative mx-auto h-[360px] w-full max-w-md sm:h-[420px]">
      <div className="absolute top-0 left-0 w-[88%] overflow-hidden rounded-2xl border border-border-soft bg-white shadow-xl shadow-brand-navy/10">
        <div className="flex items-center gap-1.5 border-b border-border-soft bg-surface-soft px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-3 flex-1 truncate rounded bg-white px-2 py-0.5 text-[10px] text-muted">
            pushagri.com
          </span>
        </div>
        <img
          src="/images/projects/pushagri.jpg"
          alt="Site réalisé par Kanoute Digital Agency"
          className="h-48 w-full object-cover object-top sm:h-56"
        />
      </div>

      <div className="absolute right-0 bottom-0 w-44 rounded-2xl border border-border-soft bg-white p-5 shadow-2xl shadow-brand-navy/15 sm:w-48">
        <p className="text-3xl font-bold text-brand-blue">100%</p>
        <p className="mt-1 text-xs leading-relaxed text-body">
          Projets réels, livrés à des clients sénégalais
        </p>
      </div>

      <div className="absolute top-6 -right-2 flex items-center gap-2 rounded-full border border-border-soft bg-white px-4 py-2 shadow-lg shadow-brand-navy/10 sm:right-4">
        <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-brand-cyan" />
        <span className="text-xs font-medium text-ink">Site en ligne</span>
      </div>
    </div>
  )
}
