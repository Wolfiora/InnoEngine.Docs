---
uid: api.af94d58ac2ccf54175f5e1bbefa430ee4d3f378f14d8dbeb7149f9e13c4a276d
symbol: "engine:Inno.Editor.Assets:M:Inno.Editor.Assets.AssetEditingModule.CreateDirectory(Inno.Assets.AssetPath)"
source: xml
reviewed: e7cc71e8d396bd13d104dad35ceb5f00569fcc88d2020dcda494936ca4f5c4dd
title: "CreateDirectory"
kind: api
owners: [Inno.Editor.Assets]
apiSurface: source-clr
---

Creates a uniquely named directory and records its removal and restoration in shared History.

**Parameter `parent`:** An existing writable source directory.

**Returns:** The indexed identity of the newly created directory.

**Exception `T:System.InvalidOperationException`:** The source is read-only, unavailable, or cannot retain the History entry.
