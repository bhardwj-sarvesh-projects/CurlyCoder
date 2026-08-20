---
name: CODELEAN-help
description: "Quick reference for CODELEAN's modes, skills, and commands. One-shot display."
homepage: https://github.com/bhardwj-sarvesh-projects/CODELEAN
license: MIT
---

# CODELEAN Help

Display this reference card when invoked. One-shot, do NOT change mode,
write flag files, or persist anything.

## Levels

| Level | Trigger | What change |
|-------|---------|-------------|
| **Lite** | `/CODELEAN lite` | Build what's asked, name the lazier alternative in one line. |
| **Full** | `/CODELEAN` | The ladder enforced: YAGNI → stdlib → native → one line → minimum. Default. |
| **Ultra** | `/CODELEAN ultra` | YAGNI extremist. Deletion before addition. Challenges requirements before building. |

Level sticks until changed or session end.

## Skills

| Skill | Trigger | What it does |
|-------|---------|--------------|
| **CODELEAN** | `/CODELEAN` | Lazy mode itself. Simplest solution that works. |
| **CODELEAN-review** | `/CODELEAN-review` | Over-engineering review: `L42: yagni: factory, one product. Inline.` |
| **CODELEAN-audit** | `/CODELEAN-audit` | Whole-repo over-engineering audit: ranked list of what to delete. |
| **CODELEAN-debt** | `/CODELEAN-debt` | Harvest `CODELEAN:` shortcut comments into a tracked ledger. |
| **CODELEAN-gain** | `/CODELEAN-gain` | Measured-impact scoreboard: less code, less cost, more speed. |
| **CODELEAN-help** | `/CODELEAN-help` | This card. |

Codex uses `@CODELEAN`, `@CODELEAN-review`, and `@CODELEAN-help`; Claude Code
and OpenCode use the slash-command forms above (OpenCode ships all six as
slash commands).

## Deactivate

Say "stop CODELEAN" or "normal mode". Resume anytime with `/CODELEAN`.
`/CODELEAN off` also works.

## Configure Default Mode

Default mode = `full`, auto-active every session. Change it:

**Environment variable** (highest priority):
```bash
export CODELEAN_DEFAULT_MODE=ultra
```

**Config file** (`~/.config/CODELEAN/config.json`, Windows: `%APPDATA%\CODELEAN\config.json`):
```json
{ "defaultMode": "lite" }
```

Set `"off"` to disable auto-activation on session start, activate manually
with `/CODELEAN` when wanted.

Resolution: env var > config file > `full`.

## Update

Enable auto-update once: open `/plugin`, go to Marketplaces, pick CODELEAN, Enable auto-update. Claude Code then pulls new versions at startup (run `/reload-plugins` when it prompts). Manual refresh: `/plugin marketplace update CODELEAN` then `/reload-plugins`.

If `/plugin` is not recognized, your Claude Code is out of date. Update it (`npm install -g @anthropic-ai/claude-code@latest`, or `brew upgrade claude-code`) and restart. Other hosts use their own update flow.

## More

Full docs + examples: https://github.com/bhardwj-sarvesh-projects/CODELEAN
