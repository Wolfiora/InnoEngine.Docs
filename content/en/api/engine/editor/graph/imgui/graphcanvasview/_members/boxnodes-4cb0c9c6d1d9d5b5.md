---
uid: api.4cb0c9c6d1d9d5b585766f8674690a2c61dc9ea00132c15b6265303c088d465f
symbol: "engine:Inno.Editor.Graph.ImGui:M:Inno.Editor.Graph.ImGui.GraphCanvasView.BoxNodes(Inno.Editor.Graph.ImGui.GraphCanvasLayout,System.Numerics.Vector2,System.Numerics.Vector2)"
source: xml
reviewed: e22180028c8fc86864fa5160d55dc179b17ac3eb64ea22f6f22005cbda9e7432
title: "BoxNodes"
kind: api
owners: [Inno.Editor.Graph.ImGui]
apiSurface: source-clr
---

Finds nodes intersecting a screen-space selection rectangle in document draw order.

**Parameter `layout`:** The current neutral display snapshot.

**Parameter `first`:** One corner of the selection box.

**Parameter `second`:** The opposite corner, in any drag direction.

**Returns:** Stable graph node IDs; no live domain objects are returned.
