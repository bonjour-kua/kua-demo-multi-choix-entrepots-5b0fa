import { ArrowRight } from 'lucide-react'

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-[#14356b]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section header */}
        <div className="mb-16">
          <p className="text-[#e4ce4f] text-xs font-bold uppercase tracking-[0.25em] mb-4">
            Formats disponibles
          </p>
          <h2 className="font-display text-5xl lg:text-6xl xl:text-7xl text-white uppercase leading-none max-w-2xl">
            Choisissez l'espace qu'il vous faut
          </h2>
        </div>

        {/* Feature bleed photo */}
        <div className="mb-12 overflow-hidden w-screen ml-[calc(-50vw+50%)]">
          <img src="/images/location/fb-photo-15.jpg" alt="Façade Multi-Choix Entrepôts — rangée de portes d'unités numérotées, enseigne visible" className="w-full h-64 lg:h-80 object-cover object-center" loading="lazy" width={1536} height={512} />
        </div>

        {/* Format cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 8×10 */}
          <div className="flex flex-col bg-white overflow-hidden group transition-shadow duration-200 hover:shadow-2xl">
            <div className="overflow-hidden">
              <img src="/images/location/fb-photo-8.jpg" alt="Unité 8×10 Multi-Choix Entrepôts — pneus et équipement entreposés" className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" width={480} height={208} />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-baseline gap-3 mb-1">
                <span className="font-display text-5xl text-[#14356b] leading-none">8×10</span>
                <span className="font-mono text-xs text-slate-400 uppercase tracking-wider">80 pi²</span>
              </div>
              <p className="text-[#e4ce4f] text-xs font-bold uppercase tracking-widest mb-4">Petit format</p>
              <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-1">
                Pneus d'hiver, vélos, équipement de plein air, boîtes d'archives, meubles de taille réduite.
              </p>
              <p className="text-[#14356b] text-xs font-semibold uppercase tracking-wide border-t border-slate-100 pt-3 mt-auto">
                Idéal pour les particuliers qui désencombrent.
              </p>
            </div>
          </div>

          {/* 10×10 */}
          <div className="flex flex-col bg-white overflow-hidden group transition-shadow duration-200 hover:shadow-2xl md:-mt-4 md:mb-4">
            <div className="overflow-hidden">
              <img src="/images/gallery/fb-photo-34.jpg" alt="Unité 10×10 Multi-Choix Entrepôts avec voiturette de golf, démonstration de capacité" className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" width={480} height={208} />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-baseline gap-3 mb-1">
                <span className="font-display text-5xl text-[#14356b] leading-none">10×10</span>
                <span className="font-mono text-xs text-slate-400 uppercase tracking-wider">100 pi²</span>
              </div>
              <p className="text-[#e4ce4f] text-xs font-bold uppercase tracking-widest mb-4">Format moyen</p>
              <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-1">
                VTT, moto, mobilier complet d'une pièce, électroménagers, collection de véhicules légers.
              </p>
              <p className="text-[#14356b] text-xs font-semibold uppercase tracking-wide border-t border-slate-100 pt-3 mt-auto">
                Le format le plus populaire — polyvalent.
              </p>
            </div>
          </div>

          {/* 10×20 */}
          <div className="flex flex-col bg-white overflow-hidden group transition-shadow duration-200 hover:shadow-2xl">
            <div className="overflow-hidden">
              <img src="/images/gallery/fb-photo-37.jpg" alt="Unité 10×20 Multi-Choix Entrepôts avec VUS rouge — grand format auto démontré" className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" width={480} height={208} />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-baseline gap-3 mb-1">
                <span className="font-display text-5xl text-[#14356b] leading-none">10×20</span>
                <span className="font-mono text-xs text-slate-400 uppercase tracking-wider">200 pi²</span>
              </div>
              <p className="text-[#e4ce4f] text-xs font-bold uppercase tracking-widest mb-4">Grand format</p>
              <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-1">
                Bateau, auto, contenu complet d'une maison, véhicule récréatif, motoneige + équipement.
              </p>
              <p className="text-[#14356b] text-xs font-semibold uppercase tracking-wide border-t border-slate-100 pt-3 mt-auto">
                Pour les grands besoins, sans compromis.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <a
            href="tel:+14182229895"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#e4ce4f] text-[#14356b] font-bold uppercase tracking-widest text-sm min-h-12 transition-all duration-200 hover:bg-white border-2 border-[#e4ce4f]"
          >
            Vérifier la disponibilité
            <ArrowRight size={16} />
          </a>
          <span className="text-white/60 text-sm">
            Tarifs et disponibilités par téléphone — 418 222-9895
          </span>
        </div>
      </div>
    </section>
  )
}
