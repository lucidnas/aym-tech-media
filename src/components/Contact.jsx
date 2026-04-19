export default function Contact() {
  const email = 'info@aymtechmedia.com'
  const subject = 'New project — AYM Tech Media'
  const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}`

  return (
    <section id="contact">
      <div className="page">
        <div className="section-head">
          <div>
            <div className="label">§ 05 — Start a project</div>
            <h2 className="section-title" style={{ marginTop: 8 }}>Open channel.</h2>
          </div>
        </div>

        <div className="contact-simple">
          <div>
            <h2 className="contact-headline">
              Send a brief. We&apos;ll reply within two working days — fit or not.
            </h2>
            <p className="contact-lead">
              Include your goal, current stack if any, deadline, and budget range.
            </p>
            <a href={mailto} className="btn btn-primary contact-email-btn">
              {email} ↗
            </a>
          </div>

          <ul className="channels">
            <li className="ch">
              <span className="l">Email</span>
              <a href={mailto}>{email}</a>
            </li>
            <li className="ch">
              <span className="l">Hours</span>
              <span>Mon–Thu · 10:00–18:00 GMT</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
