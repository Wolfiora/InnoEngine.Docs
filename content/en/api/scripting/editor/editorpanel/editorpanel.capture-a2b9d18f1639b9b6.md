---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.a2b9d18f1639b9b6c0c0cd17d6fcc63896eb4912e5786449fb697f60d6366e5a
symbol: scripting:Inno.Editor.Core:M:InnoEditor.Core.EditorPanel.Capture(InnoEditor.Core.EditorState)
title: EditorPanel.Capture
kind: api
owners:
- Inno.Editor.Core
apiSurface: editor-script
reviewed: 6ca505d82431dca5f4bc71e4233a0e3d5bba2912f548285dd3cf81b57000dafa
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Remarks

Overriding this method opts the panel into project-state IO. Panels that keep the base implementation are never registered with the persistence coordinator and therefore perform no state reads or writes. Panel visibility is persisted separately for every registered panel.

## Parameters

**Parameter `state`:** The writable parameter that receives the complete readable state for this panel.
