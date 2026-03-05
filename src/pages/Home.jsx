import Header from '../components/Header'
import Hero from '../components/Hero'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import RoverSection from '../components/ModelViewer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <RoverSection />
        <Contact />
      </main>
    </>
  )
}
