---
title: "RenderVertexLayout"
description: "Reference for RenderVertexLayout in Inno.Rendering."
uid: api.inno.rendering.runtime-script.0979dc407d361d15
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `RenderVertexLayout`

This reference describes `RenderVertexLayout` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Rendering.RenderVertexLayout>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-879fa502e5c6e0e0) | Method |
| [`Equals`](#api-ad60badcb99ae543) | Method |
| [`Equals`](#api-40b44be9ce21c486) | Method |
| [`GetHashCode`](#api-a00c025c5b4c3984) | Method |
| [`attributes`](#api-f15e8ac626411200) | Property |
| [`stride`](#api-a55cea4acc00f166) | Property |

## Type declaration

<a id="api-0979dc407d361d15"></a>
<!-- api: T:InnoEngine.Rendering.RenderVertexLayout e45d11fb9925864c1c66b28ba9aa64ec3b5232b80f331b98fdf3854561c2ceed -->

```csharp
public sealed class InnoEngine.Rendering.RenderVertexLayout : System.IEquatable<InnoEngine.Rendering.RenderVertexLayout>
```

Defines one interleaved vertex stream independently from a graphics backend.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L224).

## `#ctor`

<a id="api-879fa502e5c6e0e0"></a>
<!-- api: M:InnoEngine.Rendering.RenderVertexLayout.#ctor(System.Collections.Generic.IReadOnlyList{InnoEngine.Rendering.RenderVertexAttribute},System.Int32) 0b926211b9174e13c6f6caf1d7987224e21caee7d0687ac9137f10deb4a36b2b -->

```csharp
public InnoEngine.Rendering.RenderVertexLayout.RenderVertexLayout(System.Collections.Generic.IReadOnlyList<InnoEngine.Rendering.RenderVertexAttribute> attributes, int stride = 0)
```

Creates an interleaved vertex layout.

**Parameter `attributes`:** Unique attributes in ascending byte order. Attributes with offset -1 are packed after the preceding attribute.

**Parameter `stride`:** Explicit positive stream stride, or zero to use the end of the final attribute. A larger stride preserves
trailing application-defined padding.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L238).

## `Equals`

<a id="api-ad60badcb99ae543"></a>
<!-- api: M:InnoEngine.Rendering.RenderVertexLayout.Equals(InnoEngine.Rendering.RenderVertexLayout) 304d132ceac31256528aa950b732cf51e17778b873da80733094e91cc759427d -->

```csharp
public bool InnoEngine.Rendering.RenderVertexLayout.Equals(InnoEngine.Rendering.RenderVertexLayout? other)
```

Determines whether this instance and the supplied value represent the same logical state.

**Parameter `other`:** The value to compare with this instance.

**Returns:** `true` when both values represent the same logical state; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L301).

## `Equals`

<a id="api-40b44be9ce21c486"></a>
<!-- api: M:InnoEngine.Rendering.RenderVertexLayout.Equals(System.Object) e4231d67be26a838b34badb177f6b367f00ee87247be77a0b90188be0b95bfcf -->

```csharp
public override bool InnoEngine.Rendering.RenderVertexLayout.Equals(object? obj)
```

Determines whether this instance and the supplied value represent the same logical state.

**Returns:** `true` when both values represent the same logical state; otherwise, `false`.

**Parameter `obj`:** The object to compare with this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L315).

## `GetHashCode`

<a id="api-a00c025c5b4c3984"></a>
<!-- api: M:InnoEngine.Rendering.RenderVertexLayout.GetHashCode 3e6819c312945277a404dba96817aee6a7a5fea233a1a9455d0064f1707495f1 -->

```csharp
public override int InnoEngine.Rendering.RenderVertexLayout.GetHashCode()
```

Computes a hash code from the fields that participate in logical equality.

**Returns:** A hash code consistent with the implemented equality contract.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L323).

## `attributes`

<a id="api-f15e8ac626411200"></a>
<!-- api: P:InnoEngine.Rendering.RenderVertexLayout.attributes 9333086e4e341ef8b351495ffc7e30604ca9ff06c2f76d64bc76ebedaaeff2cf -->

```csharp
public System.Collections.Generic.IReadOnlyList<InnoEngine.Rendering.RenderVertexAttribute> InnoEngine.Rendering.RenderVertexLayout.attributes { get; }
```

Gets attributes in byte-stream order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L285).

## `stride`

<a id="api-a55cea4acc00f166"></a>
<!-- api: P:InnoEngine.Rendering.RenderVertexLayout.stride c8b728d74a2318ec55427bd4e4eeedb5e326e14fe0a4319ebef8fd498877b315 -->

```csharp
public int InnoEngine.Rendering.RenderVertexLayout.stride { get; }
```

Gets the interleaved vertex stride in bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderVertexLayout.cs#L290).
