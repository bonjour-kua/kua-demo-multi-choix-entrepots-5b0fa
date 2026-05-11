export default function Gallery() {
  return (
    <section id="gallery" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="mb-12">
          <p className="text-[#e4ce4f] text-xs font-bold uppercase tracking-[0.25em] mb-4">
            Ce que nos clients entreposent
          </p>
          <h2 className="font-display text-5xl lg:text-6xl uppercase text-[#14356b] leading-none max-w-2xl">
            Des espaces à la hauteur de vos besoins
          </h2>
        </div>

        {/* Asymmetric grid — first photo spans 2 cols */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">

          {/* Wide first photo — col-span-2 */}
          <figure className="col-span-2 relative overflow-hidden group">
            <img src="/images/gallery/fb-photo-28.jpg" alt="Unité ouverte Multi-Choix Entrepôts avec motoneiges en hivernage sécurisé" className="w-full aspect-[16/9] md:aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" width={800} height={600} />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#14356b] to-transparent p-4 text-white font-mono text-[11px] uppercase tracking-wider">
              Motoneiges en hivernage
            </figcaption>
          </figure>

          {/* fb-photo-33 */}
          <figure className="relative overflow-hidden group">
            <img src="/images/gallery/fb-photo-33.jpg" alt="Unité vide propre et bien éclairée — prête à louer Multi-Choix" className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" width={400} height={400} />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#14356b] to-transparent p-3 text-white font-mono text-[11px] uppercase tracking-wider">
              Unité disponible · propre
            </figcaption>
          </figure>

          {/* fb-photo-6 — building exterior */}
          <figure className="relative overflow-hidden group">
            <img src="/images/hero/fb-photo-6.jpg" alt="Façade extérieure Multi-Choix Entrepôts — rangée de portes numérotées, enseigne visible" className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" width={400} height={400} />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#14356b] to-transparent p-3 text-white font-mono text-[11px] uppercase tracking-wider">
              Entrée principale · numérotée
            </figcaption>
          </figure>

          {/* fb-photo-45 */}
          <figure className="relative overflow-hidden group">
            <img src="/images/gallery/fb-photo-45.jpg" alt="Unité 8×10 Multi-Choix Entrepôts avec kart de golf — indication de taille" className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" width={400} height={400} />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#14356b] to-transparent p-3 text-white font-mono text-[11px] uppercase tracking-wider">
              Kart de golf · unité 8×10
            </figcaption>
          </figure>

          {/* fb-photo-47 */}
          <figure className="relative overflow-hidden group">
            <img src="/images/gallery/fb-photo-47.jpg" alt="VTT et équipement remorquable entreposé dans une unité Multi-Choix" className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" width={400} height={400} />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#14356b] to-transparent p-3 text-white font-mono text-[11px] uppercase tracking-wider">
              VTT et remorque · 10×10
            </figcaption>
          </figure>

          {/* fb-photo-21 */}
          <figure className="relative overflow-hidden group">
            <img src="/images/location/fb-photo-21.jpg" alt="Intérieur grand espace Multi-Choix Entrepôts avec motoneiges" className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" width={400} height={400} />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#14356b] to-transparent p-3 text-white font-mono text-[11px] uppercase tracking-wider">
              Motoneiges · grand format
            </figcaption>
          </figure>

          {/* fb-photo-42 */}
          <figure className="relative overflow-hidden group">
            <img src="/images/gallery/fb-photo-42.jpg" alt="Pneus et équipement entreposés — stockage saisonnier Multi-Choix" className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" width={400} height={400} />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#14356b] to-transparent p-3 text-white font-mono text-[11px] uppercase tracking-wider">
              Pneus saisonniers · 8×10
            </figcaption>
          </figure>

          {/* fb-photo-49 */}
          <figure className="relative overflow-hidden group">
            <img src="/images/gallery/fb-photo-49.jpg" alt="Unité vide disponible Multi-Choix Entrepôts — intérieur propre et lumineux" className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" width={400} height={400} />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#14356b] to-transparent p-3 text-white font-mono text-[11px] uppercase tracking-wider">
              Unité disponible · lumineuse
            </figcaption>
          </figure>

          {/* fb-photo-44 */}
          <figure className="relative overflow-hidden group">
            <img src="/images/gallery/fb-photo-44.jpg" alt="Unité ouverte vue extérieure avec équipement Multi-Choix" className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" width={400} height={400} />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#14356b] to-transparent p-3 text-white font-mono text-[11px] uppercase tracking-wider">
              Vue extérieure · unité occupée
            </figcaption>
          </figure>

          {/* fb-photo-23 */}
          <figure className="relative overflow-hidden group">
            <img src="/images/location/fb-photo-23.jpg" alt="Intérieur unité Multi-Choix avec pneus et équipement — cadrage net" className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" width={400} height={400} />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#14356b] to-transparent p-3 text-white font-mono text-[11px] uppercase tracking-wider">
              Pneus et matériel · propre
            </figcaption>
          </figure>

        </div>

        {/* CTA strip */}
        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm mb-4 uppercase tracking-wider">
            Votre espace vous attend
          </p>
          <a
            href="tel:+14182229895"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#14356b] text-[#e4ce4f] font-bold uppercase tracking-widest text-sm min-h-12 transition-all duration-200 hover:bg-[#e4ce4f] hover:text-[#14356b] border-2 border-[#14356b]"
          >
            Réserver — 418 222-9895
          </a>
        </div>
      </div>
    </section>
  )
}
