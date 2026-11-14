---
uid: api.26b8adec894ced6c8326c0b5cf373e4d0e3606cde4a9a42e6260150fe44e3481
symbol: "engine:Inno.Editor.Graph.ImGui:M:Inno.Editor.Graph.ImGui.GraphCanvasNode.#ctor(Inno.Core.Graphs.GraphNodeId,Inno.Core.Graphs.GraphPosition,System.Numerics.Vector2,System.Single,System.String,System.Collections.Generic.IEnumerable{Inno.Editor.Graph.ImGui.GraphCanvasPort})"
source: xml
reviewed: ef5fe80e266bfb3782b5806dca0a1c0a901bbd357b5e52228086ec4bfce60bde
title: "GraphCanvasNode.Constructor"
kind: api
owners: [Inno.Editor.Graph.ImGui]
apiSurface: source-clr
---

Creates immutable display data that can safely outlive the extension that described it.

## Parameters

**Parameter `id`:** The existing graph node identity.

**Parameter `position`:** The node's document position in graph coordinates.

**Parameter `size`:** Finite positive width and height in graph coordinates.

**Parameter `headerHeight`:** The header extent, within the node height.

**Parameter `title`:** A display title already interpreted by its domain owner.

**Parameter `ports`:** Immutable neutral endpoint descriptions; the collection is copied.

## Exceptions

**Exception `T:System.ArgumentNullException`:** The title or port collection is null.

**Exception `T:System.ArgumentException`:** A node or port identity is invalid, duplicated or owned by a different node.

**Exception `T:System.ArgumentOutOfRangeException`:** The node's geometry is nonfinite or has an invalid extent.
