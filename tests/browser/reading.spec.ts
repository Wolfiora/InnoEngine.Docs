import { expect, test } from '@playwright/test';

const journeys = [
  ['', 'InnoEngine'],
  ['manual/scenes/prefabs/', 'Instantiate a prefab'],
  ['manual/assets/import-settings/', 'Edit asset import settings'],
  ['extending/editor-panels/', 'Add an Editor panel'],
  ['api/types/scene/gameobject/', 'GameObject'],
] as const;

for (const theme of ['light', 'dark'] as const) {
  for (const [route, heading] of journeys) {
    test(`${theme}: ${route || 'home'} retains readable content and local overflow`, async ({ page }) => {
      await page.addInitScript((theme) => localStorage.setItem('starlight-theme', theme), theme);
      const response = await page.goto(route || './');
      expect(response?.status()).toBe(200);
      await expect(page.locator('html')).toHaveAttribute('lang', 'en');
      await expect(page.locator('html')).toHaveAttribute('data-theme', theme);
      await expect(page.locator('h1')).toHaveCount(1);
      await expect(page.locator('h1')).toContainText(heading);
      await expect(page.getByRole('main')).toBeVisible();
      const geometry = await page.evaluate(() => ({
        width: document.documentElement.clientWidth,
        scroll: document.documentElement.scrollWidth,
      }));
      expect(geometry.scroll).toBeLessThanOrEqual(geometry.width + 1);
      const search = page.getByRole('button', { name: 'Search', exact: true });
      await expect(search).toBeVisible();
      await expect(search).toBeEnabled();
    });
  }
}

test('keyboard search reaches a task and handles empty results', async ({ page }) => {
  await page.goto('./');
  const search = page.getByRole('button', { name: 'Search', exact: true });
  await expect(search).toBeEnabled();
  await search.focus();
  await page.keyboard.press('Enter');
  const dialog = page.getByRole('dialog', { name: 'Search', exact: true });
  await expect(dialog).toBeVisible();
  const input = dialog.getByRole('textbox', { name: 'Search', exact: true });
  await input.fill('prefab');
  const task = dialog.locator('a[href*="/manual/scenes/prefabs/"]').first();
  await expect(task).toBeVisible();
  await task.click();
  await expect(page).toHaveURL(/\/InnoEngine\.Docs\/manual\/scenes\/prefabs\//);
  await expect(dialog).not.toBeVisible();
  await page.getByRole('button', { name: 'Search', exact: true }).click();
  await input.fill('inno-no-matching-page-493728');
  await expect(dialog.getByText(/No results/)).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(dialog).not.toBeVisible();
  await expect(page.getByRole('button', { name: 'Search', exact: true })).toBeFocused();
});

test('keyboard skip link and API contract deep link remain usable', async ({ page }) => {
  await page.goto('api/types/scene/gameobject/');
  await page.keyboard.press('Tab');
  const skip = page.getByRole('link', { name: 'Skip to content' });
  await expect(skip).toBeFocused();
  await expect(skip).toBeVisible();
  await page.keyboard.press('Enter');
  const contract = page.getByRole('link', { name: 'shared contract', exact: true });
  await expect(contract).toBeVisible();
  await contract.click();
  await expect(page).toHaveURL(/\/api\/projects\/inno-scene\/#scene-ownership-contract$/);
  await expect(page.locator('#scene-ownership-contract')).toBeInViewport();
});

test('essential ownership content remains available without JavaScript', async ({ browser, baseURL }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  try {
    const page = await context.newPage();
    await page.goto(new URL('api/projects/inno-scene/#scene-ownership-contract', baseURL).href);
    await expect(page.locator('#scene-ownership-contract')).toBeVisible();
    await expect(page.getByRole('main')).toContainText('Entering a scope does not add synchronization');
    await expect(page.getByRole('link', { name: 'Types and exact member contracts', exact: true })).toBeVisible();
  } finally {
    await context.close();
  }
});

test('navigation and theme controls work at the selected viewport', async ({ page }) => {
  await page.goto('manual/scenes/prefabs/');
  const menu = page.getByRole('button', { name: 'Menu', exact: true });
  if (await menu.isVisible()) await menu.click();
  // Starlight's navigation wrapper uses display: contents; exercise the visible link itself.
  const navigation = page.getByRole('navigation', { name: 'Main', exact: true });
  const task = navigation.getByRole('link', { name: 'Instantiate a prefab in its owning scene', exact: true });
  await expect(task).toBeVisible();
  const theme = page.getByRole('combobox', { name: 'Select theme', exact: true });
  await theme.selectOption('dark');
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await theme.selectOption('light');
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  await task.click();
  await expect(page.locator('h1')).toContainText('Instantiate a prefab');
});

test('capture representative reading surfaces for visual review', async ({ page }, testInfo) => {
  await page.goto('./');
  await page.evaluate(() => localStorage.setItem('starlight-theme', 'light'));
  await page.reload();
  await page.screenshot({ path: testInfo.outputPath('home-light.png') });
  await page.evaluate(() => localStorage.setItem('starlight-theme', 'dark'));
  await page.goto('api/types/scene/gameobject/');
  await page.screenshot({ path: testInfo.outputPath('api-dark.png') });
});
