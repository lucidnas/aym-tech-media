import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <div className="left">
          <div className="meta-rail" style={{ marginBottom: 18 }}>§ 05 — Start a project</div>
          <h2>
            Tell us what you&apos;re <em>actually</em> trying to ship.
          </h2>
          <p style={{ marginTop: 20 }}>
            We read every message. Reply within two working days — fit or not.
          </p>

          <form onSubmit={onSubmit}>
            <label>
              Name
              <input type="text" placeholder="Your name" />
            </label>
            <label>
              Email
              <input type="email" placeholder="you@company.com" required />
            </label>
            <label>
              Discipline
              <select defaultValue="Product — mobile or web">
                <option>Product — mobile or web</option>
                <option>Intelligence — AI, video, voice</option>
                <option>Media — properties, editorial</option>
                <option>Infrastructure — cloud, DevOps</option>
                <option>Brand &amp; creative systems</option>
                <option>Not sure yet</option>
              </select>
            </label>
            <label>
              Engagement
              <select defaultValue="01 — Sprint">
                <option>01 — Sprint</option>
                <option>02 — Build</option>
                <option>03 — Retainer</option>
                <option>04 — Venture / co-build</option>
              </select>
            </label>
            <label className="full">
              Project in one paragraph
              <textarea placeholder="What you're building, for whom, what done looks like." />
            </label>
            <div className="submit">
              <button type="submit" style={sent ? { background: 'var(--accent-2)' } : undefined}>
                {sent ? (<>Sent — we&rsquo;ll be in touch <span>✓</span></>) : (<>Send inquiry <span>↗</span></>)}
              </button>
              <div className="note">Encrypted in transit · Replies in &lt; 48h</div>
            </div>
          </form>
        </div>

        <div className="right">
          <div className="channels">
            <div className="ch">
              <span className="l">Direct</span>
              <a href="mailto:studio@aymtech.media">studio@aymtech.media</a>
            </div>
            <div className="ch">
              <span className="l">Signal</span>
              <a href="#">@aymtech</a>
            </div>
          </div>
          <div
            className="channels"
            style={{ borderTop: '1px solid rgba(246,244,239,.15)', paddingTop: 20 }}
          >
            <div className="ch">
              <span className="l">Hours</span>
              <span>Mon — Thu · 10:00 → 18:00 GMT</span>
            </div>
            <div className="ch">
              <span className="l">HQ</span>
              <span>Remote, distributed across 4 tz</span>
            </div>
            <div className="ch">
              <span className="l">Status</span>
              <span style={{ color: 'var(--accent-2)' }}>● Accepting Q3 briefs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
