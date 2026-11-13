---
uid: api.a32358d03c594e1f8c8e579036c24803e10a74ba4a8fd3ecfe1951f9a0e8b135
symbol: "scripting:Inno.Rendering:M:InnoEngine.Rendering.RenderRasterState.#ctor(InnoEngine.Rendering.RenderCullMode,InnoEngine.Rendering.RenderFrontFace,InnoEngine.Rendering.RenderDepthCompare,System.Boolean,InnoEngine.Rendering.RenderBlendState,System.Byte,System.Boolean,InnoEngine.Rendering.RenderPrimitiveTopology)"
source: xml
reviewed: 05c760a4d3686833ffc9ec1f4587669b8f334b96747d54a178963b520f3650d8
title: "Constructor"
kind: api
owners: [Inno.Rendering]
apiSurface: editor-script
apiScope: Runtime
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
