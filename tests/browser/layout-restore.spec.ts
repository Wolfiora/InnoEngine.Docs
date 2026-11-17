import { test, expect } from '@playwright/test';

test('navigation and reload retain column geometry before modules and lazy navigation arrive', async ({ page }) => {
  await page.setViewportSize({ width: 1600, height: 1000 });
  await page.goto('api/engine/animation/animation/');
  await expect(page.locator('inno-sidebar [aria-current="page"]')).toHaveText('Animation');
  await expect(page.locator('inno-sidebar')).not.toHaveAttribute('data-restoring');
  const divider = page.getByRole('separator', { name: 'Resize table of contents' });
  await divider.focus();
  await page.keyboard.press('End');
  for (let i = 0; i < 8; i++) await page.keyboard.press('ArrowRight');
  const geometry = () => page.evaluate(() => ({
    sidebar: document.querySelector('.sidebar-pane')!.getBoundingClientRect().width,
    divider: document.querySelector('.toc-resizer')!.getBoundingClientRect().left,
  }));
  const expected = await geometry();
  for (const reload of [false, true]) {
    let releaseModules!: () => void, releaseNavigation!: () => void;
    const modules = new Promise<void>(resolve => { releaseModules = resolve; });
    const navigation = new Promise<void>(resolve => { releaseNavigation = resolve; });
    await page.route('**/_astro/*.js', async route => { await modules; await route.continue(); });
    await page.route('**/navigation-data/*.json', async route => { await navigation; await route.continue(); });
    try {
      if (reload) await page.reload({ waitUntil: 'commit' });
      else await page.goto('', { waitUntil: 'commit' });
      await expect(page.locator('.toc-resizer')).toBeVisible();
      // This is deliberately before the custom elements can upgrade, not a settled-page check.
      expect(await page.evaluate(() => customElements.get('inno-toc-resizer') === undefined)).toBe(true);
      const assertFrames = async () => {
        const frames = await page.evaluate(async () => {
          const result = [];
          for (let i = 0; i < 6; i++) {
            await new Promise(requestAnimationFrame);
            result.push({ sidebar: document.querySelector('.sidebar-pane')!.getBoundingClientRect().width,
              divider: document.querySelector('.toc-resizer')!.getBoundingClientRect().left });
          }
          return result;
        });
        for (const frame of frames) {
          expect(Math.abs(frame.sidebar - expected.sidebar)).toBeLessThan(1.5);
          expect(Math.abs(frame.divider - expected.divider)).toBeLessThan(1.5);
        }
      };
      await assertFrames();
      releaseModules();
      await expect(page.locator('inno-sidebar')).toHaveAttribute('data-restoring', 'true');
      await assertFrames();
      releaseNavigation();
      await expect(page.locator('inno-sidebar')).not.toHaveAttribute('data-restoring');
      await assertFrames();
    } finally {
      releaseModules(); releaseNavigation();
      await page.unrouteAll({ behavior: 'wait' });
    }
  }
});
