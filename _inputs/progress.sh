#!/usr/bin/env bash
# Usage: ./_inputs/progress.sh <phase> <target> <action>
# Phases: decisions | theme | section-design | section-tsx | integration | check | done
# Actions: start | done | skip | error
#
# Appends a JSONL line to ~/kua-build/.kua-progress.jsonl so the harness
# Küa (or any tail-on-SSH consumer) can stream build progress in real
# time. Call between each section's start and done.

phase="${1:-unknown}"
target="${2:-}"
action="${3:-event}"
ts=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
mkdir -p "$HOME/kua-build" 2>/dev/null || true
printf '{"ts":"%s","phase":"%s","target":"%s","action":"%s"}\n' \
  "$ts" "$phase" "$target" "$action" \
  >> "$HOME/kua-build/.kua-progress.jsonl"
