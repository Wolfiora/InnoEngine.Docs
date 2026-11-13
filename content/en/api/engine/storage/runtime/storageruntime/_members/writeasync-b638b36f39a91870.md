---
uid: api.b638b36f39a9187074e96292a59994d5a395534e29788d08b1cc85111a684fc9
symbol: "engine:Inno.Storage.Runtime:M:Inno.Storage.Runtime.StorageRuntime.WriteAsync(Inno.Storage.StorageKey,System.ReadOnlyMemory{System.Byte},System.Threading.CancellationToken)"
source: xml
reviewed: d9627b2d86b75d8c8709697170de13218fcaafd85c56838a82fb7be5bc893627
title: "WriteAsync"
kind: api
owners: [Inno.Storage.Runtime]
apiSurface: source-clr
---

Atomically replaces a complete value.

**Parameter `key`:** The sandbox-relative storage key.

**Parameter `value`:** The complete value to commit.

**Parameter `cancellationToken`:** Cancellation requested by the caller.

**Returns:** A task that completes after the value is durably replaced.
