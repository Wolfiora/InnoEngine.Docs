---
uid: api.6b7ef720639a1a35918feb7a554a9631bff9c518ed748f94f94ccbe00eb22cf4
symbol: "engine:Inno.Rendering:M:Inno.Rendering.RenderRasterState.#ctor(Inno.Rendering.RenderCullMode,Inno.Rendering.RenderFrontFace,Inno.Rendering.RenderDepthCompare,System.Boolean,Inno.Rendering.RenderBlendState,System.Byte,System.Boolean,Inno.Rendering.RenderPrimitiveTopology)"
source: xml
reviewed: 9105e4d1e952ef1ebc319594b80c0e15117b69b54656d1c835af48c59f6b39fd
title: "Constructor"
kind: api
owners: [Inno.Rendering]
apiSurface: source-clr
---

Creates a complete immutable raster configuration without relying on init-only setters.

**Parameter `cull`:** Face culling mode.

**Parameter `frontFace`:** Winding order interpreted as the front face.

**Parameter `depthCompare`:** Depth comparison.

**Parameter `depthWrite`:** Whether accepted fragments update depth.

**Parameter `blend`:** Independent RGB and alpha blending.

**Parameter `colorWriteMask`:** Four-bit RGBA write mask.

**Parameter `multisampling`:** Whether multisample rasterization is enabled.

**Parameter `topology`:** Primitive assembly for subsequent draw commands.
