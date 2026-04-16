import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
      <div ref={ref} className="w-full max-w-3xl mx-auto px-6 sm:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}
          className="p-10 md:p-14 rounded-3xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.08] backdrop-blur-sm">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white leading-tight mb-6">
            Let's build{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">something</span>{' '}
            together.
          </h2>
          <p className="text-gray-400 text-lg max-w-lg mx-auto mb-10 leading-relaxed">
            Whether it's a media brand, an AI product, or an autonomous system — we're ready to move.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:nas2663@gmail.com"
              className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-2xl hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 shadow-2xl shadow-indigo-600/30 hover:shadow-indigo-500/50 flex items-center gap-2">
              Start a Conversation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="mailto:nas2663@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
              nas2663@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
