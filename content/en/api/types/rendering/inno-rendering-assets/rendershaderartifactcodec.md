---
title: "RenderShaderArtifactCodec"
description: "Reference for RenderShaderArtifactCodec in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.6e12fa6ca010e303
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: source-clr
contracts:
  - project.inno-rendering-assets
---
# `RenderShaderArtifactCodec`

This reference describes `RenderShaderArtifactCodec` in `Inno.Rendering.Assets`. Read the [shared contract](../../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`Decode`](#api-f9363e2ebfc242d3) | Method |
| [`Encode`](#api-2ca2420c93ed6c6f) | Method |

## Type declaration

<a id="api-6e12fa6ca010e303"></a>
<!-- api: T:Inno.Rendering.Assets.RenderShaderArtifactCodec 791d1502c3f3835827198857747d8db6ff769411742ed587c98fa985060d13dd -->

```csharp
public static class Inno.Rendering.Assets.RenderShaderArtifactCodec
```

Encodes and validates the strict source-free binary format shared by game builds and Players.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Deployment/RenderShaderArtifactCodec.cs#L14).

## `Decode`

<a id="api-f9363e2ebfc242d3"></a>
<!-- api: M:Inno.Rendering.Assets.RenderShaderArtifactCodec.Decode(System.ReadOnlySpan{System.Byte},System.String,Inno.Rendering.Assets.RenderShaderVariant) 6b8a394f4500a5c3ff52dab8373fe86337c22df7c75c1c9ad97f34f556e746ae -->

```csharp
public static Inno.Rendering.Assets.RenderShaderArtifact Inno.Rendering.Assets.RenderShaderArtifactCodec.Decode(System.ReadOnlySpan<byte> bytes, string expectedShaderName, Inno.Rendering.Assets.RenderShaderVariant expectedVariant)
```

Decodes a deployed shader artifact and validates it against the requesting runtime shader and variant.

**Parameter `bytes`:** The complete binary deployment payload.

**Parameter `expectedShaderName`:** The shader name declared by the requesting runtime asset.

**Parameter `expectedVariant`:** The exact static keyword selection requested by the material.

**Returns:** A fully validated, source-free artifact ready for GPU resource creation.

**Throws `System.IO.InvalidDataException`:** Thrown when the payload is corrupt, exceeds safety limits, or does not match the request.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Deployment/RenderShaderArtifactCodec.cs#L80).

## `Encode`

<a id="api-2ca2420c93ed6c6f"></a>
<!-- api: M:Inno.Rendering.Assets.RenderShaderArtifactCodec.Encode(Inno.Rendering.Assets.RenderShaderArtifact) 56e8891d695f68974dc9d8fd3324b43e0ee4bb4acf860a3c3e4e79af372bef26 -->

```csharp
public static byte[] Inno.Rendering.Assets.RenderShaderArtifactCodec.Encode(Inno.Rendering.Assets.RenderShaderArtifact artifact)
```

Encodes a validated shader artifact into its deterministic runtime deployment representation.

**Parameter `artifact`:** The complete source-free artifact to encode.

**Returns:** The deterministic binary deployment payload.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Deployment/RenderShaderArtifactCodec.cs#L31).
