---
uid: api.fcb7aaf64f3442f3821a7fa358e57822861b7ed7a2cbb5d58b34b332ae483332
symbol: "engine:Inno.Storage:M:Inno.Storage.IApplicationStorage.ReadAsync(Inno.Storage.StorageKey,System.Threading.CancellationToken)"
source: xml
reviewed: be831859dddc38b846b841cfb036a2698a3fd3eb1472aeb0597181227675dde6
title: "ReadAsync"
kind: api
owners: [Inno.Storage]
apiSurface: source-clr
---

Reads a complete immutable value.

**Parameter `key`:** The sandbox-relative storage key.

**Parameter `cancellationToken`:** Cancellation requested by the caller.

**Returns:** The stored bytes, or `null` when the key does not exist.
