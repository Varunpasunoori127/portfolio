import { Section } from './Section'


const groups = [
{ label: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Vite'] },
{ label: 'Tools', items: ['Git', 'GitHub', 'Vercel', 'Netlify'] },
{ label: 'Testing', items: ['Vitest', 'React Testing Library'] },
]


export function Skills(){
return (
<Section id="skills" title="Skills" subtitle="Tech I use to ship quality UI.">
<div className="grid md:grid-cols-3 gap-6">
{groups.map(g => (
<div key={g.label} className="card">
<h3 className="font-semibold mb-2">{g.label}</h3>
<ul className="flex flex-wrap gap-2">
{g.items.map(i => (
<li key={i} className="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-sm">{i}</li>
))}
</ul>
</div>
))}
</div>
</Section>
)
}