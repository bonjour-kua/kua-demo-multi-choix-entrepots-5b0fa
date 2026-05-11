import { CheckCircle2 } from 'lucide-react'

const features = [
  {
    title: 'Propre et éclairé',
    desc: 'Intérieur et extérieur éclairés. Unités entretenues régulièrement — pas d\'humidité, pas de vermine.',
  },
  {
    title: 'Chauffé en hiver',
    desc: 'Vos effets ne gèlent pas. Idéal pour meubles, électronique, équipements sensibles au gel.',
  },
  {
    title: 'Barré et sécurisé',
    desc: 'Accès par code + cadenas personnel. Serrures de haute résistance sur chaque unité.',
  },
  {
    title: 'Accès 24h / 7',
    desc: 'Entrez à l\'heure qui vous convient — nuit, weekend, jours fériés. Aucune restriction.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Photos side */}
          <div className="relative">
            {/* Main large photo */}
            <div className="overflow-hidden">
              <img src="/images/location/fb-photo-5.jpg" alt="Intérieur d'une unité Multi-Choix Entrepôts — motoneiges entreposées, espace spacieux" className="w-full aspect-[4/5] object-cover" loading="lazy" width={600} height={750} />
            </div>
            {/* Secondary accent photo — overlapping bottom-right */}
            <div className="absolute -bottom-6 -right-4 lg:-right-8 w-48 lg:w-64 border-4 border-white shadow-xl overflow-hidden">
              <img src="/images/hero/fb-photo-27.jpg" alt="Façade extérieure Multi-Choix Entrepôts — entrée principale et enseigne" className="w-full aspect-square object-cover" loading="lazy" width={256} height={256} />
            </div>
          </div>

          {/* Text side */}
          <div className="lg:pl-8">
            <p className="text-[#e4ce4f] text-xs font-bold uppercase tracking-[0.25em] mb-4">
              Pourquoi Multi-Choix Entrepôts
            </p>
            <h2 className="font-display text-5xl lg:text-6xl uppercase text-[#14356b] leading-none mb-8">
              L'entrepôt que vous méritez
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-10">
              Location d'espaces d'entreposage sécurisés dans la région de Québec. Nos unités sont propres, chauffées, barrées et accessibles en tout temps — parce que vos affaires ne méritent pas moins.
            </p>

            <ul className="space-y-5">
              {features.map((f) => (
                <li key={f.title} className="flex items-start gap-4">
                  <CheckCircle2
                    size={22}
                    className="text-[#e4ce4f] mt-0.5 shrink-0"
                    strokeWidth={2.5}
                  />
                  <div>
                    <span className="font-bold text-[#14356b] block">{f.title}</span>
                    <span className="text-slate-500 text-sm leading-relaxed">{f.desc}</span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <a
                href="tel:+14182229895"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#14356b] text-[#e4ce4f] font-bold uppercase tracking-widest text-sm min-h-12 transition-all duration-200 hover:bg-[#e4ce4f] hover:text-[#14356b] border-2 border-[#14356b]"
              >
                Réserver une unité
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
