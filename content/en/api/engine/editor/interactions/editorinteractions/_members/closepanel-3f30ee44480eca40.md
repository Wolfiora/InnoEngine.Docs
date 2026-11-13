---
uid: api.3f30ee44480eca405b70e1234abf6b90222b1bbf94ef254d5e3aabff6b49dfa2
symbol: "engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorInteractions.ClosePanel(System.String)"
source: xml
reviewed: b54b04aaffea4195dde1f162838e161e0dc6feccee01b5424534231bed4d25c5
title: "ClosePanel"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: source-clr
---

Closes one panel in the active extension generation without toggling its current state.

**Parameter `panelId`:** The stable panel identifier to resolve.

**Returns:** `true` when an available panel was found.

**Exception `T:System.ArgumentException`:** Thrown when `panelId` is empty.
