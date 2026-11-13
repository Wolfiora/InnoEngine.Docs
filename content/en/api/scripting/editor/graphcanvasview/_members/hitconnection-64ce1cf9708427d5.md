---
uid: api.64ce1cf9708427d5b866f476cf0c5c9a7cd0e413b2d1da0d12b6076415444bd6
symbol: "scripting:Inno.Editor.Graph.ImGui:M:InnoEditor.Graph.GraphCanvasView.HitConnection(System.Numerics.Vector2,System.Numerics.Vector2,System.Numerics.Vector2,System.Single)"
source: xml
reviewed: a8d7b473dcf2abe3c3122dacb49d7494eb68e9310241dd42cc4a593b21c079ee
title: "HitConnection"
kind: api
owners: [Inno.Editor.Graph.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Checks pointer distance against the displayed cubic connection without any UI or document access.

**Parameter `point`:** The screen-space pointer location.

**Parameter `output`:** The displayed output endpoint.

**Parameter `input`:** The displayed input endpoint.

**Parameter `radius`:** Nonnegative screen-space acceptance radius.

**Returns:** True when the pointer is within the curve's hit area, including its endpoints.

**Exception `T:System.ArgumentOutOfRangeException`:** Radius is negative or nonfinite.
