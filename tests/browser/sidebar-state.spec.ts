import {expect,test} from '@playwright/test';
test('compact sidebar persists through member navigation and restores full names',async({page})=>{
 await page.goto('api/engine/animation/animation/');
 const toggle=page.getByRole('button',{name:'Toggle compact sidebar'});
 if(!await toggle.isVisible())return;
 await expect(page.locator('inno-sidebar [aria-current="page"]')).toHaveText('Animation');
 await toggle.click();
 await expect(page.locator('inno-sidebar [aria-current="page"]')).toHaveText('A…');
 const link=page.locator('.sl-markdown-content table a').filter({hasText:'Animation.Play'}).first();
 await link.click();
 await expect(page.locator('inno-sidebar [aria-current="page"]')).toHaveText('A…');
 await expect(toggle).toHaveAttribute('aria-pressed','true');
 await toggle.click();
 await expect(page.locator('inno-sidebar [aria-current="page"]')).toHaveText('Animation');
});
test('restored nested branches leave no reserved height after navigation or resizing',async({page})=>{
 await page.goto('api/engine/animation/animation/');
 const menu=page.getByRole('button',{name:/Menu/});if(await menu.isVisible())await menu.click();
 await expect(page.locator('inno-sidebar [aria-current="page"]')).toBeVisible();
 for(const width of [1440,1100,1600]){
  await page.setViewportSize({width,height:1000});
  await expect.poll(()=>page.locator('inno-sidebar .children[data-open="true"]').evaluateAll(panels=>Math.max(0,...panels.map(panel=>Math.abs(panel.getBoundingClientRect().height-panel.firstElementChild!.getBoundingClientRect().height))))).toBeLessThan(2);
 }
 await page.reload();await expect(page.locator('inno-sidebar [aria-current="page"]')).toBeVisible();
 await expect.poll(()=>page.locator('inno-sidebar .children[data-open="true"]').evaluateAll(panels=>Math.max(0,...panels.map(panel=>Math.abs(panel.getBoundingClientRect().height-panel.firstElementChild!.getBoundingClientRect().height))))).toBeLessThan(2);
});
