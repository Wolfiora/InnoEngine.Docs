---
uid: api.7a441be21abce659de019c70d21efe0baa083f18ba681ea8e8407990c4a650d9
symbol: "scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorInteractions.TogglePanel(System.String)"
source: xml
reviewed: 8a522bd56da43750f6ec05b16d3fd7f09c702bd00529dbd0c60eceabdc4676b6
title: "EditorInteractions.TogglePanel"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: editor-script
apiScope: Editor
---

Toggles one panel in the currently active extension generation.

**Parameter `panelId`:** The stable panel identifier to resolve.

**Returns:** `true` when an available panel was found and toggled.

**Exception `T:System.ArgumentException`:** Thrown when `panelId` is empty.
