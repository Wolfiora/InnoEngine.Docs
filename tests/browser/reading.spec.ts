import { expect, test, type Locator } from '@playwright/test';

async function expectSyncedStatus(status: Locator) {
  await expect(status).toBeVisible();
  await expect(status).toHaveAttribute('aria-label', 'Editorial status: Synced');
  await expect(status.locator('.api-status-icon')).toHaveText('!');
  await expect(status.locator('.api-status-icon')).toHaveAttribute('aria-hidden', 'true');
  await expect(status.locator('strong')).toHaveText('Synced');
  const gap = await status.evaluate(element => {
    const icon = element.querySelector('.api-status-icon')!.getBoundingClientRect();
    const label = element.querySelector('strong')!.getBoundingClientRect();
    return label.left - icon.right;
  });
  expect(gap).toBeGreaterThan(0);
}

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
  const graph = page.getByRole('main').getByRole('link', { name: 'DependencyGraph<TKey>', exact: true });
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
  await expect(page.getByRole('main')).not.toContainText('editor-script/Debug');
  await expect(page.getByRole('main').getByRole('link', { name: 'Edit this explanation', exact: true })).toHaveCount(0);
  const links = page.getByRole('main').getByRole('link', { name: 'Edit this page on GitHub', exact: true });
  await expect(links).toHaveCount(1);
  const addresses = await links.evaluateAll(nodes => nodes.map(node => node.getAttribute('href')));
  expect(new Set(addresses).size).toBe(addresses.length);
  expect(addresses.every(value => value?.startsWith('https://github.com/Wolfiora/InnoEngine.Docs/edit/draft/content/en/api/'))).toBe(true);
  expect(addresses.some(value => value?.includes('/_members/'))).toBe(false);
  const member = page.getByRole('main').locator('table a').filter({ hasText: 'SceneManager.' }).first();
  const name = await member.textContent();
  await member.click();
  await expect(page.locator('h1')).toHaveText(name!.split('(')[0]);
  await expect(page.getByRole('main').getByRole('link', { name: 'Edit this page on GitHub', exact: true })).toHaveCount(1);
  await expect(page.getByRole('main').getByRole('link', { name: 'SceneManager', exact: true })).toBeVisible();
  await expect(page.getByRole('main')).not.toContainText('XML-synced');
  const tip = page.locator('.api-status-synced:visible');
  await expectSyncedStatus(tip);
  await expect(page.locator('.sl-markdown-content .api-status')).toHaveCount(0);
  const actions = page.locator('.source-actions');
  await expect(actions.locator('a').nth(0)).toHaveText('Source declaration');
  await expect(actions.locator('a').nth(1)).toHaveText('Edit this page on GitHub');
  expect(await actions.evaluate(element => {
    const [source, edit] = element.querySelectorAll('a');
    return edit.getBoundingClientRect().top - source.getBoundingClientRect().bottom;
  })).toBeLessThanOrEqual(8);
});

test('shared sidebar loads only expanded groups, links homes and animates both directions', async ({ page }, testInfo) => {
  const requested: string[] = [];
  page.on('request', request => { if (request.url().includes('/navigation-data/')) requested.push(request.url()); });
  await page.goto('api/');
  const mobile = page.getByRole('button', { name: /Menu/ });
  if (await mobile.isVisible()) await mobile.click();
  const sidebar = page.locator('inno-sidebar');
  await expect(sidebar.locator('[aria-expanded="true"]')).toHaveCount(0);
  expect(requested).toHaveLength(0);
  const toggle = (name: string) => sidebar.getByRole('button', { name: 'Toggle ' + name, exact: true });
  await toggle('API Reference').focus();
  await page.keyboard.press('Enter');
  await expect(toggle('Engine')).toBeVisible();
  expect(requested).toHaveLength(1);
  await sidebar.getByRole('link', { name: 'Engine', exact: true }).click();
  await expect(page).toHaveURL(/\/api\/engine\/$/);
  if (await mobile.isVisible()) await mobile.click();
  await expect(toggle('Engine')).toHaveAttribute('aria-expanded', 'false');
  await expect(toggle('API Reference')).toHaveAttribute('aria-expanded', 'true');
  const selected = sidebar.getByRole('link', { name: 'Engine', exact: true });
  await expect(selected).toHaveAttribute('aria-current', 'page');
  const selectedColor = await selected.evaluate(el => getComputedStyle(el.parentElement!).backgroundColor);
  const ancestorColor = await toggle('API Reference').evaluate(el => getComputedStyle(el.parentElement!).backgroundColor);
  expect(selectedColor).not.toBe(ancestorColor);
  await toggle('Manual').click();
  const editorGroup = toggle('Editor');
  await expect(editorGroup.locator('.caret.chevron')).toHaveCount(1);
  await expect(editorGroup.locator('..').locator(':scope > a')).toHaveCount(0);
  await editorGroup.click();
  await expect(editorGroup).toHaveAttribute('aria-expanded', 'true');
  await editorGroup.click();
  await expect(editorGroup).toHaveAttribute('aria-expanded', 'false');
  await toggle('Manual').click();
  await toggle('Scripting').click();
  await toggle('Authoring').click();
  const authoring = sidebar.locator('li[data-key="/InnoEngine.Docs/api/scripting/authoring/"]');
  const links = authoring.locator(':scope > .children > .children-inner > ul > li > .nav-row > a');
  await expect(links.filter({ hasText: 'HeaderAttribute' })).toBeVisible();
  const names = await links.allTextContents();
  expect(names).toEqual([...names].sort((a,b)=>a.localeCompare(b,'en',{sensitivity:'base'})));
  const panel = authoring.locator(':scope > .children');
  await toggle('Authoring').click();
  await expect(panel).toBeHidden();
  const count = requested.length;
  await toggle('Authoring').click();
  await expect(panel).toBeVisible();
  expect(requested).toHaveLength(count);
  await page.screenshot({ path: testInfo.outputPath('shared-categories.png') });
  await authoring.locator(':scope > .nav-row > a').click();
  await expect(page).toHaveURL(/\/api\/scripting\/authoring\/$/);
});

test('sidebar rows align controls, distinguish root disclosures and grow within half the desktop', async ({ page }, testInfo) => {
  await page.goto('api/');
  const menu = page.getByRole('button', { name: /Menu/ });
  if (await menu.isVisible()) await menu.click();
  const sidebar = page.locator('inno-sidebar');
  await expect(sidebar.locator('.root > li > .nav-row > a')).toHaveCount(0);
  const api = sidebar.getByRole('button', { name: 'Toggle API Reference', exact: true });
  await expect(api.locator('.chevron')).toHaveCount(1);
  const initialWidth = await page.locator('.sidebar-pane').evaluate(el => el.getBoundingClientRect().width);
  await api.click();
  for (const path of ['engine', 'engine/adapter', 'engine/adapter/audio']) {
    const button = sidebar.locator(`li[data-key="/InnoEngine.Docs/api/${path}/"] > .nav-row > button`);
    await button.click();
    await expect(button).toHaveAttribute('aria-expanded', 'true');
    await expect(button.locator('.chevron')).toHaveCount(0);
  }
  const audio = sidebar.locator('li[data-key="/InnoEngine.Docs/api/engine/adapter/audio/"]');
  const row = audio.locator(':scope > .nav-row');
  await expect(row.locator('a')).toHaveCSS('font-weight', '650');
  await expect(row.locator('a')).toHaveCSS('text-decoration-line', 'underline');
  expect(await row.evaluate(el => getComputedStyle(el).backgroundColor)).not.toBe('rgba(0, 0, 0, 0)');
  await expect(row.locator('a')).toHaveCSS('background-color', 'rgba(0, 0, 0, 0)');
  const geometry = await row.evaluate(el => {
    const icon = el.querySelector('.caret')!.getBoundingClientRect();
    const label = el.querySelector('a')!.getBoundingClientRect();
    return Math.abs(icon.top + icon.height / 2 - label.top - label.height / 2);
  });
  expect(geometry).toBeLessThan(1.5);
  const gaps = await row.evaluate(el => {
    const tree = el.closest('ul')!;
    const line = tree.getBoundingClientRect().left + parseFloat(getComputedStyle(tree).borderLeftWidth);
    const content = el.closest('.sidebar-content')!;
    return {
      left: el.getBoundingClientRect().left - line,
      right: parseFloat(getComputedStyle(content).paddingRight),
    };
  });
  expect(gaps.left).toBeGreaterThan(0);
  expect(Math.abs(gaps.left - gaps.right)).toBeLessThan(1);
  await expect.poll(async () => row.evaluate(el => {
    const pane = el.closest('.sidebar-pane')!;
    return pane.getBoundingClientRect().left + pane.clientLeft + pane.clientWidth - el.getBoundingClientRect().right;
  })).toBeGreaterThanOrEqual(gaps.right - 1);
  if (testInfo.project.name !== 'mobile') {
    await expect.poll(() => page.locator('.sidebar-pane').evaluate(el => el.getBoundingClientRect().width)).toBeGreaterThan(initialWidth + 1);
    await expect.poll(() => page.evaluate(() => document.querySelector('.sidebar-pane')!.getBoundingClientRect().width)).toBeLessThanOrEqual(page.viewportSize()!.width / 2 + 1);
  }
  const leaf = audio.locator(':scope > .children .nav-row > a').first();
  const normalWeight = await leaf.evaluate(el => getComputedStyle(el).fontWeight);
  await leaf.hover();
  await expect(leaf).toHaveCSS('font-weight', normalWeight);
  expect(await leaf.evaluate(el => getComputedStyle(el.parentElement!).backgroundColor)).not.toBe('rgba(0, 0, 0, 0)');
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  expect(overflow).toBeLessThanOrEqual(1);
  await page.screenshot({ path: testInfo.outputPath('sidebar-adaptive-rows.png') });
});

test('sidebar opening has no full-height flash and rapid reversal stays open', async ({ page }) => {
  await page.goto('api/');
  const menu = page.getByRole('button', { name: /Menu/ });
  if (await menu.isVisible()) await menu.click();
  const heights = await page.locator('inno-sidebar').evaluate(async sidebar => {
    const button = sidebar.querySelector<HTMLButtonElement>('[aria-label="Toggle API Reference"]')!;
    button.click();
    // Observe the first attached frame, including the asynchronous fragment arrival.
    const samples: number[] = [];
    for (let frame = 0; frame < 120; frame++) {
      await new Promise(requestAnimationFrame);
      const panel = button.closest('li')!.querySelector<HTMLElement>(':scope > .children');
      if (panel) samples.push(panel.getBoundingClientRect().height);
      if (samples.length >= 25) break;
    }
    return samples;
  });
  expect(heights.length).toBeGreaterThan(2);
  expect(heights.at(-1)).toBeGreaterThan(0);
  for (let i = 1; i < heights.length; i++) expect(heights[i]).toBeGreaterThanOrEqual(heights[i - 1] - 1);
  const button = page.getByRole('button', { name: 'Toggle API Reference', exact: true });
  await button.evaluate(el => { (el as HTMLButtonElement).click(); (el as HTMLButtonElement).click(); });
  await expect(button).toHaveAttribute('aria-expanded', 'true');
  const panel = page.locator('inno-sidebar .root > li').filter({ has: button }).locator(':scope > .children');
  await expect(panel).toBeVisible();
  await page.waitForTimeout(260); // Outlive the canceled close callback.
  await expect(panel).toBeVisible();
});

test('status sits in the page chrome, XML summaries are quoted, and metadata is compact', async ({ page }, testInfo) => {
  await page.goto('api/scripting/authoring/headerattribute/');
  const main = page.getByRole('main');
  const order = await main.evaluate(element => {
    const heading = element.querySelector('h1')!;
    const summary = (heading.closest('.sl-heading-wrapper') ?? heading).nextElementSibling;
    const metadata = [...element.querySelectorAll('p')].find(p=>p.textContent?.startsWith('API:'))!;
    return { summary: summary?.textContent, summaryTag: summary?.tagName, items: summary?.querySelectorAll('li').length,
      project: metadata.textContent, breaks: metadata.querySelectorAll('br').length };
  });
  expect(order.summary).toContain('Starts a visually separated Inspector section');
  expect(order.summaryTag).toBe('BLOCKQUOTE');
  expect(order.items).toBe(1);
  await expect(page.locator('.api-status:visible')).toHaveCount(1);
  await expect(main.locator('.sl-markdown-content .api-status')).toHaveCount(0);
  await expect(page.getByRole('main')).not.toContainText('This explanation is synchronized from the source XML documentation.');
  const desktop = (page.viewportSize()?.width ?? 0) >= 1152;
  if (desktop) {
    const header = page.locator('.api-sidebar-header');
    await expectSyncedStatus(header.locator('.api-status'));
    await expect(page.locator('.right-sidebar-panel h2')).toHaveText('TABLE OF CONTENTS');
    await expect.poll(() => page.evaluate(() => {
      const sidebar = document.querySelector('.api-sidebar-header')!.getBoundingClientRect();
      const context = document.querySelector('main > .content-panel')!.getBoundingClientRect();
      return Math.abs(sidebar.bottom - context.bottom);
    })).toBeLessThanOrEqual(1);
    const geometry = await header.evaluate(element => {
      const status = element.querySelector('.api-status')!;
      const label = status.querySelector('strong')!.getBoundingClientRect();
      const box = status.getBoundingClientRect();
      return { right: box.right, viewport: window.innerWidth,
        centered: Math.abs((label.top + label.bottom) / 2 - (box.top + box.bottom) / 2),
        gradient: getComputedStyle(status).backgroundImage };
    });
    expect(geometry.right).toBeLessThanOrEqual(geometry.viewport + 1);
    expect(geometry.centered).toBeLessThanOrEqual(1);
    expect(geometry.gradient).toContain('linear-gradient(to left');
  } else {
    await expect(page.locator('.api-status-inline .api-status')).toBeVisible();
    await expect(page.locator('mobile-starlight-toc .toggle')).toContainText('TABLE OF CONTENTS');
  }
  expect(order.project).toContain('Project: Inno.Editor.Annotations');
  expect(order.project).toContain('Inherits:');
  expect(order.breaks).toBeGreaterThan(0);
  await page.screenshot({ path: testInfo.outputPath('xml-summary-and-metadata.png') });
  await page.goto('api/engine/build/bindings/nativebindinggenerator/');
  const summaries = main.locator('blockquote > ul > li');
  await expect(summaries).toHaveText([
    'Executes the shared facade-to-C-to-managed binding workflow independently of MSBuild.',
    'Provides preparation input planning for the shared binding generator without producing generated artifacts.',
  ]);
  const layout = await main.evaluate(element => {
    const quote = element.querySelector('.api-summary')!;
    const list = quote.querySelector('ul')!;
    const contractList = [...element.querySelectorAll('.sl-markdown-content > ul')][0];
    const metadata = [...element.querySelectorAll('p')].find(p => p.textContent?.startsWith('API:'))!;
    const style = getComputedStyle(quote);
    const labels = [...metadata.querySelectorAll('strong')].map(node => node.textContent);
    const first = list.firstElementChild!;
    const last = list.lastElementChild!;
    return { labels, breaks: metadata.querySelectorAll('br').length,
      listX: first.getBoundingClientRect().x, contractX: contractList.firstElementChild!.getBoundingClientRect().x,
      top: first.getBoundingClientRect().top - quote.getBoundingClientRect().top,
      bottom: quote.getBoundingClientRect().bottom - last.getBoundingClientRect().bottom,
      paddingTop: style.paddingTop, paddingBottom: style.paddingBottom };
  });
  expect(layout.labels).toEqual(['API:', 'Implements:', 'Inherits:', 'Project:']);
  expect(layout.breaks).toBe(3);
  expect(Math.abs(layout.listX - layout.contractX)).toBeLessThanOrEqual(1);
  expect(Math.abs(layout.top - layout.bottom)).toBeLessThanOrEqual(1);
  expect(layout.paddingTop).toBe(layout.paddingBottom);
  await page.screenshot({ path: testInfo.outputPath('partial-summary-quotation.png') });
  await page.goto('api/engine/core/collections/');
  await main.getByRole('link', { name: 'DependencyGraph<TKey>', exact: true }).click();
  const remarks = main.getByRole('heading', { name: 'Remarks', exact: true });
  await expect(remarks).toHaveCount(1);
  await expect(remarks).toHaveJSProperty('tagName', 'H2');
});

test('nested project categories use tables with functional descriptions', async ({ page }) => {
  await page.goto('api/engine/adapter/');
  const table = page.getByRole('main').getByRole('table').filter({ has: page.getByRole('link', { name: 'Audio', exact: true }) });
  await expect(table).toBeVisible();
  const audio = table.getByRole('row').filter({ has: page.getByRole('link', { name: 'Audio', exact: true }) });
  await expect(audio).toContainText('audio backend selection');
  await audio.getByRole('link').click();
  await expect(page.getByRole('main').getByRole('table')).toBeVisible();
  await expect(page.getByRole('main')).not.toContainText('Browse Audio.');
});

test('type members form one compact table and manual explanations have no XML notice', async ({ page }, testInfo) => {
  await page.goto('api/engine/adapter/audio/audiobackendcatalog/');
  const table = page.getByRole('main').getByRole('table');
  await expect(table).toHaveCount(1);
  await expect(table.getByRole('columnheader', { name: 'Kind', exact: true })).toBeVisible();
  await expect(table).toContainText('Constructors');
  await expect(table).toContainText('Methods');
  await expect(table).toContainText('Properties');
  await table.scrollIntoViewIfNeeded();
  await page.screenshot({ path: testInfo.outputPath('api-members-table.png') });
  await page.goto('api/engine/core/identity/identityobject/');
  const introduction = await page.getByRole('main').evaluate(element => {
    const title = element.querySelector('h1')!;
    return (title.closest('.sl-heading-wrapper') ?? title).nextElementSibling?.textContent;
  });
  expect(introduction).toContain('Provides instance-owned persistent and session-local identity state');
  await expect(page.locator('.api-status-synced:visible')).toHaveCount(0);
  await expect(page.locator('.api-status-verified:visible, .api-status-outdated:visible')).toHaveCount(1);
  await expect(page.locator('.sl-markdown-content .api-status')).toHaveCount(0);
  await expect(page.locator('.source-actions a').first()).toHaveText('Source declaration');
});

test('capture API categories and standalone elements', async ({ page }, testInfo) => {
  for (const theme of ['light', 'dark']) {
    await page.goto('api/engine/adapter/');
    await page.evaluate(theme => localStorage.setItem('starlight-theme', theme), theme);
    await page.reload();
    await page.screenshot({ path: testInfo.outputPath(`categories-${theme}.png`) });
    await page.goto('api/engine/core/collections/dependencygraph/');
    await page.screenshot({ path: testInfo.outputPath(`type-${theme}.png`) });
    await page.getByRole('main').locator('table a').filter({ hasText: /^DependencyGraph<TKey>\./ }).first().click();
    await expect(page.locator('h1')).toContainText('DependencyGraph<TKey>.');
    await page.screenshot({ path: testInfo.outputPath(`member-${theme}.png`) });
    const geometry = await page.evaluate(() => [document.documentElement.clientWidth, document.documentElement.scrollWidth]);
    expect(geometry[1]).toBeLessThanOrEqual(geometry[0] + 1);
  }
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
    await page.goto(new URL('api/', baseURL).href);
    // Category tables are the complete navigation fallback without client JavaScript.
    await page.getByRole('main').getByRole('link', { name: 'Engine', exact: true }).click();
    await expect(page).toHaveURL(/\/api\/engine\/$/);
    await expect(page.getByRole('main').getByRole('table')).toBeVisible();
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
  await navigation.locator('button[aria-label="Toggle Manual"]').click();
  await navigation.locator('button[aria-label="Toggle Scenes and objects"]').click();
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
