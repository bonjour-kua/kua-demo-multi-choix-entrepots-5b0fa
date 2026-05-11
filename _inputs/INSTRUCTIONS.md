# Instructions de build — Multi-Choix Entrepôts

## Objectif

Construire un home page marketing pour **Multi-Choix Entrepôts** (Location d'espaces d'entreposage).

**Tu es capable de travail créatif extraordinaire. N'aie pas peur — Multi-Choix Entrepôts mérite un site qui lui ressemble, pas un template.**

Direction de design : voir la section `## Design skill` ci-dessous pour les **HARD constraints**, **SOFT preferences**, **VARIATION axes**, **ANTI-PATTERNS**, et **Composition signatures**. Cette section **ne contient PAS de couleur** — la couleur vient de `lead.json.palette` (voir plus bas).

## Discipline qualité — à lire AVANT de coder

Le harness Küa expose ce projet à Replit Agent en un seul pass autonome. Aucune review humaine ne suit. Si tu ne respectes pas la discipline ci-dessous, le site régressera vers le « warm-and-friendly par défaut » qui rend les sites de PME interchangeables. Les 7 sections suivantes sont obligatoires — chacune produit un artefact concret sur disque.

### 1. Identité d'abord — `decisions.md` AVANT toute section

Avant d'écrire la moindre ligne de code dans `src/components/sections/*`, écris `decisions.md` à la racine du repo. Ce fichier contient trois blocs courts et spécifiques à **Multi-Choix Entrepôts** :

1. **Phrase d'identité (2-3 phrases)** — au format « {Nom} est le {quoi} pour {qui spécifique}. ». Le test : si tu remplaces le nom par celui d'un concurrent du même secteur dans la même ville, la phrase doit devenir fausse ou maladroite. Source : `lead.json.description` + `lead.json.facebook_url` + voice-samples si présents.
2. **Vibe (une phrase, 3-5 adjectifs sensoriels)** — exemples : « artisanal et chaleureux », « industriel direct sans bullshit », « précis, calme, rassurant comme une salle d'urgence propre », « cuir patiné, bois huilé, fierté tranquille ». **INTERDIT** : noms de styles design (« minimal », « modern », « clean », « tech », « editorial »). Ce sont des labels, pas des feelings.
3. **Charge émotionnelle (une phrase)** — l'émotion que le visiteur doit ressentir en 5 secondes + l'action qui doit suivre. Format : « {Émotion} → {action concrète attendue} ». Exemple : « Confiance qu'ils savent ce qu'ils font → décrocher le téléphone. »

**Phrasings INTERDITS partout dans le site** (red flags génériques) :
- « votre partenaire de confiance », « partenaire fiable », « notre engagement envers vous »
- « qualité reconnue », « qualité supérieure », « excellence à votre service »
- « depuis X années à votre service » (sans chiffre vérifié dans `lead.json`)
- « one-stop shop », « your local experts », « vos experts locaux »
- « professionnels dévoués », « équipe dévouée », « entreprise familiale fière »
- Tout Lorem ipsum, tout `{{placeholder}}`, tout nom d'entreprise inventé

**INTERDICTION ABSOLUE — fabrication de témoignages** :

Tu ne peux **PAS** inventer de noms ou citations de clients dans la section Testimonials. Pas de « Marie L. », pas de « Pierre B. », pas de « Jean-François T. » avec une fausse citation plausible — c'est une dérive vers la copy générique qui rend bien mais ment.

- Source autorisée : `lead.json.reviews` ou `lead.json.voice_samples` SEULEMENT, et seulement si une vraie review/quote y figure avec un nom attribué.
- Si `lead.json` n'a pas de témoignages réels (cas fréquent — la majorité des PME québécoises n'ont pas leur Google reviews syndiquées dans le scrape), livre la section Testimonials **avec un placeholder honnête** : un bloc « Les témoignages de nos clients sont à venir » + un CTA secondaire vers Google Reviews / Facebook reviews. PAS de fausses citations qui « ont l'air vraies ».
- Documente l'absence dans `follow-ups.md` avec `[high]` et la mention « ajouter 3-5 vraies reviews du client avant publication ».
- Vérification mécanique : `_inputs/check.sh` flaggue tout match `[A-Z][a-zé]+ [A-Z]\.` dans `Testimonials*.tsx` comme suspect — ces noms format « Prénom Initiale. » sont la signature de l'invention.

Chaque ligne de copy du site doit pouvoir se justifier par un artefact concret de `lead.json` (description, phone, city, palette, sector, voice samples). Pas de fabrication. Si `lead.json` est mince, écris moins de copy plutôt que de combler avec du générique.

### 2. Exploration de thème — `theme-variants.md` AVANT le CSS

Avant de figer la palette / typo / vibe dans `src/index.css` ou `tailwind.config.js`, écris `theme-variants.md` à la racine du repo. Ce fichier expose **3 directions distinctes** que tu as considérées :

```md
# Directions de thème explorées

## Direction A — {label court, ex: « Industriel direct »}
**Palette** : utilise quels hex de `lead.json.palette` et comment.
**Typographie** : paire Google Fonts (display + body) + 1 ligne de pourquoi.
**Vibe** : 3-5 mots sensoriels.
**Ce qui NE rendra PAS bien avec cette direction** : 1 ligne honnête, pour CE projet précis.

## Direction B — {label délibérément différent}
(même structure)

## Direction C — {troisième angle, encore différent}
(même structure)

## Direction retenue : {A | B | C}
**Pourquoi** (3-5 lignes) : citer la phrase d'identité de `decisions.md`, le vibe, la charge émotionnelle. Pointer un artefact concret du lead. PAS « c'est plus moderne ». PAS « ça correspond mieux ».
```

**Règles strictes** :
- Les 3 directions doivent occuper des zones réellement différentes de l'espace de design (pas 3 nuances de la même palette). Test : si tu peux échanger les labels et que chacun reste crédible, recommence.
- Aucune direction ne peut être « safe / corporate / minimal » seule — c'est un défaut, pas une direction.
- La ligne « ne rendra PAS bien » est obligatoire pour les 3, et doit être un risque crédible POUR CE PROJET.
- Les 2 directions non-retenues vivent uniquement dans `theme-variants.md`. Elles ne génèrent aucun code.

### 3. Notes de design par section — `content/section-designs/*.design.md` AVANT chaque .tsx

Pour chaque section listée plus bas, écris UN court fichier `content/section-designs/<Component>.design.md` AVANT le `.tsx` correspondant. Format strict (2 blocs courts — pas plus) :

```md
# {Section} — design notes

## Identité-pour-cette-section
{1-2 lignes : ce qui rend CETTE section non-générique pour **Multi-Choix Entrepôts** spécifiquement. Pointer un trait de la phrase d'identité de `decisions.md` qui doit transparaître ici. Pas de mention de layout ni de tokens — ceux-là vivent dans le skill + Hard requirements.}

## Détail copy concret
{1 ligne : UN morceau de copy ou de contenu spécifique tiré de `lead.json` (un mot du `description`, le nom d'un quartier, un détail du sector) qui ancre cette section dans la réalité du client. PAS un placeholder, PAS une formule générique.}
```

Pourquoi seulement 2 blocs : motion / tokens / DO NOTs sont déjà couverts globalement par la section `## Design skill` (signatures de composition, anti-patterns) et par la discipline 4 (anti-générique checklist). Les 5 blocs précédents (Composition, Hiérarchie, Motion, Expression de marque, Tokens, DO NOTs) produisaient ~150 lignes de notes pour 9 sections — coût élevé, valeur faible. On garde ce qu'un script ne peut PAS attraper : l'identité-pour-CETTE-section + un détail copy concret qui empêche la dérive vers le template.

Le `.design.md` est ton plan ; le `.tsx` est l'implémentation. **Le `.tsx` doit incarner le détail copy concret du `.design.md`.** Si en codant tu réalises que ton plan était creux ou trop abstrait, mets à jour le `.design.md` d'abord, puis le `.tsx`.

### 4. Anti-générique checklist — verify AVANT le build

Avant de commit, parcours le repo et vérifie qu'AUCUN des patterns suivants n'est présent :

- [ ] **Aucun `@ts-nocheck`** dans le code source. Interdit. Si TypeScript râle, fix la vraie erreur (vérifie les imports, les types React 18 — pas besoin de `'use client'`, on est en SPA Vite, pas Next).
- [ ] **Aucun « Lorem ipsum »**, aucun `{{placeholder}}`, aucun « TODO », aucun « XXX », aucun nom d'entreprise factice.
- [ ] **Aucune URL d'image stock** (Unsplash, Pexels, Lorem Picsum, placeholder.com). Toutes les `<img src>` pointent vers `/images/<role>/<filename>` copié depuis `_inputs/photos/`. Si une section veut une photo absente, utilise un fallback bloc-couleur dérivé de la palette (cf. discipline 5), pas une stock photo.
- [ ] **Toutes les photos `usable:true` du manifest sont utilisées**. `_inputs/photos/manifest.json` liste les photos que le harness a jugées exploitables ; CHACUNE doit apparaître au minimum une fois dans le site rendu (Hero, About, Gallery, Services, Team, etc. — la section dépend du `role` du manifest). Les photos qui ne trouvent pas leur place sont un signal qu'une section manque ou que la composition d'une section gagnerait à être enrichie. Documente le mapping `photo → section` dans `decisions.md` (un bloc par photo, à la fin du fichier sous un titre `## Photos utilisées`). Si une photo est délibérément écartée (qualité douteuse, redondance), liste-la dans `follow-ups.md` avec `[low]` et la raison.
- [ ] **Aucune valeur de couleur inventée**. Toute valeur CSS de couleur (oklch, hex, rgb, hsl) doit tracer à `lead.json.palette` ou aux tokens dérivés (`--primary`, `--accent_on_dark`, `--accent_on_light`, neutres slate/zinc explicitement listés dans `theme-variants.md`). Aucune couleur d'accent ne sort du chapeau.
- [ ] **Aucune des phrases interdites** de la section 1 (« partenaire de confiance », « qualité reconnue », « one-stop shop », « your local experts », « professionnels dévoués », etc.).
- [ ] **Aucune section ne pourrait être ctrl-C'd à un concurrent du même secteur** sans modification. Test : prends la section Hero, remplace mentalement le nom de l'entreprise par celui d'un concurrent — la copy doit devenir fausse ou maladroite. Idem Services, About, CTA.

Si une case échoue, **fix avant de commit**. Pas de « presque bon ».

#### Logo — règle stricte

Le logo de marque a été extrait avec un fond transparent : `_inputs/photos/logo-clean.png` (vérifié par QA Claude). Utilise-le **toujours** dans le navbar, le footer, et tout placement où il s'intègre à un fond coloré. Une version avec fond carré blanc/coloré dans un navbar = bug de qualité visuel inacceptable.

- **Default** : `<img src="/images/logo-clean.png" alt="..."/>` — fond transparent, s'adapte au bg de la section.
- **Copie nécessaire** : copie le fichier depuis `_inputs/photos/` vers `public/images/` au moment du wiring d'assets.


#### Header / Navbar — emplacement obligatoire du logo

Le logo (ou le wordmark fallback) DOIT apparaître dans le `Header` du site (premier composant de la liste de sections plus bas). Le Header est sticky, fond clair (par défaut), et contient au minimum :
- Logo image (ou wordmark texte si aucun logo extrait)
- Nom de l'entreprise
- 3-5 liens de navigation (ancres vers les sections en-dessous)
- 1 CTA primaire (téléphone cliquable, ou « Réserver », selon le secteur)

Implémentation : `src/components/sections/Header.tsx` (l'emplacement standard pour les sections, suit la même convention que les autres composants listés). Wire-le en PREMIER dans `src/App.tsx`, avant le `Hero`.

**Vérification mécanique** : si `logo-clean` ou `logo-raw` existe dans `_inputs/photos/`, alors `grep -r "logo" src/components/sections/Header.tsx` doit retourner au minimum une référence `<img src="/images/logo/...">`. Sinon, le Header utilise un wordmark texte (le nom de l'entreprise stylisé en typographie de display) ET un item `[high]` est ajouté dans `follow-ups.md` notant l'absence de logo.

### 5. Contraste WCAG AA — vérification mécanique

`lead.json.palette` expose deux variantes pré-vérifiées par le harness Küa :
- `palette.accent_on_dark` — **garantie WCAG AA** contre `#0F172A` (slate-900). Utilise-la pour tout accent posé sur fond sombre (CTA sur dark hero, badge sur footer foncé, etc.).
- `palette.accent_on_light` — **garantie WCAG AA** contre `#FFFFFF`. Utilise-la pour tout accent posé sur fond clair (CTA sur background blanc, lien sur card blanche, etc.).

Règles de contraste à vérifier mentalement avant le build :
- Body text sur background : ≥ **4.5:1**.
- Large text (≥ 18.66px bold ou ≥ 24px regular) + composants UI (boutons, focus rings, icônes signifiantes) : ≥ **3:1**.
- Si tu poses `palette.dominant[0]` directement sur un fond sans passer par les variantes `accent_on_*`, tu prends le risque que le contraste fail. Préfère les variantes quand elles existent.

### 6. Trace de décisions — `decisions.md` + `follow-ups.md` (append-only)

Au-delà du bloc d'identité (section 1), tu utilises `decisions.md` comme **journal append-only des décisions notables** prises pendant le build. Et `follow-ups.md` comme **dette technique non-fixée**.

**`decisions.md`** — chaque décision substantielle (palette retenue, ordre des sections, ton de copy choisi, fallback design quand une photo manquait) reçoit un bloc :

```md
---
## {YYYY-MM-DD HH:mm} · {label court, ex: "palette pick"}

**Décision** : ce qui a été choisi (1 phrase).
**Pourquoi** : artefact concret de `lead.json` ou d'une discipline ci-dessus qui justifie. Pas « c'est plus moderne ».
**Trade-off accepté** : ce qu'on sacrifie en figeant ce choix (1 phrase).
```

Append-only. Chaque bloc commence par `---`. Ne jamais réécrire les blocs précédents.

**`follow-ups.md`** — items observés mais pas fixés cette passe (typo à valider, photo manquante remplacée par fallback, copy un peu fade dans une section secondaire). Format :

```md
---
## {YYYY-MM-DD HH:mm} · build

- [{high|med|low}] {fichier ou zone} — {description 1 ligne, actionnable}
```

Un fichier vide est valide. Ne mets pas de filler « RAS ».

### 7. Self-review final — AVANT `git commit`

Dernier passage humain APRÈS `check.sh`. Le script Küa couvre les gates mécaniques (typecheck, ≥30 lignes, photos wirées, logo dans Header, pas de placeholders, pas de noms inventés) ; cette section couvre les choix de copy + hiérarchie qu'un script ne peut pas attraper. Si une seule case échoue, fix avant de pousser :

- [ ] `bash _inputs/check.sh` a été exécuté et son output est paste dans `decisions.md` sous `## Final check`. Tous les HARD GATES sont passés.
- [ ] `decisions.md` existe et contient le bloc d'identité (phrase d'identité + vibe + charge émotionnelle).
- [ ] `theme-variants.md` existe et expose 3 directions distinctes + une retenue justifiée.
- [ ] Pour CHAQUE section listée plus bas, le `.design.md` correspondant existe sous `content/section-designs/` (`content/section-designs/Header.design.md`, `content/section-designs/Hero.design.md`, `content/section-designs/About.design.md`, `content/section-designs/Services.design.md`, `content/section-designs/Gallery.design.md`, `content/section-designs/Testimonials.design.md`, `content/section-designs/Faq.design.md`, `content/section-designs/Contact.design.md`, `content/section-designs/Footer.design.md`) ET contient les 2 blocs requis (`## Identité-pour-cette-section` + `## Détail copy concret` — discipline 3).
- [ ] Pour CHAQUE section listée plus bas, le composant `src/components/sections/<Component>.tsx` existe ET contient au minimum **30 lignes** de JSX réel. Vérification mécanique : `wc -l src/components/sections/*.tsx` — aucune section ne doit être en-dessous de 30. Si une section a été délibérément réduite (peu de données dans `lead.json`), livre-la quand même avec un placeholder honnête type « Détails à venir » + lien vers le contact, et ajoute un item `[high]` dans `follow-ups.md`. **Une section squelette qui rend un `<div>` vide = bug visuel inacceptable** (l'utilisateur voit un grand bloc blanc à la place du contenu).
- [ ] **Distribution des photos** (section ## Distribution des photos par section) : visualement la page a 10-15 placements `<img>` répartis entre Hero (1 full-bleed), About (1-2), Services/Menu (3-6), Gallery (4-6 asymétrique), Testimonials/Contact (1-2). Pas 3 photos shoved dans Gallery + rien ailleurs.
- [ ] **Bleed edges** : au moins 1 section (Hero idéalement) a une photo qui touche le bord du viewport (`w-screen` ou équivalent).
- [ ] **Asymétrie** : au moins 1 grid section utilise `col-span-2` ou tailles inégales — pas que des grids uniformes.
- [ ] **Trust signal calculé** : si `lead.json.facebook_about` mentionne une année de fondation, la stat `years_active` apparaît dans Hero ou About avec calcul dynamique (`new Date().getFullYear() - foundedYear`). Le Hero contient AU MOINS UN nombre concret.
- [ ] **`index.html` `<head>` édité** : `<title>` + `<meta name="description">` + `og:*` tags + JSON-LD `LocalBusiness` reflètent les vraies données de `lead.json` (pas les placeholder template).
- [ ] **Tous les `<img>` ont `loading`, `width`, `height`** : `loading="eager"` pour le hero, `loading="lazy"` pour le reste. Vérif mécanique : `grep -c "loading=" public/index.html src/components/**/*.tsx` ≥ count des `<img>` totaux.
- [ ] **Skip link** : `<a href="#main" class="sr-only focus:not-sr-only">` est le premier enfant de `<body>` (ou de `<App>`). `<main id="main">` enveloppe le contenu principal.
- [ ] **Sticky Header + hamburger mobile** : Header utilise `sticky top-0` avec fond opaque. < md, la nav devient un drawer hamburger. CTA téléphone (`<a href="tel:+1...">`) présent.
- [ ] **Vertical rhythm** : sections principales `py-20` minimum, Hero `py-32` minimum. Pas de `py-12` étouffant.
- [ ] Anti-générique checklist (section 4) : toutes les cases vertes — incluant l'utilisation de chaque photo `usable:true` du manifest.
- [ ] **Contraste WCAG AA** (section 5) + règle blanc/noir : texte sur fond accent foncé = `#FFFFFF` ; texte sur fond accent clair = `#1B1B1B`. Pas de gris muted illisible. `accent_on_dark` / `accent_on_light` réservés aux ÉLÉMENTS d'accent (CTA, icônes, links), pas au texte body.
- [ ] `npx tsc --noEmit` (ou `npm run typecheck` si exposé) passe sans erreur. **C'EST LE GATE QUI COMPTE.**
- [ ] Aucun `@ts-nocheck` dans le code (`grep -r "@ts-nocheck" .` retourne vide).
- [ ] `npm run build` (Vite) doit passer. Vite est rapide et fiable dans le sandbox Replit (pas le SIGBUS qu'on avait avec Next.js SWC). Si exceptionnellement ça crash pour cause environnementale, tsc clean reste le gate de fond — push avec note dans le commit message.

---

## Ordre de build

### Reporting de progression — `./_inputs/progress.sh`

Avant CHAQUE étape (theme, section-design, section-tsx, integration, check), appelle `./_inputs/progress.sh <phase> <target> start` puis `./_inputs/progress.sh <phase> <target> done` après. Le harness Küa stream `~/kua-build/.kua-progress.jsonl` en temps réel pour suivre où tu en es.

Phases reconnues : `decisions` | `theme` | `section-design` | `section-tsx` | `integration` | `check` | `done`.
Actions reconnues : `start` | `done` | `skip` | `error`.

Exemples :
- `./_inputs/progress.sh decisions identity start` puis `./_inputs/progress.sh decisions identity done` autour de l'écriture de `decisions.md`.
- `./_inputs/progress.sh section-design Hero start` puis `./_inputs/progress.sh section-design Hero done` autour de `Hero.design.md`.
- `./_inputs/progress.sh section-tsx Hero start` puis `./_inputs/progress.sh section-tsx Hero done` autour de `Hero.tsx`.
- `./_inputs/progress.sh check all start` puis `./_inputs/progress.sh check all done` (ou `error`) autour de `bash _inputs/check.sh`.
- `./_inputs/progress.sh done all done` une fois le commit + push réussis.

C'est un fire-and-forget — l'output est append-only dans `~/kua-build/.kua-progress.jsonl`. Si le helper script échoue, ne bloque pas le build (le harness dégrade gracefully).

### Séquence

1. `Read _inputs/INVENTORY.md`
2. Lis chaque fichier listé dans l'ordre de priorité (INSTRUCTIONS.md déjà ouvert — relis `## Design skill` ci-dessous, puis lead.json, manifest.json, voice-samples.md si présent, reference-image si présent).
3. **Écris `decisions.md`** (bloc d'identité — discipline 1) AVANT toute section.
4. **Écris `theme-variants.md`** (3 directions + retenue — discipline 2).
5. Implémente les tokens du thème dans `src/index.css` (CSS vars dans `@layer base`) et `tailwind.config.js` selon la direction retenue. Utilise EXCLUSIVEMENT les couleurs de `lead.json.palette` + neutres slate/zinc documentés.
6. Pour CHAQUE section listée plus bas : d'abord `content/section-designs/<Component>.design.md` (discipline 3, 2 blocs courts), ensuite `src/components/sections/<Component>.tsx`.
7. Wire `src/App.tsx` comme une composition root mince (≤50 lignes), important les sections depuis `src/components/sections/`.
8. **Photo wiring** — pour CHAQUE photo `usable:true` du manifest :
   a. Copie le binaire depuis `_inputs/photos/<filename>` vers `public/images/<role>/<filename>` (Vite serve `public/` à la racine, donc `<img src="/images/<role>/<filename>"/>` résout).
   b. Décide quelle section l'utilise (le `role` du manifest est le hint principal — `hero`/`about`/`team`/`equipment`/`location`/`gallery` — mais tu peux le surcharger si une autre section bénéficie davantage de cette photo).
   c. Append un bloc dans `decisions.md` sous `## Photos utilisées` : `<filename> → <Section> (raison: 1 ligne pointant le `reason` du manifest)`.
   d. Si une photo n'a pas d'emplacement naturel, c'est un signal qu'une section devrait être créée ou enrichie — n'écarte pas silencieusement. Documente l'écart dans `follow-ups.md` avec `[low]` si vraiment hors-sujet.
9. Anti-générique checklist (discipline 4) — verify chaque case.
10. **PASS 2 obligatoire — re-read + check.sh** : avant le commit final, RE-LIS `_inputs/INSTRUCTIONS.md` pour rafraîchir le contexte (les 30k tokens de la passe 1 ont diminué la rétention), puis EXÉCUTE `bash _inputs/check.sh` (script packagé par Küa avec toutes les vérifications mécaniques). Paste l'output complet dans `decisions.md` sous `## Final check`. **Le `RUN_HASH` et le `GIT_REV` affichés à la fin doivent être paste dans `decisions.md` sous `## Final check` ET reportés dans `.kua-done` sous `checkRunHash` (voir STEP 5 plus bas).** Si le script exit non-zero (HARD GATE FAILED), fix les sections marquées `FAIL` avant de re-runner. Le post-mortem du run précédent a montré que les gates « vérifiés mentalement » sont systématiquement skippés — le script force l'exécution réelle.
11. `npx tsc --noEmit` doit être propre (déjà couvert par check.sh — gate 1).
12. Self-review final (discipline 7) — désormais redondant avec check.sh, mais garde une passe humaine sur les choix de copy / hiérarchie.
13. Commit + push to `main` avec les commandes ci-dessous.

## Sections à inclure

- `Header` — composant à créer dans `src/components/sections/Header.tsx`
- `Hero` — composant à créer dans `src/components/sections/Hero.tsx`
- `About` — composant à créer dans `src/components/sections/About.tsx`
- `Services` — composant à créer dans `src/components/sections/Services.tsx`
- `Gallery` — composant à créer dans `src/components/sections/Gallery.tsx`
- `Testimonials` — composant à créer dans `src/components/sections/Testimonials.tsx`
- `FAQ` — composant à créer dans `src/components/sections/Faq.tsx`
- `Contact` — composant à créer dans `src/components/sections/Contact.tsx`
- `Footer` — composant à créer dans `src/components/sections/Footer.tsx`

Adapte la composition à chaque section selon le skill. Si une section semble redondante ou hors-sujet pour ce client précis, **omet-la** (ne pas créer une section vide « par défaut »). Documente l'omission dans `decisions.md`.

## Source de vérité couleur

**Couleur EXCLUSIVEMENT depuis `lead.json.palette`** :
- `palette.dominant` : palette principale (hex, ordonnée par dominance) — utilise au moins le `[0]` comme accent principal et le `[1]` comme accent secondaire.
- `palette.vibrant` / `palette.dark_vibrant` : variantes accentuées (utiles pour CTA / labels).
- `palette.accent_on_dark` / `palette.accent_on_light` : variantes vérifiées WCAG AA (cf. discipline 5) — utilise-les directement pour tout accent posé sur fond foncé/clair.

**JAMAIS** d'OKLCH / hex / palette inventés ou pris du skill. Si le skill évoque une couleur, lis-la comme une **règle de contraste** et applique-la avec la palette du lead.

### Fallback universel — BLANC + NOIR profond

Au-delà des accents palette, **deux couleurs sont TOUJOURS disponibles comme texte / contraste** contre n'importe quel fond, peu importe la palette :

- **Blanc** : `#FFFFFF` (ou `rgb(255 255 255)`)
- **Noir profond** : `#1B1B1B` (pas `#000000` — le noir pur est trop dur ; `#1B1B1B` garde un soupçon de chaleur tout en restant ≥ 18:1 contraste contre le blanc)

Règle d'usage :
- **Texte sur fond accent palette** (rouge, bleu, vert, etc.) : utilise **blanc** ou **`#1B1B1B`** selon que l'accent est foncé ou clair. **Ne force pas** `accent_on_dark`/`accent_on_light` comme couleur de texte — ces variantes sont conçues pour être l'ACCENT (CTA, icône, lien) sur un fond, pas l'inverse.
- **Quand un accent palette ne passe pas AA contre un fond donné**, fallback vers blanc ou `#1B1B1B` AVANT d'inventer une nouvelle couleur. Mieux vaut un site monochrome lisible qu'une palette « créative » illisible.
- **Le neutre `#1B1B1B` est l'équivalent du `slate-900` mais plus chaud** — utilise-le pour les fonds foncés du site (footer, hero foncé, surfaces card sombres) au lieu de `#000` ou `slate-900` strict, sauf si `theme-variants.md` documente explicitement le choix.

## Typographie — paires fonctionnelles par registre

Le skill ne nomme pas les polices ; tu choisis. **Référence-toi à ces paires éprouvées** selon le registre du business identifié dans `decisions.md` (vibe + identité). Toujours via Google Fonts (`@import` dans `src/index.css` ou `<link>` dans `index.html`), avec `display=swap` pour éviter le FOIT :

- **Artisanal / chaleureux / héritage** (boucherie, boulangerie, restaurant traditionnel, ébénisterie) : `Playfair Display` (italic disponible) en display + `Inter` en body. Ou `DM Serif Display` + `Manrope`. Le serif italic dans le hero h1 signe l'artisanat.
- **Industriel / direct / sans bullshit** (construction, métallurgie, garage, plomberie) : `Bebas Neue` ou `Anton` en display (condensed, all-caps friendly) + `IBM Plex Sans` en body. Pas d'italic.
- **Précis / professionnel / sérieux** (avocat, notaire, comptable, médecin, clinique) : `EB Garamond` ou `Cormorant Garamond` en display + `Source Sans 3` en body. Tracking serré, leading généreux.
- **Énergique / sportif / moderne** (gym, fitness, coaching) : `Archivo Black` ou `Outfit` (700-900) en display + `Outfit` (400-500) en body. Capitales partout.
- **Frais / boutique / hospitalier** (salon, spa, fleuriste, café, B&B) : `Fraunces` (variable, italics) en display + `Inter` en body. Soft italics en accent.
- **Tech / SaaS / startup** : `Geist` ou `Inter` en display ET body, tailles + weight pour hiérarchie. Mono pour les valeurs (`JetBrains Mono`).

Hiérarchie typographique minimale (échelle 1.250 ou 1.333) :
- **Display / Hero h1** : 72-96px desktop, 48-56px mobile, weight 700-900, leading 1.05-1.1, tracking -0.02em
- **Section h2** : 48-56px desktop, 32-40px mobile, weight 700, leading 1.15
- **Sub h3** : 24-32px, weight 600
- **Body** : 16-18px, leading 1.6-1.7, max-width 65-75ch (≈ `max-w-prose` Tailwind)
- **Caption / meta** : 13-14px, weight 500, uppercase + tracking +0.08em (les eyebrow-labels)

**Test mental** : si tu réduis la hiérarchie à 3 tailles seulement (display, body, caption), le site doit rester lisible et hiérarchisé. Si non, tu as inflated trop de niveaux.

## Design skill

La direction de design retenue pour ce projet (HARD constraints, SOFT preferences, VARIATION axes, ANTI-PATTERNS, signatures de composition). **Ne contient PAS de couleur** — la couleur vient EXCLUSIVEMENT de `lead.json.palette` (cf. section précédente).

# Carte blanche — direction picker

> Read this skill when the project has NO `design_skill_id` tagged.
> You are NOT bound to a specific named design skill, but you are
> NOT in pure-freestyle either — you pick from a curated set of
> 5 directions documented in `agent-skills/directions/`. The user-
> facing experience is "carte blanche" (the user didn't pick a
> direction); the agent-internal experience is "anchored to one
> of 5 directions chosen from the brief + sector signals".

This rewrite (Wave H6) replaces the prior 31-line "explore freely,
no prescriptions" prose. Replit's Q&A round 3 confirmed that
unconstrained creative freedom + a brief produces the LLM's
training-data median (beige sans-serif three-column). The fix is
**structured creative freedom**: directions provide hard floors
(no generic moves) and ceilings (no off-direction moves), but the
room in between stays large enough that the brief drives the
actual outcome.

---

# How to use this skill

You read this dispatcher to:

1. Understand the 5 available directions (one paragraph each
   below).
2. Pick the right direction for THIS project based on the brief's
   sector + identity sentence + voice samples.
3. Read the picked direction's full body from
   `agent-skills/directions/<name>.md`.
4. Apply that direction's HARD constraints + ANTI-PATTERNS as
   absolute rules, SOFT preferences as defaults, VARIATION axes
   as range-based choices driven by brief inputs.
5. Pick one of the direction's 3-5 composition signatures based on
   content density and identity.

**Do NOT mix directions.** Pick one. The whole site executes in
that direction's language. Mixing fragments tokens across the
build (Replit's failure mode for split-context multi-direction
generation).

---

# The 5 directions (overview)

Each direction is distinct in 3+ of 5 axes (typography, color,
layout, motion, imagery). The full body of each lives in
`agent-skills/directions/<name>.md` — read it after picking.

## 1. Editorial Brutalist
*Type-led, asymmetric, anti-decorative, single bold accent. The
serif-led editorial voice + asymmetric composition + bold accent
matches "boutique craft / contemporary" positioning. Best fit:
high-end artisanal food, contemporary boutiques, agencies,
editorial-leaning creative practices, premium media.*
→ `agent-skills/directions/editorial-brutalist.md`

## 2. Soft Warm Artisanal
*Material palette derived from real materials (oak, brass, paper,
tile), serif body with hand-painted signage typography influence,
process imagery, generous narrative space. Best fit: food
artisanal (boucher, boulanger, fromager, traiteur), boutique
retail with craft positioning, small-craft trades, warm
boutique services.*
→ `agent-skills/directions/soft-warm-artisanal.md`

## 3. Industrial Precision
*Cold neutrals, monospace accents, grid-locked layouts,
technical-drawing aesthetic, hard geometric edges. Best fit:
construction trades (general contractor, électricien, plombier,
HVAC), technical services, B2B logistics, technical creative
(industrial designers, modernist architects).*
→ `agent-skills/directions/industrial-precision.md`

## 4. Tech Minimal
*High contrast, system fonts (Inter / IBM Plex Sans / Söhne),
generous whitespace, minimal palette with one strong accent,
motion accents, product-screenshot-led layouts. Best fit:
SaaS, developer tools, platforms, mobile apps, modern services-
professional firms with tech positioning.*
→ `agent-skills/directions/tech-minimal.md`

## 5. Boutique Refined
*Soft luxe palette (off-whites, dusty pastels, warm metallics),
serif display, refined motion, editorial photography, generous
spacing. Best fit: high-end personal services (premium spa,
boutique salon, refined fitness), boutique retail with luxe
positioning, fine dining, premium health (boutique aesthetic
medicine, premium dental), boutique services-professional.*
→ `agent-skills/directions/boutique-refined.md`

(Slots 6 and 7 reserved for the next round of sector audit. Per
Replit: "Add a new direction when you've seen ≥3 projects in
production where none of your existing directions fit without
active distortion." We don't add directions speculatively.)

---

# How to pick (decision flow)

The picker is a function of (sector, identity sentence, voice
register). Use this decision tree:

## Step 1 — Consult the sector entry's `direction_compatibility`

When the harness inlines a sector entry (Wave H4), it lists which
directions rate **excellent fit / acceptable fit / poor fit** for
this sector. Filter: pick from "excellent fit" first, "acceptable
fit" only if the brief's identity sentence justifies, NEVER from
"poor fit" without explicit user override.

Example sector → direction pre-filtering (illustrative — the
authoritative list is in each sector entry):

- `food-artisanal` → excellent: Soft Warm Artisanal, Editorial
  Brutalist (high-end), Boutique Refined (high-end specialty)
- `food-restaurant` → excellent: Boutique Refined (fine dining),
  Soft Warm Artisanal (warm casual), Editorial Brutalist
  (contemporary)
- `construction-trades` → excellent: Industrial Precision;
  acceptable: Editorial Brutalist (high-end residential reno)
- `retail-boutique` → excellent: Boutique Refined, Editorial
  Brutalist (contemporary/contrarian), Soft Warm Artisanal
  (maker-overlap)
- `services-professional` → excellent: Editorial Brutalist
  (restrained), Boutique Refined (high-end advisory)
- `services-personal` → excellent: Boutique Refined, Soft Warm
  Artisanal
- `health` → excellent: Boutique Refined; acceptable: Editorial
  Brutalist (restrained)
- `creative` → excellent: Editorial Brutalist, Boutique Refined,
  Tech Minimal (digital studios)
- `tech-saas` → excellent: Tech Minimal; acceptable: Editorial
  Brutalist, Industrial Precision (technical products)

When NO sector matches: read the identity sentence and voice
register, pick the direction whose identity description
(in this dispatcher's "5 directions overview" section, plus
the direction file's `## Identity` block) most resonates.

## Step 2 — Cross-check with identity sentence

The identity sentence (Rule 1 of `kua-brief.md`) anchors the
specific tone. Read it and the picked direction's `## Identity`
section side-by-side:

- Does the direction's character match the brand's character?
  (A "third-generation boucher with smoke-room smell" matches
  Soft Warm Artisanal natively; forcing Tech Minimal here
  would be off-register.)
- Does the direction's typography lean align with the voice
  register? (Sharp / contemporary voice → Editorial Brutalist;
  warm / craft voice → Soft Warm Artisanal; technical /
  utilitarian voice → Industrial Precision.)

If the identity sentence and the sector's "excellent fit"
direction don't align, prefer the one the identity sentence
matches. Sector compatibility is a strong prior; identity
alignment trumps it when they conflict.

## Step 3 — When in doubt: log + pick

Don't agonize. The directions are designed so each has a
non-trivial range of variation (palette, typography, composition
signatures), so different briefs in the same direction produce
visibly different sites. If the call is genuinely 50/50 between
two directions, log a brief note in `decisions.md` (which one,
why, what the alternative would have been) and pick. The
critique pass (Wave H7) compares the output against the sector's
reference set; if the pick was wrong, the critique flags it
and you can swap on the fix-loop.

---

# Variation discipline

Replit's warning, captured verbatim because it's load-bearing:

> "Directions can over-constrain into being effectively single
> templates. The signal that you've gone too far is when all
> sites in a direction start looking like the same site with
> different content. When that happens, expand a variation axis,
> not contract it. The healthy pattern: direction sets the floor
> (no generic moves) and the ceiling (no off-direction moves),
> but the room in between stays large enough that the brief
> drives the actual outcome. If the brief barely matters because
> the direction has decided everything, the direction is too
> concrete. If the direction barely matters because the brief is
> doing all the work, the direction is too abstract."

Each direction has VARIATION axes (palette range, type pair set,
asymmetry pattern, motion timing, etc.) that the agent picks
from based on brief inputs:

- **Brand palette anchor** — if the lead's `brand.colors_extracted`
  has a strong primary, anchor the accent within the direction's
  range to it. Two electricians both in Industrial Precision
  shouldn't pick the same yellow; one matches their existing red,
  the other matches their existing green.
- **Identity-sentence emotional register** — calmer identity
  → lower chroma in the picked palette; energetic identity →
  higher chroma. Within the direction's range.
- **Sector specificity** — within Soft Warm Artisanal, a boucher
  picks deeper warm browns + burgundy accent; a fromager picks
  lighter creams + brass accent. Same direction, sector-specific
  variation.

Per-build determinism comes from the brief inputs driving the
variation pick, not from randomness. Two identical briefs would
produce similar (not identical) sites in the same direction;
two different briefs produce visibly different sites.

---

# Anti-prior anchors (apply regardless of direction)

Replit's literal strings (Rule 3 of `kua-brief.md`) apply on top
of every direction's specifics:

> Reject mediocrity. No safe choices.
> Derive palette from the product's domain, not from generic defaults.

If your output looks like a Wix template with the picked
direction's surface tweaks, you've under-applied the direction.
The directions exist precisely to refuse the median; if you
catch yourself producing a centered-hero with three-CTA-stack
in any direction, stop and re-pick a composition signature.

---

# What changed in this rewrite (Wave H6, 2026-04-29)

- Replaced 31 lines of "explore freely, no prescriptions" with a
  dispatcher that picks from 5 named directions
- Each direction lives in `agent-skills/directions/<name>.md`
  with HARD / SOFT / VARIATION / ANTI structure (per Replit's
  Q4 spec in round 3)
- Sector → direction routing pre-filtering documented (matches
  each sector entry's `direction_compatibility`)
- Variation discipline added (Replit's "directions can
  over-constrain" warning verbatim)
- Carte blanche output now matches named-skill output quality
  for the same sector — the user's choice between "tag a
  named skill" vs. "leave it carte blanche" is no longer a
  quality cliff, just a cross-project consistency decision

## Hard requirements (non-négociable)

- **WCAG AA contrast** (cf. discipline 5) — vérifie chaque paire couleur. Sur fond accent foncé, le texte est blanc ; sur fond accent clair, le texte est `#1B1B1B`. Pas de gris muted illisible.
- **Mobile responsive** — teste mentalement 375px, 768px, 1280px. Boutons à `min-h-12` (48px) — touch target. Hamburger menu < md.
- **Pas de `<img>` sans alt** — utilise les `alt` du manifest, ou enrichis-les si nécessaire.
- **Tous les `<img>` ont `loading`, `width`, `height`** — `loading="eager" fetchpriority="high"` pour le hero, `loading="lazy"` pour le reste. `width` + `height` attributes sur CHAQUE image (CLS=0 en Lighthouse).
- **Site marketing à la racine `/` du dev server** — quand l'utilisateur visite `http://localhost:<port>/`, il DOIT voir le site marketing complet (Hero, About, etc.). Si le template comporte des routes pré-existantes type `/__mockup/preview/<slug>/Page`, `/preview/...`, ou un router avec plusieurs vues — supprime-les ou rends-les inertes. Le site marketing N'EST PAS un sous-route. Vérification mécanique : ouvre `src/App.tsx` après ton wiring et confirme qu'il rend directement les sections (pas un `<Routes>` qui les expose à un sous-chemin).
- **Vertical rhythm généreux** — sections principales (Hero/About/Services/Gallery/Contact) avec `py-20` (80px) minimum. **Hero = `py-32` (128px) minimum**. Container max `1280px` (`max-w-7xl`), prose max `768px` (`max-w-3xl`). Le « cramé `py-12` » est un anti-pattern agency-level.
- **Semantic HTML** — `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<nav>` — pas `<div>` partout. Chaque section a un `<h2>` (un seul `<h1>` total, dans le Hero).
- **Skip link au top** : `<a href="#main" class="sr-only focus:not-sr-only">Aller au contenu</a>` (premier enfant de `<body>`).
- **Focus rings visibles** sur tous les liens / boutons / inputs. Pas de `outline: none` sans alternative custom (`focus-visible:ring-2 focus-visible:ring-primary`).
- **HARD constraints du skill RESPECTÉES** — voir la section `## Design skill` ci-dessus.
- **ANTI-PATTERNS du skill ÉVITÉS** — voir la section `## Design skill` ci-dessus.
- **Couleur EXCLUSIVEMENT depuis `lead.json.palette`** — JAMAIS d'OKLCH/hex/palette du skill. **Sauf** le blanc `#FFFFFF` et le noir profond `#1B1B1B`, qui sont les fallback universels pour le texte et les surfaces (cf. `## Source de vérité couleur — Fallback universel`).
- **Aucune directive `'use client'`** — on est en SPA Vite, pas Next.js. Tous les fichiers sont client-side par défaut.
- **Pas de `@ts-nocheck`** — corrige la vraie erreur (souvent : import manquant ou type incompatible avec React 18).

## Distribution des photos par section (production-grade)

La règle « toutes les photos `usable:true` apparaissent au moins une fois » est le **minimum**. Pour un site agency-grade, on vise une distribution généreuse — environ **10-15 placements `<img>` pour 10 photos** (chaque photo utilisée 1-2 fois). Cible par section :

- **Hero** : **1 photo background full-bleed** (la plus cinématique / large du manifest, `role: hero` ou la plus large `role: about`). Overlay gradient + headline POSE SUR LA PHOTO — pas sur un color block adjacent.
- **About** : **1-2 photos** en split layout (texte | photo, ou photo | texte). La 2e photo peut être plus petite, en accent visuel.
- **Services** / **Menu** : **3-6 photos** réparties dans les cartes services. Chaque carte service a SOIT une photo SOIT une icône — pas de cartes vides.
- **Gallery** : **4-6 photos** en grid asymétrique (1 large + 4 small, ou 2 large + 4 small). Pas un grid 3×3 uniforme — c'est mort.
- **Testimonials** : **1-2 photos** (portraits, photos de contexte). Si pas de portrait client, photo d'ambiance derrière la citation comme overlay sombre.
- **Contact** : **1 photo** (extérieur du commerce, équipe, ou un produit signature) — soft visual qui humanise la section.

**Asymétrie obligatoire** dans les grids : si une section a 4 photos en grid, **AU MOINS une** doit être `col-span-2` ou avoir un aspect-ratio différent (portrait vs landscape). Un grid 4× uniforme = stock-photo aesthetic, pas agency.

**Bleed edges** : au moins 2 sections du site ont une photo qui touche le bord du viewport (full-bleed). Le confinement strict à un container `max-w-7xl` partout = corporate fade.

**Captions courtes** (5-10 mots) sous les photos importantes dans About/Gallery. Pas obligatoire pour les photos décoratives.

### Captions Gallery — uniformité de la grille

Les captions sous les images dans une grille CSS auto-rows MISALIGNENT les rangées suivantes si leur hauteur varie (« 2 mots » vs « 5 mots qui wrap sur 2 lignes » = hauteurs différentes). Trois options acceptables, **choisis-en UNE et tiens-y** :

**Option A — Captions overlay** (préféré pour les grids denses) :
```jsx
<figure className="relative overflow-hidden group">
  <img className="w-full aspect-square object-cover" .../>
  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1B1B1B] to-transparent p-3 text-white font-mono text-[11px] uppercase tracking-wider">
    Caption ici
  </figcaption>
</figure>
```
Avantage : la hauteur du `<figure>` = hauteur de l'image, indépendamment du texte → grille parfaitement alignée.

**Option B — Captions hauteur fixe** :
```jsx
<figcaption className="mt-2 h-10 overflow-hidden text-ellipsis font-mono text-[11px] uppercase tracking-wider line-clamp-2">
  Caption ici
</figcaption>
```
La hauteur `h-10` (40px) accommode 2 lignes max ; `line-clamp-2` clip au-delà. Tous les figcaptions = même hauteur.

**Option C — Sans captions** : drop les `<figcaption>` complètement. Le `alt` reste sur les `<img>` pour a11y/SEO.

**Anti-pattern** : `<figcaption className="mt-2 ...">` sans contrainte de hauteur, avec captions de longueurs variables (« Aménagement extérieur » à côté de « Résidence complète · Gatineau ») → la grille devient bancale au-delà de la première rangée. C'est exactement le bug visuel que l'utilisateur signale.

## Photo composition agency-grade

- **Hero full-bleed avec overlay** : la photo couvre toute la viewport (`object-cover h-screen` ou `h-[80vh]`), un gradient overlay (linear, transparent → couleur palette à 60% opacity) assure la lisibilité du headline POSÉ SUR LA PHOTO. Headline en blanc, gros, weight 700-900. CTA primaire visible.
- **Asymétrie volontaire** : préfère `grid-cols-3 [.first-child]:col-span-2` au lieu de `grid-cols-3` uniforme. Une photo dominante + petites supportantes raconte mieux qu'une grille égale.
- **Bleed edges** : `w-screen ml-[calc(-50vw+50%)]` pour casser le confinement du container — la photo touche le viewport. Utiliser parcimonieusement (1-2× par site, sur les sections impactantes).
- **Photo + texte split** : section About classique = `grid grid-cols-1 md:grid-cols-2 gap-12 items-center`, photo d'un côté avec aspect-ratio 4:5 ou 3:4 (portrait), texte de l'autre avec eyebrow + h2 + body + CTA.
- **Captions discrètes** : `<figcaption class="mt-2 text-xs uppercase tracking-wider text-muted">` — 5-10 mots, info type lieu/date/contexte.

## Trust signals — calculer les nombres réels

Une PME québécoise depuis 1994 = **32 ans** en 2026. C'est un **fait concret** qui doit apparaître visuellement comme **stat dominante** :

```jsx
<div className="flex items-baseline gap-3">
  <span className="text-7xl font-bold text-primary">32</span>
  <span className="text-lg uppercase tracking-wider">années à servir Sorel-Tracy</span>
</div>
```

Règle :
- Si `lead.json.facebook_about` ou `voice_samples` mentionne une année de fondation (regex : `\bdepuis (19|20)\d{2}\b`), calcule `currentYear - foundedYear` et affiche cette stat dans **Hero OU About** comme élément de proof. Mets `currentYear = 2026` (ou lis `new Date().getFullYear()` dynamiquement dans le JSX).
- Si `lead.json` mentionne un horaire (« 7 jours sur 7 », « 24h/24 »), affiche-le comme stat secondaire dans le Hero ou comme info bar sticky en haut du Header.
- **Le Hero DOIT contenir au moins UN nombre concret** (années, clients servis, produits offerts, succursales) — pas que de la prose abstraite. Si `lead.json` est mince, fais des choix conservateurs (years_active si fondation connue ; sinon omet).

**Google Maps embed** — section dédiée, pas un mini-iframe squeezed

Quand `lead.json.address` ou `lead.json.zone` existe, livre la carte comme **section dominante**, jamais comme un petit carré coincé à côté du téléphone dans Contact. Deux placements acceptables :

**Placement A — Map section dédiée** (préféré pour PME locales) :
Ajoute une section `Map` (ou `Location`) ENTRE Contact et Footer (ou juste avant Footer). Full-bleed du viewport, `h-[400px]` à `h-[500px]` minimum. Au-dessus de l'iframe, un titre court (« Où nous trouver », « Notre atelier à {Ville} ») + l'adresse en clair.

```jsx
<section id="location" className="w-full">
  <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
    <h2 className="font-display text-4xl lg:text-5xl uppercase mb-4">Où nous trouver</h2>
    <p className="font-body text-lg">{address} · {zone}</p>
  </div>
  <iframe
    src={`https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`}
    className="w-full h-[450px] border-0"
    loading="lazy"
    title={`Localisation de ${companyName} à ${ville}`}
  />
</section>
```

**Placement B — Contact section AVEC map dominante** (acceptable si tu veux garder Contact compact) :
Dans Contact, sépare en 2 rangées plutôt qu'en 2 colonnes : rangée 1 = form + infos, rangée 2 = map sur toute la largeur, `h-[400px]+`. Pas de map dans la colonne secondaire d'un split layout — la map a besoin d'espace pour être utile.

**Anti-pattern** : iframe `width="100%" height="220"` dans la 2e colonne de Contact, à côté d'une photo et de 2 lignes d'infos contact. La carte est illisible à cette taille — c'est purement décoratif. Mieux vaut ne pas la mettre du tout.

## CTA agency-grade — pas de boutons mous

Les CTAs (Call-to-Action) sont le pivot conversion du site. Un bouton mou (couleur fade, padding chiche, hover absent, typo générique) tue la perception agency. Règles fermes :

**Primary CTA** (un par section, max 2 sur le hero) :
- Background = `accent_on_dark` sur sections foncées, ou `#1B1B1B` / `accent_on_light` sur sections claires. **JAMAIS un accent fade comme `#cfcfcf` ou un gris muté** — le CTA primary doit avoir le contraste le plus fort de la section.
- Texte en `font-display` ou `font-body font-bold`, uppercase tracking-widest, sans-serif
- Padding minimum : `px-8 py-4` (32×16px). `min-h-12` (48px) pour touch target
- Hover state explicite : couleur de fond change (souvent inversion : `hover:bg-white hover:text-[#1B1B1B]`)
- Icône optionnelle après le texte (`ArrowRight`, `Phone`, `Send` — pas avant)
- Aucun border-radius par défaut pour le registre brutalist ; `rounded-full` si registre boutique/soft ; tout entre = corporate fade

**Secondary CTA** (« Voir nos réalisations » sous le primary hero) :
- Outlined : `border-2` + couleur du fond. Pas un background fade, pas un texte muet.
- Même padding + min-h que primary
- Hover : fill au survol (`hover:bg-white/10` ou similaire)

**Anti-patterns CTA à bannir** :
- Bouton avec `bg-{couleur-muted}` (#cfcfcf, #737373, #424242) sur un fond proche — pas de différenciation visuelle
- Bouton `text-xs` (12px) — touch target trop petit, lit comme une note de bas de page
- Texte CTA en minuscules (« en savoir plus ») — manque d'autorité éditoriale ; agency-grade = UPPERCASE
- Pas de hover state — le site se sent figé
- Padding `px-3 py-1` — chiche, ressemble à un lien stylé pas un bouton

## Palette monochrome — fallback bold accent

Quand `lead.json.palette.dominant` est tout gris (le FB extract a yielded `#cfcfcf / #7f7f7f / #424242` parce que la profile pic FB était grayscale), la pipeline ne peut PAS te fournir un accent chromatique. Tu as deux options pour compenser :

**Option A — Embrasse le monochrome** : titre + body en noir/blanc/gris, photos en COULEUR comme contraste visuel. Le typography (Bebas Neue all-caps géant) porte le poids du design. Editorial-brutalist marche bien en monochrome.

**Option B — Introduis UN accent chromatique** justifié dans `decisions.md` : choisis UNE couleur sémantique du secteur (rouge industriel `#C53030` pour construction/garage, vert sage `#4A7C59` pour artisanal/bio, bleu marine `#1E3A8A` pour services pro). Documente dans decisions.md sous `## Palette pick — accent ajouté` pourquoi tu l'as introduite et pointe la source (secteur sémantique, vibe de `lead.json.facebook_about`).

**Toujours interdit** : inventer une palette « créative » sans justification (5 couleurs random « parce que ça rend mieux »). Et : si tu introduis un accent chromatique, **utilise-le parcimonieusement** (≤ 5 occurrences sur tout le site — CTA primaries, eyebrows clés, soulignements sémantiques) — pas en wallpaper.

## SEO minimum — édite `index.html`

Le `<head>` de `index.html` est livré par la template avec des valeurs placeholder. **AVANT de commit, édite-le** avec les vraies données de `lead.json` :

- `<title>{companyName} — {industrie} à {ville}</title>` (max 60 chars)
- `<meta name="description" content="...">` — 1-2 phrases, max 160 chars, dérivé de `lead.json.facebook_about` ou de la phrase d'identité de `decisions.md`. **Pas le placeholder template**.
- `<meta property="og:title">` + `<meta property="og:description">` + `<meta property="og:image" content="/images/og.jpg">` (utilise une photo Hero ou About comme og:image — copie dans `public/images/og.jpg`).
- `<link rel="canonical" href="https://{slug}.vercel.app/">` (laisse vide ou commenté si l'URL prod n'est pas connue — le harness met à jour post-deploy).
- JSON-LD `LocalBusiness` schema dans `<head>` :
  ```html
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "{companyName}",
    "address": { "@type": "PostalAddress", "addressLocality": "{ville}", "addressRegion": "QC", "addressCountry": "CA" },
    "telephone": "{phone}",
    "url": "{deployUrl}"
  }
  </script>
  ```

## Mobile excellence

- **Header sticky** : `position: sticky; top: 0` avec un fond opaque (pas transparent qui « disparaît »).
- **Hamburger menu** : pour `< md`, transforme la nav du Header en hamburger avec un menu drawer. Buttons d'au moins 48px de hauteur.
- **CTA téléphone-cliquable** : si `lead.json.phone` est présent, le numéro DOIT être un `<a href="tel:+1XXXXXXXXXX">` (clic = compose) dans le Header ET Contact. Sur mobile, idéalement un bouton phone en haut sticky.
- **Single column < md** : grids 2-col et 3-col passent à `grid-cols-1` ou empilement vertical. Photos full-width avec height auto.

## Voice

- Utilise `_inputs/voice-samples.md` comme référence de ton (n'imite pas verbatim — adapte par section).
- Langue : **français canadien (fr-CA)** par défaut. Si `lead.json.industry` ou `description` suggère un public anglophone, bascule en anglais.

## Final commit + push

```bash
git add .
git commit -m "Initial build for Multi-Choix Entrepôts via Replit Agent"
git push origin main
```

Si le build échoue, documente l'erreur dans le commit message et pousse quand même — le harness côté Küa pollera ce commit pour reprendre.

### STEP 5 (après push success) — `.kua-done` sentinel

**Le sentinel `.kua-done` est le signal autoritatif « build complet + vérifiable » que le harness Küa attend. Sans lui, le harness considère que le build a échoué même si le SHA git a changé.**

Après le `git push origin main` réussi, écris `~/kua-build/.kua-done` comme JSON, puis commit + push ce fichier dans un follow-up commit :

```bash
# 1. Récupère les valeurs concrètes
COMMIT_SHA=$(git rev-parse HEAD)
REMOTE_URL=$(git remote get-url origin | sed -E "s#https://[^@]+@#https://#")  # strip PAT-in-URL
BUILT_AT=$(date -u +"%Y-%m-%dT%H:%M:%SZ")

# 2. Écris le sentinel — paste les vraies valeurs (sections livrées,
#    RUN_HASH du dernier check.sh, warnings éventuels).
cat > .kua-done <<EOF
{
  "schema": 1,
  "commitSha": "$COMMIT_SHA",
  "branch": "main",
  "remoteUrl": "$REMOTE_URL",
  "builtAt": "$BUILT_AT",
  "sections": ["Header", "Hero", "About", "..."],
  "checkPassed": true,
  "checkRunHash": "<RUN_HASH copié depuis l'output de _inputs/check.sh>",
  "warnings": ["<liste des soft warns ; tableau vide si aucun>"]
}
EOF

# 3. Commit + push le sentinel — réutilise le même PAT-in-URL que
#    pour le push précédent (voir step 4 auth).
git add .kua-done
git commit -m "Add build sentinel (.kua-done)"
git push origin main
```

Détails à respecter :
- **`commitSha`** = le SHA du commit qui contient le code du site (PAS le commit qui ajoute le sentinel).
- **`sections`** = la liste exacte des `<Component>.tsx` écrits dans `src/components/sections/` (ordre = ordre de wiring dans `App.tsx`).
- **`checkPassed`** = `true` si `bash _inputs/check.sh` exit 0 (mêmes avec warnings non-bloquants), `false` si HARD GATE FAILED.
- **`checkRunHash`** = le `RUN_HASH` affiché à la fin de l'output de `check.sh`. C'est ce hash qui bind le build à un état git concret — le harness Küa le recompute post-pull pour valider.
- **`warnings`** = tableau JSON des soft warns (lignes `WARN —` ou messages explicites du check). Tableau vide `[]` si aucun.
- **`remoteUrl`** = URL HTTPS publique du repo GitHub SANS le PAT (utilise le `sed` ci-dessus pour le stripper si nécessaire).

Puis appelle `./_inputs/progress.sh done all done` pour signaler la fin du build au harness Küa.
