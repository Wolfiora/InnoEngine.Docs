---
uid: api.7c870b5f4c1d38517378a32cabd3370cb78f8f79a0c1652e13b9391ece054fa4
symbol: "scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorInteractions.OpenPanel(System.String)"
source: xml
reviewed: 3fbb099337a593fab861fe4a6a7f0bdc90e85312783d3b10ccafee1d4900d577
title: "OpenPanel"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: editor-script
apiScope: Editor
---

Opens and requests presentation focus for one panel in the active extension generation.

**Parameter `panelId`:** The stable panel identifier to resolve.

**Returns:** `true` when an available panel was found.

**Exception `T:System.ArgumentException`:** Thrown when `panelId` is empty.
