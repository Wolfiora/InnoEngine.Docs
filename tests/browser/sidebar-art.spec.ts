import {test,expect} from '@playwright/test';
test('TOC logo follows heading center and resize opacity bounds',async({page})=>{
 await page.setViewportSize({width:1600,height:1000});await page.goto('api/engine/animation/animation/');
 const divider=page.getByRole('separator',{name:'Resize table of contents'}),logo=page.locator('.toc-art svg');await divider.focus();
 for(const [key,opacity]of [['Home','0.05'],['End','0.8']]){
  await page.keyboard.press(key);await expect(logo).toHaveCSS('opacity',opacity);
  expect(await logo.evaluate(svg=>{const r=document.createRange();r.selectNodeContents(document.getElementById('starlight__on-this-page')!);const t=r.getBoundingClientRect();return Math.abs(svg.getBoundingClientRect().left-t.left-t.width/2);})).toBeLessThan(1);
 }
 await page.keyboard.press('ArrowRight');expect(Number(await logo.evaluate(e=>getComputedStyle(e).opacity))).toBeLessThan(.8);
 await expect(page.locator('.toc-art')).toHaveAttribute('aria-hidden','true');
});
test('sidebar caps at one third and long labels scroll without abbreviation',async({page})=>{
 await page.setViewportSize({width:1600,height:1000});await page.goto('api/engine/animation/animation/');
 await expect(page.locator('inno-sidebar [aria-current="page"]')).toBeVisible();
 await expect(page.getByRole('button',{name:'Toggle compact sidebar'})).toHaveCount(0);
 await page.locator('inno-sidebar [aria-current="page"]').evaluate(e=>e.textContent='LongIdentifier'.repeat(25));
 await page.evaluate(()=>window.dispatchEvent(new Event('resize')));
 const pane=page.locator('.sidebar-pane');
 await expect.poll(()=>pane.evaluate(e=>e.scrollWidth-e.clientWidth)).toBeGreaterThan(100);
 await expect.poll(()=>pane.evaluate(e=>e.getBoundingClientRect().width)).toBeLessThanOrEqual(1600 / 3 + 1);
 await expect(page.locator('inno-sidebar [aria-current="page"]')).toHaveCSS('white-space','nowrap');
});
