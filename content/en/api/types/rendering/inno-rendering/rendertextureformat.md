---
title: "RenderTextureFormat"
description: "Reference for RenderTextureFormat in Inno.Rendering."
uid: api.inno.rendering.88828d28d6d782aa
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `RenderTextureFormat`

This reference describes `RenderTextureFormat` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Depth24Stencil8`](#api-39202eb35cc0083c) | Field |
| [`Depth32Float`](#api-1375910bac0bf686) | Field |
| [`R32Float`](#api-b94070f9cae375aa) | Field |
| [`R8`](#api-65eec97198485e36) | Field |
| [`RG11B10Float`](#api-1c51452b158ff870) | Field |
| [`RG8`](#api-1b9452a736321bbe) | Field |
| [`RGB10A2`](#api-52ec1c49c56116bd) | Field |
| [`RGBA16Float`](#api-59059c52684c68f8) | Field |
| [`RGBA8`](#api-feb168a00c3cee32) | Field |
| [`RGBA8Srgb`](#api-484c416e1eda5751) | Field |

## Type declaration

<a id="api-88828d28d6d782aa"></a>
<!-- api: T:Inno.Rendering.RenderTextureFormat c3525910fbdfc76977fcb7a4f96841091c8ea43839b239be1573249407c19f11 -->

```csharp
public enum Inno.Rendering.RenderTextureFormat : int
```

Declares backend-neutral texture storage formats.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L8).

## `Depth24Stencil8`

<a id="api-39202eb35cc0083c"></a>
<!-- api: F:Inno.Rendering.RenderTextureFormat.Depth24Stencil8 468631b497fb1ea6af115e557964426757c1a7e332d3fc4b907e554f7af2cb5d -->

```csharp
Inno.Rendering.RenderTextureFormat.Depth24Stencil8 = 8
```

Twenty-four-bit depth and eight-bit stencil format.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L45).

## `Depth32Float`

<a id="api-1375910bac0bf686"></a>
<!-- api: F:Inno.Rendering.RenderTextureFormat.Depth32Float 49f39ee9824cb67712d8333df41dc74fc122cf85feb78b6d677c7714ea5aabfc -->

```csharp
Inno.Rendering.RenderTextureFormat.Depth32Float = 9
```

Thirty-two-bit floating-point depth format.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L49).

## `R32Float`

<a id="api-b94070f9cae375aa"></a>
<!-- api: F:Inno.Rendering.RenderTextureFormat.R32Float 3808adbd779b2e0902498da841db91b82eabc908b39bd2137ed03b04f5627fb3 -->

```csharp
Inno.Rendering.RenderTextureFormat.R32Float = 7
```

Single-channel 32-bit floating-point format.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L41).

## `R8`

<a id="api-65eec97198485e36"></a>
<!-- api: F:Inno.Rendering.RenderTextureFormat.R8 6e55b87c8132564012e153f9af6b9ab9bb341f7f95a8269c6863178ac99525ac -->

```csharp
Inno.Rendering.RenderTextureFormat.R8 = 0
```

Eight-bit single-channel normalized format.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L13).

## `RG11B10Float`

<a id="api-1c51452b158ff870"></a>
<!-- api: F:Inno.Rendering.RenderTextureFormat.RG11B10Float 30acc106d9c2f7b93fff3c8246dbd239d2124dbc40026688e383c68855d3d865 -->

```csharp
Inno.Rendering.RenderTextureFormat.RG11B10Float = 5
```

Eleven-bit RGB floating-point format.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L33).

## `RG8`

<a id="api-1b9452a736321bbe"></a>
<!-- api: F:Inno.Rendering.RenderTextureFormat.RG8 928dbe1292f54686f8001d62b6f46d2770d82de7de352c585dd874579d2ef8c8 -->

```csharp
Inno.Rendering.RenderTextureFormat.RG8 = 1
```

Eight-bit two-channel normalized format.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L17).

## `RGB10A2`

<a id="api-52ec1c49c56116bd"></a>
<!-- api: F:Inno.Rendering.RenderTextureFormat.RGB10A2 86a7f9873d1c0f810c2e6b897107ca7d21c5f457c895cc9de90f970779348fb0 -->

```csharp
Inno.Rendering.RenderTextureFormat.RGB10A2 = 4
```

Ten-bit RGB and two-bit alpha normalized format.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L29).

## `RGBA16Float`

<a id="api-59059c52684c68f8"></a>
<!-- api: F:Inno.Rendering.RenderTextureFormat.RGBA16Float 983a649925aa3de1fc5351a25a03532143166c187e6ccc857a9cf69f5c675e82 -->

```csharp
Inno.Rendering.RenderTextureFormat.RGBA16Float = 6
```

Half-precision four-channel floating-point format.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L37).

## `RGBA8`

<a id="api-feb168a00c3cee32"></a>
<!-- api: F:Inno.Rendering.RenderTextureFormat.RGBA8 2530a86cb019d76a850751d52b8409f8461cb2aab455e08f38ed445cc9734faa -->

```csharp
Inno.Rendering.RenderTextureFormat.RGBA8 = 2
```

Eight-bit four-channel linear normalized format.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L21).

## `RGBA8Srgb`

<a id="api-484c416e1eda5751"></a>
<!-- api: F:Inno.Rendering.RenderTextureFormat.RGBA8Srgb cc66dd4008bcbfecb9f4f1b11b4051f97adc06a4468020c357780ac6add1949f -->

```csharp
Inno.Rendering.RenderTextureFormat.RGBA8Srgb = 3
```

Eight-bit four-channel sRGB format.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L25).
