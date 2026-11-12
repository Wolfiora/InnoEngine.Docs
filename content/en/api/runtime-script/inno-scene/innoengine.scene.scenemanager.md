---
title: "SceneManager"
description: "Reference for SceneManager in Inno.Scene."
uid: api.inno.scene.runtime-script.2abca13a8a73a1c8
kind: api
owners:
  - Inno.Scene
apiSurface: runtime-script
contracts:
  - project.inno-scene#scene-ownership-contract
  - manual.scripting.use-script-api
---
# `SceneManager`

This reference describes `SceneManager` in `Inno.Scene`. Read the [shared contract](../../projects/inno-scene.md#scene-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`FixedUpdate`](#api-9590e82c9d3df609) | Method |
| [`GetSceneIndex`](#api-8c30aff802b7eabf) | Method |
| [`LateUpdate`](#api-29c71d8a76be85ac) | Method |
| [`LoadNewScene`](#api-787ca6895ec1ad03) | Method |
| [`LoadNewSceneAdditive`](#api-e4a71bd84b83a944) | Method |
| [`LoadScene`](#api-cd6f65cd1b24c6ae) | Method |
| [`LoadSceneAdditive`](#api-56a9b3ec7b09f56e) | Method |
| [`MoveGameObjectToScene`](#api-fb7678ed1b1211ca) | Method |
| [`SetActiveScene`](#api-3e2b09812a1ae167) | Method |
| [`SetSceneIndex`](#api-6c002f6291ff7c26) | Method |
| [`UnloadActiveScene`](#api-e99e5bcb4669a0a4) | Method |
| [`UnloadAllScenes`](#api-5a127b97747b3072) | Method |
| [`UnloadScene`](#api-1d6b4a651d319501) | Method |
| [`Update`](#api-3dd58ff4ce710f79) | Method |
| [`activeScene`](#api-5d61749c422047f3) | Property |
| [`hasActiveScene`](#api-a1296568d1a4198c) | Property |
| [`loadedScenes`](#api-b0aff64c4cebd82e) | Property |

## Type declaration

<a id="api-2abca13a8a73a1c8"></a>
<!-- api: T:InnoEngine.Scene.SceneManager 1cc030b2b43e8fc40c44130fa07d7d27a4ca15b4d3d4566719b08535d4a3708b -->

```csharp
public static class InnoEngine.Scene.SceneManager
```

Provides Unity-style scene operations by resolving the world in the current runtime execution context.

**Constraints:** This façade owns no mutable scene state. Engine internals should depend on a concrete `InnoEngine.Scene.SceneWorld`
and only script-facing code should use this type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/SceneManager.cs#L13).

## `FixedUpdate`

<a id="api-9590e82c9d3df609"></a>
<!-- api: M:InnoEngine.Scene.SceneManager.FixedUpdate(System.Single) 644d9fa02039dc3c89c7792d3f6fa6056bbb0e8fa06725bbd232f95b9a2c1835 -->

```csharp
public static void InnoEngine.Scene.SceneManager.FixedUpdate(float fixedDeltaTime)
```

Advances fixed-step scene lifecycle callbacks in the current runtime session.

**Parameter `fixedDeltaTime`:** The fixed simulation interval in seconds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/SceneManager.cs#L157).

## `GetSceneIndex`

<a id="api-8c30aff802b7eabf"></a>
<!-- api: M:InnoEngine.Scene.SceneManager.GetSceneIndex(InnoEngine.Scene.GameScene) 6091ffaa7b880df28ec6b2f35b641692fe66508d384822910dc213ccd937612e -->

```csharp
public static int InnoEngine.Scene.SceneManager.GetSceneIndex(InnoEngine.Scene.GameScene scene)
```

Gets the hierarchy index of a scene loaded by the current runtime session.

**Parameter `scene`:** The loaded scene to locate.

**Returns:** The zero-based hierarchy index.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/SceneManager.cs#L39).

## `LateUpdate`

<a id="api-29c71d8a76be85ac"></a>
<!-- api: M:InnoEngine.Scene.SceneManager.LateUpdate(System.Single) 6dbfc49934126ebe8b6ee32872298c6dc7f8c9ca8153be97bb8283f6fc935d53 -->

```csharp
public static void InnoEngine.Scene.SceneManager.LateUpdate(float deltaTime)
```

Advances late scene lifecycle callbacks in the current runtime session.

**Parameter `deltaTime`:** The elapsed frame time in seconds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/SceneManager.cs#L173).

## `LoadNewScene`

<a id="api-787ca6895ec1ad03"></a>
<!-- api: M:InnoEngine.Scene.SceneManager.LoadNewScene(System.String) 4aa2b993069ddecc7d89c4e99fda0bbd398027d9139832597553d6f5c104adcd -->

```csharp
public static InnoEngine.Scene.GameScene InnoEngine.Scene.SceneManager.LoadNewScene(string name = "Untitled Scene")
```

Creates and loads a new active scene in the current runtime session.

**Parameter `name`:** The initial scene display name.

**Returns:** The newly created and loaded scene.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/SceneManager.cs#L87).

## `LoadNewSceneAdditive`

<a id="api-e4a71bd84b83a944"></a>
<!-- api: M:InnoEngine.Scene.SceneManager.LoadNewSceneAdditive(System.String,System.Boolean) 8300f2afe0fd8ece5988619d9bec90650702ee74473cbf3b05371c74419a2c28 -->

```csharp
public static InnoEngine.Scene.GameScene InnoEngine.Scene.SceneManager.LoadNewSceneAdditive(string name = "Untitled Scene", bool makeActive = true)
```

Creates and additively loads a new scene in the current runtime session.

**Parameter `name`:** The initial scene display name.

**Parameter `makeActive`:** Whether the new scene becomes active.

**Returns:** The newly created and loaded scene.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/SceneManager.cs#L101).

## `LoadScene`

<a id="api-cd6f65cd1b24c6ae"></a>
<!-- api: M:InnoEngine.Scene.SceneManager.LoadScene(InnoEngine.Scene.GameScene) 6e555d52ab6ad09f1f24f457d973db8698d9f0f4bc9b2d78ba36c5a3e1652029 -->

```csharp
public static void InnoEngine.Scene.SceneManager.LoadScene(InnoEngine.Scene.GameScene scene)
```

Replaces the current session scene set with one active scene.

**Parameter `scene`:** The scene to load.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/SceneManager.cs#L61).

## `LoadSceneAdditive`

<a id="api-56a9b3ec7b09f56e"></a>
<!-- api: M:InnoEngine.Scene.SceneManager.LoadSceneAdditive(InnoEngine.Scene.GameScene,System.Boolean) 48f4a688f1070c1403759cefc1954345471aeff623e7516355b47f90ba9eba5f -->

```csharp
public static void InnoEngine.Scene.SceneManager.LoadSceneAdditive(InnoEngine.Scene.GameScene scene, bool makeActive = true)
```

Loads a scene alongside the current session scene set.

**Parameter `scene`:** The scene to load additively.

**Parameter `makeActive`:** Whether the loaded scene becomes active.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/SceneManager.cs#L72).

## `MoveGameObjectToScene`

<a id="api-fb7678ed1b1211ca"></a>
<!-- api: M:InnoEngine.Scene.SceneManager.MoveGameObjectToScene(InnoEngine.Scene.GameObject,InnoEngine.Scene.GameScene) 4577853d3b9e92a88bc75fdf4345eb502cc2d66be2c06ccf1bc8c2d82e75972b -->

```csharp
public static void InnoEngine.Scene.SceneManager.MoveGameObjectToScene(InnoEngine.Scene.GameObject gameObject, InnoEngine.Scene.GameScene destination)
```

Moves a live object subtree into another scene owned by the current runtime session.

**Parameter `gameObject`:** The live root object to move.

**Parameter `destination`:** The loaded destination scene.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/SceneManager.cs#L124).

## `SetActiveScene`

<a id="api-3e2b09812a1ae167"></a>
<!-- api: M:InnoEngine.Scene.SceneManager.SetActiveScene(InnoEngine.Scene.GameScene) aa910cdb701832d9d1c2233d6c53628982f7be3182536690b9d2d6f6caac966e -->

```csharp
public static void InnoEngine.Scene.SceneManager.SetActiveScene(InnoEngine.Scene.GameScene scene)
```

Makes a loaded scene active in the current runtime session.

**Parameter `scene`:** The loaded scene to activate.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/SceneManager.cs#L113).

## `SetSceneIndex`

<a id="api-6c002f6291ff7c26"></a>
<!-- api: M:InnoEngine.Scene.SceneManager.SetSceneIndex(InnoEngine.Scene.GameScene,System.Int32) b4f9ab7f6cfe3b0e09ea386bbe9bab17406f0a47fc68c7466fc67c393ac4276a -->

```csharp
public static void InnoEngine.Scene.SceneManager.SetSceneIndex(InnoEngine.Scene.GameScene scene, int sceneIndex)
```

Moves a loaded scene to a hierarchy index without changing the active scene.

**Parameter `scene`:** The loaded scene to move.

**Parameter `sceneIndex`:** The requested zero-based hierarchy index.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/SceneManager.cs#L50).

## `UnloadActiveScene`

<a id="api-e99e5bcb4669a0a4"></a>
<!-- api: M:InnoEngine.Scene.SceneManager.UnloadActiveScene e2d6c8b5879559fba5d5c00c573e1263f3e05e5d645e4d43579d98916410cf31 -->

```csharp
public static void InnoEngine.Scene.SceneManager.UnloadActiveScene()
```

Unloads the active scene in the current runtime session when one exists.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/SceneManager.cs#L133).

## `UnloadAllScenes`

<a id="api-5a127b97747b3072"></a>
<!-- api: M:InnoEngine.Scene.SceneManager.UnloadAllScenes 880b050553551fed8140276acf3357c5b40f0e588b36790613c74e3de76f1d3b -->

```csharp
public static void InnoEngine.Scene.SceneManager.UnloadAllScenes()
```

Unloads every scene from the current runtime session.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/SceneManager.cs#L149).

## `UnloadScene`

<a id="api-1d6b4a651d319501"></a>
<!-- api: M:InnoEngine.Scene.SceneManager.UnloadScene(InnoEngine.Scene.GameScene) e7475ec832dd32c00e6bd96b4e4d7e639d367912ea8c4329a5a29566b8308fbc -->

```csharp
public static bool InnoEngine.Scene.SceneManager.UnloadScene(InnoEngine.Scene.GameScene scene)
```

Unloads one scene from the current runtime session.

**Parameter `scene`:** The scene to unload.

**Returns:** `true` when the scene was loaded; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/SceneManager.cs#L144).

## `Update`

<a id="api-3dd58ff4ce710f79"></a>
<!-- api: M:InnoEngine.Scene.SceneManager.Update(System.Single) eb30ac363c5a12ab3817f903fb00b7cf74db719b6f858692c6a8c01e3c745ff9 -->

```csharp
public static void InnoEngine.Scene.SceneManager.Update(float deltaTime)
```

Advances variable-step scene lifecycle callbacks in the current runtime session.

**Parameter `deltaTime`:** The elapsed frame time in seconds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/SceneManager.cs#L165).

## `activeScene`

<a id="api-5d61749c422047f3"></a>
<!-- api: P:InnoEngine.Scene.SceneManager.activeScene 6de4df6a3a36a2ba4c40841c74a8e14a2a21abe8dffb3fa6a9cb50d1401dd373 -->

```csharp
public static InnoEngine.Scene.GameScene? InnoEngine.Scene.SceneManager.activeScene { get; }
```

Gets the active scene in the current runtime session.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/SceneManager.cs#L18).

## `hasActiveScene`

<a id="api-a1296568d1a4198c"></a>
<!-- api: P:InnoEngine.Scene.SceneManager.hasActiveScene 2ce96b8541dd52098f2b6ae701b2db4b842f209b9e3dc5b83c0b55474886a7b2 -->

```csharp
public static bool InnoEngine.Scene.SceneManager.hasActiveScene { get; }
```

Gets whether the current runtime session has an active scene.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/SceneManager.cs#L23).

## `loadedScenes`

<a id="api-b0aff64c4cebd82e"></a>
<!-- api: P:InnoEngine.Scene.SceneManager.loadedScenes 5c97d8bfa043a536bd71f88fd590ce53ed7adc36147c90eeb6227f82d4aad5c0 -->

```csharp
public static System.Collections.Generic.IReadOnlyList<InnoEngine.Scene.GameScene> InnoEngine.Scene.SceneManager.loadedScenes { get; }
```

Gets an immutable snapshot of scenes loaded by the current runtime session.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/SceneManager.cs#L28).
