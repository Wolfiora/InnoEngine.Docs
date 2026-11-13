---
uid: api.8c8d8e31c17a725f8aff327672740b3bbb82f8efbb3b3f56f2379bd25c7f4ac8
symbol: "engine:Inno.Adapter.Rendering:M:Inno.Adapter.Rendering.RenderingBackendCatalog.CreateCompositionProgramProvider(Inno.Adapter.Rendering.RenderingBackendId)"
source: xml
reviewed: 40f8f9114a95321ea3298b69b3c8d096ad3d05c87219b3467a361277100aca63
title: "CreateCompositionProgramProvider"
kind: api
owners: [Inno.Adapter.Rendering]
apiSurface: source-clr
---

Resolves a backend-owned program provider for ordered render layer composition.

**Parameter `backend`:** Stable identity of the selected rendering backend.

**Returns:** A provider compatible with devices created by the same backend registration.

**Exception `T:System.NotSupportedException`:** No provider is registered for this exact backend identity.
