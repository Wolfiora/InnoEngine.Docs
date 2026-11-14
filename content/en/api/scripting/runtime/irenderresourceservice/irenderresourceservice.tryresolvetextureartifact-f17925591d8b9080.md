---
uid: api.f17925591d8b90800c4d4bccb54e8df7391aa28c720ac893ed0af3df095a9d3b
symbol: "scripting:Inno.Rendering.Runtime:M:InnoEngine.Rendering.IRenderResourceService.TryResolveTextureArtifact(InnoEngine.Rendering.RenderTextureArtifactReference,InnoEngine.Rendering.PersistentTextureHandle@)"
source: xml
reviewed: 2f9e2a766e7157a183c47fc821b0f8bd645ef644ab1bb0f1f4ed548f1e4d4cb3
title: "IRenderResourceService.TryResolveTextureArtifact"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: editor-script
apiScope: Runtime
---

Resolves one imported artifact texture into a persistent sampled texture.

**Parameter `texture`:** Stable texture artifact reference.

**Parameter `resolvedTexture`:** Receives a generation-scoped texture handle when successful.

**Returns:** `true` when current or last-good texture content is usable.
