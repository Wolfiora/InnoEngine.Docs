---
uid: api.cef5160c315bf2aca39bd90e224a3010c38601c3ef37b8d7412a2d7f91345b87
symbol: "scripting:Inno.Editor.Graph.ImGui:M:InnoEditor.Graph.GraphCanvasView.BoxNodes(InnoEditor.Graph.GraphCanvasLayout,System.Numerics.Vector2,System.Numerics.Vector2)"
source: xml
reviewed: e7c6a1313393657b2a61dc44acf071dad4faa3548ef9b5cd4a742b7469e85aed
title: "BoxNodes"
kind: api
owners: [Inno.Editor.Graph.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Finds nodes intersecting a screen-space selection rectangle in document draw order.

**Parameter `layout`:** The current neutral display snapshot.

**Parameter `first`:** One corner of the selection box.

**Parameter `second`:** The opposite corner, in any drag direction.

**Returns:** Stable graph node IDs; no live domain objects are returned.
