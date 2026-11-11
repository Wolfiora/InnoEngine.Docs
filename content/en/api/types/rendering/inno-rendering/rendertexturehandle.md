---
title: "RenderTextureHandle"
description: "Reference for RenderTextureHandle in Inno.Rendering."
uid: api.inno.rendering.218f8ee49fd7c3c5
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `RenderTextureHandle`

This reference describes `RenderTextureHandle` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Rendering.RenderTextureHandle>`.

## Members

| Member | Kind |
| --- | --- |
| [`Equals`](#api-d9dde3a123a823ff) | Method |
| [`Equals`](#api-ae1caeb30cfd7a56) | Method |
| [`GetHashCode`](#api-c2a84a03cdea37d3) | Method |
| [`op_Equality`](#api-256f07f7d11cf12a) | Method |
| [`op_Inequality`](#api-6832c901d918cf17) | Method |
| [`ToString`](#api-bfd9b3765e1db77e) | Method |
| [`isValid`](#api-112b179cc5e306b6) | Property |

## Type declaration

<a id="api-218f8ee49fd7c3c5"></a>
<!-- api: T:Inno.Rendering.RenderTextureHandle 01cbfc4b77c881b059c74e7e096d3fe8b22d4951f859f8b94c5f779a2a8db3ee -->

```csharp
public readonly record struct Inno.Rendering.RenderTextureHandle : System.IEquatable<Inno.Rendering.RenderTextureHandle>
```

Identifies a frame-scoped render-graph texture.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L443).

## `Equals`

<a id="api-d9dde3a123a823ff"></a>
<!-- api: M:Inno.Rendering.RenderTextureHandle.Equals(Inno.Rendering.RenderTextureHandle) 6990fe87dc1589fb09d3507e7cca1b6007f2bc454fcdaec4723110f3a7d60ee5 -->

```csharp
public bool Inno.Rendering.RenderTextureHandle.Equals(Inno.Rendering.RenderTextureHandle other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L443).

## `Equals`

<a id="api-ae1caeb30cfd7a56"></a>
<!-- api: M:Inno.Rendering.RenderTextureHandle.Equals(System.Object) aee5521cb504ba8a372a0f8df33031c70f35d8ff6c686cb14937d4e2939e02ef -->

```csharp
public override bool Inno.Rendering.RenderTextureHandle.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L443).

## `GetHashCode`

<a id="api-c2a84a03cdea37d3"></a>
<!-- api: M:Inno.Rendering.RenderTextureHandle.GetHashCode 4c13e1727b3fd9affec5763b5ce1872b3eb4d8b5db14697a70804d48c8c5f900 -->

```csharp
public override int Inno.Rendering.RenderTextureHandle.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L443).

## `op_Equality`

<a id="api-256f07f7d11cf12a"></a>
<!-- api: M:Inno.Rendering.RenderTextureHandle.op_Equality(Inno.Rendering.RenderTextureHandle,Inno.Rendering.RenderTextureHandle) 67b62ee08b6869cbc318b57377198c3d03ccb07659afb22803d95191ec794619 -->

```csharp
public static bool Inno.Rendering.RenderTextureHandle.operator ==(Inno.Rendering.RenderTextureHandle left, Inno.Rendering.RenderTextureHandle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L443).

## `op_Inequality`

<a id="api-6832c901d918cf17"></a>
<!-- api: M:Inno.Rendering.RenderTextureHandle.op_Inequality(Inno.Rendering.RenderTextureHandle,Inno.Rendering.RenderTextureHandle) cf9ad2c677ceab99351008c3a7c8de354c9b4b1ccd8b670140152e59ccc0c680 -->

```csharp
public static bool Inno.Rendering.RenderTextureHandle.operator !=(Inno.Rendering.RenderTextureHandle left, Inno.Rendering.RenderTextureHandle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L443).

## `ToString`

<a id="api-bfd9b3765e1db77e"></a>
<!-- api: M:Inno.Rendering.RenderTextureHandle.ToString 6a1b4167c160f063eb6f410fdbb4cd799f0c39f75b6f2352a20596125e23f7f6 -->

```csharp
public override string Inno.Rendering.RenderTextureHandle.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L443).

## `isValid`

<a id="api-112b179cc5e306b6"></a>
<!-- api: P:Inno.Rendering.RenderTextureHandle.isValid c7c1574afba227276e5433ca68b5773fba4acec9bee8e0db912d8b328f315a12 -->

```csharp
public bool Inno.Rendering.RenderTextureHandle.isValid { get; }
```

Gets whether the handle was created by a render graph.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L462).
