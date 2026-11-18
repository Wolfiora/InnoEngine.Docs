---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.a2b9d18f1639b9b6c0c0cd17d6fcc63896eb4912e5786449fb697f60d6366e5a
symbol: scripting:Inno.Editor.Core:M:InnoEditor.Core.EditorPanel.Capture(InnoEditor.Core.EditorState)
title: EditorPanel.Capture
kind: api
owners:
- Inno.Editor.Core
apiSurface: editor-script
sourceFingerprint: 838697c22afd5ccf7c4e0e617a2b1332bd44c2df0183a3cb6a6f2b741f167d39
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
