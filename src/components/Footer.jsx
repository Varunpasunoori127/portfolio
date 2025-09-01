export function Footer(){
return (
<footer className="py-10 border-t border-slate-200 dark:border-slate-800">
<div className="container-xl text-sm flex flex-col sm:flex-row gap-3 items-center justify-between">
<p>© {new Date().getFullYear()} Varun Pasunoori</p>
<nav className="flex gap-4 opacity-80">
<a href="#projects">Projects</a>
<a href="#skills">Skills</a>
<a href="#about">About</a>
<a href="#contact">Contact</a>
</nav>
</div>
</footer>
)
}