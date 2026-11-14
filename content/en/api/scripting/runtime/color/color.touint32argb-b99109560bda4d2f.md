---
uid: api.b99109560bda4d2f60e3d06a2bd2bef7c4755e92bba36b2b412cdef0f4439884
symbol: "scripting:Inno.Core.Mathematics:M:InnoEngine.Mathematics.Color.ToUInt32ARGB"
source: xml
reviewed: 40fc2b08314c6c8d6a9a593e6f6ba530b342260f059e4f7c4da9b3d665efc273
title: "Color.ToUInt32ARGB"
kind: api
owners: [Inno.Core.Mathematics]
apiSurface: editor-script
apiScope: Runtime
---

Packs normalized channels into the existing unsigned 0xAABBGGRR representation.

**Returns:** Alpha in bits 24-31, blue in 16-23, green in 8-15 and red in 0-7.

## Remarks

Despite this member's name, the current numeric layout is ABGR. It yields RGBA bytes on a little-endian host. Channels must already be finite and normalized; no color-space conversion or premultiplication is performed.
