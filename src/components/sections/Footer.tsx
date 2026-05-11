export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#14356b] text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div>
            <img src="/images/logo/logo-clean.png" alt="Multi-Choix Entrepôts logo" width={80} height={80} className="h-16 w-auto object-contain mb-4" loading="lazy" />
            <h3 className="font-display text-2xl uppercase text-white mb-2">
              Multi-Choix Entrepôts
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Location d'espaces d'entreposage sécurisés dans la région de Québec. Propres, chauffés, barrés, accessibles 24h/7.
            </p>
          </div>

          {/* Formats */}
          <div>
            <h4 className="font-bold text-[#e4ce4f] uppercase tracking-widest text-xs mb-5">
              Formats disponibles
            </h4>
            <ul className="space-y-3 text-white/80 text-sm">
              <li className="flex items-center gap-3">
                <span className="font-display text-xl text-[#e4ce4f]">8×10</span>
                <span className="text-white/50">— 80 pi² · Pneus, vélos, boîtes</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="font-display text-xl text-[#e4ce4f]">10×10</span>
                <span className="text-white/50">— 100 pi² · VTT, moto, mobilier</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="font-display text-xl text-[#e4ce4f]">10×20</span>
                <span className="text-white/50">— 200 pi² · Auto, bateau, maison</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-[#e4ce4f] uppercase tracking-widest text-xs mb-5">
              Contact
            </h4>
            <ul className="space-y-3 text-white/80 text-sm">
              <li>
                <a
                  href="tel:+14182229895"
                  className="text-white hover:text-[#e4ce4f] transition-colors font-bold text-lg"
                >
                  418 222-9895
                </a>
              </li>
              <li className="text-white/60">Région de Québec, QC</li>
              <li className="text-white/60">Accès : 24h / 7 jours</li>
              <li className="text-white/60">Chauffé · Éclairé · Barré</li>
            </ul>

            {/* Nav links */}
            <div className="mt-6 flex flex-wrap gap-4">
              {['#about', '#services', '#gallery', '#faq', '#contact'].map((href) => {
                const labels: Record<string, string> = {
                  '#about': 'À propos',
                  '#services': 'Formats',
                  '#gallery': 'Galerie',
                  '#faq': 'FAQ',
                  '#contact': 'Contact',
                }
                return (
                  <a
                    key={href}
                    href={href}
                    className="text-white/50 hover:text-[#e4ce4f] text-xs uppercase tracking-wider transition-colors"
                  >
                    {labels[href]}
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            © {currentYear} Multi-Choix Entrepôts. Tous droits réservés.
          </p>
          <p className="text-white/30 text-xs uppercase tracking-wider">
            Location d'espaces d'entreposage · Québec, Canada
          </p>
        </div>
      </div>
    </footer>
  )
}
