---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.52747d0cb0b38564fc647a1b446d321d3572f7c19a8ffd586ba1d18b56bd8914
symbol: scripting:Inno.Editor.Graph.ImGui:M:InnoEditor.Graph.GraphCanvasNode.#ctor(InnoEngine.Graphs.GraphNodeID,InnoEngine.Graphs.GraphPosition,System.Numerics.Vector2,System.Single,System.String,System.Collections.Generic.IEnumerable{InnoEditor.Graph.GraphCanvasPort})
title: GraphCanvasNode.Constructor
kind: api
owners:
- Inno.Editor.Graph.ImGui
apiSurface: editor-script
sourceFingerprint: 926a976485409ec5b45510bb49dc4b53e8e4b70f3350f81806cb7a032f0be600
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
