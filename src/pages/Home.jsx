import Header from '../components/Header'
import Hero from '../components/Hero'
import RoverSection from '../components/ModelViewer'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <RoverSection />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  )
}
