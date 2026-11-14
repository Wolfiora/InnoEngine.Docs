---
uid: api.42908c085b0314bb2eceaf16e1f03d32b5331885aa000d9c25ed65d79bbc886c
symbol: "engine:Inno.Editor.Scene:M:Inno.Editor.Scene.SceneEdits.ChangeProperty(Inno.Scene.EngineObject,System.String,System.Action,System.String,System.String)"
source: xml
reviewed: fdd76b0913daa465588e577c8f3ec25a796231aaa2c6bde1d977c774f44df742
title: "SceneEdits.ChangeProperty"
kind: api
owners: [Inno.Editor.Scene]
apiSurface: source-clr
---

Applies a mutation to one serializable scene property and records only its before and after values.

## Parameters

**Parameter `target`:** The live scene object containing the root serialized property.

**Parameter `propertyName`:** The exact root serialized member key.

**Parameter `mutation`:** The mutation that assigns the new value.

**Parameter `historyName`:** The user-facing history entry name.

**Parameter `mergeKey`:** An optional stable key for coalescing adjacent continuous edits.

## Returns

`true` when the property value changed and a history entry was recorded.
