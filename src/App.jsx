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
    <div className="relative min-h-screen">
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
