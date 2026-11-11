---
title: "RenderDataChannelId"
description: "Reference for RenderDataChannelId in Inno.Rendering."
uid: api.inno.rendering.cea6a6e0ab1b4cfd
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `RenderDataChannelId`

This reference describes `RenderDataChannelId` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

**Direct interfaces:** `System.IEquatable<Inno.Rendering.RenderDataChannelId>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-592dbae695ccac8e) | Method |
| [`Equals`](#api-c36fd61b45f9887d) | Method |
| [`Equals`](#api-3302af378bd8378f) | Method |
| [`GetHashCode`](#api-b4e2ad5eef7d56a9) | Method |
| [`op_Equality`](#api-13537e4b9f73fd95) | Method |
| [`op_Inequality`](#api-2cafd191db7fd509) | Method |
| [`ToString`](#api-6a7df84236448fbb) | Method |
| [`isValid`](#api-f82ee8c533b0488b) | Property |
| [`value`](#api-fc3fece4e264ad0f) | Property |

## Type declaration

<a id="api-cea6a6e0ab1b4cfd"></a>
<!-- api: T:Inno.Rendering.RenderDataChannelId 286d568006f2ae04a6ae8d4d06e505f7f8797bb354fb9ff75c7335ab0a14c8a8 -->

```csharp
public readonly record struct Inno.Rendering.RenderDataChannelId : System.IEquatable<Inno.Rendering.RenderDataChannelId>
```

Identifies one pipeline-owned frame-data channel without constraining its payload model.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderProtocolIds.cs#L44).

## `#ctor`

<a id="api-592dbae695ccac8e"></a>
<!-- api: M:Inno.Rendering.RenderDataChannelId.#ctor(System.String) b157f8ad48ecaf2337fb863ad2e5209e515872e8df7dc97c723b9ce9ca87b38a -->

```csharp
public Inno.Rendering.RenderDataChannelId.RenderDataChannelId(string value)
```

Creates an open frame-data channel identifier.

**Parameter `value`:** Globally stable channel protocol value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderProtocolIds.cs#L52).

## `Equals`

<a id="api-c36fd61b45f9887d"></a>
<!-- api: M:Inno.Rendering.RenderDataChannelId.Equals(Inno.Rendering.RenderDataChannelId) 46737bd547c21e73bdc5eec25c5ab123d2cf14af39a77a7c5ebd87972b830ea7 -->

```csharp
public bool Inno.Rendering.RenderDataChannelId.Equals(Inno.Rendering.RenderDataChannelId other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderProtocolIds.cs#L44).

## `Equals`

<a id="api-3302af378bd8378f"></a>
<!-- api: M:Inno.Rendering.RenderDataChannelId.Equals(System.Object) 04614408bbbf80a9194ef6ad8f16a2477e7d02cf5a96d86a58048b6b494ab39a -->

```csharp
public override bool Inno.Rendering.RenderDataChannelId.Equals(object obj)
```

Indicates whether this instance and a specified object are equal.

**Parameter `obj`:** The object to compare with the current instance.

**Returns:** `true` if `obj` and this instance are the same type and represent the same value; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderProtocolIds.cs#L44).

## `GetHashCode`

<a id="api-b4e2ad5eef7d56a9"></a>
<!-- api: M:Inno.Rendering.RenderDataChannelId.GetHashCode 3909a10b3eeaa7e4f5c9d8dda8ac676149f2d3d862c4c9e6d683220aa32066c9 -->

```csharp
public override int Inno.Rendering.RenderDataChannelId.GetHashCode()
```

Returns the hash code for this instance.

**Returns:** A 32-bit signed integer that is the hash code for this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderProtocolIds.cs#L44).

## `op_Equality`

<a id="api-13537e4b9f73fd95"></a>
<!-- api: M:Inno.Rendering.RenderDataChannelId.op_Equality(Inno.Rendering.RenderDataChannelId,Inno.Rendering.RenderDataChannelId) bcc613796ae55f9fb9de8c69022cad764cc5773485a732375ca57df9c5942dca -->

```csharp
public static bool Inno.Rendering.RenderDataChannelId.operator ==(Inno.Rendering.RenderDataChannelId left, Inno.Rendering.RenderDataChannelId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderProtocolIds.cs#L44).

## `op_Inequality`

<a id="api-2cafd191db7fd509"></a>
<!-- api: M:Inno.Rendering.RenderDataChannelId.op_Inequality(Inno.Rendering.RenderDataChannelId,Inno.Rendering.RenderDataChannelId) 4ce23d393a61491603c2245e396982668aba840b85b9406d2761e0aa72ae6bf7 -->

```csharp
public static bool Inno.Rendering.RenderDataChannelId.operator !=(Inno.Rendering.RenderDataChannelId left, Inno.Rendering.RenderDataChannelId right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderProtocolIds.cs#L44).

## `ToString`

<a id="api-6a7df84236448fbb"></a>
<!-- api: M:Inno.Rendering.RenderDataChannelId.ToString c41553d7415a048b31ebbee479152bd430938ec2335037ff072dc705008453fa -->

```csharp
public override string Inno.Rendering.RenderDataChannelId.ToString()
```

Formats this value as a human-readable representation.

**Returns:** The human-readable representation of this value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderProtocolIds.cs#L74).

## `isValid`

<a id="api-f82ee8c533b0488b"></a>
<!-- api: P:Inno.Rendering.RenderDataChannelId.isValid 70353720add44a3f71dd5d4f93835bf544991227e65b5e652f53b458f2211832 -->

```csharp
public bool Inno.Rendering.RenderDataChannelId.isValid { get; }
```

Gets whether the identifier contains a protocol value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderProtocolIds.cs#L66).

## `value`

<a id="api-fc3fece4e264ad0f"></a>
<!-- api: P:Inno.Rendering.RenderDataChannelId.value 3babb2338ad143a6476f421c416d2fd6789e1f0a7ebfaae600b27af2d1f15446 -->

```csharp
public string Inno.Rendering.RenderDataChannelId.value { get; }
```

Gets the globally stable protocol value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderProtocolIds.cs#L61).
