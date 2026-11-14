---
uid: api.986446489a24a171a9ffddb5a43673988ba37c13a43ca916e71f666d3603eba5
symbol: "engine:Inno.Core.Layers:M:Inno.Core.Layers.Layer.OnAfterRender(System.Single)"
source: xml
reviewed: 33f1f485e7b2ab8c45639eb6ff01a99e7ed4ceb73890601741a41bc876e12952
title: "Layer.OnAfterRender"
kind: api
owners: [Inno.Core.Layers]
apiSurface: source-clr
---

Completes frame-scoped rendering state after render submission.

## Remarks

A `T:Inno.Core.Layers.LayerStack` invokes this callback in reverse order for every layer whose `M:Inno.Core.Layers.Layer.OnBeforeRender(System.Single)` callback completed successfully, including when later work fails.

**Parameter `deltaTime`:** The elapsed frame time in seconds.
