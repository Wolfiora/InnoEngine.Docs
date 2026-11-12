---
title: "GameScene"
description: "Reference for GameScene in Inno.Scene."
uid: api.inno.scene.runtime-script.7c02ecf7c0e73291
kind: api
owners:
  - Inno.Scene
apiSurface: runtime-script
contracts:
  - project.inno-scene#scene-ownership-contract
  - manual.scripting.use-script-api
---
# `GameScene`

This reference describes `GameScene` in `Inno.Scene`. Read the [shared contract](../../projects/inno-scene.md#scene-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `InnoEngine.Scene.EngineObject`.

**Direct interfaces:** `InnoEngine.Serialization.ISerializable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-35c5ba687bd9fa7a) | Method |
| [`AddSystem`](#api-2e336fd54d1262d5) | Method |
| [`AddSystem`](#api-07aade04373c68b6) | Method |
| [```AddSystem``1```](#api-acfc3757fffb41b0) | Method |
| [`CreateObject`](#api-65fe9b8fb0464ac2) | Method |
| [`DestroyObject`](#api-adeec456d17a5a8b) | Method |
| [`FindObject`](#api-ccac4d45d5ffc28a) | Method |
| [`FindObjectsWithLayer`](#api-3859bda6e2d39a27) | Method |
| [`FindObjectsWithLayers`](#api-69a6aef97beb23de) | Method |
| [`FindObjectsWithTag`](#api-453eada6199ec1ac) | Method |
| [`FindObjectWithLayer`](#api-3e3c8f8b7825564d) | Method |
| [`FindObjectWithTag`](#api-b2d252dfa830cd89) | Method |
| [`GetObjects`](#api-38c4bde44053d95f) | Method |
| [`GetSystemIndex`](#api-a000200af1cd9979) | Method |
| [`GetSystems`](#api-cd9beec94d8e38ff) | Method |
| [`InstantiatePrefab`](#api-32ee771d2a6c47eb) | Method |
| [`RemoveSystem`](#api-12f8da160147f393) | Method |
| [`ResetSystem`](#api-7acbe410ff2565a9) | Method |
| [`SetSystemIndex`](#api-bcc8f2208c3b6a67) | Method |
| [`hierarchyRevision`](#api-ef56ab8714a7a513) | Property |
| [`isLoaded`](#api-92558412c7b8226c) | Property |
| [`name`](#api-42e6aa9655b6b3e8) | Property |

## Type declaration

<a id="api-7c02ecf7c0e73291"></a>
<!-- api: T:InnoEngine.Scene.GameScene 231419b9c8a629fa747040bda072ad93b3090b79266052d14bc867681e10b31f -->

```csharp
public sealed class InnoEngine.Scene.GameScene : InnoEngine.Scene.EngineObject, InnoEngine.Serialization.ISerializable
```

Owns a runtime scene, including its objects, components, hierarchy, and systems.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameScene.cs#L17).

## `#ctor`

<a id="api-35c5ba687bd9fa7a"></a>
<!-- api: M:InnoEngine.Scene.GameScene.#ctor(System.String) 22809ca0264c8034ddd4d1bbd89ac7eeec767648bf7928fb9678d06a4e55ca38 -->

```csharp
public InnoEngine.Scene.GameScene.GameScene(string name = "Untitled Scene")
```

Creates an empty scene.

**Parameter `name`:** Initial scene name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameScene.cs#L36).

## `AddSystem`

<a id="api-2e336fd54d1262d5"></a>
<!-- api: M:InnoEngine.Scene.GameScene.AddSystem(InnoEngine.Scene.GameSystem) a2607e9ee1f072d249bff13dca53e6e6eec9984ba69779d026310bd29c73a8e7 -->

```csharp
public void InnoEngine.Scene.GameScene.AddSystem(InnoEngine.Scene.GameSystem system)
```

Registers a game system instance.

**Parameter `system`:** System to register.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameScene.cs#L330).

## `AddSystem`

<a id="api-07aade04373c68b6"></a>
<!-- api: M:InnoEngine.Scene.GameScene.AddSystem(System.Type) d0aa4c642126ba4aef2d6e1ff4bd07b06fb0a76c1a0b50f46a81db6d13c355ae -->

```csharp
public InnoEngine.Scene.GameSystem InnoEngine.Scene.GameScene.AddSystem(System.Type systemType)
```

Creates and registers a concrete game system by runtime type.

**Parameter `systemType`:** The system type consumed by add system; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The validated game system that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameScene.cs#L312).

## ```AddSystem``1```

<a id="api-acfc3757fffb41b0"></a>
<!-- api: M:InnoEngine.Scene.GameScene.AddSystem``1 ae428f9e341160ba40896dee301841e3a2bb13813e56962a227d2816fbcf8e86 -->

```csharp
public TSystem InnoEngine.Scene.GameScene.AddSystem<TSystem>() where TSystem : InnoEngine.Scene.GameSystem, new()
```

Creates and registers a parameterless game system.

**Type parameter `TSystem`:** Concrete system type.

**Returns:** The registered system.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameScene.cs#L297).

## `CreateObject`

<a id="api-65fe9b8fb0464ac2"></a>
<!-- api: M:InnoEngine.Scene.GameScene.CreateObject(System.String) 68d27aef07480227f7abcc310369000004594d18caa81249ed609dd185aaa50f -->

```csharp
public InnoEngine.Scene.GameObject InnoEngine.Scene.GameScene.CreateObject(string name = "GameObject")
```

Creates a game object with a mandatory transform component.

**Parameter `name`:** Initial game object name.

**Returns:** The created game object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameScene.cs#L93).

## `DestroyObject`

<a id="api-adeec456d17a5a8b"></a>
<!-- api: M:InnoEngine.Scene.GameScene.DestroyObject(InnoEngine.Scene.GameObject) 431e8b3cabb77bb5c2bd75361c4c96f20eb6c027538ae4b75eaf7c2de81ae285 -->

```csharp
public bool InnoEngine.Scene.GameScene.DestroyObject(InnoEngine.Scene.GameObject gameObject)
```

Recursively destroys a game object and its complete child subtree.

**Parameter `gameObject`:** Root object to destroy.

**Returns:** `true` when the object belonged to this scene and was destroyed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameScene.cs#L130).

## `FindObject`

<a id="api-ccac4d45d5ffc28a"></a>
<!-- api: M:InnoEngine.Scene.GameScene.FindObject(System.String) abadd126f483a6d92757e88020019e1976ee23d35ca56a73fbbbb85799be9faf -->

```csharp
public InnoEngine.Scene.GameObject? InnoEngine.Scene.GameScene.FindObject(string name)
```

Finds the first game object with an ordinally matching name.

**Parameter `name`:** Name to find.

**Returns:** The first match, or `null` when no object matches.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameScene.cs#L200).

## `FindObjectsWithLayer`

<a id="api-3859bda6e2d39a27"></a>
<!-- api: M:InnoEngine.Scene.GameScene.FindObjectsWithLayer(InnoEngine.Scene.GameLayer) 6948e3ba300ee29d0900d21696ea8d42d63db4215775428c6cbc04e60d3f845c -->

```csharp
public System.Collections.Generic.IReadOnlyList<InnoEngine.Scene.GameObject> InnoEngine.Scene.GameScene.FindObjectsWithLayer(InnoEngine.Scene.GameLayer layer)
```

Finds every game object assigned to one layer in scene storage order.

**Parameter `layer`:** The layer slot to find.

**Returns:** A stable snapshot containing every matching game object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameScene.cs#L267).

## `FindObjectsWithLayers`

<a id="api-69a6aef97beb23de"></a>
<!-- api: M:InnoEngine.Scene.GameScene.FindObjectsWithLayers(InnoEngine.Scene.GameLayerMask) 8ee3d1f159932bb3b21c674f84c3a27febf8aec202b80c720f5f0e7c2fb5e38e -->

```csharp
public System.Collections.Generic.IReadOnlyList<InnoEngine.Scene.GameObject> InnoEngine.Scene.GameScene.FindObjectsWithLayers(InnoEngine.Scene.GameLayerMask layers)
```

Finds every game object assigned to any layer contained in a mask.

**Parameter `layers`:** The set of accepted layer slots.

**Returns:** A stable snapshot in scene storage order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameScene.cs#L282).

## `FindObjectsWithTag`

<a id="api-453eada6199ec1ac"></a>
<!-- api: M:InnoEngine.Scene.GameScene.FindObjectsWithTag(System.String) a45f3a4f0325a700925f239799a2ce9b5c85779a2902299a400d1221afda405d -->

```csharp
public System.Collections.Generic.IReadOnlyList<InnoEngine.Scene.GameObject> InnoEngine.Scene.GameScene.FindObjectsWithTag(string tag)
```

Finds every game object with an ordinally matching tag in scene storage order.

**Parameter `tag`:** Tag to find.

**Returns:** A stable snapshot containing every matching game object.

**Throws `System.ArgumentException`:** Thrown when `tag` is empty or contains only white-space characters.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameScene.cs#L237).

## `FindObjectWithLayer`

<a id="api-3e3c8f8b7825564d"></a>
<!-- api: M:InnoEngine.Scene.GameScene.FindObjectWithLayer(InnoEngine.Scene.GameLayer) 7f454e74a7294870f768d7fa692520036e18b95b536432c75c28655bf9ccfd9d -->

```csharp
public InnoEngine.Scene.GameObject? InnoEngine.Scene.GameScene.FindObjectWithLayer(InnoEngine.Scene.GameLayer layer)
```

Finds the first game object assigned to a layer in scene storage order.

**Parameter `layer`:** The layer slot to find.

**Returns:** The first matching game object, or `null` when no object matches.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameScene.cs#L252).

## `FindObjectWithTag`

<a id="api-b2d252dfa830cd89"></a>
<!-- api: M:InnoEngine.Scene.GameScene.FindObjectWithTag(System.String) 7149159e317c6cc142b75c8f50e8685cb0d58a8e9c8fd01d56284e74b818d031 -->

```csharp
public InnoEngine.Scene.GameObject? InnoEngine.Scene.GameScene.FindObjectWithTag(string tag)
```

Finds the first game object with an ordinally matching tag in scene storage order.

**Parameter `tag`:** Tag to find.

**Returns:** The first match, or `null` when no object matches.

**Throws `System.ArgumentException`:** Thrown when `tag` is empty or contains only white-space characters.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameScene.cs#L219).

## `GetObjects`

<a id="api-38c4bde44053d95f"></a>
<!-- api: M:InnoEngine.Scene.GameScene.GetObjects 1133c071c6d3c055e1756ab016cf7e8362198c95b69967d2f8c17ee37c6d3ac2 -->

```csharp
public System.Collections.Generic.IReadOnlyList<InnoEngine.Scene.GameObject> InnoEngine.Scene.GameScene.GetObjects()
```

Gets all committed live game objects in scene storage order.

**Returns:** A stable object snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameScene.cs#L185).

## `GetSystemIndex`

<a id="api-a000200af1cd9979"></a>
<!-- api: M:InnoEngine.Scene.GameScene.GetSystemIndex(InnoEngine.Scene.GameSystem) 2eadc1f503d889f4ccb5aa46a2fe33f5774c6d507d718c5f7413b8d03fe36266 -->

```csharp
public int InnoEngine.Scene.GameScene.GetSystemIndex(InnoEngine.Scene.GameSystem system)
```

Gets the display index of a registered system.

**Parameter `system`:** Registered system to locate.

**Returns:** The zero-based display index.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameScene.cs#L387).

## `GetSystems`

<a id="api-cd9beec94d8e38ff"></a>
<!-- api: M:InnoEngine.Scene.GameScene.GetSystems d9aaf2b382d17976a807a8bd248598dc93cbde3e52b9a393e1399882178e2ccc -->

```csharp
public System.Collections.Generic.IReadOnlyList<InnoEngine.Scene.GameSystem> InnoEngine.Scene.GameScene.GetSystems()
```

Gets registered systems in display and serialization order.
Explicit `InnoEngine.Scene.GameSystem.order` values independently control lifecycle execution priority.

**Returns:** An immutable snapshot of the values selected by the operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameScene.cs#L372).

## `InstantiatePrefab`

<a id="api-32ee771d2a6c47eb"></a>
<!-- api: M:InnoEngine.Scene.GameScene.InstantiatePrefab(InnoEngine.Scene.PrefabAsset,InnoEngine.Scene.Transform) c4f5d52be6d728b53c6c56cb1658af02e1e5727c3685c7b96923a8196cb6d184 -->

```csharp
public InnoEngine.Scene.GameObject InnoEngine.Scene.GameScene.InstantiatePrefab(InnoEngine.Scene.PrefabAsset prefab, InnoEngine.Scene.Transform? parent = null)
```

Creates a connected instance of an imported prefab in this loaded scene.

**Parameter `prefab`:** The prefab asset that supplies the object subtree.

**Parameter `parent`:** Optional parent for the new instance.

**Returns:** The newly instantiated prefab root.

**Throws `System.ArgumentNullException`:** The prefab is null.

**Throws `System.InvalidOperationException`:** The scene is not loaded in its owning world or prefab services are unavailable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameScene.cs#L114).

## `RemoveSystem`

<a id="api-12f8da160147f393"></a>
<!-- api: M:InnoEngine.Scene.GameScene.RemoveSystem(InnoEngine.Scene.GameSystem) a0b26fb79e6c7c67c081533ead743a1381bde543a9a7088cea77e7c6b079a070 -->

```csharp
public bool InnoEngine.Scene.GameScene.RemoveSystem(InnoEngine.Scene.GameSystem system)
```

Removes a registered game system.

**Parameter `system`:** System to remove.

**Returns:** `true` when the system was registered.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameScene.cs#L345).

## `ResetSystem`

<a id="api-7acbe410ff2565a9"></a>
<!-- api: M:InnoEngine.Scene.GameScene.ResetSystem(InnoEngine.Scene.GameSystem) 811a79ede1203c978360534848e4a26721590f22240a8bbd3742cf9c173038cf -->

```csharp
public void InnoEngine.Scene.GameScene.ResetSystem(InnoEngine.Scene.GameSystem system)
```

Explicitly restores a registered system to its default state.

**Parameter `system`:** The system consumed by reset system; ownership remains with the caller unless explicitly stated otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameScene.cs#L358).

## `SetSystemIndex`

<a id="api-bcc8f2208c3b6a67"></a>
<!-- api: M:InnoEngine.Scene.GameScene.SetSystemIndex(InnoEngine.Scene.GameSystem,System.Int32) da11a4634257e4976252221fddea3f1ee4f156d71ac5edb0a3d1e1a1fdb5b382 -->

```csharp
public void InnoEngine.Scene.GameScene.SetSystemIndex(InnoEngine.Scene.GameSystem system, int systemIndex)
```

Moves a registered system to a requested display and serialization index.
This operation does not change its explicit `InnoEngine.Scene.GameSystem.order`.

**Parameter `system`:** Registered system to move.

**Parameter `systemIndex`:** Requested zero-based display index.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameScene.cs#L404).

## `hierarchyRevision`

<a id="api-ef56ab8714a7a513"></a>
<!-- api: P:InnoEngine.Scene.GameScene.hierarchyRevision bf7d2f91c4f9f4b4462b198dfd925fdbede2b421c8cb923b4ad91ec4e46cf56f -->

```csharp
public ulong InnoEngine.Scene.GameScene.hierarchyRevision { get; }
```

Gets the owner-local change counter for object membership, parentage and sibling ordering.

**Constraints:** Use this counter only to invalidate derived views of this live scene. It is not a persistent
identity, data format or guarantee that object properties remain unchanged.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameScene.cs#L79).

## `isLoaded`

<a id="api-92558412c7b8226c"></a>
<!-- api: P:InnoEngine.Scene.GameScene.isLoaded 11b56834067f24c5e0d6f1dcaf19ecdefc80b055ab50a22e4488d49c49b46efa -->

```csharp
public bool InnoEngine.Scene.GameScene.isLoaded { get; }
```

Gets whether this scene is currently owned by `InnoEngine.Scene.SceneManager`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameScene.cs#L70).

## `name`

<a id="api-42e6aa9655b6b3e8"></a>
<!-- api: P:InnoEngine.Scene.GameScene.name 78211a461cf9f5bfcb06591a7a383781def83b465f780f30ebd1bbc3f3b70581 -->

```csharp
public string InnoEngine.Scene.GameScene.name { get; set; }
```

Gets or sets the scene display name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameScene.cs#L57).
