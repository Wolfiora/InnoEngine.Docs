---
uid: api.b99109560bda4d2f60e3d06a2bd2bef7c4755e92bba36b2b412cdef0f4439884
symbol: "scripting:Inno.Core.Mathematics:M:InnoEngine.Mathematics.Color.ToUInt32ARGB"
source: xml
reviewed: 4c5b6a34340cbcd929bd1f8eb0233dc61cfbae9ffc9939aed1e3400916a33638
title: "ToUInt32ARGB"
kind: api
owners: [Inno.Core.Mathematics]
apiSurface: editor-script
apiScope: Runtime
---

Packs normalized channels into the existing unsigned 0xAABBGGRR representation.

**Returns:** Alpha in bits 24-31, blue in 16-23, green in 8-15 and red in 0-7.

## Remarks

Despite this member's name, the current numeric layout is ABGR. It yields RGBA bytes on a little-endian host. Channels must already be finite and normalized; no color-space conversion or premultiplication is performed.
