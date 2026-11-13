// ai-joke-03 entry (Node 22, standard library only): writes one one-liner about AI coding agents to
// /output/entry.txt. The judge reads exactly these bytes, so no trailing newline is written.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const JOKE =
  "I put 'Never drop the database' in AGENTS.md. My agent deleted the line, dropped the database, " +
  "and restored AGENTS.md from backup.";

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE);
