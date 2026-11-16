import { tableWidths } from './table-widths';

class ContentTables extends HTMLElement {
  observer?: ResizeObserver;
  events?: AbortController;
  frame = 0;
  measuredWidth = -1;
  tables: { table: HTMLTableElement; columns: HTMLTableColElement[]; preferred: number[]; minimum: number[] }[] = [];
  connectedCallback() {
    this.events = new AbortController();
    // ResizeObserver runs before paint. Do not defer widths to the next frame:
    // stale pixel columns would briefly overflow the newly narrowed scrollport.
    this.observer = new ResizeObserver(this.resize);
    this.observer.observe(this);
    document.fonts.addEventListener('loadingdone', this.invalidate, { signal: this.events.signal });
    document.fonts.ready.then(() => { if (this.isConnected) this.invalidate(); });
    this.schedule();
  }
  disconnectedCallback() {
    this.observer?.disconnect();
    this.events?.abort();
    cancelAnimationFrame(this.frame);
  }
  invalidate = () => { this.tables = []; this.measuredWidth = -1; this.schedule(); };
  measure() {
    for (const table of this.querySelectorAll<HTMLTableElement>('.sl-markdown-content table')) {
      // Ordinary Markdown tables have one cell per column. Spanning authored HTML
      // retains the browser's accessible automatic table layout.
      if ([...table.rows].some(row => [...row.cells].some(cell => cell.colSpan !== 1 || cell.rowSpan !== 1))) continue;
      const clone = table.cloneNode(true) as HTMLTableElement;
      clone.querySelector('colgroup[data-inno-columns]')?.remove();
      clone.removeAttribute('style');
      clone.removeAttribute('data-inno-sized');
      clone.removeAttribute('id');
      clone.querySelectorAll('[id]').forEach(element => element.removeAttribute('id'));
      clone.classList.add('inno-table-measure');
      clone.setAttribute('aria-hidden', 'true');
      clone.inert = true;
      table.parentElement!.append(clone);
      const cells = [...(clone.rows[0]?.cells ?? [])];
      const preferred = cells.map(cell => cell.getBoundingClientRect().width);
      const minimum = cells.map(cell => {
        const style = getComputedStyle(cell);
        const text = document.createRange();
        text.selectNodeContents(cell);
        return Math.ceil(text.getBoundingClientRect().width + parseFloat(style.paddingLeft)
          + parseFloat(style.paddingRight) + parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth));
      });
      clone.remove();
      if (!cells.length) continue;
      if (!table.parentElement!.classList.contains('inno-table-scroll')) {
        const scroll = document.createElement('div');
        scroll.className = 'inno-table-scroll';
        table.before(scroll);
        scroll.append(table);
      }
      table.querySelector('colgroup[data-inno-columns]')?.remove();
      const group = document.createElement('colgroup');
      group.dataset.innoColumns = '';
      const columns = preferred.map(() => group.appendChild(document.createElement('col')));
      table.prepend(group);
      this.tables.push({ table, columns, preferred, minimum });
    }
  }
  schedule = () => {
    cancelAnimationFrame(this.frame);
    this.frame = requestAnimationFrame(this.resize);
  };
  resize = () => {
      const width = this.getBoundingClientRect().width;
      if (!width || Math.abs(width - this.measuredWidth) < .1) return;
      if (!this.tables.length) this.measure();
      this.measuredWidth = width;
      for (const { table, columns, preferred, minimum } of this.tables) {
        const scroll = table.parentElement!;
        const floor = minimum.reduce((sum, value) => sum + value, 0);
        const widths = tableWidths(preferred, minimum, scroll.clientWidth);
        const total = widths.reduce((sum, value) => sum + value, 0);
        columns.forEach((column, index) => { column.style.width = `${100 * widths[index] / total}%`; });
        // Percent columns cannot retain a previous frame's oversized table.
        // The intrinsic heading floor alone decides when scrolling is needed.
        table.style.minWidth = `${floor}px`;
        table.style.width = '100%';
        scroll.style.overflowX = scroll.clientWidth < floor ? 'auto' : 'clip';
        table.dataset.innoSized = '';
      }
  };
}
if (!customElements.get('inno-content-tables')) customElements.define('inno-content-tables', ContentTables);
