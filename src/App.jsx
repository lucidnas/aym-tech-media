import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import WhatWeBuild from './components/WhatWeBuild'
import ProductSpotlight from './components/ProductSpotlight'
import Philosophy from './components/Philosophy'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="grain-overlay relative min-h-screen overflow-x-hidden w-full bg-[color:var(--color-ink)]">
      <Navbar />
      <Hero />
      <About />
      <WhatWeBuild />
      <ProductSpotlight />
      <Philosophy />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
