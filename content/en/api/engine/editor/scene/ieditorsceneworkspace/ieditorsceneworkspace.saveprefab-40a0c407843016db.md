---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.40a0c407843016db1d3162ea07e4a6b8e7437bb6c70fea1a2d19fe68b37bb00c
symbol: engine:Inno.Editor.Scene:M:Inno.Editor.Scene.IEditorSceneWorkspace.SavePrefab(Inno.Scene.GameObject,System.String)
title: IEditorSceneWorkspace.SavePrefab
kind: api
owners:
- Inno.Editor.Scene
apiSurface: source-clr
sourceFingerprint: 79a850ee3c38750caa4df23cf52afaa2dae99807d3d1a69777f3b88681662781
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `gameObject`:** The prefab root.

**Parameter `currentDirectory`:** The target asset directory.

## Returns

The saved source-relative path.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown while Play Mode runtime copies are active or when the asset cannot be persisted.
