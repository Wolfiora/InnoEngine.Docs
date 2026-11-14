---
uid: api.f6cf6fcd212dc12c55515eaf1bb32a7af80c1a5318b51ed1b6fef9d5c2bf39cd
symbol: "engine:Inno.Editor.Graph.ImGui:M:Inno.Editor.Graph.ImGui.GraphCanvasPointerController.BeginMove(Inno.Editor.Graph.ImGui.GraphCanvasLayout,System.Collections.Generic.IEnumerable{Inno.Core.Graphs.GraphNodeId},System.Numerics.Vector2)"
source: xml
reviewed: 782898860da5c749c6df23a7bb6afb750bf9cee2943c03115e250c82d8474954
title: "GraphCanvasPointerController.BeginMove"
kind: api
owners: [Inno.Editor.Graph.ImGui]
apiSurface: source-clr
---

Starts movement for explicit node IDs, supporting domain-owned group-header composition.

**Parameter `layout`:** The neutral snapshot supplying initial positions.

**Parameter `nodes`:** Selected stable graph identities; absent nodes remain selected but are not moved.

**Parameter `pointer`:** The screen-space gesture start.
