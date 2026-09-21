import { ArrowRight } from 'lucide-react'
import type { Project } from '@/data/projects'
import ProjectThumbnail from './ProjectThumbnail'
import { TagChip } from './ui/Badge'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-border-soft bg-white">
      <ProjectThumbnail accent={project.accent} />
      <div className="p-6">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          {project.isDemo && (
            <span className="rounded-full border border-dashed border-brand-blue/40 px-2.5 py-0.5 text-xs font-medium text-brand-blue">
              Projet de démonstration
            </span>
          )}
          <span className="text-xs text-muted">{project.category}</span>
        </div>
        <h3 className="text-lg font-semibold text-ink">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-body">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <TagChip key={tag}>{tag}</TagChip>
          ))}
        </div>
        <button
          type="button"
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:gap-2.5 transition-[gap]"
        >
          Voir le projet
          <ArrowRight size={16} />
        </button>
      </div>
    </article>
  )
}
