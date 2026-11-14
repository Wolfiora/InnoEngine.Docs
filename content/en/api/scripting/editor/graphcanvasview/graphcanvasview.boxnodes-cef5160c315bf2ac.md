---
uid: api.cef5160c315bf2aca39bd90e224a3010c38601c3ef37b8d7412a2d7f91345b87
symbol: "scripting:Inno.Editor.Graph.ImGui:M:InnoEditor.Graph.GraphCanvasView.BoxNodes(InnoEditor.Graph.GraphCanvasLayout,System.Numerics.Vector2,System.Numerics.Vector2)"
source: xml
reviewed: 4421de81e2240c491e8b5ef5eab68d5bb0e4a0016a917e797d99f0fe46f69e80
title: "GraphCanvasView.BoxNodes"
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
