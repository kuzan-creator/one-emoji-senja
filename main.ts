// One Emoji, One Smile — make.fun entry.
// Writes exactly one emoji to /output/entry.txt.
// Picked by duelling 10 candidates on the judge's brief (see duel-10.md):
// 🌞 (U+1F31E SUN WITH FACE) — a smiling face on a bright sun. Warm at
// first glance, universal, chosen rather than the default smiley, and
// stranger-safe: no hearts, hug, kiss or flirtation. 1 codepoint, 4 bytes.
// Verified locally: entry.txt is exactly these 4 bytes, no newline —
// gate is 1–8 characters, so this passes with room to spare.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const emoji = "🌞";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), emoji, "utf8");
