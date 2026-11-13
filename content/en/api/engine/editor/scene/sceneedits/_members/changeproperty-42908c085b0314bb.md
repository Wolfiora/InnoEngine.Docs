---
uid: api.42908c085b0314bb2eceaf16e1f03d32b5331885aa000d9c25ed65d79bbc886c
symbol: "engine:Inno.Editor.Scene:M:Inno.Editor.Scene.SceneEdits.ChangeProperty(Inno.Scene.EngineObject,System.String,System.Action,System.String,System.String)"
source: xml
reviewed: 1cea260d673ac8210239e6b064e4a72dae565e5bb70f856be545727c98b5d8a3
title: "ChangeProperty"
kind: api
owners: [Inno.Editor.Scene]
apiSurface: source-clr
---

Applies a mutation to one serializable scene property and records only its before and after values.

**Parameter `target`:** The live scene object containing the root serialized property.

**Parameter `propertyName`:** The exact root serialized member key.

**Parameter `mutation`:** The mutation that assigns the new value.

**Parameter `historyName`:** The user-facing history entry name.

**Parameter `mergeKey`:** An optional stable key for coalescing adjacent continuous edits.

**Returns:** `true` when the property value changed and a history entry was recorded.
