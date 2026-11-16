class HeaderLayout extends HTMLElement {
  observer?: ResizeObserver;
  events?: AbortController;
  frame = 0;
  connectedCallback() {
    this.events = new AbortController();
    this.observer = new ResizeObserver(this.schedule);
    // At the minimum body width, resizing the TOC can move the body without
    // changing its width, because the navigation column shrinks at the same time.
    for (const element of document.querySelectorAll('.main-pane, .sl-markdown-content, .sidebar-pane, .right-sidebar-container')) this.observer.observe(element);
    window.addEventListener('resize', this.schedule, { signal: this.events.signal });
    document.fonts.ready.then(() => { if (this.isConnected) this.schedule(); });
    this.schedule();
  }
  disconnectedCallback() {
    this.observer?.disconnect();
    this.events?.abort();
    cancelAnimationFrame(this.frame);
  }
  schedule = () => {
    cancelAnimationFrame(this.frame);
    this.frame = requestAnimationFrame(() => {
      const content = document.querySelector('.sl-markdown-content');
      if (!content || !document.documentElement.hasAttribute('data-has-toc') || !matchMedia('(min-width: 72rem)').matches) return;
      const bounds = content.getBoundingClientRect(), header = this.getBoundingClientRect();
      this.style.setProperty('--inno-search-left', `${bounds.left - header.left}px`);
      this.style.setProperty('--inno-search-width', `${bounds.width}px`);
    });
  };
}
if (!customElements.get('inno-header-layout')) customElements.define('inno-header-layout', HeaderLayout);
