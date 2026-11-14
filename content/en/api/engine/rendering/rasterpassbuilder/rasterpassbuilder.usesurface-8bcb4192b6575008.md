---
uid: api.8bcb4192b6575008b8c24075dca8b88ab3b730a6f7a4ac697b1a003acfd96cc5
symbol: "engine:Inno.Rendering:M:Inno.Rendering.RasterPassBuilder.UseSurface(Inno.Rendering.RenderSurfaceHandle)"
source: xml
reviewed: 30605f7c82aaa720991c302fce91c373d179aa28e3af2a423ee7ea67d6927965
title: "RasterPassBuilder.UseSurface"
kind: api
owners: [Inno.Rendering]
apiSurface: source-clr
---

Directs this pass to a persistent presentation surface instead of the primary backbuffer.

## Parameters

**Parameter `surface`:** Surface owned by the active graphics-device generation.

## Returns

This builder for fluent declarations.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `surface` is invalid.
