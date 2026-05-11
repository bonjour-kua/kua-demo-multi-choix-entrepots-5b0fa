import { Phone, Clock, Lock, Thermometer } from 'lucide-react'

const infos = [
  {
    icon: Phone,
    label: 'Téléphone',
    value: '418 222-9895',
    href: 'tel:+14182229895',
    note: 'Meilleur moyen de nous joindre',
  },
  {
    icon: Clock,
    label: 'Accès aux unités',
    value: '24h / 7',
    href: null,
    note: 'Tous les jours, sans exception',
  },
  {
    icon: Lock,
    label: 'Sécurité',
    value: 'Barré & surveillé',
    href: null,
    note: 'Cadenas haute résistance inclus',
  },
  {
    icon: Thermometer,
    label: 'Confort hiver',
    value: 'Chauffé',
    href: null,
    note: 'Protège vos biens contre le gel',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — text + info */}
          <div>
            <p className="text-[#e4ce4f] text-xs font-bold uppercase tracking-[0.25em] mb-4">
              Nous joindre
            </p>
            <h2 className="font-display text-5xl lg:text-6xl uppercase text-[#14356b] leading-none mb-8">
              Réservez votre espace aujourd'hui
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-10">
              La disponibilité se confirme par téléphone. Appelez-nous pour connaître les formats disponibles, les tarifs et pour réserver votre unité — c'est aussi simple que ça.
            </p>

            {/* Info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {infos.map((info) => {
                const Icon = info.icon
                return (
                  <div
                    key={info.label}
                    className="p-5 border border-[#E2E8F0] hover:border-[#14356b] transition-colors duration-150"
                  >
                    <Icon size={20} className="text-[#e4ce4f] mb-3" strokeWidth={2} />
                    <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="font-bold text-[#14356b] text-lg hover:text-[#e4ce4f] transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="font-bold text-[#14356b] text-lg">{info.value}</p>
                    )}
                    <p className="text-slate-400 text-xs mt-1">{info.note}</p>
                  </div>
                )
              })}
            </div>

            {/* Primary CTA */}
            <a
              href="tel:+14182229895"
              className="inline-flex items-center gap-3 px-8 py-5 bg-[#14356b] text-[#e4ce4f] font-bold uppercase tracking-widest text-base min-h-14 transition-all duration-200 hover:bg-[#e4ce4f] hover:text-[#14356b] border-2 border-[#14356b]"
            >
              <Phone size={18} />
              Appeler — 418 222-9895
            </a>
          </div>

          {/* Right — building photo */}
          <div className="overflow-hidden">
            <img src="/images/location/fb-photo-46.jpg" alt="Façade Multi-Choix Entrepôts avec voiture stockée — accès direct au stationnement" className="w-full aspect-[4/3] lg:aspect-[3/4] object-cover" loading="lazy" width={600} height={750} />
            {/* Zone tag */}
            <div className="bg-[#14356b] px-6 py-4">
              <p className="text-[#e4ce4f] font-mono text-xs uppercase tracking-widest">
                Région de Québec
              </p>
              <p className="text-white text-sm mt-1">
                Formats 8×10 · 10×10 · 10×20 — disponibilité par téléphone
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Google Maps embed — full width, below the split */}
      <div className="mt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-4">
          <h3 className="font-display text-3xl text-[#14356b] uppercase">
            Où nous trouver
          </h3>
          <p className="text-slate-500 text-sm mt-1">
            Région de Québec, Québec, Canada
          </p>
        </div>
        <iframe
          src="https://www.google.com/maps?q=Multi-Choix+Entrepots+Quebec+QC&output=embed"
          className="w-full h-[400px] border-0"
          loading="lazy"
          title="Localisation de Multi-Choix Entrepôts dans la région de Québec"
        />
      </div>
    </section>
  )
}
