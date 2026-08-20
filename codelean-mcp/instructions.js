// Pure instruction selection for the CODELEAN MCP server. No MCP/SDK imports,
// so this stays unit-testable on its own. Reuses the same builder the Claude
// hooks and Pi extension use, so every host emits identical rules.
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { getCODELEANInstructions } = require("../hooks/CODELEAN-instructions.js");
const { getDefaultMode, normalizeMode } = require("../hooks/CODELEAN-config.js");

// The three intensities the server offers. "off" has no instructions to serve.
export const MODES = ["lite", "full", "ultra"];

// Resolve a requested mode to a runtime intensity. Unknown, empty, or "off"
// falls back to the configured default, then to "full".
// CODELEAN: keep the surface to these three; "off"/"review" aren't served here.
export function resolveMode(requested) {
  const asked = normalizeMode(requested);
  if (asked && asked !== "off") return asked;

  const fallback = normalizeMode(getDefaultMode());
  return fallback && fallback !== "off" ? fallback : "full";
}

export function buildInstructions(requested) {
  return getCODELEANInstructions(resolveMode(requested));
}
