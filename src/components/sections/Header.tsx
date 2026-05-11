import { useState, useEffect } from 'react'
import { Phone, Menu, X } from 'lucide-react'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'À propos', href: '#about' },
    { label: 'Formats', href: '#services' },
    { label: 'Galerie', href: '#gallery' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-shadow duration-300 ${
        scrolled ? 'shadow-lg' : ''
      } bg-[#14356b]`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16 lg:h-20">
        {/* Logo + Name */}
        <a href="#" className="flex items-center gap-3 shrink-0">
          <img src="/images/logo/logo-clean.png" alt="Multi-Choix Entrepôts logo" width={48} height={48} className="h-10 w-auto object-contain" loading="eager" />
          <span className="font-display text-xl lg:text-2xl text-white uppercase leading-none">
            Multi-Choix<br className="hidden sm:block" />
            <span className="text-[#e4ce4f]"> Entrepôts</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-white/80 hover:text-[#e4ce4f] text-sm font-medium uppercase tracking-wider transition-colors duration-150"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="tel:+14182229895"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-[#e4ce4f] text-[#14356b] font-bold uppercase tracking-widest text-sm transition-all duration-200 hover:bg-white"
        >
          <Phone size={15} />
          418 222-9895
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-[#14356b] border-t border-white/10 px-6 py-6 space-y-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-white text-lg font-bold uppercase tracking-wider py-2 border-b border-white/10 hover:text-[#e4ce4f] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+14182229895"
            className="flex items-center gap-2 mt-4 px-6 py-4 bg-[#e4ce4f] text-[#14356b] font-bold uppercase tracking-widest text-sm min-h-12"
          >
            <Phone size={16} />
            Appeler : 418 222-9895
          </a>
        </div>
      )}
    </header>
  )
}
