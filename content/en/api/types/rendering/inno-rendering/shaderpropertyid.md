---
title: "ShaderPropertyId"
description: "Reference for ShaderPropertyId in Inno.Rendering."
uid: api.inno.rendering.70db2c21f1373a20
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `ShaderPropertyId`

This reference describes `ShaderPropertyId` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Rendering.ShaderPropertyId>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-828f3d6a40f022bb) | Method |
| [`Equals`](#api-43cb7e2f7f621245) | Method |
| [`Equals`](#api-29fdeaea9e92deec) | Method |
| [`GetHashCode`](#api-649dc02686db27e7) | Method |
| [`op_Equality`](#api-109fd5bf46dbbd19) | Method |
| [`op_Inequality`](#api-cc7b36b4dbdbf104) | Method |
| [`ToString`](#api-3414b74e1bef3421) | Method |
| [`isValid`](#api-02081a4543253391) | Property |
| [`value`](#api-748299ddc4fadb51) | Property |

## Type declaration

<a id="api-70db2c21f1373a20"></a>
<!-- api: T:Inno.Rendering.ShaderPropertyId f982010a3c56e958b878e5ef2e5bd17c5442c97e122b883833d6a9ddda42ebc6 -->

```csharp
public record struct Inno.Rendering.ShaderPropertyId : System.IEquatable<Inno.Rendering.ShaderPropertyId>
```

Identifies a material property using a stable serialized string.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Shaders/ShaderPropertyId.cs#L14).

## `#ctor`

<a id="api-828f3d6a40f022bb"></a>
<!-- api: M:Inno.Rendering.ShaderPropertyId.#ctor(System.String) aa677a1ef7eaf84456ebf812360dfd3c1ae6df6790fc4d2066ca9115b5a6c8f3 -->

```csharp
public Inno.Rendering.ShaderPropertyId.ShaderPropertyId(string value)
```

Creates a stable shader property identifier.

**Parameter `value`:** Stable manifest property identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Shaders/ShaderPropertyId.cs#L22).

## `Equals`

<a id="api-43cb7e2f7f621245"></a>
<!-- api: M:Inno.Rendering.ShaderPropertyId.Equals(Inno.Rendering.ShaderPropertyId) d10b6c53e6816bb4cdc3229fda0fcf7e4a2e6c11a6a2aa1fcf423b85ec5267fc -->

```csharp
public readonly bool Inno.Rendering.ShaderPropertyId.Equals(Inno.Rendering.ShaderPropertyId other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Shaders/ShaderPropertyId.cs#L14).

## `Equals`

<a id="api-29fdeaea9e92deec"></a>
<!-- api: M:Inno.Rendering.ShaderPropertyId.Equals(System.Object) fa80c2eb4215e599fe9198b0ddacfe3113c56adcfdcc357262baf1e8807b7960 -->

```csharp
public override readonly bool Inno.Rendering.ShaderPropertyId.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Shaders/ShaderPropertyId.cs#L14).

## `GetHashCode`

<a id="api-649dc02686db27e7"></a>
<!-- api: M:Inno.Rendering.ShaderPropertyId.GetHashCode 555b00835563cba6ed749b508d1614fd90f91d503e5980d289903aedfcd5d8da -->

```csharp
public override readonly int Inno.Rendering.ShaderPropertyId.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Shaders/ShaderPropertyId.cs#L14).

## `op_Equality`

<a id="api-109fd5bf46dbbd19"></a>
<!-- api: M:Inno.Rendering.ShaderPropertyId.op_Equality(Inno.Rendering.ShaderPropertyId,Inno.Rendering.ShaderPropertyId) f35470d7186ecdfd6a975c4bbb9aab6d593452ca2eb66319a45cb2ca4fd5cd7b -->

```csharp
public static bool Inno.Rendering.ShaderPropertyId.operator ==(Inno.Rendering.ShaderPropertyId left, Inno.Rendering.ShaderPropertyId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Shaders/ShaderPropertyId.cs#L14).

## `op_Inequality`

<a id="api-cc7b36b4dbdbf104"></a>
<!-- api: M:Inno.Rendering.ShaderPropertyId.op_Inequality(Inno.Rendering.ShaderPropertyId,Inno.Rendering.ShaderPropertyId) 7e0c8ea0ef1a45baf88dec8b90316611b47b36d15b0140148a79714e9e6b67d2 -->

```csharp
public static bool Inno.Rendering.ShaderPropertyId.operator !=(Inno.Rendering.ShaderPropertyId left, Inno.Rendering.ShaderPropertyId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Shaders/ShaderPropertyId.cs#L14).

## `ToString`

<a id="api-3414b74e1bef3421"></a>
<!-- api: M:Inno.Rendering.ShaderPropertyId.ToString 09a0c926e23c0df08a09b1acd49b183a680310098ba082338fd450f25c99aa5f -->

```csharp
public override readonly string Inno.Rendering.ShaderPropertyId.ToString()
```

Formats this value as a human-readable representation.

**Returns:** The human-readable representation of this value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Shaders/ShaderPropertyId.cs#L44).

## `isValid`

<a id="api-02081a4543253391"></a>
<!-- api: P:Inno.Rendering.ShaderPropertyId.isValid bf1bc79674582000838443f876c3560842c19b4479488d2e33c2f5bc236acd12 -->

```csharp
public readonly bool Inno.Rendering.ShaderPropertyId.isValid { get; }
```

Gets whether this identifier has a usable value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Shaders/ShaderPropertyId.cs#L36).

## `value`

<a id="api-748299ddc4fadb51"></a>
<!-- api: P:Inno.Rendering.ShaderPropertyId.value ddcbc1d03d22abf48add484c7ab6feaae442997b5ff173c3476ca96ea0755297 -->

```csharp
public string Inno.Rendering.ShaderPropertyId.value { get; set; }
```

Gets or sets the stable manifest property identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Shaders/ShaderPropertyId.cs#L31).
