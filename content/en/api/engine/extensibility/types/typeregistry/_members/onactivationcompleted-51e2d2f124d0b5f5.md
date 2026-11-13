---
uid: api.51e2d2f124d0b5f5ec22bb30f02e3743b5ce1d459c0124f25d9a886494db065b
symbol: "engine:Inno.Extensibility.Types:M:Inno.Extensibility.Types.TypeRegistry\u00601.OnActivationCompleted(\u00600,\u00600)"
source: xml
reviewed: 96051acd7465445f24b1126e44d247fd9846ee8b99230f84b1f15cfdd11b8f9c
title: "OnActivationCompleted"
kind: api
owners: [Inno.Extensibility.Types]
apiSurface: source-clr
---

Finalizes a successfully activated candidate after every coordinated registry has activated.

**Parameter `previous`:** The previous snapshot that is about to be released, or `null`.

**Parameter `currentSnapshot`:** The committed active snapshot.

## Remarks

This is a cleanup-only phase and must not perform fallible publication work. Exceptions are reported through ``M:Inno.Extensibility.Types.TypeRegistry`1.OnCleanupFailed(System.String,System.Exception)`` and cannot cause the completed activation to roll back.
