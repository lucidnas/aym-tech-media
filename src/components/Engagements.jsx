const engagements = [
  {
    tag: '01 / Consult',
    duration: '1 wk',
    title: 'Scoping & plan',
    desc: 'Discovery, technical plan, and a defensible cost model.',
  },
  {
    tag: '02 / Sprint',
    duration: '2–4 wks',
    title: 'Prototype or v1 slice',
    desc: 'A clickable prototype or shippable v1 slice of your product.',
  },
  {
    tag: '03 / Audit',
    duration: '1–2 wks',
    title: 'Technical & product review',
    desc: 'Architecture, velocity, roadmap — with actionable recommendations.',
  },
  {
    tag: '04 / Venture',
    duration: 'Case-by-case',
    title: 'Co-build with equity',
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
            <h2 className="section-title" style={{ marginTop: 8 }}>Four ways we work. Max four weeks.</h2>
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
