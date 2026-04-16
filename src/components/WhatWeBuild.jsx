import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Brain, Play, Bot, Wrench, Code2, Rocket } from 'lucide-react'

const capabilities = [
  { icon: <Brain className="w-7 h-7" />, title: 'AI-Powered Products', description: 'Intelligent tools that solve real problems — from video analysis engines to content optimization systems.', gradient: 'from-blue-500 to-indigo-600' },
  { icon: <Play className="w-7 h-7" />, title: 'Digital Media Brands', description: 'YouTube channels, social content properties, and audience-first media franchises built for scale.', gradient: 'from-indigo-500 to-purple-600' },
  { icon: <Bot className="w-7 h-7" />, title: 'Autonomous Agent Systems', description: "AI agents that don't just assist — they ship production software autonomously. End-to-end.", gradient: 'from-purple-500 to-violet-600' },
  { icon: <Wrench className="w-7 h-7" />, title: 'Creator Tools & Platforms', description: 'Software built for creators who need leverage — analytics, automation, and content tools.', gradient: 'from-violet-500 to-fuchsia-600' },
  { icon: <Code2 className="w-7 h-7" />, title: 'Full-Stack Product Engineering', description: 'Python, Next.js, React Native, cloud infrastructure — production-grade systems at every layer.', gradient: 'from-fuchsia-500 to-pink-600' },
  { icon: <Rocket className="w-7 h-7" />, title: 'Experimental Internet Products', description: 'Micro-SaaS, niche platforms, and bold experiments in what the internet can be.', gradient: 'from-pink-500 to-rose-600' },
]

export default function WhatWeBuild() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="build" className="relative py-28 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
      <div ref={ref} className="w-full max-w-6xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <motion.span initial={{ opacity: 0, y: 10 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
            className="text-indigo-400 font-display font-semibold text-sm uppercase tracking-[0.2em] mb-4 block">
            What We Build
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-3xl md:text-4xl text-white leading-tight">
            Six lanes. One mission.
          </motion.h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {capabilities.map((cap, i) => (
            <motion.div key={cap.title} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="group relative p-7 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.05] hover:border-white/[0.12] transition-all duration-500">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cap.gradient} flex items-center justify-center text-white mb-5 shadow-lg opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500`}>
                {cap.icon}
              </div>
              <h3 className="font-display font-semibold text-white text-lg mb-2">{cap.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{cap.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
