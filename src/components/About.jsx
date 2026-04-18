import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const pillars = [
  {
    tag: 'A',
    label: 'Media',
    description: 'Audience-first brands across YouTube, social, and emergent formats — stories that earn the click.',
    color: 'var(--color-signal)',
  },
  {
    tag: 'Y',
    label: 'Products',
    description: 'AI-native software that solves a real problem, not a slide-deck problem. Useful, weird, shippable.',
    color: 'var(--color-amber)',
  },
  {
    tag: 'M',
    label: 'Systems',
    description: 'Autonomous agents that build, ship, iterate. The leverage layer under everything else.',
    color: 'var(--color-lime)',
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      <div ref={ref} className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-14">
        {/* Slate */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-slate mb-12"
        >
          <span>§01 — Dossier</span>
          <span className="rule-ticks" />
          <span>On the studio</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Column: headline + body */}
          <div className="lg:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-[clamp(36px,5.6vw,80px)] leading-[0.95] tracking-tight text-[color:var(--color-bone)] max-w-[18ch]"
              style={{ fontVariationSettings: '"opsz" 144, "SOFT" 40, "wght" 380' }}
            >
              A product-first <span className="font-display-italic text-[color:var(--color-amber)]">media</span> studio
              — engineered like a <span className="font-display-italic text-[color:var(--color-amber)]">software</span> company.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-10 max-w-[62ch]"
            >
              <p className="drop-cap text-[17px] leading-[1.75] text-[color:var(--color-bone)]/90">
                AYM Tech Media creates audience-first media across YouTube, social,
                and emerging formats — while engineering the autonomous agents,
                pipelines, and digital experiences that power modern storytelling
                and online engagement.
              </p>

              <p className="mt-6 text-[17px] leading-[1.75] text-[color:var(--color-bone)]/80">
                What separates us from a typical studio is depth: we ship AI-native
                products, not AI-branded content. Agent systems that build and
                deploy micro-SaaS apps. Video analysis tools. Content-creation
                pipelines that run unattended. The work is real and the code is
                in production.
              </p>

              <div className="mt-10 pl-6 border-l-2 border-[color:var(--color-amber)]">
                <p className="font-display-italic text-[28px] md:text-[34px] leading-[1.15] text-[color:var(--color-bone)]">
                  “We&apos;re builders — not consultants.”
                </p>
                <div className="mt-3 font-mono text-[10.5px] uppercase tracking-[0.24em] text-[color:var(--color-mist)]">
                  Internal memo · 2024 · AYM
                </div>
              </div>
            </motion.div>
          </div>

          {/* Column: three pillars as numbered slate items */}
          <div className="lg:col-span-5 lg:pl-10 lg:border-l lg:border-[color:var(--color-rule)]">
            <div className="font-mono text-[10.5px] uppercase tracking-[0.24em] text-[color:var(--color-mist)] mb-6">
              Three channels · one studio
            </div>
            <ul className="divide-y divide-[color:var(--color-rule)] border-y border-[color:var(--color-rule)]">
              {pillars.map((p, i) => (
                <motion.li
                  key={p.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                  className="grid grid-cols-[auto_1fr] gap-5 py-6 items-start group"
                >
                  <div
                    className="w-14 h-14 flex items-center justify-center font-display text-[30px] leading-none"
                    style={{
                      color: p.color,
                      fontVariationSettings: '"opsz" 144, "SOFT" 90, "wght" 500',
                      fontStyle: 'italic',
                      border: `1px solid ${p.color}`,
                    }}
                  >
                    {p.tag}
                  </div>
                  <div>
                    <div className="flex items-baseline gap-3">
                      <h3 className="font-display text-[24px] leading-none text-[color:var(--color-bone)]">
                        {p.label}
                      </h3>
                      <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[color:var(--color-mist)]">
                        Channel 0{i + 1}
                      </span>
                    </div>
                    <p className="mt-2 text-[15px] leading-[1.6] text-[color:var(--color-bone)]/75 max-w-[46ch]">
                      {p.description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>

            {/* Meta block */}
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-[color:var(--color-mist)]">Origin</div>
                <div className="mt-1 font-display text-[22px] text-[color:var(--color-bone)]">Los Angeles</div>
                <div className="text-xs text-[color:var(--color-mist)]">Remote-first · Global</div>
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-[color:var(--color-mist)]">Founded</div>
                <div className="mt-1 font-display text-[22px] text-[color:var(--color-bone)]">MMXXII</div>
                <div className="text-xs text-[color:var(--color-mist)]">LLC · Delaware</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
