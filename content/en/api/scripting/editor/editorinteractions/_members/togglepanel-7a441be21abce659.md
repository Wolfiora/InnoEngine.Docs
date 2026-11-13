---
uid: api.7a441be21abce659de019c70d21efe0baa083f18ba681ea8e8407990c4a650d9
symbol: "scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorInteractions.TogglePanel(System.String)"
source: xml
reviewed: 6ef4e249b77b52f7380d0087b26bb467556c3ecc8d7be46a86349ae6afe235b6
title: "TogglePanel"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: editor-script
apiScope: Editor
---

Toggles one panel in the currently active extension generation.

**Parameter `panelId`:** The stable panel identifier to resolve.

**Returns:** `true` when an available panel was found and toggled.

**Exception `T:System.ArgumentException`:** Thrown when `panelId` is empty.
