import ConceptSwitcher from './ConceptSwitcher'

const capabilities = [
  ['01', 'Assess', 'Current-state architecture, operational risk, cost, and migration planning.'],
  ['02', 'Modernize', 'Cloud foundations, IaC, CI/CD, APIs, web, desktop, and event-driven systems.'],
  ['03', 'Operate', 'Observability, incident readiness, recovery, maintenance, and knowledge transfer.'],
]

function SystemMap() {
  return (
    <div className="ops-map" aria-label="Modernization flow from legacy systems to operated cloud platform">
      <div className="ops-node ops-node-legacy"><span>01</span>Legacy systems</div>
      <div className="ops-node ops-node-foundation"><span>02</span>Cloud foundation</div>
      <div className="ops-node ops-node-delivery"><span>03</span>Automated delivery</div>
      <div className="ops-node ops-node-operations"><span>04</span>Operated platform</div>
      <svg viewBox="0 0 800 360" aria-hidden>
        <path d="M170 180 H300" />
        <path d="M500 180 H630" />
        <path d="M400 100 V55 H700 V145" />
      </svg>
    </div>
  )
}

export default function ConceptOps() {
  return (
    <main className="ops">
      <ConceptSwitcher active="02" />
      <header className="ops-nav">
        <a href="/concept-ops" className="ops-brand"><span>AYM</span> Tech Media</a>
        <div className="ops-status"><i /> Available for select engagements</div>
        <a href="mailto:contact@aymtechmedia.com" className="ops-nav-link">Contact ↗</a>
      </header>

      <section className="ops-hero">
        <div className="ops-hero-copy">
          <div className="ops-eyebrow">Infrastructure / Software / Operations</div>
          <h1>Modern systems.<br /><strong>Operational confidence.</strong></h1>
          <p>Cloud infrastructure and application modernization led by an engineer who has spent more than a decade building, migrating, and supporting production systems.</p>
          <div className="ops-actions">
            <a href="mailto:contact@aymtechmedia.com">Discuss an initiative</a>
            <a href="#ops-capabilities">View capabilities</a>
          </div>
        </div>
        <SystemMap />
      </section>

      <section className="ops-signal" aria-label="Experience metrics">
        <div><strong>10+</strong><span>years in cloud operations</span></div>
        <div><strong>300+</strong><span>systems in AWS migration</span></div>
        <div><strong>2K+</strong><span>daily CI/CD containers</span></div>
        <div><strong>7K+</strong><span>systems monitored</span></div>
      </section>

      <section className="ops-capabilities" id="ops-capabilities">
        <div className="ops-section-head">
          <span>Engagement model</span>
          <h2>One accountable path from assessment to operation.</h2>
        </div>
        <div className="ops-capability-grid">
          {capabilities.map(([number, title, copy]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="ops-proof">
        <div>
          <span className="ops-proof-label">Relevant delivery</span>
          <h2>Infrastructure depth with application range.</h2>
        </div>
        <ul>
          <li><span>Enterprise cloud</span>AWS migrations, multi-cloud operations, delivery platforms, and automation</li>
          <li><span>MyeloMetrix</span>Research script to production API, desktop application, and processing pipeline</li>
          <li><span>Dribul</span>Editorial web platform with fast delivery, data systems, and AI-assisted workflows</li>
        </ul>
      </section>

      <footer className="ops-footer">
        <div><span>AYM Tech Media</span><strong>Modernize what matters.</strong></div>
        <a href="mailto:contact@aymtechmedia.com">contact@aymtechmedia.com ↗</a>
      </footer>
    </main>
  )
}
