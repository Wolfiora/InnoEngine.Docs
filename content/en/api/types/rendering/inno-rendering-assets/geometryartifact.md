---
title: "GeometryArtifact"
description: "Reference for GeometryArtifact in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.d5275de500e15114
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: source-clr
contracts:
  - project.inno-rendering-assets
---
# `GeometryArtifact`

This reference describes `GeometryArtifact` in `Inno.Rendering.Assets`. Read the [shared contract](../../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`Decode`](#api-0ecded89517a4c3f) | Method |
| [`Encode`](#api-d1ae629ab303c891) | Method |

## Type declaration

<a id="api-d5275de500e15114"></a>
<!-- api: T:Inno.Rendering.Assets.GeometryArtifact 13bfb104d2232ff5effd54dbb497c1817f679a814f8c6967ab52d5b8c569ff95 -->

```csharp
public static class Inno.Rendering.Assets.GeometryArtifact
```

Encodes and validates the stable backend-neutral geometry artifact shared by import and runtime stages.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Geometry/GeometryArtifact.cs#L13).

## `Decode`

<a id="api-0ecded89517a4c3f"></a>
<!-- api: M:Inno.Rendering.Assets.GeometryArtifact.Decode(System.ReadOnlySpan{System.Byte}) ec9842c3440dceefae2511860191a0633323dd8d4cf9573de95c65100353cf3e -->

```csharp
public static Inno.Rendering.Assets.GeometryData Inno.Rendering.Assets.GeometryArtifact.Decode(System.ReadOnlySpan<byte> bytes)
```

Decodes and strictly validates one immutable geometry artifact.

**Parameter `bytes`:** The complete artifact payload.

**Returns:** The normalized geometry represented by the payload.

**Throws `System.IO.InvalidDataException`:** Thrown when the artifact is empty, corrupt, truncated, or contains invalid ranges.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Geometry/GeometryArtifact.cs#L80).

## `Encode`

<a id="api-d1ae629ab303c891"></a>
<!-- api: M:Inno.Rendering.Assets.GeometryArtifact.Encode(Inno.Rendering.Assets.GeometryData) d6d4b3e90fb4c31d04ea1e44e1ff87f397206fb2a865242f7b2dff226c714086 -->

```csharp
public static byte[] Inno.Rendering.Assets.GeometryArtifact.Encode(Inno.Rendering.Assets.GeometryData data)
```

Encodes normalized geometry into the immutable runtime artifact layout.

**Parameter `data`:** The normalized vertices, indices, and sections to encode.

**Returns:** A complete geometry artifact owned by the caller.

**Throws `System.ArgumentNullException`:** Thrown when `data` is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Geometry/GeometryArtifact.cs#L29).
