import { useEffect, useState } from 'react'
import ConceptSwitcher from './ConceptSwitcher'
import FusionCaseStudies from './FusionCaseStudies'
import FusionEditorial from './FusionEditorial'

const services = [
  ['01', 'Cloud foundations', 'Assessment, target architecture, account structure, networking, migration, and infrastructure as code.'],
  ['02', 'Delivery automation', 'CI/CD platforms, release engineering, APIs, event-driven systems, and repeatable deployment.'],
  ['03', 'Operational resilience', 'Observability, incident readiness, patching, recovery, runbooks, and knowledge transfer.'],
  ['04', 'Application modernization', 'Legacy workflows rebuilt as maintainable web, desktop, API, and hosted processing systems.'],
]

const metrics = [
  ['10+', 'years in cloud infrastructure'],
  ['300+', 'systems in AWS migration'],
  ['2,000+', 'daily CI/CD containers'],
  ['7,000+', 'systems monitored'],
]

function ArchitectureMap() {
  return (
    <div className="fusion-map" aria-label="Modernization path from legacy systems to an operated platform">
      <div className="fusion-map-head"><span>Modernization path</span><i>Architecture view 01</i></div>
      <div className="fusion-map-flow">
        {['Legacy systems', 'Cloud foundation', 'Automated delivery', 'Operated platform'].map((label, index) => (
          <div className="fusion-map-node" key={label}><span>0{index + 1}</span>{label}</div>
        ))}
      </div>
      <div className="fusion-map-note">Assess risk. Establish the platform. Automate change. Transfer operational control.</div>
    </div>
  )
}

export default function ConceptFusion({ showSwitcher = false }) {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('aym-theme')
    if (saved === 'light' || saved === 'dark') return saved
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    localStorage.setItem('aym-theme', theme)
  }, [theme])

  const nextTheme = theme === 'light' ? 'dark' : 'light'

  return (
    <main className="fusion" data-theme={theme}>
      {showSwitcher && <ConceptSwitcher active="03" />}
      <header className="fusion-nav">
        <a className="fusion-brand" href="/"><strong>AYM</strong><span>Tech Media</span></a>
        <nav aria-label="Primary navigation">
          <a href="#fusion-capabilities">Capabilities</a>
          <a href="#fusion-experience">Work</a>
          <a href="#fusion-insights">Insights</a>
          <a href="#fusion-contact">Contact</a>
        </nav>
        <button className="fusion-theme" onClick={() => setTheme(nextTheme)} aria-label={`Switch to ${nextTheme} mode`}>
          <span aria-hidden>{theme === 'light' ? '◐' : '○'}</span>{theme} mode
        </button>
      </header>

      <section className="fusion-hero">
        <div className="fusion-eyebrow"><i /> Cloud infrastructure and application modernization</div>
        <div className="fusion-hero-layout">
          <div className="fusion-hero-copy">
            <h1>Modernize critical systems.<br /><em>Keep operational control.</em></h1>
            <p>AYM Tech Media helps organizations migrate infrastructure, automate delivery, modernize applications, and operate reliable cloud platforms. Every engagement is led by a senior cloud infrastructure engineer.</p>
            <div className="fusion-actions">
              <a href="mailto:contact@aymtechmedia.com">Discuss an initiative <span>↗</span></a>
              <a href="#fusion-capabilities">Review capabilities</a>
            </div>
          </div>
          <ArchitectureMap />
        </div>
      </section>

      <FusionEditorial />

      <section className="fusion-metrics" aria-label="Selected experience">
        {metrics.map(([value, label]) => <div key={value}><strong>{value}</strong><span>{label}</span></div>)}
      </section>

      <section className="fusion-capabilities" id="fusion-capabilities">
        <div className="fusion-section-intro"><span>Capabilities / 04</span><h2>From cloud foundation to working software.</h2></div>
        <div className="fusion-service-list">
          {services.map(([number, title, copy]) => (
            <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p><i aria-hidden>↗</i></article>
          ))}
        </div>
      </section>

      <FusionCaseStudies />

      <footer className="fusion-footer" id="fusion-contact">
        <div><span>Start a conversation</span><h2>Start with the system that needs to improve.</h2></div>
        <a href="mailto:contact@aymtechmedia.com">contact@aymtechmedia.com <span>↗</span></a>
        <small>Founder-led engineering · AYM Tech Media</small>
      </footer>
    </main>
  )
}
