import ConceptSwitcher from './ConceptSwitcher'

const systems = [
  ['Foundation', 'Cloud architecture built for ownership, security, and controlled change.'],
  ['Flow', 'Delivery systems that make releases repeatable and visible.'],
  ['Continuity', 'Operations designed around recovery, observability, and clear responsibility.'],
]

export default function ConceptSignal() {
  return (
    <main className="signal">
      <ConceptSwitcher active="05" />
      <header className="signal-nav"><a href="/concept-signal" className="signal-brand">AYM<span>Tech Media</span></a><nav aria-label="Primary navigation"><a href="#signal-systems">Systems</a><a href="#signal-work">Work</a><a href="mailto:contact@aymtechmedia.com">Contact</a></nav></header>

      <section className="signal-hero">
        <img src="/designs/cinematic-infrastructure.png" alt="Steel bridge infrastructure disappearing into night fog" />
        <div className="signal-scrim" />
        <div className="signal-hero-copy"><p>Infrastructure. Software. Operations.</p><h1>Built to carry what matters.</h1><a href="mailto:contact@aymtechmedia.com">Discuss an initiative</a></div>
      </section>

      <section className="signal-intro"><p>AYM Tech Media modernizes cloud infrastructure and applications without losing operational control.</p><span>Senior-led from assessment through handover.</span></section>

      <section className="signal-systems" id="signal-systems">
        <h2>Three systems. One operating model.</h2>
        <div>{systems.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </section>

      <section className="signal-work" id="signal-work">
        <article><span>AWS migration</span><strong>300+</strong><p>Systems supported through data-center migration and cloud transition.</p></article>
        <article><span>Delivery scale</span><strong>2,000+</strong><p>CI/CD job containers launched each day across production delivery systems.</p></article>
      </section>

      <section className="signal-journal"><h2>Notes from the operating edge.</h2><a href="#signal-contact">Cloud migration is an organizational design problem <span>Read note</span></a><a href="#signal-contact">What reliable platforms make visible <span>Read note</span></a></section>

      <footer className="signal-footer" id="signal-contact"><div><span>AYM Tech Media</span><h2>Make the next change safer.</h2></div><a href="mailto:contact@aymtechmedia.com">contact@aymtechmedia.com</a></footer>
    </main>
  )
}
