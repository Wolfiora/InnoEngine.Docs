---
title: "IEditorGameScenePresentation"
description: "Reference for IEditorGameScenePresentation in Inno.Editor.Scene."
uid: api.inno.editor.scene.321713bf0a734974
kind: api
owners:
  - Inno.Editor.Scene
apiSurface: source-clr
contracts:
  - project.inno-editor-scene
---
# `IEditorGameScenePresentation`

This reference describes `IEditorGameScenePresentation` in `Inno.Editor.Scene`. Read the [shared contract](../../../projects/inno-editor-scene.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`Capture`](#api-9a18efa406f673ee) | Method |

## Type declaration

<a id="api-321713bf0a734974"></a>
<!-- api: T:Inno.Editor.Scene.IEditorGameScenePresentation 368984c2ee1e29a64dc671878d8f05e8d7e4236df8846c1f9f9f247050e7d639 -->

```csharp
public interface Inno.Editor.Scene.IEditorGameScenePresentation
```

Supplies the scene set that represents the game to Editor viewport consumers without exposing
runtime-session ownership.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scene/Presentation/IEditorGameScenePresentation.cs#L9).

## `Capture`

<a id="api-9a18efa406f673ee"></a>
<!-- api: M:Inno.Editor.Scene.IEditorGameScenePresentation.Capture 561e2bb2221a3e7aaa4c8dabe08f0665739c2ec9ccd599e554bfabf49fcd7b3e -->

```csharp
Inno.References.ContentReadScope Inno.Editor.Scene.IEditorGameScenePresentation.Capture()
```

Captures one coherent game-scene presentation for the current Editor frame.

**Returns:** A caller-owned identity scope for the Edit scenes while not playing and the isolated Play scenes
after Play Mode commits. Dispose it after consumption; it retains no scene instances and stale
identities never resolve to a replacement session or generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scene/Presentation/IEditorGameScenePresentation.cs#L19).
