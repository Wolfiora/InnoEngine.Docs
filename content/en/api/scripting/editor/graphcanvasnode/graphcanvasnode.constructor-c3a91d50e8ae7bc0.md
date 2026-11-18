---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.c3a91d50e8ae7bc0124edc5c067ccc66671112a1a0a15cf051c4fda44c9a8441
symbol: scripting:Inno.Editor.Graph.ImGui:M:InnoEditor.Graph.GraphCanvasNode.#ctor(InnoEngine.Graphs.GraphNodeId,InnoEngine.Graphs.GraphPosition,System.Numerics.Vector2,System.Single,System.String,System.Collections.Generic.IEnumerable{InnoEditor.Graph.GraphCanvasPort})
title: GraphCanvasNode.Constructor
kind: api
owners:
- Inno.Editor.Graph.ImGui
apiSurface: editor-script
sourceFingerprint: bda01abe4756c886454a0737522427e0ca76845965bd1f2a8a38ea561d0d664b
apiScope: Editor
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
