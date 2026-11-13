---
uid: api.inno.editor.panel.inspector.editor-script.12f4511ea1a9fe24
symbol: "scripting:Inno.Editor.Panel.Inspector:T:InnoEditor.Inspection.EngineObjectReferenceDropTarget"
source: xml
reviewed: 3bccdb92a5a91afbea1810b4c839141be3cc6340e55ad6b2a9270fa2f1871102
title: "EngineObjectReferenceDropTarget"
kind: api
owners: [Inno.Editor.Panel.Inspector]
apiSurface: editor-script
apiScope: Editor
contracts:
- manual.scripting.use-script-api
- project.inno-editor-panel-inspector
aliases: []
---

Borrows an object property's type and assignment callback for one synchronous drop request.

## Remarks

Recreate this target for each presentation request. Its type and callback must not be retained across frames or extension generations, or included in History or persistent state.
