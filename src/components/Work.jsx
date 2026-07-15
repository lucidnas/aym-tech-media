const work = [
  {
    n: '01',
    title: 'Enterprise cloud modernization',
    kind: 'AWS · multi-cloud operations · delivery platforms',
    desc: 'Supported the migration of more than 300 systems from on-premises infrastructure to AWS, built CI/CD infrastructure launching more than 2,000 job containers daily, and worked across environments monitoring more than 7,000 cloud and private infrastructure systems.',
    stack: ['AWS', 'Azure', 'Terraform', 'CloudFormation', 'ECS', 'Python'],
    yr: '10+ yrs',
  },
  {
    n: '02',
    title: 'MyeloMetrix',
    kind: 'Clinical research software · spinal-cord MRI · myelometrix.com',
    desc: 'Started as a researcher’s Python analysis script. Turned it into a production platform: a serverless pipeline that auto-segments and measures spinal-cord MRI, vertebral-level morphometry against normative data, a cross-platform desktop app for non-technical clinicians, and exportable clinical PDF reports.',
    stack: ['Modal', 'FastAPI', 'Electron', 'Python', 'DICOM/NIfTI'],
    yr: '2026',
    url: 'https://myelometrix.com',
  },
  {
    n: '03',
    title: 'Dribul',
    kind: 'Web · editorial platform · dribul.com',
    desc: 'Opinionated editorial tooling, fast pages, AI-assisted summarization.',
    stack: ['Next.js', 'Postgres', 'Elastic', 'Cloudflare'],
    yr: '2024',
    url: 'https://dribul.com',
  },
]

export default function Work() {
  return (
    <section id="work">
      <div className="page">
        <div className="section-head">
          <div>
            <div className="label">§ 03 / Relevant experience</div>
            <h2 className="section-title" style={{ marginTop: 8 }}>Systems delivered across infrastructure and applications.</h2>
          </div>
          <div className="label">{String(work.length).padStart(2, '0')} / {String(work.length).padStart(2, '0')}</div>
        </div>

        <ul className="work-list">
          {work.map((w) => {
            const Row = w.url ? 'a' : 'div'
            const externalProps = w.url
              ? { href: w.url, target: '_blank', rel: 'noopener noreferrer', 'aria-label': `Visit ${w.title}` }
              : {}

            return (
            <li key={w.n}>
              <Row className="work-row" {...externalProps}>
                <div className="idx">{w.n}</div>
                <div className="name">
                  <h3>
                    {w.title} {w.url && <span className="arrow" aria-hidden>↗</span>}
                  </h3>
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
                </div>
              </Row>
            </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
