# CurlyCoder-mcp

An MCP server that serves CURLYCODER's lazy-senior-dev instructions. It exposes
the same ruleset the Claude hooks and Pi extension use, so every host emits
identical rules.

It is not a replacement for the always-on adapters. CURLYCODER normally lives in
the system context every turn. MCP prompts are user-invoked, and there is no
portable MCP primitive for "inject this into every turn" across hosts. So this
server is the clean option for MCP hosts whose only injection point is the
prompt menu, or that pull context through tools. See issue #70.

## What it exposes

- Prompt `CURLYCODER`, returns the ruleset as a user message. Optional `mode`
  argument: `lite`, `full`, or `ultra`. Omit it to use the configured default.
- Tool `CURLYCODER_instructions`, same text, plus `structuredContent`
  (`{ mode, instructions }`), for hosts that pull context via tools or code
  execution. Read-only.

Mode resolution reuses `hooks/CURLYCODER-config.js`, so `CURLYCODER_DEFAULT_MODE`
and `~/.config/CURLYCODER/config.json` work the same as everywhere else.

## Run it

```bash
cd CurlyCoder-mcp
npm install
node index.js        # speaks MCP over stdio
```

Point an MCP host at that command. Example client entry:

```json
{ "mcpServers": { "CURLYCODER": { "command": "node", "args": ["CurlyCoder-mcp/index.js"] } } }
```

## Test

```bash
npm test
```

Covers mode resolution and the instruction text. The MCP wiring in `index.js`
is intentionally thin: it just maps the prompt and tool onto
`buildInstructions`.
