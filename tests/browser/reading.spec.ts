import { expect, test } from '@playwright/test';

const journeys = [
  ['', 'InnoEngine'],
  ['manual/scenes/prefabs/', 'Instantiate a prefab'],
  ['manual/assets/import-settings/', 'Edit asset import settings'],
  ['platforms/publish-player/', 'Build and run a Player'],
  ['platforms/window-lifetime/', 'Own windows and rendering surfaces'],
  ['contributing/testing/projects/inno-core-execution-tests/', 'Execution and retirement tests'],
  ['contributing/testing/projects/inno-tooling-validation-tests/', 'Validation planning and evidence tests'],
  ['extending/editor-panels/', 'Add an Editor panel'],
  ['api/engine/scene/gameobject/', 'GameObject'],
  ['api/scripting/runtime/scenemanager/', 'SceneManager'],
  ['api/scripting/editor/editorstate/', 'EditorState'],
  ['api/scripting/editor/editoraction-59a990be6ea3/', 'EditorAction<TTarget, TArgument>'],
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

test('generic type navigation preserves parameter names and existing deep links', async ({ page }) => {
  await page.goto('api/scripting/editor/');
  const main = page.getByRole('main');
  await expect(main.getByRole('link', { name: 'EditorAction', exact: true })).toHaveCount(1);
  await expect(main.getByRole('link', { name: 'EditorAction<TTarget>', exact: true })).toHaveCount(1);
  const generic = main.getByRole('link', { name: 'EditorAction<TTarget, TArgument>', exact: true });
  await expect(generic).toHaveAttribute('href', /editoraction-59a990be6ea3/);
  await generic.click();
  await expect(page.locator('h1')).toHaveText('EditorAction<TTarget, TArgument>');
  await expect(page).toHaveTitle('EditorAction<TTarget, TArgument> | InnoEngine');
});

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

test('script references expose caller obligations and exact declarations', async ({ page }) => {
  for (const [route, identity] of [
    ['api/scripting/runtime/scenemanager/', 'InnoEngine.Scene.SceneManager'],
    ['api/scripting/editor/editorstate/', 'InnoEditor.Core.EditorState'],
  ]) {
    await page.goto(route);
    await expect(page.getByRole('main')).toContainText(identity);
    const callingGuide = page.getByRole('main').getByRole('link', { name: 'Use the script API', exact: true });
    await expect(callingGuide).toBeVisible();
    await callingGuide.click();
    await expect(page).toHaveURL(/\/manual\/scripting\/use-script-api\/$/);
    await expect(page.getByRole('main')).toContainText('does not establish a supported construction path');
  }
});

test('API directories expose project trees and only populated script letters', async ({ page }) => {
  await page.goto('api/engine/core/collections/');
  const graph = page.getByRole('main').getByRole('link', { name: 'DependencyGraph', exact: true });
  await expect(graph).toBeVisible();
  await graph.click();
  await expect(page.locator('h1')).toContainText('DependencyGraph');
  await page.goto('api/scripting/runtime/');
  const letters = await page.getByRole('main').locator('h2').allTextContents();
  expect(letters.length).toBeGreaterThan(0);
  expect(letters.every(value => /^[A-Z]$|^Other$/.test(value.trim()))).toBe(true);
  await expect(page.getByRole('main').getByRole('link', { name: 'SceneManager', exact: true })).toBeVisible();
});

test('Scope labels and independent member editing reflect canonical ownership', async ({ page }) => {
  await page.goto('api/scripting/runtime/scenemanager/');
  await expect(page.locator('.api-surface')).toHaveText('Runtime scripting');
  await expect(page.getByRole('main')).toContainText('editor-script/Debug');
  const links = page.getByRole('main').getByRole('link', { name: 'Edit this explanation', exact: true });
  expect(await links.count()).toBeGreaterThan(1);
  const addresses = await links.evaluateAll(nodes => nodes.map(node => node.getAttribute('href')));
  expect(new Set(addresses).size).toBe(addresses.length);
  expect(addresses.every(value => value?.startsWith('https://github.com/Wolfiora/InnoEngine.Docs/edit/draft/content/en/api/'))).toBe(true);
  expect(addresses.some(value => value?.includes('/_members/'))).toBe(true);
  await expect(page.getByRole('main')).toContainText('XML-synced');
});

test('short diagnostic identities remain readable inside scrolling tables', async ({ page }) => {
  await page.goto('manual/scripting/use-script-api/');
  const table = page.getByRole('table');
  await expect(table).toBeVisible();
  for (const value of ['Diagnostic', 'INNO2001', 'INNO2002']) {
    const cell = table.getByText(value, { exact: true });
    await expect(cell).toBeVisible();
    const lines = await cell.evaluate((element) => {
      const range = document.createRange();
      range.selectNodeContents(element);
      return new Set(Array.from(range.getClientRects(), rect => rect.top)).size;
    });
    expect(lines).toBe(1);
  }
  const geometry = await page.evaluate(() => ({
    width: document.documentElement.clientWidth,
    scroll: document.documentElement.scrollWidth,
  }));
  expect(geometry.scroll).toBeLessThanOrEqual(geometry.width + 1);
});

test('keyboard skip link and API contract deep link remain usable', async ({ page }) => {
  await page.goto('api/engine/scene/gameobject/');
  await page.keyboard.press('Tab');
  const skip = page.getByRole('link', { name: 'Skip to content' });
  await expect(skip).toBeFocused();
  await expect(skip).toBeVisible();
  await page.keyboard.press('Enter');
  const contract = page.getByRole('main').getByRole('link', { name: 'Inno.Scene', exact: true });
  await expect(contract).toBeVisible();
  await contract.click();
  await expect(page).toHaveURL(/\/architecture\/projects\/inno-scene\/#scene-ownership-contract$/);
  await expect(page.locator('#scene-ownership-contract')).toBeInViewport();
});

test('essential ownership content remains available without JavaScript', async ({ browser, baseURL }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  try {
    const page = await context.newPage();
    await page.goto(new URL('architecture/projects/inno-scene/#scene-ownership-contract', baseURL).href);
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
  await page.goto('api/engine/scene/gameobject/');
  await page.screenshot({ path: testInfo.outputPath('api-dark.png') });
  await page.goto('api/scripting/editor/editorstate/');
  await page.screenshot({ path: testInfo.outputPath('editor-script-dark.png') });
  await page.evaluate(() => localStorage.setItem('starlight-theme', 'light'));
  await page.goto('api/scripting/runtime/scenemanager/');
  await page.screenshot({ path: testInfo.outputPath('runtime-script-light.png') });
});
