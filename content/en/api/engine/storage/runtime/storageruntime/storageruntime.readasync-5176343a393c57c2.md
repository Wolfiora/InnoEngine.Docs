---
uid: api.5176343a393c57c2558f1324b7f070d14316107960d88b3b179473459d0e810d
symbol: "engine:Inno.Storage.Runtime:M:Inno.Storage.Runtime.StorageRuntime.ReadAsync(Inno.Storage.StorageKey,System.Threading.CancellationToken)"
source: xml
reviewed: 4551e551c7d6a0e19cb0a8341e60524b7fb247291f3c38509fc47fd976a8ee6f
title: "StorageRuntime.ReadAsync"
kind: api
owners: [Inno.Storage.Runtime]
apiSurface: source-clr
---

Reads a complete immutable value.

**Parameter `key`:** The sandbox-relative storage key.

**Parameter `cancellationToken`:** Cancellation requested by the caller.

**Returns:** The stored bytes, or `null` when the key does not exist.
