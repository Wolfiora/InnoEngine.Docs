---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.2c3ea9c840e1f7b34e0b6713642fa4a573f3019bde7d0aa72749bd471dcb326f
symbol: scripting:Inno.Editor.Scene:M:InnoEditor.Scene.SceneEdits.ChangeProperty(InnoEngine.Scene.EngineObject,System.String,System.Action,System.String,System.String)
title: SceneEdits.ChangeProperty
kind: api
owners:
- Inno.Editor.Scene
apiSurface: editor-script
sourceFingerprint: 2e6b7c323cbd601b22629e0694b835e29fae8fc527aecd33a7c522cf3fbc80ac
apiScope: Editor
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
