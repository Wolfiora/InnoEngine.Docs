---
uid: api.7116952205b960a50f311e4a43375a9f707b7648daf5d210044d1b6bd83c169c
symbol: "engine:Inno.Rendering:M:Inno.Rendering.RenderDevice.CreateRenderTextureReadbackHandle(System.UInt64,System.UInt32)"
source: xml
reviewed: 02c88b3e9c8034c921f6de6234e646e25fd0a60998b102faf2da738e40c3b216
title: "CreateRenderTextureReadbackHandle"
kind: api
owners: [Inno.Rendering]
apiSurface: source-clr
---

Encodes a texture-readback identity into a backend-neutral handle.

**Parameter `value`:** The backend-owned non-zero readback identity.

**Parameter `generation`:** The device generation that owns the readback.

**Returns:** An opaque texture-readback handle.
