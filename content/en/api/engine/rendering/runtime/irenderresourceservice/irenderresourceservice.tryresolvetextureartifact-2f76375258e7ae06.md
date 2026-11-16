---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.2f76375258e7ae0605ef9fcb276f2744c2bb8027c103aefd4e42666e2a7f8792
symbol: engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.IRenderResourceService.TryResolveTextureArtifact(Inno.Rendering.Assets.RenderTextureArtifactReference,Inno.Rendering.PersistentTextureHandle@)
title: IRenderResourceService.TryResolveTextureArtifact
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: source-clr
reviewed: 601e6c5e58ce6c82b63de5b679b3a5fe7fc83ee46c6d5e3b5a1ece05dae5b1e1
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `texture`:** Stable texture artifact reference.

**Parameter `resolvedTexture`:** Receives a generation-scoped texture handle when successful.

## Returns

`true` when current or last-good texture content is usable.
