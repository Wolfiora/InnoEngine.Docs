---
uid: api.a69d2ea36fb01df2fac170b9e3dd4405d84eecbc03ee7c505e5bbdb68c575359
symbol: "engine:Inno.Rendering:M:Inno.Rendering.RenderStencilState.#ctor(System.Boolean,System.Byte,System.Byte,System.Byte,Inno.Rendering.RenderStencilFaceState,Inno.Rendering.RenderStencilFaceState)"
source: xml
reviewed: 72dd2abd3c53f7668e530e2bd3816ab3721f2e8e212fa48f3a38455363e535f1
title: "RenderStencilState.Constructor"
kind: api
owners: [Inno.Rendering]
apiSurface: source-clr
---

Creates a complete immutable stencil configuration without relying on init-only setters.

## Parameters

**Parameter `enabled`:** Whether stencil testing and updates are active.

**Parameter `reference`:** Eight-bit stencil reference value.

**Parameter `readMask`:** Mask applied while reading stored stencil.

**Parameter `writeMask`:** Mask applied while writing stencil.

**Parameter `front`:** Front-face stencil behavior.

**Parameter `back`:** Back-face stencil behavior.
