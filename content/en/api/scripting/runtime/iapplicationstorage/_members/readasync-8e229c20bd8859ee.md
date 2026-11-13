---
uid: api.8e229c20bd8859eee4e337bdb74cba6b3b0610df04973e5feffb5e9e6aa00658
symbol: "scripting:Inno.Storage:M:InnoEngine.Storage.IApplicationStorage.ReadAsync(InnoEngine.Storage.StorageKey,System.Threading.CancellationToken)"
source: xml
reviewed: 6a76340f87628cf940020e08cbb0cf1e970f132294df27e6f00339e8e8e094fe
title: "ReadAsync"
kind: api
owners: [Inno.Storage]
apiSurface: editor-script
apiScope: Runtime
---

Reads a complete immutable value.

**Parameter `key`:** The sandbox-relative storage key.

**Parameter `cancellationToken`:** Cancellation requested by the caller.

**Returns:** The stored bytes, or `null` when the key does not exist.
