import { mkdirSync, writeFileSync } from "node:fs";

// Pemenang adu lokal V1-V5 (4-0): twist kepatuhan harfiah akhir pekan -> Senin.
const line =
  "I followed Friday's 'keep everyone updated' all weekend; Monday I had 4,000 sent emails and one very updated CEO.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
