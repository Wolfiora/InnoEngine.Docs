---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.986446489a24a171a9ffddb5a43673988ba37c13a43ca916e71f666d3603eba5
symbol: engine:Inno.Core.Layers:M:Inno.Core.Layers.Layer.OnAfterRender(System.Single)
title: Layer.OnAfterRender
kind: api
owners:
- Inno.Core.Layers
apiSurface: source-clr
sourceFingerprint: ca072c98714c62349223d29c25d605e72b83b5eb4eb3bf4810f4dd0908668984
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `deltaTime`:** The elapsed frame time in seconds.

## Remarks

A `T:Inno.Core.Layers.LayerStack` invokes this callback in reverse order for every layer whose `M:Inno.Core.Layers.Layer.OnBeforeRender(System.Single)` callback completed successfully, including when later work fails.
