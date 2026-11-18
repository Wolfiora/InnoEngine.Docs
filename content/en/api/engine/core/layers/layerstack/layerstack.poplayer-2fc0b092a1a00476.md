---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.2fc0b092a1a00476c1ca6be0cbd35009d13b27627aeee1fce18b5b0e73f18b38
symbol: engine:Inno.Core.Layers:M:Inno.Core.Layers.LayerStack.PopLayer(Inno.Core.Layers.Layer)
title: LayerStack.PopLayer
kind: api
owners:
- Inno.Core.Layers
apiSurface: source-clr
sourceFingerprint: c9e25d18e362417da56e42253ba6403c5c41bb6e118aab9666c954aa04f4d5df
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
