---
uid: api.51e2d2f124d0b5f5ec22bb30f02e3743b5ce1d459c0124f25d9a886494db065b
symbol: "engine:Inno.Extensibility.Types:M:Inno.Extensibility.Types.TypeRegistry\u00601.OnActivationCompleted(\u00600,\u00600)"
source: xml
reviewed: 9b1f159c29cfaa2c89e02613b72b2a47995745dca837ae694c827934c6069eec
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
