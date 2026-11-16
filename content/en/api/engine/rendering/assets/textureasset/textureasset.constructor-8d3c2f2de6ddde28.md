---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.8d3c2f2de6ddde28d2d8a64c157e6caff50f9ae7b0f26e505e9417889d9df4a8
symbol: engine:Inno.Rendering.Assets:M:Inno.Rendering.Assets.TextureAsset.#ctor(System.Int32,System.Int32,Inno.Rendering.Assets.TextureColorSpace,System.String)
title: TextureAsset.Constructor
kind: api
owners:
- Inno.Rendering.Assets
apiSurface: source-clr
reviewed: cc369db6d6a523a64a18c57ebe4ff00e4550570f79925810b9001cdcd4ab2f2b
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `width`:** The positive source pixel width.

**Parameter `height`:** The positive source pixel height.

**Parameter `colorSpace`:** The color-space interpretation used when sampling the texture.

**Parameter `sourceFormat`:** The normalized source container name without a leading period.

## Exceptions

**Exception `T:System.ArgumentOutOfRangeException`:** Thrown when `width` or `height` is not positive.

**Exception `T:System.ArgumentException`:** Thrown when `sourceFormat` is empty or contains only white-space characters.
