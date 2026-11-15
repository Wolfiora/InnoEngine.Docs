---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.2f76375258e7ae0605ef9fcb276f2744c2bb8027c103aefd4e42666e2a7f8792
symbol: engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.IRenderResourceService.TryResolveTextureArtifact(Inno.Rendering.Assets.RenderTextureArtifactReference,Inno.Rendering.PersistentTextureHandle@)
title: IRenderResourceService.TryResolveTextureArtifact
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: source-clr
reviewed: c6b6be4bf8ec136797f36ea6f9bd3252eaa756212b4dfc1385ab73814a60f48e

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Resolves one imported artifact texture into a persistent sampled texture.

## Parameters

**Parameter `texture`:** Stable texture artifact reference.

**Parameter `resolvedTexture`:** Receives a generation-scoped texture handle when successful.

## Returns

`true` when current or last-good texture content is usable.
