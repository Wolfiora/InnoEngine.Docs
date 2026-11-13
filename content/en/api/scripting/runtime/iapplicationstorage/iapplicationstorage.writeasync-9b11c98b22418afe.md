---
uid: api.9b11c98b22418afe381f50858426c377a942c126f7b30ba62ca1e6e1535010a1
symbol: "scripting:Inno.Storage:M:InnoEngine.Storage.IApplicationStorage.WriteAsync(InnoEngine.Storage.StorageKey,System.ReadOnlyMemory{System.Byte},System.Threading.CancellationToken)"
source: xml
reviewed: 0def4cf67362259de3c4e3fc87ee575c76d405594df9b6396ce35a678c4ea531
title: "IApplicationStorage.WriteAsync"
kind: api
owners: [Inno.Storage]
apiSurface: editor-script
apiScope: Runtime
---

Atomically replaces a complete value.

**Parameter `key`:** The sandbox-relative storage key.

**Parameter `value`:** The complete value to commit.

**Parameter `cancellationToken`:** Cancellation requested by the caller.

**Returns:** A task that completes after the value is durably replaced.
