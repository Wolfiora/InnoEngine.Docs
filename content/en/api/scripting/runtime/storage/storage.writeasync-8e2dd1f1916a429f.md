---
uid: api.8e2dd1f1916a429f8bc4f29abd75aaf3264686b6690cae0ff4e56321b26db9ae
symbol: "scripting:Inno.Storage:M:InnoEngine.Storage.Storage.WriteAsync(InnoEngine.Storage.StorageKey,System.ReadOnlyMemory{System.Byte},System.Threading.CancellationToken)"
source: xml
reviewed: 1c31f7c81227f5347da1796376fbd4ba577f27a2b9809ab500bc25cd28941511
title: "Storage.WriteAsync"
kind: api
owners: [Inno.Storage]
apiSurface: editor-script
apiScope: Runtime
---

Atomically replaces a complete value.

**Parameter `key`:** The sandbox-relative storage key.

**Parameter `value`:** The complete value to commit.

**Parameter `cancellationToken`:** Cancellation requested by the caller.

**Returns:** A task that completes after commit.
