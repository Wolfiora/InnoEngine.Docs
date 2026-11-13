---
uid: api.f6cf6fcd212dc12c55515eaf1bb32a7af80c1a5318b51ed1b6fef9d5c2bf39cd
symbol: "engine:Inno.Editor.Graph.ImGui:M:Inno.Editor.Graph.ImGui.GraphCanvasPointerController.BeginMove(Inno.Editor.Graph.ImGui.GraphCanvasLayout,System.Collections.Generic.IEnumerable{Inno.Core.Graphs.GraphNodeId},System.Numerics.Vector2)"
source: xml
reviewed: 87b6613aa0b8b7bd00b4e3e5cd3de4bcaf87f3a90421e5bab32e0013d4aca8b4
title: "BeginMove"
kind: api
owners: [Inno.Editor.Graph.ImGui]
apiSurface: source-clr
---

Starts movement for explicit node IDs, supporting domain-owned group-header composition.

**Parameter `layout`:** The neutral snapshot supplying initial positions.

**Parameter `nodes`:** Selected stable graph identities; absent nodes remain selected but are not moved.

**Parameter `pointer`:** The screen-space gesture start.
