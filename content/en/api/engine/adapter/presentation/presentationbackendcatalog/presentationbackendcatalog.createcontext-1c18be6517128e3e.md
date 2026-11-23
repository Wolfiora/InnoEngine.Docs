---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.1c18be6517128e3ed01f4720392226afd1aefe44ff4d96795099df64837959d6
symbol: engine:Inno.Adapter.Presentation:M:Inno.Adapter.Presentation.PresentationBackendCatalog.CreateContext(Inno.Adapter.Presentation.PresentationBackendID,Inno.Adapter.Presentation.PresentationBackendOptions)
title: PresentationBackendCatalog.CreateContext
kind: api
owners:
- Inno.Adapter.Presentation
apiSurface: source-clr
sourceFingerprint: c910016e9457d541ae805525cfc177501e5dd465e5155c2f4df9321e2881ec45
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
