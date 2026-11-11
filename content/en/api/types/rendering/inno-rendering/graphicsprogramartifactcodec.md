---
title: "GraphicsProgramArtifactCodec"
description: "Reference for GraphicsProgramArtifactCodec in Inno.Rendering."
uid: api.inno.rendering.af950d762ea4c239
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `GraphicsProgramArtifactCodec`

This reference describes `GraphicsProgramArtifactCodec` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`Decode`](#api-2ea35f17a8d6704b) | Method |
| [`Encode`](#api-166424a5a01e892f) | Method |

## Type declaration

<a id="api-af950d762ea4c239"></a>
<!-- api: T:Inno.Rendering.GraphicsProgramArtifactCodec 6f0ba183f2727238443b31026ce2b8d6860aacf0c547955d4eb33451b3168941 -->

```csharp
public static class Inno.Rendering.GraphicsProgramArtifactCodec
```

Transports compiled graphics programs and device binding facts independently of authored assets.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Shaders/GraphicsProgramArtifactCodec.cs#L10).

## `Decode`

<a id="api-2ea35f17a8d6704b"></a>
<!-- api: M:Inno.Rendering.GraphicsProgramArtifactCodec.Decode(System.ReadOnlySpan{System.Byte},Inno.Rendering.RenderVertexLayout) ddcfbc1ba4887613f4763154c11e2d7ec3958d61e2edc5e5c3d2baa49a0c917c -->

```csharp
public static Inno.Rendering.GraphicsPipelineDescriptor Inno.Rendering.GraphicsProgramArtifactCodec.Decode(System.ReadOnlySpan<byte> bytes, Inno.Rendering.RenderVertexLayout? vertexLayout = null)
```

Validates a complete device program artifact before constructing an owned pipeline descriptor.

**Parameter `bytes`:** The complete current artifact, including its strict magic header.

**Parameter `vertexLayout`:** The caller's vertex layout, or null for a procedural pipeline.

**Returns:** A detached descriptor containing the validated binaries, bindings, and raster state.

**Throws `System.IO.InvalidDataException`:** The input is truncated, oversized, malformed, or contains trailing data.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Shaders/GraphicsProgramArtifactCodec.cs#L75).

## `Encode`

<a id="api-166424a5a01e892f"></a>
<!-- api: M:Inno.Rendering.GraphicsProgramArtifactCodec.Encode(Inno.Rendering.GraphicsPipelineDescriptor) 42d363c114eeabf93fc50e6ddaad79704e05f61c1e98158025f01a5cf54f4316 -->

```csharp
public static byte[] Inno.Rendering.GraphicsProgramArtifactCodec.Encode(Inno.Rendering.GraphicsPipelineDescriptor descriptor)
```

Encodes owned program binaries, reflected bindings, and raster state for device distribution.
Vertex layout belongs to the eventual caller and is not part of this artifact.

**Parameter `descriptor`:** The compiled graphics program to distribute without any asset or material metadata.

**Returns:** Deterministic binary bytes owned by the caller.

**Throws `System.ArgumentNullException`:** The descriptor is null.

**Throws `System.IO.InvalidDataException`:** A stage, binding, or reflected name exceeds the distribution limits.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Shaders/GraphicsProgramArtifactCodec.cs#L34).
