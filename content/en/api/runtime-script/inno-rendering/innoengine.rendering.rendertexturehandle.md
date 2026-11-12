---
title: "RenderTextureHandle"
description: "Reference for RenderTextureHandle in Inno.Rendering."
uid: api.inno.rendering.runtime-script.a94c05ed9d4a91a3
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `RenderTextureHandle`

This reference describes `RenderTextureHandle` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Rendering.RenderTextureHandle>`.

## Members

| Member | Kind |
| --- | --- |
| [`Equals`](#api-ff6fe0ba02017689) | Method |
| [`Equals`](#api-94a81d425434b49e) | Method |
| [`GetHashCode`](#api-b95a88cf3d92a737) | Method |
| [`op_Equality`](#api-58f4718c6359add1) | Method |
| [`op_Inequality`](#api-be422b4ee57d359d) | Method |
| [`ToString`](#api-d66b5a820a782149) | Method |
| [`isValid`](#api-c6a880547fb61682) | Property |

## Type declaration

<a id="api-a94c05ed9d4a91a3"></a>
<!-- api: T:InnoEngine.Rendering.RenderTextureHandle 620472b1806dd0c81d55dd79885b37c3f07ed8a44af00e42224985db74911c9b -->

```csharp
public readonly struct InnoEngine.Rendering.RenderTextureHandle : System.IEquatable<InnoEngine.Rendering.RenderTextureHandle>
```

Identifies a frame-scoped render-graph texture.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L443).

## `Equals`

<a id="api-ff6fe0ba02017689"></a>
<!-- api: M:InnoEngine.Rendering.RenderTextureHandle.Equals(InnoEngine.Rendering.RenderTextureHandle) 4a92e1861a77b6c3c3e6523451da8bbf0825d2d5b610f158e303cb2968a0145f -->

```csharp
public bool InnoEngine.Rendering.RenderTextureHandle.Equals(InnoEngine.Rendering.RenderTextureHandle other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L443).

## `Equals`

<a id="api-94a81d425434b49e"></a>
<!-- api: M:InnoEngine.Rendering.RenderTextureHandle.Equals(System.Object) 2626632052cc3a3e653e7a9ad00cfe43fbc2eecee20b8c9af7c59034ad3ce22b -->

```csharp
public override bool InnoEngine.Rendering.RenderTextureHandle.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L443).

## `GetHashCode`

<a id="api-b95a88cf3d92a737"></a>
<!-- api: M:InnoEngine.Rendering.RenderTextureHandle.GetHashCode 3432fdff36c964d83502786c562600bf29efe470c5567564fcec89ecb56961e3 -->

```csharp
public override int InnoEngine.Rendering.RenderTextureHandle.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L443).

## `op_Equality`

<a id="api-58f4718c6359add1"></a>
<!-- api: M:InnoEngine.Rendering.RenderTextureHandle.op_Equality(InnoEngine.Rendering.RenderTextureHandle,InnoEngine.Rendering.RenderTextureHandle) 1cd801707307d9cf59b1fe36616b55e67361b3042750a032ed239f3430bae8e4 -->

```csharp
public static bool InnoEngine.Rendering.RenderTextureHandle.operator ==(InnoEngine.Rendering.RenderTextureHandle left, InnoEngine.Rendering.RenderTextureHandle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L443).

## `op_Inequality`

<a id="api-be422b4ee57d359d"></a>
<!-- api: M:InnoEngine.Rendering.RenderTextureHandle.op_Inequality(InnoEngine.Rendering.RenderTextureHandle,InnoEngine.Rendering.RenderTextureHandle) 0d06457e9c31ed1a26fb9bec4d6f6f720137eb5d71637dbe7b614a06d85ee31a -->

```csharp
public static bool InnoEngine.Rendering.RenderTextureHandle.operator !=(InnoEngine.Rendering.RenderTextureHandle left, InnoEngine.Rendering.RenderTextureHandle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L443).

## `ToString`

<a id="api-d66b5a820a782149"></a>
<!-- api: M:InnoEngine.Rendering.RenderTextureHandle.ToString 5b11799271c7e554cdbcae57ee77a291d1678b436298aca6ce7f2d5dd438df21 -->

```csharp
public override string InnoEngine.Rendering.RenderTextureHandle.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L443).

## `isValid`

<a id="api-c6a880547fb61682"></a>
<!-- api: P:InnoEngine.Rendering.RenderTextureHandle.isValid 524ca05527c8312f03b1208fd50deaf1a6faf633b28832a517403df21ed1fa83 -->

```csharp
public bool InnoEngine.Rendering.RenderTextureHandle.isValid { get; }
```

Gets whether the handle was created by a render graph.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L462).
