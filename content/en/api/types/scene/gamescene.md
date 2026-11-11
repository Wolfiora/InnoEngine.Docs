---
title: "GameScene"
description: "Reference for GameScene in Inno.Scene."
uid: api.inno.scene.168352cd50f38424
kind: api
owners:
  - Inno.Scene
apiSurface: source-clr
contracts:
  - project.inno-scene#scene-ownership-contract
---
# `GameScene`

This reference describes `GameScene` in `Inno.Scene`. Read the [shared contract](../../projects/inno-scene.md#scene-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Scene.EngineObject`.

**Direct interfaces:** `Inno.Core.Serialization.ISerializable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-7ec9e66ed3f27579) | Method |
| [`AddSystem`](#api-6bb9b2f65ac5db0c) | Method |
| [`AddSystem`](#api-c950ca38d6e2ca41) | Method |
| [```AddSystem``1```](#api-64953fbbb3ceaa48) | Method |
| [`CreateObject`](#api-3c99ba3c2ae8cc91) | Method |
| [`DestroyObject`](#api-db54f0e3f1579504) | Method |
| [`FindObject`](#api-5a0e4edbdd84ac4d) | Method |
| [`FindObjectsWithLayer`](#api-911b316d3cd5576d) | Method |
| [`FindObjectsWithLayers`](#api-e1662c9dbf262a04) | Method |
| [`FindObjectsWithTag`](#api-935ce9f489ea8456) | Method |
| [`FindObjectWithLayer`](#api-c292f70e344ce0ba) | Method |
| [`FindObjectWithTag`](#api-158e0e433eac6bd7) | Method |
| [`GetObjects`](#api-8df7285722a64f36) | Method |
| [`GetSystemIndex`](#api-a8e8ef7d325315b6) | Method |
| [`GetSystems`](#api-bb8b0a735f297852) | Method |
| [`InstantiatePrefab`](#api-fada3b6477e6b68f) | Method |
| [`RemoveSystem`](#api-68eb21822dd0f3b6) | Method |
| [`ResetSystem`](#api-49bf512be8d0504e) | Method |
| [`SetSystemIndex`](#api-bf54be32af0a7f19) | Method |
| [`hierarchyRevision`](#api-b2fd01dd04b45bfd) | Property |
| [`isLoaded`](#api-9b8bea2354891874) | Property |
| [`name`](#api-cbd640d63f2fa05b) | Property |

## Type declaration

<a id="api-168352cd50f38424"></a>
<!-- api: T:Inno.Scene.GameScene e04d4058f0f97edcc77d12f71c8c13da31a4327034379f3adcfffabc94addcda -->

```csharp
public sealed class Inno.Scene.GameScene : Inno.Scene.EngineObject, Inno.Core.Serialization.ISerializable
```

Owns a runtime scene, including its objects, components, hierarchy, and systems.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameScene.cs#L17).

## `#ctor`

<a id="api-7ec9e66ed3f27579"></a>
<!-- api: M:Inno.Scene.GameScene.#ctor(System.String) 19902b5adc0939ad09b9ee0d938dcb51f4d46dc2f9fa59012625200e61676b04 -->

```csharp
public Inno.Scene.GameScene.GameScene(string name = "Untitled Scene")
```

Creates an empty scene.

**Parameter `name`:** Initial scene name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameScene.cs#L36).

## `AddSystem`

<a id="api-6bb9b2f65ac5db0c"></a>
<!-- api: M:Inno.Scene.GameScene.AddSystem(Inno.Scene.GameSystem) a21e28c4f1e2c5958e8cb7c081e0ba33f25552188ed48397755e5739359c9d43 -->

```csharp
public void Inno.Scene.GameScene.AddSystem(Inno.Scene.GameSystem system)
```

Registers a game system instance.

**Parameter `system`:** System to register.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameScene.cs#L330).

## `AddSystem`

<a id="api-c950ca38d6e2ca41"></a>
<!-- api: M:Inno.Scene.GameScene.AddSystem(System.Type) e27923d54686760753fe5c2918129ab5aec7dc7d358231460ec07f2c953d3ece -->

```csharp
public Inno.Scene.GameSystem Inno.Scene.GameScene.AddSystem(System.Type systemType)
```

Creates and registers a concrete game system by runtime type.

**Parameter `systemType`:** The system type consumed by add system; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The validated game system that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameScene.cs#L312).

## ```AddSystem``1```

<a id="api-64953fbbb3ceaa48"></a>
<!-- api: M:Inno.Scene.GameScene.AddSystem``1 b82e781098404d3fe8f5dd6fb08416665b5aae4f21daee654f9af20a65828e84 -->

```csharp
public TSystem Inno.Scene.GameScene.AddSystem<TSystem>() where TSystem : Inno.Scene.GameSystem, new()
```

Creates and registers a parameterless game system.

**Type parameter `TSystem`:** Concrete system type.

**Returns:** The registered system.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameScene.cs#L297).

## `CreateObject`

<a id="api-3c99ba3c2ae8cc91"></a>
<!-- api: M:Inno.Scene.GameScene.CreateObject(System.String) 136b864bebaabac6ca8dabfbaea937e267e26557e472271370ec61cc1e8ca6e6 -->

```csharp
public Inno.Scene.GameObject Inno.Scene.GameScene.CreateObject(string name = "GameObject")
```

Creates a game object with a mandatory transform component.

**Parameter `name`:** Initial game object name.

**Returns:** The created game object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameScene.cs#L93).

## `DestroyObject`

<a id="api-db54f0e3f1579504"></a>
<!-- api: M:Inno.Scene.GameScene.DestroyObject(Inno.Scene.GameObject) 84cbd5ba11ceb594228f3f491ee6540b41058033de85de1d5dcecc89da1f9683 -->

```csharp
public bool Inno.Scene.GameScene.DestroyObject(Inno.Scene.GameObject gameObject)
```

Recursively destroys a game object and its complete child subtree.

**Parameter `gameObject`:** Root object to destroy.

**Returns:** `true` when the object belonged to this scene and was destroyed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameScene.cs#L130).

## `FindObject`

<a id="api-5a0e4edbdd84ac4d"></a>
<!-- api: M:Inno.Scene.GameScene.FindObject(System.String) e5d7f6d59a1f4a86212336d91a40cb5e3eea04a85caaa52230c5001e67db482d -->

```csharp
public Inno.Scene.GameObject? Inno.Scene.GameScene.FindObject(string name)
```

Finds the first game object with an ordinally matching name.

**Parameter `name`:** Name to find.

**Returns:** The first match, or `null` when no object matches.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameScene.cs#L200).

## `FindObjectsWithLayer`

<a id="api-911b316d3cd5576d"></a>
<!-- api: M:Inno.Scene.GameScene.FindObjectsWithLayer(Inno.Scene.Layers.GameLayer) a432316527f5e26faccaac35958331fcc1257acf5e419f93701454e36bb5dac3 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Scene.GameObject> Inno.Scene.GameScene.FindObjectsWithLayer(Inno.Scene.Layers.GameLayer layer)
```

Finds every game object assigned to one layer in scene storage order.

**Parameter `layer`:** The layer slot to find.

**Returns:** A stable snapshot containing every matching game object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameScene.cs#L267).

## `FindObjectsWithLayers`

<a id="api-e1662c9dbf262a04"></a>
<!-- api: M:Inno.Scene.GameScene.FindObjectsWithLayers(Inno.Scene.Layers.GameLayerMask) 690fa09d49330b76375530c8c3d63bf030837778755869244f2f1977b676e2b1 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Scene.GameObject> Inno.Scene.GameScene.FindObjectsWithLayers(Inno.Scene.Layers.GameLayerMask layers)
```

Finds every game object assigned to any layer contained in a mask.

**Parameter `layers`:** The set of accepted layer slots.

**Returns:** A stable snapshot in scene storage order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameScene.cs#L282).

## `FindObjectsWithTag`

<a id="api-935ce9f489ea8456"></a>
<!-- api: M:Inno.Scene.GameScene.FindObjectsWithTag(System.String) c0fb8bd34cff29a6952ac4d3282abe33aadfd20c45c0652cdcb7d74b8a694c1e -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Scene.GameObject> Inno.Scene.GameScene.FindObjectsWithTag(string tag)
```

Finds every game object with an ordinally matching tag in scene storage order.

**Parameter `tag`:** Tag to find.

**Returns:** A stable snapshot containing every matching game object.

**Throws `System.ArgumentException`:** Thrown when `tag` is empty or contains only white-space characters.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameScene.cs#L237).

## `FindObjectWithLayer`

<a id="api-c292f70e344ce0ba"></a>
<!-- api: M:Inno.Scene.GameScene.FindObjectWithLayer(Inno.Scene.Layers.GameLayer) 5315a380576e4dc2c6e8eb71160bac0de0cfaa4aac0317754d63585bad87aeed -->

```csharp
public Inno.Scene.GameObject? Inno.Scene.GameScene.FindObjectWithLayer(Inno.Scene.Layers.GameLayer layer)
```

Finds the first game object assigned to a layer in scene storage order.

**Parameter `layer`:** The layer slot to find.

**Returns:** The first matching game object, or `null` when no object matches.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameScene.cs#L252).

## `FindObjectWithTag`

<a id="api-158e0e433eac6bd7"></a>
<!-- api: M:Inno.Scene.GameScene.FindObjectWithTag(System.String) bde9a7642abb5493304223c21265c3938973bfafc0a5ff80ab46e1aaa43311d6 -->

```csharp
public Inno.Scene.GameObject? Inno.Scene.GameScene.FindObjectWithTag(string tag)
```

Finds the first game object with an ordinally matching tag in scene storage order.

**Parameter `tag`:** Tag to find.

**Returns:** The first match, or `null` when no object matches.

**Throws `System.ArgumentException`:** Thrown when `tag` is empty or contains only white-space characters.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameScene.cs#L219).

## `GetObjects`

<a id="api-8df7285722a64f36"></a>
<!-- api: M:Inno.Scene.GameScene.GetObjects 40f39ffd7ca1a6f33bf0792324f72abd38351c7afde5457ff0ecc0e745e37576 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Scene.GameObject> Inno.Scene.GameScene.GetObjects()
```

Gets all committed live game objects in scene storage order.

**Returns:** A stable object snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameScene.cs#L185).

## `GetSystemIndex`

<a id="api-a8e8ef7d325315b6"></a>
<!-- api: M:Inno.Scene.GameScene.GetSystemIndex(Inno.Scene.GameSystem) 81e4615c63a9f3ff240eae146ef22ed9d3476fd090ef3e2464caaaaf07a2110c -->

```csharp
public int Inno.Scene.GameScene.GetSystemIndex(Inno.Scene.GameSystem system)
```

Gets the display index of a registered system.

**Parameter `system`:** Registered system to locate.

**Returns:** The zero-based display index.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameScene.cs#L387).

## `GetSystems`

<a id="api-bb8b0a735f297852"></a>
<!-- api: M:Inno.Scene.GameScene.GetSystems 75962e96dc0acf90f2571be919abe7f45026319afc3cdafc29977dfb811acc8f -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Scene.GameSystem> Inno.Scene.GameScene.GetSystems()
```

Gets registered systems in display and serialization order.
Explicit `Inno.Scene.GameSystem.order` values independently control lifecycle execution priority.

**Returns:** An immutable snapshot of the values selected by the operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameScene.cs#L372).

## `InstantiatePrefab`

<a id="api-fada3b6477e6b68f"></a>
<!-- api: M:Inno.Scene.GameScene.InstantiatePrefab(Inno.Scene.PrefabAsset,Inno.Scene.Components.Transform) 8d764d4fabf3d6c152bd2bda1474d0f8eac441ecab0210f5779cb574f36632c8 -->

```csharp
public Inno.Scene.GameObject Inno.Scene.GameScene.InstantiatePrefab(Inno.Scene.PrefabAsset prefab, Inno.Scene.Components.Transform? parent = null)
```

Creates a connected instance of an imported prefab in this loaded scene.

**Parameter `prefab`:** The prefab asset that supplies the object subtree.

**Parameter `parent`:** Optional parent for the new instance.

**Returns:** The newly instantiated prefab root.

**Throws `System.ArgumentNullException`:** The prefab is null.

**Throws `System.InvalidOperationException`:** The scene is not loaded in its owning world or prefab services are unavailable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameScene.cs#L114).

## `RemoveSystem`

<a id="api-68eb21822dd0f3b6"></a>
<!-- api: M:Inno.Scene.GameScene.RemoveSystem(Inno.Scene.GameSystem) d98c06a58e80e528a520a76e8ceca7ae28a800641c109d0f03b9964f3716e44d -->

```csharp
public bool Inno.Scene.GameScene.RemoveSystem(Inno.Scene.GameSystem system)
```

Removes a registered game system.

**Parameter `system`:** System to remove.

**Returns:** `true` when the system was registered.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameScene.cs#L345).

## `ResetSystem`

<a id="api-49bf512be8d0504e"></a>
<!-- api: M:Inno.Scene.GameScene.ResetSystem(Inno.Scene.GameSystem) 589e53567522fe4eee4d0601ed2b7ff4d44a3755e298e24e4c7b7536be278cc1 -->

```csharp
public void Inno.Scene.GameScene.ResetSystem(Inno.Scene.GameSystem system)
```

Explicitly restores a registered system to its default state.

**Parameter `system`:** The system consumed by reset system; ownership remains with the caller unless explicitly stated otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameScene.cs#L358).

## `SetSystemIndex`

<a id="api-bf54be32af0a7f19"></a>
<!-- api: M:Inno.Scene.GameScene.SetSystemIndex(Inno.Scene.GameSystem,System.Int32) 9646cd4facc8dce2dc51264cdd469644024618c9a81ab6d7ab9d0867f8129b45 -->

```csharp
public void Inno.Scene.GameScene.SetSystemIndex(Inno.Scene.GameSystem system, int systemIndex)
```

Moves a registered system to a requested display and serialization index.
This operation does not change its explicit `Inno.Scene.GameSystem.order`.

**Parameter `system`:** Registered system to move.

**Parameter `systemIndex`:** Requested zero-based display index.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameScene.cs#L404).

## `hierarchyRevision`

<a id="api-b2fd01dd04b45bfd"></a>
<!-- api: P:Inno.Scene.GameScene.hierarchyRevision 1c4d5a41ec986366a76f247db551dbac156c833c9f4b0d4839c8e671f7a002e9 -->

```csharp
public ulong Inno.Scene.GameScene.hierarchyRevision { get; }
```

Gets the owner-local change counter for object membership, parentage and sibling ordering.

**Constraints:** Use this counter only to invalidate derived views of this live scene. It is not a persistent
identity, data format or guarantee that object properties remain unchanged.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameScene.cs#L79).

## `isLoaded`

<a id="api-9b8bea2354891874"></a>
<!-- api: P:Inno.Scene.GameScene.isLoaded 323e3afc26556b06060abb13649d99193622174f7c6ab6d041ed514ea2d03ca4 -->

```csharp
public bool Inno.Scene.GameScene.isLoaded { get; }
```

Gets whether this scene is currently owned by `Inno.Scene.SceneManager`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameScene.cs#L70).

## `name`

<a id="api-cbd640d63f2fa05b"></a>
<!-- api: P:Inno.Scene.GameScene.name 69f3787006caf1330f8437af6c146dcbb71e2920985da37ce80d376565cbb11a -->

```csharp
public string Inno.Scene.GameScene.name { get; set; }
```

Gets or sets the scene display name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameScene.cs#L57).
