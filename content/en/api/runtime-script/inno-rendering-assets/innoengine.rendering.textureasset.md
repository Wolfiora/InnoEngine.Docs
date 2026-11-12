---
title: "TextureAsset"
description: "Reference for TextureAsset in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.runtime-script.be528bafdcc0f29b
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: runtime-script
contracts:
  - project.inno-rendering-assets
  - manual.scripting.use-script-api
---
# `TextureAsset`

This reference describes `TextureAsset` in `Inno.Rendering.Assets`. Read the [shared contract](../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `InnoEngine.Assets.AssetObject`.

**Direct interfaces:** `InnoEngine.Serialization.ISerializable`, `InnoEngine.Rendering.IRenderTextureArtifactSource`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-4a3858a932746ec4) | Method |
| [`GetTextureArtifactReference`](#api-c7a1cad9622d2e27) | Method |
| [`colorSpace`](#api-4108cbc6eca787b8) | Property |
| [`height`](#api-8e10d1a885fa7358) | Property |
| [`sourceFormat`](#api-7f1c82bd9e7175c4) | Property |
| [`textureArtifacts`](#api-37f420426db27c88) | Property |
| [`width`](#api-1a4d42032af4c665) | Property |

## Type declaration

<a id="api-be528bafdcc0f29b"></a>
<!-- api: T:InnoEngine.Rendering.TextureAsset 710e5338ad88dd2f73c03cfe701a22c1ec22973be3626fe28d1d715d81e56bf2 -->

```csharp
public sealed class InnoEngine.Rendering.TextureAsset : InnoEngine.Assets.AssetObject, InnoEngine.Serialization.ISerializable, InnoEngine.Rendering.IRenderTextureArtifactSource
```

Represents imported texture content without owning a GPU handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Textures/TextureAsset.cs#L17).

## `#ctor`

<a id="api-4a3858a932746ec4"></a>
<!-- api: M:InnoEngine.Rendering.TextureAsset.#ctor(System.Int32,System.Int32,InnoEngine.Rendering.TextureColorSpace,System.String) 0ce731e096813b66266b27f720815237de3b0635a8ab30f67108988cd94779f1 -->

```csharp
public InnoEngine.Rendering.TextureAsset.TextureAsset(int width, int height, InnoEngine.Rendering.TextureColorSpace colorSpace, string sourceFormat)
```

Creates an immutable imported texture description.

**Parameter `width`:** The positive source pixel width.

**Parameter `height`:** The positive source pixel height.

**Parameter `colorSpace`:** The color-space interpretation used when sampling the texture.

**Parameter `sourceFormat`:** The normalized source container name without a leading period.

**Throws `System.ArgumentOutOfRangeException`:** Thrown when `width` or `height` is not positive.

**Throws `System.ArgumentException`:** Thrown when `sourceFormat` is empty or contains only white-space characters.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Textures/TextureAsset.cs#L49).

## `GetTextureArtifactReference`

<a id="api-c7a1cad9622d2e27"></a>
<!-- api: M:InnoEngine.Rendering.TextureAsset.GetTextureArtifactReference e83529594d08312b7ea48a7fc4f02f8d73cf6f9dc1c36b2cb456d23e19a1f570 -->

```csharp
public InnoEngine.Rendering.RenderTextureArtifactReference InnoEngine.Rendering.TextureAsset.GetTextureArtifactReference()
```

Creates a stable reference to this texture's current imported content.

**Returns:** A reference suitable for target compilation and generation-scoped GPU resolution.

**Throws `System.InvalidOperationException`:** Thrown when this texture has not been assigned a persistent asset identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Textures/TextureAsset.cs#L105).

## `colorSpace`

<a id="api-4108cbc6eca787b8"></a>
<!-- api: P:InnoEngine.Rendering.TextureAsset.colorSpace 370702e81b695b00356ae7edfe639df5d6a09cd92fca11e57493f355f101260c -->

```csharp
public InnoEngine.Rendering.TextureColorSpace InnoEngine.Rendering.TextureAsset.colorSpace { get; }
```

Gets the declared sample color space.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Textures/TextureAsset.cs#L80).

## `height`

<a id="api-8e10d1a885fa7358"></a>
<!-- api: P:InnoEngine.Rendering.TextureAsset.height f18ba60c29b76041fc4883f866b83ea85b3107f9cf0684df7708d2cd66649206 -->

```csharp
public int InnoEngine.Rendering.TextureAsset.height { get; }
```

Gets the source pixel height.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Textures/TextureAsset.cs#L74).

## `sourceFormat`

<a id="api-7f1c82bd9e7175c4"></a>
<!-- api: P:InnoEngine.Rendering.TextureAsset.sourceFormat c4568438c847270eb6df922e6c7ca949cdf58c46eaa758e32a9165c0f105f4d2 -->

```csharp
public string InnoEngine.Rendering.TextureAsset.sourceFormat { get; }
```

Gets the normalized source container name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Textures/TextureAsset.cs#L86).

## `textureArtifacts`

<a id="api-37f420426db27c88"></a>
<!-- api: P:InnoEngine.Rendering.TextureAsset.textureArtifacts 0eeca81b655cb2785392b02f6977c23fe0dda3e140f1ab3b1e446582ffb7229c -->

```csharp
public System.Collections.Generic.IReadOnlyList<InnoEngine.Rendering.RenderTextureArtifactSlot> InnoEngine.Rendering.TextureAsset.textureArtifacts { get; }
```

Gets the single source artifact compiled for this imported texture.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Textures/TextureAsset.cs#L91).

## `width`

<a id="api-1a4d42032af4c665"></a>
<!-- api: P:InnoEngine.Rendering.TextureAsset.width 0db15c84fbc5d9b69b77c5bd1a5858d31829b5482fd41bf9c14b6fe4d1546c9e -->

```csharp
public int InnoEngine.Rendering.TextureAsset.width { get; }
```

Gets the source pixel width.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Textures/TextureAsset.cs#L68).
