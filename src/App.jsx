import { useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Work from './components/Work'
import Capabilities from './components/Capabilities'
import Engagements from './components/Engagements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import UnboxedMech from './components/UnboxedMech'

function App() {
  const isUnboxedMech = window.location.pathname === '/unboxedmech'

  useEffect(() => {
    const handler = (e) => {
      const a = e.target.closest('a[href^="#"]')
      if (!a) return
      const id = a.getAttribute('href')
      if (id.length > 1) {
        const t = document.querySelector(id)
        if (t) {
          e.preventDefault()
          window.scrollTo({ top: t.offsetTop - 60, behavior: 'smooth' })
        }
      }
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

  if (isUnboxedMech) {
    return <UnboxedMech />
  }

  return (
    <>
      <Nav />
      <Hero />
      <Work />
      <Capabilities />
      <Engagements />
      <Contact />
      <Footer />
    </>
  )
}

export default App
