---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.4ea5ce743ef82a21ee0e031194b4637cd4fdb15e4a65bcb3c217ff301da8c2f0
symbol: engine:Inno.Scene:M:Inno.Scene.Layers.GameLayerMask.FromLayers(System.Collections.Generic.IEnumerable{Inno.Scene.Layers.GameLayer})
title: GameLayerMask.FromLayers
kind: api
owners:
- Inno.Scene
apiSurface: source-clr
sourceFingerprint: 55f5647fc37ded4342eb71c4bfd12fb8e443c264b0cf4aeea29539153da954dc
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
