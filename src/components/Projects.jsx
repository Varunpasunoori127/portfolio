import { Section } from "./Section"
import { ProjectCard } from "./ProjectCard.jsx"
import { projects } from "../Data/Projects.js"

export function Projects() {
  return (
    <Section id="projects" title="Projects" subtitle="A few things I've built recently.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </Section>
  )
}
