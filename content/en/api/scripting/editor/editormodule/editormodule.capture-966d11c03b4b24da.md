---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.966d11c03b4b24da2c0bcb34339d008f778794d6a03e71637dee69b4ad45a0ab
symbol: scripting:Inno.Editor.Core:M:InnoEditor.Core.EditorModule.Capture(InnoEditor.Core.EditorState)
title: EditorModule.Capture
kind: api
owners:
- Inno.Editor.Core
apiSurface: editor-script
sourceFingerprint: 27587a880028e25bb701c6e105984839ae090571bed60fbed436431d51347dae
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `state`:** The writable parameter that receives the complete readable state for this module.

## Remarks

Overriding this method opts the module into project-state IO. Modules that keep the base implementation are never registered with the persistence coordinator and therefore perform no state reads or writes.
