---
title: "TextureColorSpace"
description: "Reference for TextureColorSpace in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.87ef08dfbb58e7ca
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: source-clr
contracts:
  - project.inno-rendering-assets
---
# `TextureColorSpace`

This reference describes `TextureColorSpace` in `Inno.Rendering.Assets`. Read the [shared contract](../../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Linear`](#api-4451a1a91afcaaa5) | Field |
| [`Srgb`](#api-abb6a9185e56f99a) | Field |

## Type declaration

<a id="api-87ef08dfbb58e7ca"></a>
<!-- api: T:Inno.Rendering.Assets.TextureColorSpace ffeab6f240857a04f968733d97d1bb34c9e922c3b61f485d68bfbf94293ed94b -->

```csharp
public enum Inno.Rendering.Assets.TextureColorSpace : int
```

Selects how texture samples are decoded for shader use.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Textures/TextureColorSpace.cs#L17).

## `Linear`

<a id="api-4451a1a91afcaaa5"></a>
<!-- api: F:Inno.Rendering.Assets.TextureColorSpace.Linear 81fde6c8bf97c304616240cba10711107285b66599f41d43746111e45a79b5d8 -->

```csharp
Inno.Rendering.Assets.TextureColorSpace.Linear = 0
```

Samples are interpreted as linear values.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Textures/TextureColorSpace.cs#L22).

## `Srgb`

<a id="api-abb6a9185e56f99a"></a>
<!-- api: F:Inno.Rendering.Assets.TextureColorSpace.Srgb 0c9d7567d0865aa90770a0e71a2c339b8a3e91a3861c059cd3db19e6f0bc9005 -->

```csharp
Inno.Rendering.Assets.TextureColorSpace.Srgb = 1
```

Color samples are decoded from sRGB at sampling time.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Textures/TextureColorSpace.cs#L26).
