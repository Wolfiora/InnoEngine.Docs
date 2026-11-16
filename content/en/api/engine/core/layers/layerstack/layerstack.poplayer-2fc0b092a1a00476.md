---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.2fc0b092a1a00476c1ca6be0cbd35009d13b27627aeee1fce18b5b0e73f18b38
symbol: engine:Inno.Core.Layers:M:Inno.Core.Layers.LayerStack.PopLayer(Inno.Core.Layers.Layer)
title: LayerStack.PopLayer
kind: api
owners:
- Inno.Core.Layers
apiSurface: source-clr
reviewed: 1a582bf1298bc562e2e9927332f170e57857e084fab9f9bd063e5298877159cf
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `layer`:** The base layer to detach.

## Returns

`true` when the layer was attached in the base region; otherwise, `false`.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `layer` is `null`.

**Exception `T:System.ObjectDisposedException`:** Thrown when this stack has been disposed.
