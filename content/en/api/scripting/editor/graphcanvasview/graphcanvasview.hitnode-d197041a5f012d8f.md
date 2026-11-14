---
uid: api.d197041a5f012d8f20264908ff28de0b86c9b3d3111b940fa342283673cd3391
symbol: "scripting:Inno.Editor.Graph.ImGui:M:InnoEditor.Graph.GraphCanvasView.HitNode(InnoEditor.Graph.GraphCanvasLayout,System.Numerics.Vector2)"
source: xml
reviewed: 254166bd07bd7730263c0b809819238cc1533fc1f35f71bb429fcb58f99b5938
title: "GraphCanvasView.HitNode"
kind: api
owners: [Inno.Editor.Graph.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Finds the frontmost node beneath a pointer using the same geometry as drawing.

## Parameters

**Parameter `layout`:** The current document presentation snapshot.

**Parameter `point`:** The screen-space pointer.

## Returns

The frontmost neutral node, or null over empty canvas.
