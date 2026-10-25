import { useEffect } from 'react'
import './umbrella.css'

const EMAIL = 'hello@aymtechmedia.com'
const PHONE = '(608) 470-2143'
const STUDIO_URL = 'https://aym-studio.pages.dev'

const companies = [
  {
    name: 'AYM Studio',
    color: '#ff6a3d',
    glow: 'rgba(255,106,61,.22)',
    tag: 'Ads, video and websites',
    for: 'For growing businesses',
    description: 'Short-form ads, brand video and fast websites that turn attention into customers.',
    href: STUDIO_URL,
    action: 'Visit AYM Studio',
  },
  {
    name: 'AYM Cloud Systems',
    color: '#2dd4bf',
    glow: 'rgba(45,212,191,.2)',
    tag: 'Cloud and platform engineering',
    for: 'For organizations running serious systems',
    description: 'Cloud infrastructure, APIs, applications and modernization delivery, from architecture to production.',
    href: 'https://aymcloudsystems.com',
    action: 'Visit AYM Cloud Systems',
  },
  {
    name: 'AYM Explains',
    color: '#f5b544',
    glow: 'rgba(245,181,68,.2)',
    tag: 'Independent media',
    for: 'For curious audiences and partners',
    description: 'Visual explainers that make technology, science and global systems easy to understand.',
    href: `mailto:${EMAIL}?subject=${encodeURIComponent('AYM Explains: media inquiry')}`,
    action: 'Media inquiries',
  },
]

const ext = (href) => (href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})

// Aceternity-style spotlight: the glow follows the pointer (or finger).
function trackSpot(e) {
  const r = e.currentTarget.getBoundingClientRect()
  const p = e.touches ? e.touches[0] : e
  e.currentTarget.style.setProperty('--mx', `${p.clientX - r.left}px`)
  e.currentTarget.style.setProperty('--my', `${p.clientY - r.top}px`)
}

function CompanyCard({ c, i }) {
  return (
    <a data-rise style={{ animationDelay: `${i * 0.08}s` }} href={c.href} {...ext(c.href)}
      onPointerMove={trackSpot} onTouchStart={(e) => { trackSpot(e); e.currentTarget.classList.add('is-touch') }}
      className="atm-card group flex flex-col p-7 md:p-8" style={{ '--glow': c.glow }}>
      <span className="spot" />
      {i === 0 && <span className="atm-beam" style={{ '--beam': c.color }} />}
      <div className="flex items-center gap-3">
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: c.color, boxShadow: `0 0 16px ${c.color}` }} />
        <span className="text-xs uppercase tracking-[0.18em] text-[var(--mute)]">{c.tag}</span>
      </div>
      <h3 className="atm-serif mt-6 text-[2.4rem] leading-none md:text-5xl">{c.name}</h3>
      <p className="mt-2 text-sm" style={{ color: c.color }}>{c.for}</p>
      <p className="mt-5 flex-1 leading-relaxed text-[var(--mute)]">{c.description}</p>
      <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[var(--text)]">
        {c.action}<span className="transition-transform group-hover:translate-x-1">→</span>
      </span>
    </a>
  )
}

export default function UmbrellaSite() {
  useEffect(() => {
    const description = 'AYM Studio, AYM Cloud Systems and AYM Explains.'
    document.title = 'AYM Tech Media | Studio, Cloud Systems and Explains'
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', document.title)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description)
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', document.title)
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', description)
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', '#07080b')
    if (!document.getElementById('atm-fonts')) {
      const link = document.createElement('link')
      link.id = 'atm-fonts'
      link.rel = 'stylesheet'
      link.href = 'https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600&family=Instrument+Serif:ital@0;1&display=swap'
      document.head.appendChild(link)
    }
  }, [])

  return <div className="atm">
    <a className="atm-skip" href="#main">Skip to content</a>
    <div className="atm-beams" aria-hidden="true" />
    <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[900px] overflow-hidden">
      <span className="atm-beam-line" style={{ left: '22%' }} /><span className="atm-beam-line" style={{ left: '64%', opacity: .6 }} />
    </div>

    <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-[#07080b]/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-2.5 text-[15px] font-medium tracking-tight">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-white text-[11px] font-semibold text-black">AYM</span>
          AYM Tech Media
        </a>
        <div className="hidden gap-8 text-sm text-[var(--mute)] md:flex">
          <a href="#companies" className="hover:text-white">Companies</a>
          <a href="#work" className="hover:text-white">Work</a>
        </div>
        <a href={`mailto:${EMAIL}`} className="atm-btn atm-btn-ghost !px-4 !py-2 text-sm">Contact</a>
      </nav>
    </header>

    <main id="main" className="relative z-10">
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-20 md:pb-28 md:pt-32">
        <p data-rise style={{ animationDelay: `${0}s` }} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-[var(--mute)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#2dd4bf] shadow-[0_0_10px_#2dd4bf]" /> Based in Milwaukee · working everywhere
        </p>
        <h1 data-rise style={{ animationDelay: `${0.08}s` }} className="atm-serif atm-gradtext mt-7 text-[clamp(3.1rem,9vw,7rem)] leading-[0.95]">
          We build, explain<br />and market <em>technology.</em>
        </h1>
        <p data-rise style={{ animationDelay: `${0.16}s` }} className="mt-7 max-w-xl text-lg leading-relaxed text-[var(--mute)]">
          Three focused teams: AYM Studio, AYM Cloud Systems and AYM Explains.
        </p>
        <div data-rise style={{ animationDelay: `${0.24}s` }} className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a href="#companies" className="atm-btn atm-btn-primary">Explore what we do</a>
          <a href={`mailto:${EMAIL}`} className="atm-btn atm-btn-ghost">Get in touch</a>
        </div>
      </section>

      <section id="companies" className="mx-auto max-w-6xl px-6 pb-20 md:pb-28">
        <div className="grid gap-4 md:grid-cols-3 md:gap-5">
          {companies.map((c, i) => <CompanyCard key={c.name} c={c} i={i} />)}
        </div>
      </section>

      <section id="work" className="mx-auto max-w-6xl px-6 pb-20 md:pb-28">
        <div data-rise style={{ animationDelay: `${0}s` }} onPointerMove={trackSpot} className="atm-card grid gap-10 p-8 md:grid-cols-[1fr_1.3fr] md:p-14" style={{ '--glow': 'rgba(45,212,191,.16)' }}>
          <span className="spot" />
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--mute)]">Selected work · AYM Cloud Systems</p>
            <div className="atm-serif mt-6 text-7xl leading-none text-[#2dd4bf] md:text-8xl" style={{ textShadow: '0 0 40px rgba(45,212,191,.35)' }}>$100K+</div>
            <p className="mt-3 text-[var(--mute)]">grant funding secured by a platform we deliver</p>
          </div>
          <div className="md:border-l md:border-white/[0.08] md:pl-10">
            <h2 className="atm-serif text-4xl md:text-5xl">MyeloMetrix</h2>
            <p className="mt-4 leading-relaxed text-[var(--mute)]">AYM Cloud Systems is the principal technical delivery partner for a spinal MRI morphometry platform spanning cloud infrastructure, APIs, web and desktop applications, and medical-image processing.</p>
            <a href="https://myelometrix.com" target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-[#2dd4bf]">View MyeloMetrix <span>↗</span></a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 md:pb-28">
        <div data-rise style={{ animationDelay: `${0}s` }} className="atm-card p-8 text-center md:p-16" style={{ '--glow': 'rgba(255,106,61,.16)' }} onPointerMove={trackSpot}>
          <span className="spot" />
          <span className="atm-beam" style={{ '--beam': '#ffffff' }} />
          <h2 className="atm-serif atm-gradtext text-5xl leading-none md:text-7xl">Let's talk.</h2>
          <p className="mx-auto mt-5 max-w-md text-[var(--mute)]">Tell us what you're working on and we'll point you to the right team.</p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={`mailto:${EMAIL}`} className="atm-btn atm-btn-primary">Email us</a>
            <a href="tel:+16084702143" className="atm-btn atm-btn-ghost">{PHONE}</a>
          </div>
        </div>
      </section>
    </main>

    <footer className="relative z-10 border-t border-white/[0.06]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 pt-10 pb-[calc(2.5rem+env(safe-area-inset-bottom))] text-sm text-[var(--mute)] md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2.5 text-[var(--text)]">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-white text-[11px] font-semibold text-black">AYM</span>AYM Tech Media
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:gap-6">
          {companies.map(c => <a key={c.name} href={c.href} {...ext(c.href)} className="hover:text-white">{c.name}</a>)}
        </div>
        <div>© 2026 AYM Tech Media LLC</div>
      </div>
    </footer>
  </div>
}
