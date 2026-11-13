---
uid: api.d197041a5f012d8f20264908ff28de0b86c9b3d3111b940fa342283673cd3391
symbol: "scripting:Inno.Editor.Graph.ImGui:M:InnoEditor.Graph.GraphCanvasView.HitNode(InnoEditor.Graph.GraphCanvasLayout,System.Numerics.Vector2)"
source: xml
reviewed: b9f9c0c9584edada45bb928c1c544714b27cbc01d2cb7cb3d4347316059082db
title: "HitNode"
kind: api
owners: [Inno.Editor.Graph.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Finds the frontmost node beneath a pointer using the same geometry as drawing.

**Parameter `layout`:** The current document presentation snapshot.

**Parameter `point`:** The screen-space pointer.

**Returns:** The frontmost neutral node, or null over empty canvas.
