---
uid: api.7e48e98d3380108c3be30fd032fb8fd7268572d05d8745016fc041d977e127eb
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.EditorMenuRenderer.WindowContextMenu(System.String,Inno.Editor.Interactions.EditorInteraction)"
source: xml
reviewed: 1b5dafb75fcc8bb4d71ce08afc5c54c2805a72e03f6224c86bf3849d770e310c
title: "WindowContextMenu"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
---

Draws a resolved right-click menu when the current ImGui window's unoccupied background is clicked.

**Parameter `id`:** The stable popup identifier in the current ImGui ID scope.

**Parameter `interaction`:** The interaction area and directory target for the background operation.

**Returns:** `true` while the background context popup is open and its items were drawn.
