---
title: "RenderBufferDescriptor"
description: "Reference for RenderBufferDescriptor in Inno.Rendering."
uid: api.inno.rendering.runtime-script.4ba35eed3bf5606a
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `RenderBufferDescriptor`

This reference describes `RenderBufferDescriptor` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Rendering.RenderBufferDescriptor>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-7504b2b1c84f0cd2) | Method |
| [`Equals`](#api-127f5c505fb202d0) | Method |
| [`Equals`](#api-cc41287e552e65f1) | Method |
| [`GetHashCode`](#api-643c6536ff88dadf) | Method |
| [`elementCount`](#api-5a824bc80903b5a9) | Property |
| [`elementStride`](#api-ef263edad03e4b43) | Property |
| [`usage`](#api-ae0cf79caf89c4a3) | Property |

## Type declaration

<a id="api-4ba35eed3bf5606a"></a>
<!-- api: T:InnoEngine.Rendering.RenderBufferDescriptor 45f7f7154876716721210310bd870dce302c8df6986d50307428200b90d1232e -->

```csharp
public sealed class InnoEngine.Rendering.RenderBufferDescriptor : System.IEquatable<InnoEngine.Rendering.RenderBufferDescriptor>
```

Describes a render-graph buffer independently from a graphics backend.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L364).

## `#ctor`

<a id="api-7504b2b1c84f0cd2"></a>
<!-- api: M:InnoEngine.Rendering.RenderBufferDescriptor.#ctor(System.Int32,System.Int32,InnoEngine.Rendering.RenderBufferUsage) 13650e7a8a0d9ee6289a745a78ec5951fdbf377e99105336567190b3fc2d98a0 -->

```csharp
public InnoEngine.Rendering.RenderBufferDescriptor.RenderBufferDescriptor(int elementCount, int elementStride, InnoEngine.Rendering.RenderBufferUsage usage)
```

Creates a buffer descriptor.

**Parameter `elementCount`:** Number of addressable elements.

**Parameter `elementStride`:** Element size in bytes.

**Parameter `usage`:** Permitted operations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L378).

## `Equals`

<a id="api-127f5c505fb202d0"></a>
<!-- api: M:InnoEngine.Rendering.RenderBufferDescriptor.Equals(InnoEngine.Rendering.RenderBufferDescriptor) fd24b35dbe476778310cf75beb367a09ea27ee9c3b66db6476bafb7b25d619c8 -->

```csharp
public bool InnoEngine.Rendering.RenderBufferDescriptor.Equals(InnoEngine.Rendering.RenderBufferDescriptor? other)
```

Determines whether this instance and the supplied value represent the same logical state.

**Parameter `other`:** The value to compare with this instance.

**Returns:** `true` when both values represent the same logical state; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L414).

## `Equals`

<a id="api-cc41287e552e65f1"></a>
<!-- api: M:InnoEngine.Rendering.RenderBufferDescriptor.Equals(System.Object) 4fae043239b9fa05b2d4e47297024e1260a01f85d09e372b01996b882e3c69fa -->

```csharp
public override bool InnoEngine.Rendering.RenderBufferDescriptor.Equals(object? obj)
```

Determines whether this instance and the supplied value represent the same logical state.

**Returns:** `true` when both values represent the same logical state; otherwise, `false`.

**Parameter `obj`:** The object to compare with this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L429).

## `GetHashCode`

<a id="api-643c6536ff88dadf"></a>
<!-- api: M:InnoEngine.Rendering.RenderBufferDescriptor.GetHashCode 72983637c25833d1ed47f76073ba770d30b959322ba4aa821405ee2c6cb03db4 -->

```csharp
public override int InnoEngine.Rendering.RenderBufferDescriptor.GetHashCode()
```

Computes a hash code from the fields that participate in logical equality.

**Returns:** A hash code consistent with the implemented equality contract.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L437).

## `elementCount`

<a id="api-5a824bc80903b5a9"></a>
<!-- api: P:InnoEngine.Rendering.RenderBufferDescriptor.elementCount e9f49eb10eff6d309e39b6ff28d7a96c231a3e4b280d0800223ecd1f8da13d41 -->

```csharp
public int InnoEngine.Rendering.RenderBufferDescriptor.elementCount { get; }
```

Gets the number of addressable elements.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L393).

## `elementStride`

<a id="api-ef263edad03e4b43"></a>
<!-- api: P:InnoEngine.Rendering.RenderBufferDescriptor.elementStride 83d2b92916b37b9637e490c13bd440ca64ce19ca58c1dba59bae90f485f29ebb -->

```csharp
public int InnoEngine.Rendering.RenderBufferDescriptor.elementStride { get; }
```

Gets the element size in bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L398).

## `usage`

<a id="api-ae0cf79caf89c4a3"></a>
<!-- api: P:InnoEngine.Rendering.RenderBufferDescriptor.usage d655d5a55a8ba0ec88f8b84900ae73f9aeedd83966ad4f2e05e69e3d33f2ac7d -->

```csharp
public InnoEngine.Rendering.RenderBufferUsage InnoEngine.Rendering.RenderBufferDescriptor.usage { get; }
```

Gets permitted operations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L403).
