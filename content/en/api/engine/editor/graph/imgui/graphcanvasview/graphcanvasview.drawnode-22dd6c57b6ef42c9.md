---
uid: api.22dd6c57b6ef42c92e9d3af5fa6f999f5d9e350442d757ffca042405e7f5e90c
symbol: "engine:Inno.Editor.Graph.ImGui:M:Inno.Editor.Graph.ImGui.GraphCanvasView.DrawNode(Inno.Editor.ImGui.EditorDrawList,Inno.Editor.Graph.ImGui.GraphCanvasNode,System.UInt32,System.Boolean,System.Action,System.Nullable{Inno.Core.Graphs.GraphPosition})"
source: xml
reviewed: a90b2b05bc9a2d07a29f74ff0a13d13ee749cc3ee6b0407295f24076a0b4434f
title: "GraphCanvasView.DrawNode"
kind: api
owners: [Inno.Editor.Graph.ImGui]
apiSurface: source-clr
---

Draws a visible neutral node and its ports, borrowing optional content only for this call.

## Parameters

**Parameter `draw`:** The current window's frame-local drawing borrow; it is neither retained nor released by this call.

**Parameter `node`:** The immutable geometric and textual node input.

**Parameter `headerColor`:** The domain-selected packed header color; the presenter does not classify node types.

**Parameter `selected`:** Whether to display the current selection outline.

**Parameter `drawContent`:** Optional frame-local custom drawing. Exceptions propagate after restoring the node clip.

**Parameter `previewPosition`:** An uncommitted movement position, or null to draw the document position.

## Returns

True when the node intersects the canvas and effective window clip and was submitted; false when culled.

## Exceptions

**Exception `T:System.ArgumentNullException`:** The node is null.

**Exception `T:System.InvalidOperationException`:** The canvas is uninitialized or a visible node uses an expired or mismatched drawing borrow.
