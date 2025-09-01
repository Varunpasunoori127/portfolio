import { Github } from 'lucide-react'


export function ProjectCard({ title, description, tags, link, repo }){
return (
<article className="card">
<header className="mb-3">
<h3 className="text-xl font-semibold">{title}</h3>
<p className="text-slate-600 dark:text-slate-300 mt-1">{description}</p>
</header>
<div className="flex flex-wrap gap-2 mb-4">
{tags.map(t => (
<span key={t} className="text-xs px-2 py-1 rounded-full border border-slate-300 dark:border-slate-700">{t}</span>
))}
</div>
<div className="flex gap-3">
<a className="btn-primary" href={link} target="_blank" rel="noreferrer">Live</a>
<a className="btn-outline inline-flex items-center gap-2" href={repo} target="_blank" rel="noreferrer">
<Github size={16}/> Code
</a>
</div>
</article>
)
}