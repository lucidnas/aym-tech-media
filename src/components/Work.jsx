const work = [
  {
    n: '01',
    title: 'Dribul',
    kind: 'Web · News platform · dribul.com',
    desc: 'Opinionated editorial tooling, fast pages, AI-assisted summarization.',
    stack: ['Remix', 'Postgres', 'Elastic', 'Cloudflare'],
    yr: '2024',
    status: 'Live',
    live: true,
  },
  {
    n: '02',
    title: 'MyeloMetrix',
    kind: 'Web · Health metrics · myelometrix.com',
    desc: 'Spinal cord morphometry — CSA and AP diameter from MRI, longitudinal charts.',
    stack: ['Next.js', 'FastAPI', 'Postgres', 'HL7/FHIR'],
    yr: '2025',
    status: 'Beta',
    live: false,
  },
]

export default function Work() {
  return (
    <section id="work">
      <div className="page">
        <div className="section-head">
          <div>
            <div className="label">§ 02 — Work</div>
            <h2 className="section-title" style={{ marginTop: 8 }}>Selected, recent.</h2>
          </div>
          <div className="label">{String(work.length).padStart(2, '0')} / {String(work.length).padStart(2, '0')}</div>
        </div>

        <ul className="work-list">
          {work.map((w) => (
            <li key={w.n} className="work-row">
              <div className="idx">{w.n}</div>
              <div className="name">
                <h3>{w.title}</h3>
                <div className="kind">{w.kind}</div>
              </div>
              <div className="desc">{w.desc}</div>
              <div className="stack">
                {w.stack.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
              <div className="yr">
                <div>{w.yr}</div>
                <div className={`status${w.live ? '' : ' beta'}`}>
                  {w.live ? '● Live' : '● Beta'}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
