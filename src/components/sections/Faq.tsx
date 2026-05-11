import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'Les unités sont-elles chauffées en hiver?',
    a: 'Oui. Toutes nos unités sont chauffées en hiver pour protéger vos effets contre le gel. Idéal pour meubles, électroménagers, électronique et vêtements.',
  },
  {
    q: 'Est-ce que je peux accéder à mon unité la nuit ou les fins de semaine?',
    a: 'Absolument. Nos entrepôts sont accessibles 24 heures sur 24, 7 jours sur 7 — incluant les jours fériés. Vous gérez votre accès à votre convenance.',
  },
  {
    q: 'Quelle est la différence entre les formats 8×10, 10×10 et 10×20?',
    a: 'Le 8×10 (80 pi²) convient aux pneus d\'hiver, vélos et boîtes. Le 10×10 (100 pi²) peut contenir un VTT, une moto ou le contenu d\'une pièce. Le 10×20 (200 pi²) peut accueillir une auto, un bateau ou le contenu complet d\'une maison.',
  },
  {
    q: 'Est-ce que mon unité est sécurisée?',
    a: 'Chaque unité est barrée avec un cadenas haute résistance. Le site est clôturé et l\'accès est contrôlé. Vous êtes le seul à avoir accès à votre unité.',
  },
  {
    q: 'Est-ce que je peux entreposer un véhicule (auto, moto, motoneige, bateau)?',
    a: 'Oui. Nos unités 10×10 et 10×20 sont conçues pour accueillir des véhicules récréatifs — motoneiges, VTT, autos et bateaux. Appelez-nous pour confirmer les dimensions selon votre véhicule.',
  },
  {
    q: 'Comment réserver une unité?',
    a: 'Appelez-nous directement au 418 222-9895. Nous vous confirmons la disponibilité et les modalités de location par téléphone. Simple et rapide.',
  },
  {
    q: 'Est-ce que l\'éclairage est inclus?',
    a: 'Oui. L\'intérieur et l\'extérieur du site sont éclairés. Vous pouvez accéder à votre espace en toute sécurité, même de nuit.',
  },
]

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 lg:py-32 bg-[#F8FAFC]">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="mb-14">
          <p className="text-[#e4ce4f] text-xs font-bold uppercase tracking-[0.25em] mb-4">
            Questions fréquentes
          </p>
          <h2 className="font-display text-5xl lg:text-6xl uppercase text-[#14356b] leading-none">
            Tout ce que vous voulez savoir
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white border border-[#E2E8F0] overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="font-semibold text-[#14356b] text-base group-hover:text-[#e4ce4f] transition-colors duration-150 leading-snug">
                  {faq.q}
                </span>
                <ChevronDown
                  size={20}
                  className={`shrink-0 text-[#14356b] transition-transform duration-300 ${
                    open === i ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {open === i && (
                <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-[#E2E8F0] pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 p-8 bg-[#14356b] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-bold text-lg mb-1">
              D'autres questions?
            </p>
            <p className="text-white/70 text-sm">
              Appelez-nous — réponse rapide, sans formulaire.
            </p>
          </div>
          <a
            href="tel:+14182229895"
            className="shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-[#e4ce4f] text-[#14356b] font-bold uppercase tracking-widest text-sm min-h-12 transition-all duration-200 hover:bg-white border-2 border-[#e4ce4f]"
          >
            418 222-9895
          </a>
        </div>
      </div>
    </section>
  )
}
