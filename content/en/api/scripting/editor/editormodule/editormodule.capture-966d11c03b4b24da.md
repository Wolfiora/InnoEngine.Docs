---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.966d11c03b4b24da2c0bcb34339d008f778794d6a03e71637dee69b4ad45a0ab
symbol: scripting:Inno.Editor.Core:M:InnoEditor.Core.EditorModule.Capture(InnoEditor.Core.EditorState)
title: EditorModule.Capture
kind: api
owners:
- Inno.Editor.Core
apiSurface: editor-script
sourceFingerprint: 2e89cc8a62a2b58484e3bc0670d396155571b2e61eacca71bfaca83890fec7f7
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Remarks

Overriding this method opts the module into project-state IO. Modules that keep the base implementation are never registered with the persistence coordinator and therefore perform no state reads or writes.

## Parameters

**Parameter `state`:** The writable parameter that receives the complete readable state for this module.
