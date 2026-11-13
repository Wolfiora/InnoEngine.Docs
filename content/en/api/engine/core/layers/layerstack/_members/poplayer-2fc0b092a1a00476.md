---
uid: api.2fc0b092a1a00476c1ca6be0cbd35009d13b27627aeee1fce18b5b0e73f18b38
symbol: "engine:Inno.Core.Layers:M:Inno.Core.Layers.LayerStack.PopLayer(Inno.Core.Layers.Layer)"
source: xml
reviewed: a0138fa95d0ec0d1867fb3f3046c41d7f207ae3be032fff3242da421a9de123a
title: "PopLayer"
kind: api
owners: [Inno.Core.Layers]
apiSurface: source-clr
---

Detaches a base layer from this stack.

**Parameter `layer`:** The base layer to detach.

**Returns:** `true` when the layer was attached in the base region; otherwise, `false`.

**Exception `T:System.ArgumentNullException`:** Thrown when `layer` is `null`.

**Exception `T:System.ObjectDisposedException`:** Thrown when this stack has been disposed.
