---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.42908c085b0314bb2eceaf16e1f03d32b5331885aa000d9c25ed65d79bbc886c
symbol: engine:Inno.Editor.Scene:M:Inno.Editor.Scene.SceneEdits.ChangeProperty(Inno.Scene.EngineObject,System.String,System.Action,System.String,System.String)
title: SceneEdits.ChangeProperty
kind: api
owners:
- Inno.Editor.Scene
apiSurface: source-clr
reviewed: e2c339df0edc6bf6bc8e03fb66e487ec76be3ed222a673c034019d37a4e09413
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
