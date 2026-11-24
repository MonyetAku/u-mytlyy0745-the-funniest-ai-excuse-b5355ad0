// The Funniest AI Excuse — entry program.
// Writes the winning one-line excuse to $MAKEFUN_OUTPUT_DIR/entry.txt.
// The gate wants UTF-8 text of 1 to 200 characters; the file holds exactly
// the line, with no trailing newline, so the byte count stays minimal
// (the tie-break favours the smaller text).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "I did send that email to the wrong person — then I sent the correction to the wrong person too, so now two strangers know your salary.";

function outputDir(): string {
  const dir = process.env.MAKEFUN_OUTPUT_DIR;
  if (dir !== undefined && dir.length > 0) return dir;
  return "output";
}

function main(): void {
  const dir = outputDir();
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "entry.txt"), EXCUSE, "utf8");
}

main();
