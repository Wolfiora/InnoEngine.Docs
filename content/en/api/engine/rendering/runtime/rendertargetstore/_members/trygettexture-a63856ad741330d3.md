---
uid: api.a63856ad741330d37dd51404e472756637c2442623d7b10e2be2459cc285d08e
symbol: "engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.RenderTargetStore.TryGetTexture(Inno.Rendering.RenderTexture,Inno.Rendering.PersistentTextureHandle@)"
source: xml
reviewed: 9eab78f5738603dfed64f2c89effccd233bc23f3f884a2ab39a908271200d683
title: "TryGetTexture"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: source-clr
---

Tries to get the current opaque device texture for UI presentation.

**Parameter `target`:** Persistent target description.

**Parameter `texture`:** Receives a backend-neutral persistent handle.

**Returns:** `true` after a graph write to the current target revision has been recorded successfully.
