---
uid: api.fcb7aaf64f3442f3821a7fa358e57822861b7ed7a2cbb5d58b34b332ae483332
symbol: "engine:Inno.Storage:M:Inno.Storage.IApplicationStorage.ReadAsync(Inno.Storage.StorageKey,System.Threading.CancellationToken)"
source: xml
reviewed: e66107c0090fc64da092ea95837ee8e0915d5a786a6f294786af5b279ef09098
title: "IApplicationStorage.ReadAsync"
kind: api
owners: [Inno.Storage]
apiSurface: source-clr
---

Reads a complete immutable value.

## Parameters

**Parameter `key`:** The sandbox-relative storage key.

**Parameter `cancellationToken`:** Cancellation requested by the caller.

## Returns

The stored bytes, or `null` when the key does not exist.
