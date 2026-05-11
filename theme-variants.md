# theme-variants.md — Multi-Choix Entrepôts

## Direction A — Industriel-Brut (Brutalist industrial)

**Essence** : Béton + acier. Bebas Neue pour le display, Inter pour le body. Fond blanc pur, navy #14356b pour les sections alternées, gold #e4ce4f uniquement pour les CTAs et eyebrows. Pas de border-radius sur les boutons. Ombres marquées à 4px solid.

**Typographie** : display = "Bebas Neue" (all-caps géant, weight 400 = looks 900) ; body = "Inter" ; mono = "JetBrains Mono" pour les codes format.

**Trade-off** : Fort en desktop, peut sembler austère sur mobile. Adapté au secteur entrepôt.

---

## Direction B — Pro-Local (Friendly professional)

**Essence** : Fond slate-50, primary navy en header, accent gold sur CTAs et icônes. Manrope pour display (weight 700), Source Sans 3 pour body. Coins arrondis (rounded-lg). Ambiance PME régionale bienveillante.

**Typographie** : display = "Manrope" ; body = "Source Sans 3"

**Trade-off** : Moins distinctif, risque de ressembler à n'importe quelle PME locale.

---

## Direction C — Contraste maximal (High-contrast editorial)

**Essence** : Fond navy #14356b sur Hero + Footer, fond blanc pour les sections milieu. Gold en masse sur hero pour headlines. Plus d'inversions couleur (dark/light alternance). Sections avec bg-primary profondes.

**Typographie** : display = "Bebas Neue" ; body = "Inter"

**Trade-off** : Très chargé visuellement — risque de fatigue si mal dosé.

---

## Direction retenue : **A — Industriel-Brut**

**Justification** : Le secteur (location d'espaces d'entreposage) appelle un registre direct et robuste. Bebas Neue all-caps + navy/gold + zéro border-radius sur boutons = cohérence visuelle avec l'image "porte d'entrepôt" de l'identité. La palette lead.json est naturellement forte — pas besoin de l'adoucir.

**Polices Google Fonts utilisées** :
- `Bebas Neue` (display) — weight 400
- `Inter` (body) — weights 400, 500, 600, 700

**Neutres** :
- `#FFFFFF` — background
- `#F8FAFC` — surface légère (sections alternées claires)
- `#0F172A` — slate-900 (fonds dark sections)
- `#1B1B1B` — foreground (body text)
- `#64748B` — slate-500 (muted text)
- `#E2E8F0` — border/divider
