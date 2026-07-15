const lanes = [
  {
    n: '01',
    title: 'Cloud foundations and migration',
    desc: 'Assessment, target architecture, account and network foundations, workload migration, and operational handoff. AWS · Azure · VMware.',
  },
  {
    n: '02',
    title: 'Infrastructure and delivery automation',
    desc: 'Repeatable infrastructure, safer releases, and less manual administration. Terraform · CloudFormation · Python · CI/CD.',
  },
  {
    n: '03',
    title: 'Reliability and cloud operations',
    desc: 'Observability, incident readiness, patching, disaster recovery, runbooks, and production support for systems that need to stay available.',
  },
  {
    n: '04',
    title: 'Application modernization',
    desc: 'Legacy workflows become maintainable APIs, event-driven services, web applications, desktop tools, and hosted processing pipelines.',
  },
]

export default function Capabilities() {
  return (
    <section id="capabilities">
      <div className="page">
        <div className="section-head">
          <div>
            <div className="label">§ 02 / Capabilities</div>
            <h2 className="section-title" style={{ marginTop: 8 }}>From cloud foundation to working software.</h2>
          </div>
          <div className="label">04 / 04</div>
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
