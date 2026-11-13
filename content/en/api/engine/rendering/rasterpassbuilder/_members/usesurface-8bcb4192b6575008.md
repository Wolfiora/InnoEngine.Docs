---
uid: api.8bcb4192b6575008b8c24075dca8b88ab3b730a6f7a4ac697b1a003acfd96cc5
symbol: "engine:Inno.Rendering:M:Inno.Rendering.RasterPassBuilder.UseSurface(Inno.Rendering.RenderSurfaceHandle)"
source: xml
reviewed: feb15ba802a3bc591e2290bcfc58bb87948659a66a580e835a1ab9885ec8ae7b
title: "UseSurface"
kind: api
owners: [Inno.Rendering]
apiSurface: source-clr
---

Directs this pass to a persistent presentation surface instead of the primary backbuffer.

**Parameter `surface`:** Surface owned by the active graphics-device generation.

**Returns:** This builder for fluent declarations.

**Exception `T:System.ArgumentException`:** Thrown when `surface` is invalid.
