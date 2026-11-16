import { expect, test } from '@playwright/test';

test('direct pages reveal the selected sidebar path despite remembered closed groups', async ({ page }) => {
  await page.goto('');
  await expect(page.locator('inno-sidebar [aria-current="page"]')).toHaveCount(0);
  await page.evaluate(() => sessionStorage.setItem('inno-sidebar-disclosures-v2', JSON.stringify({
    '/InnoEngine.Docs/api/': false, '/InnoEngine.Docs/api/engine/': false,
  })));
  await page.goto('api/engine/animation/animation/');
  const menu=page.getByRole('button',{name:/Menu/});
  if(await menu.isVisible()) await menu.click();
  const current=page.locator('inno-sidebar [aria-current="page"]');
  await expect(current).toHaveText('Animation');
  await expect(current).toBeVisible();
  const member=page.locator('.sl-markdown-content table a').filter({hasText:'Animation.Play'}).first();
  const href=await member.getAttribute('href');
  await page.goto(href!);
  if(await menu.isVisible()) await menu.click();
  await expect(current).toHaveText(/Animation.Play/);
  await expect(current).toBeVisible();
  await page.reload();
  if(await menu.isVisible()) await menu.click();
  await expect(current).toHaveText(/Animation.Play/);
  await expect(current).toBeVisible();
  await page.goto('');
  await expect(page.locator('inno-sidebar [aria-current="page"]')).toHaveCount(0);
  await page.getByRole('button', { name: 'Search', exact: true }).click();
  const search=page.getByRole('dialog', {name:'Search',exact:true});
  await search.getByRole('textbox',{name:'Search',exact:true}).fill('Animation.Play');
  await search.locator('a[href*="/animation/animation/animation.play-"]').first().click();
  if(await menu.isVisible()) await menu.click();
  await expect(current).toHaveText(/Animation.Play/);
  await expect(current).toBeVisible();
});

test('table resizing scrolls only below the combined heading floors', async ({ page }, testInfo) => {
  await page.goto('api/engine/animation/animation/');
  const table=page.locator('.sl-markdown-content table').first();
  await expect(table).toHaveAttribute('data-inno-sized','');
  const samples=await table.evaluate(async element => {
    const table=element as HTMLTableElement, container=table.closest<HTMLElement>('inno-content-tables')!;
    const scroll=table.parentElement!;
    const minimum=parseFloat(table.style.minWidth);
    const initial=container.getBoundingClientRect().width;
    const samples=[];
    // Observe after each paint, including continuous transitions, rather than only settled frames.
    container.style.transition='width 180ms linear';
    for(const target of [minimum+30,initial,minimum+1,minimum-25,initial]) {
      container.style.width=`${target}px`;
      const end=performance.now()+260;
      while(performance.now()<end) {
        await new Promise(resolve => requestAnimationFrame(() => setTimeout(resolve, 0)));
        samples.push({width:scroll.clientWidth,overflow:scroll.scrollWidth-scroll.clientWidth,minimum,
          scrolling:getComputedStyle(scroll).overflowX === 'auto',
          columns:[...table.querySelectorAll('th')].map(cell=>({width:cell.getBoundingClientRect().width,overflow:cell.scrollWidth-cell.clientWidth})),
          assigned:[...table.querySelectorAll('col')].map(col=>col.style.width)});
      }
    }
    return samples;
  });
  await testInfo.attach('resize-samples', {body:JSON.stringify(samples),contentType:'application/json'});
  expect(samples.some(s=>s.width<s.minimum-5 && s.overflow>5 && s.scrolling)).toBe(true);
  for(const sample of samples.filter(s=>s.width>=s.minimum)) {
    expect(sample.scrolling).toBe(false);
  }
  // Layout may report intermediate text bounds while the resize observer catches
  // up; they must not become a scrollbar. Settled cells must fit without clipping.
  await expect.poll(() => table.evaluate(element => Math.max(...[...element.querySelectorAll('th,td')]
    .map(cell => cell.scrollWidth-cell.clientWidth)))).toBeLessThanOrEqual(1);
});

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
