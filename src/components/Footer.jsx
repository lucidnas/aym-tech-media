export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <span className="brand">
          <span className="brand-mark" aria-hidden /> AYM Tech Media
        </span>
        <span>© {new Date().getFullYear()} AYM Tech Media · A lab that ships</span>
        <span>Built in-house</span>
      </div>
    </footer>
  )
}
