---
uid: api.4d6507f467e3fc6ba913721b023b9ef0d3c6947e4410a0143860fac4f5888517
symbol: "engine:Inno.Rendering.Assets:M:Inno.Rendering.Assets.RenderTextureArtifactSlot.#ctor(System.String,System.String,Inno.Rendering.Assets.TextureColorSpace)"
source: xml
reviewed: e901cd1664c5e7cdda18f7ad3dbda5edf3b99bf566993cfa0f23b65a7177b1c7
title: "Constructor"
kind: api
owners: [Inno.Rendering.Assets]
apiSurface: source-clr
---

Creates one stable texture slot declaration.

**Parameter `id`:** Asset-local stable slot identifier.

**Parameter `sourceOutputName`:** Named source artifact written by the owning asset importer.

**Parameter `colorSpace`:** Sampling color-space interpretation used by the target compiler and GPU resource.

**Exception `T:System.ArgumentException`:** Thrown when `id` or `sourceOutputName` is empty.
