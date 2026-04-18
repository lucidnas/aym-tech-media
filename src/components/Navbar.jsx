import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Dossier', href: '#about', slug: '§01' },
  { label: 'Signals', href: '#build', slug: '§02' },
  { label: 'Reel', href: '#products', slug: '§03' },
  { label: 'Manifesto', href: '#philosophy', slug: '§04' },
]

function useClock() {
  const [time, setTime] = useState(() => new Date())
  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(id)
  }, [])
  return time
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const time = useClock()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const hhmmss = time.toISOString().slice(11, 19)

  return (
    <>
      {/* Top status bar */}
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div
          className={`transition-colors duration-500 ${
            scrolled ? 'bg-[#0b0a08]/92 backdrop-blur-md' : 'bg-transparent'
          }`}
        >
          {/* micro status strip */}
          <div className="flex items-center justify-between gap-4 px-4 sm:px-6 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.22em] text-[color:var(--color-mist)] border-b border-[color:var(--color-rule)]">
            <div className="flex items-center gap-3 sm:gap-5">
              <span className="flex items-center gap-1.5">
                <span className="blink-dot inline-block w-[7px] h-[7px] rounded-full bg-[color:var(--color-signal)]" />
                <span className="text-[color:var(--color-signal)]">On Air</span>
              </span>
              <span className="hidden sm:inline">TX · {hhmmss} UTC</span>
              <span className="hidden md:inline">LAT 34.05° N · LON 118.24° W</span>
            </div>
            <div className="flex items-center gap-3 sm:gap-5">
              <span className="hidden sm:inline">Ch. 001 — AYM</span>
              <span>MMXXVI</span>
            </div>
          </div>

          {/* main nav */}
          <div className="flex items-center justify-between gap-6 px-4 sm:px-6 h-14 border-b border-[color:var(--color-rule)]">
            <a href="#" className="flex items-end gap-2 group">
              <span className="font-display font-display text-[28px] leading-none text-[color:var(--color-bone)] group-hover:text-[color:var(--color-amber)] transition-colors">
                AYM
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[color:var(--color-mist)] pb-1">
                Tech·Media
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group flex items-baseline gap-1.5 text-[color:var(--color-bone)]"
                >
                  <span className="font-mono text-[10px] text-[color:var(--color-mist)] group-hover:text-[color:var(--color-amber)] transition-colors">
                    {link.slug}
                  </span>
                  <span className="ink-link text-sm">{link.label}</span>
                </a>
              ))}
            </nav>

            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-ink)] bg-[color:var(--color-amber)] px-3 py-2 hover:bg-[color:var(--color-paper)] transition-colors"
            >
              Open Channel
              <span aria-hidden>→</span>
            </a>

            <button
              onClick={() => setMobileOpen((o) => !o)}
              className="md:hidden font-mono text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-bone)] border border-[color:var(--color-rule)] px-3 py-2"
            >
              {mobileOpen ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#0b0a08]/96 backdrop-blur-md border-b border-[color:var(--color-rule)] overflow-hidden"
            >
              <div className="px-4 py-3 flex flex-col">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-baseline gap-3 py-3 border-b border-[color:var(--color-rule)] last:border-b-0"
                  >
                    <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[color:var(--color-amber)]">
                      {link.slug}
                    </span>
                    <span className="font-display text-xl text-[color:var(--color-bone)]">
                      {link.label}
                    </span>
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-3 py-3 text-center font-mono text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-ink)] bg-[color:var(--color-amber)]"
                >
                  Open Channel →
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  )
}
