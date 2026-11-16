---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.b9a4fb1175b4a0e72c59003cc9f73aec5e49bae64d224d98a081284dec8aaa43
symbol: engine:Inno.Rendering:M:Inno.Rendering.IRenderDevice.TryGetTextureReadback(Inno.Rendering.RenderTextureReadbackHandle,Inno.Rendering.RenderTextureReadbackResult@)
title: IRenderDevice.TryGetTextureReadback
kind: api
owners:
- Inno.Rendering
apiSurface: source-clr
reviewed: 9b18730b6c392e270a31a1d3659142e5a84f6b628301b31bcbf37ec8edaa39d9
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `readback`:** Readback handle returned by `M:Inno.Rendering.IRenderDevice.BeginTextureReadback(Inno.Rendering.PersistentTextureHandle,System.Int32)`.

**Parameter `result`:** Receives immutable CPU-visible bytes when complete.

## Returns

`true` when the result completed and was consumed.
