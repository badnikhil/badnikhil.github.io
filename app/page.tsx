import Navbar      from '@/components/ui/Navbar'
import Footer      from '@/components/ui/Footer'
import Hero        from '@/components/sections/Hero'
import StatsBanner from '@/components/sections/StatsBanner'
import About       from '@/components/sections/About'
import Experience  from '@/components/sections/Experience'
import Projects    from '@/components/sections/Projects'
import OpenSource  from '@/components/sections/OpenSource'
import Skills      from '@/components/sections/Skills'
import Achievements from '@/components/sections/Achievements'
import Contact     from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBanner />
        <About />
        <Experience />
        <Projects />
        <OpenSource />
        <Skills />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
