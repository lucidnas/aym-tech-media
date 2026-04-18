import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function CTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      <div ref={ref} className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-slate mb-10"
        >
          <span>§05 — Transmission</span>
          <span className="rule-ticks" />
          <span>Open channel · reply-all</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-[clamp(48px,8vw,132px)] leading-[0.9] tracking-tight text-[color:var(--color-bone)]"
              style={{ fontVariationSettings: '"opsz" 144, "SOFT" 50, "wght" 380' }}
            >
              Let’s build <br />
              <span className="font-display-italic text-[color:var(--color-amber)]">something</span> <br />
              together.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-8 max-w-[50ch] text-[17px] leading-[1.65] text-[color:var(--color-bone)]/80"
            >
              A media brand that needs a product. A product that needs a story.
              A system that needs to run while you sleep. If it involves
              shipping, we’re interested.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a href="mailto:nas2663@gmail.com?subject=Channel%20Request%20—%20AYM" className="btn-console">
                Transmit a message <span aria-hidden>↗</span>
              </a>
              <a href="mailto:nas2663@gmail.com" className="font-mono text-[12px] uppercase tracking-[0.22em] text-[color:var(--color-bone)] ink-link">
                nas2663@gmail.com
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="lg:col-span-5"
          >
            <div className="border border-[color:var(--color-rule)] bg-[color:var(--color-ink-2)]">
              <div className="flex items-center justify-between px-4 py-2 border-b border-[color:var(--color-rule)] font-mono text-[10px] uppercase tracking-[0.22em]">
                <span className="text-[color:var(--color-lime)]">● Ready</span>
                <span className="text-[color:var(--color-mist)]">Studio · Mailroom</span>
              </div>
              <div className="scanlines p-6 font-mono text-[12.5px] leading-[1.8] text-[color:var(--color-bone)]/85">
                <div className="text-[color:var(--color-mist)]">&gt; from</div>
                <div className="mb-3">you@<span className="text-[color:var(--color-amber)]">(your brand)</span>.com</div>
                <div className="text-[color:var(--color-mist)]">&gt; to</div>
                <div className="mb-3">nas2663@gmail.com</div>
                <div className="text-[color:var(--color-mist)]">&gt; re</div>
                <div className="mb-3">We want to build _______</div>
                <div className="text-[color:var(--color-mist)]">&gt; deliverables</div>
                <div className="mb-3">media · products · systems · any combination</div>
                <div className="text-[color:var(--color-mist)]">&gt; priority</div>
                <div className="text-[color:var(--color-signal)]">HIGH — ship this quarter</div>
              </div>
              <div className="flex items-center justify-between px-4 py-2 border-t border-[color:var(--color-rule)] font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-mist)]">
                <span>Protocol · AYM</span>
                <span>◉ Open</span>
              </div>
            </div>

            <div className="mt-4 font-mono text-[10px] uppercase tracking-[0.24em] text-[color:var(--color-mist)]">
              Typical reply · within two business days
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
