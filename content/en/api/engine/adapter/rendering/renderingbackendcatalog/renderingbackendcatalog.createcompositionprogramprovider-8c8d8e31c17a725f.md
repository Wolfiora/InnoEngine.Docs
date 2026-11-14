---
uid: api.8c8d8e31c17a725f8aff327672740b3bbb82f8efbb3b3f56f2379bd25c7f4ac8
symbol: "engine:Inno.Adapter.Rendering:M:Inno.Adapter.Rendering.RenderingBackendCatalog.CreateCompositionProgramProvider(Inno.Adapter.Rendering.RenderingBackendId)"
source: xml
reviewed: 444eabb0659856b854392338de84d63f609f677172405e2fbbdd712cef2b17ec
title: "RenderingBackendCatalog.CreateCompositionProgramProvider"
kind: api
owners: [Inno.Adapter.Rendering]
apiSurface: source-clr
---

Resolves a backend-owned program provider for ordered render layer composition.

## Parameters

**Parameter `backend`:** Stable identity of the selected rendering backend.

## Returns

A provider compatible with devices created by the same backend registration.

## Exceptions

**Exception `T:System.NotSupportedException`:** No provider is registered for this exact backend identity.
