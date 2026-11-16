import { expect, test } from '@playwright/test';

test('search follows Markdown bounds while both sidebars resize', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1000 });
  await page.goto('');
  const search = page.locator('inno-header-layout button[data-open-modal]');
  const alignment = () => page.evaluate(() => {
    const body = document.querySelector('.sl-markdown-content')!.getBoundingClientRect();
    const search = document.querySelector('inno-header-layout button[data-open-modal]')!.getBoundingClientRect();
    return Math.max(Math.abs(body.left - search.left), Math.abs(body.right - search.right));
  });
  await expect(search).toBeVisible();
  await expect.poll(alignment).toBeLessThan(2);
  const divider = page.getByRole('separator', { name: 'Resize table of contents' });
  for (const key of ['Home', 'End']) {
    await divider.focus(); await page.keyboard.press(key);
    await expect.poll(alignment).toBeLessThan(2);
  }
  await page.evaluate(() => document.documentElement.style.setProperty('--inno-sidebar-width', '960px'));
  await expect.poll(alignment).toBeLessThan(2);
  const box = (await divider.boundingBox())!;
  await page.mouse.move(box.x + box.width / 2, box.y + 100);
  await page.mouse.down(); await page.mouse.move(1300, box.y + 100, { steps: 8 }); await page.mouse.up();
  await expect.poll(alignment).toBeLessThan(2);
  await search.click();
  await expect(page.locator('dialog[open]')).toBeVisible();
});

test('Markdown tables fill the column and wrap long API elements', async ({ page }) => {
  await page.goto('api/engine/animation/animation/');
  const table = page.locator('.sl-markdown-content table').filter({ hasText: 'Animation.Play' }).first();
  await expect(table).toHaveAttribute('data-inno-sized', '');
  for (const theme of ['light', 'dark']) {
    await page.evaluate(theme => document.documentElement.dataset.theme = theme, theme);
    const metrics = () => table.evaluate(table => {
      const rect = table.getBoundingClientRect(), parent = table.parentElement!.getBoundingClientRect();
      return { gap: Math.abs(rect.width - parent.width), overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
        cells: [...table.querySelectorAll('tr')].flatMap(row => [...row.querySelectorAll('th, td')].map(cell => {
          const box = cell.getBoundingClientRect();
          return { width: box.width, overflow: cell.scrollWidth - cell.clientWidth, outside: box.right - parent.right };
        })) };
    });
    await expect.poll(async () => (await metrics()).gap).toBeLessThan(2);
    const result = await metrics();
    expect(result.overflow).toBeLessThanOrEqual(1);
    for (const cell of result.cells) {
      expect(cell.width).toBeGreaterThan(25);
      expect(cell.overflow).toBeLessThanOrEqual(1);
      expect(cell.outside).toBeLessThanOrEqual(1);
    }
  }
});
