---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.a2b9d18f1639b9b6c0c0cd17d6fcc63896eb4912e5786449fb697f60d6366e5a
symbol: scripting:Inno.Editor.Core:M:InnoEditor.Core.EditorPanel.Capture(InnoEditor.Core.EditorState)
title: EditorPanel.Capture
kind: api
owners:
- Inno.Editor.Core
apiSurface: editor-script
sourceFingerprint: f0cedff4ae01e4860d05b6c6fd5f20e869f9dfac46c881b1190fb3544ccf54b8
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `state`:** The writable parameter that receives the complete readable state for this panel.

## Remarks

Overriding this method opts the panel into project-state IO. Panels that keep the base implementation are never registered with the persistence coordinator and therefore perform no state reads or writes. Panel visibility is persisted separately for every registered panel.
