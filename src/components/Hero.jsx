import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const tickerItems = [
  'Now shipping — AI video analysis',
  'Autonomous micro-SaaS factory · v0.4',
  'Sports media property in production',
  'React Native app · TestFlight',
  'Content pipeline · 80% ↓ manual ops',
  'Generative thumbnail engine',
  'Creator analytics OS',
  'Dispatch №17 — the studio notebook',
]

function SignalBars() {
  const [levels, setLevels] = useState([0.4, 0.7, 0.55, 0.85, 0.62, 0.9, 0.45, 0.78, 0.6])
  useEffect(() => {
    const id = setInterval(() => {
      setLevels((prev) => prev.map(() => 0.25 + Math.random() * 0.75))
    }, 420)
    return () => clearInterval(id)
  }, [])
  return (
    <div className="flex items-end gap-[3px] h-10">
      {levels.map((l, i) => (
        <span
          key={i}
          className="w-[4px] bg-[color:var(--color-amber)]"
          style={{ height: `${l * 100}%`, transition: 'height 0.32s cubic-bezier(0.4,0,0.2,1)' }}
        />
      ))}
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative pt-[104px] pb-0 overflow-hidden">
      {/* Left edge ruler */}
      <div className="hidden md:flex flex-col justify-between absolute left-0 top-[120px] bottom-10 w-10 border-r border-[color:var(--color-rule)] font-mono text-[9px] uppercase tracking-[0.22em] text-[color:var(--color-mist)] py-6 px-2">
        <span>↑ 2022</span>
        <span className="rotate-90 origin-left translate-y-2">AYM · STUDIO</span>
        <span>↓ now</span>
      </div>

      <div className="relative mx-auto max-w-[1280px] px-6 md:px-10 lg:px-14 pt-10 pb-16">
        {/* Slate */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="section-slate mb-10"
        >
          <span>§00 — Prologue</span>
          <span className="rule-ticks" />
          <span>A Transmission from the Studio</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Headline column */}
          <div className="lg:col-span-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[clamp(54px,9.5vw,156px)] leading-[0.88] tracking-tight text-[color:var(--color-bone)]"
              style={{ fontVariationSettings: '"opsz" 144, "SOFT" 30, "wght" 360' }}
            >
              We build{' '}
              <span className="font-display-italic text-[color:var(--color-amber)]">content</span>,
              <br />
              <span className="font-display-italic text-[color:var(--color-amber)]">products</span>,
              <br />
              &amp; the systems
              <br />
              that carry them.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start"
            >
              <div className="md:col-span-5">
                <div className="flex items-center gap-3 mb-3 font-mono text-[10.5px] uppercase tracking-[0.24em] text-[color:var(--color-mist)]">
                  <span className="w-6 h-px bg-[color:var(--color-amber)]" />
                  Dispatch
                </div>
                <p className="text-[17px] leading-[1.55] text-[color:var(--color-bone)]/90 max-w-[42ch]">
                  AYM Tech Media is a product-first studio engineering at the seam
                  between storytelling and software. Media company energy, engineering
                  company depth — and a refusal to treat AI as a feature.
                </p>
              </div>
              <div className="md:col-span-5 md:col-start-7">
                <div className="flex items-center gap-3 mb-3 font-mono text-[10.5px] uppercase tracking-[0.24em] text-[color:var(--color-mist)]">
                  <span className="w-6 h-px bg-[color:var(--color-amber)]" />
                  Thesis
                </div>
                <p className="text-[17px] leading-[1.55] text-[color:var(--color-bone)]/90 max-w-[42ch]">
                  The next generation of media companies will also be technology
                  companies. We don&apos;t talk about shipping — we ship. Agents,
                  channels, apps, pipelines. Everything in the reel is live.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a href="#build" className="btn-console">
                Read the Reel <span aria-hidden>→</span>
              </a>
              <a href="#contact" className="btn-ghost">
                Open a Channel
              </a>
            </motion.div>
          </div>

          {/* Broadcast card column */}
          <motion.aside
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 lg:sticky lg:top-[120px]"
          >
            <div className="relative border border-[color:var(--color-rule)] bg-[color:var(--color-ink-2)]">
              {/* Card slate header */}
              <div className="flex items-center justify-between px-4 py-2 border-b border-[color:var(--color-rule)] font-mono text-[10px] uppercase tracking-[0.22em]">
                <span className="flex items-center gap-2 text-[color:var(--color-signal)]">
                  <span className="blink-dot inline-block w-[7px] h-[7px] rounded-full bg-[color:var(--color-signal)]" />
                  Rec
                </span>
                <span className="text-[color:var(--color-mist)]">Take 01 — 24 fps</span>
              </div>

              {/* CRT body */}
              <div className="relative scanlines p-5 min-h-[340px] flex flex-col justify-between">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-amber)] mb-3">
                    System · Online
                  </div>
                  <div className="font-display text-[42px] leading-[0.95] text-[color:var(--color-bone)]" style={{ fontVariationSettings: '"opsz" 144, "SOFT" 80, "wght" 460' }}>
                    “Don’t talk <br/>
                    about AI.<br/>
                    <span className="font-display-italic text-[color:var(--color-amber)]">Ship it.</span>”
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <SignalBars />
                  <div className="rule-ticks" />
                  <div className="grid grid-cols-2 gap-3 font-mono text-[10px] uppercase tracking-[0.22em]">
                    <div>
                      <div className="text-[color:var(--color-mist)]">Throughput</div>
                      <div className="text-[color:var(--color-bone)] text-[13px] mt-1">ship / week</div>
                    </div>
                    <div>
                      <div className="text-[color:var(--color-mist)]">Stack</div>
                      <div className="text-[color:var(--color-bone)] text-[13px] mt-1">py · next · rn</div>
                    </div>
                    <div>
                      <div className="text-[color:var(--color-mist)]">Mode</div>
                      <div className="text-[color:var(--color-lime)] text-[13px] mt-1">autonomous</div>
                    </div>
                    <div>
                      <div className="text-[color:var(--color-mist)]">Signal</div>
                      <div className="text-[color:var(--color-signal)] text-[13px] mt-1">hot</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between px-4 py-2 border-t border-[color:var(--color-rule)] font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-mist)]">
                <span>FRAME 00:00:01:12</span>
                <span>◉ LIVE</span>
              </div>
            </div>

            <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-mist)]">
              Fig. 01 · Studio transmission panel
            </div>
          </motion.aside>
        </div>
      </div>

      {/* Ticker bar */}
      <div className="relative border-y border-[color:var(--color-rule)] bg-[color:var(--color-ink-2)] py-4 overflow-hidden">
        <div className="marquee-track">
          {[...Array(2)].map((_, rep) => (
            <div key={rep} className="flex items-center gap-10 pr-10">
              {tickerItems.map((item, i) => (
                <span key={`${rep}-${i}`} className="flex items-center gap-10 font-mono text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-bone)]">
                  <span className="flex items-center gap-3">
                    <span className="w-[6px] h-[6px] rotate-45 bg-[color:var(--color-signal)]" />
                    {item}
                  </span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
