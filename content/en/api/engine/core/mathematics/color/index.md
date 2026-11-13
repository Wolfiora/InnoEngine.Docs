---
uid: api.inno.core.mathematics.9fd8bbef3007f39b
symbol: "engine:Inno.Core.Mathematics:T:Inno.Core.Mathematics.Color"
source: xml
reviewed: f7a12b9cd6be485d9c51af15577f96182968da66abbc4ccff13e52c5c38a7b48
title: "Color"
kind: api
owners: [Inno.Core.Mathematics]
apiSurface: source-clr
contracts:
- project.inno-core-mathematics#numeric-and-layout-contract
aliases: []
---

Represents mutable RGBA channels whose constructor clamps finite inputs to \[0, 1\].

## Remarks

Direct field writes bypass constructor clamping. Keep channels finite and normalized before byte conversion. This value does not encode a color space or distinguish straight from premultiplied alpha.
