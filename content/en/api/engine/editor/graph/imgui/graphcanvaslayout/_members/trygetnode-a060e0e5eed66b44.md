---
uid: api.a060e0e5eed66b441cb725953c2c9d2d605830963855499e4a53630d6722154c
symbol: "engine:Inno.Editor.Graph.ImGui:M:Inno.Editor.Graph.ImGui.GraphCanvasLayout.TryGetNode(Inno.Core.Graphs.GraphNodeId,Inno.Editor.Graph.ImGui.GraphCanvasNode@)"
source: xml
reviewed: 954e7bfacfded216ad245218efc97ccbad7a4722cfe584ef1e24c2787d26d81f
title: "TryGetNode"
kind: api
owners: [Inno.Editor.Graph.ImGui]
apiSurface: source-clr
---

Resolves a node in this display snapshot without consulting domain or live-object registries.

**Parameter `id`:** The graph node identity to resolve.

**Parameter `node`:** The current neutral node, or null when it is absent.

**Returns:** True when the current snapshot contains the node.
