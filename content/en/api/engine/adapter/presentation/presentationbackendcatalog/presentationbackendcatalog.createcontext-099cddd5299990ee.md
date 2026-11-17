---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.099cddd5299990ee18eeb571267072bb537e06d4b34f262e2d12a0476321f3f7
symbol: engine:Inno.Adapter.Presentation:M:Inno.Adapter.Presentation.PresentationBackendCatalog.CreateContext(Inno.Adapter.Presentation.PresentationBackendId,Inno.Adapter.Presentation.PresentationBackendOptions)
title: PresentationBackendCatalog.CreateContext
kind: api
owners:
- Inno.Adapter.Presentation
apiSurface: source-clr
reviewed: 8da56b572cca1c86ab71db046f44562d0a9cec1966e8f2fc1f57eecdd07ffd80
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `backend`:** Stable presentation implementation selected by the composition root.

**Parameter `options`:** Host-owned resources and presentation policy.

## Returns

A caller-owned backend-neutral presentation context.

## Exceptions

**Exception `T:System.NotSupportedException`:** Thrown when the selected platform, rendering, and presentation backends are incompatible.

**Exception `T:System.InvalidOperationException`:** The selected provider returned no service.
