---
uid: api.f7f694cf9afed5633fea8998eccaf740415985197321b9fd4e20c2d9689c8650
symbol: "engine:Inno.Rendering:M:Inno.Rendering.RenderDevice.CreatePersistentTextureHandle(System.UInt64,System.UInt32)"
source: xml
reviewed: 95d223c31b0aa3145b04a8f8213f9e6010405a8e7d9e4887e31abf6a5d745b4d
title: "RenderDevice.CreatePersistentTextureHandle"
kind: api
owners: [Inno.Rendering]
apiSurface: source-clr
---

Encodes a persistent texture identity into a backend-neutral handle.

## Parameters

**Parameter `value`:** The backend-owned non-zero texture identity.

**Parameter `generation`:** The device generation that owns the texture.

## Returns

An opaque texture handle suitable for the public render-device contract.
