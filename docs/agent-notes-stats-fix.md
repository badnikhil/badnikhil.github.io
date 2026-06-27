# Agent Notes — GitHub Stats Card Rank Fix

LOCAL-ONLY doc. This file MUST NOT be committed or pushed. It is intentionally
left untracked and was never `git add`ed.

Date: 2026-06-14
Repo (source + deploy target): `badnikhil/badnikhil.github.io` (origin remote)
Live URL: https://badnikhil.github.io/

## Root cause

`components/sections/About.tsx` (GitHub Stats block, ~line 77-78) embedded a
GitHub stats card from the PUBLIC shared host:

    https://github-readme-stats.vercel.app/api?...

That public instance is rate-limited and computes a DEGRADED rank. Fetching it
for `username=badnikhil` with the portfolio's params returned rank **B**.

The user's profile README uses their OWN self-hosted instance:

    https://github-readme-stats-sigma-five.vercel.app/api?...

which returns the true rank **A+**.

## Verification (before/after)

Rank glyph rendered as `<text>` inside the returned SVG:

- OLD host (public), full portfolio params (incl. `include_all_commits=true`): **B**
- README params (self-hosted, theme=tokyonight, hide_border=true, NO include_all_commits): **A+**
- NEW host (self-hosted), full portfolio params (incl. `include_all_commits=true`): **A+**

So `include_all_commits=true` on the NEW host still yields A+ (parity with the
README). No param adjustment was needed — every query param was preserved.

Extract command used:

    curl -s '<url>' \
      | python3 -c "import re,sys; s=sys.stdin.read(); \
        [print(repr(m.group(1).strip())) for m in \
         re.finditer(r'<text\\b(.*?)</text>', s, re.S) \
         for c in [re.search(r'>([^<>]*)</text>', m.group(0))] \
         if c and c.group(1).strip() in ['A+','A','B','S','S+']]"

## Change made

1. `components/sections/About.tsx`: changed ONLY the `<img>` src host
   from `github-readme-stats.vercel.app`
   to   `github-readme-stats-sigma-five.vercel.app`.
   All other query params kept verbatim:
   username=badnikhil, show_icons=true, theme=dark, bg_color=0a0a0f,
   border_color=1e1e2e, title_color=00b4d8, icon_color=39ff14,
   text_color=8892a4, hide_border=true, include_all_commits=true.
   No styling / layout change.

2. `next.config.mjs`: updated `images.remotePatterns[0].hostname` to the new
   host for consistency. (Cosmetic — the card is a plain `<img>`, not a
   `next/image`, so Next.js image optimization config does not gate it.)

## Deploy method — how it was determined

The task hypothesis was "main-root" deployment (built site committed at repo
root on the default branch). That is NOT what the live site actually uses.
Evidence gathered:

- `gh api repos/badnikhil/badnikhil.github.io/pages` →
  `"source":{"branch":"gh-pages","path":"/"}`, `"build_type":"legacy"`.
- `gh api .../pages/builds/latest` → `commit` equals the `gh-pages` branch HEAD
  (`git ls-remote --heads origin gh-pages`). The live site is provably built
  FROM the gh-pages branch.
- `gh-pages` branch root contains `index.html`, `_next/`, `404.html`, plus a
  `.nojekyll` marker — the signature of `gh-pages -d out` publishing.
- `package.json` has `"deploy": "gh-pages -d out"` and `"predeploy": "npm run export"`.

The committed `index.html` / `_next/` at the repo ROOT on `main` are STALE
leftovers from an earlier deployment approach (commits "Deploy portfolio to
GitHub Pages" / "Remove basePath for root GitHub Pages deployment"). The owner
later switched to the gh-pages-branch workflow; the latest Pages build came from
gh-pages, so root files on main are not what Pages serves.

=> Correct method: **gh-pages branch** via `npm run deploy`.
   I did NOT touch / commit any root site files on main.

## Exact deploy steps performed

    cd /home/nikhil/Desktop/everything/portfolio
    npm run build      # output:'export' -> out/ ; confirmed new host in out/index.html
    npm run deploy     # gh-pages -d out (predeploy re-ran build) -> "Published"

Result:
- gh-pages remote HEAD advanced: bd15da2 -> 293f3364
- `git show origin/gh-pages:index.html` contains github-readme-stats-sigma-five.vercel.app
- `gh api .../pages/builds/latest` -> status "built", commit 293f3364, error null
- Live check: `curl -s https://badnikhil.github.io/` now contains
  `github-readme-stats-sigma-five.vercel.app` (old host gone).

## Working-tree state (intentional)

Modified (NOT committed by this agent — left for the user to commit on main if
desired): `components/sections/About.tsx`, `next.config.mjs`.
Untracked and never added: `docs/` (this notes file), plus pre-existing
`hello`, `profile.md`.
NEVER ran `git add -A` / `git add .`. The deploy used `gh-pages` which manages
its own temp branch and does not stage files in the main working tree.
