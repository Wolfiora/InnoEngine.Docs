---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.4ea5ce743ef82a21ee0e031194b4637cd4fdb15e4a65bcb3c217ff301da8c2f0
symbol: engine:Inno.Scene:M:Inno.Scene.Layers.GameLayerMask.FromLayers(System.Collections.Generic.IEnumerable{Inno.Scene.Layers.GameLayer})
title: GameLayerMask.FromLayers
kind: api
owners:
- Inno.Scene
apiSurface: source-clr
reviewed: e3f4542d92e32a062dd8ca9b20df4d451143e29f1c343f2ffda3c83df7b29152
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `layers`:** The layers whose bits should be enabled.

## Returns

A mask containing every supplied layer.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `layers` is `null`.
