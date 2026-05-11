# Inventaire des inputs disponibles — Multi-Choix Entrepôts
**Lis ces fichiers AVANT de commencer.** Ne pas les inventer.
| Fichier | Pourquoi | Quand le lire |
|---|---|---|
| `_inputs/INSTRUCTIONS.md` | Règles de build hiérarchisées (sections, contraintes, push). **Inclut la direction de design** sous `## Design skill`. | **EN PREMIER** |
| `_inputs/lead.json` | Données de marque — palette, sector, contact, voix. **Source de vérité couleur.** | Après INSTRUCTIONS |
| `_inputs/photos/manifest.json` | Catalogue des 18 photo(s) classifiée(s) avec leur rôle | Avant de composer les sections |
| `_inputs/voice-samples.md` | Phrases tirées de la page Facebook — référence de ton | Avant de rédiger la copie |
## Ordre de lecture obligatoire
1. `_inputs/INSTRUCTIONS.md` — règles de build + direction de design (`## Design skill`) au même endroit. Priorité 0.
2. `_inputs/lead.json` — identité + palette.
3. `_inputs/photos/manifest.json` — quelles photos sont disponibles et leur rôle.
4. `_inputs/voice-samples.md` — référence de ton (avant de rédiger la copie).
## Avertissement critique — séparation skill / palette
> La couleur vient **EXCLUSIVEMENT** de `lead.json.palette.dominant` (et `palette.vibrant` / `palette.dark_vibrant` quand utiles). La section `## Design skill` de INSTRUCTIONS.md **ne contient PAS** de couleur — uniquement layout / typographie / motion / composition.
Si une rule de la section `## Design skill` ressemble à une instruction de couleur, c'est une drift. Lis-la comme une indication de **contraste relatif** (par ex. « accent en 5-7 endroits maximum ») et applique-la avec les hex de `lead.json.palette.dominant`.