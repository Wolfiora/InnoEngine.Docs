---
uid: api.2f76375258e7ae0605ef9fcb276f2744c2bb8027c103aefd4e42666e2a7f8792
symbol: "engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.IRenderResourceService.TryResolveTextureArtifact(Inno.Rendering.Assets.RenderTextureArtifactReference,Inno.Rendering.PersistentTextureHandle@)"
source: xml
reviewed: 691712e071eb87a2abe100061afbac0f2078e8ce76f4173c1f463af49cca3f31
title: "TryResolveTextureArtifact"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: source-clr
---

Resolves one imported artifact texture into a persistent sampled texture.

**Parameter `texture`:** Stable texture artifact reference.

**Parameter `resolvedTexture`:** Receives a generation-scoped texture handle when successful.

**Returns:** `true` when current or last-good texture content is usable.
