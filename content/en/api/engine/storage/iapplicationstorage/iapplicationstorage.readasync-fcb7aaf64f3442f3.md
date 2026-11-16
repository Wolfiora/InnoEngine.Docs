---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.fcb7aaf64f3442f3821a7fa358e57822861b7ed7a2cbb5d58b34b332ae483332
symbol: engine:Inno.Storage:M:Inno.Storage.IApplicationStorage.ReadAsync(Inno.Storage.StorageKey,System.Threading.CancellationToken)
title: IApplicationStorage.ReadAsync
kind: api
owners:
- Inno.Storage
apiSurface: source-clr
reviewed: 7c791e9efcc922487f6c4497dfcd724cb79211f6822e12c064149b0727dbf9f0
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `key`:** The sandbox-relative storage key.

**Parameter `cancellationToken`:** Cancellation requested by the caller.

## Returns

The stored bytes, or `null` when the key does not exist.
