---
uid: api.2c3ea9c840e1f7b34e0b6713642fa4a573f3019bde7d0aa72749bd471dcb326f
symbol: "scripting:Inno.Editor.Scene:M:InnoEditor.Scene.SceneEdits.ChangeProperty(InnoEngine.Scene.EngineObject,System.String,System.Action,System.String,System.String)"
source: xml
reviewed: 27a06e832ba024643ee3ba8b40ae215d819d700c8d8053dcc56791b263f24e7a
title: "ChangeProperty"
kind: api
owners: [Inno.Editor.Scene]
apiSurface: editor-script
apiScope: Editor
---

Applies a mutation to one serializable scene property and records only its before and after values.

**Parameter `target`:** The live scene object containing the root serialized property.

**Parameter `propertyName`:** The exact root serialized member key.

**Parameter `mutation`:** The mutation that assigns the new value.

**Parameter `historyName`:** The user-facing history entry name.

**Parameter `mergeKey`:** An optional stable key for coalescing adjacent continuous edits.

**Returns:** `true` when the property value changed and a history entry was recorded.
