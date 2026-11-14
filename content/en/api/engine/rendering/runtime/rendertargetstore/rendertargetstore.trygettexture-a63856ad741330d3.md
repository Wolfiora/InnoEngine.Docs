---
uid: api.a63856ad741330d37dd51404e472756637c2442623d7b10e2be2459cc285d08e
symbol: "engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.RenderTargetStore.TryGetTexture(Inno.Rendering.RenderTexture,Inno.Rendering.PersistentTextureHandle@)"
source: xml
reviewed: 5c250c2be701465afa6fd41b864255f8e77e8e7e0d998fc6a0830b0b98635f1f
title: "RenderTargetStore.TryGetTexture"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: source-clr
---

Tries to get the current opaque device texture for UI presentation.

**Parameter `target`:** Persistent target description.

**Parameter `texture`:** Receives a backend-neutral persistent handle.

**Returns:** `true` after a graph write to the current target revision has been recorded successfully.
