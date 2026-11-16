---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.7c86026965ad60e9011e4bf76d0850ee8cdf16de8e0727375522f008799246e7
symbol: engine:Inno.Rendering:M:Inno.Rendering.IRenderDevice.UpdateTexture(Inno.Rendering.PersistentTextureHandle,System.ReadOnlySpan{System.Byte},System.Int32,System.Int32)
title: IRenderDevice.UpdateTexture
kind: api
owners:
- Inno.Rendering
apiSurface: source-clr
reviewed: 3d09575372a80a3cfef8bfb364c61c9bf560f0c76fe9fd8d43fdad28c21164a9
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
