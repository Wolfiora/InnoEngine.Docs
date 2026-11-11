---
title: "GameObject"
description: "Reference for GameObject in Inno.Scene."
uid: api.inno.scene.460b7860543513db
kind: api
owners:
  - Inno.Scene
apiSurface: source-clr
contracts:
  - project.inno-scene#scene-ownership-contract
---
# `GameObject`

This reference describes `GameObject` in `Inno.Scene`. Read the [shared contract](../../projects/inno-scene.md#scene-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Scene.EngineObject`.

**Direct interfaces:** `Inno.Core.Serialization.ISerializable`.

## Members

| Member | Kind |
| --- | --- |
| [`defaultTag`](#api-14becb0b5faac531) | Field |
| [`AddComponent`](#api-aa4e43f348b52838) | Method |
| [```AddComponent``1```](#api-1633126aea5ea46f) | Method |
| [`GetComponent`](#api-dbe82fd0307121c7) | Method |
| [```GetComponent``1```](#api-bcec30a148030e29) | Method |
| [`GetComponentIndex`](#api-2e578abf08fd72cc) | Method |
| [`GetComponents`](#api-5b6b606d277eab3f) | Method |
| [```GetComponents``1```](#api-4106f29341134f0c) | Method |
| [```HasComponent``1```](#api-8a0b6f2e6aff010b) | Method |
| [`RemoveComponent`](#api-b0ed89a796ce7f92) | Method |
| [`ResetComponent`](#api-07e9f9f0049430db) | Method |
| [`SetActive`](#api-f174e1ad444d737c) | Method |
| [`SetComponentIndex`](#api-3687f73df7b6a875) | Method |
| [```TryGetComponent``1```](#api-d779ee992084a43f) | Method |
| [`activeInHierarchy`](#api-1f23631df7f662f7) | Property |
| [`activeSelf`](#api-c7d8f051f35f6e6f) | Property |
| [`isPartOfPrefabInstance`](#api-0a28aa1aad86bcf1) | Property |
| [`isRuntimeValid`](#api-df84997e85bcb370) | Property |
| [`layer`](#api-d722486bf52be2a8) | Property |
| [`name`](#api-377dbf646d0e71bb) | Property |
| [`prefabInstance`](#api-47b50f4fe3493569) | Property |
| [`prefabInstanceRoot`](#api-6584c1ac81792cc1) | Property |
| [`scene`](#api-3bac6ea069a929ef) | Property |
| [`tag`](#api-958dd524681e4724) | Property |
| [`transform`](#api-aa14db106f08ce90) | Property |

## Type declaration

<a id="api-460b7860543513db"></a>
<!-- api: T:Inno.Scene.GameObject 39d25fbe32ebf322ddcab26ac4f6e05f7ee26ae8f0984dbfc79fdc03ba848e7d -->

```csharp
public sealed class Inno.Scene.GameObject : Inno.Scene.EngineObject, Inno.Core.Serialization.ISerializable
```

Represents a scene-owned object and exposes its component-oriented API.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameObject.cs#L15).

## `defaultTag`

<a id="api-14becb0b5faac531"></a>
<!-- api: F:Inno.Scene.GameObject.defaultTag e117023cda38dc6908af45e73ea35dfbbebed8f93eba145ed1e9c96c451794f3 -->

```csharp
public const string Inno.Scene.GameObject.defaultTag = "Untagged"
```

Defines the tag assigned to newly created game objects.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameObject.cs#L20).

## `AddComponent`

<a id="api-aa4e43f348b52838"></a>
<!-- api: M:Inno.Scene.GameObject.AddComponent(System.Type) e2b3ed5b739f3cd50363049436252e565616303dd78939c04c75e0d3cc1091ae -->

```csharp
public Inno.Scene.GameComponent Inno.Scene.GameObject.AddComponent(System.Type componentType)
```

Creates and attaches a component of the requested runtime type.

**Parameter `componentType`:** Concrete component type.

**Returns:** The attached component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameObject.cs#L206).

## ```AddComponent``1```

<a id="api-1633126aea5ea46f"></a>
<!-- api: M:Inno.Scene.GameObject.AddComponent``1 8f7ca960143d05d6a153287c56845a48f19e192456591f36892a63971425fcae -->

```csharp
public TComponent Inno.Scene.GameObject.AddComponent<TComponent>() where TComponent : Inno.Scene.GameComponent
```

Creates and attaches a component of the requested type.

**Type parameter `TComponent`:** Concrete component type.

**Returns:** The attached component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameObject.cs#L195).

## `GetComponent`

<a id="api-dbe82fd0307121c7"></a>
<!-- api: M:Inno.Scene.GameObject.GetComponent(System.Type) 32c72dad75ac736556f6d927dda13c1f9c01a14504c5e853d3e130604507976e -->

```csharp
public Inno.Scene.GameComponent Inno.Scene.GameObject.GetComponent(System.Type componentType)
```

Gets the first attached component assignable to a runtime type.

**Parameter `componentType`:** Requested component type.

**Returns:** The first matching component.

**Throws `System.InvalidOperationException`:** Thrown when no matching component exists.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameObject.cs#L240).

## ```GetComponent``1```

<a id="api-bcec30a148030e29"></a>
<!-- api: M:Inno.Scene.GameObject.GetComponent``1 f0d2fe5f40b0c206ba71312bce385ef9d01f8d4d755b77ffbc19d029cd7e5481 -->

```csharp
public TComponent Inno.Scene.GameObject.GetComponent<TComponent>() where TComponent : Inno.Scene.GameComponent
```

Gets the first attached component assignable to the requested type.

**Type parameter `TComponent`:** Requested component type.

**Returns:** The first matching component.

**Throws `System.InvalidOperationException`:** Thrown when no matching component exists.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameObject.cs#L221).

## `GetComponentIndex`

<a id="api-2e578abf08fd72cc"></a>
<!-- api: M:Inno.Scene.GameObject.GetComponentIndex(Inno.Scene.GameComponent) b9acdf9b043d0226a2d7fbeca07f2e2195ed4bf81aafdc4d245de2181895d988 -->

```csharp
public int Inno.Scene.GameObject.GetComponentIndex(Inno.Scene.GameComponent component)
```

Gets the attachment index of a component on this object.

**Parameter `component`:** Attached component to locate.

**Returns:** The zero-based attachment index.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameObject.cs#L311).

## `GetComponents`

<a id="api-5b6b606d277eab3f"></a>
<!-- api: M:Inno.Scene.GameObject.GetComponents abf48d2a7ec2357a34d040e2f040604b1cb5a38ff63e3d19b49e7b1954aa6d38 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Scene.GameComponent> Inno.Scene.GameObject.GetComponents()
```

Gets all attached components in attachment order.

**Returns:** A stable component snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameObject.cs#L300).

## ```GetComponents``1```

<a id="api-4106f29341134f0c"></a>
<!-- api: M:Inno.Scene.GameObject.GetComponents``1 09eb3337a0eed370d74b0f6858ed245f397e1b122a1ec8c5d4455b0b9af40bdd -->

```csharp
public System.Collections.Generic.IReadOnlyList<TComponent> Inno.Scene.GameObject.GetComponents<TComponent>() where TComponent : Inno.Scene.GameComponent
```

Gets all attached components assignable to the requested type in attachment order.

**Type parameter `TComponent`:** Requested component type.

**Returns:** A stable component snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameObject.cs#L291).

## ```HasComponent``1```

<a id="api-8a0b6f2e6aff010b"></a>
<!-- api: M:Inno.Scene.GameObject.HasComponent``1 fabf6dcd16c02e791d0a680409d17743b5b91de287e3f46929e27b2af881f520 -->

```csharp
public bool Inno.Scene.GameObject.HasComponent<TComponent>() where TComponent : Inno.Scene.GameComponent
```

Gets whether a matching component is attached.

**Type parameter `TComponent`:** Requested component type.

**Returns:** `true` when a matching component exists.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameObject.cs#L280).

## `RemoveComponent`

<a id="api-b0ed89a796ce7f92"></a>
<!-- api: M:Inno.Scene.GameObject.RemoveComponent(Inno.Scene.GameComponent) 28c055e32410d3df2e7d3ce2df005b1a2333cf8ef7790947ab088d1b63bcd4b8 -->

```csharp
public bool Inno.Scene.GameObject.RemoveComponent(Inno.Scene.GameComponent component)
```

Removes and destroys a specific attached component.

**Parameter `component`:** GameComponent instance to remove.

**Returns:** `true` when the component was attached and removed.

**Throws `System.InvalidOperationException`:** Thrown when attempting to remove the mandatory transform.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameObject.cs#L365).

## `ResetComponent`

<a id="api-07e9f9f0049430db"></a>
<!-- api: M:Inno.Scene.GameObject.ResetComponent(Inno.Scene.GameComponent) 25ba4f33a1399c67cf0c8afe982398187639686e46f74f72e5e63f22a8767a43 -->

```csharp
public void Inno.Scene.GameObject.ResetComponent(Inno.Scene.GameComponent component)
```

Restores an attached component to the defaults defined by its optional Reset message.

**Parameter `component`:** GameComponent instance to reset.

**Throws `System.ArgumentNullException`:** Thrown when `component` is `null`.

**Throws `System.InvalidOperationException`:** Thrown when the object is invalid or the component is not attached to it.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameObject.cs#L347).

## `SetActive`

<a id="api-f174e1ad444d737c"></a>
<!-- api: M:Inno.Scene.GameObject.SetActive(System.Boolean) 8646857ffeda61f384c8dc6337c253a1cfacf9a3d3824715aaf3bbb87195e8c0 -->

```csharp
public void Inno.Scene.GameObject.SetActive(bool value)
```

Changes this object's explicit active state and updates its hierarchy subtree.

**Parameter `value`:** The concrete value read or transformed by this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameObject.cs#L184).

## `SetComponentIndex`

<a id="api-3687f73df7b6a875"></a>
<!-- api: M:Inno.Scene.GameObject.SetComponentIndex(Inno.Scene.GameComponent,System.Int32) 85d8f563eb28f51e81a126956ae867f774d5cca72ff1131bd122b37d67ef21f3 -->

```csharp
public void Inno.Scene.GameObject.SetComponentIndex(Inno.Scene.GameComponent component, int componentIndex)
```

Moves an attached component to a requested attachment index.
The mandatory Transform participates in ordering but remains non-removable.

**Parameter `component`:** Attached component to move.

**Parameter `componentIndex`:** Requested zero-based attachment index.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameObject.cs#L327).

## ```TryGetComponent``1```

<a id="api-d779ee992084a43f"></a>
<!-- api: M:Inno.Scene.GameObject.TryGetComponent``1(``0@) a3d35f247de36dc8249e5a06ba7ea5ee232580534b8f25bc54690b11b1af23ed -->

```csharp
public bool Inno.Scene.GameObject.TryGetComponent<TComponent>(out TComponent? component) where TComponent : Inno.Scene.GameComponent
```

Tries to get the first attached component assignable to the requested type.

**Type parameter `TComponent`:** Requested component type.

**Parameter `component`:** Matching component when found.

**Returns:** `true` when a matching component exists.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameObject.cs#L260).

## `activeInHierarchy`

<a id="api-1f23631df7f662f7"></a>
<!-- api: P:Inno.Scene.GameObject.activeInHierarchy 84e2871aa532c5e3b72da6c0cf260f0052662f5057a4fe5cc744d518bb563bf6 -->

```csharp
public bool Inno.Scene.GameObject.activeInHierarchy { get; }
```

Gets whether this object is active after parent hierarchy state is applied.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameObject.cs#L161).

## `activeSelf`

<a id="api-c7d8f051f35f6e6f"></a>
<!-- api: P:Inno.Scene.GameObject.activeSelf 80dca851855e5702649c969e3bb7dd4857c1fb69edc5234f72b20362b8081c94 -->

```csharp
public bool Inno.Scene.GameObject.activeSelf { get; }
```

Gets whether this object is explicitly active.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameObject.cs#L149).

## `isPartOfPrefabInstance`

<a id="api-0a28aa1aad86bcf1"></a>
<!-- api: P:Inno.Scene.GameObject.isPartOfPrefabInstance 3d24af51809fb7917755c5c9ef80f4898acc6a05635f9895f34439416679c3ca -->

```csharp
public bool Inno.Scene.GameObject.isPartOfPrefabInstance { get; }
```

Gets whether this object retains a prefab source connection.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameObject.cs#L166).

## `isRuntimeValid`

<a id="api-df84997e85bcb370"></a>
<!-- api: P:Inno.Scene.GameObject.isRuntimeValid 5c00e15c3318d954c49970b7a98e185090163add752c1299aedd3e033dd5516a -->

```csharp
public bool Inno.Scene.GameObject.isRuntimeValid { get; }
```

Gets whether this object is live in its owning scene.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameObject.cs#L45).

## `layer`

<a id="api-d722486bf52be2a8"></a>
<!-- api: P:Inno.Scene.GameObject.layer 5a7bf6781499913f0f909bc0ec4059775b2c6319401fac66da05b07b019abe2a -->

```csharp
public Inno.Scene.Layers.GameLayer Inno.Scene.GameObject.layer { get; set; }
```

Gets or sets the single runtime layer used to filter this game object.

**Constraints:** GameLayer names are project configuration stored separately from scene data. Scene and prefab
serialization persist only the stable numeric layer slot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameObject.cs#L113).

## `name`

<a id="api-377dbf646d0e71bb"></a>
<!-- api: P:Inno.Scene.GameObject.name 0b6a064b0a7369ee0b3ec4dbbda02dbd36b3ce8eb176f3d79d696ceb54c1be97 -->

```csharp
public string Inno.Scene.GameObject.name { get; set; }
```

Gets or sets the display name stored in the owning scene.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameObject.cs#L58).

## `prefabInstance`

<a id="api-47b50f4fe3493569"></a>
<!-- api: P:Inno.Scene.GameObject.prefabInstance a446088d904d78468222b56e7b579ce75c619bb4b8fd6e33b1108dd44cdb1c75 -->

```csharp
public Inno.Scene.PrefabInstanceInfo? Inno.Scene.GameObject.prefabInstance { get; }
```

Gets read-only information about this object's prefab source connection.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameObject.cs#L176).

## `prefabInstanceRoot`

<a id="api-6584c1ac81792cc1"></a>
<!-- api: P:Inno.Scene.GameObject.prefabInstanceRoot 72197d7d7fbe8f1dd9f571e553891ab94abf5ff2c6b386e5d32453adeed7cbb4 -->

```csharp
public Inno.Scene.GameObject? Inno.Scene.GameObject.prefabInstanceRoot { get; }
```

Gets the root of this object's prefab instance connection.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameObject.cs#L171).

## `scene`

<a id="api-3bac6ea069a929ef"></a>
<!-- api: P:Inno.Scene.GameObject.scene b40c499a7b82766d5a24fc717932e7bc7fe555f120dc4ea9821a93c665b0d84e -->

```csharp
public Inno.Scene.GameScene Inno.Scene.GameObject.scene { get; }
```

Gets the owning scene.

**Throws `System.InvalidOperationException`:** Thrown when this object is destroyed or detached.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameObject.cs#L53).

## `tag`

<a id="api-958dd524681e4724"></a>
<!-- api: P:Inno.Scene.GameObject.tag 5e3626fb28f6458ab7b8beec48f31cbc6477e65f22c7ecb39bc7729b97af480e -->

```csharp
public string Inno.Scene.GameObject.tag { get; set; }
```

Gets or sets the ordinal tag used to categorize and query this game object.

**Constraints:** Tag definitions are project configuration stored separately from scene data. Scene and prefab
serialization persist the assigned ordinal value even when its current project definition is absent.

**Throws `System.ArgumentException`:** Thrown when the assigned tag is empty or contains only white-space characters.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameObject.cs#L87).

## `transform`

<a id="api-aa14db106f08ce90"></a>
<!-- api: P:Inno.Scene.GameObject.transform 5f95c9e64a42bfe8673ef50913e7381f9a97f35b4e5bd4413a52058aef4593d3 -->

```csharp
public Inno.Scene.Components.Transform Inno.Scene.GameObject.transform { get; }
```

Gets the mandatory transform component.

**Throws `System.InvalidOperationException`:** Thrown when this object is destroyed or incompletely initialized.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Core/GameObject.cs#L137).
