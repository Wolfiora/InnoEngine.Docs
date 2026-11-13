---
uid: api.538c6d1c351e2e91e9b663ee42a15688a40b376375366782e54809820a5cba7a
symbol: "scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorInteractions.ClosePanel(System.String)"
source: xml
reviewed: d2b2aa172bd01be18b2926daebe7bfe77e7244a55600122383edc8b4ec9848e5
title: "EditorInteractions.ClosePanel"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: editor-script
apiScope: Editor
---

Closes one panel in the active extension generation without toggling its current state.

**Parameter `panelId`:** The stable panel identifier to resolve.

**Returns:** `true` when an available panel was found.

**Exception `T:System.ArgumentException`:** Thrown when `panelId` is empty.
