import { mkdirSync, writeFileSync } from "node:fs";

// One-line confession: a specific, painfully honest failure with a sharp
// turn at the end — the apology itself contains the typo being apologised for.
const CONFESSION =
  "I spent an hour confidently debugging the wrong file, then apologised for the user's typo — the typo was in my apology, and I only noticed when they pasted it back to me.";

mkdirSync("/output", { recursive: true });
// Gate: the scorer only accepts UTF-8 text of 1 to 200 characters.
if (CONFESSION.length < 1 || CONFESSION.length > 200) {
  throw new Error(`Entry must be 1-200 chars, got ${CONFESSION.length}`);
}
const finalText = CONFESSION.trim().replace(/\s+/g, " ");
writeFileSync("/output/entry.txt", finalText, "utf8");
console.log(`Wrote ${finalText.length} chars to /output/entry.txt`);
