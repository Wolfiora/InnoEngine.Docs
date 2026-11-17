(() => {
  const root = document.documentElement;
  const viewport = root.clientWidth || innerWidth;
  const positive = value => typeof value === 'number' && Number.isFinite(value) && value > 0;
  try {
    const sidebar = JSON.parse(sessionStorage.getItem('inno-sidebar-layout-v1') || 'null');
    if (sidebar && positive(sidebar.contentWidth) && matchMedia('(min-width: 50rem)').matches) {
      root.style.setProperty('--inno-sidebar-content-width', sidebar.contentWidth + 'px');
      root.style.setProperty('--inno-sidebar-width', Math.min(sidebar.contentWidth, viewport / 3) + 'px');
      if (Number.isFinite(sidebar.gutter) && sidebar.gutter >= 0)
        root.style.setProperty('--inno-sidebar-gutter', sidebar.gutter + 'px');
    }
    const toc = JSON.parse(sessionStorage.getItem('inno-toc-layout-v1') || 'null');
    if (matchMedia('(min-width: 72rem)').matches) {
      const saved = Number(sessionStorage.getItem('inno-docs-toc-width'));
      const ratio = saved > 0 && saved <= .5 ? saved : .25;
      const max = viewport / 2;
      const min = Math.min(max, toc && positive(toc.min) ? toc.min : 0);
      const width = Math.min(max, Math.max(min, viewport * ratio));
      root.style.setProperty('--inno-toc-width', width + 'px');
      if (toc && positive(toc.left)) root.style.setProperty('--inno-toc-art-left', toc.left + 'px');
      root.style.setProperty('--inno-toc-art-opacity', String(.05 + .75 * (max === min ? 0 : (width - min) / (max - min))));
    }
  } catch { /* Storage is optional; CSS and the component measurements remain usable. */ }
})();
