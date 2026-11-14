---
uid: api.4d6507f467e3fc6ba913721b023b9ef0d3c6947e4410a0143860fac4f5888517
symbol: "engine:Inno.Rendering.Assets:M:Inno.Rendering.Assets.RenderTextureArtifactSlot.#ctor(System.String,System.String,Inno.Rendering.Assets.TextureColorSpace)"
source: xml
reviewed: 179808038ef70fa86627ac4ef29b9a8b57bf81634190beadda53e34f27a02aeb
title: "RenderTextureArtifactSlot.Constructor"
kind: api
owners: [Inno.Rendering.Assets]
apiSurface: source-clr
---

Creates one stable texture slot declaration.

**Parameter `id`:** Asset-local stable slot identifier.

**Parameter `sourceOutputName`:** Named source artifact written by the owning asset importer.

**Parameter `colorSpace`:** Sampling color-space interpretation used by the target compiler and GPU resource.

**Exception `T:System.ArgumentException`:** Thrown when `id` or `sourceOutputName` is empty.
