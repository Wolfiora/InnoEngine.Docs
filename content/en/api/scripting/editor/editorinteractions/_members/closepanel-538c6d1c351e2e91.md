---
uid: api.538c6d1c351e2e91e9b663ee42a15688a40b376375366782e54809820a5cba7a
symbol: "scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorInteractions.ClosePanel(System.String)"
source: xml
reviewed: 607a39020e27f7532b7245c3662dc2072e3f10338ab86ab4cbea9b13b3ed0c98
title: "ClosePanel"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: editor-script
apiScope: Editor
---

Closes one panel in the active extension generation without toggling its current state.

**Parameter `panelId`:** The stable panel identifier to resolve.

**Returns:** `true` when an available panel was found.

**Exception `T:System.ArgumentException`:** Thrown when `panelId` is empty.
