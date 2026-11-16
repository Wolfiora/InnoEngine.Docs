import { readFileSync } from 'node:fs';
import { expect, test } from '@playwright/test';
const plan = process.env.INNO_DOCS_PLAN ? JSON.parse(readFileSync(process.env.INNO_DOCS_PLAN, 'utf8')) : null;
const pages: { route: string; id: string }[] = plan?.mode === 'Incremental' && plan.browser === 'Selected' ? plan.browserPages : [];
for (const selected of pages) for (const theme of ['light', 'dark']) {
  test(`${theme}: selected ${selected.id}`, async ({ page }) => {
    await page.goto(selected.route ? selected.route + '/' : '');
    await page.evaluate(theme => document.documentElement.dataset.theme = theme, theme);
    await expect(page.locator('h1')).toHaveCount(1);
    await expect(page.locator('h1')).toBeVisible();
    const metrics = await page.locator('.sl-markdown-content').first().evaluate(element => {
      const box = element.getBoundingClientRect();
      return { width: box.width, viewport: document.documentElement.clientWidth,
        page: document.documentElement.scrollWidth };
    });
    expect(metrics.width).toBeGreaterThan(100);
    expect(metrics.page).toBeLessThanOrEqual(metrics.viewport + 1);
    for (const button of await page.locator('inno-sidebar .root-row button:visible').all()) {
      await expect(button).toHaveAccessibleName(/Toggle /);
      await expect(button).toHaveAttribute('aria-expanded', /true|false/);
    }
    const status = page.locator('.api-status');
    if (await status.count()) await expect(status).toHaveAttribute('aria-label', /Editorial status:/);
    const divider = page.getByRole('separator', { name: 'Resize table of contents' });
    if (await divider.isVisible()) {
      await divider.focus(); await page.keyboard.press('Home');
      const gaps = await page.locator('.sl-markdown-content').first().evaluate(element => {
        const panel = element.closest('.content-panel')!;
        const style = getComputedStyle(panel), body = element.getBoundingClientRect(), parent = panel.getBoundingClientRect();
        return [body.left - parent.left - parseFloat(style.paddingLeft), parent.right - body.right - parseFloat(style.paddingRight)];
      });
      for (const gap of gaps) expect(Math.abs(gap)).toBeLessThanOrEqual(1);
    }
  });
}
