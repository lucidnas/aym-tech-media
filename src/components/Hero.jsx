export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div className="hero-top">
          <div className="left meta-rail">
            <span>Multi-disciplinary lab</span>
          </div>
          <div className="center">Index 01 / Lab</div>
          <div className="right meta-rail">
            <span>Currently shipping</span>
            <span style={{ color: 'var(--accent)' }}>● Open for Q3 engagements</span>
          </div>
        </div>

        <h1 className="hero-headline">
          We build{' '}
          <span className="accent">apps, AI tools, media &amp; infrastructure</span>{' '}
          — <em>shipped in weeks, not quarters.</em>
        </h1>

        <div className="hero-sub">
          <div>
            <div className="meta-rail" style={{ marginBottom: 10 }}>A / Positioning</div>
            <p className="lead">
              A multi-disciplinary technology lab across six lanes. Design,
              engineer, operate — end-to-end.
            </p>
          </div>
          <div>
            <div className="meta-rail" style={{ marginBottom: 10 }}>B / What we ship</div>
            <p>
              Apps on the App Store. Web products with paying users. AI in
              production. Infra we&apos;re paged for.
            </p>
            <div className="hero-tags">
              <span className="tag">iOS</span>
              <span className="tag">Web</span>
              <span className="tag">AI/ML</span>
              <span className="tag">Media</span>
              <span className="tag">Brand</span>
              <span className="tag">DevOps</span>
            </div>
          </div>
          <div>
            <div className="meta-rail" style={{ marginBottom: 10 }}>C / Lane status</div>
            <div className="hero-stats">
              <div className="row">
                <b>Product</b>
                <span style={{ color: 'var(--accent)' }}>● ACTIVE</span>
              </div>
              <div className="row">
                <b>Intelligence</b>
                <span>● EVALUATING</span>
              </div>
              <div className="row">
                <b>Infrastructure</b>
                <span style={{ color: 'var(--accent-2)' }}>● AT CAPACITY</span>
              </div>
            </div>
          </div>
        </div>

        <div className="disciplines">
          <div className="label">Disciplines ——</div>
          <ul>
            <li>Mobile apps</li>
            <li>Web products</li>
            <li>AI · video · voice</li>
            <li>Media properties</li>
            <li>Brand &amp; creative systems</li>
            <li>Cloud &amp; DevOps</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
