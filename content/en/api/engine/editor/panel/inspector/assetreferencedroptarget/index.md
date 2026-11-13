---
uid: api.inno.editor.panel.inspector.1f4dfc47eff543a2
symbol: "engine:Inno.Editor.Panel.Inspector:T:Inno.Editor.Panel.Inspector.AssetReferenceDropTarget"
source: xml
reviewed: e3652eebd5266bf55c2189a6fda73caa94c95fe9f813ae26b41d213dacc01149
title: "AssetReferenceDropTarget"
kind: api
owners: [Inno.Editor.Panel.Inspector]
apiSurface: source-clr
contracts:
- project.inno-editor-panel-inspector
aliases: []
---

Borrows an asset property's type and assignment callback for one synchronous drop request.

## Remarks

Recreate this target for each presentation request. Its type and callback must not be retained across frames or extension generations, or included in History or persistent state.
