import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Video,
  Factory,
  Trophy,
  Palette,
  Smartphone,
  Workflow,
} from 'lucide-react'

const products = [
  {
    icon: <Video className="w-6 h-6" />,
    title: 'AI Video Analysis',
    description: 'Computer vision and NLP pipelines that extract insights from video content at scale — performance metrics, engagement patterns, competitor intelligence.',
    tag: 'AI / ML',
    accent: 'from-blue-500/20 to-indigo-500/20',
    border: 'hover:border-blue-500/30',
    tagBg: 'bg-blue-500/10 text-blue-400',
  },
  {
    icon: <Factory className="w-6 h-6" />,
    title: 'Autonomous Micro-SaaS Factory',
    description: 'AI agents that ideate, build, deploy, and iterate on micro-SaaS products without human intervention. From concept to live product, autonomously.',
    tag: 'Agents',
    accent: 'from-purple-500/20 to-violet-500/20',
    border: 'hover:border-purple-500/30',
    tagBg: 'bg-purple-500/10 text-purple-400',
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    title: 'Sports Media Platforms',
    description: 'Data-driven content properties covering sports culture, analytics, and fan engagement — powered by real-time data pipelines.',
    tag: 'Media',
    accent: 'from-emerald-500/20 to-teal-500/20',
    border: 'hover:border-emerald-500/30',
    tagBg: 'bg-emerald-500/10 text-emerald-400',
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: 'AI Creative Tools',
    description: 'Generative AI tools for thumbnails, scripts, and content workflows — built for the speed and scale creators actually need.',
    tag: 'Creator Tools',
    accent: 'from-amber-500/20 to-orange-500/20',
    border: 'hover:border-amber-500/30',
    tagBg: 'bg-amber-500/10 text-amber-400',
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: 'Mobile-First Apps',
    description: 'React Native applications delivering content experiences, creator utilities, and audience engagement tools on iOS and Android.',
    tag: 'Mobile',
    accent: 'from-rose-500/20 to-pink-500/20',
    border: 'hover:border-rose-500/30',
    tagBg: 'bg-rose-500/10 text-rose-400',
  },
  {
    icon: <Workflow className="w-6 h-6" />,
    title: 'Content Automation Pipelines',
    description: 'End-to-end systems that handle research, scripting, editing workflows, distribution, and analytics — reducing manual effort by 80%+.',
    tag: 'Automation',
    accent: 'from-cyan-500/20 to-blue-500/20',
    border: 'hover:border-cyan-500/30',
    tagBg: 'bg-cyan-500/10 text-cyan-400',
  },
]

export default function ProductSpotlight() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="products" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />

      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-indigo-400 font-display font-semibold text-sm uppercase tracking-[0.2em] mb-4 block"
          >
            Product Spotlight
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-4xl md:text-5xl text-white leading-tight max-w-3xl mx-auto"
          >
            What's shipping from the lab.
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {products.map((product, i) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className={`group relative p-7 rounded-2xl bg-white/[0.02] border border-white/[0.06] ${product.border} transition-all duration-500 hover:bg-white/[0.04]`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.accent} border border-white/[0.06] flex items-center justify-center text-gray-300 group-hover:text-white transition-colors duration-300`}>
                  {product.icon}
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${product.tagBg}`}>
                  {product.tag}
                </span>
              </div>
              <h3 className="font-display font-semibold text-white text-lg mb-2">
                {product.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {product.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
