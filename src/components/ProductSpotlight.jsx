import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const products = [
  {
    code: 'AYM-001',
    title: 'AI Video Analysis',
    tag: 'Vision · ML',
    color: 'var(--color-amber)',
    description:
      'Computer-vision and NLP pipelines that read video at scale. Performance metrics, engagement patterns, competitor intel, and frame-level insight — feeding the studio’s editorial brain.',
    timecode: '00:00:18:04',
  },
  {
    code: 'AYM-002',
    title: 'Autonomous Micro-SaaS Factory',
    tag: 'Agents',
    color: 'var(--color-lime)',
    description:
      'An orchestrated fleet of agents that ideate, build, deploy, and iterate on micro-SaaS. Concept to live product, unattended. Yes, it actually ships.',
    timecode: '00:01:04:11',
  },
  {
    code: 'AYM-003',
    title: 'Sports Media Platform',
    tag: 'Media',
    color: 'var(--color-signal)',
    description:
      'A data-driven content property for sports culture, analytics, and fan engagement — wired to real-time pipelines so the feed stays alive between plays.',
    timecode: '00:02:11:08',
  },
  {
    code: 'AYM-004',
    title: 'AI Creative Tools',
    tag: 'Creator',
    color: 'var(--color-amber)',
    description:
      'Generative AI for thumbnails, scripts, and workflows — tuned for the speed and scale creators actually need. Built in the same rooms that use them.',
    timecode: '00:03:26:02',
  },
  {
    code: 'AYM-005',
    title: 'Mobile-First Apps',
    tag: 'React Native',
    color: 'var(--color-lime)',
    description:
      'React Native apps delivering content experiences, creator utilities, and audience-engagement tools to iOS and Android. Shipped with the UX of native software.',
    timecode: '00:04:42:19',
  },
  {
    code: 'AYM-006',
    title: 'Content Automation Pipelines',
    tag: 'Ops',
    color: 'var(--color-signal)',
    description:
      'End-to-end systems — research, scripting, editing, distribution, analytics — reducing manual effort by 80% without sanding off the editorial voice.',
    timecode: '00:06:03:07',
  },
]

function FilmCell({ p, i }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: (i % 3) * 0.08 }}
      className="snap-start shrink-0 w-[82vw] sm:w-[52vw] md:w-[420px] lg:w-[460px] border-x border-[color:var(--color-rule)] bg-[color:var(--color-ink-2)] relative group"
    >
      {/* Sprocket rows */}
      <div className="sprocket-row h-[14px] border-y border-[color:var(--color-rule)]" />

      <div className="p-6 md:p-7 min-h-[400px] flex flex-col">
        <div className="flex items-center justify-between mb-6">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-mist)]">
            {p.code}
          </span>
          <span
            className="font-mono text-[10px] uppercase tracking-[0.22em]"
            style={{ color: p.color }}
          >
            ● {p.tag}
          </span>
        </div>

        <h3
          className="font-display text-[34px] md:text-[40px] leading-[0.98] tracking-tight text-[color:var(--color-bone)] mb-4"
          style={{ fontVariationSettings: '"opsz" 144, "SOFT" 40, "wght" 420' }}
        >
          {p.title}
        </h3>

        <p className="text-[14.5px] leading-[1.65] text-[color:var(--color-bone)]/75 flex-1">
          {p.description}
        </p>

        <div className="mt-6 pt-4 border-t border-[color:var(--color-rule)] flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em]">
          <span className="text-[color:var(--color-mist)]">Cell {String(i + 1).padStart(2, '0')} / 06</span>
          <span style={{ color: p.color }}>{p.timecode}</span>
        </div>
      </div>

      <div className="sprocket-row h-[14px] border-y border-[color:var(--color-rule)]" />
    </motion.article>
  )
}

export default function ProductSpotlight() {
  const ref = useRef(null)
  const scrollerRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const scroll = (dir) => {
    const el = scrollerRef.current
    if (!el) return
    const amount = Math.min(500, el.clientWidth * 0.75)
    el.scrollBy({ left: dir * amount, behavior: 'smooth' })
  }

  return (
    <section id="products" className="relative py-24 md:py-32 overflow-hidden">
      <div ref={ref} className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-slate mb-10"
        >
          <span>§03 — Reel</span>
          <span className="rule-ticks" />
          <span>Now playing from the lab</span>
        </motion.div>

        <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-[clamp(40px,6.5vw,92px)] leading-[0.92] tracking-tight text-[color:var(--color-bone)] max-w-[16ch]"
            style={{ fontVariationSettings: '"opsz" 144, "SOFT" 40, "wght" 400' }}
          >
            Six cells <span className="font-display-italic text-[color:var(--color-amber)]">currently shipping</span>.
          </motion.h2>

          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll(-1)}
              aria-label="Previous cell"
              className="font-mono text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-bone)] border border-[color:var(--color-rule)] px-4 py-3 hover:border-[color:var(--color-amber)] hover:text-[color:var(--color-amber)] transition-colors"
            >
              ← Prev
            </button>
            <button
              onClick={() => scroll(1)}
              aria-label="Next cell"
              className="font-mono text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-bone)] border border-[color:var(--color-rule)] px-4 py-3 hover:border-[color:var(--color-amber)] hover:text-[color:var(--color-amber)] transition-colors"
            >
              Next →
            </button>
          </div>
        </div>
      </div>

      {/* Scroller spans the viewport but cells still align-ish with container */}
      <div
        ref={scrollerRef}
        className="relative flex overflow-x-auto snap-x snap-mandatory gap-0 scroll-smooth pl-6 md:pl-10 lg:pl-14 pr-6 md:pr-10 lg:pr-14 pb-2"
        style={{ scrollbarWidth: 'thin' }}
      >
        {products.map((p, i) => (
          <FilmCell key={p.code} p={p} i={i} />
        ))}
      </div>

      <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-14 mt-6 flex items-center gap-3 font-mono text-[10.5px] uppercase tracking-[0.22em] text-[color:var(--color-mist)]">
        <span className="w-8 h-px bg-[color:var(--color-amber)]" />
        Drag horizontally · 35mm · Dolby Vision · Autosync
      </div>
    </section>
  )
}
