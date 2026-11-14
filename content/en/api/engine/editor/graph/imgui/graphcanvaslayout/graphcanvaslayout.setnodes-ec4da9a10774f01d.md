---
uid: api.ec4da9a10774f01df4721a98c583480978358b7d36d6bb7c2193ecc464f56938
symbol: "engine:Inno.Editor.Graph.ImGui:M:Inno.Editor.Graph.ImGui.GraphCanvasLayout.SetNodes(System.Collections.Generic.IEnumerable{Inno.Editor.Graph.ImGui.GraphCanvasNode})"
source: xml
reviewed: d3a1ab5c27f685e389ec848e5646492a8767834af0d77799465f4504a367533b
title: "GraphCanvasLayout.SetNodes"
kind: api
owners: [Inno.Editor.Graph.ImGui]
apiSurface: source-clr
---

Atomically replaces a complete display snapshot, reusing unchanged node geometry by value.

## Parameters

**Parameter `nodes`:** The current neutral node descriptions in draw order.

## Returns

The number of inserted, changed or removed nodes. Ordering changes do not rebuild geometry.

## Exceptions

**Exception `T:System.ArgumentNullException`:** The collection or one of its nodes is null.

**Exception `T:System.ArgumentException`:** A node identity occurs more than once; the previous snapshot remains active.
