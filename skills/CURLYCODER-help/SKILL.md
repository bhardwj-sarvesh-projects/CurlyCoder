---
name: CURLYCODER-help
description: >
  Quick-reference card for all CURLYCODER modes, skills, and commands.
  One-shot display, not a persistent mode. Trigger: /CURLYCODER-help,
  "CURLYCODER help", "what CURLYCODER commands", "how do I use CURLYCODER".
---

# CURLYCODER Help

Display this reference card when invoked. One-shot, do NOT change mode,
write flag files, or persist anything.

## Levels

| Level | Trigger | What change |
|-------|---------|-------------|
| **Lite** | `/CURLYCODER lite` | Build what's asked, name the lazier alternative in one line. |
| **Full** | `/CURLYCODER` | The ladder enforced: YAGNI â†’ stdlib â†’ native â†’ one line â†’ minimum. Default. |
| **Ultra** | `/CURLYCODER ultra` | YAGNI extremist. Deletion before addition. Challenges requirements before building. |

Level sticks until changed or session end.

## Skills

| Skill | Trigger | What it does |
|-------|---------|--------------|
| **CURLYCODER** | `/CURLYCODER` | Lazy mode itself. Simplest solution that works. |
| **CURLYCODER-review** | `/CURLYCODER-review` | Over-engineering review: `L42: yagni: factory, one product. Inline.` |
| **CURLYCODER-audit** | `/CURLYCODER-audit` | Whole-repo over-engineering audit: ranked list of what to delete. |
| **CURLYCODER-debt** | `/CURLYCODER-debt` | Harvest `CURLYCODER:` shortcut comments into a tracked ledger. |
| **CURLYCODER-gain** | `/CURLYCODER-gain` | Measured-impact scoreboard: less code, less cost, more speed. |
| **CURLYCODER-help** | `/CURLYCODER-help` | This card. |

Codex uses `@CURLYCODER`, `@CURLYCODER-review`, and `@CURLYCODER-help`; Claude Code
and OpenCode use the slash-command forms above (OpenCode ships all six as
slash commands).

## Deactivate

Say "stop CURLYCODER" or "normal mode". Resume anytime with `/CURLYCODER`.
`/CURLYCODER off` also works.

## Configure Default Mode

Default mode = `full`, auto-active every session. Change it:

**Environment variable** (highest priority):
```bash
export CURLYCODER_DEFAULT_MODE=ultra
```

**Config file** (`~/.config/CURLYCODER/config.json`, Windows: `%APPDATA%\CURLYCODER\config.json`):
```json
{ "defaultMode": "lite" }
```

Set `"off"` to disable auto-activation on session start, activate manually
with `/CURLYCODER` when wanted.

Resolution: env var > config file > `full`.

## Update

Enable auto-update once: open `/plugin`, go to Marketplaces, pick CURLYCODER, Enable auto-update. Claude Code then pulls new versions at startup (run `/reload-plugins` when it prompts). Manual refresh: `/plugin marketplace update CURLYCODER` then `/reload-plugins`.

If `/plugin` is not recognized, your Claude Code is out of date. Update it (`npm install -g @anthropic-ai/claude-code@latest`, or `brew upgrade claude-code`) and restart. Other hosts use their own update flow.

## More

Full docs + examples: https://github.com/bhardwj-sarvesh-projects/CurlyCoder
