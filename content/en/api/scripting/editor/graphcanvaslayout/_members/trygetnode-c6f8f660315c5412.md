---
uid: api.c6f8f660315c54123baa0b6bc574c378cd58276fcabc5b57acb42447b25e91a8
symbol: "scripting:Inno.Editor.Graph.ImGui:M:InnoEditor.Graph.GraphCanvasLayout.TryGetNode(InnoEngine.Graphs.GraphNodeId,InnoEditor.Graph.GraphCanvasNode@)"
source: xml
reviewed: 309de9818a6f460e5432d4e298a5a8a5e4a0a3989cc3ac46e6e5a17745832b59
title: "TryGetNode"
kind: api
owners: [Inno.Editor.Graph.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Resolves a node in this display snapshot without consulting domain or live-object registries.

**Parameter `id`:** The graph node identity to resolve.

**Parameter `node`:** The current neutral node, or null when it is absent.

**Returns:** True when the current snapshot contains the node.
