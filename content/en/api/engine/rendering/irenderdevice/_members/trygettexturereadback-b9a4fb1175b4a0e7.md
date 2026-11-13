---
uid: api.b9a4fb1175b4a0e72c59003cc9f73aec5e49bae64d224d98a081284dec8aaa43
symbol: "engine:Inno.Rendering:M:Inno.Rendering.IRenderDevice.TryGetTextureReadback(Inno.Rendering.RenderTextureReadbackHandle,Inno.Rendering.RenderTextureReadbackResult@)"
source: xml
reviewed: 5de75707389ec18666c62aa67950f4a32a14732080c47d7115aa8e00f409bb5d
title: "TryGetTextureReadback"
kind: api
owners: [Inno.Rendering]
apiSurface: source-clr
---

Tries to complete one previously requested texture readback.

**Parameter `readback`:** Readback handle returned by `M:Inno.Rendering.IRenderDevice.BeginTextureReadback(Inno.Rendering.PersistentTextureHandle,System.Int32)`.

**Parameter `result`:** Receives immutable CPU-visible bytes when complete.

**Returns:** `true` when the result completed and was consumed.
