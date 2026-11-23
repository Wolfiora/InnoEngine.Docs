---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.7e50e6df536ce33c0d73b4727be1157544e2d618aa7a1b0ba8d324625eb38357
symbol: engine:Inno.Editor.Graph.ImGui:M:Inno.Editor.Graph.ImGui.GraphCanvasNode.#ctor(Inno.Core.Graphs.GraphNodeID,Inno.Core.Graphs.GraphPosition,System.Numerics.Vector2,System.Single,System.String,System.Collections.Generic.IEnumerable{Inno.Editor.Graph.ImGui.GraphCanvasPort})
title: GraphCanvasNode.Constructor
kind: api
owners:
- Inno.Editor.Graph.ImGui
apiSurface: source-clr
sourceFingerprint: 21ae29afc4e974610cddb719d26ece391e628997ed5e5c975b166a8b6c4699d8
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

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
