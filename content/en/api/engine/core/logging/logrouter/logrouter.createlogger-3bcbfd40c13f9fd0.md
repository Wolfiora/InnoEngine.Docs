---
uid: api.3bcbfd40c13f9fd0cc1364da0f419edf72fbb7235953afce3bf6565c4445ac66
symbol: "engine:Inno.Core.Logging:M:Inno.Core.Logging.LogRouter.CreateLogger\u0060\u00601"
source: xml
reviewed: f8f37cafd504d46da72ae8307a4c4231e2f1f60b0d50e8eb12435514be8e6aa8
title: "LogRouter.CreateLogger"
kind: api
owners: [Inno.Core.Logging]
apiSurface: source-clr
---

Creates a category-bound logger for one engine service or extension type.

## Type parameters

**Type parameter `TOwner`:** The type whose assembly ownership and category identify emitted entries.

## Returns

A stateless logger bound to this router and the supplied owner type.

## Exceptions

**Exception `T:System.ObjectDisposedException`:** Thrown after this router has been disposed.
