---
title: "SceneManager"
description: "Reference for SceneManager in Inno.Scene."
uid: api.inno.scene.c70db86a68771ffe
kind: api
owners:
  - Inno.Scene
apiSurface: source-clr
contracts:
  - project.inno-scene#scene-ownership-contract
---
# `SceneManager`

This reference describes `SceneManager` in `Inno.Scene`. Read the [shared contract](../../projects/inno-scene.md#scene-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`FixedUpdate`](#api-c6fafc462dd9b101) | Method |
| [`GetSceneIndex`](#api-4daba9e650e6afdf) | Method |
| [`LateUpdate`](#api-479921c395662666) | Method |
| [`LoadNewScene`](#api-2ad27e9facbd70a2) | Method |
| [`LoadNewSceneAdditive`](#api-f54017ef811b0f34) | Method |
| [`LoadScene`](#api-bdb1420f40987aeb) | Method |
| [`LoadSceneAdditive`](#api-50622d7397aa1f61) | Method |
| [`MoveGameObjectToScene`](#api-2e1ce237020972fb) | Method |
| [`SetActiveScene`](#api-d25fd1cec73adf35) | Method |
| [`SetSceneIndex`](#api-64e557fcd035a0d4) | Method |
| [`UnloadActiveScene`](#api-5b545641ec66ada0) | Method |
| [`UnloadAllScenes`](#api-2ed418028233634c) | Method |
| [`UnloadScene`](#api-6c5c5f309498f956) | Method |
| [`Update`](#api-fee561ae3445c05b) | Method |
| [`activeScene`](#api-3cf40579d411015c) | Property |
| [`hasActiveScene`](#api-91c69d8995a4be7d) | Property |
| [`loadedScenes`](#api-54143757a30e24e3) | Property |

## Type declaration

<a id="api-c70db86a68771ffe"></a>
<!-- api: T:Inno.Scene.SceneManager fc35ca2d4e851ebe701c055abf5caf14760812439e7295c7a4f33fe9a378358c -->

```csharp
public static class Inno.Scene.SceneManager
```

Provides Unity-style scene operations by resolving the world in the current runtime execution context.

**Constraints:** This façade owns no mutable scene state. Engine internals should depend on a concrete `Inno.Scene.SceneWorld`
and only script-facing code should use this type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/SceneManager.cs#L13).

## `FixedUpdate`

<a id="api-c6fafc462dd9b101"></a>
<!-- api: M:Inno.Scene.SceneManager.FixedUpdate(System.Single) f2348f9812ba4d9cd5b0c7f4365612659cc415e68fac0da6730e98d773158b2f -->

```csharp
public static void Inno.Scene.SceneManager.FixedUpdate(float fixedDeltaTime)
```

Advances fixed-step scene lifecycle callbacks in the current runtime session.

**Parameter `fixedDeltaTime`:** The fixed simulation interval in seconds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/SceneManager.cs#L157).

## `GetSceneIndex`

<a id="api-4daba9e650e6afdf"></a>
<!-- api: M:Inno.Scene.SceneManager.GetSceneIndex(Inno.Scene.GameScene) 82051dca0d12749d43b80425a665ba1ec8d5bdaec5b359c8e99077380482a37e -->

```csharp
public static int Inno.Scene.SceneManager.GetSceneIndex(Inno.Scene.GameScene scene)
```

Gets the hierarchy index of a scene loaded by the current runtime session.

**Parameter `scene`:** The loaded scene to locate.

**Returns:** The zero-based hierarchy index.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/SceneManager.cs#L39).

## `LateUpdate`

<a id="api-479921c395662666"></a>
<!-- api: M:Inno.Scene.SceneManager.LateUpdate(System.Single) e1e01552a515679fae57abb5481af73f1e4798926abf932e37c756bdbdd5ade5 -->

```csharp
public static void Inno.Scene.SceneManager.LateUpdate(float deltaTime)
```

Advances late scene lifecycle callbacks in the current runtime session.

**Parameter `deltaTime`:** The elapsed frame time in seconds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/SceneManager.cs#L173).

## `LoadNewScene`

<a id="api-2ad27e9facbd70a2"></a>
<!-- api: M:Inno.Scene.SceneManager.LoadNewScene(System.String) 167a57eb9e6d8e1d69361eac0a8fadb990c527dd29961750f99bb72e904ced9d -->

```csharp
public static Inno.Scene.GameScene Inno.Scene.SceneManager.LoadNewScene(string name = "Untitled Scene")
```

Creates and loads a new active scene in the current runtime session.

**Parameter `name`:** The initial scene display name.

**Returns:** The newly created and loaded scene.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/SceneManager.cs#L87).

## `LoadNewSceneAdditive`

<a id="api-f54017ef811b0f34"></a>
<!-- api: M:Inno.Scene.SceneManager.LoadNewSceneAdditive(System.String,System.Boolean) 3e1c9ae4bfbe21419b416a6f65bb340b1d4c6500dede77dac2737ca7bfb5b1df -->

```csharp
public static Inno.Scene.GameScene Inno.Scene.SceneManager.LoadNewSceneAdditive(string name = "Untitled Scene", bool makeActive = true)
```

Creates and additively loads a new scene in the current runtime session.

**Parameter `name`:** The initial scene display name.

**Parameter `makeActive`:** Whether the new scene becomes active.

**Returns:** The newly created and loaded scene.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/SceneManager.cs#L101).

## `LoadScene`

<a id="api-bdb1420f40987aeb"></a>
<!-- api: M:Inno.Scene.SceneManager.LoadScene(Inno.Scene.GameScene) 8b55f504ba1bde61b796ef03331b448558996b0fe130fdf1ce870928602159a9 -->

```csharp
public static void Inno.Scene.SceneManager.LoadScene(Inno.Scene.GameScene scene)
```

Replaces the current session scene set with one active scene.

**Parameter `scene`:** The scene to load.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/SceneManager.cs#L61).

## `LoadSceneAdditive`

<a id="api-50622d7397aa1f61"></a>
<!-- api: M:Inno.Scene.SceneManager.LoadSceneAdditive(Inno.Scene.GameScene,System.Boolean) 3f9bb0626311370a58e65994fd2acf33f092bbc5c476406a04fae51044ef9da0 -->

```csharp
public static void Inno.Scene.SceneManager.LoadSceneAdditive(Inno.Scene.GameScene scene, bool makeActive = true)
```

Loads a scene alongside the current session scene set.

**Parameter `scene`:** The scene to load additively.

**Parameter `makeActive`:** Whether the loaded scene becomes active.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/SceneManager.cs#L72).

## `MoveGameObjectToScene`

<a id="api-2e1ce237020972fb"></a>
<!-- api: M:Inno.Scene.SceneManager.MoveGameObjectToScene(Inno.Scene.GameObject,Inno.Scene.GameScene) 10d41a5437713a53bf86ae8cdd792548667fd7e8b265499260bd62d5ce0cea44 -->

```csharp
public static void Inno.Scene.SceneManager.MoveGameObjectToScene(Inno.Scene.GameObject gameObject, Inno.Scene.GameScene destination)
```

Moves a live object subtree into another scene owned by the current runtime session.

**Parameter `gameObject`:** The live root object to move.

**Parameter `destination`:** The loaded destination scene.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/SceneManager.cs#L124).

## `SetActiveScene`

<a id="api-d25fd1cec73adf35"></a>
<!-- api: M:Inno.Scene.SceneManager.SetActiveScene(Inno.Scene.GameScene) a1fcfbd1b56940427e420371a21cd63feb302fb6878e548a6e90f4523c799e8d -->

```csharp
public static void Inno.Scene.SceneManager.SetActiveScene(Inno.Scene.GameScene scene)
```

Makes a loaded scene active in the current runtime session.

**Parameter `scene`:** The loaded scene to activate.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/SceneManager.cs#L113).

## `SetSceneIndex`

<a id="api-64e557fcd035a0d4"></a>
<!-- api: M:Inno.Scene.SceneManager.SetSceneIndex(Inno.Scene.GameScene,System.Int32) 0bd25cd34ba35f918da085bea49e9367ca90b7ad6b66e26d2c421795b1133250 -->

```csharp
public static void Inno.Scene.SceneManager.SetSceneIndex(Inno.Scene.GameScene scene, int sceneIndex)
```

Moves a loaded scene to a hierarchy index without changing the active scene.

**Parameter `scene`:** The loaded scene to move.

**Parameter `sceneIndex`:** The requested zero-based hierarchy index.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/SceneManager.cs#L50).

## `UnloadActiveScene`

<a id="api-5b545641ec66ada0"></a>
<!-- api: M:Inno.Scene.SceneManager.UnloadActiveScene a6451f9d383d891acc931f25a66cedd8effc3bd1abb137019765461202802701 -->

```csharp
public static void Inno.Scene.SceneManager.UnloadActiveScene()
```

Unloads the active scene in the current runtime session when one exists.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/SceneManager.cs#L133).

## `UnloadAllScenes`

<a id="api-2ed418028233634c"></a>
<!-- api: M:Inno.Scene.SceneManager.UnloadAllScenes 9810cacffaf308379070a273b87db19a34aa3bf57b67d2c75459cb8ceb4a243e -->

```csharp
public static void Inno.Scene.SceneManager.UnloadAllScenes()
```

Unloads every scene from the current runtime session.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/SceneManager.cs#L149).

## `UnloadScene`

<a id="api-6c5c5f309498f956"></a>
<!-- api: M:Inno.Scene.SceneManager.UnloadScene(Inno.Scene.GameScene) 981661d836c4a7173fb7e8485610f3467a9e3a187a1962069fe466d391079646 -->

```csharp
public static bool Inno.Scene.SceneManager.UnloadScene(Inno.Scene.GameScene scene)
```

Unloads one scene from the current runtime session.

**Parameter `scene`:** The scene to unload.

**Returns:** `true` when the scene was loaded; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/SceneManager.cs#L144).

## `Update`

<a id="api-fee561ae3445c05b"></a>
<!-- api: M:Inno.Scene.SceneManager.Update(System.Single) e60ff43e59ae0032d0634ad36012f4d214354dd52dbcb2334c387d331e227887 -->

```csharp
public static void Inno.Scene.SceneManager.Update(float deltaTime)
```

Advances variable-step scene lifecycle callbacks in the current runtime session.

**Parameter `deltaTime`:** The elapsed frame time in seconds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/SceneManager.cs#L165).

## `activeScene`

<a id="api-3cf40579d411015c"></a>
<!-- api: P:Inno.Scene.SceneManager.activeScene 9a5d6db40e27f22f50dae094dc857f1dbc86b0ed07bae973bb21fcee42a52f4f -->

```csharp
public static Inno.Scene.GameScene? Inno.Scene.SceneManager.activeScene { get; }
```

Gets the active scene in the current runtime session.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/SceneManager.cs#L18).

## `hasActiveScene`

<a id="api-91c69d8995a4be7d"></a>
<!-- api: P:Inno.Scene.SceneManager.hasActiveScene 6286e2a976bbe28e9770cb4e8526f8ee5ab784856416c12da06d225b906d359e -->

```csharp
public static bool Inno.Scene.SceneManager.hasActiveScene { get; }
```

Gets whether the current runtime session has an active scene.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/SceneManager.cs#L23).

## `loadedScenes`

<a id="api-54143757a30e24e3"></a>
<!-- api: P:Inno.Scene.SceneManager.loadedScenes 3c666a8f82fa5c9476da2fa44bd354ef61c493c30a4734854e14ed7450fae46b -->

```csharp
public static System.Collections.Generic.IReadOnlyList<Inno.Scene.GameScene> Inno.Scene.SceneManager.loadedScenes { get; }
```

Gets an immutable snapshot of scenes loaded by the current runtime session.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/SceneManager.cs#L28).
