---
uid: api.c3a91d50e8ae7bc0124edc5c067ccc66671112a1a0a15cf051c4fda44c9a8441
symbol: "scripting:Inno.Editor.Graph.ImGui:M:InnoEditor.Graph.GraphCanvasNode.#ctor(InnoEngine.Graphs.GraphNodeId,InnoEngine.Graphs.GraphPosition,System.Numerics.Vector2,System.Single,System.String,System.Collections.Generic.IEnumerable{InnoEditor.Graph.GraphCanvasPort})"
source: xml
reviewed: 4a91a411ce05543b96252b13e039e79106099bc1e9e2a57c083f0d593968373a
title: "Constructor"
kind: api
owners: [Inno.Editor.Graph.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Creates immutable display data that can safely outlive the extension that described it.

**Parameter `id`:** The existing graph node identity.

**Parameter `position`:** The node's document position in graph coordinates.

**Parameter `size`:** Finite positive width and height in graph coordinates.

**Parameter `headerHeight`:** The header extent, within the node height.

**Parameter `title`:** A display title already interpreted by its domain owner.

**Parameter `ports`:** Immutable neutral endpoint descriptions; the collection is copied.

**Exception `T:System.ArgumentNullException`:** The title or port collection is null.

**Exception `T:System.ArgumentException`:** A node or port identity is invalid, duplicated or owned by a different node.

**Exception `T:System.ArgumentOutOfRangeException`:** The node's geometry is nonfinite or has an invalid extent.
