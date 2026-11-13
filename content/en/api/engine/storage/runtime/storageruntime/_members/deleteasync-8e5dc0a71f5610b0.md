---
uid: api.8e5dc0a71f5610b07a8df1ddc718b5ee0dee6e524de918cb96557782f3de7258
symbol: "engine:Inno.Storage.Runtime:M:Inno.Storage.Runtime.StorageRuntime.DeleteAsync(Inno.Storage.StorageKey,System.Threading.CancellationToken)"
source: xml
reviewed: d3401644bab51441e5f6c6d9e9256fbfad77dbb6a4b73931fc87d97a3c103629
title: "DeleteAsync"
kind: api
owners: [Inno.Storage.Runtime]
apiSurface: source-clr
---

Deletes one value without failing when it is already absent.

**Parameter `key`:** The sandbox-relative storage key.

**Parameter `cancellationToken`:** Cancellation requested by the caller.

**Returns:** `true` when an existing value was deleted.
