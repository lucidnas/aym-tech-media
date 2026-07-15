export default function Contact() {
  const email = 'contact@aymtechmedia.com'
  const subject = 'Modernization discussion | AYM Tech Media'
  const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}`
  // TODO: paste your Cal.com / Calendly link here to enable one-click booking.
  // While empty, the button falls back to email.
  const BOOKING_URL = ''
  const bookHref = BOOKING_URL || mailto

  return (
    <section id="contact">
      <div className="page">
        <div className="section-head">
          <div>
            <div className="label">§ 05 / Contact</div>
            <h2 className="section-title" style={{ marginTop: 8 }}>Start with the system you need to improve.</h2>
          </div>
        </div>

        <div className="contact-simple">
          <div>
            <h2 className="contact-headline">
              Discuss a modernization initiative.
            </h2>
            <p className="contact-lead">
              Share the current environment, operational concern, or application that
              needs to change. You will receive a direct response within two working days.
            </p>
            <a href={bookHref} className="btn btn-primary contact-email-btn">
              Request a capability discussion ↗
            </a>
          </div>

          <ul className="channels">
            <li className="ch">
              <span className="l">Email</span>
              <a href={mailto}>{email}</a>
            </li>
            <li className="ch">
              <span className="l">Hours</span>
              <span>Monday to Thursday · 10:00 to 18:00 GMT</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
