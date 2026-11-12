---
title: "RenderTextureDescriptor"
description: "Reference for RenderTextureDescriptor in Inno.Rendering."
uid: api.inno.rendering.runtime-script.27528b82006ae7cf
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `RenderTextureDescriptor`

This reference describes `RenderTextureDescriptor` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

**Direct interfaces:** `System.IEquatable<InnoEngine.Rendering.RenderTextureDescriptor>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-faeb0e4636dbd833) | Method |
| [`Equals`](#api-0bf74a5feb1138da) | Method |
| [`Equals`](#api-d30d8b99427dfeb2) | Method |
| [`GetHashCode`](#api-ea370bc8e41c4888) | Method |
| [`GetSubresourceLayerCount`](#api-21ff94250210b42f) | Method |
| [`arrayLayers`](#api-95d4c894d3e981c9) | Property |
| [`depth`](#api-3d4954b7fc7b90fe) | Property |
| [`dimension`](#api-3ae1bb32355b9e44) | Property |
| [`format`](#api-1f977fcace85fed6) | Property |
| [`height`](#api-82529de2dfd5fc46) | Property |
| [`mipCount`](#api-5aba9142e12390d5) | Property |
| [`sampleCount`](#api-b765be60faa545a2) | Property |
| [`usage`](#api-78b41bf63a8da1b2) | Property |
| [`width`](#api-3d39c3ce78c8a7ba) | Property |

## Type declaration

<a id="api-27528b82006ae7cf"></a>
<!-- api: T:InnoEngine.Rendering.RenderTextureDescriptor 9f84cf6e9959b6407973ec4f54b6bd29f99a7fec5afaff36fa85a53094df09a9 -->

```csharp
public sealed class InnoEngine.Rendering.RenderTextureDescriptor : System.IEquatable<InnoEngine.Rendering.RenderTextureDescriptor>
```

Describes a render-graph texture independently from a graphics backend.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L150).

## `#ctor`

<a id="api-faeb0e4636dbd833"></a>
<!-- api: M:InnoEngine.Rendering.RenderTextureDescriptor.#ctor(System.Int32,System.Int32,InnoEngine.Rendering.RenderTextureFormat,InnoEngine.Rendering.RenderTextureUsage,System.Int32,System.Int32,System.Int32,InnoEngine.Rendering.RenderTextureDimension,System.Int32) 1d0c8326579b054fa710038d805e879d2890e1a29f28969dd304ebe4a294a123 -->

```csharp
public InnoEngine.Rendering.RenderTextureDescriptor.RenderTextureDescriptor(int width, int height, InnoEngine.Rendering.RenderTextureFormat format, InnoEngine.Rendering.RenderTextureUsage usage, int mipCount = 1, int arrayLayers = 1, int sampleCount = 1, InnoEngine.Rendering.RenderTextureDimension dimension = InnoEngine.Rendering.RenderTextureDimension.Texture2D, int depth = 1)
```

Creates a texture descriptor.

**Parameter `width`:** Texture width in pixels.

**Parameter `height`:** Texture height in pixels.

**Parameter `format`:** Storage format.

**Parameter `usage`:** Permitted operations.

**Parameter `mipCount`:** Number of mip levels.

**Parameter `arrayLayers`:** Number of array layers.

**Parameter `sampleCount`:** Raster sample count.

**Parameter `dimension`:** Texture dimensional shape.

**Parameter `depth`:** Base mip depth for a three-dimensional texture.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L182).

## `Equals`

<a id="api-0bf74a5feb1138da"></a>
<!-- api: M:InnoEngine.Rendering.RenderTextureDescriptor.Equals(InnoEngine.Rendering.RenderTextureDescriptor) 9081c955ca632ca1d9bf6d6afb52b866bf9abc74e5d8e9525a7a73442f8c48c2 -->

```csharp
public bool InnoEngine.Rendering.RenderTextureDescriptor.Equals(InnoEngine.Rendering.RenderTextureDescriptor? other)
```

Determines whether this instance and the supplied value represent the same logical state.

**Parameter `other`:** The value to compare with this instance.

**Returns:** `true` when both values represent the same logical state; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L316).

## `Equals`

<a id="api-d30d8b99427dfeb2"></a>
<!-- api: M:InnoEngine.Rendering.RenderTextureDescriptor.Equals(System.Object) bbdddc6b4b35d63913e711d40b804a3c5295b4bf78a5489d4d16d81f6a15782f -->

```csharp
public override bool InnoEngine.Rendering.RenderTextureDescriptor.Equals(object? obj)
```

Determines whether this instance and the supplied value represent the same logical state.

**Returns:** `true` when both values represent the same logical state; otherwise, `false`.

**Parameter `obj`:** The object to compare with this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L337).

## `GetHashCode`

<a id="api-ea370bc8e41c4888"></a>
<!-- api: M:InnoEngine.Rendering.RenderTextureDescriptor.GetHashCode 527c1eb8df1c8ce42bb6944b952adb233e9080a47c53e281e08981d886b546ab -->

```csharp
public override int InnoEngine.Rendering.RenderTextureDescriptor.GetHashCode()
```

Computes a hash code from the fields that participate in logical equality.

**Returns:** A hash code consistent with the implemented equality contract.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L345).

## `GetSubresourceLayerCount`

<a id="api-21ff94250210b42f"></a>
<!-- api: M:InnoEngine.Rendering.RenderTextureDescriptor.GetSubresourceLayerCount(System.Int32) 0cdfda13b57ad9d3baea278038c183c0403ddb14ced337ea8e08b604ea977dcc -->

```csharp
public int InnoEngine.Rendering.RenderTextureDescriptor.GetSubresourceLayerCount(int mipLevel)
```

Gets the number of independently addressable layers or slices at one mip level.

**Parameter `mipLevel`:** Zero-based mip level.

**Returns:** The array-layer count for 2D textures, six faces per cubemap layer, or the mip depth for 3D textures.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L294).

## `arrayLayers`

<a id="api-95d4c894d3e981c9"></a>
<!-- api: P:InnoEngine.Rendering.RenderTextureDescriptor.arrayLayers 3db90dae3a2818fcc40fdf0d4b507148801981d289bf140577e6e874ec4a16b7 -->

```csharp
public int InnoEngine.Rendering.RenderTextureDescriptor.arrayLayers { get; }
```

Gets the number of array layers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L268).

## `depth`

<a id="api-3d4954b7fc7b90fe"></a>
<!-- api: P:InnoEngine.Rendering.RenderTextureDescriptor.depth c540df2fcc9bbcc762b8b9df5660ab6a4489cfddb471473be1b8477eff2cea0b -->

```csharp
public int InnoEngine.Rendering.RenderTextureDescriptor.depth { get; }
```

Gets the base mip depth for a three-dimensional texture.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L283).

## `dimension`

<a id="api-3ae1bb32355b9e44"></a>
<!-- api: P:InnoEngine.Rendering.RenderTextureDescriptor.dimension 7718f1ee77b16208cf5f29d3995cc7fe81f452ef77ba4486ed4359755d38290a -->

```csharp
public InnoEngine.Rendering.RenderTextureDimension InnoEngine.Rendering.RenderTextureDescriptor.dimension { get; }
```

Gets the dimensional texture shape.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L278).

## `format`

<a id="api-1f977fcace85fed6"></a>
<!-- api: P:InnoEngine.Rendering.RenderTextureDescriptor.format de89519e21c4ad0e574ca48fc90a097570aa275e80624e73585513dadb0eae8f -->

```csharp
public InnoEngine.Rendering.RenderTextureFormat InnoEngine.Rendering.RenderTextureDescriptor.format { get; }
```

Gets the storage format.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L253).

## `height`

<a id="api-82529de2dfd5fc46"></a>
<!-- api: P:InnoEngine.Rendering.RenderTextureDescriptor.height c3a3c9abc745677e606ee3657a5023aa0e5d045bda0b128c101dd2e2842ebc25 -->

```csharp
public int InnoEngine.Rendering.RenderTextureDescriptor.height { get; }
```

Gets the texture height in pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L248).

## `mipCount`

<a id="api-5aba9142e12390d5"></a>
<!-- api: P:InnoEngine.Rendering.RenderTextureDescriptor.mipCount 392225f033dbc9208e5a54f1334671e9cdf1e7563571804cdde6db80b1a1d64c -->

```csharp
public int InnoEngine.Rendering.RenderTextureDescriptor.mipCount { get; }
```

Gets the number of mip levels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L263).

## `sampleCount`

<a id="api-b765be60faa545a2"></a>
<!-- api: P:InnoEngine.Rendering.RenderTextureDescriptor.sampleCount 0521ab4c01d7cde23c2946e93613ac1ec5ada3dc6f89164b105fb27bf0c8d817 -->

```csharp
public int InnoEngine.Rendering.RenderTextureDescriptor.sampleCount { get; }
```

Gets the raster sample count.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L273).

## `usage`

<a id="api-78b41bf63a8da1b2"></a>
<!-- api: P:InnoEngine.Rendering.RenderTextureDescriptor.usage 9cf875e665a9ae468c024e4ad21f02702af5f8a827c78eb8302ca2d7405b440c -->

```csharp
public InnoEngine.Rendering.RenderTextureUsage InnoEngine.Rendering.RenderTextureDescriptor.usage { get; }
```

Gets permitted operations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L258).

## `width`

<a id="api-3d39c3ce78c8a7ba"></a>
<!-- api: P:InnoEngine.Rendering.RenderTextureDescriptor.width 2a983cc1980e1706c1802c56810b847d1c47c9d6311d88c221bf20cc06b8626d -->

```csharp
public int InnoEngine.Rendering.RenderTextureDescriptor.width { get; }
```

Gets the texture width in pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Device/RenderResources.cs#L243).
