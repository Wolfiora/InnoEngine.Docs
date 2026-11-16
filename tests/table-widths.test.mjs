import test from 'node:test';
import assert from 'node:assert/strict';
import { tableWidths } from '../src/scripts/table-widths.ts';

test('wide tables preserve compact leading columns and leave spare space at the end', () => {
  assert.deepEqual(tableWidths([90, 700, 350], [40, 40, 40], 1400), [90, 700, 610]);
});
test('the largest column shrinks first, then equally sized large columns shrink together', () => {
  const first = tableWidths([90, 700, 350], [40, 40, 40], 1000);
  assert.ok(Math.abs(first[1] - 560) < .01);
  assert.equal(first[0], 90); assert.equal(first[2], 350);
  const next = tableWidths([90, 700, 350], [40, 40, 40], 600);
  assert.equal(next[0], 90);
  assert.ok(Math.abs(next[1] - 255) < .01 && Math.abs(next[2] - 255) < .01);
});
test('arbitrary column counts retain readable minimums and never lose a column', () => {
  for (const preferred of [[200], [100, 800], [90, 100, 600, 200, 400, 160]]) {
    const widths = tableWidths(preferred, preferred.map(() => 30), 360);
    assert.equal(widths.length, preferred.length);
    assert.ok(widths.every(width => width >= 30));
    assert.ok(Math.abs(widths.reduce((a,b)=>a+b,0) - 360) < .01);
  }
  assert.deepEqual(tableWidths([100, 200, 300], [40, 40, 40], 80), [40, 40, 40]);
});
