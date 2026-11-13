---
uid: api.f7f694cf9afed5633fea8998eccaf740415985197321b9fd4e20c2d9689c8650
symbol: "engine:Inno.Rendering:M:Inno.Rendering.RenderDevice.CreatePersistentTextureHandle(System.UInt64,System.UInt32)"
source: xml
reviewed: 593e6c275e5158d3bf2a2b79da50ae98cd49752007f849995a977513a318c35a
title: "CreatePersistentTextureHandle"
kind: api
owners: [Inno.Rendering]
apiSurface: source-clr
---

Encodes a persistent texture identity into a backend-neutral handle.

**Parameter `value`:** The backend-owned non-zero texture identity.

**Parameter `generation`:** The device generation that owns the texture.

**Returns:** An opaque texture handle suitable for the public render-device contract.
