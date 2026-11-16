import { expect, test } from '@playwright/test';

test('page footer credits the creator and pagination stays within the current parent', async ({ page }) => {
  await page.goto('architecture/overview/');
  const pagination = page.getByRole('navigation', { name: 'Sibling pages' });
  await expect(pagination.locator('[rel="prev"]')).toHaveCount(0);
  await expect(pagination.locator('[rel="next"]')).toHaveAttribute('href', /\/architecture\//);
  await expect(page.locator('.page-credit')).toContainText('Website created by FLwolfy');
  await expect(page.locator('.page-credit')).not.toContainText('XML');
  await page.goto('api/engine/core/identity/identityobject/');
  await expect(page.locator('.page-credit')).toContainText('Page written by InnoEngine contributors.');
  await expect(page.locator('.page-credit')).not.toContainText('Generated automatically');
  await page.goto('api/engine/animation/animation/');
  await expect(page.locator('.page-credit')).toContainText('Generated automatically from engine source XML');
  const member = page.locator('.sl-markdown-content table a').filter({hasText:'Animation.Play'}).first();
  await page.goto((await member.getAttribute('href'))!);
  const links = page.locator('.pagination-links a');
  expect(await links.count()).toBeGreaterThan(0);
  for (const link of await links.all()) await expect(link).toHaveAttribute('href', /\/api\/engine\/animation\/animation\/[^/]+\/$/);
  await page.goto('');
  await expect(page.locator('.pagination-links')).toHaveCount(0);
});
