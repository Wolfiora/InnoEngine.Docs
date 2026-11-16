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
      // Round intrinsic widths up, not down: a subpixel deficit can wrap a word
      // that fitted exactly in the measurement clone.
      const preferred = cells.map(cell => Math.ceil(cell.getBoundingClientRect().width));
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
      if (!width || width === this.measuredWidth) return;
      if (!this.tables.length) this.measure();
      this.measuredWidth = width;
      // Read every scrollport before writing any table layout. clientWidth is an
      // integer; using it to calculate percentages made otherwise fixed columns
      // alternately grow and shrink at each fractional resize step.
      const available = this.tables.map(({table}) => table.parentElement!.getBoundingClientRect().width);
      for (const [index, { table, columns, preferred, minimum }] of this.tables.entries()) {
        const scroll = table.parentElement!;
        const floor = minimum.reduce((sum, value) => sum + value, 0);
        const widths = tableWidths(preferred, minimum, available[index]);
        const total = widths.reduce((sum, value) => sum + value, 0);
        columns.forEach((column, index) => { column.style.width = `${widths[index]}px`; });
        // Set the table and columns together before paint. Only heading floors
        // can exceed the scrollport; short natural-width columns stay constant.
        table.style.minWidth = `${floor}px`;
        table.style.width = `${total}px`;
        scroll.style.overflowX = available[index] < floor ? 'auto' : 'clip';
        table.dataset.innoSized = '';
      }
  };
}
if (!customElements.get('inno-content-tables')) customElements.define('inno-content-tables', ContentTables);
