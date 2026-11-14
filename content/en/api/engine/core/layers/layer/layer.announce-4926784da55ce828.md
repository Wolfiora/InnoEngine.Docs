---
uid: api.4926784da55ce8280084ed6f397faecc0bac917d11962ea3877c6effaca05945
symbol: "engine:Inno.Core.Layers:M:Inno.Core.Layers.Layer.Announce(Inno.Core.Events.Event)"
source: xml
reviewed: e94d08c4b22a97987b68aa901a5fc38082f98ea25adbd8e0ab7c1f90fd356bf9
title: "Layer.Announce"
kind: api
owners: [Inno.Core.Layers]
apiSurface: source-clr
---

Dispatches an event immediately inside this layer's event scope.

**Parameter `evnt`:** The event to dispatch to this layer's listeners.

**Exception `T:System.InvalidOperationException`:** Thrown when the layer is not currently attached to a stack.
