const lanes = [
  {
    n: '01',
    title: 'Product',
    desc: 'Native apps, web products, consumer tools. Swift · Next · Remix · Expo · Stripe.',
  },
  {
    n: '02',
    title: 'Intelligence',
    desc: 'Video, voice, language — in production, not demos. Vision · Whisper · RAG · evals.',
  },
  {
    n: '03',
    title: 'Infrastructure',
    desc: 'Cloud, DevOps, release engineering. AWS · GCP · Railway · Modal · Terraform.',
  },
]

export default function Capabilities() {
  return (
    <section id="capabilities">
      <div className="page">
        <div className="section-head">
          <div>
            <div className="label">§ 03 — Capabilities</div>
            <h2 className="section-title" style={{ marginTop: 8 }}>Three lanes, one team.</h2>
          </div>
          <div className="label">03 / 03</div>
        </div>

        <ul className="caps-list">
          {lanes.map((l) => (
            <li key={l.n} className="caps-row">
              <div className="idx">{l.n}</div>
              <div className="n">{l.title}</div>
              <div className="blurb">{l.desc}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
