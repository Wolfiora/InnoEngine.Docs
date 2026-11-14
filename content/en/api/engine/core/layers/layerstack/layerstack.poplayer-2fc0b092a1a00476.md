---
uid: api.2fc0b092a1a00476c1ca6be0cbd35009d13b27627aeee1fce18b5b0e73f18b38
symbol: "engine:Inno.Core.Layers:M:Inno.Core.Layers.LayerStack.PopLayer(Inno.Core.Layers.Layer)"
source: xml
reviewed: 14c628f5a98dc94970abe65d4f86cdb6daeac0c01813cdb33c6be8d5b9b60668
title: "LayerStack.PopLayer"
kind: api
owners: [Inno.Core.Layers]
apiSurface: source-clr
---

Detaches a base layer from this stack.

## Parameters

**Parameter `layer`:** The base layer to detach.

## Returns

`true` when the layer was attached in the base region; otherwise, `false`.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `layer` is `null`.

**Exception `T:System.ObjectDisposedException`:** Thrown when this stack has been disposed.
