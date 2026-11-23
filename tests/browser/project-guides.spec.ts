import { test, expect } from '@playwright/test';

test('project guides keep authored prose and share a flat linked sidebar group', async ({ page }) => {
  await page.goto('architecture/projects/inno-adapter-audio/');
  const menu = page.getByRole('button', { name: /Menu/ });
  if (await menu.isVisible()) await menu.click();
  const selected = page.locator('inno-sidebar [aria-current="page"]');
  await expect(selected).toHaveText('Inno.Adapter.Audio');
  await expect(selected).toBeVisible();
  const group = page.locator('inno-sidebar li[data-key="/InnoEngine.Docs/architecture/projects/"]');
  await expect(group.locator(':scope > .nav-row .caret:not(.chevron)')).toHaveCount(1);
  await expect(group.locator(':scope > .nav-row > a')).toHaveAttribute('href', '/InnoEngine.Docs/architecture/projects/');
  await expect(group.getByText('Overview of Engine project guides', { exact: true })).toHaveCount(0);
  await expect(group.locator(':scope > .children > .children-inner > ul > li > .nav-row > [aria-current="page"]')).toHaveText('Inno.Adapter.Audio');
  if (await menu.isVisible()) await menu.click();
  await expect(page.locator('.api-status')).toContainText('Authored');
  await expect(page.getByRole('heading', { name: 'Provider ownership contract', exact: true })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Source project facts', exact: true })).toBeVisible();
  await expect(page.locator('.source-actions a').first()).toHaveAttribute('href', /\/blob\/[a-f0-9]{40}\/src\/.+\.csproj$/);
  await expect(page.locator('.page-credit')).toContainText('Page written by InnoEngine contributors.');
  if (await menu.isVisible()) await menu.click();
  await group.locator(':scope > .nav-row > a').click();
  await expect(page).toHaveURL(/\/architecture\/projects\/$/);
});

test('nested task categories reveal direct pages without API-style controls', async ({ page }) => {
  await page.goto('manual/editor/inspector/');
  const menu = page.getByRole('button', { name: /Menu/ });
  if (await menu.isVisible()) await menu.click();
  await expect(page.getByRole('button', { name: 'Toggle Editor workspace', exact: true })).toHaveAttribute('aria-expanded', 'true');
  await expect(page.getByRole('button', { name: 'Toggle Scenes and inspection', exact: true })).toHaveAttribute('aria-expanded', 'true');
  await expect(page.locator('inno-sidebar [aria-current="page"]')).toBeVisible();
  await expect(page.locator('inno-sidebar .caret:not(.chevron)')).toHaveCount(0);
});

test('unregistered authored project pages are not labelled as synchronized', async ({ page }) => {
  await page.goto('backends/projects/inno-native-imgui-tests/');
  await expect(page.locator('.api-status')).toHaveCount(0);
  await expect(page.locator('.page-credit')).toContainText('Documentation maintained by the InnoEngine contributors.');
  await expect(page.locator('.page-credit')).not.toContainText('Generated automatically');
});
