import ConceptSwitcher from './ConceptSwitcher'

const practices = [
  ['Cloud foundations', 'Landing zones, networking, identity, infrastructure as code, and migration architecture.'],
  ['Delivery engineering', 'CI/CD systems, APIs, event-driven services, and reliable release automation.'],
  ['Operational resilience', 'Observability, recovery, incident readiness, runbooks, and knowledge transfer.'],
]

export default function ConceptAtlas() {
  return (
    <main className="atlas">
      <ConceptSwitcher active="04" />
      <header className="atlas-nav">
        <a href="/concept-atlas" className="atlas-brand"><strong>AYM</strong><span>Tech Media</span></a>
        <nav aria-label="Primary navigation"><a href="#atlas-practice">Practice</a><a href="#atlas-record">Record</a><a href="mailto:contact@aymtechmedia.com">Discuss an initiative</a></nav>
      </header>

      <section className="atlas-hero">
        <div className="atlas-hero-copy">
          <p>Cloud infrastructure and application modernization</p>
          <h1>Engineering confidence into critical systems.</h1>
          <a href="mailto:contact@aymtechmedia.com">Discuss an initiative</a>
        </div>
        <figure><img src="/designs/institutional-architecture.png" alt="Modern civic architecture with connected concrete and glass structures" /></figure>
      </section>

      <section className="atlas-thesis">
        <p>Modernization succeeds when architecture, delivery, and operations become one accountable system.</p>
      </section>

      <section className="atlas-practice" id="atlas-practice">
        <h2>Senior engineering across the full modernization path.</h2>
        <div className="atlas-practice-grid">
          {practices.map(([title, copy]) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>

      <section className="atlas-record" id="atlas-record">
        <div><strong>10+</strong><span>years in cloud infrastructure</span></div>
        <div><strong>300+</strong><span>systems supported through AWS migration</span></div>
        <div><strong>7,000+</strong><span>systems monitored across hybrid estates</span></div>
      </section>

      <section className="atlas-note">
        <div><span>Field notes</span><h2>Modernization decisions, explained clearly.</h2></div>
        <article><time>July 2026</time><h3>Why migration plans fail at the operating model</h3><a href="#atlas-contact">Read the note</a></article>
      </section>

      <footer className="atlas-footer" id="atlas-contact"><h2>Start with the system that needs to improve.</h2><a href="mailto:contact@aymtechmedia.com">contact@aymtechmedia.com</a><small>AYM Tech Media</small></footer>
    </main>
  )
}
