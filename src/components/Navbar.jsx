import { useEffect, useState } from "react"
import { Sun, Moon, Github } from "lucide-react"

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  )

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [dark])

  const nav = [
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-white/60 dark:bg-slate-950/60 border-b border-slate-200/60 dark:border-slate-800/60">
      <div className="container-xl flex items-center justify-between py-3">
        {/* brand */}
        <a href="#" className="text-xl font-extrabold tracking-tight">
          <span className="text-slate-100">varun</span>
          <span className="text-slate-400">.dev</span>
        </a>

        <div className="flex items-center gap-2">
          {/* grey GitHub button */}
          <a
            className="btn-ghost hidden sm:inline-flex"
            href="https://github.com/varun127"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={18} />
            <span>GitHub</span>
          </a>

          <button
            aria-label="Toggle theme"
            className="btn-outline"
            onClick={() => setDark((d) => !d)}
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            className="btn-outline sm:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle Menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* mobile menu */}
      <div
        className={`sm:hidden ${open ? "block" : "hidden"} border-t border-slate-200 dark:border-slate-800`}
      >
        <div className="container-xl py-2 flex flex-col">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="py-2"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
