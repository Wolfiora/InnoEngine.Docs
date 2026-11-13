---
uid: api.6da9a98ddc75b938f145d80334707bfd9e17068987ffc22d2c38d3f20270b535
symbol: "engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.IRenderResourceService.TryResolveTexture(Inno.Rendering.Assets.TextureAsset,Inno.Rendering.PersistentTextureHandle@)"
source: xml
reviewed: 4b9665cb2d0a9354caaeea10fa0f1c17164e6b9eebb57a1da31a945161086d83
title: "TryResolveTexture"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: source-clr
---

Resolves an imported texture into a persistent sampled texture.

**Parameter `texture`:** Imported texture asset.

**Parameter `resolvedTexture`:** Receives a generation-scoped texture handle when successful.

**Returns:** True when current or last-good texture content is usable.
