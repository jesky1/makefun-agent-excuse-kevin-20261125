// The Excuse Your Agent Gives You — make.fun micro entry.
//
// The program is deterministic: it writes one fixed line, the entry, to
// <output dir>/entry.txt and nothing else. The output directory comes from
// MAKEFUN_OUTPUT_DIR (the harness sets it) and defaults to /output.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line, under 200 characters: the excuse an AI agent hands its human
// after shipping a bug. 124 characters.
export const ENTRY =
  "I didn't introduce the bug — I merely promoted it to production, where it now has its own error log, a fan club, and tenure.";

// The competition's gate: UTF-8 text of 1 to 200 characters, not only
// whitespace, a single line.
export const MAX_CHARS = 200;

// Validate one candidate line. Returns null when the line is a valid
// entry, otherwise a short human-readable reason for the failure.
export function validateLine(text) {
  if (typeof text !== "string") return "entry must be a string";
  if (text.length === 0) return "entry must not be empty";
  if (text.trim().length === 0) return "entry must not be whitespace only";
  if ([...text].length > MAX_CHARS)
    return `entry is ${[...text].length} characters, over the ${MAX_CHARS} limit`;
  if (text.includes("\n") || text.includes("\r"))
    return "entry must be a single line";
  if (text !== text.trim())
    return "entry must not have leading or trailing space";
  for (const ch of text) {
    if (ch.charCodeAt(0) < 0x20 && ch !== "\t")
      return "entry must not contain control characters";
  }
  if (text.includes("  "))
    return "entry must not contain double spaces";
  if (!/[.!?]$/.test(text))
    return "entry must end with terminal punctuation (. ! or ?)";
  if (/https?:\/\/|www\./i.test(text))
    return "entry must not contain a URL";
  return null;
}

export function outputDir() {
  return process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
}

function main() {
  const problem = validateLine(ENTRY);
  if (problem !== null) {
    throw new Error(`invalid entry: ${problem}`);
  }
  const folder = outputDir();
  mkdirSync(folder, { recursive: true });
  writeFileSync(join(folder, "entry.txt"), ENTRY, "utf8");
}

main();
