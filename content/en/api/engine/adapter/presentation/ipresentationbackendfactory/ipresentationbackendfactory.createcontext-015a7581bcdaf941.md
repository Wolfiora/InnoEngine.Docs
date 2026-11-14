---
uid: api.015a7581bcdaf94131aec5ac731550b1c982f69239f01e96822ae1a9745c7186
symbol: "engine:Inno.Adapter.Presentation:M:Inno.Adapter.Presentation.IPresentationBackendFactory.CreateContext(Inno.Adapter.Presentation.PresentationBackendId,Inno.Adapter.Presentation.PresentationBackendOptions)"
source: xml
reviewed: 61a74aa824ebb1cc0b2e8dd406fd86ab625947b83e33cbd1088c532524cbce3d
title: "IPresentationBackendFactory.CreateContext"
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
