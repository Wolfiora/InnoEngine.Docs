---
uid: api.a2b9d18f1639b9b6c0c0cd17d6fcc63896eb4912e5786449fb697f60d6366e5a
symbol: "scripting:Inno.Editor.Core:M:InnoEditor.Core.EditorPanel.Capture(InnoEditor.Core.EditorState)"
source: xml
reviewed: 994800e4e0b9af42a598d09b45f0f070b9933fdafc75d8ee3e224d78860dfbf7
title: "Capture"
kind: api
owners: [Inno.Editor.Core]
apiSurface: editor-script
apiScope: Editor
---

Captures readable project state owned by this panel.

## Remarks

Overriding this method opts the panel into project-state IO. Panels that keep the base implementation are never registered with the persistence coordinator and therefore perform no state reads or writes. Panel visibility is persisted separately for every registered panel.

**Parameter `state`:** The writable parameter that receives the complete readable state for this panel.
