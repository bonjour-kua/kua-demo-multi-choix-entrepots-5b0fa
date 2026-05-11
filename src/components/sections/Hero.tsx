import { Phone, ArrowDown } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Full-bleed background photo */}
      <img src="/images/hero/fb-photo-48.jpg" alt="Bâtiment Multi-Choix Entrepôts — vue extérieure large, rangée de portes numérotées" className="absolute inset-0 w-full h-full object-cover object-center" loading="eager" width={1536} height={1024} />

      {/* Gradient overlay — navy to transparent */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, rgba(20,53,107,0.88) 0%, rgba(20,53,107,0.65) 50%, rgba(20,53,107,0.45) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-32 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p className="text-[#e4ce4f] text-xs font-bold uppercase tracking-[0.25em] mb-6">
            Région de Québec · Accessibles 24h / 7
          </p>

          {/* Headline */}
          <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl xl:text-9xl text-white uppercase leading-none mb-8">
            Vos affaires,<br />
            <span className="text-[#e4ce4f]">en sécurité.</span>
          </h1>

          {/* Sub-copy */}
          <p className="text-white/85 text-lg lg:text-xl max-w-lg mb-10 leading-relaxed">
            Espaces d'entreposage propres, chauffés et barrés — formats 8×10, 10×10 et 10×20 pi — accessibles à toute heure, tous les jours de l'année.
          </p>

          {/* Trust stats */}
          <div className="flex flex-wrap gap-8 lg:gap-12 mb-10">
            <div>
              <span className="block font-display text-6xl lg:text-7xl text-[#e4ce4f] leading-none">
                24h
              </span>
              <span className="text-white/70 text-sm uppercase tracking-wider">
                / 7 jours · Accès continu
              </span>
            </div>
            <div className="border-l border-white/20 pl-8 lg:pl-12">
              <span className="block font-display text-6xl lg:text-7xl text-[#e4ce4f] leading-none">
                3
              </span>
              <span className="text-white/70 text-sm uppercase tracking-wider">
                Formats au choix
              </span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+14182229895"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#e4ce4f] text-[#14356b] font-bold uppercase tracking-widest text-sm min-h-12 transition-all duration-200 hover:bg-white border-2 border-[#e4ce4f]"
            >
              <Phone size={16} />
              418 222-9895
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-widest text-sm min-h-12 transition-all duration-200 hover:bg-white hover:text-[#14356b]"
            >
              Voir les formats
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/60 hover:text-[#e4ce4f] transition-colors animate-bounce"
        aria-label="Défiler vers le bas"
      >
        <ArrowDown size={28} />
      </a>
    </section>
  )
}
