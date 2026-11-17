---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.9c07ed1aa0141259d01ce5679e3643aa2b9401ef6c0563ac376ee76205c296e2
symbol: engine:Inno.Core.Mathematics:M:Inno.Core.Mathematics.Color.ToUInt32ARGB
title: Color.ToUInt32ARGB
kind: api
owners:
- Inno.Core.Mathematics
apiSurface: source-clr
reviewed: 5d5c935dd8f729ab045948edeb18ddba1ccfc688fed7d979ab476413c2dbfeb1
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
