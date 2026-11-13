---
uid: api.33dc6723dfa5f7da15a4878bc77d6088c97a0cdc1a76fb42b2540d79474851c2
symbol: "scripting:Inno.Editor.Graph.ImGui:M:InnoEditor.Graph.GraphCanvasView.DrawConnection(InnoEditor.ImGui.EditorDrawList,System.Numerics.Vector2,System.Numerics.Vector2,System.UInt32,System.Single)"
source: xml
reviewed: d0ec406d0cd4e563989a5e3bfdbda723c31c7fe25eb50c03f75a976928abb302
title: "DrawConnection"
kind: api
owners: [Inno.Editor.Graph.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Draws a horizontal-tangent connection using the same curve used for hit testing.

**Parameter `draw`:** The current window's frame-local drawing borrow; it is neither retained nor released by this call.

**Parameter `output`:** The output endpoint in screen space.

**Parameter `input`:** The input endpoint in screen space.

**Parameter `color`:** The packed connection color.

**Parameter `thickness`:** The positive screen-space stroke width.

**Exception `T:System.ArgumentOutOfRangeException`:** An endpoint or derived control point is nonfinite, or the stroke width is not positive and finite.

**Exception `T:System.InvalidOperationException`:** The canvas is uninitialized or a visible connection uses an expired or mismatched drawing borrow.
