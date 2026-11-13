---
uid: api.1a0e314dc0ec452f8a1c1c6829ee0223f4a0692e10cdfe2609d9ff8a5f17ccb2
symbol: "scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorInteractions.TryGetPanelState(System.String,System.Boolean@)"
source: xml
reviewed: 24a04ddcfa11a038dbc13ed6f2f043a6e8bbd24b5cd3947ba839054f147467bd
title: "TryGetPanelState"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: editor-script
apiScope: Editor
---

Reads whether one available panel is currently open.

**Parameter `panelId`:** The stable panel identity.

**Parameter `isOpen`:** Receives the open state, or false when the panel is unavailable.

**Returns:** True when the current generation contains the requested available panel.
