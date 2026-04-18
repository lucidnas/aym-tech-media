const engagements = [
  {
    tag: '01 / Sprint',
    duration: '2–4 wks',
    title: 'Scoping & prototype sprint',
    desc: 'Fuzzy idea in. Clickable prototype, technical plan, and defensible cost model out.',
    cta: 'Request a quote →',
  },
  {
    tag: '02 / Build',
    duration: '8–16 wks',
    title: 'Product build, v1 → launch',
    desc: 'One pod — design, engineering, ops. We ship v1 end-to-end.',
    cta: 'Request a quote →',
    featured: true,
  },
  {
    tag: '03 / Retainer',
    duration: 'Ongoing',
    title: 'Embedded Lab',
    desc: 'Design, engineering, and on-call as a standing function.',
    cta: 'Request a quote →',
  },
  {
    tag: '04 / Venture',
    duration: 'Case-by-case',
    title: 'Venture & co-build',
    desc: 'We build alongside you for equity or revenue share. Selective.',
    cta: 'Start a conversation →',
  },
]

export default function Engagements() {
  return (
    <section className="eng" id="engagements">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <div className="kicker" style={{ marginBottom: 14 }}>§ 04 — Engagements</div>
            <div className="title">Four ways <em>we work.</em></div>
          </div>
          <div></div>
          <div className="right">
            <div className="kicker">Formats</div>
            <div className="count">04</div>
          </div>
        </div>

        <div className="eng-grid">
          {engagements.map((e) => (
            <div key={e.tag} className={`eng-card${e.featured ? ' featured' : ''}`}>
              <div className="head">
                <div className="tag mono">{e.tag}</div>
                <div
                  className="mono"
                  style={{
                    fontSize: 11,
                    color: e.featured ? 'rgba(246,244,239,.6)' : 'var(--mute)',
                  }}
                >
                  {e.duration}
                </div>
              </div>
              <h5>{e.title}</h5>
              <p>{e.desc}</p>
              <div className="price">
                <a href="#contact" className="amt cta">{e.cta}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
