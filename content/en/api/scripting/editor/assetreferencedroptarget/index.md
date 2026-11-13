---
uid: api.inno.editor.panel.inspector.editor-script.3cb5d8be07881d40
symbol: "scripting:Inno.Editor.Panel.Inspector:T:InnoEditor.Inspection.AssetReferenceDropTarget"
source: xml
reviewed: b131eb6be3752048be9db336f840e2f6a84d6f5398cf8ed98eb4fbd8dd219d53
title: "AssetReferenceDropTarget"
kind: api
owners: [Inno.Editor.Panel.Inspector]
apiSurface: editor-script
apiScope: Editor
contracts:
- manual.scripting.use-script-api
- project.inno-editor-panel-inspector
aliases: []
---

Borrows an asset property's type and assignment callback for one synchronous drop request.

## Remarks

Recreate this target for each presentation request. Its type and callback must not be retained across frames or extension generations, or included in History or persistent state.
