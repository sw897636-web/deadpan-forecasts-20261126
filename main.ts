// Deadpan Forecasts for Cities That Do Not Exist
// make.fun competition: u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c
//
// Writes one forecast line (1-160 chars) for the invented city of
// Varn Hollow to /output/entry.txt. Deterministic: the same bytes on
// every run. No dependencies, no network, no randomness.
//
// Varn Hollow does not exist. Its weather, however, is reported with
// complete confidence every Tuesday, when the rain falls upward.

import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_PATH = "/output/entry.txt";

// Deadpan TV meteorologist tone: a concrete forecast, then the twist
// delivered as routine local fact in the last clause.
const ENTRY =
  "In Varn Hollow, expect 22 degrees and light drizzle until 3pm, when the rain will fall upward for eleven minutes, as it does every Tuesday.";

// The scorer requires 1-160 characters on a single line; fail loudly
// rather than writing an entry the judge will never see.
if (ENTRY.length < 1 || ENTRY.length > 160 || ENTRY.includes("\n")) {
  throw new Error(`entry is ${ENTRY.length} chars; must be 1-160 on one line`);
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, ENTRY + "\n", "utf8");
