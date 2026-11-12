---
title: "GameObject"
description: "Reference for GameObject in Inno.Scene."
uid: api.inno.scene.runtime-script.62f3d5b4136a6bda
kind: api
owners:
  - Inno.Scene
apiSurface: runtime-script
contracts:
  - project.inno-scene#scene-ownership-contract
  - manual.scripting.use-script-api
---
# `GameObject`

This reference describes `GameObject` in `Inno.Scene`. Read the [shared contract](../../projects/inno-scene.md#scene-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `InnoEngine.Scene.EngineObject`.

**Direct interfaces:** `InnoEngine.Serialization.ISerializable`.

## Members

| Member | Kind |
| --- | --- |
| [`defaultTag`](#api-222f4b5bb30c6ab5) | Field |
| [`#ctor`](#api-64468afe92170dd8) | Method |
| [`AddComponent`](#api-39919661eacb5a57) | Method |
| [```AddComponent``1```](#api-1d3a3a7be565303e) | Method |
| [`GetComponent`](#api-1621b16f3c212550) | Method |
| [```GetComponent``1```](#api-b225822a4387822c) | Method |
| [`GetComponentIndex`](#api-4fd2e75ade71f8a0) | Method |
| [`GetComponents`](#api-6693bae5ae99706c) | Method |
| [```GetComponents``1```](#api-1e115cba43809770) | Method |
| [```HasComponent``1```](#api-2b9b05bf033630d5) | Method |
| [`RemoveComponent`](#api-935b8de5dab34d7f) | Method |
| [`ResetComponent`](#api-2f16586bfefd21df) | Method |
| [`SetActive`](#api-72ce81255f2d1f61) | Method |
| [`SetComponentIndex`](#api-e7d06d78d2d09bc3) | Method |
| [```TryGetComponent``1```](#api-017566515f2ae719) | Method |
| [`activeInHierarchy`](#api-a3a2aac2b3eaad4b) | Property |
| [`activeSelf`](#api-d3e6217b9ed4297a) | Property |
| [`isPartOfPrefabInstance`](#api-3af8692900ead9a4) | Property |
| [`isRuntimeValid`](#api-ea609fc7a7fb4d52) | Property |
| [`layer`](#api-7e566d607e7729ab) | Property |
| [`name`](#api-f23c1b2048e9f92e) | Property |
| [`prefabInstance`](#api-d5bb63a376333c72) | Property |
| [`prefabInstanceRoot`](#api-2f984153c4b40af4) | Property |
| [`scene`](#api-53ba2e18cd299eb7) | Property |
| [`tag`](#api-0a4bf0943c10d33a) | Property |
| [`transform`](#api-d9d569141e000063) | Property |

## Type declaration

<a id="api-62f3d5b4136a6bda"></a>
<!-- api: T:InnoEngine.Scene.GameObject 389069158a0a4016a5813c304ae9867291f23c3675d56d606159798d0c1fdfe5 -->

```csharp
public sealed class InnoEngine.Scene.GameObject : InnoEngine.Scene.EngineObject, InnoEngine.Serialization.ISerializable
```

Represents a scene-owned object and exposes its component-oriented API.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameObject.cs#L15).

## `defaultTag`

<a id="api-222f4b5bb30c6ab5"></a>
<!-- api: F:InnoEngine.Scene.GameObject.defaultTag 956defc362024062468a5378aa7aaabec29d355c1072d65d5363b01dff8d77d7 -->

```csharp
public const string InnoEngine.Scene.GameObject.defaultTag = "Untagged"
```

Defines the tag assigned to newly created game objects.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameObject.cs#L20).

## `#ctor`

<a id="api-64468afe92170dd8"></a>
<!-- api: M:InnoEngine.Scene.GameObject.#ctor 5e95187cd2ba2695812471c55346674da4dff76ce24ed75a56f040af60c505cc -->

```csharp
public InnoEngine.Scene.GameObject.GameObject()
```

Appears in the generated script reference without a matching public or protected engine constructor.

**Constraints:** This is an IDE projection artifact, not a supported construction path. Do not call this constructor from scripts; obtain the instance through the containing type's documented owner or factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameObject.cs#L15).

## `AddComponent`

<a id="api-39919661eacb5a57"></a>
<!-- api: M:InnoEngine.Scene.GameObject.AddComponent(System.Type) 0deb6bec6bce90f83d89c74ba7936ead6fd2ffb21cc5a474646201d4d9c60ff5 -->

```csharp
public InnoEngine.Scene.GameComponent InnoEngine.Scene.GameObject.AddComponent(System.Type componentType)
```

Creates and attaches a component of the requested runtime type.

**Parameter `componentType`:** Concrete component type.

**Returns:** The attached component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameObject.cs#L206).

## ```AddComponent``1```

<a id="api-1d3a3a7be565303e"></a>
<!-- api: M:InnoEngine.Scene.GameObject.AddComponent``1 779e3d5a5e2fa945f636fbe2b021122c53b7ac6fe243f33ddc2d840cace13c8d -->

```csharp
public TComponent InnoEngine.Scene.GameObject.AddComponent<TComponent>() where TComponent : InnoEngine.Scene.GameComponent
```

Creates and attaches a component of the requested type.

**Type parameter `TComponent`:** Concrete component type.

**Returns:** The attached component.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameObject.cs#L195).

## `GetComponent`

<a id="api-1621b16f3c212550"></a>
<!-- api: M:InnoEngine.Scene.GameObject.GetComponent(System.Type) 53fd7fae9ef3e6afa0bc17a5a8a392f38bf418bd620047796080efe895eb9ae9 -->

```csharp
public InnoEngine.Scene.GameComponent InnoEngine.Scene.GameObject.GetComponent(System.Type componentType)
```

Gets the first attached component assignable to a runtime type.

**Parameter `componentType`:** Requested component type.

**Returns:** The first matching component.

**Throws `System.InvalidOperationException`:** Thrown when no matching component exists.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameObject.cs#L240).

## ```GetComponent``1```

<a id="api-b225822a4387822c"></a>
<!-- api: M:InnoEngine.Scene.GameObject.GetComponent``1 1ac0c6a1f04eaef121b27c3a2879d9fa1920c28700c76b969edb012386405639 -->

```csharp
public TComponent InnoEngine.Scene.GameObject.GetComponent<TComponent>() where TComponent : InnoEngine.Scene.GameComponent
```

Gets the first attached component assignable to the requested type.

**Type parameter `TComponent`:** Requested component type.

**Returns:** The first matching component.

**Throws `System.InvalidOperationException`:** Thrown when no matching component exists.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameObject.cs#L221).

## `GetComponentIndex`

<a id="api-4fd2e75ade71f8a0"></a>
<!-- api: M:InnoEngine.Scene.GameObject.GetComponentIndex(InnoEngine.Scene.GameComponent) aa1471b417360e1749105f0288b7c0dc18f5d9d35cbe0553151cc29fad230ca7 -->

```csharp
public int InnoEngine.Scene.GameObject.GetComponentIndex(InnoEngine.Scene.GameComponent component)
```

Gets the attachment index of a component on this object.

**Parameter `component`:** Attached component to locate.

**Returns:** The zero-based attachment index.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameObject.cs#L311).

## `GetComponents`

<a id="api-6693bae5ae99706c"></a>
<!-- api: M:InnoEngine.Scene.GameObject.GetComponents a3cc301287ad449ff0ee3701a3c2549ee38886be8bc46722a54a6e9819be2901 -->

```csharp
public System.Collections.Generic.IReadOnlyList<InnoEngine.Scene.GameComponent> InnoEngine.Scene.GameObject.GetComponents()
```

Gets all attached components in attachment order.

**Returns:** A stable component snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameObject.cs#L300).

## ```GetComponents``1```

<a id="api-1e115cba43809770"></a>
<!-- api: M:InnoEngine.Scene.GameObject.GetComponents``1 55e212fbf975b19b97bfe86f848396b4f23a2688f2e14ae6d1e41110b01f5161 -->

```csharp
public System.Collections.Generic.IReadOnlyList<TComponent> InnoEngine.Scene.GameObject.GetComponents<TComponent>() where TComponent : InnoEngine.Scene.GameComponent
```

Gets all attached components assignable to the requested type in attachment order.

**Type parameter `TComponent`:** Requested component type.

**Returns:** A stable component snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameObject.cs#L291).

## ```HasComponent``1```

<a id="api-2b9b05bf033630d5"></a>
<!-- api: M:InnoEngine.Scene.GameObject.HasComponent``1 b44ff62859f5b6c1e0f1b76c23fb58bab014c03ff35654077a372dd839eddd22 -->

```csharp
public bool InnoEngine.Scene.GameObject.HasComponent<TComponent>() where TComponent : InnoEngine.Scene.GameComponent
```

Gets whether a matching component is attached.

**Type parameter `TComponent`:** Requested component type.

**Returns:** `true` when a matching component exists.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameObject.cs#L280).

## `RemoveComponent`

<a id="api-935b8de5dab34d7f"></a>
<!-- api: M:InnoEngine.Scene.GameObject.RemoveComponent(InnoEngine.Scene.GameComponent) bb4c7ebefd154b7ff3af06c83e714d418ee6748fa67dd77169fec888ed63b455 -->

```csharp
public bool InnoEngine.Scene.GameObject.RemoveComponent(InnoEngine.Scene.GameComponent component)
```

Removes and destroys a specific attached component.

**Parameter `component`:** GameComponent instance to remove.

**Returns:** `true` when the component was attached and removed.

**Throws `System.InvalidOperationException`:** Thrown when attempting to remove the mandatory transform.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameObject.cs#L365).

## `ResetComponent`

<a id="api-2f16586bfefd21df"></a>
<!-- api: M:InnoEngine.Scene.GameObject.ResetComponent(InnoEngine.Scene.GameComponent) 6c8877758039d159e56ccddbd67b5a6d20d2ef95b956d315ae4cc9f8c9ccb118 -->

```csharp
public void InnoEngine.Scene.GameObject.ResetComponent(InnoEngine.Scene.GameComponent component)
```

Restores an attached component to the defaults defined by its optional Reset message.

**Parameter `component`:** GameComponent instance to reset.

**Throws `System.ArgumentNullException`:** Thrown when `component` is `null`.

**Throws `System.InvalidOperationException`:** Thrown when the object is invalid or the component is not attached to it.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameObject.cs#L347).

## `SetActive`

<a id="api-72ce81255f2d1f61"></a>
<!-- api: M:InnoEngine.Scene.GameObject.SetActive(System.Boolean) d385fa1c8d6621017c4ae4d0cf69448bb82b87e34f7b22855c54c878031ab0b8 -->

```csharp
public void InnoEngine.Scene.GameObject.SetActive(bool value)
```

Changes this object's explicit active state and updates its hierarchy subtree.

**Parameter `value`:** The concrete value read or transformed by this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameObject.cs#L184).

## `SetComponentIndex`

<a id="api-e7d06d78d2d09bc3"></a>
<!-- api: M:InnoEngine.Scene.GameObject.SetComponentIndex(InnoEngine.Scene.GameComponent,System.Int32) c8dcc4d7a6846477ac0849d3a9968c6409ac4c52f8853ea2450d823c14d540db -->

```csharp
public void InnoEngine.Scene.GameObject.SetComponentIndex(InnoEngine.Scene.GameComponent component, int componentIndex)
```

Moves an attached component to a requested attachment index.
The mandatory Transform participates in ordering but remains non-removable.

**Parameter `component`:** Attached component to move.

**Parameter `componentIndex`:** Requested zero-based attachment index.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameObject.cs#L327).

## ```TryGetComponent``1```

<a id="api-017566515f2ae719"></a>
<!-- api: M:InnoEngine.Scene.GameObject.TryGetComponent``1(``0@) c0230821f33fb75c7f0e82a690ca4a8c5efbf882bc315bb070e3401f5bc763a9 -->

```csharp
public bool InnoEngine.Scene.GameObject.TryGetComponent<TComponent>(out TComponent? component) where TComponent : InnoEngine.Scene.GameComponent
```

Tries to get the first attached component assignable to the requested type.

**Type parameter `TComponent`:** Requested component type.

**Parameter `component`:** Matching component when found.

**Returns:** `true` when a matching component exists.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameObject.cs#L260).

## `activeInHierarchy`

<a id="api-a3a2aac2b3eaad4b"></a>
<!-- api: P:InnoEngine.Scene.GameObject.activeInHierarchy beabd9d3af758feaa10240c2c28c8397dc1e4169169f43dc861f80cb5cfd0a2d -->

```csharp
public bool InnoEngine.Scene.GameObject.activeInHierarchy { get; }
```

Gets whether this object is active after parent hierarchy state is applied.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameObject.cs#L161).

## `activeSelf`

<a id="api-d3e6217b9ed4297a"></a>
<!-- api: P:InnoEngine.Scene.GameObject.activeSelf e5b37c53590ec390e09c757a1ab8425a9022640a1c5679d4110e96fd96360998 -->

```csharp
public bool InnoEngine.Scene.GameObject.activeSelf { get; }
```

Gets whether this object is explicitly active.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameObject.cs#L149).

## `isPartOfPrefabInstance`

<a id="api-3af8692900ead9a4"></a>
<!-- api: P:InnoEngine.Scene.GameObject.isPartOfPrefabInstance fd9614b8871d05665557f72e37092aa44b1808e4bbce2296e4626c1d4cc40b74 -->

```csharp
public bool InnoEngine.Scene.GameObject.isPartOfPrefabInstance { get; }
```

Gets whether this object retains a prefab source connection.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameObject.cs#L166).

## `isRuntimeValid`

<a id="api-ea609fc7a7fb4d52"></a>
<!-- api: P:InnoEngine.Scene.GameObject.isRuntimeValid 7288a0ddab2c1c9147b82a21e4f7fb0ffc450fc4696f608b77b7748e757b1d13 -->

```csharp
public bool InnoEngine.Scene.GameObject.isRuntimeValid { get; }
```

Gets whether this object is live in its owning scene.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameObject.cs#L45).

## `layer`

<a id="api-7e566d607e7729ab"></a>
<!-- api: P:InnoEngine.Scene.GameObject.layer d3258ea62ee201b4eb91561c4eab301b38791bb41fdd945313f5c722a7dd46da -->

```csharp
public InnoEngine.Scene.GameLayer InnoEngine.Scene.GameObject.layer { get; set; }
```

Gets or sets the single runtime layer used to filter this game object.

**Constraints:** GameLayer names are project configuration stored separately from scene data. Scene and prefab
serialization persist only the stable numeric layer slot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameObject.cs#L113).

## `name`

<a id="api-f23c1b2048e9f92e"></a>
<!-- api: P:InnoEngine.Scene.GameObject.name 83a100d234f3fc33c6e6277ccecef05e382dd74496d863dfaba0be12ebe7f017 -->

```csharp
public string InnoEngine.Scene.GameObject.name { get; set; }
```

Gets or sets the display name stored in the owning scene.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameObject.cs#L58).

## `prefabInstance`

<a id="api-d5bb63a376333c72"></a>
<!-- api: P:InnoEngine.Scene.GameObject.prefabInstance 8b43b631cfb5345261f8c97f110ef0033a52795f8408663bd4deb09e49b9d860 -->

```csharp
public InnoEngine.Scene.PrefabInstanceInfo? InnoEngine.Scene.GameObject.prefabInstance { get; }
```

Gets read-only information about this object's prefab source connection.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameObject.cs#L176).

## `prefabInstanceRoot`

<a id="api-2f984153c4b40af4"></a>
<!-- api: P:InnoEngine.Scene.GameObject.prefabInstanceRoot 4738ea0c7343ec02ecce38fd9bf9cf66a1e3d13e8e0b90ebf21f34706db14621 -->

```csharp
public InnoEngine.Scene.GameObject? InnoEngine.Scene.GameObject.prefabInstanceRoot { get; }
```

Gets the root of this object's prefab instance connection.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameObject.cs#L171).

## `scene`

<a id="api-53ba2e18cd299eb7"></a>
<!-- api: P:InnoEngine.Scene.GameObject.scene b7d8fd1c0faef6820747a7c29ec344f35e41b7bfffbf564101133a1af0f12693 -->

```csharp
public InnoEngine.Scene.GameScene InnoEngine.Scene.GameObject.scene { get; }
```

Gets the owning scene.

**Throws `System.InvalidOperationException`:** Thrown when this object is destroyed or detached.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameObject.cs#L53).

## `tag`

<a id="api-0a4bf0943c10d33a"></a>
<!-- api: P:InnoEngine.Scene.GameObject.tag f40aa92963142a54ed660dd3cb4f0d47d86921e3537e8fa1005697bb1845fe22 -->

```csharp
public string InnoEngine.Scene.GameObject.tag { get; set; }
```

Gets or sets the ordinal tag used to categorize and query this game object.

**Constraints:** Tag definitions are project configuration stored separately from scene data. Scene and prefab
serialization persist the assigned ordinal value even when its current project definition is absent.

**Throws `System.ArgumentException`:** Thrown when the assigned tag is empty or contains only white-space characters.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameObject.cs#L87).

## `transform`

<a id="api-d9d569141e000063"></a>
<!-- api: P:InnoEngine.Scene.GameObject.transform 84829d11a56f8cb6dc2bf069b551f889cf02274af24f937875d9ac55bddde544 -->

```csharp
public InnoEngine.Scene.Transform InnoEngine.Scene.GameObject.transform { get; }
```

Gets the mandatory transform component.

**Throws `System.InvalidOperationException`:** Thrown when this object is destroyed or incompletely initialized.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/scene/Inno.Scene/Core/GameObject.cs#L137).
