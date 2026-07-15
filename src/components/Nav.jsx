import { useState } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#top" className="brand" onClick={close}>
          <span className="brand-mark" aria-hidden />
          AYM Tech Media
        </a>
        <nav className={`nav-links${open ? ' nav-links--open' : ''}`}>
          <a href="#capabilities" onClick={close}>Capabilities</a>
          <a href="#work" onClick={close}>Experience</a>
          <a href="#engagements" onClick={close}>Engagements</a>
          <a href="#contact" className="nav-cta" onClick={close}>Discuss an initiative →</a>
        </nav>
        <button
          className={`nav-burger${open ? ' nav-burger--open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
