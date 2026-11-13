---
uid: api.f17925591d8b90800c4d4bccb54e8df7391aa28c720ac893ed0af3df095a9d3b
symbol: "scripting:Inno.Rendering.Runtime:M:InnoEngine.Rendering.IRenderResourceService.TryResolveTextureArtifact(InnoEngine.Rendering.RenderTextureArtifactReference,InnoEngine.Rendering.PersistentTextureHandle@)"
source: xml
reviewed: 374d5e1a57ccd1f430c68be356f9a766dba42fcfd5341ff46a16285ef63c91c8
title: "TryResolveTextureArtifact"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: editor-script
apiScope: Runtime
---

Resolves one imported artifact texture into a persistent sampled texture.

**Parameter `texture`:** Stable texture artifact reference.

**Parameter `resolvedTexture`:** Receives a generation-scoped texture handle when successful.

**Returns:** `true` when current or last-good texture content is usable.
