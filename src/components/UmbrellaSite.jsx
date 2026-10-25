import { useEffect } from 'react'
import './umbrella.css'

const EMAIL = 'hello@aymtechmedia.com'
const PHONE = '(608) 470-2143'

const mail = (subject) => `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}`

const services = [
  {
    name: 'Websites',
    color: '#ff6a3d',
    glow: 'rgba(255,106,61,.22)',
    tag: 'Fast, mobile-first sites',
    for: 'Turn visitors into customers',
    description: 'Clear pages that show your work, answer questions and make it one tap to call or book.',
    href: mail('New website'),
    action: 'Start a website',
  },
  {
    name: 'Ads & video',
    color: '#2dd4bf',
    glow: 'rgba(45,212,191,.2)',
    tag: 'Facebook, Instagram, TikTok',
    for: 'Get seen by the right people',
    description: 'Short ads and brand videos built from what your customers already love about you.',
    href: mail('Ads and video'),
    action: 'Plan your ads',
  },
  {
    name: 'Content',
    color: '#f5b544',
    glow: 'rgba(245,181,68,.2)',
    tag: 'Social posts and explainers',
    for: 'Keep people coming back',
    description: 'A steady stream of posts, reels and visual explainers so you stay top of mind every month.',
    href: mail('Monthly content'),
    action: 'Talk content',
  },
]

const steps = [
  ['We look', 'We study your site, reviews and social to find what is costing you customers.'],
  ['We build', 'Website, ads and content made around what your best customers already say.'],
  ['You grow', 'More calls and bookings, with fresh content every month to keep it going.'],
]

const ext = (href) => (href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})

// Aceternity-style spotlight: the glow follows the pointer (or finger).
function trackSpot(e) {
  const r = e.currentTarget.getBoundingClientRect()
  const p = e.touches ? e.touches[0] : e
  e.currentTarget.style.setProperty('--mx', `${p.clientX - r.left}px`)
  e.currentTarget.style.setProperty('--my', `${p.clientY - r.top}px`)
}

function ServiceCard({ c, i }) {
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
    const description = 'Websites, ads, video and content that bring growing businesses more customers.'
    document.title = 'AYM Tech Media | Websites, Ads and Content'
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
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#how" className="hover:text-white">How it works</a>
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
          More customers,<br /><em>less guesswork.</em>
        </h1>
        <p data-rise style={{ animationDelay: `${0.16}s` }} className="mt-7 max-w-xl text-lg leading-relaxed text-[var(--mute)]">
          Websites, ads and content for growing businesses, made to bring in more customers.
        </p>
        <div data-rise style={{ animationDelay: `${0.24}s` }} className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a href="#services" className="atm-btn atm-btn-primary">See what we do</a>
          <a href={`mailto:${EMAIL}`} className="atm-btn atm-btn-ghost">Get in touch</a>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-6 pb-20 md:pb-28">
        <div className="grid gap-4 md:grid-cols-3 md:gap-5">
          {services.map((c, i) => <ServiceCard key={c.name} c={c} i={i} />)}
        </div>
      </section>

      <section id="how" className="mx-auto max-w-6xl px-6 pb-20 md:pb-28">
        <p data-rise className="text-xs uppercase tracking-[0.18em] text-[var(--mute)]">How it works</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3 md:gap-5">
          {steps.map(([t, d], i) => (
            <div key={t} data-rise onPointerMove={trackSpot} className="atm-card p-7 md:p-8" style={{ '--glow': 'rgba(255,255,255,.08)', animationDelay: `${i * 0.08}s` }}>
              <span className="spot" />
              <span className="atm-serif text-5xl text-white/25">0{i + 1}</span>
              <h3 className="atm-serif mt-4 text-3xl">{t}</h3>
              <p className="mt-3 leading-relaxed text-[var(--mute)]">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 md:pb-28">
        <div data-rise style={{ animationDelay: `${0}s` }} className="atm-card p-8 text-center md:p-16" style={{ '--glow': 'rgba(255,106,61,.16)' }} onPointerMove={trackSpot}>
          <span className="spot" />
          <span className="atm-beam" style={{ '--beam': '#ffffff' }} />
          <h2 className="atm-serif atm-gradtext text-5xl leading-none md:text-7xl">Let's talk.</h2>
          <p className="mx-auto mt-5 max-w-md text-[var(--mute)]">Tell us about your business and we'll send back a few free ideas to get you more customers.</p>
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
          <span>Looking for cloud and software engineering? <a href="https://aymcloudsystems.com" target="_blank" rel="noreferrer" className="text-[var(--text)] underline-offset-4 hover:underline">Visit AYM Cloud Systems</a></span>
        </div>
        <div>© 2026 AYM Tech Media LLC</div>
      </div>
    </footer>
  </div>
}
