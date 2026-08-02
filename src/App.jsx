import { useEffect } from 'react'
import UnboxedMech from './components/UnboxedMech'
import DesignDirections from './components/DesignDirections'
import './directions.css'

function App() {
  useEffect(() => {
    const handler = (event) => {
      const link = event.target.closest('a[href^="#"]')
      if (!link) return
      const target = document.querySelector(link.getAttribute('href'))
      if (target) {
        event.preventDefault()
        target.scrollIntoView({ behavior: 'smooth' })
      }
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

  if (window.location.pathname === '/unboxedmech') return <UnboxedMech />
  return <DesignDirections />
}

export default App
