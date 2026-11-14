---
uid: api.8e5dc0a71f5610b07a8df1ddc718b5ee0dee6e524de918cb96557782f3de7258
symbol: "engine:Inno.Storage.Runtime:M:Inno.Storage.Runtime.StorageRuntime.DeleteAsync(Inno.Storage.StorageKey,System.Threading.CancellationToken)"
source: xml
reviewed: 5bd9eccc099a2a7dd987819b7794ea54f6b04c484138ba6daf4d63b2f64d87c9
title: "StorageRuntime.DeleteAsync"
kind: api
owners: [Inno.Storage.Runtime]
apiSurface: source-clr
---

Deletes one value without failing when it is already absent.

## Parameters

**Parameter `key`:** The sandbox-relative storage key.

**Parameter `cancellationToken`:** Cancellation requested by the caller.

## Returns

`true` when an existing value was deleted.
