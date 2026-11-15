const storageKey = 'inno-docs-toc-width';

class TocResizer extends HTMLElement {
  ratio: number | null = null;
  pointer: number | null = null;
  pointerOffset = 0;
  events?: AbortController;
  observer?: ResizeObserver;
  connectedCallback() {
    this.events = new AbortController();
    const options = { signal: this.events.signal };
    try {
      const saved = Number(sessionStorage.getItem(storageKey));
      if (saved > 0 && saved <= .5) this.ratio = saved;
    } catch { /* Storage is optional. */ }
    this.addEventListener('pointerdown', this.start, options);
    this.addEventListener('pointermove', this.move, options);
    this.addEventListener('pointerup', this.stop, options);
    this.addEventListener('pointercancel', this.stop, options);
    this.addEventListener('lostpointercapture', this.stop, options);
    this.addEventListener('keydown', this.key, options);
    this.addEventListener('blur', this.clearPointerFocus, options);
    this.addEventListener('dblclick', this.reset, options);
    window.addEventListener('resize', this.update, options);
    window.addEventListener('blur', this.stop, options);
    const title = document.getElementById('starlight__on-this-page');
    if (title) { this.observer = new ResizeObserver(this.update); this.observer.observe(title); }
    document.fonts.ready.then(() => { if (this.isConnected) this.update(); });
    this.update();
  }
  disconnectedCallback() {
    this.events?.abort();
    this.observer?.disconnect();
    this.stop();
  }
  bounds() {
    const title = document.getElementById('starlight__on-this-page');
    const panel = document.querySelector('.right-sidebar-panel');
    const padding = panel ? getComputedStyle(panel) : null;
    // The unwrapped heading supplies the actual minimum, including font/zoom changes.
    const range = document.createRange();
    if (title) range.selectNodeContents(title);
    const textWidth = title ? range.getBoundingClientRect().width : 200;
    const max = document.documentElement.clientWidth / 2;
    const min = Math.min(max, Math.ceil(textWidth + (parseFloat(padding?.paddingLeft ?? '16') + parseFloat(padding?.paddingRight ?? '16')) + 2));
    return { min, max };
  }
  update = () => {
    if (!matchMedia('(min-width: 72rem)').matches) { this.stop(); return; }
    const viewport = document.documentElement.clientWidth;
    const { min, max } = this.bounds();
    const width = Math.min(max, Math.max(min, viewport * (this.ratio ?? 1 / 3)));
    document.documentElement.style.setProperty('--inno-toc-width', `${width}px`);
    this.setAttribute('aria-valuemin', String(Math.ceil(min)));
    this.setAttribute('aria-valuemax', String(Math.floor(max)));
    this.setAttribute('aria-valuenow', String(Math.round(width)));
    this.setAttribute('aria-valuetext', `${Math.round(width)} pixels`);
  };
  setWidth(width: number) {
    const { min, max } = this.bounds();
    this.ratio = Math.min(max, Math.max(min, width)) / document.documentElement.clientWidth;
    this.update();
    try { sessionStorage.setItem(storageKey, String(this.ratio)); } catch { /* Storage is optional. */ }
  }
  start = (event: PointerEvent) => {
    if (event.button !== 0 || !matchMedia('(min-width: 72rem)').matches) return;
    event.preventDefault();
    this.pointer = event.pointerId;
    this.pointerOffset = event.clientX - this.closest('.right-sidebar')!.getBoundingClientRect().left;
    this.setPointerCapture(event.pointerId);
    // Programmatic focus on a fresh page may match :focus-visible even for a mouse drag.
    // Keep keyboard access, but do not leave its stronger focus paint behind after release.
    this.dataset.pointerFocus = '';
    this.focus({ preventScroll: true });
    document.documentElement.dataset.tocResizing = '';
  };
  move = (event: PointerEvent) => {
    if (this.pointer !== event.pointerId) return;
    // The layout edge can differ from clientWidth when a scrollbar gutter is reserved.
    const right = this.closest('.right-sidebar-container')!.getBoundingClientRect().right;
    this.setWidth(right - event.clientX + this.pointerOffset);
  };
  stop = () => {
    const pointer = this.pointer;
    this.pointer = null;
    if (pointer !== null && this.hasPointerCapture(pointer)) this.releasePointerCapture(pointer);
    delete document.documentElement.dataset.tocResizing;
  };
  clearPointerFocus = () => { delete this.dataset.pointerFocus; };
  key = (event: KeyboardEvent) => {
    this.clearPointerFocus();
    const width = Number(this.getAttribute('aria-valuenow'));
    const { min, max } = this.bounds();
    const widths: Record<string, number> = { ArrowLeft: width + 16, ArrowRight: width - 16, Home: min, End: max };
    const next = widths[event.key];
    if (next === undefined) return;
    event.preventDefault();
    this.setWidth(next);
  };
  reset = () => {
    this.ratio = null;
    try { sessionStorage.removeItem(storageKey); } catch { /* Storage is optional. */ }
    this.update();
  };
}
if (!customElements.get('inno-toc-resizer')) customElements.define('inno-toc-resizer', TocResizer);
