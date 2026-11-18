---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.7c86026965ad60e9011e4bf76d0850ee8cdf16de8e0727375522f008799246e7
symbol: engine:Inno.Rendering:M:Inno.Rendering.IRenderDevice.UpdateTexture(Inno.Rendering.PersistentTextureHandle,System.ReadOnlySpan{System.Byte},System.Int32,System.Int32)
title: IRenderDevice.UpdateTexture
kind: api
owners:
- Inno.Rendering
apiSurface: source-clr
sourceFingerprint: 5f1b6687909534d5c369b81ba8610b82e915c299f730f4ba57f6dd518543c8cc
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `texture`:** Texture owned by this device generation.

**Parameter `data`:** Tightly packed complete subresource bytes.

**Parameter `mipLevel`:** Zero-based mip level.

**Parameter `arrayLayer`:** Zero-based 2D array layer, 3D Z slice, or flattened cubemap face using cube-layer \* 6 + face.
