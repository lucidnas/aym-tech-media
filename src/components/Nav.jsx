export default function Nav() {
  return (
    <nav className="nav">
      <div className="brand">
        <div className="brand-mark"></div>
        <div className="brand-name">
          AYM Tech Media<span> / Lab</span>
        </div>
      </div>
      <div className="nav-links">
        <a href="#work">Work</a>
        <a href="#capabilities">Capabilities</a>
        <a href="#engagements">Engagements</a>
        <a href="#contact">Contact</a>
      </div>
      <a href="#contact" className="nav-cta">Start a project →</a>
    </nav>
  )
}
