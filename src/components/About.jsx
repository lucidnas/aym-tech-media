import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Cpu, Tv, Zap } from 'lucide-react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const pillars = [
    {
      icon: <Tv className="w-6 h-6" />,
      label: 'Media',
      description: 'Audience-first content brands across every format',
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      label: 'Products',
      description: 'AI-native software that solves real problems',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      label: 'Systems',
      description: 'Autonomous agents that build and deploy at scale',
    },
  ]

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />

      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-indigo-400 font-display font-semibold text-sm uppercase tracking-[0.2em] mb-4 block"
            >
              Who We Are
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-bold text-4xl md:text-5xl text-white leading-tight mb-6"
            >
              A product-first digital media company.
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 text-gray-400 leading-relaxed text-lg"
            >
              <p>
                AYM Tech Media creates audience-first media across YouTube,
                social platforms, and emerging formats while engineering the
                systems, autonomous agents, and digital experiences that power
                modern storytelling and online engagement.
              </p>
              <p>
                What separates us: we don't just talk about AI — we ship
                AI-native products. From autonomous agent systems that build and
                deploy micro-SaaS apps, to AI-powered video analysis tools, to
                intelligent content creation pipelines — we engineer at the
                intersection of media, automation, and product.
              </p>
              <p className="text-white font-medium">
                We're builders, not consultants.
              </p>
            </motion.div>
          </div>

          <div className="space-y-4">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.label}
                initial={{ opacity: 0, x: 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                className="group p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-indigo-500/20 transition-all duration-500 backdrop-blur-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0 group-hover:shadow-lg group-hover:shadow-indigo-500/10 transition-shadow duration-500">
                    {pillar.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-white text-lg mb-1">
                      {pillar.label}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
