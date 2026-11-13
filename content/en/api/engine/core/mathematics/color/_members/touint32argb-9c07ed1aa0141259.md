---
uid: api.9c07ed1aa0141259d01ce5679e3643aa2b9401ef6c0563ac376ee76205c296e2
symbol: "engine:Inno.Core.Mathematics:M:Inno.Core.Mathematics.Color.ToUInt32ARGB"
source: xml
reviewed: 2d0b55edbc300f27ca0ddff615fcf114e5432327f088fc9e87db2d263707d0aa
title: "ToUInt32ARGB"
kind: api
owners: [Inno.Core.Mathematics]
apiSurface: source-clr
---

Packs normalized channels into the existing unsigned 0xAABBGGRR representation.

**Returns:** Alpha in bits 24-31, blue in 16-23, green in 8-15 and red in 0-7.

## Remarks

Despite this member's name, the current numeric layout is ABGR. It yields RGBA bytes on a little-endian host. Channels must already be finite and normalized; no color-space conversion or premultiplication is performed.
