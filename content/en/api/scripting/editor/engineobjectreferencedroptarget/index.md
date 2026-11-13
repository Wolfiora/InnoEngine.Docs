---
uid: api.inno.editor.panel.inspector.editor-script.12f4511ea1a9fe24
symbol: "scripting:Inno.Editor.Panel.Inspector:T:InnoEditor.Inspection.EngineObjectReferenceDropTarget"
source: xml
reviewed: f425f6c00e8a0fb6f00fc4e608f0698c9364c129b29ae65b91de011fc959cb18
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
