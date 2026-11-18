---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.51e2d2f124d0b5f5ec22bb30f02e3743b5ce1d459c0124f25d9a886494db065b
symbol: engine:Inno.Extensibility.Types:M:Inno.Extensibility.Types.TypeRegistry`1.OnActivationCompleted(`0,`0)
title: TypeRegistry<TSnapshot>.OnActivationCompleted
kind: api
owners:
- Inno.Extensibility.Types
apiSurface: source-clr
sourceFingerprint: 5264c806003a8114d54f3234b4ce5c00a1ba721dc98dc762d76d375f20b4ee01
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `previous`:** The previous snapshot that is about to be released, or `null`.

**Parameter `currentSnapshot`:** The committed active snapshot.

## Remarks

This is a cleanup-only phase and must not perform fallible publication work. Exceptions are reported through ``M:Inno.Extensibility.Types.TypeRegistry`1.OnCleanupFailed(System.String,System.Exception)`` and cannot cause the completed activation to roll back.
