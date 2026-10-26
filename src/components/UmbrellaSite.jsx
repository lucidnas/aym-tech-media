import { useEffect } from 'react'
import './umbrella.css'

const EMAIL = 'hello@aymtechmedia.com'
// Set to the Calendly URL; until then Book a call falls back to email.
const LINKEDIN = 'https://www.linkedin.com/in/abdulnasirmohammed'
const CALENDLY = 'https://calendly.com/aymtechmedia/discovery-call'
const BOOK = CALENDLY || `mailto:${EMAIL}?subject=${encodeURIComponent('Book a call')}`

const mail = (subject) => `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}`

const services = [
  {
    name: 'Websites',
    color: '#ff6a3d',
    glow: 'rgba(255,106,61,.22)',
    tag: 'Fast, mobile-first sites',
    for: 'Turn visitors into customers',
    description: 'Clear pages that show your work, answer questions and make it one tap to call or book.',
    href: BOOK,
    action: 'Start a website',
  },
  {
    name: 'Ads & video',
    color: '#2dd4bf',
    glow: 'rgba(45,212,191,.2)',
    tag: 'Facebook, Instagram, TikTok',
    for: 'Get seen by the right people',
    description: 'Short ads and brand videos built from what your customers already love about you.',
    href: BOOK,
    action: 'Plan your ads',
  },
  {
    name: 'Content',
    color: '#f5b544',
    glow: 'rgba(245,181,68,.2)',
    tag: 'Social posts and explainers',
    for: 'Keep people coming back',
    description: 'A steady stream of posts, reels and visual explainers so you stay top of mind every month.',
    href: BOOK,
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
      <span className="atm-beam atm-beam-hover" style={{ '--beam': c.color }} />
      <div className="flex items-center gap-3">
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
          <img src="/brand/logo-mark.svg" alt="" className="h-7 w-7" />
          AYM Tech Media
        </a>
        <div className="hidden gap-8 text-sm text-[var(--mute)] md:flex">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#how" className="hover:text-white">How we work</a>
        </div>
        <a href={BOOK} {...ext(BOOK)} className="atm-btn atm-btn-ghost !px-4 !py-2 text-sm">Book a call</a>
      </nav>
    </header>

    <main id="main" className="relative z-10">
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-20 text-center md:pb-28 md:pt-32">
        <h1 data-rise style={{ animationDelay: `${0.08}s` }} className="atm-serif atm-gradtext pb-[0.14em] text-[clamp(3.1rem,9vw,7rem)] leading-[1.02]">
          More customers,<br /><em>less guesswork.</em>
        </h1>
        <p data-rise style={{ animationDelay: `${0.16}s` }} className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-[var(--mute)]">
          Websites, ads and content for cleaning companies, event decorators and other home-service businesses, built to bring you more customers.
        </p>
        <div data-rise style={{ animationDelay: `${0.24}s` }} className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <a href={BOOK} {...ext(BOOK)} className="atm-btn atm-btn-primary">Get your free review</a>
          <a href="#services" className="atm-btn atm-btn-ghost">See what we do</a>
        </div>
        <p data-rise style={{ animationDelay: `${0.32}s` }} className="mx-auto mt-5 max-w-md text-sm text-[var(--mute)]">
          A free 15-minute call. You leave with 3 ideas to get more customers, whether you hire us or not.
        </p>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-6 pb-20 md:pb-28">
        <div className="grid gap-4 md:grid-cols-3 md:gap-5">
          {services.map((c, i) => <ServiceCard key={c.name} c={c} i={i} />)}
        </div>
      </section>

      <section id="how" className="mx-auto max-w-6xl px-6 pb-20 md:pb-28">
        <p data-rise className="text-xs uppercase tracking-[0.18em] text-[var(--mute)]">How we work</p>
        <ol data-rise className="atm-card mt-6 grid md:grid-cols-3" style={{ '--glow': 'rgba(255,255,255,.06)' }}>
          {steps.map(([t, d], i) => (
            <li key={t} className="relative border-white/[0.08] p-7 md:p-9 [&:not(:first-child)]:border-t md:[&:not(:first-child)]:border-l md:[&:not(:first-child)]:border-t-0">
              <span className="font-mono text-xs tracking-[0.18em] text-white/50">STEP 0{i + 1}</span>
              <h3 className="atm-serif mt-3 text-3xl">{t}</h3>
              <p className="mt-3 leading-relaxed text-[var(--mute)]">{d}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-20 md:pb-24">
        <div data-rise className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
          <img src="/brand/founder.jpg" alt="Abdul, founder of AYM Tech Media" width="96" height="96" className="h-24 w-24 flex-none rounded-full border border-white/10 object-cover shadow-[0_20px_40px_-20px_rgba(0,0,0,.9)]" />
          <div>
            <p className="atm-serif text-3xl leading-tight">Hi, I'm Abdul.</p>
            <p className="mt-3 leading-relaxed text-[var(--mute)]">Need help with your website or Instagram while you run your business? That's where I come in. I build your site, make your ads and keep your content going, so more people find you, trust you and call. When you work with AYM Tech Media, you work with me.</p>
            <a href={LINKEDIN} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[var(--text)] hover:underline">Connect on LinkedIn <span>↗</span></a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 md:pb-28">
        <div data-rise style={{ animationDelay: `${0}s` }} className="atm-card p-8 text-center md:p-16" style={{ '--glow': 'rgba(255,106,61,.16)' }} onPointerMove={trackSpot}>
          <span className="spot" />
          <span className="atm-beam" style={{ '--beam': '#ffffff' }} />
          <h2 className="atm-serif atm-gradtext text-5xl leading-none md:text-7xl">Let's talk.</h2>
          <p className="mx-auto mt-5 max-w-md text-[var(--mute)]">15 minutes, no pitch deck. Tell us about your business and we'll send back a few free ideas to get you more customers.</p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={BOOK} {...ext(BOOK)} className="atm-btn atm-btn-primary">Book a call</a>
            <a href={`mailto:${EMAIL}`} className="atm-btn atm-btn-ghost">Email us</a>
          </div>
        </div>
      </section>
    </main>

    <footer className="relative z-10 border-t border-white/[0.06]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 pt-10 pb-[calc(2.5rem+env(safe-area-inset-bottom))] text-sm text-[var(--mute)] md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2.5 text-[var(--text)]">
          <img src="/brand/logo-mark.svg" alt="" className="h-7 w-7" />AYM Tech Media
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:gap-6">
          <span>Looking for cloud and software engineering? <a href="https://aymcloudsystems.com" target="_blank" rel="noreferrer" className="text-[var(--text)] underline-offset-4 hover:underline">Visit AYM Cloud Systems</a></span>
        </div>
        <div>Based in Milwaukee · © 2026 AYM Tech Media LLC</div>
      </div>
    </footer>
  </div>
}
