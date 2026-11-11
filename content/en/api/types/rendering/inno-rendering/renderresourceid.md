---
title: "RenderResourceId"
description: "Reference for RenderResourceId in Inno.Rendering."
uid: api.inno.rendering.e3060a729e4b129e
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `RenderResourceId`

This reference describes `RenderResourceId` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Rendering.RenderResourceId>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-7c7c97ff93fcb32d) | Method |
| [`Equals`](#api-7ad4e25d8a86ac5e) | Method |
| [`Equals`](#api-b25f9a597295b764) | Method |
| [`GetHashCode`](#api-f9ed222eb822a25e) | Method |
| [`op_Equality`](#api-8a754ceaf3907b70) | Method |
| [`op_Inequality`](#api-da19e41ed787f943) | Method |
| [`ToString`](#api-3218dde1204779df) | Method |
| [`isValid`](#api-252769c3bba4af91) | Property |
| [`value`](#api-1407121d1ced6256) | Property |

## Type declaration

<a id="api-e3060a729e4b129e"></a>
<!-- api: T:Inno.Rendering.RenderResourceId 2bb432058aea766b83e36e4e13b1d79f5073dc66f179d764ad9e71fdcf4cd1e3 -->

```csharp
public readonly record struct Inno.Rendering.RenderResourceId : System.IEquatable<Inno.Rendering.RenderResourceId>
```

Identifies a pipeline-defined semantic resource without imposing a central resource catalog.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderProtocolIds.cs#L8).

## `#ctor`

<a id="api-7c7c97ff93fcb32d"></a>
<!-- api: M:Inno.Rendering.RenderResourceId.#ctor(System.String) c24c4b25c36531a2767439997dea1452cedd2001358d13fa8dc80d939cc236df -->

```csharp
public Inno.Rendering.RenderResourceId.RenderResourceId(string value)
```

Creates an open semantic resource identifier.

**Parameter `value`:** Globally stable resource protocol value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderProtocolIds.cs#L16).

## `Equals`

<a id="api-7ad4e25d8a86ac5e"></a>
<!-- api: M:Inno.Rendering.RenderResourceId.Equals(Inno.Rendering.RenderResourceId) 95c6e53b2140b662c413964c8c1e744e7d5234b739327bfdba940f42b6491a7a -->

```csharp
public bool Inno.Rendering.RenderResourceId.Equals(Inno.Rendering.RenderResourceId other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderProtocolIds.cs#L8).

## `Equals`

<a id="api-b25f9a597295b764"></a>
<!-- api: M:Inno.Rendering.RenderResourceId.Equals(System.Object) 73f03b3b84f4f58ddba97ce044a748cc150710c6cbdead0c52c1be5928dcd892 -->

```csharp
public override bool Inno.Rendering.RenderResourceId.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderProtocolIds.cs#L8).

## `GetHashCode`

<a id="api-f9ed222eb822a25e"></a>
<!-- api: M:Inno.Rendering.RenderResourceId.GetHashCode c89fa15cf3caec426225ae5f82d4526f3b9e3dfa419e651c4c2a385fcd04d6f9 -->

```csharp
public override int Inno.Rendering.RenderResourceId.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderProtocolIds.cs#L8).

## `op_Equality`

<a id="api-8a754ceaf3907b70"></a>
<!-- api: M:Inno.Rendering.RenderResourceId.op_Equality(Inno.Rendering.RenderResourceId,Inno.Rendering.RenderResourceId) 4796e585623383cf70e94f9e071ce9297d0a6fd463a3162e336372832ee3e6a1 -->

```csharp
public static bool Inno.Rendering.RenderResourceId.operator ==(Inno.Rendering.RenderResourceId left, Inno.Rendering.RenderResourceId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderProtocolIds.cs#L8).

## `op_Inequality`

<a id="api-da19e41ed787f943"></a>
<!-- api: M:Inno.Rendering.RenderResourceId.op_Inequality(Inno.Rendering.RenderResourceId,Inno.Rendering.RenderResourceId) 7a37f5a02c01f35c6f5058fa018088a33a50ab8e9ae9f7ab660fdaa216a97a9d -->

```csharp
public static bool Inno.Rendering.RenderResourceId.operator !=(Inno.Rendering.RenderResourceId left, Inno.Rendering.RenderResourceId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderProtocolIds.cs#L8).

## `ToString`

<a id="api-3218dde1204779df"></a>
<!-- api: M:Inno.Rendering.RenderResourceId.ToString 9e88e254587ebb6524f948f5f7f39eb7a80136185087e062143471aafe145087 -->

```csharp
public override string Inno.Rendering.RenderResourceId.ToString()
```

Formats this value as a human-readable representation.

**Returns:** The human-readable representation of this value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderProtocolIds.cs#L38).

## `isValid`

<a id="api-252769c3bba4af91"></a>
<!-- api: P:Inno.Rendering.RenderResourceId.isValid aa87cafceb8071e25abfe69bd050ba7fe0d376abb2149c3ee05945e70fe80015 -->

```csharp
public bool Inno.Rendering.RenderResourceId.isValid { get; }
```

Gets whether the identifier contains a protocol value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderProtocolIds.cs#L30).

## `value`

<a id="api-1407121d1ced6256"></a>
<!-- api: P:Inno.Rendering.RenderResourceId.value 2b05c7279c7e94db4683acba4606ffc8ef1b9b9833f1b7e1231c6f4e9d178fc3 -->

```csharp
public string Inno.Rendering.RenderResourceId.value { get; }
```

Gets the globally stable protocol value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderProtocolIds.cs#L25).
