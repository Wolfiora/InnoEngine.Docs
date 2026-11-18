---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.519b5029b38220cf6a642d59d81aeb3acea142367b8d41e79bbe16730233a4ce
symbol: engine:Inno.Extensibility.Types:M:Inno.Extensibility.Types.TypeRef.Resolve(Inno.Extensibility.Types.TypeCacheSnapshot)
title: TypeRef.Resolve
kind: api
owners:
- Inno.Extensibility.Types
apiSurface: source-clr
sourceFingerprint: 6345fa4d06d5f2b9ce5d5be92f9b722fdbc65ffd135002f4a8b09a813b8ee83e
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `snapshot`:** The snapshot that defines the required assembly generation.

## Returns

The CLR type represented by this reference in `snapshot`.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `snapshot` is `null`.

**Exception `T:System.InvalidOperationException`:** Thrown when the reference is empty or the logical type does not exist in the snapshot.
