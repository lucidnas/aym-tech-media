import { useEffect } from 'react'
import UnboxedMech from './components/UnboxedMech'
import ConceptCivic from './components/ConceptCivic'
import ConceptOps from './components/ConceptOps'
import ConceptFusion from './components/ConceptFusion'
import ConceptAtlas from './components/ConceptAtlas'
import ConceptSignal from './components/ConceptSignal'

function App() {
  const isUnboxedMech = window.location.pathname === '/unboxedmech'
  const isCivicConcept = window.location.pathname === '/concept-civic'
  const isOpsConcept = window.location.pathname === '/concept-ops'
  const isFusionConcept = window.location.pathname === '/concept-fusion'
  const isAtlasConcept = window.location.pathname === '/concept-atlas'
  const isSignalConcept = window.location.pathname === '/concept-signal'

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

  if (isCivicConcept) return <ConceptCivic />
  if (isOpsConcept) return <ConceptOps />
  if (isFusionConcept) return <ConceptFusion showSwitcher />
  if (isAtlasConcept) return <ConceptAtlas />
  if (isSignalConcept) return <ConceptSignal />

  return <ConceptFusion />
}

export default App
