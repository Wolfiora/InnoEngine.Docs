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
  lifecycle = new AbortController();
  closing = new Map<HTMLElement, ReturnType<typeof setTimeout>>();
  measure = document.createElement('canvas').getContext('2d');
  widthFrame = 0;
  connectedCallback() {
    if (this.dataset.ready) return;
    this.dataset.ready = 'true';
    try {
      const saved = JSON.parse(sessionStorage.getItem(this.storageKey) ?? '{}');
      if (saved && typeof saved === 'object' && !Array.isArray(saved)) this.state = saved;
    } catch { /* Optional storage. */ }
    this.markCurrent(this);
    this.addEventListener('click', event => {
      const button = (event.target as Element).closest<HTMLButtonElement>('button[data-children]');
      if (button && this.contains(button)) void this.toggle(button);
    }, { signal: this.lifecycle.signal });
    addEventListener('resize', this.queueWidth, { signal: this.lifecycle.signal });
    document.fonts.ready.then(() => { if (this.isConnected) this.queueWidth(); });
    void this.restore();
    const scroller = document.getElementById('starlight__sidebar');
    if (scroller) addEventListener('pagehide', () => {
      try { sessionStorage.setItem('inno-sidebar-scroll-v2', String(scroller.scrollTop)); } catch { /* Optional storage. */ }
    }, { once: true, signal: this.lifecycle.signal });
  }
  disconnectedCallback() {
    this.lifecycle.abort();
    cancelAnimationFrame(this.widthFrame);
    for (const timer of this.closing.values()) clearTimeout(timer);
    this.closing.clear();
    document.documentElement.removeAttribute('data-sidebar-restoring');
  }
  queueWidth = () => {
    cancelAnimationFrame(this.widthFrame);
    this.widthFrame = requestAnimationFrame(() => this.fitWidth());
  };
  fitWidth() {
    if (!this.isConnected || !this.measure) return;
    const html = document.documentElement;
    if (!matchMedia('(min-width: 50rem)').matches) { html.style.removeProperty('--inno-sidebar-width'); return; }
    const pane = this.closest<HTMLElement>('.sidebar-pane');
    if (!pane) return;
    // The stable inner layout must fit the scrollport, not extend underneath its scrollbar.
    html.style.setProperty('--inno-sidebar-gutter', `${pane.offsetWidth - pane.clientWidth}px`);
    const paneStyle = getComputedStyle(pane.querySelector('.sidebar-content')!);
    const inset = parseFloat(paneStyle.paddingLeft) + parseFloat(paneStyle.paddingRight);
    const rem = parseFloat(getComputedStyle(html).fontSize);
    const rowInset = parseFloat(getComputedStyle(this.querySelector('.nav-row')!).marginInlineStart);
    let width = 18 * rem;
    for (const label of this.querySelectorAll<HTMLElement>('.nav-label')) {
      if (label.closest('.children:not([data-open="true"])')) continue;
      const style = getComputedStyle(label);
      // Measure unwrapped text rather than the current (possibly mid-transition) column.
      // Reserve the selected weight so highlighting cannot change the target width.
      this.measure.font = `650 ${style.fontSize} ${style.fontFamily}`;
      let depth = 0;
      for (let parent = label.parentElement; parent && parent !== this; parent = parent.parentElement) {
        if (parent.classList.contains('children')) depth++;
      }
      const spacing = parseFloat(style.letterSpacing) || 0;
      const text = label.textContent ?? '';
      width = Math.max(width, this.measure.measureText(text).width + Math.max(0, text.length - 1) * spacing
        + depth * (.85 * rem + 1) + rowInset + 2.5 * rem + inset + 24);
    }
    html.style.setProperty('--inno-sidebar-width', `${Math.ceil(Math.min(width, html.clientWidth / 2))}px`);
  }
  async restore() {
    this.dataset.restoring = 'true';
    document.documentElement.setAttribute('data-sidebar-restoring', '');
    await Promise.all([...this.querySelectorAll<HTMLButtonElement>('button[data-children]')]
      .filter(button => this.state[button.closest('li')!.dataset.key!] === true)
      .map(button => this.toggle(button, false)));
    if (!this.isConnected) return;
    this.fitWidth();
    const scroller = document.getElementById('starlight__sidebar');
    try { if (scroller) scroller.scrollTop = Number(sessionStorage.getItem('inno-sidebar-scroll-v2')) || 0; } catch { /* Optional storage. */ }
    // Flush the restored geometry before enabling interactive transitions.
    this.getBoundingClientRect();
    delete this.dataset.restoring;
    document.documentElement.removeAttribute('data-sidebar-restoring');
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
        const caret = document.createElement('span'); caret.className = 'caret'; caret.setAttribute('aria-hidden', 'true'); button.append(caret);
        if (!entry.href) { const label = document.createElement('span'); label.className = 'nav-label'; label.textContent = entry.label; button.append(label); }
        row.append(button);
      }
      if (entry.href) { const a = document.createElement('a'); a.className = 'nav-label'; a.href = entry.href; a.textContent = entry.label; row.append(a); }
      li.append(row); ul.append(li);
    }
    return ul;
  }
  markCurrent(root: ParentNode) {
    for (const a of root.querySelectorAll<HTMLAnchorElement>('a')) if (a.pathname === location.pathname) a.setAttribute('aria-current', 'page');
  }
  async preparePanel(button: HTMLButtonElement): Promise<HTMLElement> {
    const entries = await load(button.dataset.children!);
    const panel = document.createElement('div'); panel.className = 'children'; panel.hidden = true;
    panel.dataset.open = 'false'; panel.inert = true;
    panel.id = 'nav-' + button.dataset.children!.split('/').pop()!.replace('.json', '');
    const inner = document.createElement('div'); inner.className = 'children-inner';
    inner.append(this.render(entries)); panel.append(inner); this.markCurrent(panel);
    // Restore remembered descendants while detached: a newly shown branch never
    // paints an incomplete subtree or changes height after its opening animation.
    await Promise.all([...panel.querySelectorAll<HTMLButtonElement>('button[data-children]')].map(async child => {
      if (this.state[child.closest('li')!.dataset.key!] !== true) return;
      try {
        const subtree = await this.preparePanel(child);
        subtree.hidden = false; subtree.inert = false; subtree.dataset.open = 'true';
        child.setAttribute('aria-expanded', 'true'); child.setAttribute('aria-controls', subtree.id);
        child.closest('li')!.append(subtree);
      } catch { /* Leave this child closed and retryable without failing its parent. */ }
    }));
    return panel;
  }
  async toggle(button: HTMLButtonElement, animate = true) {
    if (button.getAttribute('aria-busy') === 'true') return;
    const li = button.closest('li')!;
    const opening = button.getAttribute('aria-expanded') !== 'true';
    let panel = li.querySelector<HTMLElement>(':scope > .children');
    if (opening && !panel) {
      button.setAttribute('aria-busy', 'true');
      try {
        panel = await this.preparePanel(button);
        if (!this.isConnected) return;
        li.append(panel); button.setAttribute('aria-controls', panel.id);
        li.querySelector(':scope > .nav-error')?.remove();
      } catch {
        if (!li.querySelector(':scope > .nav-error')) { const message = document.createElement('p'); message.className = 'nav-error'; message.setAttribute('role', 'status'); message.textContent = 'Navigation unavailable. Use the expand button to retry, or browse the category tables.'; li.append(message); }
        return;
      } finally { button.removeAttribute('aria-busy'); }
    }
    if (!panel) return;
    clearTimeout(this.closing.get(panel)); this.closing.delete(panel);
    panel.hidden = false;
    // The closed grid is established before any expanded styles can paint.
    if (opening && panel.dataset.open !== 'true') panel.getBoundingClientRect();
    button.setAttribute('aria-expanded', String(opening));
    panel.inert = !opening;
    panel.dataset.open = String(opening);
    this.state[li.dataset.key!] = opening;
    try { sessionStorage.setItem(this.storageKey, JSON.stringify(this.state)); } catch { /* Optional storage. */ }
    this.fitWidth();
    if (!opening) {
      if (!animate || matchMedia('(prefers-reduced-motion: reduce)').matches) panel.hidden = true;
      else {
        const closingPanel = panel;
        this.closing.set(closingPanel, setTimeout(() => {
          if (closingPanel.dataset.open === 'false') closingPanel.hidden = true;
          this.closing.delete(closingPanel);
        }, 220));
      }
    }
  }
}
if (!customElements.get('inno-sidebar')) customElements.define('inno-sidebar', InnoSidebar);
