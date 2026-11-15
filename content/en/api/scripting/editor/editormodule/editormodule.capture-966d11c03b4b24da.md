---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.966d11c03b4b24da2c0bcb34339d008f778794d6a03e71637dee69b4ad45a0ab
symbol: scripting:Inno.Editor.Core:M:InnoEditor.Core.EditorModule.Capture(InnoEditor.Core.EditorState)
title: EditorModule.Capture
kind: api
owners:
- Inno.Editor.Core
apiSurface: editor-script
reviewed: e6f65800f2c39ca52da30259b77c49177f77b148d72f9ea1a609d295ed7013c0
apiScope: Editor

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

## Remarks

Overriding this method opts the module into project-state IO. Modules that keep the base implementation are never registered with the persistence coordinator and therefore perform no state reads or writes.

## Parameters

**Parameter `state`:** The writable parameter that receives the complete readable state for this module.
