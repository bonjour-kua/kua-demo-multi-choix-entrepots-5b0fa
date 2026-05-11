# decisions.md — Multi-Choix Entrepôts

## Identité

**Phrase d'identité** : Multi-Choix Entrepôts, c'est l'entrepôt de quartier à Québec qui dit la vérité : propre, chauffé, barré, disponible à 3h du matin — sans surprises ni jargon immobilier.

**Vibe** : Direct et solide. Comme une porte d'entrepôt bien huilée — ça s'ouvre quand tu as besoin, ça se barre quand tu pars. Pas de flou, pas de fioritures.

**Charge émotionnelle** : Le client cible a un problème concret — il n'a nulle part où mettre ses affaires, son quad, ses pneus d'hiver. Il veut qu'on lui parle franchement des formats et du prix, pas qu'on lui vende un « style de vie ».

---
## 2026-05-11 00:00 · palette pick

**Décision** : Palette navy #14356b (primary) + gold #e4ce4f (accent). Black #1B1B1B pour body text sur fonds clairs.
**Pourquoi** : lead.json.palette.dominant = ["#e4ce4f","#14356b"] — palette chromatique forte, pas de dérive grise.
**Trade-off accepté** : Le gold en masse peut paraître agressif — on le limite aux CTA, eyebrows et accents (≤7 occurrences par page).

---
## 2026-05-11 00:00 · ordre des sections

**Décision** : Header → Hero → About → Services → Gallery → Faq → Contact → Footer (Testimonials omis car aucune donnée réelle).
**Pourquoi** : lead.json ne contient pas de témoignages clients — mieux vaut livrer une section FAQ solide que des témoignages inventés.
**Trade-off accepté** : Manque d'un proof social tier — Faq compense partiellement avec les questions réelles d'un locataire potentiel.

---
## 2026-05-11 00:00 · trust signal

**Décision** : Stat principale = "24h / 7" (accès continu). Stat secondaire = "3 formats" (8×10 / 10×10 / 10×20).
**Pourquoi** : lead.json ne mentionne pas d'année de fondation — pas de calcul years_active possible. french_phrases[0] = "accessibles 24h sur 24, 7 jours sur 7" est le differentiator le plus fort.
**Trade-off accepté** : Pas de stat d'ancienneté — la rareté du 24/7 compense.

---
## 2026-05-11 00:00 · Testimonials

**Décision** : Section Testimonials retirée de l'ordre de build (aucune donnée réelle dans lead.json).
**Pourquoi** : Aucun avis client dans les voice-samples, pas de données de rating dans lead.json. Livrer des témoignages inventés = bug éthique + anti-générique rule violation.
**Trade-off accepté** : Section manquante — ajouté en [high] dans follow-ups.md.

---
## Photos utilisées

- fb-photo-6.jpg → Hero (rôle manifest: hero — façade extérieure, enseigne visible)
- fb-photo-48.jpg → Hero plein-écran (rôle manifest: hero — vue large bâtiment, ciel bleu, bannière principale)
- fb-photo-27.jpg → About (rôle manifest: hero — façade secondaire, cadrage soigné)
- fb-photo-5.jpg → About (rôle manifest: location — intérieur avec motoneiges, prouve la capacité)
- fb-photo-8.jpg → Services (rôle manifest: location — pneus/équipement, illustre le stockage saisonnier)
- fb-photo-15.jpg → Services (rôle manifest: location — façade/enseigne, identité visuelle)
- fb-photo-21.jpg → Gallery (rôle manifest: location → galerie overflow)
- fb-photo-23.jpg → Gallery (rôle manifest: location → galerie overflow)
- fb-photo-28.jpg → Gallery (rôle manifest: gallery — unité ouverte motoneiges)
- fb-photo-33.jpg → Gallery (rôle manifest: gallery — unité vide propre éclairée)
- fb-photo-34.jpg → Gallery (rôle manifest: gallery — unité 10×10 voiturette golf)
- fb-photo-37.jpg → Gallery (rôle manifest: gallery — VUS rouge, format auto)
- fb-photo-42.jpg → Gallery (rôle manifest: gallery — pneus équipement)
- fb-photo-44.jpg → Gallery (rôle manifest: gallery — unité vue extérieure)
- fb-photo-45.jpg → Gallery (rôle manifest: gallery — unité 8×10 kart de golf)
- fb-photo-46.jpg → Contact (rôle manifest: location — façade avec voiture stockée, contexte local)
- fb-photo-47.jpg → Gallery (rôle manifest: gallery — VTT équipement remorquable)
- fb-photo-49.jpg → Gallery (rôle manifest: gallery — unité vide disponible)

---
## Final check

RUN_HASH: 9b54c6495a9031d289442efff9c7a71ec8c795b8
GIT_REV : 4959cba3514ebc7cd6cf7681d31acf9541d77836

All 6 HARD GATES: PASS
Soft warns: Gate 7 (false positive — no Testimonials file exists), Gate 8 (20/27+ placements — MVP level, adequate for first build)
