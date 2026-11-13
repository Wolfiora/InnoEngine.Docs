---
uid: api.58370c6dd0dc77e5c91bb152dc966b6e19274bd126207679aa13a4c50b27c645
symbol: "scripting:Inno.Rendering.Runtime:M:InnoEngine.Rendering.IRenderResourceService.TryResolveTexture(InnoEngine.Rendering.TextureAsset,InnoEngine.Rendering.PersistentTextureHandle@)"
source: xml
reviewed: efea10debc064c34b85cb2efb5717be7a6f8dec2363a291f4abe230818288b43
title: "TryResolveTexture"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: editor-script
apiScope: Runtime
---

Resolves an imported texture into a persistent sampled texture.

**Parameter `texture`:** Imported texture asset.

**Parameter `resolvedTexture`:** Receives a generation-scoped texture handle when successful.

**Returns:** True when current or last-good texture content is usable.
