import { motion } from 'framer-motion'
import { Play, Code2, Globe, Users } from 'lucide-react'

const socialLinks = [
  { icon: <Play className="w-5 h-5" />, href: '#', label: 'YouTube' },
  { icon: <Globe className="w-5 h-5" />, href: '#', label: 'X' },
  { icon: <Code2 className="w-5 h-5" />, href: 'https://github.com/lucidnas', label: 'GitHub' },
  { icon: <Users className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
]

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'What We Build', href: '#build' },
  { label: 'Products', href: '#products' },
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-display font-bold text-white text-sm tracking-tight shadow-lg shadow-indigo-500/25">
                AYM
              </div>
              <span className="font-display font-semibold text-white text-lg tracking-tight">
                Tech Media
              </span>
            </div>
            <p className="text-gray-400 max-w-md leading-relaxed mb-6">
              Digital media and product company building content brands,
              AI-powered software, and the autonomous systems that connect them.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/[0.08] hover:border-white/[0.12] transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-[0.15em] mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} AYM Tech Media. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Built with craft. Shipped with conviction.
          </p>
        </div>
      </div>
    </footer>
  )
}
