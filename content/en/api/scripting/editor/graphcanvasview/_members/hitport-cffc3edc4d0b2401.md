---
uid: api.cffc3edc4d0b240157e74c8f57c3b33c6615e41e58566a90b9d54b28278b8543
symbol: "scripting:Inno.Editor.Graph.ImGui:M:InnoEditor.Graph.GraphCanvasView.HitPort(InnoEditor.Graph.GraphCanvasLayout,System.Numerics.Vector2,System.Single)"
source: xml
reviewed: 9e5885c4eab6bc09d4494acca691f7e59b7938f44fb32cec15b9e0630a944cbb
title: "HitPort"
kind: api
owners: [Inno.Editor.Graph.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Finds a port by its displayed socket or label row, without interpreting its domain type.

**Parameter `layout`:** The current document presentation snapshot.

**Parameter `point`:** The screen-space pointer.

**Parameter `radius`:** The nonnegative minimum socket hit radius in screen pixels.

**Returns:** The hit neutral port, including Missing state, or null over non-port content.

**Exception `T:System.ArgumentOutOfRangeException`:** The radius is negative or nonfinite.
