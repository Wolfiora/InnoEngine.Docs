---
title: "IEditorSceneWorkspace"
description: "Reference for IEditorSceneWorkspace in Inno.Editor.Scene."
uid: api.inno.editor.scene.406cc6a3fe33e247
kind: api
owners:
  - Inno.Editor.Scene
apiSurface: source-clr
contracts:
  - project.inno-editor-scene
---
# `IEditorSceneWorkspace`

This reference describes `IEditorSceneWorkspace` in `Inno.Editor.Scene`. Read the [shared contract](../../../projects/inno-editor-scene.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`CanEdit`](#api-e9f8b9e75fa73fb4) | Method |
| [`IsDirty`](#api-cd287324b83a0647) | Method |
| [`Open`](#api-3fcb4d05de69ed42) | Method |
| [`Save`](#api-c949db2065c17e46) | Method |
| [`SavePrefab`](#api-cae7cf9d82f7f10e) | Method |
| [`SaveToDirectory`](#api-3588badbbe4499bb) | Method |
| [`SetActiveScene`](#api-26bd6a16b11b8424) | Method |
| [`TryGetSourcePath`](#api-cd499520eefdd4b4) | Method |
| [`activeScene`](#api-110d39ec989eb6ce) | Property |
| [`canPersist`](#api-b6df95e0699576e5) | Property |
| [`scenes`](#api-e6fad988f5bc627b) | Property |

## Type declaration

<a id="api-406cc6a3fe33e247"></a>
<!-- api: T:Inno.Editor.Scene.IEditorSceneWorkspace 42c69697545ed60cb8e3bfbd4ed1a7049248d2e5ee907b816ddae218efe23080 -->

```csharp
public interface Inno.Editor.Scene.IEditorSceneWorkspace
```

Exposes the active Edit or Play scene presentation and the persistence operations available to it.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scene/Documents/IEditorSceneWorkspace.cs#L10).

## `CanEdit`

<a id="api-e9f8b9e75fa73fb4"></a>
<!-- api: M:Inno.Editor.Scene.IEditorSceneWorkspace.CanEdit(Inno.Scene.GameScene) 79cf24356d2793bd9d2631fa883d547529a88225ef0c70b8b06e31a8a14561a3 -->

```csharp
bool Inno.Editor.Scene.IEditorSceneWorkspace.CanEdit(Inno.Scene.GameScene scene)
```

Gets whether a loaded scene may be changed in the current Edit or isolated Play world.

**Parameter `scene`:** The scene to inspect.

**Returns:** `true` for a writable Project scene or transient scene in the presented
    world. Changes made during Play remain in the runtime copy and are discarded on stop.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scene/Documents/IEditorSceneWorkspace.cs#L37).

## `IsDirty`

<a id="api-cd287324b83a0647"></a>
<!-- api: M:Inno.Editor.Scene.IEditorSceneWorkspace.IsDirty(Inno.Scene.GameScene) 8adafc0ad0f33de41f5dbdf73003e06b580d271fc1e1715b4a56c5ba03678c35 -->

```csharp
bool Inno.Editor.Scene.IEditorSceneWorkspace.IsDirty(Inno.Scene.GameScene scene)
```

Gets whether an Edit scene contains unsaved serialized changes.

**Parameter `scene`:** The scene to inspect.

**Returns:** `true` when an Edit scene differs from its saved baseline; runtime copies always
    return `false` because they cannot be persisted.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scene/Documents/IEditorSceneWorkspace.cs#L63).

## `Open`

<a id="api-3fcb4d05de69ed42"></a>
<!-- api: M:Inno.Editor.Scene.IEditorSceneWorkspace.Open(System.String) ec0c79f229efa4c086132fba1cccf18a6e79bde656cc9285ead8a7f80326b923 -->

```csharp
Inno.Scene.GameScene Inno.Editor.Scene.IEditorSceneWorkspace.Open(string relativePath)
```

Opens a scene asset additively as the active editor scene.

**Parameter `relativePath`:** The source-relative scene asset path.

**Returns:** The existing loaded instance or newly loaded scene.

**Throws `System.InvalidOperationException`:** Thrown while Play Mode runtime copies are active or when the asset cannot be opened.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scene/Documents/IEditorSceneWorkspace.cs#L77).

## `Save`

<a id="api-c949db2065c17e46"></a>
<!-- api: M:Inno.Editor.Scene.IEditorSceneWorkspace.Save(Inno.Scene.GameScene,System.String) c46c5ba62b7ad071c46c51ef654df2ba6466ea9fa1777992dd85dfc2eaffd6c6 -->

```csharp
string Inno.Editor.Scene.IEditorSceneWorkspace.Save(Inno.Scene.GameScene scene, string currentDirectory)
```

Saves a scene to its existing path or into a fallback directory.

**Parameter `scene`:** The scene to save.

**Parameter `currentDirectory`:** The fallback asset directory for an unsaved scene.

**Returns:** The saved source-relative path.

**Throws `System.InvalidOperationException`:** Thrown while Play Mode runtime copies are active, when the asset cannot be persisted, or when saving would overwrite its unavailable assigned source.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scene/Documents/IEditorSceneWorkspace.cs#L94).

## `SavePrefab`

<a id="api-cae7cf9d82f7f10e"></a>
<!-- api: M:Inno.Editor.Scene.IEditorSceneWorkspace.SavePrefab(Inno.Scene.GameObject,System.String) 38330aa1e1381a47fc0475eee4d3129fdb1ead30829549b59117c488d08cbb7d -->

```csharp
string Inno.Editor.Scene.IEditorSceneWorkspace.SavePrefab(Inno.Scene.GameObject gameObject, string currentDirectory)
```

Captures a game object subtree as a prefab in the requested directory.

**Parameter `gameObject`:** The prefab root.

**Parameter `currentDirectory`:** The target asset directory.

**Returns:** The saved source-relative path.

**Throws `System.InvalidOperationException`:** Thrown while Play Mode runtime copies are active or when the asset cannot be persisted.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scene/Documents/IEditorSceneWorkspace.cs#L134).

## `SaveToDirectory`

<a id="api-3588badbbe4499bb"></a>
<!-- api: M:Inno.Editor.Scene.IEditorSceneWorkspace.SaveToDirectory(Inno.Scene.GameScene,System.String) 5b1130c663734ed88456109ad84c85cfad2caab54cb8e33d3429310e226d213a -->

```csharp
string Inno.Editor.Scene.IEditorSceneWorkspace.SaveToDirectory(Inno.Scene.GameScene scene, string currentDirectory)
```

Saves a scene into the requested asset directory.

**Parameter `scene`:** The scene to save.

**Parameter `currentDirectory`:** The target asset directory.

**Returns:** The saved source-relative path.

**Throws `System.InvalidOperationException`:** Thrown while Play Mode runtime copies are active, when the asset cannot be persisted, or when saving would overwrite its unavailable assigned source.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scene/Documents/IEditorSceneWorkspace.cs#L114).

## `SetActiveScene`

<a id="api-26bd6a16b11b8424"></a>
<!-- api: M:Inno.Editor.Scene.IEditorSceneWorkspace.SetActiveScene(Inno.Scene.GameScene) 56d2e06fbfeb04453c16d1f92477276ede76c628263d19514c167a04d986311d -->

```csharp
void Inno.Editor.Scene.IEditorSceneWorkspace.SetActiveScene(Inno.Scene.GameScene scene)
```

Makes one presented scene active without changing scene order.

**Parameter `scene`:** The loaded scene to activate.

**Throws `System.ArgumentNullException`:** Thrown when `scene` is `null`.

**Throws `System.InvalidOperationException`:** Thrown when the scene is not loaded by this workspace.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scene/Documents/IEditorSceneWorkspace.cs#L51).

## `TryGetSourcePath`

<a id="api-cd499520eefdd4b4"></a>
<!-- api: M:Inno.Editor.Scene.IEditorSceneWorkspace.TryGetSourcePath(Inno.Scene.GameScene,System.String@) 281c631be51558825fd906fb096a1728916e252822af4fddb4739ea0452ab34a -->

```csharp
bool Inno.Editor.Scene.IEditorSceneWorkspace.TryGetSourcePath(Inno.Scene.GameScene scene, out string relativePath)
```

Tries to get the current source-relative asset path of a saved scene.

**Parameter `scene`:** The scene whose path is requested.

**Parameter `relativePath`:** The assigned source-relative path, including a temporarily unavailable source.

**Returns:** `true` when a source remains assigned; availability is diagnosed separately.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scene/Documents/IEditorSceneWorkspace.cs#L151).

## `activeScene`

<a id="api-110d39ec989eb6ce"></a>
<!-- api: P:Inno.Editor.Scene.IEditorSceneWorkspace.activeScene 948ce51a24aab9f45f863e58ffadb4f34c733d6c43ec929c694bc6e497eaf24d -->

```csharp
Inno.Scene.GameScene? Inno.Editor.Scene.IEditorSceneWorkspace.activeScene { get; }
```

Gets the active scene from the currently presented Edit or Play world.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scene/Documents/IEditorSceneWorkspace.cs#L20).

## `canPersist`

<a id="api-b6df95e0699576e5"></a>
<!-- api: P:Inno.Editor.Scene.IEditorSceneWorkspace.canPersist 5a39e9a86219ee9bbbac8e8b33e701ea3402f496df340d470429dca166c77b7d -->

```csharp
bool Inno.Editor.Scene.IEditorSceneWorkspace.canPersist { get; }
```

Gets whether the currently presented scenes are authoring documents that may be persisted.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scene/Documents/IEditorSceneWorkspace.cs#L25).

## `scenes`

<a id="api-e6fad988f5bc627b"></a>
<!-- api: P:Inno.Editor.Scene.IEditorSceneWorkspace.scenes bc0f00fc0161e28a1da6f768bc7df1da81f7e4febb0724100feb4e170d9e58f1 -->

```csharp
System.Collections.Generic.IReadOnlyList<Inno.Scene.GameScene> Inno.Editor.Scene.IEditorSceneWorkspace.scenes { get; }
```

Gets the Edit scenes outside Play Mode or the isolated runtime copies while Play Mode is active.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Scene/Documents/IEditorSceneWorkspace.cs#L15).
