const engagements = [
  {
    tag: '01 / Assess',
    duration: 'Focused engagement',
    title: 'Modernization assessment',
    desc: 'Review the current environment, identify operational risk, and produce a practical target architecture and delivery plan.',
  },
  {
    tag: '02 / Deliver',
    duration: 'Milestone based',
    title: 'Modernization delivery',
    desc: 'Build the cloud foundation, automation, API, application, or migration workstream with documented milestones and clear ownership.',
  },
  {
    tag: '03 / Operate',
    duration: 'Ongoing or transitional',
    title: 'Operational support',
    desc: 'Stabilization, monitoring, incident readiness, maintenance, documentation, and knowledge transfer after delivery.',
  },
]

export default function Engagements() {
  return (
    <section id="engagements">
      <div className="page">
        <div className="section-head">
          <div>
            <div className="label">§ 04 / Engagements</div>
            <h2 className="section-title" style={{ marginTop: 8 }}>A clear path from assessment to operation.</h2>
          </div>
          <div className="label">03 / 03</div>
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
              <a href="#contact" className="cta">Discuss this engagement →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
