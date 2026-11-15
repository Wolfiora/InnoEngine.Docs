import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { run } from './tooling-process.mjs';
const plan = JSON.parse(await readFile(process.env.INNO_DOCS_PLAN, 'utf8'));
if (!['Full', 'Selected'].includes(plan.browser) || !plan.pages.length) throw new Error('Browser work requires a nonempty selected plan.');
await run(process.execPath, [path.resolve('node_modules/@playwright/test/cli.js'), 'test',
  plan.browser === 'Full' ? 'reading.spec.ts' : 'incremental.spec.ts'], { cwd: process.cwd(), env: process.env });
