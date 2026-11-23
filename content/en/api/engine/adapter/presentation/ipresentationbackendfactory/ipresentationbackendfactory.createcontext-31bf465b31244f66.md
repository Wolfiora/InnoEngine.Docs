---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.31bf465b31244f669bd06bbf5c64ac245c57ff5b1fa54076d6b5878c48a6c6ce
symbol: engine:Inno.Adapter.Presentation:M:Inno.Adapter.Presentation.IPresentationBackendFactory.CreateContext(Inno.Adapter.Presentation.PresentationBackendID,Inno.Adapter.Presentation.PresentationBackendOptions)
title: IPresentationBackendFactory.CreateContext
kind: api
owners:
- Inno.Adapter.Presentation
apiSurface: source-clr
sourceFingerprint: c060f8ca74c7ff9442eeddd52edcc11ebafea4b64e7463824dd66e37a8954993
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
