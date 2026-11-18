---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.a85b74b9d2ecd8053d6107e6b794f92cdee6a1182dec03c0be160f8d3fd384d2
symbol: engine:Inno.Editor.Scene:M:Inno.Editor.Scene.IEditorSceneWorkspace.CanEdit(Inno.Scene.GameScene)
title: IEditorSceneWorkspace.CanEdit
kind: api
owners:
- Inno.Editor.Scene
apiSurface: source-clr
sourceFingerprint: 44705a0e72d6e0fd5419565f617b02fe13928c0d1692b7569dd4d6ccf96f6905
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `scene`:** The scene to inspect.

## Returns

`true` for a writable Project scene or transient scene in the presented world. Changes made during Play remain in the runtime copy and are discarded on stop.
