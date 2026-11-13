---
uid: api.inno.editor.panel.inspector.379406779b0a6284
symbol: "engine:Inno.Editor.Panel.Inspector:T:Inno.Editor.Panel.Inspector.EngineObjectReferenceDropTarget"
source: xml
reviewed: 43226c9105917660bb5cfa73733014b147eca4e830dc6ab243340cb4b4b37314
title: "EngineObjectReferenceDropTarget"
kind: api
owners: [Inno.Editor.Panel.Inspector]
apiSurface: source-clr
contracts:
- project.inno-editor-panel-inspector
aliases: []
---

Borrows an object property's type and assignment callback for one synchronous drop request.

## Remarks

Recreate this target for each presentation request. Its type and callback must not be retained across frames or extension generations, or included in History or persistent state.
