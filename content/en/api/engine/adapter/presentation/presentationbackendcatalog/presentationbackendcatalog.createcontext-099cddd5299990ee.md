---
uid: api.099cddd5299990ee18eeb571267072bb537e06d4b34f262e2d12a0476321f3f7
symbol: "engine:Inno.Adapter.Presentation:M:Inno.Adapter.Presentation.PresentationBackendCatalog.CreateContext(Inno.Adapter.Presentation.PresentationBackendId,Inno.Adapter.Presentation.PresentationBackendOptions)"
source: xml
reviewed: b481dd85da48090feafb36ca3b4385964376674757baece6da80ca75abe96cf1
title: "PresentationBackendCatalog.CreateContext"
kind: api
owners: [Inno.Adapter.Presentation]
apiSurface: source-clr
---

Creates a presentation context over compatible platform and rendering adapters.

## Parameters

**Parameter `backend`:** Stable presentation implementation selected by the composition root.

**Parameter `options`:** Host-owned resources and presentation policy.

## Returns

A caller-owned backend-neutral presentation context.

## Exceptions

**Exception `T:System.NotSupportedException`:** Thrown when the selected platform, rendering, and presentation backends are incompatible.

**Exception `T:System.InvalidOperationException`:** The selected provider returned no service.
