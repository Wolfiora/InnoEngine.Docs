---
uid: api.cffc3edc4d0b240157e74c8f57c3b33c6615e41e58566a90b9d54b28278b8543
symbol: "scripting:Inno.Editor.Graph.ImGui:M:InnoEditor.Graph.GraphCanvasView.HitPort(InnoEditor.Graph.GraphCanvasLayout,System.Numerics.Vector2,System.Single)"
source: xml
reviewed: 82d80cf796a3545ee6ec902428a40638f78fe817ef2a2d3b93697a842bb55364
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
