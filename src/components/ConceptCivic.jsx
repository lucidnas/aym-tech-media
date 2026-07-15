import ConceptSwitcher from './ConceptSwitcher'

const services = [
  ['Cloud foundations', 'Account structure, networking, migration architecture, and infrastructure as code.'],
  ['Delivery systems', 'CI/CD platforms, release automation, APIs, and event-driven services.'],
  ['Operational resilience', 'Monitoring, incident readiness, patching, recovery, and maintainable runbooks.'],
]

const record = [
  ['300+', 'systems supported through data center to AWS migration'],
  ['2,000+', 'CI/CD job containers launched each day'],
  ['7,000+', 'systems monitored across cloud and private infrastructure'],
]

export default function ConceptCivic() {
  return (
    <main className="civic">
      <ConceptSwitcher active="01" />
      <header className="civic-nav">
        <a className="civic-brand" href="/concept-civic">AYM <span>Tech Media</span></a>
        <nav aria-label="Concept navigation">
          <a href="#civic-services">Expertise</a>
          <a href="#civic-record">Experience</a>
          <a className="civic-contact-link" href="mailto:contact@aymtechmedia.com">Start a conversation</a>
        </nav>
      </header>

      <section className="civic-hero">
        <div className="civic-kicker">Cloud infrastructure and application modernization</div>
        <div className="civic-hero-grid">
          <h1>Critical systems deserve careful modernization.</h1>
          <div className="civic-hero-copy">
            <p>AYM Tech Media helps organizations move complex infrastructure and software forward with less operational risk.</p>
            <p>Every engagement is led by a senior cloud engineer with more than a decade of production experience.</p>
            <a href="mailto:contact@aymtechmedia.com">Discuss an initiative <span aria-hidden>↗</span></a>
          </div>
        </div>
      </section>

      <section className="civic-statement" aria-label="Approach">
        <p>Modernization is not only a migration. It is the work of making systems easier to operate, safer to change, and clearer to own.</p>
      </section>

      <section className="civic-services" id="civic-services">
        <div className="civic-section-label">Expertise</div>
        <div className="civic-service-list">
          {services.map(([title, copy], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <h2>{title}</h2>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="civic-record" id="civic-record">
        <div>
          <div className="civic-section-label">Selected experience</div>
          <h2>Built in environments where reliability is the work.</h2>
        </div>
        <dl>
          {record.map(([value, label]) => (
            <div key={value}>
              <dd>{value}</dd>
              <dt>{label}</dt>
            </div>
          ))}
        </dl>
      </section>

      <footer className="civic-footer">
        <h2>Start with the system that needs to improve.</h2>
        <a href="mailto:contact@aymtechmedia.com">contact@aymtechmedia.com</a>
        <span>Founder-led engineering</span>
      </footer>
    </main>
  )
}
