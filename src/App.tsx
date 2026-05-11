import Header from './components/sections/Header'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Services from './components/sections/Services'
import Gallery from './components/sections/Gallery'
import Faq from './components/sections/Faq'
import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'

export default function App() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#e4ce4f] focus:text-[#14356b] focus:font-bold">
        Aller au contenu principal
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
