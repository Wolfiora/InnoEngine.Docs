---
uid: api.c6f8f660315c54123baa0b6bc574c378cd58276fcabc5b57acb42447b25e91a8
symbol: "scripting:Inno.Editor.Graph.ImGui:M:InnoEditor.Graph.GraphCanvasLayout.TryGetNode(InnoEngine.Graphs.GraphNodeId,InnoEditor.Graph.GraphCanvasNode@)"
source: xml
reviewed: ca5258637e16db784f8d6b6794b631a8b86a35549cdb2ac4e5be40612bb5c91e
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
