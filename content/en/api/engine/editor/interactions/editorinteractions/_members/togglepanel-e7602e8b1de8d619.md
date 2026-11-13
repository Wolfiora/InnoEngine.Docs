---
uid: api.e7602e8b1de8d619aa01ab0126bcd5e5b41c1a48898ff0ce2dd86f954d54aa63
symbol: "engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorInteractions.TogglePanel(System.String)"
source: xml
reviewed: e494802330117d7bc88cbb20d5b499c1fa4deca4e4d2294416ebef1091c218f1
title: "TogglePanel"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: source-clr
---

Toggles one panel in the currently active extension generation.

**Parameter `panelId`:** The stable panel identifier to resolve.

**Returns:** `true` when an available panel was found and toggled.

**Exception `T:System.ArgumentException`:** Thrown when `panelId` is empty.
