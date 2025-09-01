import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { GitHubProjects } from './components/GitHubProjects'
import { Skills } from './components/Skills'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <GitHubProjects username="varunPasunoori127" take={6} />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
