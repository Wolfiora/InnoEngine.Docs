---
title: "RenderBufferSlice"
description: "Reference for RenderBufferSlice in Inno.Rendering."
uid: api.inno.rendering.runtime-script.2b36b17fcc7714c2
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `RenderBufferSlice`

This reference describes `RenderBufferSlice` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Rendering.RenderBufferSlice>`.

## Members

| Member | Kind |
| --- | --- |
| [`Equals`](#api-d7868400b6f276fd) | Method |
| [`Equals`](#api-824b2fd536dcec31) | Method |
| [`GetHashCode`](#api-85910dc6eea55b60) | Method |
| [`op_Equality`](#api-07f01f498905469c) | Method |
| [`op_Inequality`](#api-37d891f9395d5c85) | Method |
| [`ToString`](#api-b1d9f074d3525a9b) | Method |
| [`elementCount`](#api-2d787aa596640dd1) | Property |
| [`firstElement`](#api-4ec710dee72f0291) | Property |
| [`isValid`](#api-cdf4eb0210837ce9) | Property |
| [`usage`](#api-c08e148201f8b8a7) | Property |

## Type declaration

<a id="api-2b36b17fcc7714c2"></a>
<!-- api: T:InnoEngine.Rendering.RenderBufferSlice 4c96408fa9643bfbc506c2680a04d921dc91070dde343908e10f17a1031ae6a3 -->

```csharp
public readonly struct InnoEngine.Rendering.RenderBufferSlice : System.IEquatable<InnoEngine.Rendering.RenderBufferSlice>
```

Identifies one range in a frame upload page without exposing its persistent backing buffer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderBufferUploads.cs#L84).

## `Equals`

<a id="api-d7868400b6f276fd"></a>
<!-- api: M:InnoEngine.Rendering.RenderBufferSlice.Equals(InnoEngine.Rendering.RenderBufferSlice) c78a0c1dea2f18b7790c13c8368044ecb2cd0f72a5c9c112750f65a5d3a2b1d4 -->

```csharp
public bool InnoEngine.Rendering.RenderBufferSlice.Equals(InnoEngine.Rendering.RenderBufferSlice other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderBufferUploads.cs#L84).

## `Equals`

<a id="api-824b2fd536dcec31"></a>
<!-- api: M:InnoEngine.Rendering.RenderBufferSlice.Equals(System.Object) 98acaeaa92b7d8f32831fce383d321ed883e112d081bb90f25f004cb7e7d4b30 -->

```csharp
public override bool InnoEngine.Rendering.RenderBufferSlice.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderBufferUploads.cs#L84).

## `GetHashCode`

<a id="api-85910dc6eea55b60"></a>
<!-- api: M:InnoEngine.Rendering.RenderBufferSlice.GetHashCode 1c4283de1d8fe689ad7c53c9eb9a2655d8a34126a3be0fb87c7c0e7fd188804a -->

```csharp
public override int InnoEngine.Rendering.RenderBufferSlice.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderBufferUploads.cs#L84).

## `op_Equality`

<a id="api-07f01f498905469c"></a>
<!-- api: M:InnoEngine.Rendering.RenderBufferSlice.op_Equality(InnoEngine.Rendering.RenderBufferSlice,InnoEngine.Rendering.RenderBufferSlice) db09b1be8aa873ef6e7b459e10a1f3f410ad56223cf210817f2bf61d31d80372 -->

```csharp
public static bool InnoEngine.Rendering.RenderBufferSlice.operator ==(InnoEngine.Rendering.RenderBufferSlice left, InnoEngine.Rendering.RenderBufferSlice right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderBufferUploads.cs#L84).

## `op_Inequality`

<a id="api-37d891f9395d5c85"></a>
<!-- api: M:InnoEngine.Rendering.RenderBufferSlice.op_Inequality(InnoEngine.Rendering.RenderBufferSlice,InnoEngine.Rendering.RenderBufferSlice) e38091b0ee4cdb3954be8e5d0d3d8b9f510b2d5472533088fd785815da831c6d -->

```csharp
public static bool InnoEngine.Rendering.RenderBufferSlice.operator !=(InnoEngine.Rendering.RenderBufferSlice left, InnoEngine.Rendering.RenderBufferSlice right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderBufferUploads.cs#L84).

## `ToString`

<a id="api-b1d9f074d3525a9b"></a>
<!-- api: M:InnoEngine.Rendering.RenderBufferSlice.ToString cf8ee40f59ae673a018b1bcd7ff7c2e786b777a6c4a3fbda7c42035be1ed5eaf -->

```csharp
public override string InnoEngine.Rendering.RenderBufferSlice.ToString()
```

Returns the fully qualified type name of this instance.

**Returns:** The fully qualified type name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderBufferUploads.cs#L84).

## `elementCount`

<a id="api-2d787aa596640dd1"></a>
<!-- api: P:InnoEngine.Rendering.RenderBufferSlice.elementCount 9c0e9483c01c3e3b67f28c53b83d65a576718f6be51c0006cf7bc8bab69bbba2 -->

```csharp
public int InnoEngine.Rendering.RenderBufferSlice.elementCount { get; }
```

Gets the number of uploaded elements.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderBufferUploads.cs#L111).

## `firstElement`

<a id="api-4ec710dee72f0291"></a>
<!-- api: P:InnoEngine.Rendering.RenderBufferSlice.firstElement 891fd8f17664eaf77961a862a20b860a356b5e3a5c4f7cd78b2166ebb075370a -->

```csharp
public int InnoEngine.Rendering.RenderBufferSlice.firstElement { get; }
```

Gets the first uploaded element in the backing frame page.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderBufferUploads.cs#L106).

## `isValid`

<a id="api-cdf4eb0210837ce9"></a>
<!-- api: P:InnoEngine.Rendering.RenderBufferSlice.isValid a985a86e3c66b834c3db255a821b023ae3b68cbca89647d42c9dc5abaa69449d -->

```csharp
public bool InnoEngine.Rendering.RenderBufferSlice.isValid { get; }
```

Gets whether this slice was produced by a frame upload service.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderBufferUploads.cs#L121).

## `usage`

<a id="api-c08e148201f8b8a7"></a>
<!-- api: P:InnoEngine.Rendering.RenderBufferSlice.usage 3b1272cacda466abf03afbd55b022c9e5dde48868c95e5667d8b3d15fc269c67 -->

```csharp
public InnoEngine.Rendering.RenderBufferUsage InnoEngine.Rendering.RenderBufferSlice.usage { get; }
```

Gets permitted GPU uses for this slice.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderBufferUploads.cs#L116).
