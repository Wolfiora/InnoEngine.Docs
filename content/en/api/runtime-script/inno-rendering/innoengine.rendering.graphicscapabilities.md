---
title: "GraphicsCapabilities"
description: "Reference for GraphicsCapabilities in Inno.Rendering."
uid: api.inno.rendering.runtime-script.e0574269eca43cef
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `GraphicsCapabilities`

This reference describes `GraphicsCapabilities` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-fe9ab199a12bb8d5) | Method |
| [`Supports`](#api-2f1434b6e3642ca4) | Method |
| [`SupportsMultisampleRenderTarget`](#api-95006e987767111a) | Method |
| [`SupportsRenderTarget`](#api-baa6b03aab489354) | Method |
| [`SupportsSampled`](#api-260e4b768ae6b335) | Method |
| [`SupportsSampled`](#api-120975d2f9c8e179) | Method |
| [`SupportsStorage`](#api-fc22d9b3b6d669ac) | Method |
| [`backend`](#api-bcd4cc601b8e2343) | Property |
| [`features`](#api-d7938d9605c8fa5a) | Property |
| [`homogeneousDepth`](#api-74a57cfa778bc46d) | Property |
| [`limits`](#api-f658546b2c0c005b) | Property |
| [`originBottomLeft`](#api-298dddd876fc95a0) | Property |

## Type declaration

<a id="api-e0574269eca43cef"></a>
<!-- api: T:InnoEngine.Rendering.GraphicsCapabilities 073426f691eab1befb391fe24f35e700ed98718de32ad533e46c8e4a23b205b7 -->

```csharp
public sealed class InnoEngine.Rendering.GraphicsCapabilities
```

Provides an immutable capability snapshot for one device generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L279).

## `#ctor`

<a id="api-fe9ab199a12bb8d5"></a>
<!-- api: M:InnoEngine.Rendering.GraphicsCapabilities.#ctor(InnoEngine.Rendering.GraphicsApi,InnoEngine.Rendering.GraphicsCapability,InnoEngine.Rendering.GraphicsLimits,System.Collections.Generic.IEnumerable{InnoEngine.Rendering.RenderTextureFormat},System.Collections.Generic.IEnumerable{InnoEngine.Rendering.RenderTextureFormat},System.Collections.Generic.IEnumerable{InnoEngine.Rendering.RenderTextureFormat},System.Collections.Generic.IEnumerable{InnoEngine.Rendering.RenderTextureFormat},System.Boolean,System.Boolean,System.Collections.Generic.IEnumerable{InnoEngine.Rendering.RenderTextureFormat},System.Collections.Generic.IEnumerable{InnoEngine.Rendering.RenderTextureFormat},System.Collections.Generic.IEnumerable{InnoEngine.Rendering.RenderTextureFormat}) 484df25f44b6d32dc8957b7c86452d9402b444da3d2d2291f9ab033222ef5c71 -->

```csharp
public InnoEngine.Rendering.GraphicsCapabilities.GraphicsCapabilities(InnoEngine.Rendering.GraphicsApi backend, InnoEngine.Rendering.GraphicsCapability features, InnoEngine.Rendering.GraphicsLimits limits, System.Collections.Generic.IEnumerable<InnoEngine.Rendering.RenderTextureFormat> sampledFormats, System.Collections.Generic.IEnumerable<InnoEngine.Rendering.RenderTextureFormat> renderTargetFormats, System.Collections.Generic.IEnumerable<InnoEngine.Rendering.RenderTextureFormat> storageReadFormats, System.Collections.Generic.IEnumerable<InnoEngine.Rendering.RenderTextureFormat> storageWriteFormats, bool originBottomLeft, bool homogeneousDepth, System.Collections.Generic.IEnumerable<InnoEngine.Rendering.RenderTextureFormat>? sampled3DFormats = null, System.Collections.Generic.IEnumerable<InnoEngine.Rendering.RenderTextureFormat>? sampledCubeFormats = null, System.Collections.Generic.IEnumerable<InnoEngine.Rendering.RenderTextureFormat>? multisampleRenderTargetFormats = null)
```

Creates a device capability snapshot.

**Parameter `backend`:** Active graphics API family.

**Parameter `features`:** Supported optional features.

**Parameter `limits`:** Device limits.

**Parameter `sampledFormats`:** Formats valid for sampled two-dimensional textures.

**Parameter `renderTargetFormats`:** Formats valid as raster attachments.

**Parameter `storageReadFormats`:** Formats valid for unordered shader reads.

**Parameter `storageWriteFormats`:** Formats valid for unordered shader writes.

**Parameter `originBottomLeft`:** Whether render-target coordinates start at the bottom-left.

**Parameter `homogeneousDepth`:** Whether clip-space depth uses the negative-one-to-one range.

**Parameter `sampled3DFormats`:** Formats valid for sampled volume textures.

**Parameter `sampledCubeFormats`:** Formats valid for sampled cubemaps.

**Parameter `multisampleRenderTargetFormats`:** Formats valid as multisampled raster attachments.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L328).

## `Supports`

<a id="api-2f1434b6e3642ca4"></a>
<!-- api: M:InnoEngine.Rendering.GraphicsCapabilities.Supports(InnoEngine.Rendering.GraphicsCapability) e585f00606b18ccf8082d9603127da45219508f6f4e8c8e829c45925a0542f4e -->

```csharp
public bool InnoEngine.Rendering.GraphicsCapabilities.Supports(InnoEngine.Rendering.GraphicsCapability required)
```

Tests whether every requested optional feature is supported.

**Returns:** `true` when every requested feature is available.

**Parameter `required`:** The required consumed by supports; ownership remains with the caller unless explicitly stated otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L398).

## `SupportsMultisampleRenderTarget`

<a id="api-95006e987767111a"></a>
<!-- api: M:InnoEngine.Rendering.GraphicsCapabilities.SupportsMultisampleRenderTarget(InnoEngine.Rendering.RenderTextureFormat) 3e1c4d203bdaf789dae19dbee89d09473ac0ee561626cbfe4a454c46625d3057 -->

```csharp
public bool InnoEngine.Rendering.GraphicsCapabilities.SupportsMultisampleRenderTarget(InnoEngine.Rendering.RenderTextureFormat format)
```

Tests whether a format is valid as a multisampled raster attachment.

**Parameter `format`:** Texture format to query.

**Returns:** `true` when the format can be attached with multisampling.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L455).

## `SupportsRenderTarget`

<a id="api-baa6b03aab489354"></a>
<!-- api: M:InnoEngine.Rendering.GraphicsCapabilities.SupportsRenderTarget(InnoEngine.Rendering.RenderTextureFormat) 1b34b3aca56f03c9dc92b21ee1b316a5d9841eab359849613b88f0c36e706110 -->

```csharp
public bool InnoEngine.Rendering.GraphicsCapabilities.SupportsRenderTarget(InnoEngine.Rendering.RenderTextureFormat format)
```

Tests whether a format is valid as a raster attachment.

**Returns:** `true` when the format can be attached.

**Parameter `format`:** The format consumed by supports render target; ownership remains with the caller unless explicitly stated otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L444).

## `SupportsSampled`

<a id="api-260e4b768ae6b335"></a>
<!-- api: M:InnoEngine.Rendering.GraphicsCapabilities.SupportsSampled(InnoEngine.Rendering.RenderTextureFormat,InnoEngine.Rendering.RenderTextureDimension) 35538241dec1c97e4afdbe958e44a8f4ba7fc38166468b66a6a5ea71fdebbf0e -->

```csharp
public bool InnoEngine.Rendering.GraphicsCapabilities.SupportsSampled(InnoEngine.Rendering.RenderTextureFormat format, InnoEngine.Rendering.RenderTextureDimension dimension)
```

Tests whether a format is valid for sampled textures of one dimensional shape.

**Parameter `format`:** Texture format to query.

**Parameter `dimension`:** Texture shape to query.

**Returns:** `true` when the format and dimension can be sampled.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L423).

## `SupportsSampled`

<a id="api-120975d2f9c8e179"></a>
<!-- api: M:InnoEngine.Rendering.GraphicsCapabilities.SupportsSampled(InnoEngine.Rendering.RenderTextureFormat) 159a75c368c1f2ed13dcca38ee0184e1b3ac397eb149c55d47f8f7aed443a466 -->

```csharp
public bool InnoEngine.Rendering.GraphicsCapabilities.SupportsSampled(InnoEngine.Rendering.RenderTextureFormat format)
```

Tests whether a format is valid for sampled two-dimensional textures.

**Parameter `format`:** Texture format to query.

**Returns:** `true` when the format can be sampled.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L409).

## `SupportsStorage`

<a id="api-fc22d9b3b6d669ac"></a>
<!-- api: M:InnoEngine.Rendering.GraphicsCapabilities.SupportsStorage(InnoEngine.Rendering.RenderTextureFormat,InnoEngine.Rendering.RenderStorageAccess) a3a41656588058897dee9c6aa9c9419a146273dc87477ab590dd97548972953b -->

```csharp
public bool InnoEngine.Rendering.GraphicsCapabilities.SupportsStorage(InnoEngine.Rendering.RenderTextureFormat format, InnoEngine.Rendering.RenderStorageAccess access)
```

Tests whether a format supports the requested unordered shader access.

**Parameter `format`:** Texture format to query.

**Parameter `access`:** Required storage access.

**Returns:** `true` when the format supports every requested access direction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L469).

## `backend`

<a id="api-bcd4cc601b8e2343"></a>
<!-- api: P:InnoEngine.Rendering.GraphicsCapabilities.backend 8c77b0cf70aff4de02e993a4df979a393abce59460d79a0b69350cd8b64916b7 -->

```csharp
public InnoEngine.Rendering.GraphicsApi InnoEngine.Rendering.GraphicsCapabilities.backend { get; }
```

Gets the active graphics API family.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L367).

## `features`

<a id="api-d7938d9605c8fa5a"></a>
<!-- api: P:InnoEngine.Rendering.GraphicsCapabilities.features 084d01df0485ebd1c97d0cf185e85507b65fcdea2a4f6d458f400ce0bdf408f8 -->

```csharp
public InnoEngine.Rendering.GraphicsCapability InnoEngine.Rendering.GraphicsCapabilities.features { get; }
```

Gets all supported optional features.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L372).

## `homogeneousDepth`

<a id="api-74a57cfa778bc46d"></a>
<!-- api: P:InnoEngine.Rendering.GraphicsCapabilities.homogeneousDepth 0b8800a0551913efe83c188408caf7e56edcda5eb9b5664af98e830671839fdf -->

```csharp
public bool InnoEngine.Rendering.GraphicsCapabilities.homogeneousDepth { get; }
```

Gets whether clip-space depth uses the negative-one-to-one range.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L387).

## `limits`

<a id="api-f658546b2c0c005b"></a>
<!-- api: P:InnoEngine.Rendering.GraphicsCapabilities.limits b29adfd8487c7699c0f4173e6fe5c0b771290a826b15bc8d49a884726686bd76 -->

```csharp
public InnoEngine.Rendering.GraphicsLimits InnoEngine.Rendering.GraphicsCapabilities.limits { get; }
```

Gets device limits.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L377).

## `originBottomLeft`

<a id="api-298dddd876fc95a0"></a>
<!-- api: P:InnoEngine.Rendering.GraphicsCapabilities.originBottomLeft 97de7de0c710aaf355848e2dc546e8e924ffccc9f20bb9530d70b2f9ad1c3db1 -->

```csharp
public bool InnoEngine.Rendering.GraphicsCapabilities.originBottomLeft { get; }
```

Gets whether render-target coordinates start at the bottom-left.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L382).
