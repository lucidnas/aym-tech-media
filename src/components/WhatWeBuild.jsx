import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const capabilities = [
  {
    num: '01',
    title: 'AI-Powered Products',
    kicker: 'Intelligence as infrastructure',
    description:
      'Intelligent tools that solve real problems — video analysis engines, content optimization systems, creator-facing AI that actually earns its keep.',
    tags: ['ml', 'python', 'vision', 'nlp'],
  },
  {
    num: '02',
    title: 'Digital Media Brands',
    kicker: 'Audience · franchise · IP',
    description:
      'YouTube channels, social properties, and long-horizon media brands engineered for compounding attention rather than one-shot virality.',
    tags: ['youtube', 'creator', 'brand'],
  },
  {
    num: '03',
    title: 'Autonomous Agent Systems',
    kicker: 'Software that ships itself',
    description:
      'Agents that don’t assist — they deliver. End-to-end: ideation, codegen, deployment, iteration. Production micro-SaaS, shipped by machines.',
    tags: ['agents', 'orchestration', 'ci'],
  },
  {
    num: '04',
    title: 'Creator Tools & Platforms',
    kicker: 'Leverage for people who ship',
    description:
      'Utilities, analytics surfaces, and automation built for the creators who actually move the internet — the ones allergic to duct-tape workflows.',
    tags: ['tools', 'analytics', 'ui'],
  },
  {
    num: '05',
    title: 'Full-Stack Product Engineering',
    kicker: 'Top to bottom, one studio',
    description:
      'Python services, Next.js surfaces, React Native apps, cloud infra. Production-grade systems at every layer — no hand-offs, no stitching.',
    tags: ['nextjs', 'rn', 'railway', 'aws'],
  },
  {
    num: '06',
    title: 'Experimental Internet',
    kicker: 'Things the roadmap doesn’t predict',
    description:
      'Micro-SaaS, niche platforms, odd little tools — bold experiments in what a product can be when nobody asks permission first.',
    tags: ['labs', 'micro-saas', 'experiments'],
  },
]

function CapRow({ cap, i, inView }) {
  return (
    <motion.a
      href="#products"
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.05 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group block border-b border-[color:var(--color-rule)] py-10 md:py-12"
    >
      <div className="grid grid-cols-12 gap-6 items-start">
        {/* Number */}
        <div className="col-span-2 md:col-span-1">
          <div className="font-mono text-[10.5px] uppercase tracking-[0.24em] text-[color:var(--color-mist)] mb-2">
            Spec
          </div>
          <div
            className="font-display text-[52px] md:text-[72px] leading-[0.85] text-[color:var(--color-bone)] group-hover:text-[color:var(--color-amber)] transition-colors duration-500"
            style={{ fontVariationSettings: '"opsz" 144, "SOFT" 30, "wght" 380' }}
          >
            {cap.num}
          </div>
        </div>

        {/* Title */}
        <div className="col-span-10 md:col-span-6">
          <div className="font-mono text-[10.5px] uppercase tracking-[0.24em] text-[color:var(--color-amber)] mb-2">
            {cap.kicker}
          </div>
          <h3
            className="font-display text-[36px] md:text-[56px] leading-[0.95] tracking-tight text-[color:var(--color-bone)]"
            style={{ fontVariationSettings: '"opsz" 144, "SOFT" 50, "wght" 400' }}
          >
            {cap.title.split(' ').map((word, wi, arr) => {
              const italic = wi === arr.length - 1
              return (
                <span key={wi} className={italic ? 'font-display-italic text-[color:var(--color-amber)]' : ''}>
                  {word}
                  {wi < arr.length - 1 ? ' ' : ''}
                </span>
              )
            })}
          </h3>
        </div>

        {/* Description + tags */}
        <div className="col-span-12 md:col-span-5 md:pl-8 md:border-l md:border-[color:var(--color-rule)]">
          <p className="text-[15.5px] leading-[1.65] text-[color:var(--color-bone)]/75 max-w-[52ch]">
            {cap.description}
          </p>
          <div className="mt-5 flex flex-wrap gap-1.5">
            {cap.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-mist)] border border-[color:var(--color-rule)] px-2 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-5 font-mono text-[10.5px] uppercase tracking-[0.24em] text-[color:var(--color-bone)]/60 group-hover:text-[color:var(--color-amber)] transition-colors">
            See the reel <span aria-hidden>→</span>
          </div>
        </div>
      </div>
    </motion.a>
  )
}

export default function WhatWeBuild() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="build" className="relative py-24 md:py-32 bg-[color:var(--color-ink)] overflow-hidden">
      <div ref={ref} className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-slate mb-10"
        >
          <span>§02 — Signals</span>
          <span className="rule-ticks" />
          <span>Six lanes, one mission</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-[clamp(42px,7vw,108px)] leading-[0.9] tracking-tight text-[color:var(--color-bone)] max-w-[18ch] mb-14"
          style={{ fontVariationSettings: '"opsz" 144, "SOFT" 30, "wght" 380' }}
        >
          What&apos;s <span className="font-display-italic text-[color:var(--color-amber)]">broadcasting</span> from the studio.
        </motion.h2>

        <div className="border-t border-[color:var(--color-rule)]">
          {capabilities.map((cap, i) => (
            <CapRow key={cap.num} cap={cap} i={i} inView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}
