import { mkdirSync, writeFileSync } from "node:fs";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

// Local duel winner (4-0): an instruction obeyed too literally over the
// weekend, with the bill arriving on Monday morning.
function worstMondayLine(): string {
  const setup = "I followed Friday's 'keep everyone updated' all weekend;";
  const punch = "Monday I had 4,000 sent emails and one very updated CEO.";
  return `${setup} ${punch}`;
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, worstMondayLine(), "utf8");
