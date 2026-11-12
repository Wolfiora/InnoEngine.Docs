---
title: "RenderPresentationSize"
description: "Reference for RenderPresentationSize in Inno.Rendering."
uid: api.inno.rendering.runtime-script.bbc14325bb32eead
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `RenderPresentationSize`

This reference describes `RenderPresentationSize` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Rendering.RenderPresentationSize>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-e5222f11212e02e4) | Method |
| [`Equals`](#api-2cb94e5cd23ce844) | Method |
| [`Equals`](#api-2485990f93a97e1f) | Method |
| [`GetHashCode`](#api-a38ba4f80e8b5973) | Method |
| [`op_Equality`](#api-c983dbfea5913a16) | Method |
| [`op_Inequality`](#api-f877daf482e206b7) | Method |
| [`ToString`](#api-7abe12af45925d4d) | Method |
| [`height`](#api-432124d4ef9f358e) | Property |
| [`isValid`](#api-3d3a531db2101d36) | Property |
| [`width`](#api-1cb755ca71dff4b4) | Property |

## Type declaration

<a id="api-bbc14325bb32eead"></a>
<!-- api: T:InnoEngine.Rendering.RenderPresentationSize e9c734eabdab52d00c92899a4448525cb3e3571b3db25f0627b28948b16f88f1 -->

```csharp
public readonly struct InnoEngine.Rendering.RenderPresentationSize : System.IEquatable<InnoEngine.Rendering.RenderPresentationSize>
```

Stores one backend-neutral presentation extent in physical pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderPresentationSize.cs#L8).

## `#ctor`

<a id="api-e5222f11212e02e4"></a>
<!-- api: M:InnoEngine.Rendering.RenderPresentationSize.#ctor(System.Int32,System.Int32) 129cde325b4f7a2bdc31e776ece61829451542a7b2ea226ca038cbacf476034e -->

```csharp
public InnoEngine.Rendering.RenderPresentationSize.RenderPresentationSize(int width, int height)
```

Creates a positive presentation extent.

**Parameter `width`:** Positive physical-pixel width.

**Parameter `height`:** Positive physical-pixel height.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderPresentationSize.cs#L19).

## `Equals`

<a id="api-2cb94e5cd23ce844"></a>
<!-- api: M:InnoEngine.Rendering.RenderPresentationSize.Equals(InnoEngine.Rendering.RenderPresentationSize) 5bc0d9035aaf6b06ff047734dcac91b0cc5bc6fb14ef57155fe6065d671a731e -->

```csharp
public bool InnoEngine.Rendering.RenderPresentationSize.Equals(InnoEngine.Rendering.RenderPresentationSize other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderPresentationSize.cs#L8).

## `Equals`

<a id="api-2485990f93a97e1f"></a>
<!-- api: M:InnoEngine.Rendering.RenderPresentationSize.Equals(System.Object) b14da09667eba3d79413f1ecf35111b051c3247531d02e32d56722eb79ceda32 -->

```csharp
public override bool InnoEngine.Rendering.RenderPresentationSize.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderPresentationSize.cs#L8).

## `GetHashCode`

<a id="api-a38ba4f80e8b5973"></a>
<!-- api: M:InnoEngine.Rendering.RenderPresentationSize.GetHashCode e04d9d0b97eebe9a279848db4c14fd584f7d6c035d15ccc79015d414ddd74836 -->

```csharp
public override int InnoEngine.Rendering.RenderPresentationSize.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderPresentationSize.cs#L8).

## `op_Equality`

<a id="api-c983dbfea5913a16"></a>
<!-- api: M:InnoEngine.Rendering.RenderPresentationSize.op_Equality(InnoEngine.Rendering.RenderPresentationSize,InnoEngine.Rendering.RenderPresentationSize) 3c4aad1bcdc60502ec494feaaa87c6fcd1936f5a86fd3718236968250d5cd7e3 -->

```csharp
public static bool InnoEngine.Rendering.RenderPresentationSize.operator ==(InnoEngine.Rendering.RenderPresentationSize left, InnoEngine.Rendering.RenderPresentationSize right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderPresentationSize.cs#L8).

## `op_Inequality`

<a id="api-f877daf482e206b7"></a>
<!-- api: M:InnoEngine.Rendering.RenderPresentationSize.op_Inequality(InnoEngine.Rendering.RenderPresentationSize,InnoEngine.Rendering.RenderPresentationSize) c77858bdaab09f411317cb51ca51ae4a73a148d52558a42d6dd90f90ee022691 -->

```csharp
public static bool InnoEngine.Rendering.RenderPresentationSize.operator !=(InnoEngine.Rendering.RenderPresentationSize left, InnoEngine.Rendering.RenderPresentationSize right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderPresentationSize.cs#L8).

## `ToString`

<a id="api-7abe12af45925d4d"></a>
<!-- api: M:InnoEngine.Rendering.RenderPresentationSize.ToString 6406e6b4ab67bd8fada1965899156d4485830e7c611a4016fb68ec0d597bbde7 -->

```csharp
public override string InnoEngine.Rendering.RenderPresentationSize.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderPresentationSize.cs#L8).

## `height`

<a id="api-432124d4ef9f358e"></a>
<!-- api: P:InnoEngine.Rendering.RenderPresentationSize.height 0ae5c839ea9ade06575499b3a3fd8503f8913c4f850e110c60344953a195dfcd -->

```csharp
public int InnoEngine.Rendering.RenderPresentationSize.height { get; }
```

Gets the physical-pixel height.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderPresentationSize.cs#L37).

## `isValid`

<a id="api-3d3a531db2101d36"></a>
<!-- api: P:InnoEngine.Rendering.RenderPresentationSize.isValid 21a5b0460b6f025c21fca5892e2afcdb5cf5a3d95e362b2bbe941b102d938051 -->

```csharp
public bool InnoEngine.Rendering.RenderPresentationSize.isValid { get; }
```

Gets whether both dimensions describe a real drawable extent; a default struct is invalid.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderPresentationSize.cs#L42).

## `width`

<a id="api-1cb755ca71dff4b4"></a>
<!-- api: P:InnoEngine.Rendering.RenderPresentationSize.width 98323f31bac2eeff2452ec42cbc7f6f4488c0cbb94ae38a9bec489fec2cf8329 -->

```csharp
public int InnoEngine.Rendering.RenderPresentationSize.width { get; }
```

Gets the physical-pixel width.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderPresentationSize.cs#L32).
