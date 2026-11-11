---
title: "SceneHierarchyEdit"
description: "Reference for SceneHierarchyEdit in Inno.Editor.Scene."
uid: api.inno.editor.scene.79ba8641520e8770
kind: api
owners:
  - Inno.Editor.Scene
apiSurface: source-clr
contracts:
  - project.inno-editor-scene
---
# `SceneHierarchyEdit`

This reference describes `SceneHierarchyEdit` in `Inno.Editor.Scene`. Read the [shared contract](../../../projects/inno-editor-scene.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`MoveToScene`](#api-d4cbbe02472a697b) | Method |

## Type declaration

<a id="api-79ba8641520e8770"></a>
<!-- api: T:Inno.Editor.Scene.SceneHierarchyEdit 7178858bb9fa6114a9e77bc97f0dce944e9447863b3e60ff3baa7477b1f21938 -->

```csharp
public sealed class Inno.Editor.Scene.SceneHierarchyEdit
```

Exposes world-owned hierarchy operations inside one atomic scene history mutation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scene/Documents/SceneHierarchyEdit.cs#L10).

## `MoveToScene`

<a id="api-d4cbbe02472a697b"></a>
<!-- api: M:Inno.Editor.Scene.SceneHierarchyEdit.MoveToScene(Inno.Scene.GameObject,Inno.Scene.GameScene) b4f3f268e4c99947a94c2890cbcbbe58194f3b22c9ddd0effd767e38a24e2ff9 -->

```csharp
public void Inno.Editor.Scene.SceneHierarchyEdit.MoveToScene(Inno.Scene.GameObject gameObject, Inno.Scene.GameScene destination)
```

Moves a live GameObject subtree into another scene owned by the current editor world.

**Parameter `gameObject`:** The live root object to move.

**Parameter `destination`:** The loaded destination scene.

**Throws `System.ArgumentNullException`:** Thrown when an argument is `null`.

**Throws `System.InvalidOperationException`:** Thrown when either scene is not loaded by the editor world.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scene/Documents/SceneHierarchyEdit.cs#L34).
