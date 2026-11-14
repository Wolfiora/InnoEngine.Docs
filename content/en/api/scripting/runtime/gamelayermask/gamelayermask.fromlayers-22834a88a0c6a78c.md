---
uid: api.22834a88a0c6a78c5eb093e86393ba7ec5669b9daad19260bb9d7d0ab9f3dcb0
symbol: "scripting:Inno.Scene:M:InnoEngine.Scene.GameLayerMask.FromLayers(System.Collections.Generic.IEnumerable{InnoEngine.Scene.GameLayer})"
source: xml
reviewed: 6060d6109d3cb0b169196d4a2a5f6d709098d06f50ea525354d3726a9842329e
title: "GameLayerMask.FromLayers"
kind: api
owners: [Inno.Scene]
apiSurface: editor-script
apiScope: Runtime
---

Creates a mask containing the supplied layers.

## Parameters

**Parameter `layers`:** The layers whose bits should be enabled.

## Returns

A mask containing every supplied layer.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `layers` is `null`.
