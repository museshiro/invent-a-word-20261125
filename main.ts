import { mkdirSync, writeFileSync } from "node:fs";

// Typefade — a new English word for the typing dots that promise a reply,
// then quietly vanish. One word, one line, 73 characters (gate: 1-140).
// Craft: literal-idiom pattern (the "typing dots" are literal chat UI, given a
// verb's ending); dictionary format "word (n.): definition" so the meaning
// lands in one reading; sayable, spellable, memorable.
const WORD = "Typefade";
const DEFINITION = "the typing dots that promise a reply, then quietly vanish.";
const ENTRY = `${WORD} (n.): ${DEFINITION}`;

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, ENTRY);
