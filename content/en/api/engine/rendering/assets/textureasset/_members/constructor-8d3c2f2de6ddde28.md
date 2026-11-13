---
uid: api.8d3c2f2de6ddde28d2d8a64c157e6caff50f9ae7b0f26e505e9417889d9df4a8
symbol: "engine:Inno.Rendering.Assets:M:Inno.Rendering.Assets.TextureAsset.#ctor(System.Int32,System.Int32,Inno.Rendering.Assets.TextureColorSpace,System.String)"
source: xml
reviewed: 37f111dba800f0eb03a78d8219ef831a409cf24e64c779e94582251565b8a524
title: "Constructor"
kind: api
owners: [Inno.Rendering.Assets]
apiSurface: source-clr
---

Creates an immutable imported texture description.

**Parameter `width`:** The positive source pixel width.

**Parameter `height`:** The positive source pixel height.

**Parameter `colorSpace`:** The color-space interpretation used when sampling the texture.

**Parameter `sourceFormat`:** The normalized source container name without a leading period.

**Exception `T:System.ArgumentOutOfRangeException`:** Thrown when `width` or `height` is not positive.

**Exception `T:System.ArgumentException`:** Thrown when `sourceFormat` is empty or contains only white-space characters.
