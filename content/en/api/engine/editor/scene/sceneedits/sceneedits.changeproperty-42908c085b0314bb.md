---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.42908c085b0314bb2eceaf16e1f03d32b5331885aa000d9c25ed65d79bbc886c
symbol: engine:Inno.Editor.Scene:M:Inno.Editor.Scene.SceneEdits.ChangeProperty(Inno.Scene.EngineObject,System.String,System.Action,System.String,System.String)
title: SceneEdits.ChangeProperty
kind: api
owners:
- Inno.Editor.Scene
apiSurface: source-clr
sourceFingerprint: f5bde74554604df62587d734cf99c2e9070aff7f47a072b27814bd982cb30524
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `target`:** The live scene object containing the root serialized property.

**Parameter `propertyName`:** The exact root serialized member key.

**Parameter `mutation`:** The mutation that assigns the new value.

**Parameter `historyName`:** The user-facing history entry name.

**Parameter `mergeKey`:** An optional stable key for coalescing adjacent continuous edits.

## Returns

`true` when the property value changed and a history entry was recorded.
