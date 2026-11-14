---
uid: api.7c870b5f4c1d38517378a32cabd3370cb78f8f79a0c1652e13b9391ece054fa4
symbol: "scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorInteractions.OpenPanel(System.String)"
source: xml
reviewed: 67225dfca61622e2d0d3979ba84372862d51ecffa388fec04e7971cc98c27c99
title: "EditorInteractions.OpenPanel"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: editor-script
apiScope: Editor
---

Opens and requests presentation focus for one panel in the active extension generation.

**Parameter `panelId`:** The stable panel identifier to resolve.

**Returns:** `true` when an available panel was found.

**Exception `T:System.ArgumentException`:** Thrown when `panelId` is empty.
