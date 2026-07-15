export default function Hero() {
  const proof = [
    { value: '10+ years', label: 'Cloud infrastructure and operations' },
    { value: '300+ systems', label: 'Supported through data center to AWS migration' },
    { value: '2,000+ daily', label: 'CI/CD job containers supported at scale' },
    { value: '7,000+ systems', label: 'Monitored across cloud and private infrastructure' },
  ]

  return (
    <section className="hero" id="top">
      <div className="page">
        <div className="hero-status">
          <span className="hero-dot" aria-hidden />
          Cloud infrastructure and application modernization
        </div>
        <h1>
          Modernize critical systems <span className="accent">without losing operational control</span>.
        </h1>
        <p className="hero-sub">
          AYM Tech Media helps organizations migrate infrastructure, automate delivery,
          modernize applications, and operate reliable cloud platforms. Every engagement
          is led by a cloud infrastructure engineer with more than a decade of hands-on
          experience across AWS, multi-cloud operations, automation, and production support.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary">Discuss an initiative →</a>
          <a href="#capabilities" className="btn btn-ghost">Review capabilities</a>
        </div>

        <dl className="proof-grid" aria-label="Selected experience">
          {proof.map((item) => (
            <div className="proof-item" key={item.value}>
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
