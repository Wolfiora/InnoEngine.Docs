---
title: "RenderTextureFormat"
description: "Reference for RenderTextureFormat in Inno.Rendering."
uid: api.inno.rendering.runtime-script.2e6c749611fbf71c
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `RenderTextureFormat`

This reference describes `RenderTextureFormat` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Depth24Stencil8`](#api-9d9c45a600d41791) | Field |
| [`Depth32Float`](#api-0a37cbe7f678c708) | Field |
| [`R32Float`](#api-69552bbe8f890c7a) | Field |
| [`R8`](#api-7838cddc55c7e82b) | Field |
| [`RG11B10Float`](#api-93d5a0b44b43c847) | Field |
| [`RG8`](#api-5ff4e2f4932c00aa) | Field |
| [`RGB10A2`](#api-07f2d90a1cefcdd0) | Field |
| [`RGBA16Float`](#api-7bc48d4e2f2281f1) | Field |
| [`RGBA8`](#api-85bbc9d1a034e2c6) | Field |
| [`RGBA8Srgb`](#api-da8b457f120fb2f5) | Field |

## Type declaration

<a id="api-2e6c749611fbf71c"></a>
<!-- api: T:InnoEngine.Rendering.RenderTextureFormat d7d2770ef263257a5d4a9c13a89bd9a8a561b5006be41a71bd8d0c97077b4d64 -->

```csharp
public enum InnoEngine.Rendering.RenderTextureFormat : int
```

Declares backend-neutral texture storage formats.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L8).

## `Depth24Stencil8`

<a id="api-9d9c45a600d41791"></a>
<!-- api: F:InnoEngine.Rendering.RenderTextureFormat.Depth24Stencil8 8f19b034881d16a81d86349b2d1d913f360cd40078bd0f121aa6d8a0e1911f01 -->

```csharp
InnoEngine.Rendering.RenderTextureFormat.Depth24Stencil8 = 8
```

Twenty-four-bit depth and eight-bit stencil format.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L45).

## `Depth32Float`

<a id="api-0a37cbe7f678c708"></a>
<!-- api: F:InnoEngine.Rendering.RenderTextureFormat.Depth32Float 78931ea14a1122d2b6f2bd704a4806346b5ad88903de0a084d93bc5c2c090eb0 -->

```csharp
InnoEngine.Rendering.RenderTextureFormat.Depth32Float = 9
```

Thirty-two-bit floating-point depth format.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L49).

## `R32Float`

<a id="api-69552bbe8f890c7a"></a>
<!-- api: F:InnoEngine.Rendering.RenderTextureFormat.R32Float 7c7d96602768abca633b5b0ddc0950c7d6b470383e6894c0c8313f2053893d0e -->

```csharp
InnoEngine.Rendering.RenderTextureFormat.R32Float = 7
```

Single-channel 32-bit floating-point format.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L41).

## `R8`

<a id="api-7838cddc55c7e82b"></a>
<!-- api: F:InnoEngine.Rendering.RenderTextureFormat.R8 0ce0fa97b38d6caeab97d8c1aa88ada03ddc6ad9e5a69ac05b0508154f103481 -->

```csharp
InnoEngine.Rendering.RenderTextureFormat.R8 = 0
```

Eight-bit single-channel normalized format.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L13).

## `RG11B10Float`

<a id="api-93d5a0b44b43c847"></a>
<!-- api: F:InnoEngine.Rendering.RenderTextureFormat.RG11B10Float be46a79ac3f7f39c9c8a25b7898ecabdb76a21ae210935c1398b3d0169ba149f -->

```csharp
InnoEngine.Rendering.RenderTextureFormat.RG11B10Float = 5
```

Eleven-bit RGB floating-point format.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L33).

## `RG8`

<a id="api-5ff4e2f4932c00aa"></a>
<!-- api: F:InnoEngine.Rendering.RenderTextureFormat.RG8 fa66e87c7bad259d47b9ab934c8dd181f12442036683c31df643b04e0cf6a0c0 -->

```csharp
InnoEngine.Rendering.RenderTextureFormat.RG8 = 1
```

Eight-bit two-channel normalized format.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L17).

## `RGB10A2`

<a id="api-07f2d90a1cefcdd0"></a>
<!-- api: F:InnoEngine.Rendering.RenderTextureFormat.RGB10A2 5347c0d0d28846e4f855b92b280ab4799baa58a457edf5b38450e294dc35cdd0 -->

```csharp
InnoEngine.Rendering.RenderTextureFormat.RGB10A2 = 4
```

Ten-bit RGB and two-bit alpha normalized format.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L29).

## `RGBA16Float`

<a id="api-7bc48d4e2f2281f1"></a>
<!-- api: F:InnoEngine.Rendering.RenderTextureFormat.RGBA16Float 9ff0c3c4541ec353862b2613b8d022dcbce337a402d68d30e22ae683c2a479ea -->

```csharp
InnoEngine.Rendering.RenderTextureFormat.RGBA16Float = 6
```

Half-precision four-channel floating-point format.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L37).

## `RGBA8`

<a id="api-85bbc9d1a034e2c6"></a>
<!-- api: F:InnoEngine.Rendering.RenderTextureFormat.RGBA8 74d07639b3a994b5e094a16031dcd27f2f56e56f4ea6abbdd06b793e5e9baf93 -->

```csharp
InnoEngine.Rendering.RenderTextureFormat.RGBA8 = 2
```

Eight-bit four-channel linear normalized format.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L21).

## `RGBA8Srgb`

<a id="api-da8b457f120fb2f5"></a>
<!-- api: F:InnoEngine.Rendering.RenderTextureFormat.RGBA8Srgb c2204259105d69ba72af0329ecd2dac02474aad0b2909f3a604d65af94c9b5ca -->

```csharp
InnoEngine.Rendering.RenderTextureFormat.RGBA8Srgb = 3
```

Eight-bit four-channel sRGB format.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L25).
