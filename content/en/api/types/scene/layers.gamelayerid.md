---
title: "Layers.GameLayerId"
description: "Reference for Layers.GameLayerId in Inno.Scene."
uid: api.inno.scene.d8b95516fabb359e
kind: api
owners:
  - Inno.Scene
apiSurface: source-clr
contracts:
  - project.inno-scene#scene-ownership-contract
---
# `Layers.GameLayerId`

This reference describes `Layers.GameLayerId` in `Inno.Scene`. Read the [shared contract](../../projects/inno-scene.md#scene-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Scene.Layers.GameLayerId>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-743cd755c9e056fc) | Method |
| [`#ctor`](#api-f033ed62e96272d2) | Method |
| [`Equals`](#api-877d6d15fefa8b2a) | Method |
| [`Equals`](#api-484f26b3cbc549c5) | Method |
| [`GetHashCode`](#api-ea3382194dcf8253) | Method |
| [`op_Equality`](#api-d40ed447c552c00f) | Method |
| [`op_Inequality`](#api-f561b0c4f1d1a48f) | Method |
| [`ToString`](#api-8573f38a18b7ba45) | Method |
| [`isValid`](#api-22ad9926f0319df6) | Property |
| [`value`](#api-9882f58bb8d08d90) | Property |

## Type declaration

<a id="api-d8b95516fabb359e"></a>
<!-- api: T:Inno.Scene.Layers.GameLayerId ca3b85fe423f15f3a0bb8c8cf129164b6f96570a92c260b0c51f37b9069399b6 -->

```csharp
public readonly record struct Inno.Scene.Layers.GameLayerId : System.IEquatable<Inno.Scene.Layers.GameLayerId>
```

Identifies one project-scoped game layer independently from its compact runtime slot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Layers/GameLayerId.cs#L10).

## `#ctor`

<a id="api-743cd755c9e056fc"></a>
<!-- api: M:Inno.Scene.Layers.GameLayerId.#ctor(Inno.Core.Settings.ProjectId,Inno.Core.Settings.ProjectLocalId) af5ead6246e6815b2f2fc318db230afa8e33c5b1056f0efd6b82a966f3280b0e -->

```csharp
public Inno.Scene.Layers.GameLayerId.GameLayerId(Inno.Core.Settings.ProjectId projectId, Inno.Core.Settings.ProjectLocalId name)
```

Creates a project-scoped layer identity from its project and local parts.

**Parameter `projectId`:** The current project identity.

**Parameter `name`:** The stable project-local layer identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Layers/GameLayerId.cs#L34).

## `#ctor`

<a id="api-f033ed62e96272d2"></a>
<!-- api: M:Inno.Scene.Layers.GameLayerId.#ctor(Inno.Core.Settings.ProjectScopedId) f6ceef3aa0bae8c3e79f22e2a57cbb8bae8d1053d3b43424365c897c23aef26e -->

```csharp
public Inno.Scene.Layers.GameLayerId.GameLayerId(Inno.Core.Settings.ProjectScopedId value)
```

Creates a project-scoped layer identity.

**Parameter `value`:** The canonical qualified identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Layers/GameLayerId.cs#L18).

## `Equals`

<a id="api-877d6d15fefa8b2a"></a>
<!-- api: M:Inno.Scene.Layers.GameLayerId.Equals(Inno.Scene.Layers.GameLayerId) decbba2deb50475d44565934d59b43825f49c9f529a2b57df199c1416e725e50 -->

```csharp
public bool Inno.Scene.Layers.GameLayerId.Equals(Inno.Scene.Layers.GameLayerId other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Layers/GameLayerId.cs#L10).

## `Equals`

<a id="api-484f26b3cbc549c5"></a>
<!-- api: M:Inno.Scene.Layers.GameLayerId.Equals(System.Object) afaa32ac386c7e71a543c968611e25024310300d608ae4cdf428637a5af67bf4 -->

```csharp
public override bool Inno.Scene.Layers.GameLayerId.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Layers/GameLayerId.cs#L10).

## `GetHashCode`

<a id="api-ea3382194dcf8253"></a>
<!-- api: M:Inno.Scene.Layers.GameLayerId.GetHashCode 62a48ff5657e926c5b79f35d2fb3b30b9b34dbfa86ff82051bd962cb2587f2f3 -->

```csharp
public override int Inno.Scene.Layers.GameLayerId.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Layers/GameLayerId.cs#L10).

## `op_Equality`

<a id="api-d40ed447c552c00f"></a>
<!-- api: M:Inno.Scene.Layers.GameLayerId.op_Equality(Inno.Scene.Layers.GameLayerId,Inno.Scene.Layers.GameLayerId) e78e84ad0183d49f091f630b250749be5d064fc4cf0c610f53e5f22fcf567eac -->

```csharp
public static bool Inno.Scene.Layers.GameLayerId.operator ==(Inno.Scene.Layers.GameLayerId left, Inno.Scene.Layers.GameLayerId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Layers/GameLayerId.cs#L10).

## `op_Inequality`

<a id="api-f561b0c4f1d1a48f"></a>
<!-- api: M:Inno.Scene.Layers.GameLayerId.op_Inequality(Inno.Scene.Layers.GameLayerId,Inno.Scene.Layers.GameLayerId) a28a31b2b7753076ecbacee147a8d97ee77fa8b1135ae2c0120a4c64edbc9e5c -->

```csharp
public static bool Inno.Scene.Layers.GameLayerId.operator !=(Inno.Scene.Layers.GameLayerId left, Inno.Scene.Layers.GameLayerId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Layers/GameLayerId.cs#L10).

## `ToString`

<a id="api-8573f38a18b7ba45"></a>
<!-- api: M:Inno.Scene.Layers.GameLayerId.ToString 746fdafd91e9bbaef59c2c24286367376e72af5944d3a24f80bcecb19508a306 -->

```csharp
public override string Inno.Scene.Layers.GameLayerId.ToString()
```

Formats this value as a human-readable representation.

**Returns:** The qualified identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Layers/GameLayerId.cs#L76).

## `isValid`

<a id="api-22ad9926f0319df6"></a>
<!-- api: P:Inno.Scene.Layers.GameLayerId.isValid 4063ee87d0a7eb52041332caddc541348c1fe74a82d6d348669410adb7cb39fd -->

```csharp
public bool Inno.Scene.Layers.GameLayerId.isValid { get; }
```

Gets whether this value contains a usable identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Layers/GameLayerId.cs#L68).

## `value`

<a id="api-9882f58bb8d08d90"></a>
<!-- api: P:Inno.Scene.Layers.GameLayerId.value 3e5330c3cd7a9505ab3bac0ec6e3854636465407d1a79d3026c892eda214b8c6 -->

```csharp
public string Inno.Scene.Layers.GameLayerId.value { get; }
```

Gets the canonical `projectId.name` identity string.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Layers/GameLayerId.cs#L63).
