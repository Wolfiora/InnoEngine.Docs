---
uid: api.inno.core.mathematics.runtime-script.b459d9015ed5b820
symbol: "scripting:Inno.Core.Mathematics:T:InnoEngine.Mathematics.Color"
source: xml
reviewed: c90f0b5089a4eab1a5b60d98e3e0080244c339e198d48f90ab9506398f6f16f4
title: "Color"
kind: api
owners: [Inno.Core.Mathematics]
apiSurface: editor-script
apiScope: Runtime
contracts:
- manual.scripting.use-script-api
- project.inno-core-mathematics#numeric-and-layout-contract
aliases: []
---

Represents mutable RGBA channels whose constructor clamps finite inputs to \[0, 1\].

## Remarks

Direct field writes bypass constructor clamping. Keep channels finite and normalized before byte conversion. This value does not encode a color space or distinguish straight from premultiplied alpha.
