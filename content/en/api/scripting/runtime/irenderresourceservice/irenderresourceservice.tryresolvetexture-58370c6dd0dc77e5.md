---
uid: api.58370c6dd0dc77e5c91bb152dc966b6e19274bd126207679aa13a4c50b27c645
symbol: "scripting:Inno.Rendering.Runtime:M:InnoEngine.Rendering.IRenderResourceService.TryResolveTexture(InnoEngine.Rendering.TextureAsset,InnoEngine.Rendering.PersistentTextureHandle@)"
source: xml
reviewed: 3ba9800faa4c1a6f4767f61cd69880b569a565d487d8565fc93a357bfe303a5c
title: "IRenderResourceService.TryResolveTexture"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: editor-script
apiScope: Runtime
---

Resolves an imported texture into a persistent sampled texture.

**Parameter `texture`:** Imported texture asset.

**Parameter `resolvedTexture`:** Receives a generation-scoped texture handle when successful.

**Returns:** True when current or last-good texture content is usable.
