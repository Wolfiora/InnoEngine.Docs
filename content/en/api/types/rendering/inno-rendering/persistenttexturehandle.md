---
title: "PersistentTextureHandle"
description: "Reference for PersistentTextureHandle in Inno.Rendering."
uid: api.inno.rendering.ca0705af48c16077
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `PersistentTextureHandle`

This reference describes `PersistentTextureHandle` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Rendering.PersistentTextureHandle>`.

## Members

| Member | Kind |
| --- | --- |
| [`Equals`](#api-043ca7ee582c3087) | Method |
| [`Equals`](#api-3f0e9f0087b152e5) | Method |
| [`GetHashCode`](#api-1959cf4755c8e9b7) | Method |
| [`op_Equality`](#api-ff60a1f9fa13bab7) | Method |
| [`op_Inequality`](#api-2cbb9a29d20d1c74) | Method |
| [`ToString`](#api-a635b6ca3aece255) | Method |
| [`isValid`](#api-6148d2422c1e36d9) | Property |

## Type declaration

<a id="api-ca0705af48c16077"></a>
<!-- api: T:Inno.Rendering.PersistentTextureHandle 477adcb4d607a4c221e8a8350223677b3eb390e3e9d003d3bafeb176dabb6d28 -->

```csharp
public readonly record struct Inno.Rendering.PersistentTextureHandle : System.IEquatable<Inno.Rendering.PersistentTextureHandle>
```

Identifies a persistent device texture without exposing a backend-native handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L493).

## `Equals`

<a id="api-043ca7ee582c3087"></a>
<!-- api: M:Inno.Rendering.PersistentTextureHandle.Equals(Inno.Rendering.PersistentTextureHandle) 2e18fd80246a1013d11f05222a965f2b2fbed7248a1b094ee1ea38216063bdef -->

```csharp
public bool Inno.Rendering.PersistentTextureHandle.Equals(Inno.Rendering.PersistentTextureHandle other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L493).

## `Equals`

<a id="api-3f0e9f0087b152e5"></a>
<!-- api: M:Inno.Rendering.PersistentTextureHandle.Equals(System.Object) ca9191f91d778fd2ff5931fcecd221c66c60f3df64b30ffcc1b3c8ffaa1981a8 -->

```csharp
public override bool Inno.Rendering.PersistentTextureHandle.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L493).

## `GetHashCode`

<a id="api-1959cf4755c8e9b7"></a>
<!-- api: M:Inno.Rendering.PersistentTextureHandle.GetHashCode da1ac56a78aea31a19371d9a9ce2e3059170b33b897ca00a718e1d9448047a34 -->

```csharp
public override int Inno.Rendering.PersistentTextureHandle.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L493).

## `op_Equality`

<a id="api-ff60a1f9fa13bab7"></a>
<!-- api: M:Inno.Rendering.PersistentTextureHandle.op_Equality(Inno.Rendering.PersistentTextureHandle,Inno.Rendering.PersistentTextureHandle) 859b15d04d0088935653f7410708bb3c6388a088d36be633c1695625f73213ff -->

```csharp
public static bool Inno.Rendering.PersistentTextureHandle.operator ==(Inno.Rendering.PersistentTextureHandle left, Inno.Rendering.PersistentTextureHandle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L493).

## `op_Inequality`

<a id="api-2cbb9a29d20d1c74"></a>
<!-- api: M:Inno.Rendering.PersistentTextureHandle.op_Inequality(Inno.Rendering.PersistentTextureHandle,Inno.Rendering.PersistentTextureHandle) e1580d54559f06abe4657e32814a503125bd9bd3280fd7616c1e05f3822085cc -->

```csharp
public static bool Inno.Rendering.PersistentTextureHandle.operator !=(Inno.Rendering.PersistentTextureHandle left, Inno.Rendering.PersistentTextureHandle right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L493).

## `ToString`

<a id="api-a635b6ca3aece255"></a>
<!-- api: M:Inno.Rendering.PersistentTextureHandle.ToString a9939624b2de6a9d6f82f58e2341a36ab83bfa6f146e4329981f595ecd3f1595 -->

```csharp
public override string Inno.Rendering.PersistentTextureHandle.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L493).

## `isValid`

<a id="api-6148d2422c1e36d9"></a>
<!-- api: P:Inno.Rendering.PersistentTextureHandle.isValid e3d67825d6136f973d3ec6806ca132bd5da65cfc8051773bbc7f5343135a772a -->

```csharp
public bool Inno.Rendering.PersistentTextureHandle.isValid { get; }
```

Gets whether the handle identifies a device texture.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L509).
