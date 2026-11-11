---
title: "TextureAsset"
description: "Reference for TextureAsset in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.c7838bab97ebeea9
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: source-clr
contracts:
  - project.inno-rendering-assets
---
# `TextureAsset`

This reference describes `TextureAsset` in `Inno.Rendering.Assets`. Read the [shared contract](../../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Assets.AssetObject`.

**Direct interfaces:** `Inno.Rendering.Assets.IRenderTextureArtifactSource`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-6871e0afc14923a6) | Method |
| [`GetTextureArtifactReference`](#api-ba74efd991e194eb) | Method |
| [`colorSpace`](#api-3315430beb619f2d) | Property |
| [`height`](#api-8fcbc3f07b945ae9) | Property |
| [`sourceFormat`](#api-f5bded7254756180) | Property |
| [`textureArtifacts`](#api-70e2f18a8eca077e) | Property |
| [`width`](#api-de31b87425b3c05b) | Property |

## Type declaration

<a id="api-c7838bab97ebeea9"></a>
<!-- api: T:Inno.Rendering.Assets.TextureAsset 4a365c838ab8cbe95e7a57fb99ddcd027e3334c416e133271902e65c22d67db8 -->

```csharp
public sealed class Inno.Rendering.Assets.TextureAsset : Inno.Assets.AssetObject, Inno.Rendering.Assets.IRenderTextureArtifactSource
```

Represents imported texture content without owning a GPU handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Textures/TextureAsset.cs#L17).

## `#ctor`

<a id="api-6871e0afc14923a6"></a>
<!-- api: M:Inno.Rendering.Assets.TextureAsset.#ctor(System.Int32,System.Int32,Inno.Rendering.Assets.TextureColorSpace,System.String) 6473c1a445bd584a969e84c0a9fde7507cc0e49adf8835e84c5f0b0ae8d65384 -->

```csharp
public Inno.Rendering.Assets.TextureAsset.TextureAsset(int width, int height, Inno.Rendering.Assets.TextureColorSpace colorSpace, string sourceFormat)
```

Creates an immutable imported texture description.

**Parameter `width`:** The positive source pixel width.

**Parameter `height`:** The positive source pixel height.

**Parameter `colorSpace`:** The color-space interpretation used when sampling the texture.

**Parameter `sourceFormat`:** The normalized source container name without a leading period.

**Throws `System.ArgumentOutOfRangeException`:** Thrown when `width` or `height` is not positive.

**Throws `System.ArgumentException`:** Thrown when `sourceFormat` is empty or contains only white-space characters.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Textures/TextureAsset.cs#L49).

## `GetTextureArtifactReference`

<a id="api-ba74efd991e194eb"></a>
<!-- api: M:Inno.Rendering.Assets.TextureAsset.GetTextureArtifactReference cc849a4e00fded4df992a9db18574e35048bc264cf974df6880fed4d2f60b704 -->

```csharp
public Inno.Rendering.Assets.RenderTextureArtifactReference Inno.Rendering.Assets.TextureAsset.GetTextureArtifactReference()
```

Creates a stable reference to this texture's current imported content.

**Returns:** A reference suitable for target compilation and generation-scoped GPU resolution.

**Throws `System.InvalidOperationException`:** Thrown when this texture has not been assigned a persistent asset identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Textures/TextureAsset.cs#L105).

## `colorSpace`

<a id="api-3315430beb619f2d"></a>
<!-- api: P:Inno.Rendering.Assets.TextureAsset.colorSpace 7073f18210a5c4b30d4b6dfa50ddce6af1b8138c93e85b2b58017277f7f48a0f -->

```csharp
public Inno.Rendering.Assets.TextureColorSpace Inno.Rendering.Assets.TextureAsset.colorSpace { get; internal set; }
```

Gets the declared sample color space.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Textures/TextureAsset.cs#L80).

## `height`

<a id="api-8fcbc3f07b945ae9"></a>
<!-- api: P:Inno.Rendering.Assets.TextureAsset.height b3ff54c3712fefca17d3186e45ad46590aa49604b3b6d826f5dd9aee587235e4 -->

```csharp
public int Inno.Rendering.Assets.TextureAsset.height { get; internal set; }
```

Gets the source pixel height.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Textures/TextureAsset.cs#L74).

## `sourceFormat`

<a id="api-f5bded7254756180"></a>
<!-- api: P:Inno.Rendering.Assets.TextureAsset.sourceFormat f6aedd82b039a29b8bab4d72438a119f5fe799a790ae11519103cfb2da2e8da5 -->

```csharp
public string Inno.Rendering.Assets.TextureAsset.sourceFormat { get; internal set; }
```

Gets the normalized source container name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Textures/TextureAsset.cs#L86).

## `textureArtifacts`

<a id="api-70e2f18a8eca077e"></a>
<!-- api: P:Inno.Rendering.Assets.TextureAsset.textureArtifacts b7b049458ebc2149fc029a0208fb4b826b27ae2be6a714386e3f230535a8067a -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Rendering.Assets.RenderTextureArtifactSlot> Inno.Rendering.Assets.TextureAsset.textureArtifacts { get; }
```

Gets the single source artifact compiled for this imported texture.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Textures/TextureAsset.cs#L91).

## `width`

<a id="api-de31b87425b3c05b"></a>
<!-- api: P:Inno.Rendering.Assets.TextureAsset.width 62be21d43e1573f4677eeb75de4477c49776d7f76fa5b933bd9161d52fec0c57 -->

```csharp
public int Inno.Rendering.Assets.TextureAsset.width { get; internal set; }
```

Gets the source pixel width.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Textures/TextureAsset.cs#L68).
