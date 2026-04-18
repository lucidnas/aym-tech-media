import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const beliefs = [
  {
    number: 'I',
    title: 'Ship over slide decks.',
    description:
      'Working software beats presentations. We measure progress in deployments, not decks — and we audit ourselves in commits, not calendars.',
  },
  {
    number: 'II',
    title: 'AI is infrastructure, not a feature.',
    description:
      'We don’t bolt intelligence onto products. We build products that are AI-native from the first line of code, the way the last era built cloud-native.',
  },
  {
    number: 'III',
    title: 'Attention is earned through craft.',
    description:
      'Every pixel, every frame, every interaction — designed to earn and hold attention in a world of infinite scroll. Craft is the moat.',
  },
  {
    number: 'IV',
    title: 'The best media companies are tech companies.',
    description:
      'Content without engineering hits a ceiling. Engineering without narrative hits a wall. Do both; the leverage compounds.',
  },
]

export default function Philosophy() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="philosophy"
      className="relative py-24 md:py-36 overflow-hidden"
      style={{ background: 'var(--color-paper)', color: '#1a1510' }}
    >
      {/* Paper texture vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 30% 0%, rgba(255,58,29,0.05), transparent 60%), radial-gradient(ellipse at 80% 100%, rgba(0,0,0,0.05), transparent 55%)',
        }}
      />

      <div ref={ref} className="relative mx-auto max-w-[1280px] px-6 md:px-10 lg:px-14">
        {/* slate */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-slate section-slate-paper mb-10"
          style={{ color: '#7c6c4e' }}
        >
          <span>§04 — Manifesto</span>
          <span className="rule-ticks-paper" />
          <span>Four tenets, printed in ink</span>
        </motion.div>

        {/* Masthead */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-9 font-display leading-[0.9] tracking-tight"
            style={{
              fontSize: 'clamp(52px, 9vw, 148px)',
              fontVariationSettings: '"opsz" 144, "SOFT" 70, "wght" 360',
              color: '#1a1510',
            }}
          >
            What we{' '}
            <span
              className="font-display-italic"
              style={{ color: 'var(--color-signal)' }}
            >
              believe
            </span>
            .
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3 pb-3 border-t border-[color:var(--color-paper-rule)] pt-4"
          >
            <p className="font-mono text-[10.5px] uppercase tracking-[0.26em]" style={{ color: '#7c6c4e' }}>
              Printed in Los Angeles · edited in production · reprinted as needed
            </p>
          </motion.div>
        </div>

        {/* Tenets */}
        <div className="border-t-2 border-[color:#1a1510]">
          {beliefs.map((b, i) => (
            <motion.article
              key={b.number}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.12 }}
              className="grid grid-cols-12 gap-6 py-10 md:py-14 border-b border-[color:var(--color-paper-rule)]"
            >
              <div className="col-span-3 md:col-span-2">
                <div
                  className="font-display leading-[0.85]"
                  style={{
                    fontStyle: 'italic',
                    fontVariationSettings: '"opsz" 144, "SOFT" 100, "wght" 500',
                    fontSize: 'clamp(56px, 8vw, 120px)',
                    color: 'var(--color-signal)',
                  }}
                >
                  {b.number}
                </div>
                <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.26em]" style={{ color: '#7c6c4e' }}>
                  Tenet · 0{i + 1}
                </div>
              </div>
              <div className="col-span-9 md:col-span-10 md:pl-10 md:border-l md:border-[color:var(--color-paper-rule)]">
                <h3
                  className="font-display leading-[1.02] tracking-tight"
                  style={{
                    fontSize: 'clamp(28px, 4.5vw, 56px)',
                    fontVariationSettings: '"opsz" 144, "SOFT" 30, "wght" 480',
                    color: '#1a1510',
                  }}
                >
                  {b.title}
                </h3>
                <p className="mt-5 max-w-[58ch] text-[17px] leading-[1.7]" style={{ color: '#3a2f22' }}>
                  {b.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Colophon */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-[color:var(--color-paper-rule)] font-mono text-[10.5px] uppercase tracking-[0.24em]" style={{ color: '#7c6c4e' }}>
          <span>Issue № 001</span>
          <span>Vol. MMXXVI</span>
          <span>Set in Fraunces</span>
          <span>Do not reprint without conviction</span>
        </div>
      </div>
    </section>
  )
}
