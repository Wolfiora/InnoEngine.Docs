---
uid: api.25a0c12a8105601c33f96ee143438d3fd9e2690c6b951d145280c348bbbe4941
symbol: "scripting:Inno.Rendering.Assets:M:InnoEngine.Rendering.TextureAsset.#ctor(System.Int32,System.Int32,InnoEngine.Rendering.TextureColorSpace,System.String)"
source: xml
reviewed: 847e960f479926c11d6366ff242ba943ea7cd6bb2f9bb6d1a6f700ab13a1efad
title: "Constructor"
kind: api
owners: [Inno.Rendering.Assets]
apiSurface: editor-script
apiScope: Runtime
---

Creates an immutable imported texture description.

**Parameter `width`:** The positive source pixel width.

**Parameter `height`:** The positive source pixel height.

**Parameter `colorSpace`:** The color-space interpretation used when sampling the texture.

**Parameter `sourceFormat`:** The normalized source container name without a leading period.

**Exception `T:System.ArgumentOutOfRangeException`:** Thrown when `width` or `height` is not positive.

**Exception `T:System.ArgumentException`:** Thrown when `sourceFormat` is empty or contains only white-space characters.
