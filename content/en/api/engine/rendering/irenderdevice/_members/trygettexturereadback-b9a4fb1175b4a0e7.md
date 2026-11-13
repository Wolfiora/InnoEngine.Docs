---
uid: api.b9a4fb1175b4a0e72c59003cc9f73aec5e49bae64d224d98a081284dec8aaa43
symbol: "engine:Inno.Rendering:M:Inno.Rendering.IRenderDevice.TryGetTextureReadback(Inno.Rendering.RenderTextureReadbackHandle,Inno.Rendering.RenderTextureReadbackResult@)"
source: xml
reviewed: 3e39042d7cbcd8afda611798f9abbdf2cf3e92559ef38e5cc8d7397aa6365cb4
title: "TryGetTextureReadback"
kind: api
owners: [Inno.Rendering]
apiSurface: source-clr
---

Tries to complete one previously requested texture readback.

**Parameter `readback`:** Readback handle returned by `M:Inno.Rendering.IRenderDevice.BeginTextureReadback(Inno.Rendering.PersistentTextureHandle,System.Int32)`.

**Parameter `result`:** Receives immutable CPU-visible bytes when complete.

**Returns:** `true` when the result completed and was consumed.
