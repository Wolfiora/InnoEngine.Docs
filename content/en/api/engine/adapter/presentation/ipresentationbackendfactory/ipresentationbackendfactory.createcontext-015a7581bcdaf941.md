---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.015a7581bcdaf94131aec5ac731550b1c982f69239f01e96822ae1a9745c7186
symbol: engine:Inno.Adapter.Presentation:M:Inno.Adapter.Presentation.IPresentationBackendFactory.CreateContext(Inno.Adapter.Presentation.PresentationBackendId,Inno.Adapter.Presentation.PresentationBackendOptions)
title: IPresentationBackendFactory.CreateContext
kind: api
owners:
- Inno.Adapter.Presentation
apiSurface: source-clr
reviewed: 7af0f0c45f76ab3f850fc64d497762fccf809e1fee1c8a6ba9b21b6833add0fe
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
