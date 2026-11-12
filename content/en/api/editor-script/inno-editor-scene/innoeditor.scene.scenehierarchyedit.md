---
title: "SceneHierarchyEdit"
description: "Reference for SceneHierarchyEdit in Inno.Editor.Scene."
uid: api.inno.editor.scene.editor-script.4ff217d4026e6e37
kind: api
owners:
  - Inno.Editor.Scene
apiSurface: editor-script
contracts:
  - project.inno-editor-scene
  - manual.scripting.use-script-api
---
# `SceneHierarchyEdit`

This reference describes `SceneHierarchyEdit` in `Inno.Editor.Scene`. Read the [shared contract](../../projects/inno-editor-scene.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-1d1b43ee603b6a7d) | Method |
| [`MoveToScene`](#api-74dc900dd0b6afb1) | Method |

## Type declaration

<a id="api-4ff217d4026e6e37"></a>
<!-- api: T:InnoEditor.Scene.SceneHierarchyEdit 7d6eaf11d0a3eb81b490c5d99829264d1e4442f6cce9939f2585c9a7ab55c1f2 -->

```csharp
public sealed class InnoEditor.Scene.SceneHierarchyEdit
```

Exposes world-owned hierarchy operations inside one atomic scene history mutation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Scene/Documents/SceneHierarchyEdit.cs#L10).

## `#ctor`

<a id="api-1d1b43ee603b6a7d"></a>
<!-- api: M:InnoEditor.Scene.SceneHierarchyEdit.#ctor 9e1f4665bf0ab4f91dbd288c31620c0a2a6aba1d0daecea699d2b74a2993c3f7 -->

```csharp
public InnoEditor.Scene.SceneHierarchyEdit.SceneHierarchyEdit()
```

Appears in the generated script reference without a matching public or protected engine constructor.

**Constraints:** This is an IDE projection artifact, not a supported construction path. Do not call this constructor from scripts; obtain the instance through the containing type's documented owner or factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Scene/Documents/SceneHierarchyEdit.cs#L10).

## `MoveToScene`

<a id="api-74dc900dd0b6afb1"></a>
<!-- api: M:InnoEditor.Scene.SceneHierarchyEdit.MoveToScene(InnoEngine.Scene.GameObject,InnoEngine.Scene.GameScene) 004ec5f3813e48ae651c2dd55d329cb5bf404fa63a3ecaf5bbc45f4e6f59cfec -->

```csharp
public void InnoEditor.Scene.SceneHierarchyEdit.MoveToScene(InnoEngine.Scene.GameObject gameObject, InnoEngine.Scene.GameScene destination)
```

Moves a live GameObject subtree into another scene owned by the current editor world.

**Parameter `gameObject`:** The live root object to move.

**Parameter `destination`:** The loaded destination scene.

**Throws `System.ArgumentNullException`:** Thrown when an argument is `null`.

**Throws `System.InvalidOperationException`:** Thrown when either scene is not loaded by the editor world.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Scene/Documents/SceneHierarchyEdit.cs#L34).
