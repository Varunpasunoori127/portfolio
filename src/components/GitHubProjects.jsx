import { useEffect, useState } from "react"
import { Section } from "./Section"
import { ProjectCard } from "./ProjectCard"

export function GitHubProjects({ username = "varun127", take = 6 }) {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=${take * 2}`
        )
        if (!res.ok) throw new Error(`GitHub API ${res.status}`)
        const data = await res.json()
        const filtered = data.filter((r) => !r.fork).slice(0, take)
        setRepos(filtered)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [username, take])

  return (
    <Section
      id="projects"
      title="Projects"
      subtitle={`Recent repos from github.com/${username}`}
    >
      {loading && <p>Loading…</p>}
      {error && (
        <p className="text-red-500">
          Failed to load GitHub projects: {error}
        </p>
      )}
      {!loading && !error && (
        <>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((r) => (
              <ProjectCard
                key={r.id}
                title={r.name.replace(/-/g, " ")}
                description={r.description || "No description yet."}
                tags={[r.language || "JavaScript", "GitHub"]}
                link={r.homepage || r.html_url}
                repo={r.html_url}
              />
            ))}
          </div>
          <div className="mt-6">
            <a
              className="btn-ghost"
              href={`https://github.com/${username}?tab=repositories`}
              target="_blank"
              rel="noreferrer"
            >
              View all on GitHub
            </a>
          </div>
        </>
      )}
    </Section>
  )
}
