---
uid: api.56432f25d683f1d849a6384404302461c3616d4e23409e9ff676932f555a17ec
symbol: "scripting:Inno.Rendering:M:InnoEngine.Rendering.RenderStencilState.#ctor(System.Boolean,System.Byte,System.Byte,System.Byte,InnoEngine.Rendering.RenderStencilFaceState,InnoEngine.Rendering.RenderStencilFaceState)"
source: xml
reviewed: d96dd1c73c8315ad18478acda7e3df6cbcc842da155b25e85173fee8895f8e1d
title: "RenderStencilState.Constructor"
kind: api
owners: [Inno.Rendering]
apiSurface: editor-script
apiScope: Runtime
---

Creates a complete immutable stencil configuration without relying on init-only setters.

## Parameters

**Parameter `enabled`:** Whether stencil testing and updates are active.

**Parameter `reference`:** Eight-bit stencil reference value.

**Parameter `readMask`:** Mask applied while reading stored stencil.

**Parameter `writeMask`:** Mask applied while writing stencil.

**Parameter `front`:** Front-face stencil behavior.

**Parameter `back`:** Back-face stencil behavior.
