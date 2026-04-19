const engagements = [
  {
    tag: '01 / Sprint',
    duration: '2–4 wks',
    title: 'Scoping & prototype',
    desc: 'Fuzzy idea in. Clickable prototype, technical plan, and cost model out.',
  },
  {
    tag: '02 / Build',
    duration: '8–16 wks',
    title: 'Product build, v1 → launch',
    desc: 'One pod — design, engineering, ops. We ship v1 end to end.',
  },
  {
    tag: '03 / Embedded Lab',
    duration: 'Ongoing',
    title: 'Embedded as your studio',
    desc: 'Design, engineering, and on-call as a standing function.',
  },
  {
    tag: '04 / Venture',
    duration: 'Case-by-case',
    title: 'Venture & co-build',
    desc: 'We build alongside you for equity or revenue share. Selective.',
  },
]

export default function Engagements() {
  return (
    <section id="engagements">
      <div className="page">
        <div className="section-head">
          <div>
            <div className="label">§ 04 — Engagements</div>
            <h2 className="section-title" style={{ marginTop: 8 }}>Four ways we work.</h2>
          </div>
          <div className="label">04 / 04</div>
        </div>

        <div className="eng-grid">
          {engagements.map((e) => (
            <article key={e.tag} className="eng-card">
              <div className="head">
                <span>{e.tag}</span>
                <span>{e.duration}</span>
              </div>
              <h5>{e.title}</h5>
              <p>{e.desc}</p>
              <a href="#contact" className="cta">Request a quote →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
