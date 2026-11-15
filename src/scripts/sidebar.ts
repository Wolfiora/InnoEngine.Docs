type Entry = { label: string; href?: string; key?: string; children?: string };
const loads = new Map<string, Promise<Entry[]>>();
async function load(url: string): Promise<Entry[]> {
  if (!loads.has(url)) loads.set(url, fetch(url, { cache: 'force-cache' }).then(async response => {
    if (!response.ok) throw new Error('Navigation could not be loaded.');
    const entries = await response.json();
    if (!Array.isArray(entries) || entries.some(entry => typeof entry.label !== 'string'
      || (entry.href && !entry.href.startsWith('/InnoEngine.Docs/'))
      || (entry.children && !/^\/InnoEngine\.Docs\/navigation-data\/[a-f0-9]{64}\.json$/.test(entry.children)))) throw new Error('Invalid navigation resource.');
    return entries;
  }).catch(error => { loads.delete(url); throw error; }));
  return loads.get(url)!;
}
class InnoSidebar extends HTMLElement {
  state: Record<string, boolean> = {};
  storageKey = 'inno-sidebar-disclosures-v2';
  connectedCallback() {
    if (this.dataset.ready) return;
    this.dataset.ready = 'true';
    try {
      const saved = JSON.parse(sessionStorage.getItem(this.storageKey) ?? '{}');
      if (saved && typeof saved === 'object' && !Array.isArray(saved)) this.state = saved;
    } catch { /* Optional storage. */ }
    this.bind(this);
    const scroller = document.getElementById('starlight__sidebar');
    if (scroller) addEventListener('pagehide', () => {
      try { sessionStorage.setItem('inno-sidebar-scroll-v2', String(scroller.scrollTop)); } catch { /* Optional storage. */ }
    }, { once: true });
  }
  render(entries: Entry[]) {
    const ul = document.createElement('ul');
    for (const entry of entries) {
      const li = document.createElement('li');
      if (entry.key) li.dataset.key = entry.key;
      const row = document.createElement('div'); row.className = 'nav-row';
      if (entry.children) {
        const button = document.createElement('button'); button.type = 'button';
        button.className = 'toggle' + (entry.href ? '' : ' whole-row');
        button.dataset.children = entry.children; button.setAttribute('aria-expanded', 'false');
        button.setAttribute('aria-label', `Toggle ${entry.label}`);
        const caret = document.createElement('span'); caret.className = 'caret'; caret.textContent = '+'; caret.setAttribute('aria-hidden', 'true'); button.append(caret);
        if (!entry.href) { const label = document.createElement('span'); label.textContent = entry.label; button.append(label); }
        row.append(button);
      }
      if (entry.href) { const a = document.createElement('a'); a.href = entry.href; a.textContent = entry.label; row.append(a); }
      li.append(row); ul.append(li);
    }
    return ul;
  }
  bind(root: ParentNode) {
    for (const a of root.querySelectorAll<HTMLAnchorElement>('a')) if (a.pathname === location.pathname) a.setAttribute('aria-current', 'page');
    for (const button of root.querySelectorAll<HTMLButtonElement>('button[data-children]')) {
      button.addEventListener('click', () => void this.toggle(button));
      const identity = button.closest('li')!.dataset.key!;
      if (this.state[identity] === true) void this.toggle(button, false);
    }
  }
  async toggle(button: HTMLButtonElement, animate = true) {
    if (button.getAttribute('aria-busy') === 'true') return;
    const li = button.closest('li')!;
    const opening = button.getAttribute('aria-expanded') !== 'true';
    let panel = li.querySelector<HTMLElement>(':scope > .children');
    if (opening && !panel) {
      button.setAttribute('aria-busy', 'true');
      try {
        const entries = await load(button.dataset.children!);
        panel = document.createElement('div'); panel.className = 'children'; panel.hidden = true;
        panel.id = 'nav-' + button.dataset.children!.split('/').pop()!.replace('.json', '');
        panel.append(this.render(entries)); li.append(panel); button.setAttribute('aria-controls', panel.id);
        li.querySelector(':scope > .nav-error')?.remove(); this.bind(panel);
      } catch {
        if (!li.querySelector(':scope > .nav-error')) { const message = document.createElement('p'); message.className = 'nav-error'; message.setAttribute('role', 'status'); message.textContent = 'Navigation unavailable. Select + to retry, or use the category tables.'; li.append(message); }
        return;
      } finally { button.removeAttribute('aria-busy'); }
    }
    if (!panel) return;
    const start = panel.hidden ? 0 : panel.getBoundingClientRect().height;
    for (const animation of panel.getAnimations()) animation.cancel();
    panel.hidden = false;
    button.setAttribute('aria-expanded', String(opening));
    button.querySelector('.caret')!.textContent = opening ? '−' : '+';
    this.state[li.dataset.key!] = opening;
    try { sessionStorage.setItem(this.storageKey, JSON.stringify(this.state)); } catch { /* Optional storage. */ }
    if (animate && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const animation = panel.animate([{ height: `${start}px`, opacity: opening ? .45 : 1 }, { height: `${opening ? panel.scrollHeight : 0}px`, opacity: opening ? 1 : .45 }], { duration: 190, easing: 'cubic-bezier(.2,.7,.3,1)' });
      try { await animation.finished; } catch { return; }
    }
    panel.hidden = !opening;
    if (!animate) {
      const scroller = document.getElementById('starlight__sidebar');
      try { if (scroller) scroller.scrollTop = Number(sessionStorage.getItem('inno-sidebar-scroll-v2')) || 0; } catch { /* Optional storage. */ }
    }
  }
}
if (!customElements.get('inno-sidebar')) customElements.define('inno-sidebar', InnoSidebar);
