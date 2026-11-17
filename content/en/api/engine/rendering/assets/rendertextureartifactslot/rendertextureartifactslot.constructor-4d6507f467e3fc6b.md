---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.4d6507f467e3fc6ba913721b023b9ef0d3c6947e4410a0143860fac4f5888517
symbol: engine:Inno.Rendering.Assets:M:Inno.Rendering.Assets.RenderTextureArtifactSlot.#ctor(System.String,System.String,Inno.Rendering.Assets.TextureColorSpace)
title: RenderTextureArtifactSlot.Constructor
kind: api
owners:
- Inno.Rendering.Assets
apiSurface: source-clr
reviewed: d4cf578214f2722c8ada7d4301186914b2635ede1fcef00c7bce54c9af444c56
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `id`:** Asset-local stable slot identifier.

**Parameter `sourceOutputName`:** Named source artifact written by the owning asset importer.

**Parameter `colorSpace`:** Sampling color-space interpretation used by the target compiler and GPU resource.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `id` or `sourceOutputName` is empty.
