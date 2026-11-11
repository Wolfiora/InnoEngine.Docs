---
title: "RenderVertexLayout"
description: "Reference for RenderVertexLayout in Inno.Rendering."
uid: api.inno.rendering.5ffb69ad67b8d2bc
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `RenderVertexLayout`

This reference describes `RenderVertexLayout` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IEquatable<Inno.Rendering.RenderVertexLayout>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-09c8c51098872a24) | Method |
| [`Equals`](#api-fdbd92ad75f0e4f9) | Method |
| [`Equals`](#api-c7a523fecece9942) | Method |
| [`GetHashCode`](#api-8a8cb5613d562566) | Method |
| [`attributes`](#api-6cb5941e1866a4cd) | Property |
| [`stride`](#api-5e28979201c7108c) | Property |

## Type declaration

<a id="api-5ffb69ad67b8d2bc"></a>
<!-- api: T:Inno.Rendering.RenderVertexLayout a70bc9568732b67bc41314a92556bd9f0fe2e5b1fd93b3b2f0cf95e59dc48210 -->

```csharp
public sealed class Inno.Rendering.RenderVertexLayout : System.IEquatable<Inno.Rendering.RenderVertexLayout>
```

Defines one interleaved vertex stream independently from a graphics backend.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L224).

## `#ctor`

<a id="api-09c8c51098872a24"></a>
<!-- api: M:Inno.Rendering.RenderVertexLayout.#ctor(System.Collections.Generic.IReadOnlyList{Inno.Rendering.RenderVertexAttribute},System.Int32) dc652d14918a90fd71b405e6c762e8dd3dc536833dee326c078f39ca662a3307 -->

```csharp
public Inno.Rendering.RenderVertexLayout.RenderVertexLayout(System.Collections.Generic.IReadOnlyList<Inno.Rendering.RenderVertexAttribute> attributes, int stride = 0)
```

Creates an interleaved vertex layout.

**Parameter `attributes`:** Unique attributes in ascending byte order. Attributes with offset -1 are packed after the preceding attribute.

**Parameter `stride`:** Explicit positive stream stride, or zero to use the end of the final attribute. A larger stride preserves
trailing application-defined padding.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L238).

## `Equals`

<a id="api-fdbd92ad75f0e4f9"></a>
<!-- api: M:Inno.Rendering.RenderVertexLayout.Equals(Inno.Rendering.RenderVertexLayout) baf86083e899952acff3dcde46a524712d485ec93b9134884292ae85855810ec -->

```csharp
public bool Inno.Rendering.RenderVertexLayout.Equals(Inno.Rendering.RenderVertexLayout? other)
```

Determines whether this instance and the supplied value represent the same logical state.

**Parameter `other`:** The value to compare with this instance.

**Returns:** `true` when both values represent the same logical state; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L301).

## `Equals`

<a id="api-c7a523fecece9942"></a>
<!-- api: M:Inno.Rendering.RenderVertexLayout.Equals(System.Object) 6b2c4cf58b16e46d8f32ac4eb0f490bd6b1b683025e82946886eaa36f00e8e35 -->

```csharp
public override bool Inno.Rendering.RenderVertexLayout.Equals(object? obj)
```

Determines whether this instance and the supplied value represent the same logical state.

**Returns:** `true` when both values represent the same logical state; otherwise, `false`.

**Parameter `obj`:** The object to compare with this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L315).

## `GetHashCode`

<a id="api-8a8cb5613d562566"></a>
<!-- api: M:Inno.Rendering.RenderVertexLayout.GetHashCode 75e6bba5b7d1bc49a4fb43f29a8dca8dd76b0d41d01f2dd7444df9b72f044ffc -->

```csharp
public override int Inno.Rendering.RenderVertexLayout.GetHashCode()
```

Computes a hash code from the fields that participate in logical equality.

**Returns:** A hash code consistent with the implemented equality contract.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L323).

## `attributes`

<a id="api-6cb5941e1866a4cd"></a>
<!-- api: P:Inno.Rendering.RenderVertexLayout.attributes 23b3cdd3b361ef300c6ab84b4d01e3a4ad1ec1bb1d571e2c6dc4ba91a8e1c672 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Rendering.RenderVertexAttribute> Inno.Rendering.RenderVertexLayout.attributes { get; }
```

Gets attributes in byte-stream order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L285).

## `stride`

<a id="api-5e28979201c7108c"></a>
<!-- api: P:Inno.Rendering.RenderVertexLayout.stride 2cd8a94329e8a91a77e2290da7ce551decc70cc5ae0444cf7d23879111aeb1ee -->

```csharp
public int Inno.Rendering.RenderVertexLayout.stride { get; }
```

Gets the interleaved vertex stride in bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L290).
