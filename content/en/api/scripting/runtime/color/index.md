---
uid: api.inno.core.mathematics.runtime-script.b459d9015ed5b820
symbol: "scripting:Inno.Core.Mathematics:T:InnoEngine.Mathematics.Color"
source: xml
reviewed: 278b22bb279934ee701b0bc48fbe2fce41b47271f22fe79932c3bcb5d44ba251
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
