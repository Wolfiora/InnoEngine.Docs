---
title: "RenderResourceId"
description: "Reference for RenderResourceId in Inno.Rendering."
uid: api.inno.rendering.runtime-script.01c217d9c83d95d9
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `RenderResourceId`

This reference describes `RenderResourceId` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Rendering.RenderResourceId>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-ae75d334e4ac60a0) | Method |
| [`Equals`](#api-4b09341859aa6f8e) | Method |
| [`Equals`](#api-3aace91e2f6b774a) | Method |
| [`GetHashCode`](#api-4fa2d37eeab580d0) | Method |
| [`op_Equality`](#api-1b6c9fc7380df7c6) | Method |
| [`op_Inequality`](#api-6de0d49326a525c1) | Method |
| [`ToString`](#api-9a319902f62d417c) | Method |
| [`isValid`](#api-b80462da0f01508d) | Property |
| [`value`](#api-d01d5af59b289b47) | Property |

## Type declaration

<a id="api-01c217d9c83d95d9"></a>
<!-- api: T:InnoEngine.Rendering.RenderResourceId cabaeb5785ef9ffcfc949fdd2ce48ee0d4a4e9fa72c4eb4264252cf91db696cb -->

```csharp
public readonly struct InnoEngine.Rendering.RenderResourceId : System.IEquatable<InnoEngine.Rendering.RenderResourceId>
```

Identifies a pipeline-defined semantic resource without imposing a central resource catalog.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderProtocolIds.cs#L8).

## `#ctor`

<a id="api-ae75d334e4ac60a0"></a>
<!-- api: M:InnoEngine.Rendering.RenderResourceId.#ctor(System.String) 1d02e2e95e15cdce2afd1ba7dc791d079e006db1e36fab725b2e729609eded5c -->

```csharp
public InnoEngine.Rendering.RenderResourceId.RenderResourceId(string value)
```

Creates an open semantic resource identifier.

**Parameter `value`:** Globally stable resource protocol value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderProtocolIds.cs#L16).

## `Equals`

<a id="api-4b09341859aa6f8e"></a>
<!-- api: M:InnoEngine.Rendering.RenderResourceId.Equals(InnoEngine.Rendering.RenderResourceId) ca4d47c864dd9b6c71d800f9a369fa9d3bfc9880a9560c3b533028ec34532ff5 -->

```csharp
public bool InnoEngine.Rendering.RenderResourceId.Equals(InnoEngine.Rendering.RenderResourceId other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderProtocolIds.cs#L8).

## `Equals`

<a id="api-3aace91e2f6b774a"></a>
<!-- api: M:InnoEngine.Rendering.RenderResourceId.Equals(System.Object) 9124ccf2dd74161edaf3e8455f227405764915d49785263f57fc531a4e4aac0b -->

```csharp
public override bool InnoEngine.Rendering.RenderResourceId.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderProtocolIds.cs#L8).

## `GetHashCode`

<a id="api-4fa2d37eeab580d0"></a>
<!-- api: M:InnoEngine.Rendering.RenderResourceId.GetHashCode 22e4611d697730b93e3d1e85db7c0c61df2771a6277cc023e44a9ba42f11f26d -->

```csharp
public override int InnoEngine.Rendering.RenderResourceId.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderProtocolIds.cs#L8).

## `op_Equality`

<a id="api-1b6c9fc7380df7c6"></a>
<!-- api: M:InnoEngine.Rendering.RenderResourceId.op_Equality(InnoEngine.Rendering.RenderResourceId,InnoEngine.Rendering.RenderResourceId) 108e1c0cd7930e31f7412ded8dc886e3c5d00c44a328cf7f4f87a7cf5cfe5306 -->

```csharp
public static bool InnoEngine.Rendering.RenderResourceId.operator ==(InnoEngine.Rendering.RenderResourceId left, InnoEngine.Rendering.RenderResourceId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderProtocolIds.cs#L8).

## `op_Inequality`

<a id="api-6de0d49326a525c1"></a>
<!-- api: M:InnoEngine.Rendering.RenderResourceId.op_Inequality(InnoEngine.Rendering.RenderResourceId,InnoEngine.Rendering.RenderResourceId) 3ce7bfdd63232bcd830340ded08d25fc581ce6fa0025847d4846374a55171ef8 -->

```csharp
public static bool InnoEngine.Rendering.RenderResourceId.operator !=(InnoEngine.Rendering.RenderResourceId left, InnoEngine.Rendering.RenderResourceId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderProtocolIds.cs#L8).

## `ToString`

<a id="api-9a319902f62d417c"></a>
<!-- api: M:InnoEngine.Rendering.RenderResourceId.ToString eb5b8e8dfb6fca09bda66cf730bafdd84dc17fa765d4c67fc270ab9821847db4 -->

```csharp
public override string InnoEngine.Rendering.RenderResourceId.ToString()
```

Formats this value as a human-readable representation.

**Returns:** The human-readable representation of this value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderProtocolIds.cs#L38).

## `isValid`

<a id="api-b80462da0f01508d"></a>
<!-- api: P:InnoEngine.Rendering.RenderResourceId.isValid 48cc5b0210cd0b2da5d22ffda1332f147a7374bafb252d420b440dc9aaabee42 -->

```csharp
public bool InnoEngine.Rendering.RenderResourceId.isValid { get; }
```

Gets whether the identifier contains a protocol value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderProtocolIds.cs#L30).

## `value`

<a id="api-d01d5af59b289b47"></a>
<!-- api: P:InnoEngine.Rendering.RenderResourceId.value 41a52d3a85b9252b0824d6e8a1c6d23e95556b502f0b751b397a7b9ae1cb3f4e -->

```csharp
public string InnoEngine.Rendering.RenderResourceId.value { get; }
```

Gets the globally stable protocol value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderProtocolIds.cs#L25).
