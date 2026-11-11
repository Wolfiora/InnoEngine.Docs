---
title: "SceneWorld"
description: "Reference for SceneWorld in Inno.Scene."
uid: api.inno.scene.f129eb26200d6814
kind: api
owners:
  - Inno.Scene
apiSurface: source-clr
contracts:
  - project.inno-scene#scene-ownership-contract
---
# `SceneWorld`

This reference describes `SceneWorld` in `Inno.Scene`. Read the [shared contract](../../projects/inno-scene.md#scene-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-d4d57d869dfa6d61) | Method |
| [`ConfigurePrefabInstantiation`](#api-8da337d66548bba8) | Method |
| [`Dispose`](#api-7a287526d6c33a96) | Method |
| [`EnterScope`](#api-674557d8ca1350ea) | Method |
| [```Find``1```](#api-2d299f878aa510af) | Method |
| [`FixedUpdate`](#api-4efd87167b721450) | Method |
| [`GetSceneIndex`](#api-34b68a6992bc9dfe) | Method |
| [`LateUpdate`](#api-173072fa0a8b1b27) | Method |
| [`LoadNewScene`](#api-56d324daa161f857) | Method |
| [`LoadNewSceneAdditive`](#api-6722e9a73eb42d5d) | Method |
| [`LoadScene`](#api-a80e6d29106f876c) | Method |
| [`LoadSceneAdditive`](#api-87b7dec00a42616c) | Method |
| [`MoveGameObjectToScene`](#api-bc396b3f5065a851) | Method |
| [`SetActiveScene`](#api-54e7afa28ca24fb0) | Method |
| [`SetSceneIndex`](#api-ec9df29dc94e9cd4) | Method |
| [`UnloadActiveScene`](#api-d13d7555df4c3a58) | Method |
| [`UnloadAllScenes`](#api-3595d99924fec545) | Method |
| [`UnloadScene`](#api-ccec87fbda52da4f) | Method |
| [`Update`](#api-4e06bb9a07414c31) | Method |
| [`activeScene`](#api-dca95063ae8b82e2) | Property |
| [`hasActiveScene`](#api-8a6e813a4bab4f63) | Property |
| [`loadedScenes`](#api-cc850d43ec93e450) | Property |

## Type declaration

<a id="api-f129eb26200d6814"></a>
<!-- api: T:Inno.Scene.SceneWorld e93dccb1b91ef4339a40e34b76378b13b460e13fd2db50622c1ca15753ee010f -->

```csharp
public sealed class Inno.Scene.SceneWorld : System.IDisposable
```

Owns the loaded scene set and lifecycle state for one isolated runtime session.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/SceneWorld.cs#L16).

## `#ctor`

<a id="api-d4d57d869dfa6d61"></a>
<!-- api: M:Inno.Scene.SceneWorld.#ctor(Inno.Core.Identity.IdentityAllocator,Inno.Extensibility.Types.TypeCatalog) de84f4883713c65bb0b42bd97e4e5ceebb59d66718d70ed919fb4b9a21773358 -->

```csharp
public Inno.Scene.SceneWorld.SceneWorld(Inno.Core.Identity.IdentityAllocator identities, Inno.Extensibility.Types.TypeCatalog types)
```

Creates an empty scene world bound to one session identity allocator.

**Parameter `identities`:** The allocator that owns identities for scenes and their elements.

**Parameter `types`:** The host type catalog used to derive scene component and system generations.

**Throws `System.ArgumentNullException`:** Thrown when `identities` is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/SceneWorld.cs#L41).

## `ConfigurePrefabInstantiation`

<a id="api-8da337d66548bba8"></a>
<!-- api: M:Inno.Scene.SceneWorld.ConfigurePrefabInstantiation(Inno.Core.Serialization.SerializationRegistry,Inno.Assets.IAssetReferenceResolver) 281627915e3694338a194c2cb2fc8b01870abd55366d0683fa6b35abc4c6922c -->

```csharp
public void Inno.Scene.SceneWorld.ConfigurePrefabInstantiation(Inno.Core.Serialization.SerializationRegistry serialization, Inno.Assets.IAssetReferenceResolver assets)
```

Binds the session-owned serialization and asset generations used by scene prefab instances.

**Parameter `serialization`:** The active serialization registry for this session.

**Parameter `assets`:** The asset resolver that owns prefab dependencies.

**Throws `System.InvalidOperationException`:** The binding was already configured.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/SceneWorld.cs#L73).

## `Dispose`

<a id="api-7a287526d6c33a96"></a>
<!-- api: M:Inno.Scene.SceneWorld.Dispose 1b315d6b83dea4dd5900836aa285f7dc729f0bd61e3c71c67135bb52df41c984 -->

```csharp
public void Inno.Scene.SceneWorld.Dispose()
```

Unloads every scene and permanently releases this world.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/SceneWorld.cs#L439).

## `EnterScope`

<a id="api-674557d8ca1350ea"></a>
<!-- api: M:Inno.Scene.SceneWorld.EnterScope 0df4b35d0d7d7f54227fabbd13a7efdaab7538c0ffc404cd03033c9440071f93 -->

```csharp
public System.IDisposable Inno.Scene.SceneWorld.EnterScope()
```

Binds this world and its identity allocator to the current asynchronous execution context.

**Returns:** A strict last-in-first-out execution scope owned by the caller.

**Throws `System.ObjectDisposedException`:** Thrown when this world has been disposed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/SceneWorld.cs#L144).

## ```Find``1```

<a id="api-2d299f878aa510af"></a>
<!-- api: M:Inno.Scene.SceneWorld.Find``1(System.Guid) ffacaf7ea8e8d52b2a2488f301698d14c52a369c85d6e753ab294013aa9ba6fc -->

```csharp
public TObject? Inno.Scene.SceneWorld.Find<TObject>(System.Guid persistentId) where TObject : Inno.Core.Identity.IdentityObject
```

Resolves a live scene object by its persistent identity within this world.

**Type parameter `TObject`:** The required scene object contract.

**Parameter `persistentId`:** The persistent identity to resolve.

**Returns:** The live compatible object, or `null` when this world does not own one.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/SceneWorld.cs#L131).

## `FixedUpdate`

<a id="api-4efd87167b721450"></a>
<!-- api: M:Inno.Scene.SceneWorld.FixedUpdate(System.Single) acb290459653e7c7a7dd23dcbf27f2d1124c35f6ce570ad2d94210c258881074 -->

```csharp
public void Inno.Scene.SceneWorld.FixedUpdate(float fixedDeltaTime)
```

Advances fixed-step lifecycle callbacks for every loaded scene.

**Parameter `fixedDeltaTime`:** The fixed simulation interval in seconds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/SceneWorld.cs#L400).

## `GetSceneIndex`

<a id="api-34b68a6992bc9dfe"></a>
<!-- api: M:Inno.Scene.SceneWorld.GetSceneIndex(Inno.Scene.GameScene) afed1fa35eec06ae87dfc98fc0b5a468e044468431e6f10a6dd2e02b46300a3c -->

```csharp
public int Inno.Scene.SceneWorld.GetSceneIndex(Inno.Scene.GameScene scene)
```

Gets the hierarchy index of a loaded scene.

**Parameter `scene`:** The loaded scene to locate.

**Returns:** The zero-based hierarchy index.

**Throws `System.InvalidOperationException`:** Thrown when the scene is not loaded by this world.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/SceneWorld.cs#L163).

## `LateUpdate`

<a id="api-173072fa0a8b1b27"></a>
<!-- api: M:Inno.Scene.SceneWorld.LateUpdate(System.Single) 27553f802dc3df502cab1c4ad32b7a5ac2c4dbe8655dd324086715eaf486a919 -->

```csharp
public void Inno.Scene.SceneWorld.LateUpdate(float deltaTime)
```

Advances late lifecycle callbacks for every loaded scene.

**Parameter `deltaTime`:** The elapsed frame time in seconds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/SceneWorld.cs#L428).

## `LoadNewScene`

<a id="api-56d324daa161f857"></a>
<!-- api: M:Inno.Scene.SceneWorld.LoadNewScene(System.String) b0dce470e72ef1daef9d6d23b1e9b07bee3c05863fca5f296e4954ce507b51a4 -->

```csharp
public Inno.Scene.GameScene Inno.Scene.SceneWorld.LoadNewScene(string name = "Untitled Scene")
```

Creates and loads a new active scene.

**Parameter `name`:** The initial scene display name.

**Returns:** The newly created and loaded scene.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/SceneWorld.cs#L255).

## `LoadNewSceneAdditive`

<a id="api-6722e9a73eb42d5d"></a>
<!-- api: M:Inno.Scene.SceneWorld.LoadNewSceneAdditive(System.String,System.Boolean) c6ae3f9ce83d162ba388a948668e3ca52c35971b27369981d384382b26bc08b5 -->

```csharp
public Inno.Scene.GameScene Inno.Scene.SceneWorld.LoadNewSceneAdditive(string name = "Untitled Scene", bool makeActive = true)
```

Creates and additively loads a new scene.

**Parameter `name`:** The initial scene display name.

**Parameter `makeActive`:** Whether the new scene becomes active.

**Returns:** The newly created and loaded scene.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/SceneWorld.cs#L275).

## `LoadScene`

<a id="api-a80e6d29106f876c"></a>
<!-- api: M:Inno.Scene.SceneWorld.LoadScene(Inno.Scene.GameScene) 38cacbbaf2e783b670b3a164d229b77bf1dceb757dc109d7e6e477acf3c68cd2 -->

```csharp
public void Inno.Scene.SceneWorld.LoadScene(Inno.Scene.GameScene scene)
```

Replaces the loaded set with one scene and makes it active.

**Parameter `scene`:** The scene to load.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/SceneWorld.cs#L208).

## `LoadSceneAdditive`

<a id="api-87b7dec00a42616c"></a>
<!-- api: M:Inno.Scene.SceneWorld.LoadSceneAdditive(Inno.Scene.GameScene,System.Boolean) e23a83d8b90f753d0078fde195086837ea6210ea57cc68aad490f842e7fea77a -->

```csharp
public void Inno.Scene.SceneWorld.LoadSceneAdditive(Inno.Scene.GameScene scene, bool makeActive = true)
```

Loads a scene alongside the existing scene set.

**Parameter `scene`:** The scene to load additively.

**Parameter `makeActive`:** Whether the loaded scene becomes active.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/SceneWorld.cs#L230).

## `MoveGameObjectToScene`

<a id="api-bc396b3f5065a851"></a>
<!-- api: M:Inno.Scene.SceneWorld.MoveGameObjectToScene(Inno.Scene.GameObject,Inno.Scene.GameScene) c4b937ea2b3d8fc12f875dd4ab43a53f7265fd592dc7c84cd56df3d971bd0284 -->

```csharp
public void Inno.Scene.SceneWorld.MoveGameObjectToScene(Inno.Scene.GameObject gameObject, Inno.Scene.GameScene destination)
```

Moves a live object subtree between two scenes loaded by this world.

**Parameter `gameObject`:** The live root object to move.

**Parameter `destination`:** The loaded destination scene.

**Throws `System.InvalidOperationException`:** Thrown when either scene is not loaded or the object is not live.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/SceneWorld.cs#L315).

## `SetActiveScene`

<a id="api-54e7afa28ca24fb0"></a>
<!-- api: M:Inno.Scene.SceneWorld.SetActiveScene(Inno.Scene.GameScene) c3aae4d4a101c117ec5d8f9158e9bc4ca364b3a564cf1519a90a617c4ce6e515 -->

```csharp
public void Inno.Scene.SceneWorld.SetActiveScene(Inno.Scene.GameScene scene)
```

Makes one loaded scene active without changing the loaded set.

**Parameter `scene`:** The loaded scene to activate.

**Throws `System.InvalidOperationException`:** Thrown when the scene is not loaded by this world.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/SceneWorld.cs#L294).

## `SetSceneIndex`

<a id="api-ec9df29dc94e9cd4"></a>
<!-- api: M:Inno.Scene.SceneWorld.SetSceneIndex(Inno.Scene.GameScene,System.Int32) c2fcb967ab4c533b713012ed7c051efc47ebf3bb55dbef24d571b0757ffa7974 -->

```csharp
public void Inno.Scene.SceneWorld.SetSceneIndex(Inno.Scene.GameScene scene, int sceneIndex)
```

Moves a loaded scene to a hierarchy index without changing the active scene.

**Parameter `scene`:** The loaded scene to move.

**Parameter `sceneIndex`:** The requested zero-based hierarchy index.

**Throws `System.InvalidOperationException`:** Thrown when the scene is not loaded by this world.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/SceneWorld.cs#L185).

## `UnloadActiveScene`

<a id="api-d13d7555df4c3a58"></a>
<!-- api: M:Inno.Scene.SceneWorld.UnloadActiveScene 6b3a71677c1acb82efd28d6fd5f238ff4454e7af45199603c8703c7a68818737 -->

```csharp
public void Inno.Scene.SceneWorld.UnloadActiveScene()
```

Unloads the active scene when one exists.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/SceneWorld.cs#L334).

## `UnloadAllScenes`

<a id="api-3595d99924fec545"></a>
<!-- api: M:Inno.Scene.SceneWorld.UnloadAllScenes 0e4cee3d886ef7d3f6578f65c5aff847f6747f2e9cf57effe481f2d9e6300b83 -->

```csharp
public void Inno.Scene.SceneWorld.UnloadAllScenes()
```

Unloads every scene while preserving the first lifecycle failure.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/SceneWorld.cs#L372).

## `UnloadScene`

<a id="api-ccec87fbda52da4f"></a>
<!-- api: M:Inno.Scene.SceneWorld.UnloadScene(Inno.Scene.GameScene) 4a7c2e3f9e8c94a2684d4d93a006edf55b3a48392a992e82c77972b2c51f8a4c -->

```csharp
public bool Inno.Scene.SceneWorld.UnloadScene(Inno.Scene.GameScene scene)
```

Unloads one scene and selects another loaded scene when necessary.

**Parameter `scene`:** The scene to unload.

**Returns:** `true` when the scene was loaded by this world; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/SceneWorld.cs#L350).

## `Update`

<a id="api-4e06bb9a07414c31"></a>
<!-- api: M:Inno.Scene.SceneWorld.Update(System.Single) 10cc7580258fbc6dc4db2c7e9b47f6b9d64c6f4d7b472275106a235faf8a6607 -->

```csharp
public void Inno.Scene.SceneWorld.Update(float deltaTime)
```

Advances variable-step lifecycle callbacks for every loaded scene.

**Parameter `deltaTime`:** The elapsed frame time in seconds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/SceneWorld.cs#L414).

## `activeScene`

<a id="api-dca95063ae8b82e2"></a>
<!-- api: P:Inno.Scene.SceneWorld.activeScene 8fcf23d65153210f093eb8741efc89a57b819e384e03adab689a8e4bc3be30ee -->

```csharp
public Inno.Scene.GameScene? Inno.Scene.SceneWorld.activeScene { get; }
```

Gets the scene currently selected for unqualified scene operations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/SceneWorld.cs#L107).

## `hasActiveScene`

<a id="api-8a6e813a4bab4f63"></a>
<!-- api: P:Inno.Scene.SceneWorld.hasActiveScene b2b552555be28f1c2bfa44d92e86eefc22ac9477e8495c715eb76ca12b5fd94e -->

```csharp
public bool Inno.Scene.SceneWorld.hasActiveScene { get; }
```

Gets whether this world contains an active scene.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/SceneWorld.cs#L112).

## `loadedScenes`

<a id="api-cc850d43ec93e450"></a>
<!-- api: P:Inno.Scene.SceneWorld.loadedScenes 6a52b1a8bf1de0f94fb8022d41ad24cb4711d820b162d2ef7cbe2c7e7b2a9a47 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Scene.GameScene> Inno.Scene.SceneWorld.loadedScenes { get; }
```

Gets an immutable snapshot of loaded scenes in hierarchy order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/SceneWorld.cs#L117).
