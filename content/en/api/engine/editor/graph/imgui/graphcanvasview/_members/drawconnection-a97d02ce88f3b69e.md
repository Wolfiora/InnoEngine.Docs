---
uid: api.a97d02ce88f3b69e36f2d5fb34e8ec3eca4ea23e1f9e64b56fea9c41373e9cd7
symbol: "engine:Inno.Editor.Graph.ImGui:M:Inno.Editor.Graph.ImGui.GraphCanvasView.DrawConnection(Inno.Editor.ImGui.EditorDrawList,System.Numerics.Vector2,System.Numerics.Vector2,System.UInt32,System.Single)"
source: xml
reviewed: 1e0f93a6be5655c9b952c3016ed8c9a25e74af016b7a67868e12cb0aea9c00d4
title: "DrawConnection"
kind: api
owners: [Inno.Editor.Graph.ImGui]
apiSurface: source-clr
---

Draws a horizontal-tangent connection using the same curve used for hit testing.

**Parameter `draw`:** The current window's frame-local drawing borrow; it is neither retained nor released by this call.

**Parameter `output`:** The output endpoint in screen space.

**Parameter `input`:** The input endpoint in screen space.

**Parameter `color`:** The packed connection color.

**Parameter `thickness`:** The positive screen-space stroke width.

**Exception `T:System.ArgumentOutOfRangeException`:** An endpoint or derived control point is nonfinite, or the stroke width is not positive and finite.

**Exception `T:System.InvalidOperationException`:** The canvas is uninitialized or a visible connection uses an expired or mismatched drawing borrow.
