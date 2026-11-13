---
uid: api.05d3e6b42fb53bf759e5da4586a608e7e78823ab7002aab8f9125f45163e0844
symbol: "engine:Inno.Tooling.Documentation:M:Inno.Tooling.Documentation.DocumentationSnapshot.ExportCatalogAsync(System.Threading.CancellationToken)"
source: xml
reviewed: c7df5358c63726c91eb65190cb43975f9e366440f1908d825c6e16418ccd8fe6
title: "ExportCatalogAsync"
kind: api
owners: [Inno.Tooling.Documentation]
apiSurface: source-clr
---

Exports canonical metadata for coverage, navigation and rendered-anchor verification. Reads protected cached pages only; it does not rescan a checkout or refresh the snapshot.

**Parameter `cancellationToken`:** Cancels reads without changing the selected generation or source content.

**Returns:** Complete page and project metadata. Missing project entries remain null; API evidence remains explicit.

**Exception `T:System.IO.IOException`:** A cached page is missing, corrupt or outside its owned boundary.

**Exception `T:System.InvalidOperationException`:** The session was opened for a different engine source tree.

**Exception `T:System.OperationCanceledException`:** Export was canceled before the complete report was returned.

**Exception `T:System.ObjectDisposedException`:** The session has released its reading protection.
