---
uid: api.40a0c407843016db1d3162ea07e4a6b8e7437bb6c70fea1a2d19fe68b37bb00c
symbol: "engine:Inno.Editor.Scene:M:Inno.Editor.Scene.IEditorSceneWorkspace.SavePrefab(Inno.Scene.GameObject,System.String)"
source: xml
reviewed: 1dd99bbd8f8ef9c8429037068c8a6df714256cc5d7e8b84f4169bd1662adc96a
title: "IEditorSceneWorkspace.SavePrefab"
kind: api
owners: [Inno.Editor.Scene]
apiSurface: source-clr
---

Captures a game object subtree as a prefab in the requested directory.

## Parameters

**Parameter `gameObject`:** The prefab root.

**Parameter `currentDirectory`:** The target asset directory.

## Returns

The saved source-relative path.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown while Play Mode runtime copies are active or when the asset cannot be persisted.
