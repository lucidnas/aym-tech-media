export default function Footer() {
  const email = 'info@aymtechmedia.com'
  return (
    <footer>
      <div className="wrap">
        <span className="brand">
          <span className="brand-mark" aria-hidden /> AYM Tech Media
        </span>
        <a className="footer-email" href={`mailto:${email}`}>{email}</a>
        <span className="footer-note">© {new Date().getFullYear()} · Built in-house</span>
      </div>
    </footer>
  )
}
