---
name: CURLYCODER-gain
description: "Show CURLYCODER measured impact as a scoreboard: less code, less cost, more speed, from the benchmark medians. One-shot display."
homepage: https://github.com/bhardwj-sarvesh-projects/CODELEAN
license: MIT
---

# CURLYCODER Gain

Display this scoreboard when invoked. One-shot: do NOT change mode, write flag
files, or persist anything.

The figures are the published benchmark medians (5 everyday tasks: email
validator, debounce, CSV sum, countdown timer, rate limiter; three models:
Haiku, Sonnet, Opus). They are measured, not computed from the current repo.
Source: `benchmarks/` and the README.

## Scoreboard

Render plain ASCII bars. The bar length shows the measured range; the label
carries the exact figure:

```
  CURLYCODER gain                     benchmark median · 5 tasks · 3 models

  Lines of code   no-skill  ████████████████████  100%
                  CURLYCODER  ██▌·················    6–20%   ▼ 80–94%
  Cost            no-skill  ████████████████████  100%
                  CURLYCODER  █████▌··············   23–53%  ▼ 47–77%
  Speed           CURLYCODER  ▸ 3–6× faster

  This repo:  /CURLYCODER-debt  (shortcuts you deferred)
              /CURLYCODER-audit (what's still cuttable)
```

## Honesty boundary

These are benchmark medians, not this repo. NEVER print a per-repo savings
number ("you saved X lines/tokens here"): the unbuilt version was never
written, so there is no real baseline to subtract from in a live repo. The
only real per-repo figures come from `/CURLYCODER-debt` (a counted ledger), and
this card points there instead of inventing one.

## Boundaries

One-shot display. Edits nothing, changes no mode.
"stop CURLYCODER" or "normal mode": revert.
