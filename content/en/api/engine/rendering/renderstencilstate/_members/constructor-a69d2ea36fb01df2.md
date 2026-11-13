---
uid: api.a69d2ea36fb01df2fac170b9e3dd4405d84eecbc03ee7c505e5bbdb68c575359
symbol: "engine:Inno.Rendering:M:Inno.Rendering.RenderStencilState.#ctor(System.Boolean,System.Byte,System.Byte,System.Byte,Inno.Rendering.RenderStencilFaceState,Inno.Rendering.RenderStencilFaceState)"
source: xml
reviewed: 6b75c80a2ea382e0815c614bf677b367c30ac013546ddd48cd23b7f7ddcaa1c1
title: "Constructor"
kind: api
owners: [Inno.Rendering]
apiSurface: source-clr
---

Creates a complete immutable stencil configuration without relying on init-only setters.

**Parameter `enabled`:** Whether stencil testing and updates are active.

**Parameter `reference`:** Eight-bit stencil reference value.

**Parameter `readMask`:** Mask applied while reading stored stencil.

**Parameter `writeMask`:** Mask applied while writing stencil.

**Parameter `front`:** Front-face stencil behavior.

**Parameter `back`:** Back-face stencil behavior.
