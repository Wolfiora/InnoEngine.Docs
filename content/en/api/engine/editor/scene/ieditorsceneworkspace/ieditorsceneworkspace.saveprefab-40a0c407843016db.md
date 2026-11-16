---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.40a0c407843016db1d3162ea07e4a6b8e7437bb6c70fea1a2d19fe68b37bb00c
symbol: engine:Inno.Editor.Scene:M:Inno.Editor.Scene.IEditorSceneWorkspace.SavePrefab(Inno.Scene.GameObject,System.String)
title: IEditorSceneWorkspace.SavePrefab
kind: api
owners:
- Inno.Editor.Scene
apiSurface: source-clr
reviewed: f03f04445e9b17064e8e5129b1c519a6406782f86da68b1e72ed21b63bb364fd
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
