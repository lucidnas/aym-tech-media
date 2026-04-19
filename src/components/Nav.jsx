export default function Nav() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#top" className="brand">
          <span className="brand-mark" aria-hidden />
          AYM Tech Media
        </a>
        <nav className="nav-links">
          <a href="#work">Work</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#engagements">Engagements</a>
          <a href="#contact" className="nav-cta">Start a project →</a>
        </nav>
      </div>
    </header>
  )
}
