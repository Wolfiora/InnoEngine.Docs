---
title: "IEditorSceneWorkspace"
description: "Reference for IEditorSceneWorkspace in Inno.Editor.Scene."
uid: api.inno.editor.scene.editor-script.f71c1f2d9d6e32eb
kind: api
owners:
  - Inno.Editor.Scene
apiSurface: editor-script
contracts:
  - project.inno-editor-scene
  - manual.scripting.use-script-api
---
# `IEditorSceneWorkspace`

This reference describes `IEditorSceneWorkspace` in `Inno.Editor.Scene`. Read the [shared contract](../../projects/inno-editor-scene.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## Members

| Member | Kind |
| --- | --- |
| [`CanEdit`](#api-e2320ef717e12cfe) | Method |
| [`IsDirty`](#api-514174e86c6c2db5) | Method |
| [`Open`](#api-d59197feb0fd92c4) | Method |
| [`Save`](#api-5938d9ce00baddd2) | Method |
| [`SavePrefab`](#api-f1f6a537d9342607) | Method |
| [`SaveToDirectory`](#api-63ae7d40b9322628) | Method |
| [`SetActiveScene`](#api-2ee8781560c2e0ee) | Method |
| [`TryGetSourcePath`](#api-3028c3b710399fcf) | Method |
| [`activeScene`](#api-039c20d5ef095403) | Property |
| [`canPersist`](#api-fb8868700f39e586) | Property |
| [`scenes`](#api-eca6868f367e81c1) | Property |

## Type declaration

<a id="api-f71c1f2d9d6e32eb"></a>
<!-- api: T:InnoEditor.Scene.IEditorSceneWorkspace fc0cd3d6546d2e2cb4afbcbeb841272186c0eabedf740e100f81ece182fa1b08 -->

```csharp
public interface InnoEditor.Scene.IEditorSceneWorkspace
```

Exposes the active Edit or Play scene presentation and the persistence operations available to it.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Scene/Documents/IEditorSceneWorkspace.cs#L10).

## `CanEdit`

<a id="api-e2320ef717e12cfe"></a>
<!-- api: M:InnoEditor.Scene.IEditorSceneWorkspace.CanEdit(InnoEngine.Scene.GameScene) a35dabaacfae4d72b03e09f4dfd18300fac73ca000fce37bbb316c0c767ffe6b -->

```csharp
bool InnoEditor.Scene.IEditorSceneWorkspace.CanEdit(InnoEngine.Scene.GameScene scene)
```

Gets whether a loaded scene may be changed in the current Edit or isolated Play world.

**Parameter `scene`:** The scene to inspect.

**Returns:** `true` for a writable Project scene or transient scene in the presented
            world. Changes made during Play remain in the runtime copy and are discarded on stop.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Scene/Documents/IEditorSceneWorkspace.cs#L37).

## `IsDirty`

<a id="api-514174e86c6c2db5"></a>
<!-- api: M:InnoEditor.Scene.IEditorSceneWorkspace.IsDirty(InnoEngine.Scene.GameScene) 43728c5fd9365e5839d3ef7958e3d3fc68ac59a10fe466f9addc6f7ac6bcec16 -->

```csharp
bool InnoEditor.Scene.IEditorSceneWorkspace.IsDirty(InnoEngine.Scene.GameScene scene)
```

Gets whether an Edit scene contains unsaved serialized changes.

**Parameter `scene`:** The scene to inspect.

**Returns:** `true` when an Edit scene differs from its saved baseline; runtime copies always
            return `false` because they cannot be persisted.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Scene/Documents/IEditorSceneWorkspace.cs#L63).

## `Open`

<a id="api-d59197feb0fd92c4"></a>
<!-- api: M:InnoEditor.Scene.IEditorSceneWorkspace.Open(System.String) f7975e34418a6374e6a9757c8f91017638926e28a6807e9a37db28aac10d4856 -->

```csharp
InnoEngine.Scene.GameScene InnoEditor.Scene.IEditorSceneWorkspace.Open(string relativePath)
```

Opens a scene asset additively as the active editor scene.

**Parameter `relativePath`:** The source-relative scene asset path.

**Returns:** The existing loaded instance or newly loaded scene.

**Throws `System.InvalidOperationException`:** Thrown while Play Mode runtime copies are active or when the asset cannot be opened.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Scene/Documents/IEditorSceneWorkspace.cs#L77).

## `Save`

<a id="api-5938d9ce00baddd2"></a>
<!-- api: M:InnoEditor.Scene.IEditorSceneWorkspace.Save(InnoEngine.Scene.GameScene,System.String) 35216c5c34e2ad1a41cdb58e0d1513512d527ff1c9da94170682afa9cc3b5575 -->

```csharp
string InnoEditor.Scene.IEditorSceneWorkspace.Save(InnoEngine.Scene.GameScene scene, string currentDirectory)
```

Saves a scene to its existing path or into a fallback directory.

**Parameter `scene`:** The scene to save.

**Parameter `currentDirectory`:** The fallback asset directory for an unsaved scene.

**Returns:** The saved source-relative path.

**Throws `System.InvalidOperationException`:** Thrown while Play Mode runtime copies are active, when the asset cannot be persisted, or when saving would overwrite its unavailable assigned source.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Scene/Documents/IEditorSceneWorkspace.cs#L94).

## `SavePrefab`

<a id="api-f1f6a537d9342607"></a>
<!-- api: M:InnoEditor.Scene.IEditorSceneWorkspace.SavePrefab(InnoEngine.Scene.GameObject,System.String) 16a39f68ad7b1cbd0da9783a5cb8b1cc2c543cf84512eba2c75fc61e3fca02dd -->

```csharp
string InnoEditor.Scene.IEditorSceneWorkspace.SavePrefab(InnoEngine.Scene.GameObject gameObject, string currentDirectory)
```

Captures a game object subtree as a prefab in the requested directory.

**Parameter `gameObject`:** The prefab root.

**Parameter `currentDirectory`:** The target asset directory.

**Returns:** The saved source-relative path.

**Throws `System.InvalidOperationException`:** Thrown while Play Mode runtime copies are active or when the asset cannot be persisted.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Scene/Documents/IEditorSceneWorkspace.cs#L134).

## `SaveToDirectory`

<a id="api-63ae7d40b9322628"></a>
<!-- api: M:InnoEditor.Scene.IEditorSceneWorkspace.SaveToDirectory(InnoEngine.Scene.GameScene,System.String) 1f353383c45bb26bc1b09fe4e707a3c8a2e74df573d2851c142dd063ede6b50b -->

```csharp
string InnoEditor.Scene.IEditorSceneWorkspace.SaveToDirectory(InnoEngine.Scene.GameScene scene, string currentDirectory)
```

Saves a scene into the requested asset directory.

**Parameter `scene`:** The scene to save.

**Parameter `currentDirectory`:** The target asset directory.

**Returns:** The saved source-relative path.

**Throws `System.InvalidOperationException`:** Thrown while Play Mode runtime copies are active, when the asset cannot be persisted, or when saving would overwrite its unavailable assigned source.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Scene/Documents/IEditorSceneWorkspace.cs#L114).

## `SetActiveScene`

<a id="api-2ee8781560c2e0ee"></a>
<!-- api: M:InnoEditor.Scene.IEditorSceneWorkspace.SetActiveScene(InnoEngine.Scene.GameScene) 27f5dba260b5b8b5a3dd846aeb8ee0a132351944e8a34b01e8ca95c103adb0df -->

```csharp
void InnoEditor.Scene.IEditorSceneWorkspace.SetActiveScene(InnoEngine.Scene.GameScene scene)
```

Makes one presented scene active without changing scene order.

**Parameter `scene`:** The loaded scene to activate.

**Throws `System.ArgumentNullException`:** Thrown when `scene` is `null`.

**Throws `System.InvalidOperationException`:** Thrown when the scene is not loaded by this workspace.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Scene/Documents/IEditorSceneWorkspace.cs#L51).

## `TryGetSourcePath`

<a id="api-3028c3b710399fcf"></a>
<!-- api: M:InnoEditor.Scene.IEditorSceneWorkspace.TryGetSourcePath(InnoEngine.Scene.GameScene,System.String@) 0573b2700fc0a753c61e037adce18d1391ab0de49738bedad85372150913ac7d -->

```csharp
bool InnoEditor.Scene.IEditorSceneWorkspace.TryGetSourcePath(InnoEngine.Scene.GameScene scene, out string relativePath)
```

Tries to get the current source-relative asset path of a saved scene.

**Parameter `scene`:** The scene whose path is requested.

**Parameter `relativePath`:** The assigned source-relative path, including a temporarily unavailable source.

**Returns:** `true` when a source remains assigned; availability is diagnosed separately.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Scene/Documents/IEditorSceneWorkspace.cs#L151).

## `activeScene`

<a id="api-039c20d5ef095403"></a>
<!-- api: P:InnoEditor.Scene.IEditorSceneWorkspace.activeScene 3f2e12d382e5c7e4b431a0a69d5a7c8016e6c94261a33a707078afa8051218e0 -->

```csharp
InnoEngine.Scene.GameScene? InnoEditor.Scene.IEditorSceneWorkspace.activeScene { get; }
```

Gets the active scene from the currently presented Edit or Play world.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Scene/Documents/IEditorSceneWorkspace.cs#L20).

## `canPersist`

<a id="api-fb8868700f39e586"></a>
<!-- api: P:InnoEditor.Scene.IEditorSceneWorkspace.canPersist 93c471a6f8136fb98c26c5c85c2839d32e8d0c77c30ac6fc8681095c921da551 -->

```csharp
bool InnoEditor.Scene.IEditorSceneWorkspace.canPersist { get; }
```

Gets whether the currently presented scenes are authoring documents that may be persisted.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Scene/Documents/IEditorSceneWorkspace.cs#L25).

## `scenes`

<a id="api-eca6868f367e81c1"></a>
<!-- api: P:InnoEditor.Scene.IEditorSceneWorkspace.scenes dc6cfa2076d897e642a30ed9ff495b3880c7ee521be149f0c2603a646b2781b3 -->

```csharp
System.Collections.Generic.IReadOnlyList<InnoEngine.Scene.GameScene> InnoEditor.Scene.IEditorSceneWorkspace.scenes { get; }
```

Gets the Edit scenes outside Play Mode or the isolated runtime copies while Play Mode is active.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Scene/Documents/IEditorSceneWorkspace.cs#L15).
