export default function Footer() {
  const email = 'contact@aymtechmedia.com'
  return (
    <footer>
      <div className="wrap">
        <span className="brand">
          <span className="brand-mark" aria-hidden /> AYM Tech Media
        </span>
        <a className="footer-email" href={`mailto:${email}`}>{email}</a>
        <span className="footer-note">© {new Date().getFullYear()} · Founder-led engineering</span>
      </div>
    </footer>
  )
}
