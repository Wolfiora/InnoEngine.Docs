---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.64ce1cf9708427d5b866f476cf0c5c9a7cd0e413b2d1da0d12b6076415444bd6
symbol: scripting:Inno.Editor.Graph.ImGui:M:InnoEditor.Graph.GraphCanvasView.HitConnection(System.Numerics.Vector2,System.Numerics.Vector2,System.Numerics.Vector2,System.Single)
title: GraphCanvasView.HitConnection
kind: api
owners:
- Inno.Editor.Graph.ImGui
apiSurface: editor-script
sourceFingerprint: 0238f4c559ad7b4bc864c002423a0a0cb3b579aa80c28c24763d50ba5f73cf3d
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `point`:** The screen-space pointer location.

**Parameter `output`:** The displayed output endpoint.

**Parameter `input`:** The displayed input endpoint.

**Parameter `radius`:** Nonnegative screen-space acceptance radius.

## Returns

True when the pointer is within the curve's hit area, including its endpoints.

## Exceptions

**Exception `T:System.ArgumentOutOfRangeException`:** Radius is negative or nonfinite.
