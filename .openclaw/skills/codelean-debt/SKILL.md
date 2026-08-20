---
name: CODELEAN-debt
description: "Harvest every CODELEAN: shortcut comment into one debt ledger, so deferrals get tracked instead of forgotten. One-shot report."
homepage: https://github.com/bhardwj-sarvesh-projects/CODELEAN
license: MIT
---

Every deliberate CODELEAN shortcut is marked with a `CODELEAN:` comment naming
its ceiling and upgrade path. This collects them into one ledger so a deferral
can't quietly become permanent.

## Scan

Grep the repo for comment markers, skipping `node_modules`, `.git`, and build
output:

`grep -rnE '(#|//) ?CODELEAN:' .`  (add other comment prefixes if your stack uses them)

Each hit is one ledger row. The comment prefix keeps prose that merely mentions
the convention out of the ledger.

## Output

One row per marker, grouped by file:

`<file>:<line>, <what was simplified>. ceiling: <the limit named>. upgrade: <the trigger to revisit>.`

The convention is `CODELEAN: <ceiling>, <upgrade path>`, so pull the ceiling
and the trigger straight from the comment. Want an owner per row too? add
`git blame -L<line>,<line>`.

Flag the rot risk: any `CODELEAN:` comment that names no upgrade path or
trigger gets a `no-trigger` tag, those are the ones that silently rot.

End with `<N> markers, <M> with no trigger.` Nothing found: `No CODELEAN: debt. Clean ledger.`

## Boundaries

Reads and reports only, changes nothing. To persist it, ask and it writes the
ledger to a file (e.g. `CODELEAN-DEBT.md`). One-shot. "stop CODELEAN-debt" or
"normal mode" to revert.
