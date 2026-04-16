import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const beliefs = [
  {
    number: '01',
    title: 'Ship over slide decks.',
    description:
      'Working software beats presentations. We measure progress in deployments, not decks.',
  },
  {
    number: '02',
    title: 'AI is infrastructure, not a feature.',
    description:
      'We don\'t bolt AI onto products. We build products that are AI-native from the first line of code.',
  },
  {
    number: '03',
    title: 'Attention is earned through craft.',
    description:
      'Every pixel, every frame, every interaction — designed to earn and hold attention in a world of infinite scroll.',
  },
  {
    number: '04',
    title: 'The best media companies are also tech companies.',
    description:
      'Content without engineering hits a ceiling. We build both — and the leverage is exponential.',
  },
]

export default function Philosophy() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="philosophy" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

      <div ref={ref} className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-indigo-400 font-display font-semibold text-sm uppercase tracking-[0.2em] mb-4 block"
          >
            Philosophy
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-4xl md:text-5xl text-white leading-tight"
          >
            What we believe.
          </motion.h2>
        </div>

        <div className="space-y-0">
          {beliefs.map((belief, i) => (
            <motion.div
              key={belief.number}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.12 }}
              className="group relative py-10 border-b border-white/[0.06] first:border-t"
            >
              <div className="flex items-start gap-6 md:gap-10">
                <span className="font-display font-bold text-2xl md:text-3xl bg-gradient-to-br from-indigo-400 to-purple-400 bg-clip-text text-transparent shrink-0 pt-1 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                  {belief.number}
                </span>
                <div>
                  <h3 className="font-display font-bold text-white text-xl md:text-2xl mb-3 group-hover:text-indigo-200 transition-colors duration-500">
                    {belief.title}
                  </h3>
                  <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl">
                    {belief.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
