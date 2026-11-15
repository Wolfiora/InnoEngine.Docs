---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.05cc77ccc8419a75cfb28b11c8183bf1223a1c29cfde32cd1aedee746f11c509
symbol: engine:Inno.Storage:M:Inno.Storage.Storage.ReadAsync(Inno.Storage.StorageKey,System.Threading.CancellationToken)
title: Storage.ReadAsync
kind: api
owners:
- Inno.Storage
apiSurface: source-clr
reviewed: ddac528e719a676b00cdd8f90cda995999f7e13ae497a8bd6ae7a096daf04327

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Reads a complete value.

## Parameters

**Parameter `key`:** The sandbox-relative storage key.

**Parameter `cancellationToken`:** Cancellation requested by the caller.

## Returns

The stored bytes, or `null` when absent.
