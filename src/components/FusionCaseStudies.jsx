const studies = [
  { className:'fusion-case-cloud', index:'01', label:'Enterprise cloud modernization', headline:'Infrastructure built for repeatable change.', copy:'Supporting hundreds of system migrations, a containerized delivery platform, and multi-cloud operations at enterprise scale.', facts:['300+ systems','2,000+ daily containers','AWS and Azure'] },
  { className:'fusion-case-myelo', index:'02', label:'MyeloMetrix', headline:'From research script to supported clinical software.', copy:'A Python analysis workflow transformed into a production API, desktop application, hosted pipeline, and exportable reporting system.', facts:['FastAPI','Electron','Serverless processing'] },
]

function CaseVisual({ type }) {
  if (type === 'fusion-case-cloud') return <div className="fusion-cloud-visual" aria-hidden><i/><i/><i/><i/><span>Platform / Delivery / Operations</span></div>
  return <div className="fusion-myelo-visual" aria-hidden><div className="fusion-scan"><i/><i/><i/></div><span>Analysis → API → Application</span></div>
}

export default function FusionCaseStudies() {
  return <section className="fusion-work" id="fusion-experience">
    <div className="fusion-work-head"><span>Selected engagements</span><h2>Proof, shown through systems.</h2></div>
    <div className="fusion-case-grid">{studies.map(study => <article className={`fusion-case ${study.className}`} key={study.index}>
      <div className="fusion-case-top"><span>{study.index}</span><span>{study.label}</span></div><CaseVisual type={study.className}/>
      <div className="fusion-case-copy"><h3>{study.headline}</h3><p>{study.copy}</p><ul>{study.facts.map(fact=><li key={fact}>{fact}</li>)}</ul></div>
    </article>)}</div>
  </section>
}
