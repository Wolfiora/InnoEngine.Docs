---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.33dc6723dfa5f7da15a4878bc77d6088c97a0cdc1a76fb42b2540d79474851c2
symbol: scripting:Inno.Editor.Graph.ImGui:M:InnoEditor.Graph.GraphCanvasView.DrawConnection(InnoEditor.ImGui.EditorDrawList,System.Numerics.Vector2,System.Numerics.Vector2,System.UInt32,System.Single)
title: GraphCanvasView.DrawConnection
kind: api
owners:
- Inno.Editor.Graph.ImGui
apiSurface: editor-script
reviewed: aaa331163841add5a5192135efc7c8f83ac4e16337a2cfce31682084c6b6ab85
apiScope: Editor

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

## Parameters

**Parameter `draw`:** The current window's frame-local drawing borrow; it is neither retained nor released by this call.

**Parameter `output`:** The output endpoint in screen space.

**Parameter `input`:** The input endpoint in screen space.

**Parameter `color`:** The packed connection color.

**Parameter `thickness`:** The positive screen-space stroke width.

## Exceptions

**Exception `T:System.ArgumentOutOfRangeException`:** An endpoint or derived control point is nonfinite, or the stroke width is not positive and finite.

**Exception `T:System.InvalidOperationException`:** The canvas is uninitialized or a visible connection uses an expired or mismatched drawing borrow.
