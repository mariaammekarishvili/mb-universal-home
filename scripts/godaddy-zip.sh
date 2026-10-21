#!/bin/sh
# Packages the app source for GoDaddy Node.js Hosting. The platform runs
# `npm install`, `npm run build` and `npm start` itself, so the zip holds the
# files git tracks (no node_modules, no dist) with package.json at the root.
set -e

cd "$(dirname "$0")/.."

OUT="$PWD/mb-universal-home-godaddy.zip"
rm -f "$OUT"

git ls-files --cached --others --exclude-standard \
  | while IFS= read -r file; do [ -f "$file" ] && printf '%s\n' "$file"; done \
  | zip -qX "$OUT" -@

echo "Created $OUT ($(du -h "$OUT" | cut -f1))"
