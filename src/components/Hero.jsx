export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="page">
        <div className="hero-status">
          <span className="hero-dot" aria-hidden />
          Available for new projects
        </div>
        <h1>
          We build <span className="accent">AI systems that survive production</span>.
        </h1>
        <p className="hero-sub">
          AYM Tech Media designs, ships, and operates AI-native products end to end —
          backed by 10+ years of real cloud infrastructure across AWS, Kubernetes, and
          disaster recovery. Fast demos are easy; systems that keep running are the point.
        </p>
        <div className="hero-actions">
          <a href="#work" className="btn btn-primary">See shipped work →</a>
          <a href="#contact" className="btn btn-ghost">Start a project</a>
        </div>
      </div>
    </section>
  )
}
