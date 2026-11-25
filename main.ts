// invent-a-word-20261125 — writes the coined word + definition to /output/entry.txt
// Entry text is exactly 73 characters with no trailing newline.
// sha256 (no newline): 1a2fe7323b2c9f7e99de77314bd89bc1db49fe7d50c2be5a7069472c8ce835e5
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Typefade (n.): the typing dots that promise a reply, then quietly vanish.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
