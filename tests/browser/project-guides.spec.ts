import { test, expect } from '@playwright/test';

test('project guides keep authored prose, source facts and disclosure-only navigation', async ({ page }) => {
  await page.goto('architecture/projects/inno-adapter-audio/');
  const menu = page.getByRole('button', { name: /Menu/ });
  if (await menu.isVisible()) await menu.click();
  const selected = page.locator('inno-sidebar [aria-current="page"]');
  await expect(selected).toHaveText('Inno.Adapter.Audio');
  await expect(selected).toBeVisible();
  await expect(page.locator('inno-sidebar .caret:not(.chevron)')).toHaveCount(0);
  if (await menu.isVisible()) await menu.click();
  await expect(page.locator('.api-status')).toContainText('Outdated');
  await expect(page.getByRole('heading', { name: 'Provider ownership contract', exact: true })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Source project facts', exact: true })).toBeVisible();
  await expect(page.locator('.source-actions a').first()).toHaveAttribute('href', /\/blob\/[a-f0-9]{40}\/src\/.+\.csproj$/);
  await expect(page.locator('.page-credit')).toContainText('Page written by InnoEngine contributors.');
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
