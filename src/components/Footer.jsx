const socialLinks = [
  { label: 'YouTube', href: '#' },
  { label: 'X / Twitter', href: '#' },
  { label: 'GitHub', href: 'https://github.com/lucidnas' },
  { label: 'LinkedIn', href: '#' },
]

const footerLinks = [
  { label: 'Dossier', href: '#about', slug: '§01' },
  { label: 'Signals', href: '#build', slug: '§02' },
  { label: 'Reel', href: '#products', slug: '§03' },
  { label: 'Manifesto', href: '#philosophy', slug: '§04' },
  { label: 'Transmission', href: '#contact', slug: '§05' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative border-t border-[color:var(--color-rule)]">
      {/* Huge outlined wordmark */}
      <div className="relative overflow-hidden border-b border-[color:var(--color-rule)]">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-14 py-16">
          <div
            className="font-display leading-[0.82] tracking-[-0.04em] select-none"
            style={{
              fontSize: 'clamp(120px, 23vw, 340px)',
              color: 'transparent',
              WebkitTextStroke: '1px var(--color-rule)',
              fontVariationSettings: '"opsz" 144, "SOFT" 80, "wght" 380',
            }}
            aria-hidden
          >
            AYM TECH
          </div>
          <div
            className="font-display-italic leading-[0.82] tracking-[-0.04em] mt-[-0.12em] select-none"
            style={{
              fontSize: 'clamp(120px, 23vw, 340px)',
              color: 'var(--color-amber)',
            }}
            aria-hidden
          >
            media.
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-14 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="font-mono text-[10.5px] uppercase tracking-[0.24em] text-[color:var(--color-mist)] mb-3">
              Studio
            </div>
            <p className="text-[15px] leading-[1.65] text-[color:var(--color-bone)]/80 max-w-[46ch]">
              AYM Tech Media is a product-first digital studio building content
              brands, AI-native software, and the autonomous systems that
              connect them.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-5">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="ink-link font-mono text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-bone)]"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <div className="font-mono text-[10.5px] uppercase tracking-[0.24em] text-[color:var(--color-mist)] mb-3">
              Index
            </div>
            <ul className="space-y-2">
              {footerLinks.map((l) => (
                <li key={l.label} className="flex items-baseline gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-amber)]">
                    {l.slug}
                  </span>
                  <a
                    href={l.href}
                    className="font-display text-[22px] leading-[1.1] text-[color:var(--color-bone)] ink-link"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="font-mono text-[10.5px] uppercase tracking-[0.24em] text-[color:var(--color-mist)] mb-3">
              Contact
            </div>
            <a
              href="mailto:nas2663@gmail.com"
              className="block font-display text-[22px] leading-[1.1] text-[color:var(--color-bone)] ink-link"
            >
              nas2663@gmail.com
            </a>
            <p className="mt-3 text-[13px] text-[color:var(--color-mist)] leading-[1.5]">
              Los Angeles — open to remote collaborations, creator
              partnerships, and the occasional strange little experiment.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[color:var(--color-rule)] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-mono text-[10.5px] uppercase tracking-[0.24em] text-[color:var(--color-mist)]">
          <span>© {year} AYM Tech Media LLC · All transmissions reserved</span>
          <span className="text-[color:var(--color-bone)]/70">
            Built with craft · shipped with conviction
          </span>
          <span>Ch. 001 — Off Air at EOF</span>
        </div>
      </div>
    </footer>
  )
}
