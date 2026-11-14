---
uid: api.4ea5ce743ef82a21ee0e031194b4637cd4fdb15e4a65bcb3c217ff301da8c2f0
symbol: "engine:Inno.Scene:M:Inno.Scene.Layers.GameLayerMask.FromLayers(System.Collections.Generic.IEnumerable{Inno.Scene.Layers.GameLayer})"
source: xml
reviewed: 215b05e9ff66ce6daf995fc46fa95773a1c04546896ea2fed4a497d1db750e38
title: "GameLayerMask.FromLayers"
kind: api
owners: [Inno.Scene]
apiSurface: source-clr
---

Creates a mask containing the supplied layers.

## Parameters

**Parameter `layers`:** The layers whose bits should be enabled.

## Returns

A mask containing every supplied layer.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `layers` is `null`.
