import type { Project } from '@/data/projects'

function BrowserMock() {
  return (
    <div className="flex h-full flex-col justify-center gap-3 p-6">
      <div className="mb-2 flex gap-1.5">
        <span className="h-2 w-2 rounded-full bg-brand-cyan" />
        <span className="h-2 w-2 rounded-full bg-border-soft" />
        <span className="h-2 w-2 rounded-full bg-border-soft" />
      </div>
      <div className="h-10 rounded-md bg-brand-navy" />
      <div className="h-2.5 w-1/2 rounded bg-brand-cyan" />
      <div className="mt-3 h-2 w-3/4 rounded bg-border-soft" />
      <div className="h-2 w-2/3 rounded bg-border-soft" />
    </div>
  )
}

function DashboardMock() {
  const bars = [40, 65, 30, 55, 25]
  return (
    <div className="flex h-full gap-3 p-6">
      <div className="flex w-9 flex-col gap-2 rounded-lg bg-brand-navy p-2">
        <span className="h-2 w-2 rounded-full bg-brand-cyan" />
        <span className="h-2 w-full rounded bg-white/20" />
        <span className="h-2 w-full rounded bg-white/20" />
      </div>
      <div className="flex flex-1 flex-col justify-between">
        <div className="space-y-2">
          <div className="h-2 w-1/2 rounded bg-border-soft" />
          <div className="h-2 w-1/3 rounded bg-border-soft" />
        </div>
        <div className="flex items-end gap-1.5">
          {bars.map((h, i) => (
            <span
              key={i}
              style={{ height: `${h}px` }}
              className={`w-4 rounded-t ${i % 2 === 0 ? 'bg-brand-blue' : 'bg-brand-cyan'}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function GridMock() {
  return (
    <div className="h-full p-6">
      <div className="mb-3 flex items-center justify-between">
        <div className="h-2.5 w-16 rounded bg-brand-navy" />
        <div className="h-5 w-8 rounded bg-brand-blue" />
      </div>
      <div className="grid grid-cols-3 gap-2">
        <div className="flex h-14 items-center justify-center rounded-lg bg-icon-bg">
          <span className="h-6 w-6 rounded-full bg-brand-cyan" />
        </div>
        <div className="flex h-14 items-center justify-center rounded-lg bg-icon-bg">
          <span className="h-6 w-6 rounded bg-brand-blue" />
        </div>
        <div className="flex h-14 items-center justify-center rounded-lg bg-icon-bg">
          <span className="h-6 w-6 rounded bg-brand-navy" />
        </div>
      </div>
    </div>
  )
}

function CardsMock() {
  return (
    <div className="h-full p-6">
      <div className="mb-3 flex gap-2">
        <span className="h-6 flex-1 rounded-md bg-brand-blue" />
        <span className="h-6 flex-1 rounded-md bg-brand-cyan" />
        <span className="h-6 flex-1 rounded-md bg-brand-navy" />
      </div>
      <svg viewBox="0 0 200 60" className="h-14 w-full text-brand-blue">
        <polyline
          points="0,45 30,35 60,42 90,20 120,28 150,10 180,15"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

function CodeMock() {
  return (
    <div className="h-full space-y-2 bg-brand-navy p-6">
      <div className="h-2 w-2/3 rounded bg-brand-cyan/70" />
      <div className="h-2 w-1/2 rounded bg-white/70" />
      <div className="h-2 w-3/5 rounded bg-brand-blue-light/80" />
      <div className="h-2 w-1/3 rounded bg-brand-cyan/70" />
      <div className="h-2 w-2/5 rounded bg-white/50" />
    </div>
  )
}

const mocks: Record<Project['accent'], () => React.JSX.Element> = {
  browser: BrowserMock,
  dashboard: DashboardMock,
  grid: GridMock,
  cards: CardsMock,
  code: CodeMock,
}

export default function ProjectThumbnail({ accent }: { accent: Project['accent'] }) {
  const Mock = mocks[accent]
  return (
    <div className="h-44 overflow-hidden rounded-t-2xl bg-surface-soft">
      <Mock />
    </div>
  )
}
