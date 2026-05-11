#!/usr/bin/env bash
# Verification gates — run AFTER all sections are written, BEFORE
# the final commit. Paste the output into `decisions.md` under
# `## Final check` so the harness Küa can audit downstream.
#
# Usage:  bash _inputs/check.sh
# Exits non-zero on the first hard-fail; warnings keep going.

set -uo pipefail
fail=0
warn=0
section() { echo ""; echo "════════════════════════════════════════"; echo "## $1"; echo "════════════════════════════════════════"; }

section "1. Typecheck (tsc --noEmit) — HARD GATE"
if npx --yes tsc --noEmit 2>&1 | tail -30; then
  echo "PASS"
else
  echo "FAIL — fix the type errors above before pushing."
  fail=1
fi

section "2. Sections présentes (≥30 lignes chacune) — HARD GATE"
shopt -s nullglob
short=()
for f in src/components/sections/*.tsx; do
  lines=$(wc -l <"$f")
  if [ "$lines" -lt 30 ]; then
    short+=("$f ($lines lignes)")
  fi
done
if [ ${#short[@]} -eq 0 ]; then
  echo "PASS — toutes les sections ≥ 30 lignes"
else
  echo "FAIL — sections trop courtes (squelettes vides) :"
  printf "  - %s\n" "${short[@]}"
  fail=1
fi

section "3. Pas de @ts-nocheck — HARD GATE"
if grep -rn "@ts-nocheck" src/ 2>/dev/null; then
  echo "FAIL — supprime ces directives et fix la vraie erreur."
  fail=1
else
  echo "PASS"
fi

section "4. Photos wirées (si manifest.total > 0) — HARD GATE"
total=$(node -e 'try { console.log(JSON.parse(require("fs").readFileSync("_inputs/photos/manifest.json", "utf8")).total || 0) } catch { console.log(0) }')
if [ "$total" -gt 0 ]; then
  count=$(grep -roh 'src="/images/[^"]*"' src/ 2>/dev/null | sort -u | wc -l)
  if [ "$count" -ge "$total" ]; then
    echo "PASS — $count <img src=/images/...> uniques pour $total photo(s) attendue(s)"
  else
    echo "FAIL — $count <img src=/images/...> trouvé(s) pour $total photo(s) attendue(s). Chaque photo usable:true du manifest doit apparaître au moins une fois."
    fail=1
  fi
else
  echo "SKIP — manifest.total = 0 (aucune photo à wirer)"
fi

section "5. Logo référencé dans le navbar (si logo existe) — HARD GATE"
logo_present=0
for f in _inputs/photos/logo-clean.* _inputs/photos/logo-raw.*; do
  [ -e "$f" ] && logo_present=1 && break
done
if [ "$logo_present" -eq 1 ]; then
  # Recherche permissive : le logo doit apparaître QUELQUE PART dans
  # src/ — peu importe la convention du composant (Header dans
  # `sections/`, dans `components/`, ou intégré au Hero). Ce qui
  # compte est qu'au moins un <img src="/images/logo*"> existe
  # dans le code source. Si tu lis ce fail et que le logo EST
  # utilisé en CSS background-image plutôt qu'en <img>, c'est
  # accepté tant que le grep ci-dessous match au moins une fois.
  if grep -rq 'src="/images/logo\|background-image:.*url(.*/images/logo' src/ 2>/dev/null; then
    echo "PASS — logo référencé dans src/ ($(grep -roh '/images/logo[^"\)]*' src/ | sort -u | wc -l) référence(s) unique(s))"
  else
    echo "FAIL — un logo existe dans _inputs/photos/ mais aucun composant ne le référence. Ajoute <img src=\"/images/logo/<filename>\"> dans le Header (ou Footer/Hero selon la composition), ou ajoute un item [high] dans follow-ups.md justifiant un wordmark texte."
    fail=1
  fi
else
  echo "SKIP — pas de logo dans _inputs/photos/ (wordmark texte attendu)"
fi

section "6. Pas de placeholders / phrases interdites — HARD GATE"
if grep -rEn "Lorem ipsum|TODO\b|XXX\b|\{\{[a-zA-Z]" src/ 2>/dev/null; then
  echo "FAIL — supprime les placeholders et finalise la copy."
  fail=1
else
  echo "PASS"
fi

section "7. Pas de noms / citations de clients fictifs — SOFT WARN"
# Anti-fabrication : si lead.json ne mentionne pas de témoignages
# réels, le pattern « Marie L. », « Pierre B. », « Jean-François T. »
# (initiales abrégées, format générique) est probablement inventé.
# La règle est dans INSTRUCTIONS.md (placeholder honnête + follow-up).
# On warn (non-bloquant) parce que de vrais reviews peuvent matcher
# le pattern (« Jean R. » est aussi un nom légitime); l'agent doit
# vérifier manuellement que les noms tracent à lead.json.reviews.
fakes=$(grep -rEh "[A-Z][a-zé]+ [A-Z]\." src/components/sections/Testimonials*.tsx src/components/sections/testimonials*.tsx 2>/dev/null | head -10)
if [ -n "$fakes" ]; then
  echo "WARN — des noms format « Prénom L. » détectés dans Testimonials :"
  echo "$fakes" | sed "s/^/  /"
  echo ""
  echo "Vérifie que CHAQUE nom trace à lead.json.reviews ou voice_samples."
  echo "Si l'un est inventé, remplace par un placeholder honnête (« Témoignages"
  echo "à venir ») et ajoute [high] dans follow-ups.md."
  warn=$((warn + 1))
fi

section "8. Distribution photos — cible 10-15 placements pour 10 photos — SOFT WARN"
# Cible agency-grade : ~1.5× le nombre de photos. Si tu as 10 photos
# au manifest, on attend 10-15 placements <img src=/images/...>.
# Bas = warning, pas fail (l'agent peut justifier moins si
# certaines photos sont redondantes ou bas-grade).
if [ "$total" -gt 0 ]; then
  placements=$(grep -roE '<img[^>]*src="/images/[^"]*"' src/ 2>/dev/null | wc -l)
  ratio_target=$((total * 3 / 2))
  if [ "$placements" -lt "$total" ]; then
    echo "FAIL — $placements <img src=/images/...> trouvés pour $total photo(s) (chaque photo doit apparaître au moins une fois — déjà gate 4)."
    fail=1
  elif [ "$placements" -lt "$ratio_target" ]; then
    echo "WARN — $placements placements pour $total photos (cible agency-grade : $ratio_target+). Ajoute des réutilisations dans About, Services, Testimonials. Une seule occurrence par photo = site MVP, pas production-grade."
    warn=$((warn + 1))
  else
    echo "PASS — $placements placements pour $total photo(s) — distribution agency-grade"
  fi
else
  echo "SKIP — manifest.total = 0"
fi

section "9. <img> ont loading + width + height — SOFT WARN"
# CLS=0 dans Lighthouse demande width/height sur tous les <img>.
# loading="lazy" sur tout sauf le Hero (eager pour fetchpriority).
imgs=$(grep -roE '<img[^>]*' src/ 2>/dev/null | wc -l)
imgs_with_loading=$(grep -roE '<img[^>]*loading=' src/ 2>/dev/null | wc -l)
imgs_with_width=$(grep -roE '<img[^>]*\<width=' src/ 2>/dev/null | wc -l)
imgs_with_height=$(grep -roE '<img[^>]*\<height=' src/ 2>/dev/null | wc -l)
if [ "$imgs" -gt 0 ]; then
  if [ "$imgs_with_loading" -lt "$imgs" ] || [ "$imgs_with_width" -lt "$imgs" ] || [ "$imgs_with_height" -lt "$imgs" ]; then
    echo "WARN — $imgs <img>, $imgs_with_loading avec loading=, $imgs_with_width avec width=, $imgs_with_height avec height=. Cible : tous = $imgs. Manque-y des attributs pour passer Lighthouse CLS=0 + perf."
    warn=$((warn + 1))
  else
    echo "PASS — toutes les $imgs <img> ont loading + width + height"
  fi
else
  echo "SKIP — aucune <img> trouvée"
fi

section "10. index.html SEO (title + meta description) édité — HARD GATE"
# Le template ship un <title> et un <meta description> placeholder.
# Vérification : les valeurs ne contiennent plus "Vite", "React", ou
# "kua-demo" — l'agent les a remplacées par les vraies données.
if [ -f index.html ]; then
  bad_title=$(grep -oE "<title>[^<]+</title>" index.html | grep -ciE "Vite|React.+\+\sTS|kua-demo" || true)
  bad_meta=$(grep -oE '<meta[^>]+name="description"[^>]+content="[^"]+"' index.html | grep -ciE "Vite|React.+\+\sTS|kua-demo|placeholder" || true)
  if [ "$bad_title" -gt 0 ] || [ "$bad_meta" -gt 0 ]; then
    echo "FAIL — index.html garde des valeurs placeholder template (Vite / React / kua-demo) dans <title> ou <meta description>. Édite-les avec les vraies données de lead.json (companyName, sector, ville)."
    fail=1
  else
    echo "PASS — index.html <title> + <meta description> édités"
  fi
else
  echo "WARN — index.html introuvable à la racine (structure projet inattendue ?)"
  warn=$((warn + 1))
fi

section "11. Skip link + sticky Header — SOFT WARN"
if grep -rq 'sr-only.*focus:not-sr-only\|class="sr-only focus:not-sr-only"' src/ 2>/dev/null; then
  echo "PASS — skip link a11y présent"
else
  echo "WARN — skip link manquant. Ajoute <a href=\"#main\" class=\"sr-only focus:not-sr-only\"> en tête de <body> (ou de App.tsx) pour passer l'audit a11y."
  warn=$((warn + 1))
fi
if grep -rq 'sticky[ \t]*top-0\|position:[ \t]*sticky' src/components/sections/Header.tsx 2>/dev/null; then
  echo "PASS — Header sticky"
else
  echo "WARN — Header ne semble pas sticky (class sticky top-0 ou position: sticky absent). Le navbar devrait rester visible au scroll."
  warn=$((warn + 1))
fi

section "12. Vite build (best-effort) — SOFT WARNING"
if npm run build --silent 2>&1 | tail -5; then
  echo "PASS"
else
  echo "WARN — Vite build a échoué (souvent SIGBUS dans le sandbox Replit). Non-bloquant si tsc passe."
  warn=$((warn + 1))
fi

# Capture the check output to disk for the agent to commit (and so the
# RUN_HASH can be recomputed on the harness side post-pull).
# (NOTE: the agent runs this script; the redirection happens here so
# this hash binds to "the checks output I just produced".)
# Use 'tee' so the script also keeps writing to stdout for human view.
# But we need a stable file — write a deterministic summary into
# _inputs/.last-check.txt. We do this with a marker block.

mkdir -p _inputs 2>/dev/null || true
{
  echo "=== Küa check.sh RUN_HASH source — $(date -u +%FT%TZ) ==="
  echo "fail=$fail warn=$warn"
} > _inputs/.last-check.txt

gitRev=$(git rev-parse HEAD 2>/dev/null || echo "no-git")
runHash=$( { cat _inputs/.last-check.txt; echo "$gitRev"; } | shasum | cut -d' ' -f1)

echo ""
echo "════════════════════════════════════════"
echo "RUN_HASH: $runHash"
echo "GIT_REV : $gitRev"
echo "════════════════════════════════════════"
echo "(Paste these two lines into decisions.md sous ## Final check, et reporte runHash dans le sentinel .kua-done sous \"checkRunHash\".)"
echo ""

if [ "$fail" -eq 0 ]; then
  if [ "$warn" -gt 0 ]; then
    echo "🟡 GATES PASS avec $warn warning(s) — relis les WARN ci-dessus avant push."
  else
    echo "🟢 ALL GATES PASS — safe to commit + push"
  fi
else
  echo "🔴 GATES FAILED — fix avant de pousser (sections marquées FAIL)."
  exit 1
fi
