---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.25a0c12a8105601c33f96ee143438d3fd9e2690c6b951d145280c348bbbe4941
symbol: scripting:Inno.Rendering.Assets:M:InnoEngine.Rendering.TextureAsset.#ctor(System.Int32,System.Int32,InnoEngine.Rendering.TextureColorSpace,System.String)
title: TextureAsset.Constructor
kind: api
owners:
- Inno.Rendering.Assets
apiSurface: editor-script
sourceFingerprint: 204d7444ae6ae9d1346d056913bc505dd8065a512debd3443937d0082d6f6c5d
apiScope: Runtime
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
