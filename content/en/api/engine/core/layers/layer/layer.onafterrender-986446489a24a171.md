---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.986446489a24a171a9ffddb5a43673988ba37c13a43ca916e71f666d3603eba5
symbol: engine:Inno.Core.Layers:M:Inno.Core.Layers.Layer.OnAfterRender(System.Single)
title: Layer.OnAfterRender
kind: api
owners:
- Inno.Core.Layers
apiSurface: source-clr
sourceFingerprint: 765da685da262fcb2b9031861d9dc91f072d418e619e72d3586734741123247f
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Remarks

A `T:Inno.Core.Layers.LayerStack` invokes this callback in reverse order for every layer whose `M:Inno.Core.Layers.Layer.OnBeforeRender(System.Single)` callback completed successfully, including when later work fails.

## Parameters

**Parameter `deltaTime`:** The elapsed frame time in seconds.
