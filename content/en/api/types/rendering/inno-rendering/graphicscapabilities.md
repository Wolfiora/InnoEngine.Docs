---
title: "GraphicsCapabilities"
description: "Reference for GraphicsCapabilities in Inno.Rendering."
uid: api.inno.rendering.b6f9aed55236c60c
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `GraphicsCapabilities`

This reference describes `GraphicsCapabilities` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-465656d5a200663c) | Method |
| [`Supports`](#api-18553528180289bc) | Method |
| [`SupportsMultisampleRenderTarget`](#api-9d80ded1828bcac3) | Method |
| [`SupportsRenderTarget`](#api-27cf74ec5a4d24ba) | Method |
| [`SupportsSampled`](#api-fce8c824541bfde6) | Method |
| [`SupportsSampled`](#api-b34f95add55d87ad) | Method |
| [`SupportsStorage`](#api-cde6e67125f10f18) | Method |
| [`backend`](#api-8b240f354ee0006c) | Property |
| [`features`](#api-7b5f0860a1e386fe) | Property |
| [`homogeneousDepth`](#api-5cdedcc3fab6ae23) | Property |
| [`limits`](#api-a78e479abd2b06dc) | Property |
| [`originBottomLeft`](#api-b595877ff5e39e0b) | Property |

## Type declaration

<a id="api-b6f9aed55236c60c"></a>
<!-- api: T:Inno.Rendering.GraphicsCapabilities 81ed9203ce8faf195d05d217ff2703b4f5f345c749edb6383df5a20d93c31eb5 -->

```csharp
public sealed class Inno.Rendering.GraphicsCapabilities
```

Provides an immutable capability snapshot for one device generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L279).

## `#ctor`

<a id="api-465656d5a200663c"></a>
<!-- api: M:Inno.Rendering.GraphicsCapabilities.#ctor(Inno.Rendering.GraphicsApi,Inno.Rendering.GraphicsCapability,Inno.Rendering.GraphicsLimits,System.Collections.Generic.IEnumerable{Inno.Rendering.RenderTextureFormat},System.Collections.Generic.IEnumerable{Inno.Rendering.RenderTextureFormat},System.Collections.Generic.IEnumerable{Inno.Rendering.RenderTextureFormat},System.Collections.Generic.IEnumerable{Inno.Rendering.RenderTextureFormat},System.Boolean,System.Boolean,System.Collections.Generic.IEnumerable{Inno.Rendering.RenderTextureFormat},System.Collections.Generic.IEnumerable{Inno.Rendering.RenderTextureFormat},System.Collections.Generic.IEnumerable{Inno.Rendering.RenderTextureFormat}) a5f6a0661d615ce11acc11786836205aeec63a3b1acfb043d6345878d93173f6 -->

```csharp
public Inno.Rendering.GraphicsCapabilities.GraphicsCapabilities(Inno.Rendering.GraphicsApi backend, Inno.Rendering.GraphicsCapability features, Inno.Rendering.GraphicsLimits limits, System.Collections.Generic.IEnumerable<Inno.Rendering.RenderTextureFormat> sampledFormats, System.Collections.Generic.IEnumerable<Inno.Rendering.RenderTextureFormat> renderTargetFormats, System.Collections.Generic.IEnumerable<Inno.Rendering.RenderTextureFormat> storageReadFormats, System.Collections.Generic.IEnumerable<Inno.Rendering.RenderTextureFormat> storageWriteFormats, bool originBottomLeft, bool homogeneousDepth, System.Collections.Generic.IEnumerable<Inno.Rendering.RenderTextureFormat>? sampled3DFormats = null, System.Collections.Generic.IEnumerable<Inno.Rendering.RenderTextureFormat>? sampledCubeFormats = null, System.Collections.Generic.IEnumerable<Inno.Rendering.RenderTextureFormat>? multisampleRenderTargetFormats = null)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L328).

## `Supports`

<a id="api-18553528180289bc"></a>
<!-- api: M:Inno.Rendering.GraphicsCapabilities.Supports(Inno.Rendering.GraphicsCapability) ad5b2e2b69db8e95842f0577cacf90632ef67222e70f0e174622429f6ea80fdd -->

```csharp
public bool Inno.Rendering.GraphicsCapabilities.Supports(Inno.Rendering.GraphicsCapability required)
```

Tests whether every requested optional feature is supported.

**Returns:** `true` when every requested feature is available.

**Parameter `required`:** The required consumed by supports; ownership remains with the caller unless explicitly stated otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L398).

## `SupportsMultisampleRenderTarget`

<a id="api-9d80ded1828bcac3"></a>
<!-- api: M:Inno.Rendering.GraphicsCapabilities.SupportsMultisampleRenderTarget(Inno.Rendering.RenderTextureFormat) d81a84d68ec9843850a272040404559a49b5674c95e47b22e7e2191f28d03b74 -->

```csharp
public bool Inno.Rendering.GraphicsCapabilities.SupportsMultisampleRenderTarget(Inno.Rendering.RenderTextureFormat format)
```

Tests whether a format is valid as a multisampled raster attachment.

**Parameter `format`:** Texture format to query.

**Returns:** `true` when the format can be attached with multisampling.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L455).

## `SupportsRenderTarget`

<a id="api-27cf74ec5a4d24ba"></a>
<!-- api: M:Inno.Rendering.GraphicsCapabilities.SupportsRenderTarget(Inno.Rendering.RenderTextureFormat) c067d15b0ef077357fa17fdbffbdfadc067015a149a195b722bf824251b44a54 -->

```csharp
public bool Inno.Rendering.GraphicsCapabilities.SupportsRenderTarget(Inno.Rendering.RenderTextureFormat format)
```

Tests whether a format is valid as a raster attachment.

**Returns:** `true` when the format can be attached.

**Parameter `format`:** The format consumed by supports render target; ownership remains with the caller unless explicitly stated otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L444).

## `SupportsSampled`

<a id="api-fce8c824541bfde6"></a>
<!-- api: M:Inno.Rendering.GraphicsCapabilities.SupportsSampled(Inno.Rendering.RenderTextureFormat,Inno.Rendering.RenderTextureDimension) 6c93fea4c3f1c043138ebbbcc515ba109218dfb70b65f149088831b6a17ffe78 -->

```csharp
public bool Inno.Rendering.GraphicsCapabilities.SupportsSampled(Inno.Rendering.RenderTextureFormat format, Inno.Rendering.RenderTextureDimension dimension)
```

Tests whether a format is valid for sampled textures of one dimensional shape.

**Parameter `format`:** Texture format to query.

**Parameter `dimension`:** Texture shape to query.

**Returns:** `true` when the format and dimension can be sampled.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L423).

## `SupportsSampled`

<a id="api-b34f95add55d87ad"></a>
<!-- api: M:Inno.Rendering.GraphicsCapabilities.SupportsSampled(Inno.Rendering.RenderTextureFormat) e22abc877b66e3f424a419be7918c1fc208cfd4e5dbde98a76458e040f8baea2 -->

```csharp
public bool Inno.Rendering.GraphicsCapabilities.SupportsSampled(Inno.Rendering.RenderTextureFormat format)
```

Tests whether a format is valid for sampled two-dimensional textures.

**Parameter `format`:** Texture format to query.

**Returns:** `true` when the format can be sampled.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L409).

## `SupportsStorage`

<a id="api-cde6e67125f10f18"></a>
<!-- api: M:Inno.Rendering.GraphicsCapabilities.SupportsStorage(Inno.Rendering.RenderTextureFormat,Inno.Rendering.RenderStorageAccess) a625b273e9763803d0621ed5983998624269d99eb9e3531cbb1767751043f94e -->

```csharp
public bool Inno.Rendering.GraphicsCapabilities.SupportsStorage(Inno.Rendering.RenderTextureFormat format, Inno.Rendering.RenderStorageAccess access)
```

Tests whether a format supports the requested unordered shader access.

**Parameter `format`:** Texture format to query.

**Parameter `access`:** Required storage access.

**Returns:** `true` when the format supports every requested access direction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L469).

## `backend`

<a id="api-8b240f354ee0006c"></a>
<!-- api: P:Inno.Rendering.GraphicsCapabilities.backend ad705400ef076f1823387a2b19c2cfefeb4dffd1782766578d51a08c78f1ee21 -->

```csharp
public Inno.Rendering.GraphicsApi Inno.Rendering.GraphicsCapabilities.backend { get; }
```

Gets the active graphics API family.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L367).

## `features`

<a id="api-7b5f0860a1e386fe"></a>
<!-- api: P:Inno.Rendering.GraphicsCapabilities.features d1044e7765632a0c4ded513b149716a7944e45296b4640124e97ba82a71eee19 -->

```csharp
public Inno.Rendering.GraphicsCapability Inno.Rendering.GraphicsCapabilities.features { get; }
```

Gets all supported optional features.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L372).

## `homogeneousDepth`

<a id="api-5cdedcc3fab6ae23"></a>
<!-- api: P:Inno.Rendering.GraphicsCapabilities.homogeneousDepth c3b0285b09aa79062af159276774c2e5455d430f4c1e101f11d4b4eab8f1900c -->

```csharp
public bool Inno.Rendering.GraphicsCapabilities.homogeneousDepth { get; }
```

Gets whether clip-space depth uses the negative-one-to-one range.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L387).

## `limits`

<a id="api-a78e479abd2b06dc"></a>
<!-- api: P:Inno.Rendering.GraphicsCapabilities.limits ae94d852b2acafc342d30f796ed3dbcaf0432a877736c74a04381028b0b70e09 -->

```csharp
public Inno.Rendering.GraphicsLimits Inno.Rendering.GraphicsCapabilities.limits { get; }
```

Gets device limits.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L377).

## `originBottomLeft`

<a id="api-b595877ff5e39e0b"></a>
<!-- api: P:Inno.Rendering.GraphicsCapabilities.originBottomLeft 270c197f057b88f7f2c6b022bda8524610e2d079dd78f83d202bd9a7736d1ee8 -->

```csharp
public bool Inno.Rendering.GraphicsCapabilities.originBottomLeft { get; }
```

Gets whether render-target coordinates start at the bottom-left.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/GraphicsCapabilities.cs#L382).
