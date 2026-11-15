---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.96bd4b3f9da1b3151c9723287b2a8b565459b4ee2244020597231d31da8e272d
symbol: engine:Inno.Extensibility.Types:M:Inno.Extensibility.Types.TypeCacheSnapshot.GetTypeRef(System.Type)
title: TypeCacheSnapshot.GetTypeRef
kind: api
owners:
- Inno.Extensibility.Types
apiSurface: source-clr
reviewed: 4f0cfe75caa73654437920005c047a8782737821bff7504c524c50ceee36882e

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

## Returns

The logical and generation-local identity of `type`.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `type` is `null`.

**Exception `T:System.InvalidOperationException`:** Thrown when the type does not belong to this snapshot.

## Parameters

**Parameter `type`:** The type consumed by get type ref; ownership remains with the caller unless explicitly stated otherwise.
