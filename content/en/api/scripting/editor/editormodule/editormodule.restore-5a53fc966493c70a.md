---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.5a53fc966493c70acf09c495e72b84e7ba5f0d6889a9a527921ce6a353101cb0
symbol: scripting:Inno.Editor.Core:M:InnoEditor.Core.EditorModule.Restore(InnoEditor.Core.EditorState)
title: EditorModule.Restore
kind: api
owners:
- Inno.Editor.Core
apiSurface: editor-script
sourceFingerprint: 99bb94fdc909b99de9299ec095a5190ac267fd138bb44ad6e3afd2f236716a3b
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `state`:** The read-only state parameter for this module. Missing or incompatible values return the fallback supplied to ```M:InnoEditor.Core.EditorState.Get``1(System.String,``0)```.

## Remarks

This method is called only when `M:InnoEditor.Core.EditorModule.Capture(InnoEditor.Core.EditorState)` is overridden. It runs once after the module is started and before the module is allowed to capture replacement state.
