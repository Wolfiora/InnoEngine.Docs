import {expect,test} from '@playwright/test';
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
