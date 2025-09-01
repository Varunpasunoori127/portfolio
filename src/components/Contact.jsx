import { Section } from './Section'


export function Contact(){
return (
<Section id="contact" title="Contact" subtitle="Let's build something together.">
<div className="card">
<form className="grid gap-4" action="https://formspree.io/f/yourFormId" method="POST">
<div className="grid gap-1">
<label className="text-sm" htmlFor="name">Your name</label>
<input className="rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2" id="name" name="name" required />
</div>
<div className="grid gap-1">
<label className="text-sm" htmlFor="email">gmail</label>
<input className="rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2" id="email" name="email" type="email" required />
</div>
<div className="grid gap-1">
<label className="text-sm" htmlFor="message">Message</label>
<textarea className="rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2 min-h-[120px]" id="message" name="message" required />
</div>
<button className="btn-primary justify-center">Send</button>
<p className="text-xs text-slate-500">Or email me at <a className="underline" href="mailto:you@example.com">varunpasunoori6@gmail.com</a></p>
</form>
</div>
</Section>
)
}