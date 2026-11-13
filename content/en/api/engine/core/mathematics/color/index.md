---
uid: api.inno.core.mathematics.9fd8bbef3007f39b
symbol: "engine:Inno.Core.Mathematics:T:Inno.Core.Mathematics.Color"
source: xml
reviewed: 522a5a90394a063a254d9906f34c13df16f9596ae05ca53571620af60fd86f82
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
