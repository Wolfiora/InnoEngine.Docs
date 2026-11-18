---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.6add5eda6c13f8da1cdae10f2b1431e27de0187221d94fd9ab5a4e59c8180bd1
symbol: scripting:Inno.Editor.Graph.ImGui:M:InnoEditor.Graph.GraphCanvasView.DrawNode(InnoEditor.ImGui.EditorDrawList,InnoEditor.Graph.GraphCanvasNode,System.UInt32,System.Boolean,System.Action,System.Nullable{InnoEngine.Graphs.GraphPosition})
title: GraphCanvasView.DrawNode
kind: api
owners:
- Inno.Editor.Graph.ImGui
apiSurface: editor-script
sourceFingerprint: 83a668ba4867475af6a1d90a6e7f6b28fa0923eca280168abb254d6abfd822ce
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

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
