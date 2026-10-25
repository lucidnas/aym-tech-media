// Previous AYM Tech Media umbrella page (before the AYM Studio–style redesign, 2026-10-24).
// It was never committed; kept here so it can be restored. Styles: legacy/umbrella-live-extracted.css.
import { useEffect } from 'react'
import './umbrella-live-extracted.css'

const portfolio = [
  {
    index: '01',
    status: 'Active practice',
    name: 'AYM Cloud Systems',
    description: 'Cloud infrastructure, platform engineering, APIs, applications, and modernization delivery for organizations operating consequential systems.',
    href: 'https://aymcloudsystems.com',
    action: 'Visit the practice',
  },
  {
    index: '02',
    status: 'Independent media',
    name: 'AYM Explains',
    description: 'Independent visual explainers that turn complex technology, science, infrastructure, and global systems into accessible stories.',
    href: '#contact',
    action: 'Media inquiries',
  },
  {
    index: '03',
    status: 'Product ventures',
    name: 'Selected digital products',
    description: 'Research-led products and digital platforms developed through focused technical partnerships, from early architecture to working systems.',
    href: '#work',
    action: 'How we participate',
  },
]

function Mark() {
  return <span className="atm-mark" aria-hidden="true"><i/><i/><i/></span>
}

export default function UmbrellaSite() {
  useEffect(() => {
    const description = 'AYM Tech Media LLC develops and supports specialized technology practices, digital products, and independent media.'
    document.title = 'AYM Tech Media | Technology, Products, and Independent Media'
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', document.title)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description)
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', document.title)
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', description)
  }, [])

  return <div className="atm-site">
    <a className="atm-skip" href="#main">Skip to content</a>
    <header className="atm-nav">
      <a className="atm-brand" href="/" aria-label="AYM Tech Media home"><Mark/><span>AYM Tech Media</span></a>
      <nav aria-label="Primary navigation">
        <a href="#company">Company</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#principles">Principles</a>
      </nav>
      <a className="atm-contact-link" href="mailto:hello@aymtechmedia.com">Contact</a>
    </header>

    <main id="main">
      <section className="atm-hero" id="company">
        <div className="atm-hero-copy">
          <p className="atm-label">Independent technology company</p>
          <h1>One company.<br/>Several focused<br/><em>directions.</em></h1>
          <p className="atm-intro">AYM Tech Media LLC develops and supports specialized technology practices, digital products, and independent media.</p>
        </div>
        <div className="atm-operating-field" aria-label="AYM Tech Media works across systems, products, and media">
          <div className="atm-field-heading"><span>Operating field</span><span>Three focused directions</span></div>
          <div className="atm-field-list">
            <div><i>01</i><strong>Systems</strong><span>Infrastructure and platforms</span></div>
            <div><i>02</i><strong>Products</strong><span>Tools and digital ventures</span></div>
            <div><i>03</i><strong>Media</strong><span>Independent explanation</span></div>
          </div>
          <div className="atm-field-signature"><Mark/><span>One operating company</span></div>
        </div>
        <a className="atm-scroll" href="#portfolio">Explore the company <span>↓</span></a>
      </section>

      <section className="atm-statement">
        <p>Company model</p>
        <h2>Shared expertise across systems, products, and independent media.</h2>
        <p>We bring engineering, product development, and publishing together with focused leadership and disciplined execution.</p>
      </section>

      <section className="atm-portfolio" id="portfolio">
        <header><p className="atm-label">Operating portfolio</p><h2>Focused work,<br/>built with one standard.</h2></header>
        <div className="atm-portfolio-list">
          {portfolio.map(item => <article key={item.index}>
            <span className="atm-index">{item.index}</span>
            <div><p className="atm-status">{item.status}</p><h3>{item.name}</h3></div>
            <p>{item.description}</p>
            <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer' : undefined}>{item.action}<span>↗</span></a>
          </article>)}
        </div>
      </section>

      <section className="atm-work" id="work">
        <div className="atm-work-signal"><span>Built through the portfolio</span><strong>$100K+</strong><small>grant funding secured by a supported project</small></div>
        <div><p className="atm-label">Selected platform work</p><h2>MyeloMetrix</h2><p>AYM Cloud Systems serves as principal technical delivery partner for a spinal MRI morphometry platform spanning cloud infrastructure, APIs, web, desktop applications, and medical-image processing.</p><a href="https://myelometrix.com" target="_blank" rel="noreferrer">View MyeloMetrix <span>↗</span></a></div>
      </section>

      <section className="atm-principles" id="principles">
        <header><p className="atm-label">Operating principles</p><h2>Small by design.<br/>Serious about the work.</h2></header>
        <ol>
          <li><span>01</span><div><h3>Focused work</h3><p>Each practice has a clear scope, accountable leadership, and work its audience can evaluate.</p></div></li>
          <li><span>02</span><div><h3>Technical substance</h3><p>Claims should be supported by working systems, documented decisions, and visible evidence.</p></div></li>
          <li><span>03</span><div><h3>Durable ownership</h3><p>Products and practices should be structured for accountable operation, not temporary presentation.</p></div></li>
        </ol>
      </section>
    </main>

    <footer id="contact" className="atm-footer">
      <div><p className="atm-label">Start a conversation</p><h2>Where should the next<br/>direction lead?</h2></div>
      <div className="atm-footer-contact"><a href="mailto:hello@aymtechmedia.com">hello@aymtechmedia.com</a><p>AYM Tech Media LLC</p></div>
      <div className="atm-footer-base"><a className="atm-brand" href="/"><Mark/><span>AYM Tech Media</span></a><span>© 2026 AYM Tech Media LLC</span><a href="https://aymcloudsystems.com">AYM Cloud Systems ↗</a></div>
    </footer>
  </div>
}
