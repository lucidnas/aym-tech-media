import { useEffect, useState } from 'react'
import './umbrella.css'

const EMAIL = 'hello@aymtechmedia.com'
// Set to the Calendly URL; until then Book a call falls back to email.
const CALENDLY = 'https://calendly.com/aymtechmedia/discovery-call'
const BOOK = CALENDLY || `mailto:${EMAIL}?subject=${encodeURIComponent('Book a call')}`

const mail = (subject) => `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}`

const services = [
  {
    name: 'Websites',
    color: '#ff6a3d',
    glow: 'rgba(255,106,61,.22)',
    tag: 'Your 24/7 salesperson',
    for: 'Turn visitors into customers',
    description: 'Most people decide in seconds whether to call you. We build fast, mobile-first sites that show your best work and make booking one tap.',
    href: BOOK,
    action: 'Fix my website',
  },
  {
    name: 'Ads & video',
    color: '#2dd4bf',
    glow: 'rgba(45,212,191,.2)',
    tag: 'Facebook, Instagram, TikTok',
    for: 'Get in front of people nearby',
    description: 'Scroll-stopping video ads built from what your happy customers already say, made in hours, not weeks, and shown to people nearby who need you now.',
    href: BOOK,
    action: 'Get me more leads',
  },
  {
    name: 'Social media',
    color: '#f5b544',
    glow: 'rgba(245,181,68,.2)',
    tag: 'Done for you, every month',
    for: 'Stay the name they remember',
    description: 'Posts and reels that go out every week without you lifting a finger, keeping your business in front of the people who need you.',
    href: BOOK,
    action: 'Keep me posting',
  },
]

const steps = [
  ['Free review', 'We look at your website, reviews and social media, and show you exactly where customers are slipping away.'],
  ['We build', 'Your website, ads and posts, made around what your best customers already say about you.'],
  ['You get booked', 'More calls and bookings, with fresh posts every month to keep them coming.'],
]

const packages = [
  { name: 'Ad Sprint', pitch: '10 vertical video ads, delivered in 7 days.', items: ['3 opening versions of every ad, so you can test what works', 'Sized for Facebook, Instagram, TikTok and YouTube Shorts', 'Voiceover, music and captions', 'Your logo, colours and fonts'], featured: true },
  { name: 'Content Engine', pitch: 'Fresh posts and reels every month.', items: ['12 to 16 reels or posts a month', 'Made from your photos, videos and reviews', 'Posting calendar included', 'Cancel any time'] },
  { name: 'Website', pitch: 'A fast site that turns visitors into customers.', items: ['Designed around your brand', 'One-tap call, booking or quote form', 'Analytics set up', 'Hosting and care plans available'] },
  { name: 'Explainer video', pitch: 'Show how your service or product works.', items: ['Script, voice and animation', 'Great for your website and ads', '60 to 120 seconds', 'Two rounds of changes'] },
]

const faqs = [
  ['Is the free ad really free?', 'Yes. We make a short video ad for your business from your website, reviews and brand. It is yours to keep and use, whether you work with us or not.'],
  ['Do you need to film at my business?', 'No. We can start from your photos, reviews and brand. Real photos from your jobs make the ads even stronger, and we will tell you exactly what to shoot on your phone.'],
  ['Who owns the videos and the website?', 'You do. Every file is yours to post, run as ads or reuse.'],
  ['Can you run the ads for us?', 'Yes. Ad management is available once your first ads are ready.'],
  ['How much does it cost?', 'Every business is different, so we quote each project with a fixed scope and a fixed price before we start. No long-term contracts.'],
  ['Do you only work with Milwaukee businesses?', 'No. We are based in Milwaukee and work with businesses anywhere.'],
]

function HeroVisual() {
  return (
    <div className="relative mx-auto mt-16 h-[420px] w-full max-w-[460px] md:h-[460px]" aria-hidden="true">
      <div className="absolute left-0 top-10 w-[46%] rotate-[-6deg] rounded-[2rem] border border-white/10 bg-[#111318] p-2 shadow-[0_30px_60px_-20px_rgba(0,0,0,.8)]">
        <div className="flex aspect-[9/16] flex-col gap-4 rounded-[1.6rem] bg-gradient-to-b from-[#ff9a73] to-[#ff6a3d] p-4 text-left text-[#1a1714]">
          <span className="w-fit rounded-full bg-black/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider">Ad</span>
          <div className="atm-serif text-2xl leading-tight">Your offer, in the first second.</div>
        </div>
      </div>
      <div className="absolute right-0 top-0 w-[50%] rotate-[5deg] rounded-[2rem] border border-white/10 bg-[#111318] p-2 shadow-[0_30px_60px_-20px_rgba(0,0,0,.85)]">
        <div className="flex aspect-[9/16] flex-col gap-4 rounded-[1.6rem] bg-gradient-to-b from-[#123a36] to-[#0c1d1c] p-4 text-left text-white">
          <span className="w-fit rounded-full bg-white/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider">Reel</span>
          <div className="atm-serif text-2xl leading-tight">Show what you do best.</div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2dd4bf] text-[#07080b]">▶</div>
        </div>
      </div>
      <div className="absolute bottom-0 left-[12%] w-[78%] rounded-2xl border border-white/10 bg-[#14161c] p-3 text-left shadow-[0_30px_60px_-25px_rgba(0,0,0,.9)]">
        <div className="mb-3 flex gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-white/15" /><span className="h-2.5 w-2.5 rounded-full bg-white/15" /><span className="h-2.5 w-2.5 rounded-full bg-white/15" /></div>
        <div className="rounded-xl bg-white/[0.04] p-4">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-[#f5b544]">Website</span>
          <div className="atm-serif mt-1 text-xl leading-tight">Where the click turns into a customer.</div>
          <div className="mt-3 w-fit rounded-full bg-[#ff7a59] px-3 py-1.5 text-xs font-semibold text-[#1a1714]">Book now</div>
        </div>
      </div>
    </div>
  )
}

function FreeAdForm() {
  const [form, setForm] = useState({ business: '', link: '', email: '' })
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })
  const href = `mailto:${EMAIL}?subject=${encodeURIComponent(`Free ad: ${form.business || 'my business'}`)}&body=${encodeURIComponent(`Business: ${form.business}\nWebsite or Instagram: ${form.link}\nReply to: ${form.email}`)}`
  const field = 'w-full rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3.5 text-[var(--text)] placeholder:text-white/40 outline-none focus:border-[#ff7a59]'
  return (
    <form className="mx-auto mt-9 grid max-w-md gap-3 text-left" onSubmit={(e) => { e.preventDefault(); window.location.href = href }}>
      <input required className={field} placeholder="Business name" value={form.business} onChange={set('business')} aria-label="Business name" />
      <input required className={field} placeholder="Website or Instagram" value={form.link} onChange={set('link')} aria-label="Website or Instagram" />
      <input required type="email" className={field} placeholder="Your email" value={form.email} onChange={set('email')} aria-label="Your email" />
      <button className="atm-btn atm-btn-primary mt-1">Get a free ad</button>
    </form>
  )
}

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
      <p className="svc-for mt-2 text-sm" style={{ color: c.color }}>{c.for}</p>
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
    document.title = 'AYM Tech Media | Websites, Ads and Social Media'
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
          <a href="#packages" className="hover:text-white">Packages</a>
          <a href="#faq" className="hover:text-white">FAQ</a>
        </div>
        <a href={BOOK} {...ext(BOOK)} className="atm-btn atm-btn-ghost !px-4 !py-2 text-sm">Book a call</a>
      </nav>
    </header>

    <main id="main" className="relative z-10">
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-20 text-center md:pb-28 md:pt-32">
        <h1 data-rise style={{ animationDelay: `${0.08}s` }} className="atm-serif atm-gradtext pb-[0.14em] text-[clamp(2.2rem,7.4vw,5.6rem)] leading-[1.08] text-balance">
          Stop waiting for <span className="atm-hl">customers</span> to find you.<em className="mt-3 block md:mt-2">Be the first business they call.</em>
        </h1>
        <p data-rise style={{ animationDelay: `${0.16}s` }} className="mx-auto mt-9 max-w-xl text-base leading-relaxed text-[var(--mute)] md:text-lg">
          Get a free video ad made for your business within 24 hours. Test it on your customers. If it brings in business, we'll make you more.
        </p>
        <div data-rise style={{ animationDelay: `${0.24}s` }} className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <a href="#free-ad" className="atm-btn atm-btn-primary">Get a free ad</a>
          <a href="#services" className="atm-btn atm-btn-ghost">See what we do</a>
        </div>
        <p data-rise style={{ animationDelay: `${0.32}s` }} className="mx-auto mt-5 max-w-md text-sm text-[var(--mute)]">
          Yours to keep. No obligation, no pitch.
        </p>
        <ul data-rise className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-[var(--mute)]">
          {['Free ad within 24 hours', 'Test it on your customers first', 'Pay only when you want more', 'No long-term contracts'].map(t => <li key={t} className="flex items-center gap-2"><span className="text-[#2dd4bf]">✓</span>{t}</li>)}
        </ul>
        <HeroVisual />
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

      <section id="packages" className="mx-auto max-w-6xl px-6 pb-20 md:pb-28">
        <p data-rise className="text-xs uppercase tracking-[0.18em] text-[var(--mute)]">Packages</p>
        <h2 data-rise className="atm-serif mt-3 text-4xl md:text-5xl">Pick what you need.</h2>
        <p data-rise className="mt-3 max-w-xl text-[var(--mute)]">Every business is different, so we quote each project: fixed scope and a fixed price before we start.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {packages.map((p) => (
            <div key={p.name} data-rise onPointerMove={trackSpot} className="atm-card flex flex-col p-7" style={{ '--glow': p.featured ? 'rgba(255,122,89,.18)' : 'rgba(255,255,255,.07)' }}>
              <span className="spot" />
              {p.featured && <span className="atm-beam" style={{ '--beam': '#ff7a59' }} />}
              {p.featured && <span className="mb-3 w-fit rounded-full bg-[#ff7a59]/15 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#ff9a7d]">Most popular</span>}
              <h3 className="atm-serif text-3xl">{p.name}</h3>
              <p className="mt-2 text-[var(--text)]">{p.pitch}</p>
              <ul className="mt-5 grid gap-2.5 text-sm text-[var(--mute)]">
                {p.items.map((it) => <li key={it} className="flex gap-2"><span className="text-[#2dd4bf]">✓</span>{it}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-3xl px-6 pb-20 md:pb-28">
        <p data-rise className="text-xs uppercase tracking-[0.18em] text-[var(--mute)]">FAQ</p>
        <h2 data-rise className="atm-serif mt-3 text-4xl md:text-5xl">Good questions.</h2>
        <div className="mt-8 grid gap-3">
          {faqs.map(([q, a]) => (
            <details key={q} className="atm-card group px-6 py-5 md:px-7">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg">{q}<span className="faq-ic flex-none text-xl text-[var(--mute)] transition-transform">+</span></summary>
              <p className="mt-3 leading-relaxed text-[var(--mute)]">{a}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="free-ad" className="mx-auto max-w-6xl scroll-mt-24 px-6 pb-20 md:pb-28">
        <div data-rise style={{ animationDelay: `${0}s` }} className="atm-card p-8 text-center md:p-16" style={{ '--glow': 'rgba(255,106,61,.16)' }} onPointerMove={trackSpot}>
          <span className="spot" />
          <span className="atm-beam" style={{ '--beam': '#ffffff' }} />
          <h2 className="atm-serif atm-gradtext text-5xl leading-none md:text-7xl">Let's get your phone ringing.</h2>
          <p className="mx-auto mt-5 max-w-md text-[var(--mute)]">Tell us about your business and we'll make you a free custom video ad within 24 hours. Test it on your customers. No pitch, no pressure.</p>
          <FreeAdForm />
          <p className="mt-6 text-sm text-[var(--mute)]">Or <a href={BOOK} {...ext(BOOK)} className="text-[var(--text)] underline underline-offset-4">book a 15-minute call</a> first.</p>
        </div>
      </section>
    </main>

    <footer className="relative z-10 border-t border-white/[0.06]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 pt-10 pb-[calc(2.5rem+env(safe-area-inset-bottom))] text-sm text-[var(--mute)] md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2.5 text-[var(--text)]">
          <img src="/brand/logo-mark.svg" alt="" className="h-7 w-7" />AYM Tech Media
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:gap-6">
          <span>Custom apps, internal software, APIs and cloud systems: <a href="https://aymcloudsystems.com" target="_blank" rel="noreferrer" className="text-[var(--text)] underline-offset-4 hover:underline">visit AYM Cloud Systems</a></span>
        </div>
        <div>Based in Milwaukee · © 2026 AYM Tech Media LLC</div>
      </div>
    </footer>
  </div>
}
