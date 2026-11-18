---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.b99109560bda4d2f60e3d06a2bd2bef7c4755e92bba36b2b412cdef0f4439884
symbol: scripting:Inno.Core.Mathematics:M:InnoEngine.Mathematics.Color.ToUInt32ARGB
title: Color.ToUInt32ARGB
kind: api
owners:
- Inno.Core.Mathematics
apiSurface: editor-script
sourceFingerprint: 5054c02763209163eee124df63bf79f65656678b6864d34c6d5a1a3542a6f74b
apiScope: Runtime
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Returns

Alpha in bits 24-31, blue in 16-23, green in 8-15 and red in 0-7.

## Remarks

Despite this member's name, the current numeric layout is ABGR. It yields RGBA bytes on a little-endian host. Channels must already be finite and normalized; no color-space conversion or premultiplication is performed.
